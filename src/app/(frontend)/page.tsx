import { About } from "@/modules/pages/home/about";
import { Faq } from "@/modules/pages/home/faq";
import { Footer } from "@/modules/pages/home/footer";
import { Header } from "@/modules/pages/home/header";
import { Hero } from "@/modules/pages/home/hero";
import { MapSection } from "@/modules/pages/home/map";
import { Services } from "@/modules/pages/home/services";
import { Stats } from "@/modules/pages/home/stats";
import { StickyContact } from "@/modules/pages/home/sticky-contact";
import { Testimonials } from "@/modules/pages/home/testimonials";

export default function Page() {
  return (
    <main className="bg-cartagena-sand pb-16">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Faq />
      <MapSection />
      <Footer />
      <StickyContact />
    </main>
  )
}
