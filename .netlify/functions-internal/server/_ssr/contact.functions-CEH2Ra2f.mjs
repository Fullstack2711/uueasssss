import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BRBRIjkj.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DE8ZlpkW.mjs";
import { c as createServerFn } from "./server-0F1_JvhK.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType, b as booleanType } from "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const ContactSchema = objectType({
  name: stringType().trim().min(1).max(120),
  company: stringType().trim().max(160).optional().nullable(),
  email: stringType().trim().email().max(200).optional().nullable().or(literalType("")),
  phone: stringType().trim().max(40).optional().nullable(),
  message: stringType().trim().min(1).max(2e3)
});
async function assertAdmin(userId) {
  const {
    data,
    error
  } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (error || !data) throw new Error("Not authorized");
}
const submitContact_createServerFn_handler = createServerRpc({
  id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
  name: "submitContact",
  filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((d) => ContactSchema.parse(d)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabaseAdmin.from("contact_messages").insert({
    name: data.name,
    company: data.company || null,
    email: data.email || null,
    phone: data.phone || null,
    message: data.message
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const listMessages_createServerFn_handler = createServerRpc({
  id: "ebbf61dd63bb7b3a20c3bf5cc319e5305ac50841f4fb07455ad177d553535c67",
  name: "listMessages",
  filename: "src/lib/contact.functions.ts"
}, (opts) => listMessages.__executeServer(opts));
const listMessages = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(listMessages_createServerFn_handler, async ({
  context
}) => {
  await assertAdmin(context.userId);
  const {
    data
  } = await supabaseAdmin.from("contact_messages").select("*").order("created_at", {
    ascending: false
  }).limit(200);
  return {
    items: data ?? []
  };
});
const markMessageRead_createServerFn_handler = createServerRpc({
  id: "63553628c39c49bae2f67d1126b02516291fdee1ed74796758aafa558b3a7f25",
  name: "markMessageRead",
  filename: "src/lib/contact.functions.ts"
}, (opts) => markMessageRead.__executeServer(opts));
const markMessageRead = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  is_read: booleanType()
}).parse(d)).handler(markMessageRead_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.userId);
  await supabaseAdmin.from("contact_messages").update({
    is_read: data.is_read
  }).eq("id", data.id);
  return {
    ok: true
  };
});
const deleteMessage_createServerFn_handler = createServerRpc({
  id: "a6974f2963616d2c3b0e660601e11790bd00aad78f2fad325cf6ad99631a2084",
  name: "deleteMessage",
  filename: "src/lib/contact.functions.ts"
}, (opts) => deleteMessage.__executeServer(opts));
const deleteMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(deleteMessage_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.userId);
  await supabaseAdmin.from("contact_messages").delete().eq("id", data.id);
  return {
    ok: true
  };
});
export {
  deleteMessage_createServerFn_handler,
  listMessages_createServerFn_handler,
  markMessageRead_createServerFn_handler,
  submitContact_createServerFn_handler
};
