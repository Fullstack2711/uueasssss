import { useEffect, useState } from "react";
import logo from "@/assets/uuea-logo.png";
import { useI18n, dict } from "@/lib/i18n";
import { Phone, Menu, X } from "lucide-react";

type Key = keyof typeof dict;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: Array<[string, Key]> = [
    ["#about", "nav.about"],
    ["#services", "nav.services"],
    ["#portfolio", "nav.portfolio"],
    ["#results", "nav.results"],
    ["#news", "nav.news"],
    ["#pricing", "nav.pricing"],
    ["#faq", "nav.faq"],
    ["#contact", "nav.contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="UUEA" className="h-16 md:h-24 lg:h-28 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t(key)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+13125550199" className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <Phone className="h-4 w-4 text-primary" />
            +1 (312) 555-0199
          </a>
          <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
            {(["uz", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full uppercase tracking-wider transition ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-moon text-primary-foreground shadow-moon hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            {t("nav.join")}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center rounded-full border border-border p-0.5 text-[11px]">
            {(["uz", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="text-foreground p-1" onClick={() => setOpen((o) => !o)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border mt-3 py-6 px-6 space-y-4">
          {links.map(([href, key]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t(key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            {(["uz", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs uppercase ${lang === l ? "bg-primary text-primary-foreground" : "border border-border"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
