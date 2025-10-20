import { 
  ArrowLeft, Search, TrendingUp, Users, BarChart, Target, PieChart, Layers, Calendar,
  FileText, CheckCircle, Globe, MessageCircle, Lightbulb, Map, ClipboardCheck, Zap,
  Award, Shield, Clock, DollarSign, Eye, Brain, Database, Filter, Download, Play,
  ArrowRight, Star, Building, ShoppingCart, Smartphone, Laptop, Monitor, Headphones,
  Briefcase, GraduationCap, Heart, Car, Home, Coffee, Camera, Music, Gamepad2, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const InvestigacionMercados = () => {
  const navigate = useNavigate();

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

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa realizar un estudio de investigación de mercados.\n\n` +
      `Objetivos preliminares:\n` +
      `• Identificar oportunidades y segmentos\n` +
      `• Analizar competencia y disposición de pago\n` +
      `• Definir propuesta de valor y go-to-market\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppMetodologia = () => {
    const message = encodeURIComponent(
      `Hola, quisiera conocer la metodología y entregables de sus estudios de investigación de mercados.`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCasos = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver casos de éxito de sus estudios de investigación de mercados.\n\n` +
      `Me gustaría conocer:\n` +
      `• Casos de lanzamiento de productos\n` +
      `• Estudios de expansión geográfica\n` +
      `• Optimización de portafolio\n\n` +
      `¿Podrían compartir algunos ejemplos?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      `Hola, me interesa solicitar una demo de sus dashboards de investigación de mercados.\n\n` +
      `Me gustaría ver:\n` +
      `• Visualización de datos en tiempo real\n` +
      `• Filtros por segmento y geografía\n` +
      `• Reportes automatizados\n\n` +
      `¿Podríamos agendar una demostración?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
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
          <h1 className="text-3xl font-bold">Investigación de Mercados</h1>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-max">Estudios Especializados</Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Oportunidades reales y ventajas competitivas, basadas en datos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diseñamos y ejecutamos investigaciones a medida (cuantitativas y cualitativas) para
              reducir la incertidumbre, validar decisiones y acelerar el crecimiento.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">+95%</div>
                <div className="text-xs text-muted-foreground">Precisión de pronósticos</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">8–12 sem</div>
                <div className="text-xs text-muted-foreground">Tiempo típico de estudio</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">+30</div>
                <div className="text-xs text-muted-foreground">Industrias cubiertas</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">N=10k</div>
                <div className="text-xs text-muted-foreground">Respondentes/año</div>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsAppMetodologia}>
                <FileText className="mr-2 h-5 w-5" />
                Ver Metodología
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-blue-light/15 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl border-2 border-primary/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Precisión en pronósticos</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Análisis de Audiencia</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <BarChart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Tendencias de Mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problema Statement */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="destructive" className="mb-4">El Problema</Badge>
            <h3 className="text-3xl font-bold mb-3">Decisiones sin datos = Riesgo innecesario</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              El 73% de los lanzamientos de productos fallan porque no validan el mercado antes de invertir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-xl font-semibold text-red-800 dark:text-red-200">Sin Investigación</h4>
              </div>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                <li>• Lanzamientos ciegos al mercado</li>
                <li>• Pricing basado en intuición</li>
                <li>• Competencia desconocida</li>
                <li>• Segmentos mal definidos</li>
                <li>• ROI impredecible</li>
              </ul>
            </Card>
            <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">Con Investigación</h4>
              </div>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• Decisiones basadas en datos</li>
                <li>• Pricing optimizado</li>
                <li>• Ventajas competitivas claras</li>
                <li>• Segmentos validados</li>
                <li>• ROI predecible y mayor</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Metodologías Detalladas */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Metodologías Avanzadas</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Combinamos técnicas cuantitativas y cualitativas con tecnología de punta para insights accionables.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Cuantitativo</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Encuestas online (N representativo)</li>
                <li>• Conjoint / MaxDiff / A/B</li>
                <li>• Modelos de predicción (ARIMA, XGBoost)</li>
                <li>• Análisis de cohortes</li>
                <li>• Segmentación estadística</li>
              </ul>
              <div className="text-xs text-primary font-medium">Precisión: 95%+</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Cualitativo</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Entrevistas en profundidad</li>
                <li>• Focus groups y etnografías</li>
                <li>• Social listening, reviews y foros</li>
                <li>• Journey mapping</li>
                <li>• Jobs-to-be-done</li>
              </ul>
              <div className="text-xs text-primary font-medium">Insights profundos</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Competencia</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Benchmarking de oferta y precios</li>
                <li>• Share of Voice / Share of Market</li>
                <li>• Mapeo de posicionamiento</li>
                <li>• Análisis de gaps</li>
                <li>• Monitoreo continuo</li>
              </ul>
              <div className="text-xs text-primary font-medium">Ventaja competitiva</div>
            </Card>
          </div>
          
          {/* Herramientas y Tecnología */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">Stack Tecnológico</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">SQL/Python</div>
              </div>
              <div className="text-center">
                <BarChart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Tableau/PowerBI</div>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Machine Learning</div>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">APIs Sociales</div>
              </div>
              <div className="text-center">
                <Filter className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">SPSS/R</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Automatización</div>
              </div>
            </div>
          </div>
        </div>

        {/* Entregables */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Entregables Claros y Accionables</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Documentos ejecutivos y tableros interactivos listos para decisiones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Reporte Ejecutivo</div>
              <div className="text-sm text-muted-foreground">Insights clave y recomendaciones</div>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Dashboard Interactivo</div>
              <div className="text-sm text-muted-foreground">KPIs, filtros y comparativos</div>
            </Card>
            <Card className="p-6 text-center">
              <ClipboardCheck className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Guía Go-To-Market</div>
              <div className="text-sm text-muted-foreground">Segmentos, pricing y mensajes</div>
            </Card>
            <Card className="p-6 text-center">
              <Map className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Mapa de Oportunidades</div>
              <div className="text-sm text-muted-foreground">Prioridades por potencial</div>
            </Card>
          </div>
        </div>

        {/* Proceso de Trabajo */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Nuestro Proceso</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Metodología probada en 8-12 semanas para resultados confiables y accionables.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Semana 1-2</h4>
              <h5 className="font-medium mb-2">Definición y Diseño</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Brief y objetivos</li>
                <li>• Diseño metodológico</li>
                <li>• Cronograma detallado</li>
              </ul>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Semana 3-6</h4>
              <h5 className="font-medium mb-2">Recolección</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Encuestas y entrevistas</li>
                <li>• Focus groups</li>
                <li>• Análisis de competencia</li>
              </ul>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Semana 7-10</h4>
              <h5 className="font-medium mb-2">Análisis</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Procesamiento de datos</li>
                <li>• Modelos predictivos</li>
                <li>• Insights y hallazgos</li>
              </ul>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Semana 11-12</h4>
              <h5 className="font-medium mb-2">Entrega</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reportes ejecutivos</li>
                <li>• Dashboard interactivo</li>
                <li>• Presentación final</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Industrias */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Industrias que Atendemos</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Experiencia comprobada en más de 30 sectores con metodologías adaptadas a cada industria.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Retail</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">B2B</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Salud</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Educación</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Car className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Automotriz</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">F&B</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Tecnología</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Home className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Inmobiliaria</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Entretenimiento</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Servicios</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Music className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Media</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Gamepad2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Gaming</div>
            </Card>
          </div>
        </div>

        {/* Casos de Éxito */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Casos de Éxito</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Resultados reales de estudios que transformaron decisiones estratégicas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">E-commerce Fashion</h4>
                  <p className="text-sm text-muted-foreground">Lanzamiento de línea premium</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Disposición de pago:</span>
                  <span className="font-semibold text-green-600">+45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Segmento objetivo:</span>
                  <span className="font-semibold">25-35 años</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Precio óptimo:</span>
                  <span className="font-semibold">$89-129</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleWhatsAppCasos}>
                Ver Detalles
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">SaaS B2B</h4>
                  <p className="text-sm text-muted-foreground">Expansión a nuevos mercados</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>País prioritario:</span>
                  <span className="font-semibold text-blue-600">México</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tamaño de mercado:</span>
                  <span className="font-semibold">$2.3M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Canal principal:</span>
                  <span className="font-semibold">Digital</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleWhatsAppCasos}>
                Ver Detalles
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Telemedicina</h4>
                  <p className="text-sm text-muted-foreground">Optimización de portafolio</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Servicio estrella:</span>
                  <span className="font-semibold text-purple-600">Consultas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Precio recomendado:</span>
                  <span className="font-semibold">$25-35</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Horario óptimo:</span>
                  <span className="font-semibold">19:00-21:00</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleWhatsAppCasos}>
                Ver Detalles
              </Button>
            </Card>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Dashboard Interactivo</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Visualiza tus datos en tiempo real con filtros dinámicos y reportes automatizados.
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-muted/20 to-muted/40">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Métricas Clave</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm">Tamaño de Mercado</span>
                    <span className="font-semibold text-primary">$2.3M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm">Disposición de Pago</span>
                    <span className="font-semibold text-green-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm">Competencia Directa</span>
                    <span className="font-semibold text-orange-600">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm">Segmento Principal</span>
                    <span className="font-semibold text-blue-600">25-35 años</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Filtros Disponibles</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    <span className="text-sm">Por Demografía</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    <span className="text-sm">Por Geografía</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    <span className="text-sm">Por Comportamiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    <span className="text-sm">Por Competencia</span>
                  </div>
                </div>
                <Button className="w-full mt-4" onClick={handleWhatsAppDemo}>
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Demo en Vivo
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para descubrir oportunidades reales?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Agenda una consultoría gratuita y definamos juntos el alcance del estudio para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultoría Gratuita
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppMetodologia}>
              <FileText className="mr-2 h-5 w-5" />
              Ver Metodología
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppDemo}>
              <Eye className="mr-2 h-5 w-5" />
              Demo Dashboard
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestigacionMercados;
