import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const linkClasses =
    "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-surface-strong/80 transition-colors";

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto max-w-content px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={handleHomeClick} className="flex items-center gap-2" aria-label="Ir al inicio">
          <img src="/imgs/logo.png" alt="IonosHub" className="h-9 w-auto" />
        </button>

        <div className="hidden lg:flex items-center gap-1">
          <button onClick={handleHomeClick} className={linkClasses}>
            Inicio
          </button>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${linkClasses} inline-flex items-center gap-1`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute left-0 top-full pt-2 w-72"
                >
                  <div className="rounded-2xl border border-border bg-white p-2 shadow-md">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.route}
                        className="block rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-surface-soft hover:text-primary transition-colors"
                      >
                        <span className="font-semibold text-foreground">{s.shortTitle}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{s.subtitle}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/equipo" className={linkClasses}>
            Equipo
          </Link>
          <Link to="/casos-de-exito" className={linkClasses}>
            Casos de éxito
          </Link>
          <button onClick={() => scrollToSection("contacto")} className={linkClasses}>
            Contacto
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <button onClick={() => scrollToSection("contacto")} className="btn-pill-primary text-sm h-10">
            Agenda tu diagnóstico
          </button>
        </div>

        <button
          className="lg:hidden p-2 rounded-full bg-surface-strong text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-border bg-white px-4 py-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              <button onClick={handleHomeClick} className="px-4 py-3 text-left font-medium rounded-xl hover:bg-surface-soft">
                Inicio
              </button>
              <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Servicios
              </p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={s.route}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 text-sm rounded-xl hover:bg-surface-soft"
                >
                  {s.shortTitle}
                </Link>
              ))}
              <Link to="/equipo" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-medium rounded-xl hover:bg-surface-soft">
                Equipo
              </Link>
              <Link to="/casos-de-exito" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-medium rounded-xl hover:bg-surface-soft">
                Casos de éxito
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("contacto");
                }}
                className="mt-2 btn-pill-primary w-full"
              >
                Agenda tu diagnóstico
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
