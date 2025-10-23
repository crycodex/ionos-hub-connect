import { ArrowLeft, Bot, Clock, MessageCircle, Users, CheckCircle, Zap, Shield, BarChart3, Phone, Calendar, Headphones, Globe, Brain, Settings, Database, Cpu, TestTube, Rocket } from "lucide-react";
import { FaWhatsapp, FaMailchimp, FaSlack, FaGoogle, FaShopify, FaMicrosoft } from "react-icons/fa";
import { SiZapier, SiHubspot, SiSalesforce } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ResearchIntegrations from "@/components/ResearchIntegrations";

// Componente placeholder para futuras implementaciones
const MetricsChart = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <p>aqui va foto</p>
      </div>
    </div>
  );
};

const AgentesVirtuales = () => {
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
    const message = encodeURIComponent("Hola, me interesa solicitar una demo gratuita de los Agentes Virtuales de IonosHub. Me gustaría conocer más sobre las capacidades de IA conversacional y cómo pueden optimizar la atención al cliente en mi empresa.");
    window.open(`https://wa.me/593992249152?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppROI = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre el ROI Calculator de Agentes Virtuales de IonosHub. Quisiera entender cómo calcular el retorno de inversión y los ahorros operativos que podríamos obtener.");
    window.open(`https://wa.me/593992249152?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleROICalculator = () => {
    navigate('/roi-calculator');
  };

  const handleWhatsAppCall = () => {
    const message = encodeURIComponent("Hola, me interesa hablar directamente sobre la implementación de Agentes Virtuales en mi empresa. Me gustaría programar una llamada para discutir los detalles técnicos y el proceso de implementación.");
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
          <h1 className="text-3xl font-bold">Agentes Virtuales a Medida</h1>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-light p-4">
                <Bot className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Asistentes Virtuales Inteligentes</h2>
                <p className="text-muted-foreground">Atención 24/7 automatizada</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollamos agentes virtuales inteligentes que transforman la experiencia del cliente con tecnología de vanguardia.
              Nuestros asistentes IA procesan lenguaje natural, aprenden de cada interacción y proporcionan respuestas precisas
              las 24 horas del día, reduciendo costos operativos hasta un 70% mientras mejoran la satisfacción del cliente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppDemo}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Demo Gratuita
              </Button>
              <Button size="lg" variant="outline" disabled className="opacity-50 cursor-not-allowed">
                <BarChart3 className="mr-2 h-5 w-5" />
                ROI Calculator (En Desarrollo)
              </Button>
            </div>
          </div>

          <MetricsChart />
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nuestros Agentes Virtuales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-500 p-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold">Agentes de Ventas Personalizados</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Agentes virtuales especializados en ventas entrenados con tu catálogo, precios y políticas comerciales.
                Califican leads, presentan productos y cierran ventas las 24 horas del día con técnicas de persuasión optimizadas.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Calificación automática de leads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Presentación de productos personalizada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Técnicas de cierre de ventas
                </li>
              </ul>
            </Card>
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-light to-primary p-3 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold">Soporte Técnico Avanzado</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Resolución automática de consultas técnicas. Escalamiento inteligente a especialistas
                humanos cuando es necesario, con contexto completo de la conversación.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Base de conocimiento dinámica
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Escalamiento inteligente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Diagnóstico automático
                </li>
              </ul>
            </Card>
            <Card className="p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-light p-3 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold">Agendamiento Inteligente</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Sistema automático de reservas que se integra con Google Calendar y tu CRM.
                Maneja conflictos, envía recordatorios y reprograma citas automáticamente.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Sincronización en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Recordatorios automáticos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Detección de conflictos
                </li>
              </ul>
            </Card>
          </div>
        </div>



        {/* Nuestro Proceso */}
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 px-6 md:px-16 py-14 shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nuestro Proceso de Desarrollo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodología probada para crear agentes virtuales inteligentes que transforman la experiencia del cliente
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Análisis & Configuración</h3>
                <p className="text-muted-foreground">
                  Analizamos tus procesos actuales, definimos casos de uso específicos y configuramos la arquitectura del agente virtual.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Entrenamiento IA</h3>
                <p className="text-muted-foreground">
                  Alimentamos el sistema con tu base de conocimiento, políticas y datos históricos para crear respuestas precisas y contextualizadas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Pruebas & Optimización</h3>
                <p className="text-muted-foreground">
                  Realizamos pruebas exhaustivas, refinamos las respuestas y optimizamos el procesamiento de lenguaje natural.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Implementación & Monitoreo</h3>
                <p className="text-muted-foreground">
                  Desplegamos el agente virtual y monitoreamos continuamente su rendimiento para mejoras constantes y aprendizaje automático.
                </p>
              </div>
            </div>  
          </div>
        </div>

        {/* CTA Final*/}
          <div className="mb-16">
            <ResearchIntegrations />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgentesVirtuales;
