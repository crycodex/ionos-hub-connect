import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  title: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText = "Contact Me",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shouldTilt = enableTilt && (!isMobile || enableMobileTilt);

  return (
    <motion.div
      ref={ref}
      onMouseMove={shouldTilt ? handleMouseMove : undefined}
      onMouseLeave={shouldTilt ? handleMouseLeave : undefined}
      style={{
        rotateY: shouldTilt ? rotateY : 0,
        rotateX: shouldTilt ? rotateX : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full max-w-sm h-[480px] rounded-3xl overflow-hidden group",
        "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900",
        "border border-slate-300 dark:border-slate-700",
        "shadow-lg hover:shadow-2xl transition-shadow duration-300",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,255,0.2),transparent_50%)]" />
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-20" />
        {/* Grid pattern simulation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center pt-6 pb-0 text-center">
        {/* Info */}
        {showUserInfo && (
          <div className="space-y-2 z-20 px-4 flex-shrink-0" style={{ transform: "translateZ(50px)" }}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight line-clamp-1">
              {name}
            </h3>
            <p className="text-blue-600 dark:text-blue-300 font-medium text-sm uppercase tracking-wider line-clamp-1">
              {title}
            </p>
            
            {handle && (
              <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-1">@{handle}</p>
            )}

            {status && (
               <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-900/50">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 mr-1.5 animate-pulse" />
                 {status}
               </div>
            )}
          </div>
        )}

        {/* Avatar - Full Image */}
        <div className="relative mt-auto w-full  overflow-hidden flex-shrink-0" style={{ transform: "translateZ(75px)" }}>
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay at bottom for smooth blend */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-200/80 dark:from-slate-900/80 to-transparent pointer-events-none" />
          {/* Glow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        </div>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProfileCard;
