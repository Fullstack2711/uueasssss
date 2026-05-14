import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listNews = createServerFn({ method: "GET" })
  .inputValidator((d) =>
    z.object({ limit: z.number().int().min(1).max(50).optional() }).optional().parse(d),
  )
  .handler(async ({ data }) => {
    const limit = data?.limit ?? 50;
    const { data: rows, error } = await supabaseAdmin
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);
    if (error) return { items: [] };
    return { items: rows ?? [] };
  });

const NewsSchema = z.object({
  id: z.string().uuid().optional(),
  title_uz: z.string().min(1).max(300),
  title_en: z.string().min(1).max(300),
  body_uz: z.string().min(1).max(5000),
  body_en: z.string().min(1).max(5000),
  tag: z.string().max(50).optional().nullable(),
  image_url: z.string().url().max(1000).optional().nullable().or(z.literal("")),
  published_at: z.string().optional(),
});

export const upsertNews = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => NewsSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: context.userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Not authorized");

    const payload = {
      title_uz: data.title_uz,
      title_en: data.title_en,
      body_uz: data.body_uz,
      body_en: data.body_en,
      tag: data.tag || null,
      image_url: data.image_url || null,
      published_at: data.published_at || new Date().toISOString(),
    };

    if (data.id) {
      const { error } = await supabaseAdmin.from("news").update(payload).eq("id", data.id);
      if (error) throw new Error(error.message);
      return { ok: true, id: data.id };
    } else {
      const { data: inserted, error } = await supabaseAdmin
        .from("news")
        .insert(payload)
        .select("id")
        .single();
      if (error) throw new Error(error.message);
      return { ok: true, id: inserted.id };
    }
  });

export const deleteNews = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: context.userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Not authorized");
    const { error } = await supabaseAdmin.from("news").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
