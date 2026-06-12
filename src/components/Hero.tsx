import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Plasma } from "./ui/plasma";

const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "24/7", label: "Agentes y soporte" },
  { value: "5x", label: "Procesos más rápidos" },
  { value: "+15", label: "Clientes activos" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0a0f1c] dark:via-[#0d121f] dark:to-[#0d121f]">
      {/* Plasma WebGL background */}
      <div className="absolute inset-0 z-0">
        <Plasma color="#0ea5e9" speed={0.6} direction="forward" scale={1.2} opacity={0.45} mouseInteractive />
        {/* Overlay para legibilidad, adaptado a light/dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/85 dark:from-[#0d121f]/50 dark:via-[#0d121f]/30 dark:to-[#0d121f]/90" />
      </div>

      {/* Orbes decorativos */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-sky-300/30 dark:bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full bg-cyan-200/30 dark:bg-cyan-400/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-200/40 dark:bg-blue-500/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-sky-500/20 bg-sky-50/80 dark:bg-sky-500/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-sky-800 dark:text-sky-300 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#0ea5e9]" />
            Inteligencia Artificial · Datos · Automatización
          </motion.div>

          {/* Headline */}
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-6"
          >
            Potenciamos tu empresa con
            <span className="block mt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">
              IA y Datos
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Chatbots, automatizaciones, RevOps, Business Intelligence y desarrollo de
            sistemas para escalar tu negocio con resultados medibles.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="group bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium text-base px-8 py-6 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Contactar Ahora</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-white/60 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-medium text-base px-8 py-6 rounded-full transition-all duration-300 shadow-sm"
            >
              Ver Servicios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
