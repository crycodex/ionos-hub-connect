import { ArrowLeft, Calendar, Download, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const BlogRecursos = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/');
  };

  const handleWhatsAppDownload = (resource: string) => {
    const message = encodeURIComponent(`Hola, me interesa descargar el recurso: ${resource}. Me gustaría conocer más sobre los recursos educativos de IonosHub.`);
    window.open(`https://wa.me/593992249152?text=${message}`, "_blank", "noopener,noreferrer");
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
          <h1 className="text-3xl font-bold">Blog & Recursos</h1>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conocimiento que
            <span className="text-primary"> Transforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accede a recursos exclusivos, webinars en vivo y contenido educativo 
            diseñado para acelerar tu transformación digital.
          </p>
        </div>

        {/* Recursos Descargables */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Recursos <span className="text-primary">Descargables</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Contenido de valor para impulsar tu crecimiento empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* E-book */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  E-book
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Guía Definitiva de Transformación Digital</h4>
              <p className="text-sm text-muted-foreground mb-4">
                45 páginas con frameworks, checklists y casos de estudio para digitalizar tu empresa.
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>PDF • 8.5 MB</span>
                <span>2,400+ descargas</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Guía Definitiva de Transformación Digital")}
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar Gratis
              </Button>
            </Card>

            {/* Webinar */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Webinar
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Automatización con IA: Casos Reales</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Grabación de 60 minutos con demos en vivo y sesión Q&A con expertos.
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>MP4 • 1080p</span>
                <span>1,850+ vistas</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Webinar: Automatización con IA")}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Grabación
              </Button>
            </Card>

            {/* Podcast */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Podcast
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Tech Talks: El Futuro del BI</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Serie de 8 episodios con líderes de industria y casos de implementación.
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>Audio • Spotify</span>
                <span>3,200+ escuchas</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Podcast: Tech Talks")}
              >
                <Play className="mr-2 h-4 w-4" />
                Escuchar Serie
              </Button>
            </Card>

            {/* Template */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Template
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Dashboard de KPIs Ejecutivos</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Plantilla editable de Excel con 25+ métricas empresariales predefinidas.
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>XLSX • 2 MB</span>
                <span>4,100+ descargas</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Template: Dashboard KPIs")}
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar Gratis
              </Button>
            </Card>
          </div>
        </div>

        {/* Próximos Webinars */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Próximos <span className="text-primary">Webinars</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Únete a nuestras sesiones en vivo y aprende de los expertos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Webinar 1 */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-light rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">15 de Enero, 2024</div>
                  <div className="text-xs text-muted-foreground">3:00 PM - 4:00 PM (GMT-5)</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">IA Generativa para Empresas</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Descubre cómo implementar ChatGPT y herramientas de IA generativa en tu empresa para automatizar procesos y mejorar la productividad.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span>•</span>
                <span>Casos de uso reales</span>
                <span>•</span>
                <span>Demo en vivo</span>
                <span>•</span>
                <span>Q&A</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Webinar: IA Generativa para Empresas")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Registrarse Gratis
              </Button>
            </Card>

            {/* Webinar 2 */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">22 de Enero, 2024</div>
                  <div className="text-xs text-muted-foreground">2:00 PM - 3:00 PM (GMT-5)</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Business Intelligence Avanzado</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Aprende técnicas avanzadas de BI, creación de dashboards interactivos y análisis predictivo para tomar decisiones basadas en datos.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span>•</span>
                <span>Dashboards interactivos</span>
                <span>•</span>
                <span>Análisis predictivo</span>
                <span>•</span>
                <span>Workshop práctico</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Webinar: Business Intelligence Avanzado")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Registrarse Gratis
              </Button>
            </Card>

            {/* Webinar 3 */}
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">29 de Enero, 2024</div>
                  <div className="text-xs text-muted-foreground">4:00 PM - 5:00 PM (GMT-5)</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Automatización de Procesos</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Descubre cómo automatizar procesos repetitivos con RPA, integraciones API y workflows inteligentes para optimizar tu operación.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span>•</span>
                <span>RPA y workflows</span>
                <span>•</span>
                <span>Integraciones API</span>
                <span>•</span>
                <span>ROI de automatización</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleWhatsAppDownload("Webinar: Automatización de Procesos")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Registrarse Gratis
              </Button>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-primary to-blue-light rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas Contenido Personalizado?</h3>
          <p className="text-lg mb-6 opacity-90">
            Desarrollamos recursos educativos específicos para tu industria y necesidades.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => handleWhatsAppDownload("Contenido Personalizado")}
            className="bg-white text-primary hover:bg-white/90"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Solicitar Contenido Personalizado
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogRecursos;
