import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border m-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/imgs/logo%20remove.png" alt="IonosHub" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              De Datos a Resultados. Transformación digital con IA y Business Intelligence.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              Ecuador • LATAM
            </div>
          </div>

          {/* Navegación Principal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegación</h3>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Servicios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Quienes Somos
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Nuestro Proceso
              </button>
              <button 
                onClick={() => scrollToSection('certificaciones')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Certificaciones
              </button>
            </div>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Recursos</h3>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Blog & Recursos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Contacto
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://wa.me/593992249152" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:info@ionoshub.net"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>info@ionoshub.net</span>
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary to-blue-light text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Agendar Consulta Gratis
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} IonosHub. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                Política de Privacidad
              </button>
              <span className="text-muted-foreground/50">•</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
