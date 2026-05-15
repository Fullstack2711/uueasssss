import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function getCountry(): string | null {
  return getRequestHeader("x-vercel-ip-country") || getRequestHeader("x-country") || null;
}

export const trackVisit = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        path: z.string().min(1).max(500),
        referrer: z.string().max(1000).optional().nullable(),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const country = getCountry();
    const ua = getRequestHeader("user-agent")?.slice(0, 500) || null;
    await supabaseAdmin.from("site_visits").insert({
      path: data.path,
      country,
      user_agent: ua,
      referrer: data.referrer ?? null,
    });
    return { ok: true };
  });

export const trackClick = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        button_id: z.string().min(1).max(100),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const country = getCountry();
    await supabaseAdmin.from("button_clicks").insert({
      button_id: data.button_id,
      country,
    });
    return { ok: true };
  });

export const getAnalytics = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: roleRow } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin")
      .maybeSingle();
    const isAdmin = !!roleRow;
    if (!isAdmin) throw new Error("Not authorized");
    const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const [visitsRes, clicksRes, byCountryRes, byDayRes, recentRes] = await Promise.all([
      supabaseAdmin.from("site_visits").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("button_clicks").select("button_id").eq("button_id", "visit_platform"),
      supabaseAdmin
        .from("site_visits")
        .select("country")
        .gte("created_at", since)
        .not("country", "is", null),
      supabaseAdmin.from("site_visits").select("created_at").gte("created_at", since),
      supabaseAdmin
        .from("site_visits")
        .select("path, country, created_at, referrer")
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

    const totalVisits = visitsRes.count ?? 0;
    const platformClicks = clicksRes.data?.length ?? 0;

    const countryMap = new Map<string, number>();
    for (const r of byCountryRes.data ?? []) {
      const c = (r as { country: string | null }).country ?? "??";
      countryMap.set(c, (countryMap.get(c) ?? 0) + 1);
    }
    const byCountry = Array.from(countryMap.entries())
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const dayMap = new Map<string, number>();
    for (const r of byDayRes.data ?? []) {
      const day = (r as { created_at: string }).created_at.slice(0, 10);
      dayMap.set(day, (dayMap.get(day) ?? 0) + 1);
    }
    const byDay = Array.from(dayMap.entries())
      .map(([day, count]) => ({ day, count }))
      .sort((a, b) => a.day.localeCompare(b.day));

    return {
      totalVisits,
      platformClicks,
      byCountry,
      byDay,
      recent: recentRes.data ?? [],
      isAdmin,
    };
  });
