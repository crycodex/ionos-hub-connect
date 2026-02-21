import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HomeTeam = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground tracking-tight">
              Conoce a nuestro{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                equipo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Mentes brillantes apasionadas por la tecnología, listas para llevar
              tu visión al siguiente nivel con soluciones innovadoras.
            </p>
          </motion.div>
        </div>

        <motion.div
         className="text-center"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="/equipo"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Ver Equipo Completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
