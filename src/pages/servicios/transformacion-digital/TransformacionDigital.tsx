import {
  ArrowLeft, Rocket, Settings, Users, Zap, Clock, Shield, Brain, Database,
  MessageCircle, FileText, Eye, CheckCircle, X, TrendingUp, Award, Target,
  Building, Smartphone, Laptop, Monitor, Headphones, Briefcase, GraduationCap,
  Heart, Car, Home, Coffee, Camera, Music, Gamepad2, ShoppingCart, Globe,
  Layers, PieChart, BarChart, Filter, Download, Play, ArrowRight, Star,
  Cpu, Server, Cloud, Wifi, Lock, RefreshCw, Activity, Workflow, Bot,
  BookOpen, GraduationCap as Cap, Users2, Calendar, DollarSign, Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";
import { motion } from "framer-motion";

const TransformacionDigital = () => {
  const navigate = useNavigate();

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa una consultoría de transformación digital.\n\n` +
      `Necesito:\n` +
      `• Asesoría tecnológica para modernización\n` +
      `• Capacitación especializada para mi equipo\n` +
      `• Automatización de procesos sin interrumpir operaciones\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCapacitacion = () => {
    const message = encodeURIComponent(
      `Hola, me interesa conocer más sobre sus programas de capacitación especializada.\n\n` +
      `Me gustaría:\n` +
      `• Capacitar a mi equipo en nuevas tecnologías\n` +
      `• Certificaciones en herramientas digitales\n` +
      `• Formación continua sin interrumpir operaciones\n\n` +
      `¿Podrían enviarme información detallada?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleVolver = () => {
    navigate('/');
    setTimeout(() => {
      const serviciosSection = document.getElementById('servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
          <span className="text-sm font-medium text-muted-foreground">Servicios / Transformación Digital</span>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 overflow-x-hidden"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-slate-200 dark:border-white/10 rounded-full bg-slate-50 dark:bg-white/5">
                <Workflow className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Evolución Sin Interrupciones</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Modernización <br/> <span className="text-[#0ea5e9]">inteligente</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Auditorías tecnológicas, capacitación especializada y automatización orquestada para evolucionar tu negocio sin detener la operación diaria.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">Operación continua</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">RPA</span>
                </div>
                <p className="text-sm text-muted-foreground">Automatización modular</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 h-14 rounded-full" onClick={handleWhatsAppConsultoria}>
                Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline" className="px-8 h-14 rounded-full" onClick={handleWhatsAppCapacitacion}>
                Ver Capacitaciones
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900"
          >
            <img 
              src="/imgs/adanRobot.png" 
              alt="Transformación Digital" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-24 hidden lg:block" />

        {/* Paradigma Statement */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">El puente hacia el futuro operativo</h2>
            <p className="text-xl text-muted-foreground">
              El 70% de las iniciativas de transformación digital fallan por fricción interna y paradas críticas. Nuestra arquitectura de transición revierte este riesgo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 border border-red-100 dark:border-red-950/30 bg-red-50/30 dark:bg-red-950/10 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-xl">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-red-950 dark:text-red-100">Transición Tradicional</h3>
              </div>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Interrupciones sistémicas prolongadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Resistencia pronunciada del personal a las nuevas herramientas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Costos ocultos y deuda técnica imprevista.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Integración Evolutiva</h3>
              </div>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  <span>Continuidad operativa garantizada mediante módulos paralelos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  <span>Capacitación en-ruta (On-the-job training) para fluidez de adopción.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  <span>Costos predecibles y esquemas de contingencia inmediata.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Pilares */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Módulos de Implementación</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Nuestras unidades de transformación pueden aplicarse de forma holística o como inyecciones focales en tu cadena de valor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Auditoría & Estrategia</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 block h-auto md:h-[80px]">
                  Disección meticulosa de tu infraestructura técnica y operativa para encontrar cuellos de botella de alto impacto.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Roadmap de modernización</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Arquitectura de soluciones</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Evaluación de deuda técnica</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Upskilling & Adopción</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 block h-auto md:h-[80px]">
                  Elevamos las competencias de tu capital humano para asegurar que la tecnología sea un multiplicador, no un obstáculo.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Mentorías especializadas</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Talleres de alfabetización digital</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Seguimiento post-implementación</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Automatización (RPA)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 block h-auto md:h-[80px]">
                  Delegación de procesos rutinarios a agentes lógicos para que tu equipo se concentre en decisiones estratégicas de negocio.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Diseño de flujos autónomos</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Integración cross-platform</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Observabilidad de procesos</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Proceso */}
        <div className="py-24 border-t border-border mb-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Ruta de Ejecución</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">01</div>
              <h3 className="text-sm font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Mapeo del tejido digital actual y fricciones operativas.</p>
            </div>
            
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">02</div>
              <h3 className="text-sm font-semibold mb-2">Roadmap</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Diseño de la meta a futuro (To-Be) con KPIs financieros.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">03</div>
              <h3 className="text-sm font-semibold mb-2">Enablement</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Capacitación focal para alinear equipos a herramientas clave.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">04</div>
              <h3 className="text-sm font-semibold mb-2">Build & RPA</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Codificación y configuración de agentes automatizados.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">05</div>
              <h3 className="text-sm font-semibold mb-2">Rollout</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Puesta en marcha secuencial para mantener el uptime.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">06</div>
              <h3 className="text-sm font-semibold mb-2">Monitor</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Auditorías post-lanzamiento para asegurar adopción y ROI.</p>
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

export default TransformacionDigital;
