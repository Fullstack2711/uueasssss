import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { adminExists, claimFirstAdmin } from "@/lib/admin.functions";
import { Loader2, Shield, LogIn, UserPlus } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin — UUEA" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"loading" | "login" | "signup">("loading");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session.session) {
        navigate({ to: "/admin/dashboard" });
        return;
      }
      const r = await adminExists();
      if (!mounted) return;
      setMode(r.exists ? "login" : "signup");
    })();
    return () => {
      mounted = false;
    };
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/dashboard` },
        });
        if (error) throw error;
        const userId = data.user?.id;
        if (!userId) throw new Error("Foydalanuvchi yaratilmadi");
        await claimFirstAdmin({ data: { user_id: userId } });
        // ensure session
        if (!data.session) {
          await supabase.auth.signInWithPassword({ email, password });
        }
        navigate({ to: "/admin/dashboard" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin/dashboard" });
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
            {mode === "signup"
              ? "Birinchi admin hisobini yarating"
              : "Boshqaruv paneliga kirish"}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl glass premium-border p-6 space-y-4"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Parol
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            {mode === "signup" && (
              <p className="mt-2 text-xs text-muted-foreground">
                Kamida 8 ta belgi. Bu hisob — yagona admin.
              </p>
            )}
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-moon text-primary-foreground font-medium shadow-moon hover:shadow-glow transition-all disabled:opacity-60"
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : mode === "signup" ? (
              <>
                <UserPlus className="h-4 w-4" /> Admin yaratish
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" /> Kirish
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
