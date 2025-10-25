import { ArrowLeft, Megaphone, Target, TrendingUp, Users, BarChart3, Zap, Eye, MessageCircle, Download, Share2, Calendar, DollarSign, MousePointer, Smartphone, Globe, Search, Heart, Star, Award, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";

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

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      `Hola, he visto su página de Marketing Digital y me interesa ver una demo de sus campañas.\n\n` +
      `Me gustaría conocer:\n` +
      `• Ejemplos de campañas exitosas\n` +
      `• Estrategias de engagement\n` +
      `• Métricas de ROI reales\n\n` +
      `¿Podrían mostrarme casos de éxito?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppPortfolio = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver el portfolio de Marketing Digital.\n\n` +
      `Quiero conocer:\n` +
      `• Campañas realizadas para empresas similares\n` +
      `• Resultados obtenidos\n` +
      `• Estrategias implementadas\n\n` +
      `¿Podrían enviarme ejemplos relevantes para mi industria?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('es-ES').format(num);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleVolver}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Servicios
          </Button>
          <div className="h-8 w-px bg-border" />
          <h1 className="text-3xl font-bold">Marketing Digital</h1>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Megaphone className="h-3 w-3 mr-1" />
                Marketing Digital Estratégico
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Campañas que <span className="text-primary">transforman</span> tu presencia digital
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desarrollamos campañas de marketing efectivas con personal capacitado y tecnologías emergentes 
                para impulsar tu presencia digital, aumentar el engagement y maximizar el ROI de tu inversión.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+320%</span>
                </div>
                <p className="text-sm text-muted-foreground">Aumento promedio en ROI</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+150%</span>
                </div>
                <p className="text-sm text-muted-foreground">Crecimiento en engagement</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+200%</span>
                </div>
                <p className="text-sm text-muted-foreground">Mejora en conversión</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">Monitoreo continuo</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctanos
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-light/5 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="space-y-0">
                {/* Imagen de Marketing Digital */}
                <div className="relative w-full aspect-[4/3]">
                  <img 
                    src="/imgs/Brandbook Ionos 2025.png" 
                    alt="Brandbook IonosHub - Marketing Digital" 
                    className="w-full h-full object-cover"
                  />
                  {/* Brillo azul inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-500/30 via-blue-400/15 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-red-50 via-red-100 to-orange-50 dark:from-red-950/40 dark:via-red-900/30 dark:to-orange-950/40 border-red-200/50 dark:border-red-800/50 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">¿Tu Marketing Digital No Genera Resultados?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Problemas Comunes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <p className="text-muted-foreground">Campañas que no llegan a la audiencia correcta</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <p className="text-muted-foreground">Bajo engagement en redes sociales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <p className="text-muted-foreground">ROI negativo en publicidad digital</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <p className="text-muted-foreground">Falta de estrategia omnicanal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <p className="text-muted-foreground">Experiencia de usuario deficiente</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">Nuestra Solución:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-muted-foreground">Segmentación precisa de audiencias</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-muted-foreground">Estrategias de engagement probadas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-muted-foreground">Optimización continua del ROI</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-muted-foreground">Integración omnicanal perfecta</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-muted-foreground">UX/UI optimizada para conversión</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios de Marketing Digital</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales diseñadas para maximizar tu presencia digital y generar resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Estrategia Digital */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Estrategia Digital</h3>
              <p className="text-muted-foreground mb-4">
                Desarrollo de estrategias personalizadas basadas en análisis de mercado y comportamiento del consumidor.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Análisis de competencia</li>
                <li>• Definición de buyer personas</li>
                <li>• Plan de contenido estratégico</li>
                <li>• Roadmap de implementación</li>
              </ul>
            </Card>

            {/* Campañas Publicitarias */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Megaphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campañas Publicitarias</h3>
              <p className="text-muted-foreground mb-4">
                Creación y gestión de campañas en Google Ads, Facebook, Instagram y LinkedIn con optimización continua.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Google Ads (Search & Display)</li>
                <li>• Facebook & Instagram Ads</li>
                <li>• LinkedIn Advertising</li>
                <li>• TikTok & YouTube Ads</li>
              </ul>
            </Card>

            {/* Social Media Marketing */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Gestión profesional de redes sociales con contenido de calidad y engagement estratégico.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gestión de comunidades</li>
                <li>• Creación de contenido</li>
                <li>• Influencer marketing</li>
                <li>• Social listening</li>
              </ul>
            </Card>

            {/* SEO & SEM */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO & SEM</h3>
              <p className="text-muted-foreground mb-4">
                Optimización para motores de búsqueda y gestión de campañas de pago para aumentar visibilidad.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Optimización técnica SEO</li>
                <li>• Link building estratégico</li>
                <li>• Google Ads management</li>
                <li>• Local SEO</li>
              </ul>
            </Card>

            {/* Email Marketing */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Campañas de email automatizadas y personalizadas para nutrir leads y aumentar conversiones.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automatización de flujos</li>
                <li>• Segmentación avanzada</li>
                <li>• A/B testing</li>
                <li>• Análisis de comportamiento</li>
              </ul>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Análisis detallado de métricas y reportes ejecutivos para optimizar estrategias continuamente.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Google Analytics 4</li>
                <li>• Facebook Analytics</li>
                <li>• Reportes personalizados</li>
                <li>• Dashboards en tiempo real</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 px-6 md:px-16 py-14 shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nuestro Proceso</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodología probada que garantiza resultados excepcionales en cada proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Análisis & Estrategia</h3>
                <p className="text-muted-foreground">
                  Analizamos tu mercado, competencia y audiencia para desarrollar una estrategia personalizada.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementación</h3>
                <p className="text-muted-foreground">
                  Ejecutamos las campañas con las mejores herramientas y tecnologías del mercado.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimización</h3>
                <p className="text-muted-foreground">
                  Monitoreamos y optimizamos continuamente para maximizar el ROI y mejorar resultados.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Escalamiento</h3>
                <p className="text-muted-foreground">
                  Escalamos las campañas exitosas y replicamos estrategias ganadoras en nuevos canales.
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

export default MarketingDigital;