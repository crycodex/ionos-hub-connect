import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Download, 
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  Video,
  Headphones,
  TrendingUp,
  Lightbulb,
  Shield,
  BarChart,
  MessageSquare
} from "lucide-react";

export function BlogResources() {
  const articles = [
    {
      category: "Inteligencia Artificial",
      title: "Cómo los Agentes Virtuales Están Transformando el Servicio al Cliente en 2024",
      excerpt: "Descubre las últimas tendencias en automatización de atención al cliente y cómo las empresas están logrando reducir costos en 60% mientras mejoran la satisfacción.",
      author: "Dr. María González",
      date: "15 Mayo 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["IA", "Automatización", "Customer Service"],
      icon: Lightbulb
    },
    {
      category: "Business Intelligence",
      title: "5 Dashboards Ejecutivos Que Todo CEO Debe Tener en 2024",
      excerpt: "Una guía completa sobre los dashboards más efectivos para toma de decisiones estratégicas, con ejemplos reales y mejores prácticas de implementación.",
      author: "Carlos Mendoza",
      date: "10 Mayo 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["BI", "Dashboards", "Analytics"],
      icon: BarChart
    },
    {
      category: "Ciberseguridad",
      title: "GDPR y LOPD: Guía Completa de Cumplimiento para Empresas Latinoamericanas",
      excerpt: "Todo lo que necesitas saber sobre protección de datos en 2024. Requisitos, multas, y cómo implementar un programa de privacidad efectivo paso a paso.",
      author: "Dra. Patricia Moreno",
      date: "5 Mayo 2024",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
      tags: ["GDPR", "Compliance", "Seguridad"],
      icon: Shield
    },
    {
      category: "Marketing Digital",
      title: "ROI en Marketing Digital: Cómo Medir y Optimizar Cada Dólar Invertido",
      excerpt: "Estrategias probadas para maximizar el retorno de inversión en campañas digitales, con métricas clave y herramientas de análisis recomendadas.",
      author: "Roberto Sánchez",
      date: "1 Mayo 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Marketing", "ROI", "Analytics"],
      icon: TrendingUp
    }
  ];

  const resources = [
    {
      type: "E-book",
      icon: FileText,
      title: "Guía Definitiva de Transformación Digital",
      description: "45 páginas con frameworks, checklists y casos de estudio para digitalizar tu empresa",
      size: "PDF • 8.5 MB",
      downloads: "2,400+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Webinar",
      icon: Video,
      title: "Automatización con IA: Casos Reales",
      description: "Grabación de 60 minutos con demos en vivo y sesión Q&A con expertos",
      size: "MP4 • 1080p",
      downloads: "1,850+",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "Podcast",
      icon: Headphones,
      title: "Tech Talks: El Futuro del Business Intelligence",
      description: "Serie de 8 episodios con líderes de industria y casos de implementación",
      size: "Audio • Spotify",
      downloads: "3,200+",
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Template",
      icon: Download,
      title: "Dashboard de KPIs Ejecutivos",
      description: "Plantilla editable de Excel con 25+ métricas empresariales predefinidas",
      size: "XLSX • 2 MB",
      downloads: "4,100+",
      color: "from-orange-500 to-red-500"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Implementación de Agentes Virtuales: Workshop Práctico",
      date: "25 Mayo 2024",
      time: "10:00 AM ECT",
      spots: "15 cupos disponibles"
    },
    {
      title: "Business Intelligence con Power BI: Masterclass",
      date: "1 Junio 2024",
      time: "3:00 PM ECT",
      spots: "20 cupos disponibles"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20quiero%20más%20información%20sobre%20recursos%20y%20contenido", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blog" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Conocimiento y Recursos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog y <span className="text-primary">Recursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias, guías prácticas y recursos descargables
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Últimos <span className="text-primary">Artículos</span>
            </h3>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              Ver Todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {article.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-light rounded-full flex items-center justify-center">
                        <article.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Leer más
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Recursos <span className="text-primary">Descargables</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/30"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="h-8 w-8 text-white" />
                </div>

                <Badge variant="outline" className="mb-3">
                  {resource.type}
                </Badge>

                <h4 className="font-bold text-lg mb-2 line-clamp-2">
                  {resource.title}
                </h4>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {resource.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{resource.size}</span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {resource.downloads}
                    </span>
                  </div>

                  <Button 
                    className="w-full"
                    variant="outline"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Descargar Gratis
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Próximos <span className="text-primary">Webinars</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">{webinar.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {webinar.time}
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-3">
                      {webinar.spots}
                    </Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Registrarme Gratis
                </Button>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-blue-light/10 border-2 border-primary/20">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">
                ¿Quieres recibir contenido exclusivo?
              </h4>
              <p className="text-muted-foreground mb-6">
                Únete a más de 5,000 profesionales que reciben insights, guías y recursos directamente en WhatsApp
              </p>
              <Button 
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-primary hover:bg-primary/90"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Suscribirme por WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

