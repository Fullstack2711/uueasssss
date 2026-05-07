import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-bridge.jpg";
import aboutImg from "@/assets/about-handshake.jpg";
import sectionBg from "@/assets/section-bg.jpg";
import logo from "@/assets/uuea-logo.png";
import {
  ArrowRight, Briefcase, Globe2, Scale, TrendingUp, Sparkles, ShieldCheck, Lightbulb,
  Handshake, MapPin, Mail, Phone, Send, Check, Star, ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ---------- HERO ---------- */
export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-glow" />

      <div className="container relative mx-auto px-6 max-w-6xl">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.25em] text-primary uppercase mb-8">
            <Sparkles className="h-3.5 w-3.5" /> {t("hero.eyebrow")}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tighter">
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="text-gradient-moon">{t("hero.title2")}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.sub")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-moon text-primary-foreground font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-1"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground hover:bg-card/80 transition-all premium-border hover:-translate-y-1"
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
    <section className="relative py-20 border-y border-border">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.k} className="text-center group">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient-moon">{it.v}</div>
            <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t(it.k)}</div>
          </div>
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
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={aboutImg}
            alt="Partnership"
            loading="lazy"
            width={1280}
            height={960}
            className="relative rounded-3xl premium-border shadow-premium"
          />
        </div>
        <div>
          <Eyebrow>{t("about.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("about.body")}</p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {cards.map(({ Icon, title, body }) => (
              <div key={title} className="p-5 rounded-2xl glass premium-border">
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-semibold">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{body}</div>
              </div>
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
    <section id="services" className="relative py-32 overflow-hidden">
      <img src={sectionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {items.map(({ Icon, t: title, b }, i) => (
            <div
              key={title}
              className="group relative p-8 rounded-3xl glass premium-border overflow-hidden hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-5">
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-moon shadow-glow shrink-0">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-primary mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-display font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{b}</p>
                </div>
              </div>
            </div>
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
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")} />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative p-8 rounded-3xl glass premium-border hover:shadow-moon transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 text-primary">{p.tag}</span>
                <span className="text-2xl font-display font-bold text-gradient-moon">{p.stat}</span>
              </div>
              <h3 className="text-2xl font-display font-semibold leading-tight">
                {lang === "uz" ? p.titleUz : p.titleEn}
              </h3>
              <p className="mt-3 text-muted-foreground">{lang === "uz" ? p.bodyUz : p.bodyEn}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition">
                {lang === "uz" ? "Batafsil" : "Read more"} <ArrowRight className="h-4 w-4" />
              </div>
            </article>
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
    <section id="results" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("results.eyebrow")} title={t("results.title")} />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden premium-border">
          {items.map((it) => (
            <div key={it.l} className="bg-card p-10 text-center group hover:bg-secondary transition-colors">
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-moon">{it.v}</div>
              <div className="mt-3 text-sm text-muted-foreground tracking-wider uppercase">{it.l}</div>
            </div>
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
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("testi.eyebrow")} title={t("testi.title")} />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-3xl glass premium-border flex flex-col">
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{lang === "uz" ? r.uz : r.en}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
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
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <div className="mt-16 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={i} className="rounded-2xl glass premium-border overflow-hidden">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-display font-medium text-lg">{lang === "uz" ? it.q_uz : it.q_en}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform ${active ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{lang === "uz" ? it.a_uz : it.a_en}</p>
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
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={t("process.eyebrow")} title={t("process.title")} />
        <div className="mt-16 grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-moon shadow-glow flex items-center justify-center moon-ring">
                <s.Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-2 text-xs tracking-widest text-primary">STEP 0{i + 1}</div>
              <div className="mt-2 font-display font-semibold text-lg">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.b}</div>
            </div>
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
    <section id="regions" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="container relative mx-auto px-6">
        <SectionHeader eyebrow={t("regions.eyebrow")} title={t("regions.title")} />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { title: t("regions.us"), cities: us, flag: "🇺🇸" },
            { title: t("regions.uz"), cities: lang === "uz" ? uz : ["Tashkent", "Samarkand", "Bukhara", "Andijan"], flag: "🇺🇿" },
          ].map((b) => (
            <div key={b.title} className="p-10 rounded-3xl glass premium-border">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{b.flag}</div>
                <h3 className="text-2xl font-display font-semibold">{b.title}</h3>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {b.cities.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-foreground/90">
                    <MapPin className="h-4 w-4 text-primary" /> {c}
                  </li>
                ))}
              </ul>
            </div>
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
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="container relative mx-auto px-6 max-w-5xl">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { Icon: Mail, l: "Email", v: "info@uuea.org" },
              { Icon: Phone, l: lang === "uz" ? "Telefon" : "Phone", v: "+1 (312) 555-0199" },
              { Icon: MapPin, l: lang === "uz" ? "Manzil" : "Address", v: "Chicago, IL · Toshkent, UZ" },
            ].map((c) => (
              <div key={c.l} className="p-5 rounded-2xl glass premium-border flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-moon flex items-center justify-center shrink-0">
                  <c.Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                  <div className="mt-1 font-medium">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 p-8 rounded-3xl glass premium-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("contact.name")} />
              <Field label={t("contact.company")} />
              <Field label={t("contact.email")} type="email" />
              <Field label={t("contact.phone")} type="tel" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{t("contact.msg")}</label>
              <textarea rows={4} className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition" />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-moon text-primary-foreground font-medium shadow-moon hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              {sent ? <><Check className="h-4 w-4"/> Sent</> : <>{t("contact.send")} <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input type={type} className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition" />
    </div>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="UUEA" className="h-8 w-auto object-contain" />
          <span className="font-display font-semibold text-foreground">UUEA</span>
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
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
        <span className="h-px w-8 bg-primary" />{eyebrow}<span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient">{title}</h2>
    </div>
  );
}
