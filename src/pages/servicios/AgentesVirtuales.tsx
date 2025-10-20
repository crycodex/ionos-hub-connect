import { ArrowLeft, Bot, Clock, MessageCircle, Users, CheckCircle, Zap, Shield, BarChart3, Phone, Calendar, Headphones, Globe, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

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
              <Button size="lg" variant="outline" onClick={handleROICalculator}>
                <BarChart3 className="mr-2 h-5 w-5" />
                Ver ROI Calculator
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl border-2 border-primary/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">-70%</div>
                  <p className="text-muted-foreground">Reducción en costos operativos</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-sm">Respuesta 2 seg</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-sm">15+ Idiomas</div>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-accent mb-1">95%</div>
                  <p className="text-sm text-muted-foreground">Satisfacción del cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 group hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-light p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Agendamiento Inteligente</h3>
            <p className="text-muted-foreground mb-4">
              Sistema automático de reservas que se integra con Google Calendar, Outlook y tu CRM. 
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
          
          <Card className="p-6 group hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-light to-primary p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Headphones className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Soporte Técnico Avanzado</h3>
            <p className="text-muted-foreground mb-4">
              Resolución automática del 80% de consultas técnicas. Escalamiento inteligente a especialistas 
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Análisis de Conversaciones</h3>
            <p className="text-muted-foreground mb-4">
              Reportes detallados sobre interacciones, satisfacción del cliente y tendencias. 
              Insights accionables para mejorar continuamente el servicio.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Métricas en tiempo real
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Análisis de sentimientos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Dashboards ejecutivos
              </li>
            </ul>
          </Card>
        </div>

        {/* Tecnología y Capacidades */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnología de <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">Vanguardia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestros agentes virtuales utilizan las últimas tecnologías en IA, procesamiento de lenguaje natural 
              y machine learning para ofrecer experiencias conversacionales excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-light p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">IA Conversacional</h3>
              <p className="text-sm text-muted-foreground">
                Procesamiento de lenguaje natural avanzado con comprensión contextual y aprendizaje continuo.
              </p>
            </Card>

            <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-light to-primary p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Respuesta Instantánea</h3>
              <p className="text-sm text-muted-foreground">
                Latencia menor a 2 segundos con escalabilidad automática para manejar picos de tráfico.
              </p>
            </Card>

            <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seguridad Enterprise</h3>
              <p className="text-sm text-muted-foreground">
                Encriptación end-to-end, cumplimiento GDPR y auditorías de seguridad regulares.
              </p>
            </Card>

            <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-muted-foreground p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Canal</h3>
              <p className="text-sm text-muted-foreground">
                WhatsApp, Telegram, web chat, voz y email. Experiencia unificada en todos los canales.
              </p>
            </Card>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casos de <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">Éxito</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empresas líderes ya confían en nuestros agentes virtuales para transformar su atención al cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-light/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 p-3">
                  <Users className="w-full h-full text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Clínica Médica</h3>
                  <p className="text-sm text-muted-foreground">Sector Salud</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Agente virtual que maneja 500+ citas diarias, reduce tiempo de espera en 60% 
                y mejora la satisfacción del paciente.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-primary font-semibold">+60% eficiencia</span>
                <span className="text-muted-foreground">ROI: 340%</span>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-light/5 to-primary/5 border-blue-light/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-light/10 p-3">
                  <MessageCircle className="w-full h-full text-blue-light" />
                </div>
                <div>
                  <h3 className="font-semibold">E-commerce</h3>
                  <p className="text-sm text-muted-foreground">Retail Online</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Soporte 24/7 que resuelve 85% de consultas automáticamente, 
                aumenta conversiones en 25% y reduce costos operativos.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-blue-light font-semibold">+25% ventas</span>
                <span className="text-muted-foreground">ROI: 280%</span>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-orange-500/5 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 p-3">
                  <Calendar className="w-full h-full text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Servicios Financieros</h3>
                  <p className="text-sm text-muted-foreground">Banca</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Agente que procesa consultas bancarias complejas, cumple regulaciones 
                financieras y mantiene 99.9% de disponibilidad.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-accent font-semibold">99.9% uptime</span>
                <span className="text-muted-foreground">ROI: 420%</span>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-blue-light/10 to-primary/10 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">Atención al Cliente?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a más de 50 empresas que ya optimizaron su atención al cliente con nuestros agentes virtuales inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light text-lg px-8 py-6" onClick={handleWhatsAppDemo}>
              <MessageCircle className="mr-2 h-6 w-6" />
              Solicitar Demo Personalizada
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={handleWhatsAppCall}>
              <Phone className="mr-2 h-6 w-6" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgentesVirtuales;
