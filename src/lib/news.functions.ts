import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

export type NewsRow = Tables<"news">;

export async function listNews(input?: { limit?: number }) {
  const limit = z.number().int().min(1).max(50).optional().parse(input?.limit);
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(limit ?? 50);

  if (error) throw new Error(error.message);
  return { items: data ?? [] };
}

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

export async function upsertNews(input: z.infer<typeof NewsSchema>) {
  const data = NewsSchema.parse(input);
  const payload: TablesInsert<"news"> = {
    title_uz: data.title_uz,
    title_en: data.title_en,
    body_uz: data.body_uz,
    body_en: data.body_en,
    tag: data.tag || null,
    image_url: data.image_url || null,
    published_at: data.published_at || new Date().toISOString(),
  };

  if (data.id) {
    const { error } = await supabase.from("news").update(payload).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true, id: data.id };
  }

  const { data: inserted, error } = await supabase
    .from("news")
    .insert(payload)
    .select("id")
    .single();
  if (error) throw new Error(error.message);
  return { ok: true, id: inserted.id };
}

export async function deleteNews(input: { id: string }) {
  const { id } = z.object({ id: z.string().uuid() }).parse(input);
  const { error } = await supabase.from("news").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}
