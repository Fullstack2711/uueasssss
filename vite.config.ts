// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel / Netlify need the Nitro adapter output. Anything else (local prod, Cloudflare Pages)
// keeps the default Cloudflare worker build from @lovable.dev/vite-tanstack-config.
const deployHost = process.env.VERCEL
  ? "vercel"
  : process.env.NETLIFY
    ? "netlify"
    : null;
const useNitroAdapter = deployHost !== null;

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: useNitroAdapter ? false : undefined,
  plugins: useNitroAdapter
    ? [
        nitro(
          deployHost === "netlify"
            ? { preset: "netlify" }
            : {},
        ),
      ]
    : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});
