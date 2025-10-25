import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Target, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  PieChart, 
  LineChart, 
  Activity,
  CheckCircle,
  MessageCircle,
  Download,
  Eye,
  Settings,
  Globe,
  Smartphone
} from "lucide-react";
import { SiTableau } from "react-icons/si";
import { TbChartBar, TbChartLine, TbChartPie, TbWorldWww } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import BusinessIntelligenceIntegrations from "@/components/BusinessIntelligenceIntegrations";

const BusinessIntelligence = () => {
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

  const handleWhatsAppDemo = () => {
    navigate('/business-intelligence-demo');
  };

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, necesito consultoría en Business Intelligence.\n\n` +
      `🎯 Mi empresa:\n` +
      `• Industria: [Tu industria]\n` +
      `• Tamaño: [Pequeña/Mediana/Grande]\n` +
      `• Sistemas actuales: [CRM, ERP, etc.]\n\n` +
      `📈 Objetivos:\n` +
      `• Mejorar toma de decisiones\n` +
      `• Optimizar procesos operativos\n` +
      `• Aumentar rentabilidad\n\n` +
      `¿Podrían contactarme para una consultoría estratégica?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={handleVolver}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="font-semibold">Business Intelligence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Brain className="h-3 w-3 mr-1" />
                Inteligencia Empresarial Avanzada
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforma tus <span className="text-primary">datos</span> en decisiones estratégicas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dashboards ejecutivos, análisis avanzado y pronósticos que impulsan el crecimiento 
                de tu empresa con inteligencia artificial y visualización de datos en tiempo real.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+85%</span>
                </div>
                <p className="text-sm text-muted-foreground">Mejora en velocidad de decisiones</p>
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
                {/* Imagen del Dashboard */}
                <div className="relative w-full aspect-[4/3]">
                  <img 
                    src="/imgs/fotoDashboards.webp" 
                    alt="Dashboard de Business Intelligence" 
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
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
                ¿Tus datos están dispersos y no sabes cómo aprovecharlos?
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-red-800 dark:text-red-200">
                    Tienes información valiosa en múltiples sistemas pero no puedes conectarla
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-red-800 dark:text-red-200">
                    Tomas decisiones basadas en intuición en lugar de datos concretos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-red-800 dark:text-red-200">
                    Pierdes oportunidades porque no anticipas tendencias del mercado
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-500 mb-2">73%</div>
              <p className="text-red-800 dark:text-red-200 font-semibold">
                de empresas no aprovechan sus datos para decisiones estratégicas
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nuestra Solución</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creamos un ecosistema de Business Intelligence que conecta todos tus datos, 
            los transforma en insights accionables y te permite tomar decisiones estratégicas 
            basadas en evidencia real.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6x12 mx-auto">
          <Card className="group p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 relative overflow-hidden">
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <div className="w-12 h-12 bg-gradient-to-br from-blue-light to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <BarChart3 className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Dashboards Ejecutivos</h3>
            <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
              Visualización en tiempo real de KPIs críticos con alertas inteligentes y 
              métricas personalizadas para cada nivel de tu organización.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Métricas en tiempo real
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Alertas automáticas
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Personalización total
              </li>
            </ul>
          </Card>
          
          <Card className="group p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 relative overflow-hidden">
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Brain className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Análisis Predictivo</h3>
            <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
              IA avanzada que analiza patrones históricos para predecir tendencias, 
              identificar oportunidades y prevenir riesgos antes de que impacten tu negocio.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Pronósticos de demanda
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Detección de anomalías
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Optimización automática
              </li>
            </ul>
          </Card>
          
          <Card className="group p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 relative overflow-hidden">
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Database className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Integración Total</h3>
            <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
              Conectamos todos tus sistemas (CRM, ERP, redes sociales, e-commerce) 
              en una plataforma unificada para una visión 360° de tu empresa.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                APIs nativas
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Sincronización automática
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Data warehouse
              </li>
            </ul>
          </Card>

          <Card className="group p-6 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-950/20 relative overflow-hidden">
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Activity className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Reportes Automatizados</h3>
            <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
              Generación automática de informes ejecutivos, alertas inteligentes 
              y análisis comparativos que llegan directamente a tu bandeja de entrada.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Programación flexible
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Múltiples formatos
              </li>
              <li className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />
                Distribución automática
              </li>
            </ul>
          </Card>

        </div>

        {/* Dashboards Interactivos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Dashboards Interactivos en Vivo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestros dashboards de Business Intelligence en tiempo real. 
              Haz clic en cualquier imagen para acceder al reporte completo de Power BI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reporte de Incidencias */}
            <div className="group cursor-pointer" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiNmFhNjhiZDMtZmIzZS00MTQ1LWFkZjgtYTVjMjg3ZWVkOTk2IiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <Card className="overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-red-50/30 dark:from-gray-900 dark:to-red-950/20 relative">
                <div className="relative">
                  <img 
                    src="/imgs/dashboards/reporteIncidencias/image.png" 
                    alt="Dashboard de Reporte de Incidencias" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <Activity className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">Reporte de Incidencias</span>
                    </div>
                    <p className="text-white/90 text-sm">Análisis en tiempo real de incidencias y métricas operativas</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      Dashboard de Incidencias
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-red-500 transition-colors duration-300">
                      <span>Power BI</span>
                      <BarChart3 className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Monitoreo en tiempo real de incidencias, tiempos de respuesta y métricas de rendimiento operativo.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
                    <span>Haz clic para explorar</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Reporte de Recursos */}
            <div className="group cursor-pointer" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiNWE3OGY0YzEtNTJlNC00NzBlLTkwNzctZTIyMTcyMWM3MTMzIiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <Card className="overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 relative">
                <div className="relative">
                  <img 
                    src="/imgs/dashboards/reporteRecursos/image.png" 
                    alt="Dashboard de Reporte de Recursos" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">Reporte de Recursos</span>
                    </div>
                    <p className="text-white/90 text-sm">Gestión y análisis de recursos empresariales</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      Dashboard de Recursos
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-green-500 transition-colors duration-300">
                      <span>Power BI</span>
                      <BarChart3 className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Análisis completo de recursos humanos, materiales y financieros con métricas de eficiencia.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                    <span>Haz clic para explorar</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Reporte de Ventas */}
            <div className="group cursor-pointer" onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiYmJlNDNkNGUtMWI3Ny00MjMyLWI1ZmUtOWQ1NWJkZjYzNGRlIiwidCI6IjhkYmUxNDY5LWM3OWMtNGUyMS05ZDQzLWNhNjVkOWU5YzQ3NSIsImMiOjR9', '_blank', 'noopener,noreferrer')}>
              <Card className="overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 relative">
                <div className="relative">
                  <img 
                    src="/imgs/dashboards/reporteventas/image.png" 
                    alt="Dashboard de Reporte de Ventas" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">Reporte de Ventas</span>
                    </div>
                    <p className="text-white/90 text-sm">Análisis de rendimiento comercial y métricas de ventas</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Dashboard de Ventas
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-blue-500 transition-colors duration-300">
                      <span>Power BI</span>
                      <BarChart3 className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Visualización de KPIs de ventas, análisis de tendencias y pronósticos de rendimiento comercial.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    <span>Haz clic para explorar</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-light/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Metodología probada para implementar Business Intelligence exitosamente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold mb-4">Análisis Inicial</h3>
              <p className="text-sm text-muted-foreground">
                Evaluamos tus sistemas actuales, datos disponibles y objetivos estratégicos
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold mb-4">Diseño Personalizado</h3>
              <p className="text-sm text-muted-foreground">
                Creamos dashboards y KPIs específicos para tu industria y necesidades
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold mb-4">Implementación</h3>
              <p className="text-sm text-muted-foreground">
                Integramos todos tus sistemas y configuramos la plataforma de BI
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-semibold mb-4">Capacitación</h3>
              <p className="text-sm text-muted-foreground">
                Entrenamos a tu equipo y proporcionamos soporte continuo
              </p>
            </div>
          </div>
        </div>

        {/* CTA - Integraciones */}
        <div className="mb-16">
          <BusinessIntelligenceIntegrations />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
