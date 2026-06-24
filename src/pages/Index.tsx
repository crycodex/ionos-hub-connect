import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProposition } from "@/components/ValueProposition";

import ClientesCarousel from "../components/ClientesCarousel";
import { Certifications } from "@/components/Certifications";
// import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { HomeTeam } from "@/components/HomeTeam";
import { Steps } from "@/components/Steps";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  // Scroll automático a la sección si hay un hash en la URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* 1. Hero - Primera impresión: HOOK (captar atención) */}
        <Hero />
        
        {/* 2. Services - QUÉ ofrecemos: INFORMACIÓN CLAVE (lo más importante primero) */}
        <Services />

        {/* 3. Steps - CÓMO EMPEZAR: reduce fricción + urgencia/escasez */}
        <Steps />

        {/* 4. Value Proposition - POR QUÉ elegirnos: DIFERENCIACIÓN */}
        <ValueProposition />

        {/* 5. Nuestro Equipo - EQUIPO: CONFIANZA (humaniza la empresa) */}
        <HomeTeam />

        {/* 6. Clientes - PRUEBA SOCIAL: Empresas que confían en nosotros */}
        <ClientesCarousel />

        {/* 7. Certifications - CREDENCIALES: AUTORIDAD (refuerza confianza) */}
        <Certifications />

        {/* 8. Pricing - PLANES: ofertas claras una vez generada la confianza */}
        <Pricing />

        {/* 9. Testimonials - PRUEBA SOCIAL: VALIDACIÓN (cuando ya están interesados) */}
        {/* <Testimonials /> */}

        {/* 10. FAQ - OBJECIONES: despeja dudas justo antes de convertir */}
        <FAQ />

        {/* 11. Contact Form - CONVERSIÓN: CAPTURA DE LEADS (momento de acción) */}
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
