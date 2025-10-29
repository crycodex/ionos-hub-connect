import { useEffect, useState } from 'react';

interface UseScrollGlassOptions {
  threshold?: number;
  enabled?: boolean;
}

export function useScrollGlass(options: UseScrollGlassOptions = {}) {
  const { threshold = 50, enabled = true } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };

    // Verificar estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, enabled]);

  return isScrolled;
}
