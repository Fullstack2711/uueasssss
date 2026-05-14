import { c as createSsrRpc } from "./router-DeVYuCpg.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DE8ZlpkW.mjs";
import { c as createServerFn } from "./server-0F1_JvhK.mjs";
import { o as objectType, n as numberType, s as stringType, b as booleanType, l as literalType } from "../_libs/zod.mjs";
const listNews = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  limit: numberType().int().min(1).max(50).optional()
}).optional().parse(d)).handler(createSsrRpc("44d880232a871616b36fad6ca0bbea7332a21320a6e09f57c552f0b06699ff94"));
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
const upsertNews = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => NewsSchema.parse(d)).handler(createSsrRpc("438c85bf852bff59e855217e018909073acd1513b38f3c747c1462d984225c3a"));
const deleteNews = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("d1d7c8f80ff01cce25991e870f7a00ef2ee2863fb1a7266bb183f1f4a6aa10aa"));
const ContactSchema = objectType({
  name: stringType().trim().min(1).max(120),
  company: stringType().trim().max(160).optional().nullable(),
  email: stringType().trim().email().max(200).optional().nullable().or(literalType("")),
  phone: stringType().trim().max(40).optional().nullable(),
  message: stringType().trim().min(1).max(2e3)
});
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((d) => ContactSchema.parse(d)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
const listMessages = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("ebbf61dd63bb7b3a20c3bf5cc319e5305ac50841f4fb07455ad177d553535c67"));
const markMessageRead = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  is_read: booleanType()
}).parse(d)).handler(createSsrRpc("63553628c39c49bae2f67d1126b02516291fdee1ed74796758aafa558b3a7f25"));
const deleteMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("a6974f2963616d2c3b0e660601e11790bd00aad78f2fad325cf6ad99631a2084"));
export {
  listMessages as a,
  deleteMessage as b,
  deleteNews as d,
  listNews as l,
  markMessageRead as m,
  submitContact as s,
  upsertNews as u
};
