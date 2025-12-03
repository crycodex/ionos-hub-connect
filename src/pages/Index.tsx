import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProposition } from "@/components/ValueProposition";
import { QuienesSomos } from "@/components/QuienesSomos";
import { Process } from "@/components/Process";

import ClientesCarousel from "../components/ClientesCarousel";
import { Certifications } from "@/components/Certifications";
import { Architecture } from "@/components/Architecture";
// import { Testimonials } from "@/components/Testimonials";
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
        {/* 4. Conoce al Team - Teaser */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Conoce a nuestro equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Descubre a las mentes brillantes detrás de nuestras soluciones innovadoras.
            </p>
            <a 
              href="/equipo" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Equipo Completo
            </a>
          </div>
        </section>
        
        {/* 5. Clientes - PRUEBA SOCIAL: Empresas que confían en nosotros */}
        <ClientesCarousel />
        
        {/* 6. Certifications - CREDENCIALES: AUTORIDAD (refuerza confianza) */}
        <Certifications />
        
        {/* 8. Testimonials - PRUEBA SOCIAL: VALIDACIÓN (cuando ya están interesados) */}
        {/* <Testimonials /> */}
        
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
