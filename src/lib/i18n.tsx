import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "uz" | "en";

type Dict = Record<string, { uz: string; en: string }>;

export const dict = {
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

  "hero.eyebrow": { uz: "USA × O'ZBEKISTON BIZNES KO'PRIGI", en: "USA × UZBEKISTAN BUSINESS BRIDGE" },
  "hero.title1": { uz: "AQSH va O'zbekiston o'rtasidagi", en: "Your trusted bridge between" },
  "hero.title2": { uz: "ishonchli biznes ko'prigi", en: "the USA and Uzbekistan" },
  "hero.sub": {
    uz: "140+ kompaniyani birlashtirgan assotsiatsiya. Eksport-import, investitsiya va xalqaro hamkorlik uchun premium platforma.",
    en: "An association uniting 140+ companies. A premium platform for export-import, investment and international cooperation.",
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
    en: "Since 2015 we have connected entrepreneurs from the USA and Uzbekistan, helping 140+ companies succeed on international markets.",
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

  "footer.rights": { uz: "Barcha huquqlar himoyalangan", en: "All rights reserved" },
} satisfies Dict;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof typeof dict) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("uz");
  const t = (k: keyof typeof dict) => dict[k][lang];
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
