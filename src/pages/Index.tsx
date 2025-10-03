import { SliderNavbar } from "@/components/SliderNavbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProposition } from "@/components/ValueProposition";
import { Architecture } from "@/components/Architecture";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SliderNavbar />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Architecture />
        <div id="contacto">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
