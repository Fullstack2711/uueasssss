import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().nullable(),
  email: z.string().trim().email().max(200).optional().nullable().or(z.literal("")),
  phone: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().min(1).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d) => ContactSchema.parse(d))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      company: data.company || null,
      email: data.email || null,
      phone: data.phone || null,
      message: data.message,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: context.userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Not authorized");
    const { data } = await supabaseAdmin
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    return { items: data ?? [] };
  });

export const markMessageRead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({ id: z.string().uuid(), is_read: z.boolean() }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: context.userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Not authorized");
    await supabaseAdmin
      .from("contact_messages")
      .update({ is_read: data.is_read })
      .eq("id", data.id);
    return { ok: true };
  });

export const deleteMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: context.userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Not authorized");
    await supabaseAdmin.from("contact_messages").delete().eq("id", data.id);
    return { ok: true };
  });
