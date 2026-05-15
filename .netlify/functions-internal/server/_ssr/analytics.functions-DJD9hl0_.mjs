import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BRBRIjkj.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DE8ZlpkW.mjs";
import { c as createServerFn, a as getRequestHeader } from "./server-0F1_JvhK.mjs";
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
function getCountry() {
  const cf = getRequestHeader("cf-ipcountry");
  if (cf && cf !== "XX" && cf !== "T1") return cf;
  const fallback = getRequestHeader("x-vercel-ip-country") || getRequestHeader("x-country");
  return fallback || null;
}
const trackVisit_createServerFn_handler = createServerRpc({
  id: "5e7bc6b7985a4c5567ec29c826f97eeb7805c320edefacaaf2df3b19b86050da",
  name: "trackVisit",
  filename: "src/lib/analytics.functions.ts"
}, (opts) => trackVisit.__executeServer(opts));
const trackVisit = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  path: stringType().min(1).max(500),
  referrer: stringType().max(1e3).optional().nullable()
}).parse(d)).handler(trackVisit_createServerFn_handler, async ({
  data
}) => {
  const country = getCountry();
  const ua = getRequestHeader("user-agent")?.slice(0, 500) || null;
  await supabaseAdmin.from("site_visits").insert({
    path: data.path,
    country,
    user_agent: ua,
    referrer: data.referrer ?? null
  });
  return {
    ok: true
  };
});
const trackClick_createServerFn_handler = createServerRpc({
  id: "01280a291b7cbd85c4b21ee7bb86362f9a00be3ea19e8b70cccfd6cecac70a6d",
  name: "trackClick",
  filename: "src/lib/analytics.functions.ts"
}, (opts) => trackClick.__executeServer(opts));
const trackClick = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  button_id: stringType().min(1).max(100)
}).parse(d)).handler(trackClick_createServerFn_handler, async ({
  data
}) => {
  const country = getCountry();
  await supabaseAdmin.from("button_clicks").insert({
    button_id: data.button_id,
    country
  });
  return {
    ok: true
  };
});
const getAnalytics_createServerFn_handler = createServerRpc({
  id: "c491f292fda3d5d830370f062a74d0bc23cfc38facc1346ab53630f9411951c8",
  name: "getAnalytics",
  filename: "src/lib/analytics.functions.ts"
}, (opts) => getAnalytics.__executeServer(opts));
const getAnalytics = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(getAnalytics_createServerFn_handler, async ({
  context
}) => {
  const {
    data: roleRow
  } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
  const isAdmin = !!roleRow;
  if (!isAdmin) throw new Error("Not authorized");
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3).toISOString();
  const [visitsRes, clicksRes, byCountryRes, byDayRes, recentRes] = await Promise.all([supabaseAdmin.from("site_visits").select("id", {
    count: "exact",
    head: true
  }), supabaseAdmin.from("button_clicks").select("button_id").eq("button_id", "visit_platform"), supabaseAdmin.from("site_visits").select("country").gte("created_at", since).not("country", "is", null), supabaseAdmin.from("site_visits").select("created_at").gte("created_at", since), supabaseAdmin.from("site_visits").select("path, country, created_at, referrer").order("created_at", {
    ascending: false
  }).limit(20)]);
  const totalVisits = visitsRes.count ?? 0;
  const platformClicks = clicksRes.data?.length ?? 0;
  const countryMap = /* @__PURE__ */ new Map();
  for (const r of byCountryRes.data ?? []) {
    const c = r.country ?? "??";
    countryMap.set(c, (countryMap.get(c) ?? 0) + 1);
  }
  const byCountry = Array.from(countryMap.entries()).map(([country, count]) => ({
    country,
    count
  })).sort((a, b) => b.count - a.count).slice(0, 10);
  const dayMap = /* @__PURE__ */ new Map();
  for (const r of byDayRes.data ?? []) {
    const day = r.created_at.slice(0, 10);
    dayMap.set(day, (dayMap.get(day) ?? 0) + 1);
  }
  const byDay = Array.from(dayMap.entries()).map(([day, count]) => ({
    day,
    count
  })).sort((a, b) => a.day.localeCompare(b.day));
  return {
    totalVisits,
    platformClicks,
    byCountry,
    byDay,
    recent: recentRes.data ?? [],
    isAdmin
  };
});
export {
  getAnalytics_createServerFn_handler,
  trackClick_createServerFn_handler,
  trackVisit_createServerFn_handler
};
