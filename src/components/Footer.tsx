import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="space-y-5">
            <img src="/imgs/logo.png" alt="IonosHub" className="h-9 w-auto opacity-90" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              De datos a resultados. Ecosistemas digitales modulares para empresas en Ecuador — no servicios sueltos.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com/company/ionoshub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ionoshub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@ionoshub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="TikTok">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground">Navegación</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground w-fit">Inicio</Link>
              <button type="button" onClick={() => scrollToSection("servicios")} className="text-left text-muted-foreground hover:text-foreground w-fit">Servicios</button>
              <Link to="/equipo" className="text-muted-foreground hover:text-foreground w-fit">Equipo</Link>
              <Link to="/casos-de-exito" className="text-muted-foreground hover:text-foreground w-fit">Casos de éxito</Link>
              <button type="button" onClick={() => scrollToSection("contacto")} className="text-left text-muted-foreground hover:text-foreground w-fit">Contacto</button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground">Ecosistema</h3>
            <div className="flex flex-col gap-3 text-sm">
              {services.map((s) => (
                <Link key={s.slug} to={s.route} className="text-muted-foreground hover:text-foreground w-fit">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground">Contacto</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} IonosHub. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidad" className="hover:text-foreground">Política de privacidad</Link>
            <Link to="/terminos-y-condiciones" className="hover:text-foreground">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
