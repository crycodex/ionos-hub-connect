import { ArrowLeft, Megaphone, Target, TrendingUp, Users, BarChart3, Zap, Eye, MessageCircle, Download, Share2, Calendar, DollarSign, MousePointer, Smartphone, Globe, Search, Heart, Star, Award, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react";
import { SiGoogleads, SiFacebook, SiGoogleanalytics, SiMailchimp, SiSemrush, SiHootsuite, SiCanva, SiHubspot } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-blue-light/10">
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
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Megaphone className="h-3 w-3 mr-1" />
            Marketing Digital Estratégico
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Campañas que <span className="text-primary">Transforman</span> tu Negocio
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Desarrollamos campañas de marketing efectivas con personal capacitado y tecnologías emergentes 
            para impulsar tu presencia digital, aumentar el engagement y maximizar el ROI de tu inversión.
          </p>
          
          {/* Métricas principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <p className="text-base font-semibold text-primary mb-1">
                Atención personalizada
              </p>
              <p>
                En cada proyecto
              </p>
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-primary mb-1">
                Estrategias innovadoras
              </p>
              <p>
                A la medida
              </p>
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-primary mb-1">
                Equipo profesional
              </p>
              <p>
                En constante actualización
              </p>
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-primary mb-1">
                Crecimiento conjunto
              </p>
              <p>
                Junto a nuestros primeros clientes
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
              <Megaphone className="mr-2 h-5 w-5" />
              Consultoría Gratuita
            </Button>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-red-100 via-red-50 to-orange-50 border border-red-100 dark:bg-gradient-to-r dark:from-red-900 dark:via-red-950 dark:to-orange-950 dark:border-red-900">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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

        {/* Technology Stack */}
        
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tecnologías y Herramientas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Utilizamos las mejores herramientas del mercado para garantizar el éxito de tus campañas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Google Ads Icon */}
                <SiGoogleads className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Google Ads</h3>
              <p className="text-sm text-muted-foreground">Campañas de búsqueda y display optimizadas</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Facebook Ads Icon */}
                <SiFacebook className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Facebook Ads</h3>
              <p className="text-sm text-muted-foreground">Publicidad social con targeting avanzado</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Google Analytics Icon */}
                <SiGoogleanalytics className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Google Analytics</h3>
              <p className="text-sm text-muted-foreground">Análisis profundo de comportamiento</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Mailchimp Icon */}
                <SiMailchimp className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Mailchimp</h3>
              <p className="text-sm text-muted-foreground">Email marketing automatizado</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* SEMrush Icon */}
                <SiSemrush className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">SEMrush</h3>
              <p className="text-sm text-muted-foreground">SEO y análisis de competencia</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Hootsuite Icon */}
                <SiHootsuite className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Hootsuite</h3>
              <p className="text-sm text-muted-foreground">Gestión de redes sociales</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Canva Icon */}
                <SiCanva className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Canva Pro</h3>
              <p className="text-sm text-muted-foreground">Diseño gráfico profesional</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* HubSpot Icon */}
                <SiHubspot className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-semibold mb-2">HubSpot</h3>
              <p className="text-sm text-muted-foreground">CRM y automatización</p>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
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

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12">
          <p>aqui va el cta</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketingDigital;