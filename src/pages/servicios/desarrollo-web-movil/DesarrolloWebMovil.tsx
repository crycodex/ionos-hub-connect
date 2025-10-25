import { 
  ArrowLeft, Code, Smartphone, Globe, Monitor, Zap, Users, CheckCircle, 
  MessageCircle, Shield, Award, Target, Building, ShoppingCart, Heart, 
  GraduationCap, Car, Home, Coffee, Camera, Music, Gamepad2, Briefcase,
  Clock, Star, TrendingUp, BarChart3, Settings, Database, Brain, Rocket,
  Palette, Layers, Smartphone as Phone, Laptop, Tablet, Watch, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver una demo de sus desarrollos web y móviles.\n\n` +
      `Me gustaría conocer:\n` +
      `• Casos de éxito\n` +
      `• Tecnologías utilizadas\n` +
      `• Proceso de desarrollo\n` +
      `• Tiempos de entrega\n\n` +
      `¿Podrían mostrarme algunos ejemplos?`
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
    // Scroll a la sección de servicios después de navegar
    setTimeout(() => {
      const serviciosSection = document.getElementById('servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleVolver}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div className="h-8 w-px bg-border" />
          <h1 className="text-3xl font-bold">Desarrollo Web - Móvil</h1>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-max">Desarrollo Profesional</Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Soluciones digitales que impulsan tu negocio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollamos sitios web, aplicaciones móviles y plataformas digitales personalizadas 
              con las últimas tecnologías para maximizar tu presencia online y mejorar la experiencia de tus usuarios.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Responsive</div>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultoría Gratuita
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-light/5 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="space-y-0">
                {/* Imagen de Desarrollo Web y Móvil */}
                <div className="relative w-full aspect-[4/3]">
                  <img 
                    src="/imgs/pixelart3d.png" 
                    alt="Desarrollo Web y Móvil - Pixel Art 3D" 
                    className="w-full h-full object-cover"
                  />
                  {/* Brillo azul inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-500/30 via-blue-400/15 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Principales */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones completas de desarrollo web y móvil adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desarrollo Web */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
              <p className="text-muted-foreground mb-4">
                Sitios web profesionales, aplicaciones web progresivas y plataformas digitales con las últimas tecnologías.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sitios web corporativos</li>
                <li>• E-commerce personalizado</li>
                <li>• Aplicaciones web progresivas</li>
                <li>• Sistemas de gestión</li>
              </ul>
            </Card>

            {/* Desarrollo Móvil */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desarrollo Móvil</h3>
              <p className="text-muted-foreground mb-4">
                Aplicaciones móviles nativas e híbridas para iOS y Android con diseño intuitivo y funcionalidades avanzadas.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Apps nativas iOS/Android</li>
                <li>• Aplicaciones híbridas</li>
                <li>• Apps de e-commerce</li>
                <li>• Aplicaciones empresariales</li>
              </ul>
            </Card>

            {/* Diseño UX/UI */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diseño UX/UI</h3>
              <p className="text-muted-foreground mb-4">
                Diseño centrado en el usuario que mejora la experiencia y aumenta las conversiones de tu plataforma digital.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Diseño de interfaces</li>
                <li>• Experiencia de usuario</li>
                <li>• Prototipado interactivo</li>
                <li>• Testing de usabilidad</li>
              </ul>
            </Card>

            {/* Integración de Sistemas */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integración de Sistemas</h3>
              <p className="text-muted-foreground mb-4">
                Conectamos tu nueva plataforma con sistemas existentes para un flujo de trabajo optimizado.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• APIs personalizadas</li>
                <li>• Integración CRM/ERP</li>
                <li>• Sistemas de pago</li>
                <li>• Automatización de procesos</li>
              </ul>
            </Card>

            {/* Mantenimiento */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mantenimiento</h3>
              <p className="text-muted-foreground mb-4">
                Soporte técnico continuo, actualizaciones de seguridad y mejoras para mantener tu plataforma actualizada.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Soporte 24/7</li>
                <li>• Actualizaciones de seguridad</li>
                <li>• Optimización de rendimiento</li>
                <li>• Backup y recuperación</li>
              </ul>
            </Card>

            {/* Consultoría Técnica */}
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultoría Técnica</h3>
              <p className="text-muted-foreground mb-4">
                Asesoramiento estratégico para elegir las mejores tecnologías y arquitecturas para tu proyecto.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Arquitectura de software</li>
                <li>• Selección de tecnologías</li>
                <li>• Escalabilidad</li>
                <li>• Mejores prácticas</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Proyectos */}
        <div className="mb-16">
          {/* Proyectos Web */}
          <div className="mb-16">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">Proyectos Web</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluciones web modernas y escalables que impulsan el crecimiento digital
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Proyecto Web 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-72 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-4">
                    <img 
                      src="/imgs/imgsWeb/appWeb1.png" 
                      alt="Proyecto Web 1" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    <div className="absolute inset-4 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold">Cielo Verde</h4>
                      <Badge variant="outline" className="text-xs">Web</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      Cielo Verde, una empresa joven apasionada por mostrar la belleza de Ecuador 
                      a través de experiencias de viaje únicas. Fundada en 2023, tenemos guías 
                      experimentados que comparten un profundo amor por nuestro país y una gran 
                      riqueza de conocimiento sobre destinos turísticos locales.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">React</Badge>
                      <Badge variant="secondary" className="text-xs">Node.js</Badge>
                      <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                      <Badge variant="secondary" className="text-xs">Stripe</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open('https://www.cieloverdespanishschool.com/about', '_blank', 'noopener,noreferrer')}
                        className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Proyecto Web 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-72 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-4">
                    <img 
                      src="/imgs/imgsWeb/appWeb2.png" 
                      alt="Proyecto Web 2" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    <div className="absolute inset-4 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold">Dashboard Empresarial</h4>
                      <Badge variant="outline" className="text-xs">Web</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      Panel de control intuitivo con visualización de datos en tiempo real, 
                      reportes automatizados y gestión de usuarios avanzada. Incluye 
                      integración con múltiples fuentes de datos y exportación de reportes.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Vue.js</Badge>
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                      <Badge variant="secondary" className="text-xs">Chart.js</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleWhatsAppPortfolio}
                        className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Proyectos Móviles */}
          <div className="mb-16">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">Aplicaciones Móviles</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Apps nativas e híbridas que conectan tu negocio con tus clientes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* App Móvil 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-3">
                    <img 
                      src="/imgs/imgsMovil/appMovil1.png" 
                      alt="App Móvil 1" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    <div className="absolute inset-3 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">SwapMe</h4>
                      <Badge variant="outline" className="text-xs">Android</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                      SwapMe es una aplicación que transforma la forma en que consumes moda. 
                      Intercambia y vende ropa de segunda mano de manera sencilla, segura y 
                      sostenible. Dale una segunda vida a tus prendas, ahorra dinero y 
                      contribuye a reducir el impacto ambiental de la industria textil.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">React Native</Badge>
                      <Badge variant="secondary" className="text-xs">Firebase</Badge>
                      <Badge variant="secondary" className="text-xs">Maps API</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.swapapp.me', '_blank', 'noopener,noreferrer')}
                        className="flex-1 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* App Móvil 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-3">
                    <img 
                      src="/imgs/imgsMovil/appMovil2.png" 
                      alt="App Móvil 2" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    <div className="absolute inset-3 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">Chat Simulator</h4>
                      <Badge variant="outline" className="text-xs">Android</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                      Chat Simulator es una aplicación simple, rápida y divertida que te permite 
                      simular conversaciones realistas entre dos usuarios, todo sin necesidad de 
                      conexión a internet ni cuentas de usuario. Diseñada con una interfaz moderna 
                      inspirada en apps de mensajería populares.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">Flutter</Badge>
                      <Badge variant="secondary" className="text-xs">AWS</Badge>
                      <Badge variant="secondary" className="text-xs">Offline</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.cristhianrecalde.app_chat', '_blank', 'noopener,noreferrer')}
                        className="flex-1 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* App Móvil 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-3">
                    <img 
                      src="/imgs/imgsMovil/appMovil3.png" 
                      alt="App Móvil 3" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    <div className="absolute inset-3 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">Chulla Cash</h4>
                      <Badge variant="outline" className="text-xs">Android</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                      Chulla Cash es una aplicación innovadora de gestión financiera personal 
                      diseñada para transformar la manera en que las personas manejan su dinero. 
                      Combinando tecnología avanzada con una experiencia de usuario intuitiva, 
                      hace que el control de gastos y el ahorro sean procesos simples y efectivos.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">React Native</Badge>
                      <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                      <Badge variant="secondary" className="text-xs">Fintech</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.chullacash.app', '_blank', 'noopener,noreferrer')}
                        className="flex-1 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Proceso de Desarrollo */}
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 px-6 md:px-16 py-14 shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nuestro Proceso de Desarrollo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodología ágil probada que garantiza entregas de calidad en tiempo y forma
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Análisis & Planificación</h3>
                <p className="text-muted-foreground">
                  Analizamos tus necesidades, definimos objetivos y creamos un plan de desarrollo detallado.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Diseño & Prototipado</h3>
                <p className="text-muted-foreground">
                  Creamos wireframes, mockups y prototipos interactivos para validar la experiencia de usuario.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Desarrollo & Testing</h3>
                <p className="text-muted-foreground">
                  Desarrollamos la solución con metodología ágil y realizamos pruebas continuas de calidad.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Despliegue & Soporte</h3>
                <p className="text-muted-foreground">
                  Desplegamos tu solución y proporcionamos soporte continuo para mantenerla actualizada.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mb-16">
          <ResearchIntegrations />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DesarrolloWebMovil;
