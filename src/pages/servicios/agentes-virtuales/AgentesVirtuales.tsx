import { ArrowLeft, Bot, Clock, MessageCircle, Users, CheckCircle, Zap, Shield, BarChart3, Phone, Calendar, Headphones, Globe, Brain } from "lucide-react";
import { FaWhatsapp, FaMailchimp, FaSlack, FaGoogle, FaShopify, FaMicrosoft } from "react-icons/fa";
import { SiZapier, SiHubspot, SiSalesforce } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

// Componente placeholder para futuras implementaciones
const MetricsChart = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
            <Bot className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">95%</h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Satisfacción del cliente</p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg>
            +30%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-4">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Tiempo respuesta:</dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">2 seg</dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Reducción costos:</dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">70%</dd>
        </dl>
      </div>

      {/* Espacio reservado para futuras implementaciones */}
      <div className="h-64 w-full bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Espacio reservado para futuras métricas</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Últimos 6 meses
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Satisfacción</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Reducción Costos</span>
          </div>
        </div>
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



        {/* CTA Final - Estilo Referencia */}
        <div className="bg-background border border-border rounded-2xl p-12 mb-16 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenido de texto */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Transforma tu negocio
                  <br />
                  <span className="text-primary">con IA</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  Agentes virtuales inteligentes que se integran perfectamente con tus herramientas actuales y más de 50 empresas ya confían en nosotros.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold"
                    onClick={handleWhatsAppDemo}
                  >
                    Solicitar demo
                  </Button>
                </div>
              </div>

              {/* Tarjetas de integraciones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* WhatsApp */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mb-3 flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Integración directa</div>
                </div>

                {/* Salesforce */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3 flex items-center justify-center">
                    <SiSalesforce className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">Salesforce</div>
                  <div className="text-xs text-muted-foreground">CRM completo</div>
                </div>

                {/* Zapier */}
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg mb-3 flex items-center justify-center">
                    <SiZapier className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">Zapier</div>
                  <div className="text-xs text-muted-foreground">Automatización</div>
                </div>

                {/* Mailchimp */}
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3 flex items-center justify-center">
                    <FaMailchimp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">Mailchimp</div>
                  <div className="text-xs text-muted-foreground">Email marketing</div>
                </div>

                {/* Google */}
                <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-red-500 rounded-lg mb-3 flex items-center justify-center">
                    <FaGoogle className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">Google</div>
                  <div className="text-xs text-muted-foreground">Analytics & Ads</div>
                </div>

                {/* Slack */}
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg mb-3 flex items-center justify-center">
                    <FaSlack className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">Slack</div>
                  <div className="text-xs text-muted-foreground">Comunicación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgentesVirtuales;
