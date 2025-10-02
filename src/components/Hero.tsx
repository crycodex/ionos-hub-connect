import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import logo from "/imgs/icon/logo remove.png";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593999999999?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="IonosHub - De Datos a Resultados" 
              className="h-30 md:h-42 w-auto animate-scale-in"
            />
          </div>
          
         {/*  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            De Datos a{" "}
            <span className="bg-gradient-to-r from-primary via-blue-light to-primary bg-clip-text text-transparent animate-glow">
              Resultados
            </span>
          </h1> */}
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformamos tu negocio con <strong className="text-foreground">Business Intelligence</strong>, 
            automatización de WhatsApp con IA y estrategias digitales que generan 
            <strong className="text-foreground"> ROI medible</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6 rounded-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Contactar
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 hover:bg-muted transition-all duration-300 text-base px-8 py-6 rounded-xl"
            >
              Conocer Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">+100</div>
              <div className="text-sm text-muted-foreground">Empresas Transformadas</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Automatización IA</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">ROI</div>
              <div className="text-sm text-muted-foreground">Resultados Medibles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
