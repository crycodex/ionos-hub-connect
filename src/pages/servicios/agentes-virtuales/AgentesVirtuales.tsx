import { ArrowLeft, Bot, Clock, MessageCircle, Users, CheckCircle, Zap, Shield, BarChart3, Phone, Calendar, Headphones, Globe, Brain, Settings, Database, Cpu, TestTube, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";
import { motion } from "framer-motion";

const MetricsChart = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="/imgs/agenteVirtual.png" 
        alt="Agente Virtual Inteligente" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

const AgentesVirtuales = () => {
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

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent("Hola, me interesa solicitar una demo gratuita de los Agentes Virtuales de IonosHub. Me gustaría conocer más sobre las capacidades de IA conversacional y cómo pueden optimizar la atención al cliente en mi empresa.");
    window.open(`https://wa.me/593992249152?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-12">
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-16">
          <Button variant="ghost" size="sm" onClick={handleVolver} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-medium text-muted-foreground">Servicios / Agentes Virtuales</span>
        </motion.div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-slate-200 dark:border-white/10 rounded-full bg-slate-50 dark:bg-white/5">
                <Bot className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Atención 24/7 Automatizada</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Asistentes <br/> Virtuales Inteligentes
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Procesa lenguaje natural, aprende de cada interacción y brinda respuestas precisas las 24 horas. Reduce costos operativos hasta un 70%.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 h-14 rounded-full" onClick={handleWhatsAppDemo}>
                Solicitar Demo Gratuita
              </Button>
              <Button size="lg" variant="outline" disabled className="h-14 rounded-full px-8 opacity-50 cursor-not-allowed">
                ROI Calculator (Próximamente)
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <MetricsChart />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-24 hidden lg:block" />

        {/* Features - Cardless */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros Agentes Virtuales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Soluciones diseñadas para resolver problemas reales en el momento justo, sin fricciones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Ventas Personalizadas</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Agentes que conocen tu catálogo y políticas, listos para calificar leads y presentarlos a tus cerradores.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Calificación automática de leads</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Presentación de productos</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Cierre de ventas base</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Soporte Técnico Especializado</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Respuestas inmediatas a consultas frecuentes. Escala a agentes humanos solo cuando el contexto lo requiere.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Base de conocimiento dinámica</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Escalamiento inteligente</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Diagnóstico de problemas</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Agendamiento Activo</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sincronización total con Google Calendar y CRMs integrados. Administra citas sin intervención manual.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Sincronización en tiempo real</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Recordatorios multicanal</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Reagendamiento sin fricciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">Transforma la Atención</h2>
                <p className="text-xl text-muted-foreground">
                  Deshazte de las filas de espera. La inmediatez es la mejor retención.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-[#0ea5e9] shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Siempre Activo</h3>
                    <p className="text-muted-foreground">Respuestas a los 3 segundos, 365 días al año. Tus clientes del otro hemisferio no notarán la diferencia.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-[#0ea5e9] shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Precisión Absoluta</h3>
                    <p className="text-muted-foreground">La IA restringe su contexto a tu documentación oficial, manteniendo la voz y el tono de la marca sin desviaciones.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="w-8 h-8 text-[#0ea5e9] shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rentabilidad Inmediata</h3>
                    <p className="text-muted-foreground">Al derivar el 80% del ticket level-1 a tu agente, los analistas de soporte pueden resolver tareas más críticas.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img 
                src="/imgs/cajeraRestaurante.png" 
                alt="Agente en sitio" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Process */}
        <div className="py-24 mb-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Cómo lo construimos</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Análisis de Caso</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Definimos el vector de datos base y delimitamos la actuación de la IA.</p>
            </div>
            
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Entrenamiento RAG</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Ingestamos manuales, historiales de chat y catálogos estructurados.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Ajuste de Comportamiento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Pruebas internas rigurosas para asegurar que no existan alucinaciones.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">04</div>
              <h3 className="text-xl font-semibold mb-2">Despliegue Multi-Canal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Integrado a WhatsApp, Web y Redes. Monitoreo pasivo continuo.</p>
            </div>
          </div>
        </div>

        {/* CTA Integrations */}
        <div className="mt-8 mb-24">
          <ResearchIntegrations />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgentesVirtuales;
