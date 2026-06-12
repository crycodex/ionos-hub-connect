import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { services } from "./services/servicesData";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
  },
};

export function Services() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Solo activar el modal flotante en dispositivos con puntero fino (desktop)
  const isFinePointer = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    []
  );

  useEffect(() => {
    if (!isFinePointer || !sectionRef.current || !modalRef.current || !cursorRef.current) return;

    const xMoveModal = gsap.quickTo(modalRef.current, "left", { duration: 0.8, ease: "power3" });
    const yMoveModal = gsap.quickTo(modalRef.current, "top", { duration: 0.8, ease: "power3" });
    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", { duration: 0.5, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", { duration: 0.5, ease: "power3" });

    const section = sectionRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      xMoveModal(x);
      yMoveModal(y);
      xMoveCursor(x);
      yMoveCursor(y);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [isFinePointer]);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border"
      onMouseLeave={() => setModal({ active: false, index: modal.index })}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24 max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            Servicios<span className="text-[#0ea5e9]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-muted-foreground font-medium leading-relaxed"
          >
            Soluciones de IA, datos y desarrollo diseñadas para automatizar, medir y
            escalar tu negocio en cada etapa.
          </motion.p>
        </div>

        {/* Lista de servicios */}
        <div className="max-w-[1200px] mx-auto group/list">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.route}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 border-t border-border py-8 md:py-12 px-2 md:px-6 last:border-b transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
              onMouseEnter={() => isFinePointer && setModal({ active: true, index })}
            >
              <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
                <span className="text-sm font-mono text-muted-foreground shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight transition-all duration-300 group-hover:translate-x-2.5 group-hover:text-[#0ea5e9]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground font-light transition-transform duration-300 group-hover:translate-x-2.5">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-muted-foreground group-hover:text-[#0ea5e9] group-hover:rotate-45 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Modal flotante + cursor (solo desktop) */}
      {isFinePointer && (
        <>
          <motion.div
            ref={modalRef}
            variants={scaleAnimation}
            initial="initial"
            animate={modal.active ? "enter" : "closed"}
            className="pointer-events-none absolute z-30 h-[230px] w-[320px] md:h-[260px] md:w-[380px] overflow-hidden rounded-2xl bg-muted shadow-2xl"
            style={{ left: 0, top: 0 }}
          >
            <div
              className="absolute h-full w-full"
              style={{ top: `${modal.index * -100}%`, transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)" }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={cursorRef}
            variants={scaleAnimation}
            initial="initial"
            animate={modal.active ? "enter" : "closed"}
            className="pointer-events-none absolute z-40 flex h-20 w-20 items-center justify-center rounded-full bg-[#0ea5e9] text-sm font-light text-white"
            style={{ left: 0, top: 0 }}
          >
            Ver
          </motion.div>
        </>
      )}
    </section>
  );
}
