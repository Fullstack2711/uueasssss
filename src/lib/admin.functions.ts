import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// Returns whether at least one admin exists. Used by the login UI to show
// either a sign-up form (first time) or a login form.
export const adminExists = createServerFn({ method: "GET" }).handler(async () => {
  const { count } = await supabaseAdmin
    .from("user_roles")
    .select("id", { count: "exact", head: true })
    .eq("role", "admin");
  return { exists: (count ?? 0) > 0 };
});

// Bootstrap: create the very first admin. Refuses if any admin already exists.
// The user is created via Supabase Auth on the client; this server fn just
// promotes them to admin if they are the first one in.
export const claimFirstAdmin = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ user_id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { count } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");
    if ((count ?? 0) > 0) {
      throw new Error("Admin allaqachon mavjud");
    }
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: data.user_id, role: "admin" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
