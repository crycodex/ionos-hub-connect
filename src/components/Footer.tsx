import { MessageCircle, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border m-10 theme-instant">
      {/* Social Media Section */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              Conéctate con nosotros en redes sociales:
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/ionoshub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ionoshub?igsh=aW1uYXhha21rM2Rx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=593992249152&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@ionoshub?_t=ZM-90mGRMawTPP&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-2 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/imgs/logo%20remove.png" alt="IonosHub" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              De Datos a Resultados. Transformación digital con IA y Business Intelligence. 
              Especialistas en automatización, análisis de datos y estrategias digitales que generan ROI medible.
            </p>
          </div>

          {/* Navegación Principal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base">Navegación</h3>
            <div className="space-y-1 text-sm">
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

          {/* Servicios */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base">Servicios</h3>
            <div className="space-y-1 text-sm">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Agentes Virtuales
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Business Intelligence
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Marketing Digital
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Transformación Digital
              </button>
            </div>
          </div>

          {/* Recursos */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base">Recursos</h3>
            <div className="space-y-1 text-sm">
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
              <button 
                onClick={() => navigate('/terminos-y-condiciones')}
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Términos y Condiciones
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base">Contacto</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ecuador • Ibarra</span>
              </div>
              <a 
                href="mailto:info@ionoshub.net"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>info@ionoshub.net</span>
              </a>
              <a 
                href="https://wa.me/593992249152" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+593 99 224 9152</span>
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full mt-3 px-3 py-2 bg-gradient-to-r from-primary to-blue-light text-white rounded text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                onClick={() => navigate('/terminos-y-condiciones')}
                className="hover:text-primary transition-colors hover:underline"
              >
                Política de Privacidad
              </button>
              <span className="text-muted-foreground/50">•</span>
              <button 
                onClick={() => navigate('/terminos-y-condiciones')}
                className="hover:text-primary transition-colors hover:underline"
              >
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}