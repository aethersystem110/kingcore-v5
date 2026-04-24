import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Quality } from "@/components/sections/Quality";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Industries />
        <Products />
        <Process />
        <Quality />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
