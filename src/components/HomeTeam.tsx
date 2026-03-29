import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HomeTeam = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0ea5e9]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
              Conoce a nuestro{" "}
              <span className="text-[#0ea5e9]">
                equipo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Mentes brillantes apasionadas por la tecnología, listas para llevar
              tu visión al siguiente nivel con soluciones innovadoras y de impacto.
            </p>
          </motion.div>
        </div>

        <motion.div
         className="text-center"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          <a
            href="/equipo"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-full hover:bg-[#0284c7] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0ea5e9]/20 transform hover:-translate-y-0.5"
          >
            Ver Equipo Completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
