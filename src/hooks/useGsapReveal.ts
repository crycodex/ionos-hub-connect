import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface GsapRevealOptions {
  /** Selector de hijos a animar; si se omite, anima el contenedor completo */
  selector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

/**
 * Reveal on-scroll con GSAP + IntersectionObserver. Anima una sola vez al
 * entrar al viewport. Se usa IntersectionObserver en lugar de ScrollTrigger
 * porque evalúa la visibilidad real en vivo: los triggers por posición de
 * scroll quedan desfasados cuando imágenes/iframes cargan tarde y desplazan
 * el layout, dejando secciones (p. ej. el footer) invisibles.
 * Respeta prefers-reduced-motion (el contenido queda visible sin animar).
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(opts?: GsapRevealOptions) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = opts?.selector
      ? Array.from(el.querySelectorAll<HTMLElement>(opts.selector))
      : [el];
    if (!targets.length) return;

    const y = opts?.y ?? 40;
    const duration = opts?.duration ?? 0.9;
    const stagger = opts?.stagger ?? 0.12;

    // Estado inicial oculto
    gsap.set(targets, { y, opacity: 0 });

    const pending = new Set(targets);
    const io = new IntersectionObserver(
      (entries) => {
        // Los elementos que entran juntos al viewport se escalonan entre sí
        const entering = entries.filter((e) => e.isIntersecting);
        entering.forEach((entry, i) => {
          io.unobserve(entry.target);
          pending.delete(entry.target as HTMLElement);
          gsap.to(entry.target, {
            y: 0,
            opacity: 1,
            duration,
            ease: "power3.out",
            delay: i * stagger,
          });
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    targets.forEach((t) => io.observe(t));

    return () => {
      io.disconnect();
      // Restaurar estado visible y matar tweens en curso
      pending.forEach((t) => gsap.set(t, { clearProps: "all" }));
      gsap.killTweensOf(targets);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
