import { ArrowRight, MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/imgs/hero.webp" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>
      
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-light/5 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: "1s",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-light/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge con animación */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/20 to-blue-light/20 border-primary/30 hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 mr-2" />
              +50 Empresas Transformadas en 2024
            </Badge>
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src="/imgs/logo%20remove.png" 
              alt="IonosHub - De Datos a Resultados" 
              className="h-30 md:h-42 w-auto animate-scale-in hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Potenciamos el crecimiento de tu empresa con <strong className="text-foreground">Business Intelligence</strong>,
            automatizaciones, agentes virtuales y estudios de mercado para lograr
            <strong className="text-foreground"> resultados extraordinarios y medibles</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group relative bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white shadow-lg hover:shadow-2xl transition-all duration-300 text-base px-8 py-6 rounded-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="relative">Contactar Ahora</span>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-base px-8 py-6 rounded-xl"
            >
              <span>Ver Servicios</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div 
              className="space-y-2 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 cursor-default group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary group-hover:animate-bounce" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                +50
              </div>
              <div className="text-sm text-muted-foreground font-medium">Empresas Transformadas</div>
            </div>
            <div 
              className="space-y-2 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 cursor-default group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-6 w-6 text-primary group-hover:animate-pulse" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-medium">Disponibilidad</div>
            </div>
            <div 
              className="space-y-2 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 cursor-default group"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-primary group-hover:animate-spin" style={{ animationDuration: '2s' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                300%
              </div>
              <div className="text-sm text-muted-foreground font-medium">ROI Promedio</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>98% Satisfacción Cliente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>ISO 27001 Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>+5 Años Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
