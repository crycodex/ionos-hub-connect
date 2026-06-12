import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealOptions {
  /** Selector de hijos a animar en stagger; si se omite, anima el contenedor completo */
  selector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

/**
 * Reveal on-scroll con GSAP ScrollTrigger. Anima una sola vez al entrar al viewport.
 * Respeta prefers-reduced-motion (el contenido queda visible sin animar).
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(opts?: GsapRevealOptions) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = opts?.selector
        ? Array.from(el.querySelectorAll(opts.selector))
        : [el];
      if (!targets.length) return;
      // Trigger individual por elemento: con un trigger único en el contenedor,
      // los elementos fuera del viewport empiezan a animar antes de ser visibles
      // y quedan congelados a media opacidad.
      targets.forEach((target, i) => {
        gsap.from(target, {
          y: opts?.y ?? 40,
          opacity: 0,
          duration: opts?.duration ?? 0.9,
          ease: "power3.out",
          delay: (i % 3) * (opts?.stagger ?? 0.12),
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
