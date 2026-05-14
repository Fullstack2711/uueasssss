import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BRBRIjkj.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DE8ZlpkW.mjs";
import { c as createServerFn } from "./server-0F1_JvhK.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType, l as literalType } from "../_libs/zod.mjs";
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
async function assertAdmin(userId) {
  const {
    data,
    error
  } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (error || !data) throw new Error("Not authorized");
}
const listNews_createServerFn_handler = createServerRpc({
  id: "44d880232a871616b36fad6ca0bbea7332a21320a6e09f57c552f0b06699ff94",
  name: "listNews",
  filename: "src/lib/news.functions.ts"
}, (opts) => listNews.__executeServer(opts));
const listNews = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  limit: numberType().int().min(1).max(50).optional()
}).optional().parse(d)).handler(listNews_createServerFn_handler, async ({
  data
}) => {
  const limit = data?.limit ?? 50;
  const {
    data: rows,
    error
  } = await supabaseAdmin.from("news").select("*").order("published_at", {
    ascending: false
  }).limit(limit);
  if (error) return {
    items: []
  };
  return {
    items: rows ?? []
  };
});
const NewsSchema = objectType({
  id: stringType().uuid().optional(),
  title_uz: stringType().min(1).max(300),
  title_en: stringType().min(1).max(300),
  body_uz: stringType().min(1).max(5e3),
  body_en: stringType().min(1).max(5e3),
  tag: stringType().max(50).optional().nullable(),
  image_url: stringType().url().max(1e3).optional().nullable().or(literalType("")),
  published_at: stringType().optional()
});
const upsertNews_createServerFn_handler = createServerRpc({
  id: "438c85bf852bff59e855217e018909073acd1513b38f3c747c1462d984225c3a",
  name: "upsertNews",
  filename: "src/lib/news.functions.ts"
}, (opts) => upsertNews.__executeServer(opts));
const upsertNews = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => NewsSchema.parse(d)).handler(upsertNews_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.userId);
  const payload = {
    title_uz: data.title_uz,
    title_en: data.title_en,
    body_uz: data.body_uz,
    body_en: data.body_en,
    tag: data.tag || null,
    image_url: data.image_url || null,
    published_at: data.published_at || (/* @__PURE__ */ new Date()).toISOString()
  };
  if (data.id) {
    const {
      error
    } = await supabaseAdmin.from("news").update(payload).eq("id", data.id);
    if (error) throw new Error(error.message);
    return {
      ok: true,
      id: data.id
    };
  } else {
    const {
      data: inserted,
      error
    } = await supabaseAdmin.from("news").insert(payload).select("id").single();
    if (error) throw new Error(error.message);
    return {
      ok: true,
      id: inserted.id
    };
  }
});
const deleteNews_createServerFn_handler = createServerRpc({
  id: "d1d7c8f80ff01cce25991e870f7a00ef2ee2863fb1a7266bb183f1f4a6aa10aa",
  name: "deleteNews",
  filename: "src/lib/news.functions.ts"
}, (opts) => deleteNews.__executeServer(opts));
const deleteNews = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(deleteNews_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.userId);
  const {
    error
  } = await supabaseAdmin.from("news").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  deleteNews_createServerFn_handler,
  listNews_createServerFn_handler,
  upsertNews_createServerFn_handler
};
