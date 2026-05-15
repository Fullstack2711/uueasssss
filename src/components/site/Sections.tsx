import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-bridge.jpg";
import aboutImg from "@/assets/about-handshake.jpg";
import sectionBg from "@/assets/section-bg.jpg";
import logo from "@/assets/uuea-logo.png";
import {
  ArrowRight, Briefcase, Globe2, Scale, TrendingUp, Sparkles, ShieldCheck, Lightbulb,
  Handshake, MapPin, Mail, Phone, Send, Check, Star, ChevronDown, Calendar, Newspaper,
  Crown, Building2, Gem, Award, Trophy, Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { trackClick } from "@/lib/analytics.functions";
import { submitContact } from "@/lib/contact.functions";
import { listNews } from "@/lib/news.functions";

/* ---------- HERO ---------- */
export function Hero() {
  const { t } = useI18n();
  const onPlatformClick = () => {
    trackClick({ button_id: "visit_platform" }).catch(() => {});
  };
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow" />

      <div className="container relative mx-auto px-6 max-w-6xl">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 pl-1 pr-3 sm:pr-5 py-1 sm:py-1.5 rounded-full glass premium-border shadow-glow mb-6 md:mb-8 max-w-full">
            <span className="inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-moon shadow-moon shrink-0">
              <Globe2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-foreground" />
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-foreground/90 font-medium truncate">
              {t("hero.eyebrow")}
            </span>
            <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="text-gradient-anim">{t("hero.title2")}</span>
          </h1>

          <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.sub")}
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-moon text-primary-foreground text-sm sm:text-base font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-1"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPlatformClick}
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass text-foreground text-sm sm:text-base hover:bg-card/80 transition-all premium-border hover:-translate-y-1"
            >
              {t("hero.cta2")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
export function Stats() {
  const { t } = useI18n();
  const items = [
    { v: "140+", k: "stats.members" as const },
    { v: "$400M+", k: "stats.invest" as const },
    { v: "1,000+", k: "stats.deals" as const },
    { v: "10+", k: "stats.years" as const },
  ];
  return (
    <section className="relative py-14 md:py-20 border-y border-border">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 100} className="text-center group">
            <div className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient-anim stat-glow transition-transform duration-500 group-hover:scale-110">{it.v}</div>
            <div className="mt-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">{t(it.k)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  const { t } = useI18n();
  const cards = [
    { Icon: Globe2, title: t("about.mission"), body: t("about.mission.body") },
    { Icon: Lightbulb, title: t("about.vision"), body: t("about.vision.body") },
    { Icon: ShieldCheck, title: t("about.values"), body: t("about.values.body") },
  ];
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={aboutImg}
            alt="Partnership"
            loading="lazy"
            width={1280}
            height={960}
            className="relative rounded-2xl md:rounded-3xl premium-border shadow-premium"
          />
        </div>
        <div>
          <Eyebrow>{t("about.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient">
            {t("about.title")}
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{t("about.body")}</p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {cards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 120} className="p-5 rounded-2xl glass premium-border glow-border spotlight hover:-translate-y-1 transition-transform duration-500">
                <Icon className="h-6 w-6 text-primary icon-pop" />
                <div className="mt-3 font-display font-semibold">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
export function Services() {
  const { t } = useI18n();
  const items = [
    { Icon: Globe2, t: t("services.s1.t"), b: t("services.s1.b") },
    { Icon: Handshake, t: t("services.s2.t"), b: t("services.s2.b") },
    { Icon: Scale, t: t("services.s3.t"), b: t("services.s3.b") },
    { Icon: TrendingUp, t: t("services.s4.t"), b: t("services.s4.b") },
  ];
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <img src={sectionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6">
          {items.map(({ Icon, t: title, b }, i) => (
            <Reveal
              key={title}
              delay={i * 120}
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-4 md:gap-5">
                <div className="h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground icon-pop" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-widest text-primary mb-1.5 md:mb-2">0{i + 1}</div>
                  <h3 className="text-lg md:text-xl font-display font-semibold">{title}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
export function Portfolio() {
  const { t, lang } = useI18n();
  const projects = [
    {
      tag: "Textile",
      titleUz: "O'zbek tekstilini AQShga eksport",
      titleEn: "Uzbek textile export to USA",
      bodyUz: "Tashkent Textile Group — $2.5M eksport, 3 ta shtatda distribyutsiya.",
      bodyEn: "Tashkent Textile Group — $2.5M exports, distribution in 3 US states.",
      stat: "$2.5M",
    },
    {
      tag: "Tech",
      titleUz: "IT startapga AQSH investitsiyasi",
      titleEn: "US investment in an IT startup",
      bodyUz: "UzTech Solutions — $500K investitsiya, Silicon Valley hamkorlik.",
      bodyEn: "UzTech Solutions — $500K raised, Silicon Valley partnership.",
      stat: "$500K",
    },
    {
      tag: "Organic",
      titleUz: "Organik mahsulotlar",
      titleEn: "Organic agricultural products",
      bodyUz: "Samarkand Organic Foods — Walmart va Whole Foods shartnomalari.",
      bodyEn: "Samarkand Organic Foods — Walmart and Whole Foods deals.",
      stat: "2 retailers",
    },
    {
      tag: "Logistics",
      titleUz: "Logistika kompaniya filiali",
      titleEn: "Logistics company branch",
      bodyUz: "American Logistics Inc. — Toshkentda ofis, 50+ ish o'rni.",
      bodyEn: "American Logistics Inc. — Tashkent office, 50+ jobs created.",
      stat: "50+ jobs",
    },
  ];
  return (
    <section id="portfolio" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")} />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 100} as="article" className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight hover:shadow-moon hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between gap-3 mb-5 md:mb-6">
                <span className="text-[10px] md:text-xs tracking-widest uppercase px-2.5 md:px-3 py-1 rounded-full border border-primary/30 text-primary">{p.tag}</span>
                <span className="text-xl md:text-2xl font-display font-bold text-gradient-anim stat-glow whitespace-nowrap">{p.stat}</span>
              </div>
              <h3 className="text-lg md:text-2xl font-display font-semibold leading-tight">
                {lang === "uz" ? p.titleUz : p.titleEn}
              </h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground">{lang === "uz" ? p.bodyUz : p.bodyEn}</p>
              <div className="mt-5 md:mt-6 flex items-center gap-2 text-sm text-primary md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all duration-500">
                {lang === "uz" ? "Batafsil" : "Read more"} <ArrowRight className="h-4 w-4" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESULTS ---------- */
export function Results() {
  const { t, lang } = useI18n();
  const items = [
    { v: "150+", l: lang === "uz" ? "Faol a'zolar" : "Active members" },
    { v: "$400M+", l: lang === "uz" ? "Investitsiya hajmi" : "Investment volume" },
    { v: "270+", l: lang === "uz" ? "2026 prognoz" : "2026 forecast" },
    { v: "87%", l: lang === "uz" ? "Mamnunlik" : "Satisfaction" },
    { v: "12+", l: lang === "uz" ? "Yillik forumlar" : "Yearly forums" },
    { v: "35%+", l: lang === "uz" ? "Konversiya" : "Conversion" },
  ];
  return (
    <section id="results" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("results.eyebrow")} title={t("results.title")} />
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden premium-border">
          {items.map((it, i) => (
            <Reveal key={it.l} delay={i * 80} className="bg-card p-6 sm:p-8 md:p-10 text-center group hover:bg-secondary transition-colors spotlight">
              <div className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient-anim stat-glow transition-transform duration-500 group-hover:scale-110">{it.v}</div>
              <div className="mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase">{it.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function Testimonials() {
  const { t, lang } = useI18n();
  const reviews = [
    { name: "Aziz Rahimov", role: "CEO, Tashkent Textile Group",
      uz: "UUEA biznesimizni xalqaro darajaga olib chiqish uchun eng yaxshi hamkor! Eksportimiz 4 baravar oshdi.",
      en: "UUEA is the best partner to take our business international. Exports grew 4×." },
    { name: "John Peterson", role: "COO, American Logistics Inc.",
      uz: "Toshkentda ofis ochishda professional yordam berishdi — 6 oy ichida 50+ ish o'rni yaratdik.",
      en: "Professional support opening our Tashkent office — 50+ jobs in 6 months." },
    { name: "Sherzod Aliyev", role: "Director, Samarkand Organic",
      uz: "Networking forumlarida 5 ta hamkor topdim. Savdo hajmim 3 baravar oshdi!",
      en: "Found 5 partners at networking forums. Sales tripled!" },
  ];
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("testi.eyebrow")} title={t("testi.title")} />
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120} className="p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight flex flex-col hover:-translate-y-1 transition-transform duration-500">
              <div className="flex gap-1 text-primary mb-3 md:mb-4">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed flex-1">"{lang === "uz" ? r.uz : r.en}"</p>
              <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-border">
                <div className="font-display font-semibold">{r.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{r.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FAQ() {
  const { t, lang } = useI18n();
  const items = [
    { q_uz: "A'zolik badali qancha?", q_en: "How much is the membership?",
      a_uz: "Asosiy: $500/yil, Premium: $1,200/yil. Premium paketga barcha forumlar va to'liq yuridik yordam kiradi.",
      a_en: "Basic: $500/year, Premium: $1,200/year. Premium includes all forums and full legal support." },
    { q_uz: "A'zo bo'lish talablari nima?", q_en: "What are the membership requirements?",
      a_uz: "AQSH yoki O'zbekistonda rasmiy ro'yxatdan o'tgan kompaniya bo'lishi kerak.",
      a_en: "A legally registered company in the USA or Uzbekistan." },
    { q_uz: "Viza olishda yordam berasizmi?", q_en: "Do you help with visas?",
      a_uz: "Ha, B1/B2 biznes vizalari bo'yicha to'liq qo'llab-quvvatlashni taqdim etamiz.",
      a_en: "Yes, we provide full B1/B2 business visa support." },
    { q_uz: "Startaplarga qanday yordam bor?", q_en: "What support do startups get?",
      a_uz: "Maxsus investitsiya dasturlari, mentorlik va Silicon Valley aloqalar.",
      a_en: "Dedicated investment programs, mentoring and Silicon Valley access." },
    { q_uz: "Qanday imtiyozlar mavjud?", q_en: "What benefits are included?",
      a_uz: "Forumlar, bepul konsultatsiya, B2B networking, viza yordam va PR imkoniyatlari.",
      a_en: "Forums, free consulting, B2B networking, visa support, PR opportunities." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <div className="mt-12 md:mt-16 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={i} className="rounded-2xl glass premium-border overflow-hidden">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-3 md:gap-4"
                >
                  <span className="font-display font-medium text-base md:text-lg">{lang === "uz" ? it.q_uz : it.q_en}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${active ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{lang === "uz" ? it.a_uz : it.a_en}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
export function Process() {
  const { t } = useI18n();
  const steps = [
    { Icon: Send, t: t("p1.t"), b: t("p1.b") },
    { Icon: Handshake, t: t("p2.t"), b: t("p2.b") },
    { Icon: Briefcase, t: t("p3.t"), b: t("p3.b") },
    { Icon: Check, t: t("p4.t"), b: t("p4.b") },
  ];
  return (
    <section id="process" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("process.eyebrow")} title={t("process.title")} />
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 150} className="relative text-center group">
              <div className="mx-auto h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center moon-ring transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <s.Icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground icon-pop" />
              </div>
              <div className="mt-2 text-[10px] md:text-xs tracking-widest text-primary">STEP 0{i + 1}</div>
              <div className="mt-2 font-display font-semibold text-base md:text-lg">{s.t}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.b}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REGIONS ---------- */
export function Regions() {
  const { t, lang } = useI18n();
  const us = ["New York", "Chicago", "Los Angeles", "Houston"];
  const uz = ["Toshkent", "Samarqand", "Buxoro", "Andijon"];
  return (
    <section id="regions" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("regions.eyebrow")} title={t("regions.title")} />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6">
          {[
            { title: t("regions.us"), cities: us, flag: "🇺🇸" },
            { title: t("regions.uz"), cities: lang === "uz" ? uz : ["Tashkent", "Samarkand", "Bukhara", "Andijan"], flag: "🇺🇿" },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 150} className="p-6 md:p-10 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-3xl md:text-4xl">{b.flag}</div>
                <h3 className="text-xl md:text-2xl font-display font-semibold">{b.title}</h3>
              </div>
              <ul className="mt-6 md:mt-8 grid grid-cols-2 gap-2 md:gap-3">
                {b.cities.map((c) => (
                  <li key={c} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/90 hover:text-primary transition-colors">
                    <MapPin className="h-4 w-4 text-primary shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error(lang === "uz" ? "Ism va xabar majburiy" : "Name and message are required");
      return;
    }
    setBusy(true);
    try {
      await submitContact({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      setSent(true);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      toast.success(lang === "uz" ? "Xabaringiz yuborildi!" : "Your message has been sent!");
    } catch {
      toast.error(lang === "uz" ? "Xatolik. Qayta urinib ko'ring" : "Failed. Please try again");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="container relative mx-auto px-6 max-w-5xl">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} />

        <div className="mt-12 md:mt-16 grid lg:grid-cols-5 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {[
              { Icon: Mail, l: "Email", v: "info@uuea.org" },
              { Icon: Phone, l: lang === "uz" ? "Telefon" : "Phone", v: "+1 (312) 555-0199" },
              { Icon: MapPin, l: lang === "uz" ? "Manzil" : "Address", v: "Chicago, IL · Toshkent, UZ" },
            ].map((c) => (
              <div key={c.l} className="p-4 md:p-5 rounded-2xl glass premium-border flex items-start gap-3 md:gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-moon flex items-center justify-center shrink-0">
                  <c.Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                  <div className="mt-1 text-sm md:text-base font-medium break-words">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("contact.name")} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label={t("contact.company")} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Field label={t("contact.email")} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label={t("contact.phone")} type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{t("contact.msg")}</label>
              <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition" />
            </div>
            <button type="submit" disabled={busy}
              className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 rounded-full bg-gradient-moon text-primary-foreground text-sm md:text-base font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-60">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : sent ? <><Check className="h-4 w-4"/> {lang === "uz" ? "Yuborildi" : "Sent"}</> : <>{t("contact.send")} <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange, required }: { label: string; type?: string; value?: string; onChange?: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input type={type} required={required} value={value ?? ""} onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition" />
    </div>
  );
}

/* ---------- NEWS ---------- */
type NewsItem = {
  id: string; tag: string | null; published_at: string;
  title_uz: string; title_en: string; body_uz: string; body_en: string; image_url: string | null;
};

export function News() {
  const { t, lang } = useI18n();
  const [items, setItems] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    listNews({ limit: 3 })
      .then((r) => setItems(r.items as NewsItem[]))
      .catch(() => setItems([]));
  }, []);

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(lang === "uz" ? "uz-UZ" : "en-US", { day: "numeric", month: "short", year: "numeric" });

  if (items !== null && items.length === 0) return null;

  return (
    <section id="news" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("news.eyebrow")} title={t("news.title")} />
        {items === null ? (
          <div className="grid place-items-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
        ) : (
          <>
            <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
              {items.map((n, i) => (
                <Reveal key={n.id} delay={i * 120} as="article"
                  className="group relative p-6 md:p-7 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col">
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-between gap-2 mb-4 md:mb-5">
                    {n.tag && (
                      <span className="text-[10px] tracking-widest uppercase px-2.5 md:px-3 py-1 rounded-full border border-primary/30 text-primary">
                        {n.tag}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground ml-auto">
                      <Calendar className="h-3.5 w-3.5" /> {fmt(n.published_at)}
                    </div>
                  </div>
                  <div className="relative h-11 w-11 md:h-12 md:w-12 mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Newspaper className="h-5 w-5 text-primary-foreground icon-pop" />
                  </div>
                  <h3 className="relative text-base md:text-lg font-display font-semibold leading-snug">
                    {lang === "uz" ? n.title_uz : n.title_en}
                  </h3>
                  <p className="relative mt-2 text-sm text-muted-foreground flex-1 line-clamp-3">
                    {lang === "uz" ? n.body_uz : n.body_en}
                  </p>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
type Plan = {
  name: string;
  price: string;
  period: string;
  desc: string;
  Icon: typeof Crown;
  featured?: boolean;
};

export function Pricing() {
  const { t, lang } = useI18n();
  const [tab, setTab] = useState<"individual" | "corporate">("individual");

  const individual: Plan[] = [
    {
      name: "Silver",
      price: "$99",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz"
        ? "Tarmoq yaratayotgan tadbirkorlar uchun"
        : "For entrepreneurs building their network",
      Icon: Award,
    },
    {
      name: "Gold",
      price: "$249",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz"
        ? "Jiddiy biznes egalari uchun premium kirish"
        : "Premium access for serious business owners",
      Icon: Crown,
      featured: true,
    },
    {
      name: "Founding",
      price: "$499",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz"
        ? "Assotsiatsiya kelajagini shakllantiruvchi liderlar uchun"
        : "For leaders shaping the association's future",
      Icon: Gem,
    },
  ];

  const corporate: Plan[] = [
    {
      name: "Bronze Sponsor",
      price: "$1,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Korporativ a'zolikning boshlang'ich darajasi" : "Entry-level corporate membership",
      Icon: Building2,
    },
    {
      name: "Silver Sponsor",
      price: "$3,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Kengaytirilgan ko'rinish va imkoniyatlar" : "Expanded visibility and benefits",
      Icon: Award,
    },
    {
      name: "Gold Sponsor",
      price: "$7,500",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Yetakchi homiylik va premium imtiyozlar" : "Leading sponsorship and premium perks",
      Icon: Trophy,
      featured: true,
    },
    {
      name: "Platinum Partner",
      price: "$15,000",
      period: lang === "uz" ? "/yil" : "/year",
      desc: lang === "uz" ? "Strategik hamkorlik va eksklyuziv kirish" : "Strategic partnership and exclusive access",
      Icon: Gem,
    },
  ];

  const plans = tab === "individual" ? individual : corporate;
  const cols = tab === "individual" ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4";

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("pricing.eyebrow")} title={t("pricing.title")} />

        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 md:p-1.5 rounded-full glass premium-border">
            {(["individual", "corporate"] as const).map((k) => {
              const active = tab === k;
              return (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-4 sm:px-6 py-2 md:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all ${
                    active
                      ? "bg-gradient-moon text-primary-foreground shadow-moon"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(k === "individual" ? "pricing.individual" : "pricing.corporate")}
                </button>
              );
            })}
          </div>
        </div>

        <div key={tab} className={`mt-10 md:mt-14 grid gap-5 md:gap-6 ${cols}`}>
          {plans.map((p, i) => (
            <Reveal
              key={`${tab}-${p.name}`}
              delay={i * 100}
              className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass premium-border glow-border spotlight overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col ${
                p.featured ? "ring-1 ring-primary/40 shadow-glow" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 md:top-5 md:right-5 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-moon text-primary-foreground shadow-moon">
                  {lang === "uz" ? "Tavsiya" : "Popular"}
                </span>
              )}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <p.Icon className="h-5 w-5 text-primary-foreground icon-pop" />
              </div>
              <h3 className="relative mt-4 md:mt-5 text-lg md:text-xl font-display font-semibold">{p.name}</h3>
              <div className="relative mt-2 md:mt-3 flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-display font-bold text-gradient-anim stat-glow">{p.price}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="relative mt-2 md:mt-3 text-sm text-muted-foreground flex-1">{p.desc}</p>
              <a
                href="#contact"
                className={`relative mt-5 md:mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-gradient-moon text-primary-foreground shadow-moon hover:shadow-glow"
                    : "glass premium-border text-foreground hover:bg-card/80"
                }`}
              >
                {t("pricing.cta")} <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground text-center md:text-left">
        <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
          <img src={logo} alt="UUEA" className="h-7 md:h-8 w-auto object-contain" />
          <span>· USA × Uzbekistan Entrepreneurs Association</span>
        </div>
        <div>© {new Date().getFullYear()} UUEA. {t("footer.rights")}.</div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
    <span className="h-px w-8 bg-primary" />{children}
  </div>;
}
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary">
        <span className="h-px w-6 md:w-8 bg-primary" />{eyebrow}<span className="h-px w-6 md:w-8 bg-primary" />
      </div>
      <h2 className="mt-4 md:mt-5 text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-gradient-anim">{title}</h2>
    </Reveal>
  );
}
