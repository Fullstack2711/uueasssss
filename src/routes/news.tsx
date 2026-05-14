import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { listNews } from "@/lib/news.functions";
import { Calendar, Newspaper, ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Yangiliklar — UUEA" },
      { name: "description", content: "UUEA so'nggi yangiliklari, e'lonlari va bitimlari." },
      { property: "og:title", content: "UUEA Yangiliklar" },
      { property: "og:description", content: "USA × O'zbekiston biznes hamjamiyatining so'nggi yangiliklari." },
    ],
  }),
  component: NewsPage,
});

type Row = {
  id: string; title_uz: string; title_en: string; body_uz: string; body_en: string;
  tag: string | null; image_url: string | null; published_at: string;
};

function NewsPage() {
  return (
    <I18nProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <main className="pt-28 md:pt-36 pb-20">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="h-4 w-4" /> Bosh sahifa
            </Link>
            <NewsBody />
          </div>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

function NewsBody() {
  const { lang } = useI18n();
  const fetchNews = useServerFn(listNews);
  const [items, setItems] = useState<Row[] | null>(null);

  useEffect(() => {
    fetchNews({ data: { limit: 50 } }).then((r) => setItems(r.items as Row[]));
  }, [fetchNews]);

  return (
    <>
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary">
          <span className="h-px w-6 md:w-8 bg-primary" />
          {lang === "uz" ? "YANGILIKLAR" : "NEWS"}
          <span className="h-px w-6 md:w-8 bg-primary" />
        </div>
        <h1 className="mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient-anim">
          {lang === "uz" ? "Barcha yangiliklar" : "All news"}
        </h1>
      </div>

      {items === null ? (
        <div className="grid place-items-center py-20"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          {lang === "uz" ? "Hozircha yangiliklar yo'q" : "No news yet"}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((n, i) => (
            <Reveal key={n.id} delay={i * 80} as="article"
              className="group relative p-6 md:p-7 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <div className="relative flex items-center justify-between gap-2 mb-4">
                {n.tag && (
                  <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-primary/30 text-primary">
                    {n.tag}
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground ml-auto">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(n.published_at).toLocaleDateString(lang === "uz" ? "uz-UZ" : "en-US", { day: "numeric", month: "short", year: "numeric" })}
                </div>
              </div>
              {n.image_url ? (
                <img src={n.image_url} alt="" className="relative w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
              ) : (
                <div className="relative h-11 w-11 mb-3 rounded-xl bg-gradient-moon shadow-glow flex items-center justify-center">
                  <Newspaper className="h-5 w-5 text-primary-foreground" />
                </div>
              )}
              <h3 className="relative text-base md:text-lg font-display font-semibold leading-snug">
                {lang === "uz" ? n.title_uz : n.title_en}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground flex-1 whitespace-pre-wrap">
                {lang === "uz" ? n.body_uz : n.body_en}
              </p>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
