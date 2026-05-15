import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().nullable(),
  email: z.string().trim().email().max(200).optional().nullable().or(z.literal("")),
  phone: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().min(1).max(2000),
});

export async function submitContact(input: z.infer<typeof ContactSchema>) {
  const data = ContactSchema.parse(input);
  const { error } = await supabase.from("contact_messages").insert({
    name: data.name,
    company: data.company || null,
    email: data.email || null,
    phone: data.phone || null,
    message: data.message,
  });
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function listMessages() {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw new Error(error.message);
  return { items: data ?? [] };
}

export async function markMessageRead(input: { id: string; is_read: boolean }) {
  const data = z.object({ id: z.string().uuid(), is_read: z.boolean() }).parse(input);
  const { error } = await supabase
    .from("contact_messages")
    .update({ is_read: data.is_read })
    .eq("id", data.id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function deleteMessage(input: { id: string }) {
  const { id } = z.object({ id: z.string().uuid() }).parse(input);
  const { error } = await supabase.from("contact_messages").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}
