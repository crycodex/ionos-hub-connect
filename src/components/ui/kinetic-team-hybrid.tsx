import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

/* ---------- Types ---------- */

export interface KineticTeamMember {
  id: string;
  name: string;
  role: string;
  group?: string;
  image: string;
  linkedin?: string;
}

interface KineticTeamListProps {
  title: React.ReactNode;
  eyebrow?: string;
  members: KineticTeamMember[];
}

/* ---------- Main Component ---------- */

export default function KineticTeamList({ title, eyebrow, members }: KineticTeamListProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Posición del mouse para la tarjeta flotante
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    // Offset para no tapar el texto
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  const activeMember = members.find((m) => m.id === activeId);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full cursor-default bg-background px-6 py-24 text-foreground md:px-12"
    >
      {/* Ambiente de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <h1 className="text-4xl font-light tracking-tighter text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <div className="mx-8 hidden h-px flex-1 bg-border md:block" />
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
        </motion.header>

        {/* Lista */}
        <div className="flex flex-col">
          {members.map((member, index) => (
            <TeamRow
              key={member.id}
              data={member}
              index={index}
              isActive={activeId === member.id}
              setActiveId={setActiveId}
              isMobile={isMobile}
              isAnyActive={activeId !== null}
            />
          ))}
        </div>
      </div>

      {/* SOLO DESKTOP: tarjeta flotante que sigue al cursor */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeMember && (
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-72 w-64 overflow-hidden rounded-xl border border-border bg-muted shadow-2xl"
              >
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0ea5e9]" />
                    <span className="text-[10px] uppercase tracking-widest text-white/80">
                      {activeMember.group ?? "IonosHub"}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

/* ---------- Row ---------- */

function TeamRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: KineticTeamMember;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  const openLinkedin = () => {
    if (data.linkedin) window.open(data.linkedin, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => (isMobile ? setActiveId(isActive ? null : data.id) : openLinkedin())}
      className="group relative cursor-pointer border-t border-border transition-colors duration-500 last:border-b"
    >
      <div className="relative z-10 flex flex-col py-8 md:flex-row md:items-center md:justify-between md:py-10">
        {/* Nombre e índice */}
        <div className="flex items-baseline gap-6 pl-4 transition-transform duration-500 group-hover:translate-x-4 md:gap-12 md:pl-0">
          <span className="font-mono text-xs text-muted-foreground/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-[#0ea5e9] md:text-5xl lg:text-6xl">
            {data.name}
          </h2>
        </div>

        {/* Rol e icono */}
        <div className="mt-4 flex items-center justify-between pl-12 pr-4 md:mt-0 md:justify-end md:gap-12 md:pl-0 md:pr-0">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70 transition-colors group-hover:text-muted-foreground">
            {data.role}
          </span>

          {/* Toggle móvil */}
          <div className="block text-muted-foreground md:hidden">
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>

          {/* Flecha desktop */}
          <motion.div
            animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
            className="hidden text-[#0ea5e9] md:block"
          >
            <ArrowUpRight size={28} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      {/* SOLO MÓVIL: acordeón con foto */}
      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-muted/50"
          >
            <div className="p-4">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  openLinkedin();
                }}
              >
                <img src={data.image} alt={data.name} className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {data.linkedin && (
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs uppercase tracking-widest text-white">Ver LinkedIn</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
