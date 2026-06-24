import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  label: string;
  type: 'scroll' | 'route';
  target: string; // id de sección o ruta
}

const navLinks: NavLink[] = [
  { label: 'Inicio', type: 'scroll', target: '' },
  { label: 'Servicios', type: 'scroll', target: 'servicios' },
  { label: 'Equipo', type: 'route', target: '/equipo' },
  { label: 'Certificaciones', type: 'scroll', target: 'certificaciones' },
  { label: 'Contacto', type: 'scroll', target: 'contacto' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    // Si no estamos en la página principal, redirigir primero
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const handleLinkClick = (link: NavLink) => {
    setIsMenuOpen(false);
    if (link.type === 'scroll') {
      if (link.target === '') {
        handleHomeClick();
      } else {
        scrollToSection(link.target);
      }
    }
  };

  const linkClasses =
    'px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0ea5e9] dark:hover:text-[#38bdf8] rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-colors';

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="mx-auto max-w-6xl rounded-full border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-black/5 px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleHomeClick} className="flex items-center gap-2" aria-label="Ir al inicio">
            <img src="/imgs/logo%20remove.png" alt="IonosHub" className="h-9 w-auto" />
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link key={link.label} to={link.target} className={linkClasses}>
                  {link.label}
                </Link>
              ) : (
                <button key={link.label} onClick={() => handleLinkClick(link)} className={linkClasses}>
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Acciones desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-5 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-medium rounded-full shadow-md transition-colors"
            >
              Hablemos
            </button>
          </div>

          {/* Botón menú móvil */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 rounded-full bg-white/50 dark:bg-white/10 text-slate-700 dark:text-slate-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl border border-white/40 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.type === 'route' ? (
                  <Link
                    key={link.label}
                    to={link.target}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-[#0ea5e9] font-medium rounded-lg hover:bg-white dark:hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link)}
                    className="px-4 py-3 text-left text-slate-700 dark:text-slate-200 hover:text-[#0ea5e9] font-medium rounded-lg hover:bg-white dark:hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('contacto');
                }}
                className="mt-2 px-4 py-3 text-center bg-[#0ea5e9] text-white font-medium rounded-xl shadow-md"
              >
                Hablemos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
