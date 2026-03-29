import { 
  ArrowLeft, 
  ArrowRight,
  BarChart3, 
  TrendingUp, 
  Database, 
  Target, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  PieChart, 
  LineChart, 
  Activity,
  CheckCircle,
  MessageCircle,
  Download,
  Eye,
  Settings,
  Globe,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import BusinessIntelligenceIntegrations from "@/components/BusinessIntelligenceIntegrations";
import { motion } from "framer-motion";

const MetricsChart = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="/imgs/fotoDashboards.webp" 
        alt="Dashboard de Business Intelligence" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

const BusinessIntelligence = () => {
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
      `Hola, necesito consultoría en Business Intelligence.\n\n` +
      `🎯 Mi empresa:\n` +
      `• Industria: [Tu industria]\n` +
      `• Tamaño: [Pequeña/Mediana/Grande]\n` +
      `• Sistemas actuales: [CRM, ERP, etc.]\n\n` +
      `📈 Objetivos:\n` +
      `• Mejorar toma de decisiones\n` +
      `• Optimizar procesos operativos\n` +
      `• Aumentar rentabilidad\n\n` +
      `¿Podrían contactarme para una consultoría estratégica?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
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
          <span className="text-sm font-medium text-muted-foreground">Servicios / Business Intelligence</span>
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
                <Brain className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Inteligencia Empresarial</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Transforma tus <br/> <span className="text-[#0ea5e9]">datos</span> en decisiones
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Dashboards ejecutivos, análisis avanzado y pronósticos que impulsan el crecimiento de tu empresa con IA y visualización en tiempo real.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">+85%</span>
                </div>
                <p className="text-sm text-muted-foreground">Velocidad de decisiones</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 h-14 rounded-full" onClick={handleWhatsAppConsultoria}>
                Contáctanos
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

        {/* Problem Statement */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 rounded-2xl p-10 mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Tus datos están dispersos y no sabes cómo aprovecharlos?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">Tienes información valiosa en múltiples sistemas pero no puedes conectarla.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">Tomas decisiones basadas en intuición en lugar de datos concretos.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">Pierdes oportunidades porque no anticipas tendencias del mercado.</p>
                </div>
              </div>
            </div>
            <div className="text-center md:border-l border-border md:pl-12">
              <div className="text-7xl font-bold text-[#0ea5e9] mb-4">73%</div>
              <p className="text-lg font-medium text-muted-foreground">
                de empresas no aprovechan sus datos para decisiones estratégicas
              </p>
            </div>
          </div>
        </motion.div>

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
            <h2 className="text-4xl font-bold mb-4">La Solución Perfecta</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Creamos un ecosistema que conecta todos tus datos y los transforma en insights accionables en tiempo real.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Dashboards Ejecutivos</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Visualización interactiva con métricas personalizadas e indicadores de estado, accesibles en cualquier momento.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Métricas en tiempo real</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Alertas automáticas</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Análisis Predictivo</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IA que analiza patrones históricos para pronosticar tendencias e identificar riesgos futuros.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Pronóstico de demanda</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Detección de anomalías</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Integración Total</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conectamos tu CRM, ERP, E-commerce y más plataformas en un único data warehouse centralizado.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> APIs nativas</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Sincronización continua</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Reportes Automatizados</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Informes generados dinámicamente que llegan directo a tu equipo, ahorrando horas operativas.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Configuración flexible</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Múltiples formatos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboards Interactivos */}
        <div className="py-24 border-t border-border">
          <motion.div 
             initial="initial"
             whileInView="animate"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeUp}
             className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Explora en Tiempo Real</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Nuestros reportes de Power BI publican información consolidada. Haz clic sobre cada modelo para experimentarlo en vivo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="group cursor-pointer space-y-4" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiNmFhNjhiZDMtZmIzZS00MTQ1LWFkZjgtYTVjMjg3ZWVkOTk2IiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
                <img src="/imgs/dashboards/reporteIncidencias/image.png" alt="Reporte Incidencias" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0ea5e9] transition-colors">Reporte de Incidencias</h3>
                <p className="text-muted-foreground text-sm mb-4">Monitoreo en tiempo real de incidencias y métricas operativas diarias.</p>
                <span className="text-sm font-medium text-[#0ea5e9] flex items-center gap-1">Ver Dashboard <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="group cursor-pointer space-y-4" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiNWE3OGY0YzEtNTJlNC00NzBlLTkwNzctZTIyMTcyMWM3MTMzIiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
                <img src="/imgs/dashboards/reporteRecursos/image.png" alt="Reporte Recursos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0ea5e9] transition-colors">Gestión de Recursos</h3>
                <p className="text-muted-foreground text-sm mb-4">Análisis completo de recursos humanos y materiales con KPIS de eficiencia.</p>
                <span className="text-sm font-medium text-[#0ea5e9] flex items-center gap-1">Ver Dashboard <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="group cursor-pointer space-y-4" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiYmJlNDNkNGUtMWI3Ny00MjMyLWI1ZmUtOWQ1NWJkZjYzNGRlIiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
                <img src="/imgs/dashboards/reporteventas/image.png" alt="Reporte Ventas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0ea5e9] transition-colors">Análisis de Ventas</h3>
                <p className="text-muted-foreground text-sm mb-4">Visualización de KPIS de ventas, análisis de tendencias y pronósticos comerciales.</p>
                <span className="text-sm font-medium text-[#0ea5e9] flex items-center gap-1">Ver Dashboard <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>

          </div>
        </div>

        {/* Process */}
        <div className="py-24 mb-16 border-t border-border">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Cómo Implementamos</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Evaluación Inicial</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Analizamos los silos de datos actuales y las metas de negocio.</p>
            </div>
            
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Diseño y Flujos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Construimos KPIs específicos y conectores para tu ecosistema.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Implementación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Centralizamos la data en un Data Warehouse bajo un entorno seguro.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">04</div>
              <h3 className="text-xl font-semibold mb-2">Despliegue y On-Boarding</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Lanzamos los dashboards y capacitamos a tu equipo directivo.</p>
            </div>
          </div>
        </div>

        {/* CTA Integrations */}
        <div className="mt-8 mb-24">
          <BusinessIntelligenceIntegrations />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
