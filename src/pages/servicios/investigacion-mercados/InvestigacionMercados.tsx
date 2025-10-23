import {
  ArrowLeft, Users, BarChart, Target, PieChart, Layers, Calendar,
  FileText, CheckCircle, MessageCircle, Map, ClipboardCheck, Brain,
  Building, ShoppingCart, Smartphone, Laptop, Monitor, Headphones,
  Briefcase, GraduationCap, Heart, Car, Home, Coffee, Camera, Music, Gamepad2, Shield
} from "lucide-react";
import { SiPython, SiMysql, SiTableau, SiTensorflow, SiPytorch, SiScikitlearn, SiR, SiJupyter, SiPandas, SiNumpy, SiScipy, SiPostgresql, SiMongodb } from "react-icons/si";
import { FaDatabase, FaGlobe, FaBolt, FaMicrosoft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const InvestigacionMercados = () => {
  const navigate = useNavigate();



  // Datos de tecnologías para el stack tecnológico
  const tecnologias = [
    { icon: SiPython, name: "Python", color: "text-blue-500", url: "https://www.python.org/" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600", url: "https://www.mysql.com/" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700", url: "https://www.postgresql.org/" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600", url: "https://www.mongodb.com/" },
    { icon: SiTableau, name: "Tableau", color: "text-orange-500", url: "https://www.tableau.com/" },
    { icon: FaMicrosoft, name: "Power BI", color: "text-yellow-500", url: "https://powerbi.microsoft.com/" },
    { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-600", url: "https://www.tensorflow.org/" },
    { icon: SiPytorch, name: "PyTorch", color: "text-red-600", url: "https://pytorch.org/" },
    { icon: SiScikitlearn, name: "Scikit-learn", color: "text-orange-500", url: "https://scikit-learn.org/" },
    { icon: SiR, name: "R Language", color: "text-blue-600", url: "https://www.r-project.org/" },
    { icon: FaDatabase, name: "SPSS", color: "text-red-500", url: "https://www.ibm.com/products/spss-statistics" },
    { icon: SiJupyter, name: "Jupyter", color: "text-orange-500", url: "https://jupyter.org/" },
    { icon: SiPandas, name: "Pandas", color: "text-blue-500", url: "https://pandas.pydata.org/" },
    { icon: SiNumpy, name: "NumPy", color: "text-blue-600", url: "https://numpy.org/" },
    { icon: SiScipy, name: "SciPy", color: "text-blue-700", url: "https://scipy.org/" },
    { icon: FaGlobe, name: "APIs Sociales", color: "text-green-500", url: "https://developers.facebook.com/docs/marketing-api/" },
    { icon: FaBolt, name: "Automatización", color: "text-yellow-600", url: "https://zapier.com/" }
  ];

  // Datos de servicios especializados
  const serviciosEspecializados = [
    { 
      name: "Análisis de Salud de Marca", 
      description: "Evaluación integral de percepción, reputación y posicionamiento de marca en el mercado",
      metrics: "Brand Health Score",
      benefits: ["Percepción de marca", "Reputación online", "Posicionamiento competitivo", "Lealtad del cliente"]
    },
    { 
      name: "Medición de Impacto Promocional", 
      description: "Análisis de efectividad y ROI de campañas promocionales y estrategias de pricing",
      metrics: "Promotional Lift",
      benefits: ["ROI de promociones", "Efectividad de descuentos", "Impacto en ventas", "Optimización de pricing"]
    },
    { 
      name: "Evaluación de Experiencia del Cliente", 
      description: "Medición de satisfacción, lealtad y experiencia del cliente en todos los touchpoints",
      metrics: "NPS & CSAT",
      benefits: ["Satisfacción del cliente", "Net Promoter Score", "Customer Journey", "Retención y lealtad"]
    },
    { 
      name: "Validación de Viabilidad Comercial", 
      description: "Estudios de mercado para validar potencial comercial y viabilidad de nuevos productos/servicios",
      metrics: "Market Potential",
      benefits: ["Tamaño de mercado", "Disposición de pago", "Competencia", "Oportunidades de crecimiento"]
    }
  ];

  // Datos de industrias para el carrusel
  const industrias = [
    { icon: ShoppingCart, name: "Retail" },
    { icon: Building, name: "B2B" },
    { icon: Heart, name: "Salud" },
    { icon: GraduationCap, name: "Educación" },
    { icon: Car, name: "Automotriz" },
    { icon: Coffee, name: "F&B" },
    { icon: Smartphone, name: "Tecnología" },
    { icon: Home, name: "Inmobiliaria" },
    { icon: Camera, name: "Entretenimiento" },
    { icon: Briefcase, name: "Servicios" },
    { icon: Music, name: "Media" },
    { icon: Gamepad2, name: "Gaming" },
    { icon: Laptop, name: "Fintech" },
    { icon: Monitor, name: "SaaS" },
    { icon: Headphones, name: "Audio" },
    { icon: Shield, name: "Seguridad" }
  ];

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
                <div className="text-center">
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-center">ortito riko</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Especializados */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Servicios Especializados</Badge>
            <h3 className="text-3xl font-bold mb-3">Estudios Específicos para Decisiones Clave</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Investigaciones especializadas diseñadas para resolver desafíos específicos del negocio con metodologías probadas.
            </p>
          </div>
          <div className="space-y-8">
            {serviciosEspecializados.map((servicio, index) => {
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Contenido principal */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {servicio.name}
                        </h4>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {servicio.description}
                        </p>
                        <Badge variant="outline" className="text-sm w-fit">
                          {servicio.metrics}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Panel de beneficios */}
                    <div className="lg:w-80">
                      <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                        <h5 className="text-sm font-semibold text-foreground mb-4">Beneficios Clave:</h5>
                        <div className="space-y-3">
                          {servicio.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
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

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12">
          <p>aqui va el cta</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestigacionMercados;
