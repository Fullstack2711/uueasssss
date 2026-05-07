import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import {
  Hero, Stats, About, Services, Portfolio, Results,
  Testimonials, FAQ, Process, Regions, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UUEA — USA × Uzbekistan Entrepreneurs Association" },
      { name: "description", content: "Premium business association connecting USA and Uzbekistan: export-import, investment, B2B networking and legal support." },
      { property: "og:title", content: "UUEA — USA × Uzbekistan Business Bridge" },
      { property: "og:description", content: "140+ companies. 10+ years. A premium platform for international business between the USA and Uzbekistan." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Portfolio />
          <Results />
          <Testimonials />
          <Process />
          <Regions />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
