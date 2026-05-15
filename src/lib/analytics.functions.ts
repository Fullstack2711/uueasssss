import { supabase } from "@/integrations/supabase/client";

type VisitRow = {
  path: string;
  country: string | null;
  created_at: string;
  referrer: string | null;
};

export type AnalyticsData = {
  totalVisits: number;
  platformClicks: number;
  byCountry: Array<{ country: string; count: number }>;
  byDay: Array<{ day: string; count: number }>;
  recent: VisitRow[];
  isAdmin: boolean;
};

export async function trackVisit({ path, referrer }: { path: string; referrer?: string | null }) {
  const userAgent = typeof navigator === "undefined" ? null : navigator.userAgent.slice(0, 500);
  const { error } = await supabase.from("site_visits").insert({
    path,
    referrer: referrer ?? null,
    user_agent: userAgent,
  });
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function trackClick({ button_id }: { button_id: string }) {
  const { error } = await supabase.from("button_clicks").insert({ button_id });
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const { data: roleRow, error: roleError } = await supabase
    .from("user_roles")
    .select("role")
    .eq("role", "admin")
    .maybeSingle();

  if (roleError || !roleRow) {
    throw new Error("Not authorized");
  }

  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const [visitsRes, clicksRes, byCountryRes, byDayRes, recentRes] = await Promise.all([
    supabase.from("site_visits").select("id", { count: "exact", head: true }),
    supabase
      .from("button_clicks")
      .select("id", { count: "exact", head: true })
      .eq("button_id", "visit_platform"),
    supabase
      .from("site_visits")
      .select("country")
      .gte("created_at", since)
      .not("country", "is", null),
    supabase.from("site_visits").select("created_at").gte("created_at", since),
    supabase
      .from("site_visits")
      .select("path, country, created_at, referrer")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  for (const result of [visitsRes, clicksRes, byCountryRes, byDayRes, recentRes]) {
    if (result.error) throw new Error(result.error.message);
  }

  const countryMap = new Map<string, number>();
  for (const row of byCountryRes.data ?? []) {
    const country = row.country ?? "??";
    countryMap.set(country, (countryMap.get(country) ?? 0) + 1);
  }

  const dayMap = new Map<string, number>();
  for (const row of byDayRes.data ?? []) {
    const day = row.created_at.slice(0, 10);
    dayMap.set(day, (dayMap.get(day) ?? 0) + 1);
  }

  return {
    totalVisits: visitsRes.count ?? 0,
    platformClicks: clicksRes.count ?? 0,
    byCountry: Array.from(countryMap.entries())
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10),
    byDay: Array.from(dayMap.entries())
      .map(([day, count]) => ({ day, count }))
      .sort((a, b) => a.day.localeCompare(b.day)),
    recent: (recentRes.data ?? []) as VisitRow[],
    isAdmin: true,
  };
}
