import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4"
          role="dialog"
          aria-live="polite"
          aria-label="Consentimiento de cookies"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/20 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-slate-300 flex-1">
                Usamos cookies esenciales para que el sitio funcione correctamente. Con tu consentimiento, también
                usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Puedes conocer más en
                nuestra{' '}
                <Link to="/politica-de-privacidad" className="underline hover:text-white">
                  Política de Privacidad
                </Link>
                .
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm" onClick={() => saveConsent('declined')}>
                  Preferencias
                </Button>
                <Button variant="secondary" size="sm" onClick={() => saveConsent('declined')}>
                  Rechazar
                </Button>
                <Button size="sm" onClick={() => saveConsent('accepted')}>
                  Aceptar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
