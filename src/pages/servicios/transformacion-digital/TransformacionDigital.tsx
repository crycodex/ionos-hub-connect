import {
  ArrowLeft, Rocket, Settings, Users, Zap, Clock, Shield, Brain, Database,
  MessageCircle, FileText, Eye, CheckCircle, X, TrendingUp, Award, Target,
  Building, Smartphone, Laptop, Monitor, Headphones, Briefcase, GraduationCap,
  Heart, Car, Home, Coffee, Camera, Music, Gamepad2, ShoppingCart, Globe,
  Layers, PieChart, BarChart, Filter, Download, Play, ArrowRight, Star,
  Cpu, Server, Cloud, Wifi, Lock, RefreshCw, Activity, Workflow, Bot,
  BookOpen, GraduationCap as Cap, Users2, Calendar, DollarSign, Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";

const TransformacionDigital = () => {
  const navigate = useNavigate();

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa una consultoría de transformación digital.\n\n` +
      `Necesito:\n` +
      `• Asesoría tecnológica para modernización\n` +
      `• Capacitación especializada para mi equipo\n` +
      `• Automatización de procesos sin interrumpir operaciones\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCapacitacion = () => {
    const message = encodeURIComponent(
      `Hola, me interesa conocer más sobre sus programas de capacitación especializada.\n\n` +
      `Me gustaría:\n` +
      `• Capacitar a mi equipo en nuevas tecnologías\n` +
      `• Certificaciones en herramientas digitales\n` +
      `• Formación continua sin interrumpir operaciones\n\n` +
      `¿Podrían enviarme información detallada?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppAutomatizacion = () => {
    const message = encodeURIComponent(
      `Hola, me interesa automatizar procesos en mi empresa.\n\n` +
      `Objetivos:\n` +
      `• Reducir tiempos operativos\n` +
      `• Eliminar tareas repetitivas\n` +
      `• Implementar RPA sin detener operaciones\n\n` +
      `¿Podríamos discutir un plan de automatización?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCasos = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver casos de éxito de transformación digital.\n\n` +
      `Me gustaría conocer:\n` +
      `• Casos de automatización exitosos\n` +
      `• Resultados de capacitación\n` +
      `• Modernización sin interrupciones\n\n` +
      `¿Podrían compartir algunos ejemplos?`
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
          <h1 className="text-3xl font-bold">Transformación Digital</h1>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 overflow-x-hidden">
            <Badge variant="secondary" className="w-max">Transformación Sin Interrupciones</Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Modernización inteligente que mantiene tu operación funcionando
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Asesorías tecnológicas, capacitaciones especializadas y consultorías para automatización
              de procesos y modernización sin detener tu operación actual.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
              <Card className="p-4 text-center h-full flex flex-col justify-center overflow-hidden">
                <div className="text-2xl font-bold text-primary mb-1 truncate">24/7</div>
                <div className="text-xs text-muted-foreground break-words">Operación continua durante la modernización</div>
              </Card>
              <Card className="p-4 text-center h-full flex flex-col justify-center overflow-hidden">
                <div className="text-2xl font-bold text-primary mb-1 truncate">RPA</div>
                <div className="text-xs text-muted-foreground break-words">Avances por módulos, sin afectar el día a día</div>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsAppCapacitacion}>
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Capacitaciones
              </Button>
            </div>
          </div>

          <div className="relative max-w-xl mx-auto w-full">
            {/* Elimina el espacio superior antiestético adaptando el diseño de la imagen */}
            <div className="relative rounded-2xl border border-border/50 overflow-hidden shadow-xl bg-card p-0">
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <img 
                  src="/imgs/adanRobot.png" 
                  alt="Robot Adán - Transformación Digital" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '1rem' }}
                />
                {/* Brillo azul inferior mínimo, no invadir arriba */}
                <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-blue-500/30 via-blue-400/15 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Problema Statement */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="destructive" className="mb-4">El Problema</Badge>
            <h3 className="text-3xl font-bold mb-3">Modernización tradicional = Caos operativo</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              El 78% de las transformaciones digitales fallan porque interrumpen las operaciones críticas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-xl font-semibold text-red-800 dark:text-red-200">Transformación Tradicional</h4>
              </div>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                <li>• Interrupciones prolongadas</li>
                <li>• Pérdida de productividad</li>
                <li>• Resistencia del personal</li>
                <li>• Costos imprevistos</li>
                <li>• Riesgo de falla total</li>
              </ul>
            </Card>
            <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">Nuestra Metodología</h4>
              </div>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• Operación continua garantizada</li>
                <li>• Implementación gradual</li>
                <li>• Capacitación paralela</li>
                <li>• Costos predecibles</li>
                <li>• Rollback automático</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Servicios Detallados */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Nuestros Servicios</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Tres pilares fundamentales para una transformación digital exitosa sin interrupciones.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Asesoría Tecnológica</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Auditoría tecnológica completa</li>
                <li>• Roadmap de modernización</li>
                <li>• Selección de herramientas</li>
                <li>• Arquitectura de soluciones</li>
                <li>• Migración sin interrupciones</li>
              </ul>
              <div className="text-xs text-primary font-medium">Duración: 2-4 semanas</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Capacitación Especializada</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Formación en nuevas tecnologías</li>
                <li>• Certificaciones profesionales</li>
                <li>• Workshops prácticos</li>
                <li>• Mentoring continuo</li>
                <li>• Soporte post-capacitación</li>
              </ul>
              <div className="text-xs text-primary font-medium">Modalidad: Híbrida</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Automatización RPA</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Identificación de procesos</li>
                <li>• Desarrollo de bots</li>
                <li>• Implementación gradual</li>
                <li>• Monitoreo continuo</li>
                <li>• Optimización constante</li>
              </ul>
              <div className="text-xs text-primary font-medium">ROI: 3-6 meses</div>
            </Card>
          </div>
        </div>

        {/* Proceso de Transformación */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Nuestro Proceso</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Metodología probada para transformación sin interrupciones en 6 fases.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 1</h4>
              <h5 className="text-xs font-medium mb-2">Auditoría</h5>
              <p className="text-xs text-muted-foreground">Análisis del estado actual</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 2</h4>
              <h5 className="text-xs font-medium mb-2">Estrategia</h5>
              <p className="text-xs text-muted-foreground">Roadmap personalizado</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 3</h4>
              <h5 className="text-xs font-medium mb-2">Capacitación</h5>
              <p className="text-xs text-muted-foreground">Formación del equipo</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 4</h4>
              <h5 className="text-xs font-medium mb-2">Automatización</h5>
              <p className="text-xs text-muted-foreground">Implementación RPA</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 5</h4>
              <h5 className="text-xs font-medium mb-2">Migración</h5>
              <p className="text-xs text-muted-foreground">Transición gradual</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 6</h4>
              <h5 className="text-xs font-medium mb-2">Optimización</h5>
              <p className="text-xs text-muted-foreground">Monitoreo continuo</p>
            </Card>
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

export default TransformacionDigital;
