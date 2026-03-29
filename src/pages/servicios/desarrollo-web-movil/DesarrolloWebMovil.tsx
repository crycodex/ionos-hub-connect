import { 
  ArrowLeft, Code, Smartphone, Globe, Monitor, Zap, Users, CheckCircle, 
  MessageCircle, Shield, Award, Target, Building, ShoppingCart, Heart, 
  GraduationCap, Car, Home, Coffee, Camera, Music, Gamepad2, Briefcase,
  Clock, Star, TrendingUp, BarChart3, Settings, Database, Brain, Rocket,
  Palette, Layers, Smartphone as Phone, Laptop, Tablet, Watch, Headphones,
  Search, ExternalLink, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";
import { motion } from "framer-motion";

const DesarrolloWebMovil = () => {
  const navigate = useNavigate();

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa una consultoría en desarrollo web y móvil.\n\n` +
      `Necesito:\n` +
      `• Sitio web profesional\n` +
      `• Aplicación móvil\n` +
      `• E-commerce personalizado\n` +
      `• Integración de sistemas\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppPortfolio = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver el portfolio de desarrollo web y móvil.\n\n` +
      `Quiero conocer:\n` +
      `• Proyectos realizados\n` +
      `• Tecnologías dominadas\n` +
      `• Resultados obtenidos\n` +
      `• Testimonios de clientes\n\n` +
      `¿Podrían enviarme ejemplos relevantes para mi industria?`
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
          <span className="text-sm font-medium text-muted-foreground">Servicios / Desarrollo Web y Móvil</span>
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
                <Code className="w-4 h-4 text-[#0ea5e9]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Tecnología de Vanguardia</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Software que <br/> <span className="text-[#0ea5e9]">escala tu negocio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Creamos aplicaciones web y móviles nativas de alto rendimiento, diseñadas con precisión técnica para resolver problemas reales y acelerar tu crecimiento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Código Robusto</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-lg">Cross-platform</span>
                </div>
                <p className="text-sm text-muted-foreground">Experiencia fluida</p>
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
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900"
          >
            <img 
              src="/imgs/pixelart3d.png" 
              alt="Desarrollo Web y Móvil" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-24 hidden lg:block" />

        {/* Servicios */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Competencias Core</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Dominamos todo el espectro del stack tecnológico para entregar soluciones integrales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Arquitectura robusta y escalable para plataformas B2B/B2C, SaaS y soluciones e-commerce a medida.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Apps Web Progresivas (PWA)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Sistemas de Gestión</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Desarrollo Móvil</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Aplicaciones de alto rendimiento diseñadas específicamente para iOS y Android maximizando los recursos del dispositivo.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Nativas (Swift/Kotlin)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Híbridas (React Native/Flutter)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Diseño UX/UI</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Interfaces diseñadas métricamente para reducir la fricción, aumentar retención y guiar la conversión.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Prototipos Interactivos</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Sistemas de Diseño</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Integración y APIs</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conectamos engranajes aislados, sincronizando ERPs, CRMs y pasarelas de pago sin interrupciones.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Desarrollo de APIs REST/GraphQL</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Plataformas de Terceros</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Arquitectura Cloud</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Infraestructuras preparadas para alta concurrencia con estrategias de autoescalado y seguridad.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Serverless y Microservicios</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Optimización AWS/GCP</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Mantenimiento DevSecOps</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gestión proactiva del ciclo de vida del software, monitoreo continuo y resolución de vulnerabilidades.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> CI/CD Pipelines</li>
                  <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-[#0ea5e9]" /> Auditorías de Código</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Proyectos Destacados (Cardless) */}
        <div className="mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Caso de Estudio: Web</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-border">
                <img 
                  src="/imgs/imgsWeb/appWeb1.png" 
                  alt="Cielo Verde" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-semibold">Cielo Verde</h4>
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Web App</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sistema integral de reservas turísticas que conecta operaciones complejas con una interfaz orientada puramente a la inmersión del usuario y conversión directa.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">MongoDB</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('https://www.cieloverdespanishschool.com/about', '_blank')} className="group/btn">
                  Ver Proyecto <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-border">
                <img 
                  src="/imgs/imgsWeb/appWeb2.png" 
                  alt="Dashboard Empresarial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-semibold">Dashboard BI</h4>
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Enterprise Web</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Panel corporativo con visualización de grandes set de datos en tiempo real, gestión de permisos estrictos y generación rápida de reportes a medida.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">Vue.js</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">Python</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">PostgreSQL</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleWhatsAppPortfolio} className="group/btn">
                  Solicitar Acceso <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
              </div>
            </motion.div>

          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 pt-16 border-t border-border"
          >
            <h2 className="text-3xl font-bold mb-4">Caso de Estudio: Móvil</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-border p-4 flex items-center justify-center">
                <img 
                  src="/imgs/imgsMovil/appMovil1.png" 
                  alt="SwapMe" 
                  className="w-[80%] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">SwapMe</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  Marketplace C2C con geolocalización avanzada en tiempo real y arquitectura orientada a alta concurrencia.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">React Native</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">Firebase</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.swapapp.me', '_blank')} className="px-0 hover:bg-transparent hover:text-[#0ea5e9]">
                  Ver en Store <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-border p-4 flex items-center justify-center">
                <img 
                  src="/imgs/imgsMovil/appMovil2.png" 
                  alt="Chat Simulator" 
                  className="w-[80%] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Chat Simulator</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  Aplicación nativa diseñada para un rendimiento máximo offline, persistencia local segura y renderizado fluido.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">Flutter</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">Offline-first</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.cristhianrecalde.app_chat', '_blank')} className="px-0 hover:bg-transparent hover:text-[#0ea5e9]">
                  Ver en Store <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-border p-4 flex items-center justify-center">
                <img 
                  src="/imgs/imgsMovil/appMovil3.png" 
                  alt="Chulla Cash" 
                  className="w-[80%] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Chulla Cash</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  Herramienta Fintech que orquesta datos sensibles con protocolos férreos de encriptado y biometría activa.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">Fintech</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px] font-medium uppercase">SecOps</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.chullacash.app', '_blank')} className="px-0 hover:bg-transparent hover:text-[#0ea5e9]">
                  Ver en Store <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Proceso */}
        <div className="p-10 lg:p-16 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-3xl mb-24">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Pipeline Ágil</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nuestra metodología empírica garantiza calidad superior iterando rápidamente hacia el mercado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#0ea5e9]/30 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Arquitectura técnica inicial, definición core del producto y evaluación estricta de factibilidad.</p>
            </div>
            
            <div className="border-t-2 border-[#0ea5e9]/30 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Wireframing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Diseño de experiencia interactivo mitigando riesgos antes de escribir una sola línea de código.</p>
            </div>

            <div className="border-t-2 border-[#0ea5e9]/30 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Sprints Técnicos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Desarrollo iterativo de 2 semanas mediante CI/CD asegurando entregables siempre funcionales.</p>
            </div>

            <div className="border-t-2 border-[#0ea5e9]/30 pt-6">
              <div className="text-4xl font-light text-[#0ea5e9] mb-4">04</div>
              <h3 className="text-xl font-semibold mb-2">Escalamiento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Despliegue a producción blindado con analítica y observabilidad en tiempo real.</p>
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

export default DesarrolloWebMovil;
