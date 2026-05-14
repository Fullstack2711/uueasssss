import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { adminExists, claimFirstAdmin } from "@/lib/admin.functions";
import { getAnalytics } from "@/lib/analytics.functions";
import { listNews, upsertNews, deleteNews } from "@/lib/news.functions";
import { listMessages, markMessageRead, deleteMessage } from "@/lib/contact.functions";
import {
  BarChart3, Newspaper, Mail, LogOut, Loader2, Plus, Pencil, Trash2,
  Globe2, MousePointerClick, Eye, Check, X, Shield, LogIn, UserPlus,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — UUEA" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      setAuthed(!!data.session);
      setEmail(data.session?.user.email ?? null);
      setReady(true);
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setAuthed(!!s);
      setEmail(s?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return authed ? <Dashboard email={email} /> : <LoginForm />;
}

/* ---------------- Login ---------------- */

function LoginForm() {
  const [mode, setMode] = useState<"loading" | "login" | "signup">("loading");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const r = await adminExists();
      if (!mounted) return;
      setMode(r.exists ? "login" : "signup");
    })();
    return () => { mounted = false; };
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        const userId = data.user?.id;
        if (!userId) throw new Error("Foydalanuvchi yaratilmadi");
        await claimFirstAdmin({ data: { user_id: userId } });
        if (!data.session) {
          await supabase.auth.signInWithPassword({ email, password });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Xatolik yuz berdi");
    } finally {
      setBusy(false);
    }
  };

  if (mode === "loading") {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-moon shadow-glow mb-3">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold">UUEA Admin</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === "signup" ? "Birinchi admin hisobini yarating" : "Boshqaruv paneliga kirish"}
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl glass premium-border p-6 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Parol</label>
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            {mode === "signup" && (
              <p className="mt-2 text-xs text-muted-foreground">Kamida 8 ta belgi. Bu hisob — yagona admin.</p>
            )}
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <button type="submit" disabled={busy}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-moon text-primary-foreground font-medium shadow-moon hover:shadow-glow transition-all disabled:opacity-60">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> :
              mode === "signup" ? <><UserPlus className="h-4 w-4" /> Admin yaratish</> :
              <><LogIn className="h-4 w-4" /> Kirish</>}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------------- Dashboard ---------------- */

type Tab = "analytics" | "news" | "messages";

