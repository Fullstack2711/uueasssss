# UUEA loyihasi — fayl strukturasi va texnik tushuntirish

Bu hujjat repozitoriyaning mantiqiy tuzilishi, ishlatiladigan texnologiyalar va **faqat Vercel** uchun build/deploy yo‘lini tushuntiradi.

---

## 1. Loyiha qisqacha

**UUEA** (USA × Uzbekistan Entrepreneurs Association) — marketing/admin kontent bilan tanishuv sahifasi va `/admin` orqali boshqaruv paneli. Ma’lumotlar va autentifikatsiya **Supabase** orqali bog‘langan.

---

## 2. Asosiy texnologiyalar

| Qatlam        | Texnologiya                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Framework     | [TanStack Start](https://tanstack.com/start) (React SSR + server funksiyalar) |
| Router        | TanStack Router (`src/router.tsx`, `src/routeTree.gen.ts`)                    |
| UI            | React 19, shadcn/ui (Radix UI), Tailwind CSS 4                                |
| Build         | Vite 7, TanStack Start Vite plugin, Nitro Vercel preset                       |
| Server output | Nitro 3 `vercel` preset                                                       |
| Deploy        | Vercel Build Output API (`.vercel/output`)                                    |
| Backend / DB  | Supabase (`@supabase/supabase-js`)                                            |

Eski alternativ deploy konfiguratsiyalari olib tashlangan. Loyiha endi bitta deploy targetga ega: **Vercel**.

---

## 3. To‘liq mantiqiy fayl strukturasi

Quyida ishlab chiqish uchun muhim fayllar ro‘yxati (`node_modules`, `.vercel`, `dist` kabi generatsiya qilinadigan papkalar kiritilmagan).

```
uuea/
├── package.json              # Skriptlar: dev, build, preview, lint, format
├── bun.lock                  # Bog‘liqlik qulfi
├── vite.config.ts            # Vercel-only Nitro build konfiguratsiyasi
├── tsconfig.json             # TypeScript, @/* → src/*
├── eslint.config.js
├── components.json           # shadcn/ui sozlamalari
├── .env                      # Mahalliy maxfiy o‘zgaruvchilar (repoga commit qilinmasin)
├── .gitignore
├── supabase/
│   ├── config.toml
│   └── migrations/           # SQL migratsiyalar
├── docs/
│   └── TEXNIK-HUJJAT.md      # Ushbu hujjat
└── src/
    ├── server.ts             # HTTP kirish: TanStack server-entry + SSR xato qayta ishlash
    ├── start.ts              # createStart: xato middleware, Supabase auth function middleware
    ├── router.tsx            # createRouter + QueryClient kontekst
    ├── routeTree.gen.ts      # Router daraxti (avtogeneratsiya)
    ├── styles.css            # Global CSS (Tailwind)
    ├── assets/               # Rasm fayllar
    ├── routes/
    │   ├── __root.tsx        # Ildiz layout, meta, 404/error UI
    │   ├── index.tsx         # Bosh sahifa
    │   └── admin.tsx         # Admin panel
    ├── components/
    ├── hooks/
    ├── integrations/supabase/
    └── lib/
```

**Build chiqishi:**

- `.vercel/output/` — Nitro `vercel` preset bilan `npm run build` natijasida yaratiladigan Vercel deploy formati.
- `.vercel/` `.gitignore`ga kiritilgan va repoga commit qilinmaydi.

---

## 4. Ilova oqimi

1. `src/server.ts` tashqi `fetch` handler sifatida TanStack `@tanstack/react-start/server-entry` ni yuklaydi va ayrim SSR 500 holatlarini foydalanuvchiga HTML xato sahifasiga almashtiradi.
2. `src/start.ts` `createStart` orqali server middleware va Supabase auth function middleware ni ulaydi.
3. `src/router.tsx` fayl asosidagi marshrutlarni `routeTree.gen.ts` orqali ulaydi.
4. `src/lib/*.functions.ts` server tomonda ishlaydigan TanStack Start server functionlarni saqlaydi.

---

## 5. Vercel build konfiguratsiyasi

`vite.config.ts` endi har doim Vercel output yaratadi:

```ts
export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    nitro({ preset: "vercel" }),
  ],
});
```

Bu nimani anglatadi:

- Build bitta targetga ega: Vercel.
- Server output `.vercel/output` ichida yaratiladi.
- `npm run build` natijasi Vercel uchun `.vercel/output` ichida yaratiladi.

Vercel dashboardda **Build Command**:

```bash
npm run build
```

Repoda `bun.lock` bor. Agar Vercel Bun ishlatib yuborsa ham build ishlashi kerak, lekin chalkashlik bo‘lmasligi uchun Project Settings’da install/build komandalarni npm bilan aniq qo‘yish mumkin.

---

## 6. Vercel environment variables

`.env` faqat lokal ishlaydi. Production va Preview uchun Vercel Dashboard → Settings → Environment Variables ichida quyidagilar bo‘lishi shart:

| O‘zgaruvchi                     | Qayerda ishlatiladi    | Izoh                                         |
| ------------------------------- | ---------------------- | -------------------------------------------- |
| `VITE_SUPABASE_URL`             | Client bundle          | Brauzer tomoni                               |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client bundle          | Brauzer tomoni                               |
| `SUPABASE_URL`                  | SSR/server functions   | Server tomoni fallback                       |
| `SUPABASE_PUBLISHABLE_KEY`      | SSR/server functions   | Server tomoni                                |
| `SUPABASE_SERVICE_ROLE_KEY`     | Admin server functions | Faqat server; `VITE_` prefiksi bilan bermang |

Screenshotdagi “This page didn’t load” odatda Vercel runtime 500 xatosi. Bu loyihada eng ko‘p uchraydigan sabab: Supabase envlardan biri, ayniqsa `SUPABASE_SERVICE_ROLE_KEY`, Vercel’da yo‘qligi.

---

## 7. Foydali buyruqlar

| Buyruq            | Maqsad                  |
| ----------------- | ----------------------- |
| `npm run dev`     | Vite dev server         |
| `npm run build`   | Vercel production build |
| `npm run preview` | Lokal preview           |

---

## 8. Xavfsizlik eslatmasi

- `.env` faylida service role yoki boshqa maxfiy kalitlar bo‘lsa, ularni hech qachon ochiq repoga qo‘shmang.
- `SUPABASE_SERVICE_ROLE_KEY` faqat Vercel server-side environment variable sifatida beriladi.
- Admin marshruti (`/admin`) va Supabase RLS/siyosatlarni productionda qayta tekshiring.

---

## 9. Muammo bo‘lsa tekshirish tartibi

1. Vercel → Project → Deployments → so‘nggi deploy → **Build Logs**.
2. Runtime 500 bo‘lsa Vercel → **Functions Logs**.
3. Logda `Missing Supabase environment variable(s)` chiqsa, yuqoridagi envlarni Production va Preview uchun to‘ldiring.
4. Lokal tekshiruv:

```bash
npm run build
npm run preview
```

---

_Hujjat loyiha Vercel-only holatiga moslab yangilangan._
