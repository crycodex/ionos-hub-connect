import { useMemo } from "react";
import DottedMap from "dotted-map";
import { cn } from "@/lib/utils";

// Cyan de marca
const BRAND = "#0ea5e9";

export interface MapPin {
  lat: number;
  lng: number;
  /** Pin destacado: más grande */
  featured?: boolean;
}

// Presencia con foco en Latinoamérica (Ecuador como base) y mercados clave
const DEFAULT_PINS: MapPin[] = [
  { lat: -0.1807, lng: -78.4678, featured: true }, // Quito
  { lat: -2.1709, lng: -79.9224 }, // Guayaquil
  { lat: 4.711, lng: -74.0721 }, // Bogotá
  { lat: -12.0464, lng: -77.0428 }, // Lima
  { lat: 19.4326, lng: -99.1332 }, // CDMX
  { lat: -23.5505, lng: -46.6333 }, // São Paulo
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
  { lat: 25.7617, lng: -80.1918 }, // Miami
  { lat: 40.7128, lng: -74.006 }, // Nueva York
  { lat: 40.4168, lng: -3.7038 }, // Madrid
];

interface WorldMapProps {
  className?: string;
  pins?: MapPin[];
}

/**
 * Mapa mundial de puntos en SVG puro (sin WebGL) con pines de presencia
 * en el cyan de marca. El color base usa un gris que funciona en ambos temas.
 */
export function WorldMap({ className, pins = DEFAULT_PINS }: WorldMapProps) {
  const svg = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });

    pins.forEach((pin) => {
      map.addPin({
        lat: pin.lat,
        lng: pin.lng,
        svgOptions: { color: BRAND, radius: pin.featured ? 0.65 : 0.45 },
      });
    });

    return map.getSVG({
      radius: 0.22,
      color: "#94a3b888", // slate-400 con alpha: legible en claro y oscuro
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [pins]);

  return (
    <div
      className={cn("w-full [&>svg]:h-auto [&>svg]:w-full", className)}
      role="img"
      aria-label="Mapa de presencia regional"
      // SVG generado localmente por dotted-map, sin contenido externo
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
