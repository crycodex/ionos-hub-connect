import { SliderNavbar } from "@/components/SliderNavbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProposition } from "@/components/ValueProposition";
import { QuienesSomos } from "@/components/QuienesSomos";
import { Process } from "@/components/Process";
import { Certifications } from "@/components/Certifications";
import { Architecture } from "@/components/Architecture";
import { Testimonials } from "@/components/Testimonials";
import { BlogResources } from "@/components/BlogResources";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SliderNavbar />
      <main>
        {/* 1. Hero - Primera impresión: HOOK (captar atención) */}
        <Hero />
        
        {/* 2. Services - QUÉ ofrecemos: INFORMACIÓN CLAVE (lo más importante primero) */}
        <Services />
        
        {/* 3. Value Proposition - POR QUÉ elegirnos: DIFERENCIACIÓN */}
        <ValueProposition />
        
        {/* 4. Quienes Somos - QUIÉNES somos: HUMANIZAR (después de mostrar valor) */}
        <QuienesSomos />
        
        {/* 5. Process - CÓMO trabajamos: TRANSPARENCIA (genera confianza) */}
        <Process />
        
        {/* 6. Certifications - CREDENCIALES: AUTORIDAD (refuerza confianza) */}
        <Certifications />
        
        {/* 7. Architecture - SOLUCIONES TÉCNICAS: PROFUNDIDAD (para quienes quieren detalles) */}
        <Architecture />
        
        {/* 8. Testimonials - PRUEBA SOCIAL: VALIDACIÓN (cuando ya están interesados) */}
        <Testimonials />
        
        {/* 9. Blog/Resources - POSICIONAMIENTO: VALOR AGREGADO (educar antes de contactar) */}
        <BlogResources />
        
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
