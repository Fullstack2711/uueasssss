import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BRBRIjkj.mjs";
import { c as createServerFn } from "./server-0F1_JvhK.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
const adminExists_createServerFn_handler = createServerRpc({
  id: "8b404eadc272d7d27f48745f2fd105c6bc74772c80d7e5eb87638d43cd197daa",
  name: "adminExists",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminExists.__executeServer(opts));
const adminExists = createServerFn({
  method: "GET"
}).handler(adminExists_createServerFn_handler, async () => {
  const {
    count
  } = await supabaseAdmin.from("user_roles").select("id", {
    count: "exact",
    head: true
  }).eq("role", "admin");
  return {
    exists: (count ?? 0) > 0
  };
});
const claimFirstAdmin_createServerFn_handler = createServerRpc({
  id: "d9425d3c7a250d7701d286efd0414683dc977e4fa309b10da0ac77fcbe4e9e2c",
  name: "claimFirstAdmin",
  filename: "src/lib/admin.functions.ts"
}, (opts) => claimFirstAdmin.__executeServer(opts));
const claimFirstAdmin = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  user_id: stringType().uuid()
}).parse(d)).handler(claimFirstAdmin_createServerFn_handler, async ({
  data
}) => {
  const {
    count
  } = await supabaseAdmin.from("user_roles").select("id", {
    count: "exact",
    head: true
  }).eq("role", "admin");
  if ((count ?? 0) > 0) {
    throw new Error("Admin allaqachon mavjud");
  }
  const {
    error
  } = await supabaseAdmin.from("user_roles").insert({
    user_id: data.user_id,
    role: "admin"
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  adminExists_createServerFn_handler,
  claimFirstAdmin_createServerFn_handler
};
