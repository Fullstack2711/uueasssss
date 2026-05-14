import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useServerFn, g as getAnalytics, c as createSsrRpc } from "./router-DeVYuCpg.mjs";
import { s as supabase } from "./client-C5UX-kzy.mjs";
import { c as createServerFn } from "./server-0F1_JvhK.mjs";
import { l as listNews, u as upsertNews, d as deleteNews, a as listMessages, m as markMessageRead, b as deleteMessage } from "./contact.functions-Bb-INR5k.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { L as LoaderCircle, S as Shield, a as LogOut, C as ChartColumn, N as Newspaper, M as Mail, U as UserPlus, b as LogIn, E as Eye, c as MousePointerClick, d as Earth, P as Plus, e as Pencil, T as Trash2, X, f as Check } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./auth-middleware-DE8ZlpkW.mjs";
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
const adminExists = createServerFn({
  method: "GET"
}).handler(createSsrRpc("8b404eadc272d7d27f48745f2fd105c6bc74772c80d7e5eb87638d43cd197daa"));
const claimFirstAdmin = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  user_id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("d9425d3c7a250d7701d286efd0414683dc977e4fa309b10da0ac77fcbe4e9e2c"));
function AdminPage() {
  const [ready, setReady] = reactExports.useState(false);
  const [authed, setAuthed] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState(null);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data
      } = await supabase.auth.getSession();
      setAuthed(!!data.session);
      setEmail(data.session?.user.email ?? null);
      setReady(true);
    })();
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, s) => {
      setAuthed(!!s);
      setEmail(s?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  if (!ready) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return authed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { email }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, {});
}
function LoginForm() {
  const [mode, setMode] = reactExports.useState("loading");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let mounted = true;
    (async () => {
      const r = await adminExists();
      if (!mounted) return;
      setMode(r.exists ? "login" : "signup");
    })();
    return () => {
      mounted = false;
    };
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        const {
          data,
          error: error2
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`
          }
        });
        if (error2) throw error2;
        const userId = data.user?.id;
        if (!userId) throw new Error("Foydalanuvchi yaratilmadi");
        await claimFirstAdmin({
          data: {
            user_id: userId
          }
        });
        if (!data.session) {
          await supabase.auth.signInWithPassword({
            email,
            password
          });
        }
      } else {
        const {
          error: error2
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error2) throw error2;
      }
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Xatolik yuz berdi");
    } finally {
      setBusy(false);
    }
  };
  if (mode === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-moon shadow-glow mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold", children: "UUEA Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: mode === "signup" ? "Birinchi admin hisobini yarating" : "Boshqaruv paneliga kirish" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-2xl glass premium-border p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Parol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, minLength: 8, value: password, onChange: (e) => setPassword(e.target.value), className: "w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" }),
        mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Kamida 8 ta belgi. Bu hisob — yagona admin." })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-moon text-primary-foreground font-medium shadow-moon hover:shadow-glow transition-all disabled:opacity-60", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : mode === "signup" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
        " Admin yaratish"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
        " Kirish"
      ] }) })
    ] })
  ] }) });
}
function Dashboard({
  email
}) {
  const [tab, setTab] = reactExports.useState("analytics");
  const logout = async () => {
    await supabase.auth.signOut();
  };
  const tabs = [{
    id: "analytics",
    label: "Statistika",
    Icon: ChartColumn
  }, {
    id: "news",
    label: "Yangiliklar",
    Icon: Newspaper
  }, {
    id: "messages",
    label: "Xabarlar",
    Icon: Mail
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border bg-card/40 backdrop-blur sticky top-0 z-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-gradient-moon shadow-glow grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm", children: "UUEA Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate max-w-[180px]", children: email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: logout, className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs border border-border hover:bg-secondary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
          " Chiqish"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-2 sm:px-6 pb-2 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex gap-1 p-1 rounded-full glass premium-border", children: tabs.map(({
        id,
        label,
        Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(id), className: `inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition ${tab === id ? "bg-gradient-moon text-primary-foreground shadow-moon" : "text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
        " ",
        label
      ] }, id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 sm:px-6 py-6 sm:py-8", children: [
      tab === "analytics" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsPanel, {}),
      tab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsPanel, {}),
      tab === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesPanel, {})
    ] })
  ] });
}
function AnalyticsPanel() {
  const fetchAnalytics = useServerFn(getAnalytics);
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const reload = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetchAnalytics();
      setData(r);
    } finally {
      setLoading(false);
    }
  }, [fetchAnalytics]);
  reactExports.useEffect(() => {
    reload();
  }, [reload]);
  if (loading || !data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  const maxDay = Math.max(1, ...data.byDay.map((d) => d.count));
  const maxCountry = Math.max(1, ...data.byCountry.map((c) => c.count));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Eye, label: "Jami tashriflar", value: data.totalVisits.toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: MousePointerClick, label: "Platformaga tashrif (CTA)", value: data.platformClicks.toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Earth, label: "Davlatlar", value: String(data.byCountry.length) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Oxirgi 30 kun (kunlik)", children: data.byDay.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "Hali tashriflar yo'q" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-40", children: data.byDay.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t bg-gradient-moon transition-all", style: {
          height: `${d.count / maxDay * 100}%`,
          minHeight: 2
        }, title: `${d.day}: ${d.count}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-muted-foreground hidden group-hover:block", children: d.day.slice(5) })
      ] }, d.day)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Top davlatlar (30 kun)", children: data.byCountry.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "Hali ma'lumot yo'q" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: data.byCountry.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
            flagEmoji(c.country),
            " ",
            c.country
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.count })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-moon", style: {
          width: `${c.count / maxCountry * 100}%`
        } }) })
      ] }, c.country)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "So'nggi tashriflar", children: data.recent.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "Hali tashriflar yo'q" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-4 sm:mx-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-xs sm:text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-muted-foreground text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Vaqt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Sahifa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Davlat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3 hidden md:table-cell", children: "Manba" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: data.recent.map((r, i) => {
        const row = r;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 whitespace-nowrap text-muted-foreground", children: new Date(row.created_at).toLocaleString("uz-UZ", {
            dateStyle: "short",
            timeStyle: "short"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-mono text-xs", children: row.path }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: row.country ? `${flagEmoji(row.country)} ${row.country}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 hidden md:table-cell text-muted-foreground truncate max-w-[200px]", children: row.referrer || "—" })
        ] }, i);
      }) })
    ] }) }) })
  ] });
}
function NewsPanel() {
  const fetchNews = useServerFn(listNews);
  const saveNews = useServerFn(upsertNews);
  const removeNews = useServerFn(deleteNews);
  const [items, setItems] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const reload = reactExports.useCallback(async () => {
    setLoading(true);
    const r = await fetchNews({
      data: {
        limit: 50
      }
    });
    setItems(r.items);
    setLoading(false);
  }, [fetchNews]);
  reactExports.useEffect(() => {
    reload();
  }, [reload]);
  const onSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      await saveNews({
        data: {
          id: editing.id,
          title_uz: editing.title_uz || "",
          title_en: editing.title_en || "",
          body_uz: editing.body_uz || "",
          body_en: editing.body_en || "",
          tag: editing.tag || null,
          image_url: editing.image_url || "",
          published_at: editing.published_at
        }
      });
      setEditing(null);
      await reload();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Xato");
    } finally {
      setSaving(false);
    }
  };
  const onDelete = async (id) => {
    if (!confirm("O'chirilsinmi?")) return;
    await removeNews({
      data: {
        id
      }
    });
    reload();
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-display font-semibold", children: [
        "Yangiliklar (",
        items.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setEditing({
        title_uz: "",
        title_en: "",
        body_uz: "",
        body_en: "",
        tag: ""
      }), className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-moon text-primary-foreground text-sm shadow-moon", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Yangi"
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "Hali yangiliklar yo'q. 'Yangi' tugmasi orqali qo'shing." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: items.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl glass premium-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-primary mb-1", children: [
          n.tag || "News",
          " · ",
          new Date(n.published_at).toLocaleDateString("uz-UZ")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm truncate", children: n.title_uz }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: n.title_en })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(n), className: "p-2 rounded-lg hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onDelete(n.id), className: "p-2 rounded-lg hover:bg-destructive/20 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }) }, n.id)) }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur grid place-items-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl w-full max-w-2xl my-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-5 py-4 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: editing.id ? "Tahrirlash" : "Yangi yangilik" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(null), className: "p-1.5 rounded-lg hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Tag (ixtiyoriy)", value: editing.tag || "", onChange: (v) => setEditing({
          ...editing,
          tag: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Sarlavha (UZ)", value: editing.title_uz || "", onChange: (v) => setEditing({
          ...editing,
          title_uz: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Title (EN)", value: editing.title_en || "", onChange: (v) => setEditing({
          ...editing,
          title_en: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Rasm URL (ixtiyoriy)", value: editing.image_url || "", onChange: (v) => setEditing({
          ...editing,
          image_url: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: "Matn (UZ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: editing.body_uz || "", onChange: (e) => setEditing({
            ...editing,
            body_uz: e.target.value
          }), className: "w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: "Body (EN)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: editing.body_en || "", onChange: (e) => setEditing({
            ...editing,
            body_en: e.target.value
          }), className: "w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t border-border flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(null), className: "px-4 py-2 rounded-full text-sm border border-border", children: "Bekor qilish" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSave, disabled: saving, className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-moon text-primary-foreground text-sm shadow-moon disabled:opacity-60", children: [
          saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Saqlash"
        ] })
      ] })
    ] }) })
  ] });
}
function MessagesPanel() {
  const fetchMessages = useServerFn(listMessages);
  const markRead = useServerFn(markMessageRead);
  const removeMsg = useServerFn(deleteMessage);
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const reload = reactExports.useCallback(async () => {
    setLoading(true);
    const r = await fetchMessages();
    setItems(r.items);
    setLoading(false);
  }, [fetchMessages]);
  reactExports.useEffect(() => {
    reload();
  }, [reload]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-display font-semibold", children: [
      "Xabarlar (",
      items.filter((m) => !m.is_read).length,
      " o'qilmagan)"
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "Hali xabarlar yo'q" }) : items.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl glass premium-border p-4 ${!m.is_read ? "ring-1 ring-primary/40" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm", children: m.name }),
          m.company && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "· ",
            m.company
          ] }),
          !m.is_read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/20 text-primary", children: "yangi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-0.5 mb-2", children: [
          m.email && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${m.email}`, className: "hover:text-primary", children: m.email }),
          m.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${m.phone}`, className: "hover:text-primary", children: m.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(m.created_at).toLocaleString("uz-UZ", {
            dateStyle: "short",
            timeStyle: "short"
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-wrap", children: m.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
          await markRead({
            data: {
              id: m.id,
              is_read: !m.is_read
            }
          });
          reload();
        }, className: "p-2 rounded-lg hover:bg-secondary", title: m.is_read ? "O'qilmagan deb belgilash" : "O'qilgan deb belgilash", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-3.5 w-3.5 ${m.is_read ? "text-primary" : ""}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
          if (confirm("O'chirilsinmi?")) {
            await removeMsg({
              data: {
                id: m.id
              }
            });
            reload();
          }
        }, className: "p-2 rounded-lg hover:bg-destructive/20 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }) }, m.id))
  ] });
}
function StatCard({
  Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass premium-border p-4 sm:p-5 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-moon shadow-glow grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-display font-bold text-gradient-anim", children: value })
    ] })
  ] });
}
function Card({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass premium-border p-4 sm:p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: title }),
    children
  ] });
}
function Empty({
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 text-sm text-muted-foreground", children: text });
}
function FieldRow({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value, onChange: (e) => onChange(e.target.value), className: "w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" })
  ] });
}
function flagEmoji(country) {
  if (!country || country.length !== 2) return "🌐";
  const A = 127462;
  return String.fromCodePoint(...country.toUpperCase().split("").map((c) => A + c.charCodeAt(0) - 65));
}
export {
  AdminPage as component
};