function Dashboard({ email }: { email: string | null }) {
  const [tab, setTab] = useState<Tab>("analytics");

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const tabs: { id: Tab; label: string; Icon: typeof BarChart3 }[] = [
    { id: "analytics", label: "Statistika", Icon: BarChart3 },
    { id: "news", label: "Yangiliklar", Icon: Newspaper },
    { id: "messages", label: "Xabarlar", Icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-moon shadow-glow grid place-items-center">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold text-sm">UUEA Admin</div>
              <div className="text-[11px] text-muted-foreground truncate max-w-[180px]">{email}</div>
            </div>
          </div>
          <button onClick={logout}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs border border-border hover:bg-secondary transition">
            <LogOut className="h-3.5 w-3.5" /> Chiqish
          </button>
        </div>
        <div className="container mx-auto px-2 sm:px-6 pb-2 overflow-x-auto">
          <div className="inline-flex gap-1 p-1 rounded-full glass premium-border">
            {tabs.map(({ id, label, Icon }) => (
              <button key={id} onClick={() => setTab(id)}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition ${
                  tab === id ? "bg-gradient-moon text-primary-foreground shadow-moon" : "text-muted-foreground hover:text-foreground"
                }`}>
                <Icon className="h-3.5 w-3.5" /> {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {tab === "analytics" && <AnalyticsPanel />}
        {tab === "news" && <NewsPanel />}
        {tab === "messages" && <MessagesPanel />}
      </main>
    </div>
  );
}

/* ---------------- Analytics ---------------- */

function AnalyticsPanel() {
  const fetchAnalytics = useServerFn(getAnalytics);
  const [data, setData] = useState<Awaited<ReturnType<typeof getAnalytics>> | null>(null);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetchAnalytics();
      setData(r);
    } finally {
      setLoading(false);
    }
  }, [fetchAnalytics]);

  useEffect(() => { reload(); }, [reload]);

  if (loading || !data) {
    return <div className="grid place-items-center py-20"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  const maxDay = Math.max(1, ...data.byDay.map((d) => d.count));
  const maxCountry = Math.max(1, ...data.byCountry.map((c) => c.count));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <StatCard Icon={Eye} label="Jami tashriflar" value={data.totalVisits.toLocaleString()} />
        <StatCard Icon={MousePointerClick} label="Platformaga tashrif (CTA)" value={data.platformClicks.toLocaleString()} />
        <StatCard Icon={Globe2} label="Davlatlar" value={String(data.byCountry.length)} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card title="Oxirgi 30 kun (kunlik)">
          {data.byDay.length === 0 ? <Empty text="Hali tashriflar yo'q" /> : (
            <div className="flex items-end gap-1 h-40">
              {data.byDay.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-full rounded-t bg-gradient-moon transition-all"
                    style={{ height: `${(d.count / maxDay) * 100}%`, minHeight: 2 }} title={`${d.day}: ${d.count}`} />
                  <div className="text-[8px] text-muted-foreground hidden group-hover:block">{d.day.slice(5)}</div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card title="Top davlatlar (30 kun)">
          {data.byCountry.length === 0 ? <Empty text="Hali ma'lumot yo'q" /> : (
            <div className="space-y-2.5">
              {data.byCountry.map((c) => (
                <div key={c.country}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium">{flagEmoji(c.country)} {c.country}</span>
                    <span className="text-muted-foreground">{c.count}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-moon" style={{ width: `${(c.count / maxCountry) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card title="So'nggi tashriflar">
        {data.recent.length === 0 ? <Empty text="Hali tashriflar yo'q" /> : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-full text-xs sm:text-sm">
              <thead className="text-muted-foreground text-left">
                <tr className="border-b border-border">
                  <th className="py-2 px-3">Vaqt</th>
                  <th className="py-2 px-3">Sahifa</th>
                  <th className="py-2 px-3">Davlat</th>
                  <th className="py-2 px-3 hidden md:table-cell">Manba</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((r, i) => {
                  const row = r as { created_at: string; path: string; country: string | null; referrer: string | null };
                  return (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 px-3 whitespace-nowrap text-muted-foreground">
                        {new Date(row.created_at).toLocaleString("uz-UZ", { dateStyle: "short", timeStyle: "short" })}
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">{row.path}</td>
                      <td className="py-2 px-3">{row.country ? `${flagEmoji(row.country)} ${row.country}` : "—"}</td>
                      <td className="py-2 px-3 hidden md:table-cell text-muted-foreground truncate max-w-[200px]">{row.referrer || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}

/* ---------------- News ---------------- */

type NewsRow = {
  id: string; title_uz: string; title_en: string; body_uz: string; body_en: string;
  tag: string | null; image_url: string | null; published_at: string;
};

function NewsPanel() {
  const fetchNews = useServerFn(listNews);
  const saveNews = useServerFn(upsertNews);
  const removeNews = useServerFn(deleteNews);
  const [items, setItems] = useState<NewsRow[]>([]);
  const [editing, setEditing] = useState<Partial<NewsRow> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const reload = useCallback(async () => {
    setLoading(true);
    const r = await fetchNews({ data: { limit: 50 } });
    setItems(r.items as NewsRow[]);
    setLoading(false);
  }, [fetchNews]);

  useEffect(() => { reload(); }, [reload]);

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
          published_at: editing.published_at,
        },
      });
      setEditing(null);
      await reload();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Xato");
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (id: string) => {
    if (!confirm("O'chirilsinmi?")) return;
    await removeNews({ data: { id } });
    reload();
  };

  if (loading) {
    return <div className="grid place-items-center py-20"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-display font-semibold">Yangiliklar ({items.length})</h2>
        <button onClick={() => setEditing({ title_uz: "", title_en: "", body_uz: "", body_en: "", tag: "" })}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-moon text-primary-foreground text-sm shadow-moon">
          <Plus className="h-4 w-4" /> Yangi
        </button>
      </div>

      {items.length === 0 ? (
        <Empty text="Hali yangiliklar yo'q. 'Yangi' tugmasi orqali qo'shing." />
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((n) => (
            <div key={n.id} className="rounded-2xl glass premium-border p-4">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-primary mb-1">
                    {n.tag || "News"} · {new Date(n.published_at).toLocaleDateString("uz-UZ")}
                  </div>
                  <div className="font-display font-semibold text-sm truncate">{n.title_uz}</div>
                  <div className="text-xs text-muted-foreground truncate">{n.title_en}</div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => setEditing(n)} className="p-2 rounded-lg hover:bg-secondary"><Pencil className="h-3.5 w-3.5" /></button>
                  <button onClick={() => onDelete(n.id)} className="p-2 rounded-lg hover:bg-destructive/20 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur grid place-items-center p-4 overflow-y-auto">
          <div className="bg-background border border-border rounded-2xl w-full max-w-2xl my-8">
            <div className="flex justify-between items-center px-5 py-4 border-b border-border">
              <h3 className="font-display font-semibold">{editing.id ? "Tahrirlash" : "Yangi yangilik"}</h3>
              <button onClick={() => setEditing(null)} className="p-1.5 rounded-lg hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            <div className="p-5 space-y-3">
              <FieldRow label="Tag (ixtiyoriy)" value={editing.tag || ""} onChange={(v) => setEditing({ ...editing, tag: v })} />
              <FieldRow label="Sarlavha (UZ)" value={editing.title_uz || ""} onChange={(v) => setEditing({ ...editing, title_uz: v })} />
              <FieldRow label="Title (EN)" value={editing.title_en || ""} onChange={(v) => setEditing({ ...editing, title_en: v })} />
              <FieldRow label="Rasm URL (ixtiyoriy)" value={editing.image_url || ""} onChange={(v) => setEditing({ ...editing, image_url: v })} />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Matn (UZ)</label>
                <textarea rows={4} value={editing.body_uz || ""} onChange={(e) => setEditing({ ...editing, body_uz: e.target.value })}
                  className="w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Body (EN)</label>
                <textarea rows={4} value={editing.body_en || ""} onChange={(e) => setEditing({ ...editing, body_en: e.target.value })}
                  className="w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div className="px-5 py-4 border-t border-border flex justify-end gap-2">
              <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-full text-sm border border-border">Bekor qilish</button>
              <button onClick={onSave} disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-moon text-primary-foreground text-sm shadow-moon disabled:opacity-60">
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />} Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Messages ---------------- */

type MsgRow = {
  id: string; name: string; company: string | null; email: string | null;
  phone: string | null; message: string; is_read: boolean; created_at: string;
};

function MessagesPanel() {
  const fetchMessages = useServerFn(listMessages);
  const markRead = useServerFn(markMessageRead);
  const removeMsg = useServerFn(deleteMessage);
  const [items, setItems] = useState<MsgRow[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const r = await fetchMessages();
    setItems(r.items as MsgRow[]);
    setLoading(false);
  }, [fetchMessages]);

  useEffect(() => { reload(); }, [reload]);

  if (loading) {
    return <div className="grid place-items-center py-20"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-display font-semibold">
        Xabarlar ({items.filter((m) => !m.is_read).length} o'qilmagan)
      </h2>
      {items.length === 0 ? (
        <Empty text="Hali xabarlar yo'q" />
      ) : (
        items.map((m) => (
          <div key={m.id} className={`rounded-2xl glass premium-border p-4 ${!m.is_read ? "ring-1 ring-primary/40" : ""}`}>
            <div className="flex justify-between items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-display font-semibold text-sm">{m.name}</span>
                  {m.company && <span className="text-xs text-muted-foreground">· {m.company}</span>}
                  {!m.is_read && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/20 text-primary">yangi</span>}
                </div>
                <div className="text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-0.5 mb-2">
                  {m.email && <a href={`mailto:${m.email}`} className="hover:text-primary">{m.email}</a>}
                  {m.phone && <a href={`tel:${m.phone}`} className="hover:text-primary">{m.phone}</a>}
                  <span>{new Date(m.created_at).toLocaleString("uz-UZ", { dateStyle: "short", timeStyle: "short" })}</span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{m.message}</p>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <button onClick={async () => { await markRead({ data: { id: m.id, is_read: !m.is_read } }); reload(); }}
                  className="p-2 rounded-lg hover:bg-secondary" title={m.is_read ? "O'qilmagan deb belgilash" : "O'qilgan deb belgilash"}>
                  <Check className={`h-3.5 w-3.5 ${m.is_read ? "text-primary" : ""}`} />
                </button>
                <button onClick={async () => { if (confirm("O'chirilsinmi?")) { await removeMsg({ data: { id: m.id } }); reload(); } }}
                  className="p-2 rounded-lg hover:bg-destructive/20 text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

/* ---------------- helpers ---------------- */

function StatCard({ Icon, label, value }: { Icon: typeof Eye; label: string; value: string }) {
  return (
    <div className="rounded-2xl glass premium-border p-4 sm:p-5 flex items-center gap-3">
      <div className="h-11 w-11 rounded-xl bg-gradient-moon shadow-glow grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-xl sm:text-2xl font-display font-bold text-gradient-anim">{value}</div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl glass premium-border p-4 sm:p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{title}</div>
      {children}
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <div className="text-center py-10 text-sm text-muted-foreground">{text}</div>;
}

function FieldRow({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-secondary/50 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}

function flagEmoji(country: string): string {
  if (!country || country.length !== 2) return "🌐";
  const A = 0x1f1e6;
  return String.fromCodePoint(...country.toUpperCase().split("").map((c) => A + c.charCodeAt(0) - 65));
}
