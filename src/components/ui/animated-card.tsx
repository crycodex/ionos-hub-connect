import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedTiltCardProps {
  children: React.ReactNode;
  variant?: "pink" | "yellow" | "blue" | "purple" | "cyan";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  pink: "border-t-pink-500",
  yellow: "border-t-yellow-500",
  blue: "border-t-blue-500",
  purple: "border-t-purple-500",
  cyan: "border-t-[#0ea5e9]",
};

/**
 * Tarjeta con efecto tilt 3D al pasar el mouse, adaptable al tema.
 * El contenido se eleva con translateZ para dar profundidad.
 */
export const AnimatedTiltCard = ({
  children,
  variant = "cyan",
  className,
  onClick,
}: AnimatedTiltCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Posición del mouse → rotación 3D
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  // Física de resorte para el retorno suave
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full transform-gpu overflow-hidden rounded-2xl bg-card p-8 shadow-md transition-shadow duration-300 hover:shadow-2xl border border-border",
        "border-t-4",
        variantClasses[variant],
        className
      )}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};
