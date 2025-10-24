import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProposition } from "@/components/ValueProposition";
import { QuienesSomos } from "@/components/QuienesSomos";
import { Process } from "@/components/Process";
import NuestroEquipo from "../components/NuestroEquipo";
import { Certifications } from "@/components/Certifications";
import { Architecture } from "@/components/Architecture";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

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
        
        {/* 3. Value Proposition - POR QUÉ elegirnos: DIFERENCIACIÓN */}
        <ValueProposition />
        
        {/* 4. Nuestro Equipo - EQUIPO: CONFIANZA (humaniza la empresa) */}
        <NuestroEquipo />
        
        {/* 6. Certifications - CREDENCIALES: AUTORIDAD (refuerza confianza) */}
        <Certifications />
        
        {/* 8. Testimonials - PRUEBA SOCIAL: VALIDACIÓN (cuando ya están interesados) */}
        <Testimonials />
        
        {/* 10. Contact Form - CONVERSIÓN: CAPTURA DE LEADS (momento de acción) */}
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
