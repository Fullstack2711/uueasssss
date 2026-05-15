# UUEA loyihasi — fayl strukturasi va texnik tushuntirish

Bu hujjat repozitoriyaning mantiqiy tuzilishi, ishlatiladigan texnologiyalar va Vite
orqali build/deploy yo‘lini tushuntiradi.

---

## 1. Loyiha qisqacha

**UUEA** (USA × Uzbekistan Entrepreneurs Association) — marketing/admin kontent bilan
tanishuv sahifasi va `/admin` orqali boshqaruv paneli. Ma’lumotlar va autentifikatsiya
**Supabase** orqali bog‘langan.

---

## 2. Asosiy texnologiyalar

| Qatlam       | Texnologiya                                                |
| ------------ | ---------------------------------------------------------- |
| Frontend     | Vite 7 + React 19                                          |
| Router       | TanStack Router (`src/router.tsx`, `src/routeTree.gen.ts`) |
| UI           | shadcn/ui (Radix UI), Tailwind CSS 4                       |
| Backend / DB | Supabase (`@supabase/supabase-js`, RLS, RPC)               |
| Deploy       | Statik Vite build (`dist/`)                                |

Loyiha endi TanStack Start/Nitro SSR qatlamidan foydalanmaydi. Barcha sahifalar sof
Vite SPA sifatida render bo‘ladi.

---

## 3. To‘liq mantiqiy fayl strukturasi

Quyida ishlab chiqish uchun muhim fayllar ro‘yxati (`node_modules`, `dist` kabi
generatsiya qilinadigan papkalar kiritilmagan).

```text
uuea/
├── index.html                # Vite HTML entry
├── package.json              # Skriptlar: dev, build, preview, lint, format
├── package-lock.json         # npm lockfile
├── vite.config.ts            # Vite + React + Tailwind konfiguratsiyasi
├── vercel.json               # SPA fallback rewrite
├── tsconfig.json             # TypeScript, @/* → src/*
├── eslint.config.js
├── components.json           # shadcn/ui sozlamalari
├── .env                      # Mahalliy maxfiy o‘zgaruvchilar (repoga commit qilinmasin)
├── supabase/
│   ├── config.toml
│   └── migrations/           # SQL migratsiyalar
├── docs/
│   └── TEXNIK-HUJJAT.md      # Ushbu hujjat
└── src/
    ├── main.tsx              # React root + RouterProvider
    ├── router.tsx            # createRouter + QueryClient kontekst
    ├── routeTree.gen.ts      # Router daraxti
    ├── styles.css            # Global CSS (Tailwind)
    ├── assets/               # Rasm fayllar
    ├── routes/
    │   ├── __root.tsx        # Ildiz layout, 404/error UI
    │   ├── index.tsx         # Bosh sahifa
    │   └── admin.tsx         # Admin panel
    ├── components/
    ├── hooks/
    ├── integrations/supabase/
    └── lib/                  # Supabase client helperlari
```

**Build chiqishi:**

- `dist/` — `npm run build` natijasida yaratiladigan statik Vite build.
- `dist/` `.gitignore`ga kiritilgan va repoga commit qilinmaydi.

---

## 4. Ilova oqimi

1. `index.html` `src/main.tsx` modulini yuklaydi.
2. `src/main.tsx` React ilovasini `#root` ichiga render qiladi va `RouterProvider`ni ulaydi.
3. `src/router.tsx` fayl asosidagi marshrutlarni `routeTree.gen.ts` orqali ulaydi.
4. `src/lib/*.functions.ts` fayllari Supabase client orqali public va admin amallarni bajaradi.
5. `/admin` Supabase Auth sessiyasini tekshiradi; admin ma’lumotlari RLS orqali himoyalangan.

---

## 5. Vite/Vercel build konfiguratsiyasi

`vite.config.ts` sof frontend build yaratadi:

```ts
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })],
  server: {
    host: "::",
    port: 8080,
  },
});
```

Vercel dashboardda:

```bash
Build Command: npm run build
Output Directory: dist
```

`vercel.json` barcha client-side routelarni `index.html`ga qaytaradi, shuning uchun
`/admin` kabi marshrutlar to‘g‘ridan-to‘g‘ri ochilganda ham ishlaydi.

---

## 6. Environment variables

`.env` faqat lokal ishlaydi. Production va Preview uchun Vercel Dashboard → Settings →
Environment Variables ichida quyidagilar bo‘lishi shart:

| O‘zgaruvchi                     | Qayerda ishlatiladi | Izoh                  |
| ------------------------------- | ------------------- | --------------------- |
| `VITE_SUPABASE_URL`             | Client bundle       | Brauzer tomoni        |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client bundle       | Brauzer tomoni public |

Server-side service role kaliti endi frontend buildga kerak emas va `VITE_` prefiksi bilan
hech qachon berilmasin.

---

## 7. Supabase migratsiya

Vite-only rejimda public yozuvlar va admin bootstrap Supabase RLS/RPC orqali ishlaydi.
Quyidagi migratsiya remote loyihaga qo‘llangan bo‘lishi kerak:

```text
supabase/migrations/20260515000100_vite_spa_client_access.sql
```

U public tashrif/click/contact insert siyosatlarini va `admin_exists`,
`claim_first_admin` RPC funksiyalarini qo‘shadi.

---

## 8. Foydali buyruqlar

| Buyruq            | Maqsad                   |
| ----------------- | ------------------------ |
| `npm run dev`     | Vite dev server          |
| `npm run build`   | Production Vite build    |
| `npm run preview` | Lokal production preview |
| `npm run lint`    | ESLint tekshiruvi        |

---

## 9. Muammo bo‘lsa tekshirish tartibi

1. `npm run build` builddan o‘tishini tekshiring.
2. `npm run preview` bilan lokal production buildni oching.
3. Vercel envlarda `VITE_SUPABASE_URL` va `VITE_SUPABASE_PUBLISHABLE_KEY` borligini tekshiring.
4. Admin yoki forma ishlamasa, Supabase migratsiyalar qo‘llanganini tekshiring.

---

_Hujjat loyiha sof Vite SPA holatiga moslab yangilangan._
