import { BarChart3, Bot, Lightbulb, Rocket, Search, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Agentes Virtuales a medida",
    description: "Asistentes virtuales inteligentes que atienden 24/7 con funciones avanzadas.",
    path: "/agentes-virtuales",
    stats: "Atención 24/7",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards ejecutivos y análisis avanzado para decisiones estratégicas.",
    path: "/business-intelligence",
    stats: "Tiempo Real",
  },
  {
    icon: Lightbulb,
    title: "Marketing Digital",
    description: "Impulsa tu presencia online con estrategias orientadas a resultados tangibles.",
    path: "/marketing-digital",
    stats: "ROAS Optimizado",
  },
  {
    icon: Search,
    title: "Investigación de Mercados",
    description: "Estudios especializados que identifican oportunidades ocultas y ventajas competitivas.",
    path: "/investigacion-mercados",
    stats: "Datos Precisos",
  },
  {
    icon: Rocket,
    title: "Transformación Digital",
    description: "Automatización de procesos y adopción tecnológica para hacer tu empresa escalable.",
    path: "/transformacion-digital",
    stats: "Sin Interrupciones",
  },
  {
    icon: Code,
    title: "Desarrollo Web - Móvil",
    description: "Sitios web y aplicaciones digitales personalizadas con las últimas tecnologías.",
    path: "/desarrollo-web-movil",
    stats: "Multiplataforma",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="servicios" className="py-24 md:py-32 bg-background relative overflow-hidden font-sans border-t border-border">
      
      {/* Subtle Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#0ea5e9]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
          >
            Servicios que <span className="text-[#0ea5e9]">Impulsan tu</span><br/>
            <span className="text-[#0ea5e9]">Crecimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Ofrecemos soluciones completas que abarcan desde el análisis inicial hasta el crecimiento proyectado, diseñadas para transformar tu negocio.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={service.path} className="group outline-none block h-full">
                <div 
                  className="h-full flex flex-col p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-border hover:border-[#0ea5e9]/50 hover:bg-[#0ea5e9]/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0ea5e9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0ea5e9]/10 mb-6 group-hover:scale-110 group-hover:bg-[#0ea5e9] transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#0ea5e9] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0ea5e9] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm">
                    {service.description}
                  </p>

                  {/* Footer of card */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border group-hover:border-[#0ea5e9]/20 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-[#0ea5e9] bg-[#0ea5e9]/10 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors duration-300">
                      {service.stats}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#0ea5e9] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
