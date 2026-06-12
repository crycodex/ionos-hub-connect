import { MessageCircle, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ":scope > div", stagger: 0.1, y: 24 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border border-border mt-20 theme-instant m-12 rounded-2xl">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/imgs/logo%20remove.png" alt="IonosHub" className="h-9 w-auto opacity-90" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              De Datos a Resultados. Transformación digital con IA y Business Intelligence. 
              Especialistas en automatización y análisis de datos.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a 
                href="https://linkedin.com/company/ionoshub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ionoshub?igsh=aW1uYXhha21rM2Rx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=593992249152&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@ionoshub?_t=ZM-90mGRMawTPP&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground text-sm tracking-widest uppercase">Navegación</h3>
            <div className="flex flex-col space-y-4 text-sm">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Quienes Somos
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Nuestro Proceso
              </button>
              <button 
                onClick={() => scrollToSection('certificaciones')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Certificaciones
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground text-sm tracking-widest uppercase">Servicios</h3>
            <div className="flex flex-col space-y-4 text-sm">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Agentes Virtuales
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Business Intelligence
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Marketing Digital
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Transformación Digital
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground text-sm tracking-widest uppercase">Contacto</h3>
            <div className="flex flex-col space-y-5 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Ecuador • Ibarra</span>
              </div>
              <a 
                href="mailto:info@ionoshub.net"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@ionoshub.net</span>
              </a>
              <a 
                href="https://wa.me/593992249152" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>+593 99 224 9152</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} IonosHub. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/politica-de-privacidad')}
              className="hover:text-foreground transition-colors"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => navigate('/terminos-y-condiciones')}
              className="hover:text-foreground transition-colors"
            >
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}