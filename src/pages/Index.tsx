import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { EcosystemLego } from "@/components/EcosystemLego";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { HomeTeam } from "@/components/HomeTeam";
import { HomeCases } from "@/components/HomeCases";
import { AdvancedStats } from "@/components/AdvancedStats";
import ClientesCarousel from "@/components/ClientesCarousel";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PageSeo, organizationJsonLd } from "@/components/PageSeo";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <PageSeo
        title="IonosHub — Ecosistema digital para empresas en Ecuador"
        description="Transformación digital con ecosistema modular: contenido, pauta, IONIC, software y analítica. Agenda tu diagnóstico gratuito."
        path="/"
        jsonLd={organizationJsonLd}
      />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <EcosystemLego />
        <Services />
        <Steps />
        <HomeTeam />
        <HomeCases />
        <AdvancedStats />
        <ClientesCarousel />
        <FAQ />
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
