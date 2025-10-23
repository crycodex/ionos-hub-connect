import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20IonosHub", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Adaptive gradient background - changes with theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      
      {/* Blur effects / Glowing orbs with animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple/Pink glow - top right - Float + Pulse */}
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" 
             style={{ 
               animationDuration: '8s',
               animation: 'pulse 8s ease-in-out infinite, float 15s ease-in-out infinite'
             }} 
        />
        
        {/* Blue glow - left side - Slow Float */}
        <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/50 via-cyan-400/30 to-transparent rounded-full blur-3xl opacity-70" 
             style={{ 
               animation: 'float-reverse 20s ease-in-out infinite'
             }} 
        />
        
        {/* Orange/Red glow - bottom right - Pulse + Scale */}
        <div className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/40 via-red-500/30 to-transparent rounded-full blur-3xl opacity-50" 
             style={{ 
               animation: 'pulse 6s ease-in-out infinite 2s, scale-breath 10s ease-in-out infinite'
             }} 
        />
        
        {/* Cyan glow - center back - Rotate + Pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl opacity-40" 
             style={{ 
               animation: 'rotate-slow 30s linear infinite, pulse 12s ease-in-out infinite'
             }} 
        />
        
        {/* Additional bright accent - top left - Float + Fade */}
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/40 via-purple-400/20 to-transparent rounded-full blur-3xl opacity-50" 
             style={{ 
               animation: 'float 18s ease-in-out infinite 3s, fade-in-out 8s ease-in-out infinite'
             }} 
        />
      </div>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.03); }
          66% { transform: translate(20px, -20px) scale(0.97); }
        }
        
        @keyframes scale-breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className={`max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-foreground text-sm font-medium">Transformación Digital Inteligente</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Potenciamos
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              tu empresa con
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Business Intelligence
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4">
            Automatizaciones, agentes virtuales y estudios de mercado para lograr resultados extraordinarios y medibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-[#FF3D00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF3D00] text-white font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF3D00]/20"
            >
              <span>Contactar Ahora</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 text-foreground font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300"
            >
              <span>Ver Servicios</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
