import { 
  ArrowLeft, Shield, Lock, FileCheck, Users, MessageCircle, FileText, Eye, 
  CheckCircle, X, TrendingUp, Award, Target, Building, Smartphone, Laptop, 
  Monitor, Headphones, Briefcase, GraduationCap, Heart, Car, Home, Coffee, 
  Camera, Music, Gamepad2, ShoppingCart, Globe, Layers, PieChart, BarChart, 
  Filter, Download, Play, ArrowRight, Star, Cpu, Server, Cloud, Wifi, 
  RefreshCw, Activity, Workflow, Bot, BookOpen, GraduationCap as Cap, 
  Users2, Calendar, DollarSign, Percent, Database, Brain, Zap, AlertTriangle,
  ClipboardList, Scale, Gavel, Search, Key, EyeOff, Fingerprint, Settings,
  Clock, CheckSquare, AlertCircle, ShieldCheck, UserCheck, File,
  Database as DB, Network, HardDrive, Smartphone as Phone, Laptop as LaptopIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const EticaTratamientoDatos = () => {
  const navigate = useNavigate();

  const handleWhatsAppConsultoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa una consultoría en ética y tratamiento de datos.\n\n` +
      `Necesito:\n` +
      `• Cumplimiento con LOPD/GDPR\n` +
      `• Auditorías de seguridad\n` +
      `• Capacitación en privacidad\n` +
      `• Implementación de políticas\n\n` +
      `¿Podemos agendar una consultoría gratuita?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppAuditoria = () => {
    const message = encodeURIComponent(
      `Hola, me interesa realizar una auditoría de seguridad y cumplimiento de datos.\n\n` +
      `Objetivos:\n` +
      `• Evaluar cumplimiento LOPD/GDPR\n` +
      `• Identificar vulnerabilidades\n` +
      `• Implementar mejoras de seguridad\n` +
      `• Capacitar al equipo\n\n` +
      `¿Podríamos discutir el alcance?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCapacitacion = () => {
    const message = encodeURIComponent(
      `Hola, me interesa capacitar a mi equipo en ética y tratamiento de datos.\n\n` +
      `Necesito:\n` +
      `• Formación en LOPD/GDPR\n` +
      `• Mejores prácticas de privacidad\n` +
      `• Certificaciones profesionales\n` +
      `• Políticas internas\n\n` +
      `¿Podrían enviarme información sobre los programas?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCasos = () => {
    const message = encodeURIComponent(
      `Hola, me interesa ver casos de éxito en implementación de ética y tratamiento de datos.\n\n` +
      `Me gustaría conocer:\n` +
      `• Casos de cumplimiento LOPD\n` +
      `• Auditorías exitosas\n` +
      `• Capacitaciones implementadas\n` +
      `• Resultados de seguridad\n\n` +
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
          <h1 className="text-3xl font-bold">Ética y Tratamiento de Datos</h1>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-max">Cumplimiento Garantizado</Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Protección de datos y ética empresarial que genera confianza
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Garantizamos cumplimiento total con LOPD/GDPR, implementando las mejores prácticas 
              de seguridad, privacidad y ética empresarial para proteger tu reputación y datos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Cumplimiento LOPD</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">0</div>
                <div className="text-xs text-muted-foreground">Multas recibidas</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">+50</div>
                <div className="text-xs text-muted-foreground">Empresas protegidas</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Monitoreo activo</div>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsAppAuditoria}>
                <Shield className="mr-2 h-5 w-5" />
                Solicitar Auditoría
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-blue-light/15 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl border-2 border-primary/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Cumplimiento normativo</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <FileCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Auditorías Regulares</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Capacitación GDPR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problema Statement */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="destructive" className="mb-4">El Riesgo</Badge>
            <h3 className="text-3xl font-bold mb-3">Incumplimiento = Multas millonarias y pérdida de confianza</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Las multas por incumplimiento de LOPD/GDPR pueden llegar hasta el 4% de la facturación anual o 20M€.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-xl font-semibold text-red-800 dark:text-red-200">Sin Cumplimiento</h4>
              </div>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                <li>• Multas hasta 20M€ o 4% facturación</li>
                <li>• Pérdida de confianza del cliente</li>
                <li>• Daño reputacional irreversible</li>
                <li>• Procesos legales costosos</li>
                <li>• Pérdida de competitividad</li>
              </ul>
            </Card>
            <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">Con Nuestro Servicio</h4>
              </div>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• Cumplimiento 100% garantizado</li>
                <li>• Confianza y reputación sólida</li>
                <li>• Ventaja competitiva</li>
                <li>• Protección legal completa</li>
                <li>• Certificaciones reconocidas</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Servicios Detallados */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Nuestros Servicios</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales para cumplimiento normativo y protección de datos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Cumplimiento LOPD/GDPR</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Auditoría de cumplimiento completa</li>
                <li>• Implementación de políticas</li>
                <li>• Registro de actividades de tratamiento</li>
                <li>• Evaluaciones de impacto (DPIA)</li>
                <li>• Delegado de protección de datos</li>
              </ul>
              <div className="text-xs text-primary font-medium">Garantía: 100%</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Auditorías de Seguridad</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Evaluación de vulnerabilidades</li>
                <li>• Análisis de riesgos</li>
                <li>• Test de penetración</li>
                <li>• Revisión de controles técnicos</li>
                <li>• Plan de mejora continua</li>
              </ul>
              <div className="text-xs text-primary font-medium">Frecuencia: Trimestral</div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold">Capacitación en Privacidad</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Formación en LOPD/GDPR</li>
                <li>• Certificaciones profesionales</li>
                <li>• Simulacros de brechas</li>
                <li>• Políticas internas</li>
                <li>• Cultura de privacidad</li>
              </ul>
              <div className="text-xs text-primary font-medium">Modalidad: Híbrida</div>
            </Card>
          </div>
        </div>

        {/* Marco Normativo */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Marco Normativo</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Cumplimos con todas las regulaciones nacionales e internacionales de protección de datos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center hover:shadow-md transition-shadow">
              <Gavel className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">LOPD</h4>
              <p className="text-sm text-muted-foreground">Ley Orgánica 15/1999</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-md transition-shadow">
              <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">GDPR</h4>
              <p className="text-sm text-muted-foreground">Reglamento UE 2016/679</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-md transition-shadow">
              <File className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">LOPDGDD</h4>
              <p className="text-sm text-muted-foreground">Ley Orgánica 3/2018</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground">Gestión de Seguridad</p>
            </Card>
          </div>
        </div>

        {/* Proceso de Implementación */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Nuestro Proceso</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Metodología probada para implementación de cumplimiento en 5 fases.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 1</h4>
              <h5 className="text-xs font-medium mb-2">Auditoría</h5>
              <p className="text-xs text-muted-foreground">Análisis del estado actual</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 2</h4>
              <h5 className="text-xs font-medium mb-2">Planificación</h5>
              <p className="text-xs text-muted-foreground">Roadmap de cumplimiento</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 3</h4>
              <h5 className="text-xs font-medium mb-2">Implementación</h5>
              <p className="text-xs text-muted-foreground">Políticas y controles</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 4</h4>
              <h5 className="text-xs font-medium mb-2">Capacitación</h5>
              <p className="text-xs text-muted-foreground">Formación del equipo</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1">Fase 5</h4>
              <h5 className="text-xs font-medium mb-2">Monitoreo</h5>
              <p className="text-xs text-muted-foreground">Seguimiento continuo</p>
            </Card>
          </div>
        </div>

        {/* Industrias */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Industrias Protegidas</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Experiencia comprobada en sectores con alta sensibilidad de datos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Salud</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Financiero</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Educación</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">E-commerce</div>
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
              <Car className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Automotriz</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">F&B</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Media</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Servicios</div>
            </Card>
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Music className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Entretenimiento</div>
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
              Implementaciones exitosas que garantizaron cumplimiento y protección.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Hospital Privado</h4>
                  <p className="text-sm text-muted-foreground">Cumplimiento LOPD en salud</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Cumplimiento:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Multas evitadas:</span>
                  <span className="font-semibold">€2.5M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tiempo implementación:</span>
                  <span className="font-semibold">3 meses</span>
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
                  <h4 className="font-semibold">Banco Digital</h4>
                  <p className="text-sm text-muted-foreground">GDPR en sector financiero</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Certificación:</span>
                  <span className="font-semibold text-blue-600">ISO 27001</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Capacitación:</span>
                  <span className="font-semibold">100% personal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Auditorías:</span>
                  <span className="font-semibold">0 incidencias</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleWhatsAppCasos}>
                Ver Detalles
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">E-commerce Retail</h4>
                  <p className="text-sm text-muted-foreground">Protección de datos clientes</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Confianza cliente:</span>
                  <span className="font-semibold text-purple-600">+35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Brechas evitadas:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Satisfacción:</span>
                  <span className="font-semibold">98%</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleWhatsAppCasos}>
                Ver Detalles
              </Button>
            </Card>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Certificaciones y Acreditaciones</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Reconocimientos oficiales que avalan nuestra experiencia en protección de datos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground mb-3">Gestión de Seguridad de la Información</p>
              <div className="text-xs text-primary font-medium">Certificado</div>
            </Card>
            <Card className="p-6 text-center">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">GDPR Certified</h4>
              <p className="text-sm text-muted-foreground mb-3">Especialista en Reglamento General</p>
              <div className="text-xs text-primary font-medium">Certificado</div>
            </Card>
            <Card className="p-6 text-center">
              <UserCheck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">DPO Certified</h4>
              <p className="text-sm text-muted-foreground mb-3">Delegado de Protección de Datos</p>
              <div className="text-xs text-primary font-medium">Certificado</div>
            </Card>
            <Card className="p-6 text-center">
              <File className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">LOPD Expert</h4>
              <p className="text-sm text-muted-foreground mb-3">Experto en Ley Orgánica</p>
              <div className="text-xs text-primary font-medium">Certificado</div>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para proteger tu empresa?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubramos cómo garantizar el cumplimiento total de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppConsultoria}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultoría Gratuita
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppAuditoria}>
              <Shield className="mr-2 h-5 w-5" />
              Solicitar Auditoría
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppCapacitacion}>
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Capacitaciones
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EticaTratamientoDatos;
