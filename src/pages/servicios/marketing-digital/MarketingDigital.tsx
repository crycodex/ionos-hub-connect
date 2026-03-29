import { ArrowLeft, Megaphone, Target, TrendingUp, Users, BarChart3, Zap, Eye, MessageCircle, Download, Share2, Calendar, DollarSign, MousePointer, Smartphone, Globe, Search, Heart, Star, Award, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";
import { motion } from "framer-motion";

const MarketingDigital = () => {
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
      `Hola, me interesa conocer más sobre sus servicios de Marketing Digital.\n\n` +
      `Necesito:\n` +
      `• Campañas efectivas para mi empresa\n` +
      `• Estrategia de retailing digital\n` +
      `• Mejora del engagement con mi audiencia\n\n` +
      `¿Podrían agendar una consultoría gratuita?`
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
          <span className="text-sm font-medium text-muted-foreground">Servicios / Marketing Digital</span>
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
                <Megaphone className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Marketing Estratégico</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Campañas que <br/> <span className="text-[#0ea5e9]">transforman</span> tu presencia digital
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Desarrollamos campañas de marketing efectivas con tecnologías emergentes para impulsar tu marca, aumentar el engagement y maximizar el ROI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">+320%</span>
                </div>
                <p className="text-sm text-muted-foreground">Aumento promedio en ROI</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">+150%</span>
                </div>
                <p className="text-sm text-muted-foreground">Crecimiento en engagement</p>
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
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/imgs/Brandbook Ionos 2025.png" 
              alt="Brandbook IonosHub - Marketing Digital" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
              <h2 className="text-3xl font-bold mb-6">¿Tu Marketing Digital No Genera Resultados?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">Campañas que no llegan a la audiencia correcta.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">Bajo engagement en redes sociales y escasa conversión.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-2" />
                  <p className="text-foreground/80">ROI negativo en publicidad y falta de estrategia omnicanal.</p>
                </div>
              </div>
            </div>
            <div className="md:border-l border-border md:pl-12">
              <h3 className="text-xl font-semibold mb-6">Nuestra Solución:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                  <p className="text-foreground/80">Segmentación precisa de audiencias apoyada en data.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                  <p className="text-foreground/80">Estrategias de engagement probadas para nutrir comunidades.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                  <p className="text-foreground/80">Optimización continua del ROI con UX/UI enfocada en conversión.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-border my-24 hidden lg:block" />

        {/* Services Overview */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Servicios Integrales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Soluciones estructuradas para maximizar tu presencia y convertir visualizaciones en clientes fieles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Estrategia Digital</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Desarrollo de estrategias personalizadas basadas en análisis de mercado y comportamiento del consumidor.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Buyer personas</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Plan de contenido</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Campañas Publicitarias</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gestión integral en Google Ads, Facebook, Instagram y LinkedIn con optimización en tiempo real.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Google Ads & Search</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Meta & TikTok Ads</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">SEO & SEM</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Optimización para motores de búsqueda y gestión para aumentar visibilidad y dominar SERPs.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Optimización técnica</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Link building</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Campañas automatizadas y personalizadas para nutrir leads y aumentar conversiones estables.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Flujos Automáticos</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> A/B Testing</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gestión profesional de redes con contenido de calidad, engagement estratégico y social listening.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Gestión de comunidad</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Influencer Marketing</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Análisis detallado de métricas y reportes ejecutivos para optimizar estrategias continuamente.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Dashboards en vivo</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Analítica integral</li>
                </ul>
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
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Análisis & Estrategia</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Estudiamos tu mercado, competencia y audiencia para desarrollar un roadmap personalizado.</p>
            </div>
            
            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Implementación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Ejecutamos las campañas utilizando plataformas nativas y herramientas de automatización.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Optimización</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Monitoreamos el ROAS y CTR continuamente para maximizar la eficiencia y el retorno.</p>
            </div>

            <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">04</div>
              <h3 className="text-xl font-semibold mb-2">Escalamiento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Elevamos presupuestos en campañas exitosas y exploramos nuevos canales rentables.</p>
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

export default MarketingDigital;