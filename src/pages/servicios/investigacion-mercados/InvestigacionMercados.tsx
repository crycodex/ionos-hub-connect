import {
  ArrowLeft, Users, BarChart, Target, PieChart, Layers, Calendar,
  FileText, CheckCircle, MessageCircle, Map, ClipboardCheck, Brain,
  Award, TrendingUp, Star, Zap, ArrowRight, Search
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";

const InvestigacionMercados = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/');
    setTimeout(() => {
      const serviciosSection = document.getElementById('servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa realizar un estudio de investigación de mercados.\n\n` +
      `Objetivos preliminares:\n` +
      `• Identificar oportunidades y segmentos\n` +
      `• Analizar competencia y disposición de pago\n` +
      `• Definir propuesta de valor y go-to-market\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const serviciosEspecializados = [
    { 
      name: "Salud de Marca", 
      description: "Evaluación integral de percepción, reputación y posicionamiento en el mercado.",
      benefits: ["Percepción de marca", "Reputación online", "Lealtad del cliente"],
      icon: Award
    },
    { 
      name: "Impacto Promocional", 
      description: "Análisis de efectividad y ROI de campañas promocionales y estrategias de pricing.",
      benefits: ["ROI de promociones", "Efectividad visual", "Optimización de precios"],
      icon: TrendingUp
    },
    { 
      name: "Experiencia del Cliente", 
      description: "Medición de satisfacción, lealtad y experiencia del cliente en todos los touchpoints.",
      benefits: ["Customer Journey", "Net Promoter Score", "Métricas de retención"],
      icon: Star
    },
    { 
      name: "Viabilidad Comercial", 
      description: "Estudios  para validar potencial comercial y viabilidad de nuevos productos.",
      benefits: ["Tamaño de mercado", "Disposición de pago", "Mapeo de competencia"],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-12">
        
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-16">
          <Button variant="ghost" size="sm" onClick={handleVolver} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-medium text-muted-foreground">Servicios / Investigación de Mercados</span>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-slate-200 dark:border-white/10 rounded-full bg-slate-50 dark:bg-white/5">
                <Search className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Inteligencia de Datos</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Decisiones basadas en <br/> <span className="text-[#0ea5e9]">datos reales</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Diseñamos y ejecutamos investigaciones a medida para reducir la incertidumbre, anticipar tendencias y acelerar tu crecimiento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">+95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Precisión predictiva</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">8–12 sem</span>
                </div>
                <p className="text-sm text-muted-foreground">Tiempo de ejecución</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 h-14 rounded-full" onClick={handleWhatsAppConsultoria}>
                Consultoría Gratuita
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/imgs/inv.png" 
              alt="Investigación de Mercados" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-24 hidden lg:block" />

        {/* Servicios Especializados */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Estudios Especializados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Investigaciones rigurosas diseñadas para resolver desafíos críticos de negocio con metodologías modernas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
            {serviciosEspecializados.map((servicio, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 border-l-2 border-[#0ea5e9]/20 pl-6 hover:border-[#0ea5e9] transition-colors duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                  <servicio.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{servicio.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {servicio.description}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {servicio.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metodologías */}
        <div className="p-10 lg:p-16 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-3xl mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestras Metodologías</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Combinamos técnicas de análisis profundo con ciencia de datos para obtener insights de alto impacto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="space-y-4">
              <PieChart className="w-8 h-8 text-[#0ea5e9]" />
              <h3 className="text-xl font-semibold">Análisis Cuantitativo</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Encuestas con N representativo</li>
                <li>• Modelos de predicción (ARIMA, XGBoost)</li>
                <li>• Conjoint / MaxDiff / A/B Testing</li>
                <li>• Segmentación estadística k-means</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Layers className="w-8 h-8 text-[#0ea5e9]" />
              <h3 className="text-xl font-semibold">Inmersión Cualitativa</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Entrevistas gerenciales en profundidad</li>
                <li>• Focus groups y etnografías</li>
                <li>• Social listening y NLP</li>
                <li>• Journey mapping</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Target className="w-8 h-8 text-[#0ea5e9]" />
              <h3 className="text-xl font-semibold">Inteligencia Competitiva</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Benchmarking de oferta y pricing</li>
                <li>• Share of Voice y Share of Market</li>
                <li>• Mapeo direccional de posicionamiento</li>
                <li>• Análisis de brechas en el mercado</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Timeline / Process */}
        <div className="py-24 mb-16 border-t border-border">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Ciclo de la Investigación</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">1-2</div>
              <h3 className="text-xl font-semibold mb-2">Semanas: Diseño</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Establecemos los objetivos formales, diseñamos los cuestionarios y validamos los tamaños de muestra necesarios.
              </p>
            </div>
            
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">3-6</div>
              <h3 className="text-xl font-semibold mb-2">Semanas: Recolección</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ejecutamos el trabajo de campo (encuestas, entrevistas) y recolectamos la data en nuestros servidores seguros.
              </p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">7-10</div>
              <h3 className="text-xl font-semibold mb-2">Semanas: Procesamiento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Limpiamos los datos y ejecutamos la analítica descriptiva y predictiva estructurando la narrativa.
              </p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">11-12</div>
              <h3 className="text-xl font-semibold mb-2">Semanas: Entrega</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Consolidamos un reporte ejecutivo detallado y tableros en vivo (PowerBI) con la directiva principal.
              </p>
            </div>
          </div>
        </div>

        {/* Entregables */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Entregables Principales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Más allá de un PDF, te proporcionamos piezas diseñadas para ser accionadas inmediatamente por tu equipo de liderazgo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <FileText className="w-8 h-8 text-[#0ea5e9]" />
              <h4 className="text-lg font-semibold">Reporte Ejecutivo</h4>
              <p className="text-sm text-foreground/70">Insights destilados y recomendaciones a nivel board.</p>
            </div>
            
            <div className="space-y-3">
              <BarChart className="w-8 h-8 text-[#0ea5e9]" />
              <h4 className="text-lg font-semibold">Dashboard PowerBI</h4>
              <p className="text-sm text-foreground/70">Tableros dinámicos en la nube para explorar la data a demanda.</p>
            </div>

            <div className="space-y-3">
              <ClipboardCheck className="w-8 h-8 text-[#0ea5e9]" />
              <h4 className="text-lg font-semibold">Guía Comercial</h4>
              <p className="text-sm text-foreground/70">Directrices claras para adaptar producto, pricing y mensajes publicitarios.</p>
            </div>

            <div className="space-y-3">
              <Map className="w-8 h-8 text-[#0ea5e9]" />
              <h4 className="text-lg font-semibold">Roadmap de Oportunidad</h4>
              <p className="text-sm text-foreground/70">Matriz priorizada de siguientes pasos por impacto a ventas.</p>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-8 mb-24">
          <ResearchIntegrations />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default InvestigacionMercados;
