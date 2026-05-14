import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useServerFn, t as trackClick } from "./router-DeVYuCpg.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as listNews, s as submitContact } from "./contact.functions-Bb-INR5k.mjs";
import "../_libs/seroval.mjs";
import { g as Phone, X, h as Menu, d as Earth, A as ArrowRight, i as ChevronDown, j as Lightbulb, k as ShieldCheck, H as Handshake, l as Scale, m as TrendingUp, n as Star, o as Send, B as Briefcase, f as Check, p as MapPin, L as LoaderCircle, q as Calendar, N as Newspaper, r as Award, s as Crown, G as Gem, t as Building2, u as Trophy, M as Mail } from "../_libs/lucide-react.mjs";
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
import "./server-0F1_JvhK.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
import "../_libs/zod.mjs";
const dict = {
  "nav.about": { uz: "Biz haqimizda", en: "About" },
  "nav.services": { uz: "Xizmatlar", en: "Services" },
  "nav.portfolio": { uz: "Portfolio", en: "Portfolio" },
  "nav.results": { uz: "Natijalar", en: "Results" },
  "nav.testimonials": { uz: "Sharhlar", en: "Testimonials" },
  "nav.news": { uz: "Yangiliklar", en: "News" },
  "nav.faq": { uz: "Savollar", en: "FAQ" },
  "nav.contact": { uz: "Aloqa", en: "Contact" },
  "news.eyebrow": { uz: "YANGILIKLAR", en: "NEWS" },
  "news.title": { uz: "So'nggi yangiliklar va e'lonlar", en: "Latest news & announcements" },
  "news.read": { uz: "Batafsil o'qish", en: "Read more" },
  "nav.join": { uz: "A'zo bo'lish", en: "Join us" },
  "nav.pricing": { uz: "Narxlar", en: "Pricing" },
  "pricing.eyebrow": { uz: "NARXLAR", en: "PRICING" },
  "pricing.title": { uz: "A'zolik rejalari", en: "Membership plans" },
  "pricing.individual": { uz: "Shaxsiy", en: "Individual" },
  "pricing.corporate": { uz: "Korporativ", en: "Corporate" },
  "pricing.cta": { uz: "Tanlash", en: "Choose plan" },
  "hero.eyebrow": { uz: "USA × O'ZBEKISTON BIZNES KO'PRIGI", en: "USA × UZBEKISTAN BUSINESS BRIDGE" },
  "hero.title1": { uz: "AQSH va O'zbekiston o'rtasidagi", en: "Your trusted bridge between" },
  "hero.title2": { uz: "ishonchli biznes ko'prigi", en: "the USA and Uzbekistan" },
  "hero.sub": {
    uz: "140+ kompaniyani birlashtirgan assotsiatsiya. Eksport-import, investitsiya va xalqaro hamkorlik uchun premium platforma.",
    en: "An association uniting 140+ companies. A premium platform for export-import, investment and international cooperation."
  },
  "hero.cta1": { uz: "A'zo bo'lish", en: "Become a member" },
  "hero.cta2": { uz: "Platformaga tashrif buyirish", en: "Visit our platform" },
  "stats.members": { uz: "Faol a'zolar", en: "Active members" },
  "stats.invest": { uz: "Investitsiya hajmi", en: "Investment volume" },
  "stats.deals": { uz: "B2B bitimlar", en: "B2B deals" },
  "stats.years": { uz: "Yillik tajriba", en: "Years of experience" },
  "about.eyebrow": { uz: "BIZ HAQIMIZDA", en: "ABOUT US" },
  "about.title": { uz: "UUEA — biznes diplomatiyasi sanati", en: "UUEA — the art of business diplomacy" },
  "about.body": {
    uz: "2015-yildan beri AQSH va O'zbekiston tadbirkorlarini bog'lab, 140+ kompaniyaga xalqaro bozorlarda muvaffaqiyatga erishishda yordam berib kelmoqdamiz.",
    en: "Since 2015 we have connected entrepreneurs from the USA and Uzbekistan, helping 140+ companies succeed on international markets."
  },
  "about.mission": { uz: "Missiya", en: "Mission" },
  "about.mission.body": { uz: "Mustahkam biznes ko'prik o'rnatish va savdo aloqalarini rivojlantirish.", en: "Build a strong business bridge and grow trade relations." },
  "about.vision": { uz: "Viziya", en: "Vision" },
  "about.vision.body": { uz: "Ikki davlat o'rtasida yetakchi biznes assotsiatsiya bo'lish.", en: "Be the leading business association between the two nations." },
  "about.values": { uz: "Qadriyatlar", en: "Values" },
  "about.values.body": { uz: "Ishonch, innovatsiya va hamkorlik — har bir loyihada.", en: "Trust, innovation and partnership — in every project." },
  "services.eyebrow": { uz: "XIZMATLARIMIZ", en: "OUR SERVICES" },
  "services.title": { uz: "Premium darajadagi xizmatlar", en: "Premium-grade services" },
  "services.s1.t": { uz: "Eksport-Import konsalting", en: "Export-Import consulting" },
  "services.s1.b": { uz: "Xalqaro savdo, bojxona va sertifikatsiya bo'yicha to'liq qo'llab-quvvatlash.", en: "Full support for international trade, customs and certification." },
  "services.s2.t": { uz: "Networking va Forumlar", en: "Networking & Forums" },
  "services.s2.b": { uz: "Yiliga 12+ B2B uchrashuv, VIP biznes kechalar va xalqaro ko'rgazmalar.", en: "12+ B2B meetings yearly, VIP business nights and global expos." },
  "services.s3.t": { uz: "Yuridik va Viza yordami", en: "Legal & Visa support" },
  "services.s3.b": { uz: "B1/B2 vizalar, shartnomalar, IP himoyasi va kompaniyani ro'yxatdan o'tkazish.", en: "B1/B2 visas, contracts, IP protection and company registration." },
  "services.s4.t": { uz: "Investitsiya va Moliya", en: "Investment & Finance" },
  "services.s4.b": { uz: "Fond jalb qilish, biznes-reja tahlili va AQSH investorlari bilan ulanish.", en: "Fundraising, business plan analysis and access to US investors." },
  "portfolio.eyebrow": { uz: "PORTFOLIO", en: "PORTFOLIO" },
  "portfolio.title": { uz: "Muvaffaqiyatli loyihalarimiz", en: "Our successful projects" },
  "results.eyebrow": { uz: "NATIJALAR", en: "RESULTS" },
  "results.title": { uz: "Raqamlarda kuchimiz", en: "Our strength in numbers" },
  "testi.eyebrow": { uz: "MIJOZLAR FIKRI", en: "TESTIMONIALS" },
  "testi.title": { uz: "Hamkorlarimiz biz haqimizda", en: "What partners say about us" },
  "faq.eyebrow": { uz: "FAQ", en: "FAQ" },
  "faq.title": { uz: "Ko'p beriladigan savollar", en: "Frequently asked questions" },
  "process.eyebrow": { uz: "ISH JARAYONI", en: "HOW WE WORK" },
  "process.title": { uz: "4 bosqichli yo'l xaritasi", en: "A 4-step roadmap" },
  "p1.t": { uz: "Ariza", en: "Application" },
  "p1.b": { uz: "Online ariza to'ldirish", en: "Fill in an online form" },
  "p2.t": { uz: "Konsultatsiya", en: "Consultation" },
  "p2.b": { uz: "Bepul dastlabki uchrashuv", en: "Free initial meeting" },
  "p3.t": { uz: "Strategiya", en: "Strategy" },
  "p3.b": { uz: "Biznes rejasi ishlab chiqish", en: "Business plan development" },
  "p4.t": { uz: "Natija", en: "Result" },
  "p4.b": { uz: "Hamkorlik va muvaffaqiyat", en: "Partnership and success" },
  "regions.eyebrow": { uz: "XIZMAT HUDUDLARI", en: "SERVICE REGIONS" },
  "regions.title": { uz: "Ikki qit'ada faolmiz", en: "Active across two continents" },
  "regions.us": { uz: "AQSH ofislari", en: "USA offices" },
  "regions.uz": { uz: "O'zbekiston ofislari", en: "Uzbekistan offices" },
  "contact.eyebrow": { uz: "ALOQA", en: "GET IN TOUCH" },
  "contact.title": { uz: "Keling, hamkorlikni boshlaymiz", en: "Let's start a partnership" },
  "contact.name": { uz: "Ismingiz", en: "Your name" },
  "contact.company": { uz: "Kompaniya", en: "Company" },
  "contact.email": { uz: "Email", en: "Email" },
  "contact.phone": { uz: "Telefon", en: "Phone" },
  "contact.msg": { uz: "Xabar", en: "Message" },
  "contact.send": { uz: "Arizani yuborish", en: "Send application" },
  "footer.rights": { uz: "Barcha huquqlar himoyalangan", en: "All rights reserved" }
};
const I18nCtx = reactExports.createContext(null);
function I18nProvider({ children }) {
  const [lang, setLang] = reactExports.useState("uz");
  const t = (k) => dict[k][lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nCtx.Provider, { value: { lang, setLang, t }, children });
}
function useI18n() {
  const ctx = reactExports.useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
const logo = "/assets/uuea-logo-jKjrC34L.png";
function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["#about", "nav.about"],
    ["#services", "nav.services"],
    ["#portfolio", "nav.portfolio"],
    ["#results", "nav.results"],
    ["#news", "nav.news"],
    ["#pricing", "nav.pricing"],
    ["#faq", "nav.faq"],
    ["#contact", "nav.contact"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-3 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "UUEA", className: "h-16 md:h-24 lg:h-28 w-auto object-contain transition-transform group-hover:scale-105" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: links.map(([href, key]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href,
              className: "text-sm text-muted-foreground hover:text-foreground transition-colors relative group",
              children: [
                t(key),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" })
              ]
            },
            href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+13125550199", className: "hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
              "+1 (312) 555-0199"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center rounded-full border border-border p-0.5 text-xs", children: ["uz", "en"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLang(l),
                className: `px-3 py-1 rounded-full uppercase tracking-wider transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                children: l
              },
              l
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-moon text-primary-foreground shadow-moon hover:shadow-glow transition-all hover:-translate-y-0.5",
                children: t("nav.join")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:hidden items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center rounded-full border border-border p-0.5 text-[11px]", children: ["uz", "en"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLang(l),
                className: `px-2.5 py-1 rounded-full uppercase tracking-wider transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                children: l
              },
              l
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-foreground p-1", onClick: () => setOpen((o) => !o), "aria-label": "menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden glass-strong border-t border-border mt-3 py-6 px-6 space-y-4", children: [
          links.map(([href, key]) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, onClick: () => setOpen(false), className: "block text-sm text-muted-foreground hover:text-foreground", children: t(key) }, href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 pt-2", children: ["uz", "en"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLang(l),
              className: `px-3 py-1 rounded-full text-xs uppercase ${lang === l ? "bg-primary text-primary-foreground" : "border border-border"}`,
              children: l
            },
            l
          )) })
        ] })
      ]
    }
  );
}
const heroImg = "/assets/hero-bridge-_7m_6ryl.jpg";
const aboutImg = "/assets/about-handshake-B-9ILaDV.jpg";
const sectionBg = "/assets/section-bg-CYiu3_TH.jpg";
function Reveal({ children, className = "", delay = 0, as = "div", y = 24 }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      style: {
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0
      },
      className: `transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`,
      children
    }
  );
}
function Hero() {
  const { t } = useI18n();
  const trackBtn = useServerFn(trackClick);
  const onPlatformClick = () => {
    trackBtn({ data: { button_id: "visit_platform" } }).catch(() => {
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover opacity-95",
        width: 1920,
        height: 1080
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-6 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 sm:gap-3 pl-1 pr-3 sm:pr-5 py-1 sm:py-1.5 rounded-full glass premium-border shadow-glow mb-6 md:mb-8 max-w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-moon shadow-moon shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-foreground/90 font-medium truncate", children: t("hero.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t("hero.title1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-anim", children: t("hero.title2") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed", children: t("hero.sub") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "btn-shimmer group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-moon text-primary-foreground text-sm sm:text-base font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-1",
            children: [
              t("hero.cta1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: onPlatformClick,
            className: "btn-shimmer group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass text-foreground text-sm sm:text-base hover:bg-card/80 transition-all premium-border hover:-translate-y-1",
            children: [
              t("hero.cta2"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" }) })
  ] });
}
function Stats() {
  const { t } = useI18n();
  const items = [
    { v: "140+", k: "stats.members" },
    { v: "$400M+", k: "stats.invest" },
    { v: "1,000+", k: "stats.deals" },
    { v: "10+", k: "stats.years" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-14 md:py-20 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 100, className: "text-center group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient-anim stat-glow transition-transform duration-500 group-hover:scale-110", children: it.v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground", children: t(it.k) })
  ] }, it.k)) }) });
}
function About() {
  const { t } = useI18n();
  const cards = [
    { Icon: Earth, title: t("about.mission"), body: t("about.mission.body") },
    { Icon: Lightbulb, title: t("about.vision"), body: t("about.vision.body") },
    { Icon: ShieldCheck, title: t("about.values"), body: t("about.values.body") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-primary/20 blur-3xl rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: aboutImg,
          alt: "Partnership",
          loading: "lazy",
          width: 1280,
          height: 960,
          className: "relative rounded-2xl md:rounded-3xl premium-border shadow-premium"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("about.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient", children: t("about.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed", children: t("about.body") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: cards.map(({ Icon, title, body }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 120, className: "p-5 rounded-2xl glass premium-border glow-border spotlight hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary icon-pop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: body })
      ] }, title)) })
    ] })
  ] }) });
}
function Services() {
  const { t } = useI18n();
  const items = [
    { Icon: Earth, t: t("services.s1.t"), b: t("services.s1.b") },
    { Icon: Handshake, t: t("services.s2.t"), b: t("services.s2.b") },
    { Icon: Scale, t: t("services.s3.t"), b: t("services.s3.b") },
    { Icon: TrendingUp, t: t("services.s4.t"), b: t("services.s4.b") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-20 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sectionBg, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-50", loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("services.eyebrow"), title: t("services.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6", children: items.map(({ Icon, t: title, b }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Reveal,
        {
          delay: i * 120,
          className: "group relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start gap-4 md:gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 md:h-7 md:w-7 text-primary-foreground icon-pop" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tracking-widest text-primary mb-1.5 md:mb-2", children: [
                  "0",
                  i + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-display font-semibold", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm md:text-base text-muted-foreground leading-relaxed", children: b })
              ] })
            ] })
          ]
        },
        title
      )) })
    ] })
  ] });
}
function Portfolio() {
  const { t, lang } = useI18n();
  const projects = [
    {
      tag: "Textile",
      titleUz: "O'zbek tekstilini AQShga eksport",
      titleEn: "Uzbek textile export to USA",
      bodyUz: "Tashkent Textile Group — $2.5M eksport, 3 ta shtatda distribyutsiya.",
      bodyEn: "Tashkent Textile Group — $2.5M exports, distribution in 3 US states.",
      stat: "$2.5M"
    },
    {
      tag: "Tech",
      titleUz: "IT startapga AQSH investitsiyasi",
      titleEn: "US investment in an IT startup",
      bodyUz: "UzTech Solutions — $500K investitsiya, Silicon Valley hamkorlik.",
      bodyEn: "UzTech Solutions — $500K raised, Silicon Valley partnership.",
      stat: "$500K"
    },
    {
      tag: "Organic",
      titleUz: "Organik mahsulotlar",
      titleEn: "Organic agricultural products",
      bodyUz: "Samarkand Organic Foods — Walmart va Whole Foods shartnomalari.",
      bodyEn: "Samarkand Organic Foods — Walmart and Whole Foods deals.",
      stat: "2 retailers"
    },
    {
      tag: "Logistics",
      titleUz: "Logistika kompaniya filiali",
      titleEn: "Logistics company branch",
      bodyUz: "American Logistics Inc. — Toshkentda ofis, 50+ ish o'rni.",
      bodyEn: "American Logistics Inc. — Tashkent office, 50+ jobs created.",
      stat: "50+ jobs"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "relative py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("portfolio.eyebrow"), title: t("portfolio.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 100, as: "article", className: "group relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight hover:shadow-moon hover:-translate-y-1 transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-5 md:mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs tracking-widest uppercase px-2.5 md:px-3 py-1 rounded-full border border-primary/30 text-primary", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl md:text-2xl font-display font-bold text-gradient-anim stat-glow whitespace-nowrap", children: p.stat })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-2xl font-display font-semibold leading-tight", children: lang === "uz" ? p.titleUz : p.titleEn }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 md:mt-3 text-sm md:text-base text-muted-foreground", children: lang === "uz" ? p.bodyUz : p.bodyEn }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 md:mt-6 flex items-center gap-2 text-sm text-primary md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all duration-500", children: [
        lang === "uz" ? "Batafsil" : "Read more",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }, i)) })
  ] }) });
}
function Results() {
  const { t, lang } = useI18n();
  const items = [
    { v: "150+", l: lang === "uz" ? "Faol a'zolar" : "Active members" },
    { v: "$400M+", l: lang === "uz" ? "Investitsiya hajmi" : "Investment volume" },
    { v: "270+", l: lang === "uz" ? "2026 prognoz" : "2026 forecast" },
    { v: "87%", l: lang === "uz" ? "Mamnunlik" : "Satisfaction" },
    { v: "12+", l: lang === "uz" ? "Yillik forumlar" : "Yearly forums" },
    { v: "35%+", l: lang === "uz" ? "Konversiya" : "Conversion" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "results", className: "relative py-20 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-premium" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("results.eyebrow"), title: t("results.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden premium-border", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 80, className: "bg-card p-6 sm:p-8 md:p-10 text-center group hover:bg-secondary transition-colors spotlight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient-anim stat-glow transition-transform duration-500 group-hover:scale-110", children: it.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase", children: it.l })
      ] }, it.l)) })
    ] })
  ] });
}
function Testimonials() {
  const { t, lang } = useI18n();
  const reviews = [
    {
      name: "Aziz Rahimov",
      role: "CEO, Tashkent Textile Group",
      uz: "UUEA biznesimizni xalqaro darajaga olib chiqish uchun eng yaxshi hamkor! Eksportimiz 4 baravar oshdi.",
      en: "UUEA is the best partner to take our business international. Exports grew 4×."
    },
    {
      name: "John Peterson",
      role: "COO, American Logistics Inc.",
      uz: "Toshkentda ofis ochishda professional yordam berishdi — 6 oy ichida 50+ ish o'rni yaratdik.",
      en: "Professional support opening our Tashkent office — 50+ jobs in 6 months."
    },
    {
      name: "Sherzod Aliyev",
      role: "Director, Samarkand Organic",
      uz: "Networking forumlarida 5 ta hamkor topdim. Savdo hajmim 3 baravar oshdi!",
      en: "Found 5 partners at networking forums. Sales tripled!"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("testi.eyebrow"), title: t("testi.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 120, className: "p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight flex flex-col hover:-translate-y-1 transition-transform duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary mb-3 md:mb-4", children: Array.from({ length: 5 }).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm md:text-base text-foreground/90 leading-relaxed flex-1", children: [
        '"',
        lang === "uz" ? r.uz : r.en,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 md:mt-6 pt-5 md:pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-muted-foreground", children: r.role })
      ] })
    ] }, r.name)) })
  ] }) });
}
function FAQ() {
  const { t, lang } = useI18n();
  const items = [
    {
      q_uz: "A'zolik badali qancha?",
      q_en: "How much is the membership?",
      a_uz: "Asosiy: $500/yil, Premium: $1,200/yil. Premium paketga barcha forumlar va to'liq yuridik yordam kiradi.",
      a_en: "Basic: $500/year, Premium: $1,200/year. Premium includes all forums and full legal support."
    },
    {
      q_uz: "A'zo bo'lish talablari nima?",
      q_en: "What are the membership requirements?",
      a_uz: "AQSH yoki O'zbekistonda rasmiy ro'yxatdan o'tgan kompaniya bo'lishi kerak.",
      a_en: "A legally registered company in the USA or Uzbekistan."
    },
    {
      q_uz: "Viza olishda yordam berasizmi?",
      q_en: "Do you help with visas?",
      a_uz: "Ha, B1/B2 biznes vizalari bo'yicha to'liq qo'llab-quvvatlashni taqdim etamiz.",
      a_en: "Yes, we provide full B1/B2 business visa support."
    },
    {
      q_uz: "Startaplarga qanday yordam bor?",
      q_en: "What support do startups get?",
      a_uz: "Maxsus investitsiya dasturlari, mentorlik va Silicon Valley aloqalar.",
      a_en: "Dedicated investment programs, mentoring and Silicon Valley access."
    },
    {
      q_uz: "Qanday imtiyozlar mavjud?",
      q_en: "What benefits are included?",
      a_uz: "Forumlar, bepul konsultatsiya, B2B networking, viza yordam va PR imkoniyatlari.",
      a_en: "Forums, free consulting, B2B networking, visa support, PR opportunities."
    }
  ];
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("faq.eyebrow"), title: t("faq.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 space-y-3", children: items.map((it, i) => {
      const active = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass premium-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(active ? null : i),
            className: "w-full text-left p-5 md:p-6 flex items-center justify-between gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-medium text-base md:text-lg", children: lang === "uz" ? it.q_uz : it.q_en }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 shrink-0 text-primary transition-transform ${active ? "rotate-180" : ""}` })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed", children: lang === "uz" ? it.a_uz : it.a_en }) }) })
      ] }, i);
    }) })
  ] }) });
}
function Process() {
  const { t } = useI18n();
  const steps = [
    { Icon: Send, t: t("p1.t"), b: t("p1.b") },
    { Icon: Handshake, t: t("p2.t"), b: t("p2.b") },
    { Icon: Briefcase, t: t("p3.t"), b: t("p3.b") },
    { Icon: Check, t: t("p4.t"), b: t("p4.b") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "py-20 md:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("process.eyebrow"), title: t("process.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 150, className: "relative text-center group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center moon-ring transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-5 w-5 md:h-6 md:w-6 text-primary-foreground icon-pop" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] md:text-xs tracking-widest text-primary", children: [
          "STEP 0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display font-semibold text-base md:text-lg", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs md:text-sm text-muted-foreground", children: s.b })
      ] }, s.t))
    ] })
  ] }) });
}
function Regions() {
  const { t, lang } = useI18n();
  const us = ["New York", "Chicago", "Los Angeles", "Houston"];
  const uz = ["Toshkent", "Samarqand", "Buxoro", "Andijon"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "regions", className: "py-20 md:py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-premium" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("regions.eyebrow"), title: t("regions.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6", children: [
        { title: t("regions.us"), cities: us, flag: "🇺🇸" },
        { title: t("regions.uz"), cities: lang === "uz" ? uz : ["Tashkent", "Samarkand", "Bukhara", "Andijan"], flag: "🇺🇿" }
      ].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 150, className: "p-6 md:p-10 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl", children: b.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold", children: b.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 md:mt-8 grid grid-cols-2 gap-2 md:gap-3", children: b.cities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/90 hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary shrink-0" }),
          " ",
          c
        ] }, c)) })
      ] }, b.title)) })
    ] })
  ] });
}
function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = reactExports.useState(false);
  const [busy, setBusy] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", company: "", email: "", phone: "", message: "" });
  const send = useServerFn(submitContact);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error(lang === "uz" ? "Ism va xabar majburiy" : "Name and message are required");
      return;
    }
    setBusy(true);
    try {
      await send({ data: { name: form.name, company: form.company, email: form.email, phone: form.phone, message: form.message } });
      setSent(true);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      toast.success(lang === "uz" ? "Xabaringiz yuborildi!" : "Your message has been sent!");
    } catch {
      toast.error(lang === "uz" ? "Xatolik. Qayta urinib ko'ring" : "Failed. Please try again");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-20 md:py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/15 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("contact.eyebrow"), title: t("contact.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 md:mt-16 grid lg:grid-cols-5 gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3 md:space-y-4", children: [
          { Icon: Mail, l: "Email", v: "info@uuea.org" },
          { Icon: Phone, l: lang === "uz" ? "Telefon" : "Phone", v: "+1 (312) 555-0199" },
          { Icon: MapPin, l: lang === "uz" ? "Manzil" : "Address", v: "Chicago, IL · Toshkent, UZ" }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-5 rounded-2xl glass premium-border flex items-start gap-3 md:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-moon flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground", children: c.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm md:text-base font-medium break-words", children: c.v })
          ] })
        ] }, c.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "lg:col-span-3 p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.name"), value: form.name, onChange: (v) => setForm({ ...form, name: v }), required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.company"), value: form.company, onChange: (v) => setForm({ ...form, company: v }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.email"), type: "email", value: form.email, onChange: (v) => setForm({ ...form, email: v }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.phone"), type: "tel", value: form.phone, onChange: (v) => setForm({ ...form, phone: v }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: t("contact.msg") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 4,
                required: true,
                value: form.message,
                onChange: (e) => setForm({ ...form, message: e.target.value }),
                className: "w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: busy,
              className: "btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 rounded-full bg-gradient-moon text-primary-foreground text-sm md:text-base font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-60",
              children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
                " ",
                lang === "uz" ? "Yuborildi" : "Sent"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                t("contact.send"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
              ] })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Field({ label, type = "text", value, onChange, required }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        required,
        value: value ?? "",
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition"
      }
    )
  ] });
}
function News() {
  const { t, lang } = useI18n();
  const fetchNews = useServerFn(listNews);
  const [items, setItems] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetchNews({ data: { limit: 3 } }).then((r) => setItems(r.items)).catch(() => setItems([]));
  }, [fetchNews]);
  const fmt = (d) => new Date(d).toLocaleDateString(lang === "uz" ? "uz-UZ" : "en-US", { day: "numeric", month: "short", year: "numeric" });
  if (items !== null && items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "news", className: "relative py-20 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("news.eyebrow"), title: t("news.title") }),
      items === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6", children: items.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Reveal,
        {
          delay: i * 120,
          as: "article",
          className: "group relative p-6 md:p-7 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between gap-2 mb-4 md:mb-5", children: [
              n.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-widest uppercase px-2.5 md:px-3 py-1 rounded-full border border-primary/30 text-primary", children: n.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground ml-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
                " ",
                fmt(n.published_at)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-11 w-11 md:h-12 md:w-12 mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-5 w-5 text-primary-foreground icon-pop" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative text-base md:text-lg font-display font-semibold leading-snug", children: lang === "uz" ? n.title_uz : n.title_en }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm text-muted-foreground flex-1 line-clamp-3", children: lang === "uz" ? n.body_uz : n.body_en })
          ]
        },
        n.id
      )) }) })
    ] })
  ] });
}
function Pricing() {
  const { t, lang } = useI18n();
  const [tab, setTab] = reactExports.useState("individual");
  const individual = [
    {
      name: "Silver",
      price: "$99",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Tarmoq yaratayotgan tadbirkorlar uchun" : "For entrepreneurs building their network",
      Icon: Award
    },
    {
      name: "Gold",
      price: "$249",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Jiddiy biznes egalari uchun premium kirish" : "Premium access for serious business owners",
      Icon: Crown,
      featured: true
    },
    {
      name: "Founding",
      price: "$499",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Assotsiatsiya kelajagini shakllantiruvchi liderlar uchun" : "For leaders shaping the association's future",
      Icon: Gem
    }
  ];
  const corporate = [
    {
      name: "Bronze Sponsor",
      price: "$1,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Korporativ a'zolikning boshlang'ich darajasi" : "Entry-level corporate membership",
      Icon: Building2
    },
    {
      name: "Silver Sponsor",
      price: "$3,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Kengaytirilgan ko'rinish va imkoniyatlar" : "Expanded visibility and benefits",
      Icon: Award
    },
    {
      name: "Gold Sponsor",
      price: "$7,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Yetakchi homiylik va premium imtiyozlar" : "Leading sponsorship and premium perks",
      Icon: Trophy,
      featured: true
    },
    {
      name: "Platinum Partner",
      price: "$15,000",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Strategik hamkorlik va eksklyuziv kirish" : "Strategic partnership and exclusive access",
      Icon: Gem
    }
  ];
  const plans = tab === "individual" ? individual : corporate;
  const cols = tab === "individual" ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative py-20 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-premium opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t("pricing.eyebrow"), title: t("pricing.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 md:mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-1 p-1 md:p-1.5 rounded-full glass premium-border", children: ["individual", "corporate"].map((k) => {
        const active = tab === k;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setTab(k),
            className: `px-4 sm:px-6 py-2 md:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all ${active ? "bg-gradient-moon text-primary-foreground shadow-moon" : "text-muted-foreground hover:text-foreground"}`,
            children: t(k === "individual" ? "pricing.individual" : "pricing.corporate")
          },
          k
        );
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-10 md:mt-14 grid gap-5 md:gap-6 ${cols}`, children: plans.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Reveal,
        {
          delay: i * 100,
          className: `relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col ${p.featured ? "ring-1 ring-primary/40 shadow-glow" : ""}`,
          children: [
            p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-4 md:top-5 md:right-5 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-moon text-primary-foreground shadow-moon", children: lang === "uz" ? "Tavsiya" : "Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-11 w-11 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center transition-transform duration-500 hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.Icon, { className: "h-5 w-5 text-primary-foreground icon-pop" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-4 md:mt-5 text-lg md:text-xl font-display font-semibold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-2 md:mt-3 flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl font-display font-bold text-gradient-anim stat-glow", children: p.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm text-muted-foreground", children: p.period })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 md:mt-3 text-sm text-muted-foreground flex-1", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: `relative mt-5 md:mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 ${p.featured ? "bg-gradient-moon text-primary-foreground shadow-moon hover:shadow-glow" : "glass premium-border text-foreground hover:bg-card/80"}`,
                children: [
                  t("pricing.cta"),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        `${tab}-${p.name}`
      )) }, tab)
    ] })
  ] });
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground text-center md:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3 flex-wrap justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "UUEA", className: "h-7 md:h-8 w-auto object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· USA × Uzbekistan Entrepreneurs Association" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " UUEA. ",
      t("footer.rights"),
      "."
    ] })
  ] }) });
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
    children
  ] });
}
function SectionHeader({ eyebrow, title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 md:w-8 bg-primary" }),
      eyebrow,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 md:w-8 bg-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 md:mt-5 text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-gradient-anim", children: title })
  ] });
}
function Index() {
  reactExports.useEffect(() => {
    const onMove = (e) => {
      const target = e.target;
      if (!target) return;
      const el = target.closest(".spotlight");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove, {
      passive: true
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Results, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Regions, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(News, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
export {
  Index as component
};
