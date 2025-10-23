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
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs text-muted-foreground">Satisfacción</div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-blue-light/15 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl border-2 border-primary/10">
              <div className="space-y-6">
                <p>aqui va foto</p>
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
          <div className="mb-12">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Proyectos Web</h3>
              </div>
              <p className="text-muted-foreground">
                Plataformas web modernas y escalables que impulsan el crecimiento digital
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/imgs/imgsWeb/appWeb1.png" 
                      alt="Proyecto Web 1" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-primary text-primary-foreground">E-commerce</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Plataforma E-commerce Avanzada</h4>
                    <p className="text-muted-foreground mb-4">
                      Sistema completo de comercio electrónico con panel administrativo, 
                      gestión de inventario y procesamiento de pagos integrado.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">Stripe</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleWhatsAppPortfolio}
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/imgs/imgsWeb/appWeb2.png" 
                      alt="Proyecto Web 2" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-primary text-primary-foreground">Dashboard</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Dashboard Empresarial</h4>
                    <p className="text-muted-foreground mb-4">
                      Panel de control intuitivo con visualización de datos en tiempo real, 
                      reportes automatizados y gestión de usuarios avanzada.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Vue.js</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Chart.js</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleWhatsAppPortfolio}
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Proyectos Móviles */}
          <div className="mb-12">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Aplicaciones Móviles</h3>
              </div>
              <p className="text-muted-foreground">
                Apps nativas e híbridas que conectan tu negocio con tus clientes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/imgs/imgsMovil/appMovil1.png" 
                      alt="App Móvil 1" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-green-500 text-white">iOS</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">App de Delivery</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Aplicación completa de entrega a domicilio con geolocalización y pagos integrados.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs">React Native</Badge>
                      <Badge variant="outline" className="text-xs">Firebase</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleWhatsAppPortfolio}
                      className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/imgs/imgsMovil/appMovil2.png" 
                      alt="App Móvil 2" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-blue-500 text-white">Android</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">App Financiera</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Plataforma bancaria móvil con transacciones seguras y gestión de cuentas.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs">Flutter</Badge>
                      <Badge variant="outline" className="text-xs">AWS</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleWhatsAppPortfolio}
                      className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/imgs/imgsMovil/appMovil3.png" 
                      alt="App Móvil 3" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-purple-500 text-white">Cross-Platform</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">App de Fitness</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Aplicación de entrenamiento personalizado con seguimiento de progreso y comunidad.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs">React Native</Badge>
                      <Badge variant="outline" className="text-xs">MongoDB</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleWhatsAppPortfolio}
                      className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ver Detalles
                    </Button>
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
