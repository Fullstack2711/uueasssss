import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export async function adminExists() {
  const { data, error } = await supabase.rpc("admin_exists");
  if (error) throw new Error(error.message);
  return { exists: Boolean(data) };
}

export async function claimFirstAdmin(input: { user_id: string }) {
  const { user_id } = z.object({ user_id: z.string().uuid() }).parse(input);
  const { error } = await supabase.rpc("claim_first_admin", { _user_id: user_id });
  if (error) throw new Error(error.message);
  return { ok: true };
}
