import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub", "_blank", "noopener,noreferrer");
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden">
      
      {/* Full-bleed background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/imgs/fotoDashboards.webp" 
          alt="Business Intelligence Dashboard" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradients to create a calm area for text */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/90 md:bg-white/70 md:dark:bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0d121f] dark:via-[#0d121f]/90 dark:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Brand / Context */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-slate-200 dark:border-white/10 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></span>
              <span className="text-xs font-semibold tracking-widest text-slate-800 dark:text-slate-300 uppercase">
                IonosHub Connect
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Potenciamos tu empresa con <br/>
              <span className="text-[#0ea5e9] dark:text-[#38bdf8]">
                Business Intelligence.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Automatizaciones, agentes virtuales y estudios de mercado para lograr resultados extraordinarios y medibles. Transforma datos en decisiones hoy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                className="group bg-[#ff5722] hover:bg-[#ea580c] text-white font-medium text-base px-8 py-6 rounded-full transition-all duration-300 shadow-lg"
              >
                <span>Contactar Ahora</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-medium text-base px-8 py-6 rounded-full transition-all duration-300 shadow-sm"
              >
                <span>Ver Servicios</span>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

