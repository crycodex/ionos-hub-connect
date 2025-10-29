import { MessageCircle, ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function CTA() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20las%20soluciones%20de%20IonosHub", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgs/cta.jpg')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-transparent backdrop-blur-md">
            <div className="relative p-8 md:p-12 text-center space-y-8">
              <div className="space-y-4 animate-fade-in-up">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Transformamos Información en{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                    Crecimiento Medible
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conectamos datos, voz y seguridad para que tu empresa tome mejores decisiones 
                  y entregue experiencias confiables
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white shadow-lg hover:shadow-md transition-all duration-500 text-base px-8 py-6 rounded-xl animate-glow"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Agenda una Consultoría Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Contact info */}
              <div className="grid md:grid-cols-2 gap-6 pt-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@ionoshub.net</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ecuador • Ibarra</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
