import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { SiShopify, SiDigitalocean, SiZapier, SiMeta } from "react-icons/si";

// Note: The reference image uses specific generic icons for Shopify and DigitalOcean 
// (globe and exclamation mark), but since the prompt also said "in partners add meta", 
// we will stick to the brand icons or a mix that looks clean and professional.

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0d121f] font-sans pt-20">
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Subtle Glow Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Blue glow center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-10 md:py-20 mt-10">
        <div className={`max-w-5xl mx-auto text-center space-y-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full shadow-[0_0_8px_#0ea5e9]"></div>
              <span className="text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-300 uppercase">
                Transformación Digital
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Potenciamos tu empresa con
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#0ea5e9] dark:text-[#38bdf8] leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              Business Intelligence
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#94a3b8] max-w-3xl mx-auto pt-4 leading-relaxed">
            Automatizaciones, agentes virtuales y estudios de mercado para lograr resultados extraordinarios y medibles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group bg-[#ff5722] hover:bg-[#ea580c] text-white font-medium text-base px-8 py-6 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 border-0"
            >
              <span>Contactar Ahora</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/10 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-[#1e293b] text-slate-900 dark:text-white font-medium text-base px-8 py-6 rounded-full transition-all duration-300"
            >
              <span>Ver Servicios</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Divider line */}
          <div className="w-full max-w-3xl mx-auto mt-20 mb-10 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-[#334155] to-transparent w-full"></div>
            {/* Pequeño punto brillante ornamental (visible más en dark mode) */}
            <div className="absolute right-1/4 -top-[3px] w-1.5 h-1.5 rounded-full bg-purple-500/50 dark:bg-purple-400 blur-[1px] hidden md:block"></div>
          </div>

          {/* Partnerships Section */}
          <div className="pt-12 pb-8">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium">Partners Oficiales</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {/* Shopify Partner */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <SiShopify className="h-6 w-6 text-[#7AB55C] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground/90 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                  Shopify
                </span>
              </div>
              
              {/* DigitalOcean Partner */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <SiDigitalocean className="h-6 w-6 text-[#0080FF] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground/90 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                  DigitalOcean
                </span>
              </div>
              
              {/* Zapier Partner */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <SiZapier className="h-6 w-6 text-[#FF4A00] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground/90 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                  Zapier
                </span>
              </div>

              {/* Meta Partner */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <SiMeta className="h-6 w-6 text-[#0668E1] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground/90 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                  Meta
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
