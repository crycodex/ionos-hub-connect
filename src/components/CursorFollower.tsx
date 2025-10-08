import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorFollower() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = (): void => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    const animateFollower = (): void => {
      setDelayedPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const animationFrame = requestAnimationFrame(animateFollower);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [position, delayedPosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
      </div>

      {/* Delayed follower circle */}
      <div
        className="fixed pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse" />
      </div>

      {/* Outer glow circle */}
      <div
        className="fixed pointer-events-none z-[9997] transition-opacity duration-500"
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.6 : 0,
        }}
      >
        <div className="w-12 h-12 bg-primary/10 rounded-full blur-xl" />
      </div>
    </>
  );
}
