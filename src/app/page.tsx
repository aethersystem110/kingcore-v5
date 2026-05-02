import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { ExportsSection } from "@/components/sections/Exports";
import { Products } from "@/components/sections/Products";
import { Quality } from "@/components/sections/Quality";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Paper texture overlay */}
      <div className="paper-texture" aria-hidden="true" />

      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <Products />
        <Industries />
        <Process />
        <Quality />
        <ExportsSection />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
