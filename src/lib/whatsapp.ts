export const WHATSAPP_NUMBER = "593992249152";
export const WHATSAPP_DISPLAY = "0992249152";
export const CONTACT_EMAIL = "info@ionoshub.net";

export const DEFAULT_WA_MESSAGE =
  "Hola IonosHub, quiero agendar un diagnóstico gratuito para armar mi ecosistema digital.";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string = DEFAULT_WA_MESSAGE) {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

/** Mensaje contextual según pathname */
export function waMessageForPath(pathname: string): string {
  if (pathname.includes("ionic-agente-ia") || pathname.includes("agentes-virtuales")) {
    return "Hola IonosHub, vengo de la página de IONIC — Agente de IA. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("estrategia-contenido")) {
    return "Hola IonosHub, me interesa Estrategia & Contenido Digital. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("produccion-visual")) {
    return "Hola IonosHub, me interesa Producción Visual y Audiovisual. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("pauta-publicidad") || pathname.includes("marketing-digital")) {
    return "Hola IonosHub, me interesa Pauta y Publicidad Digital. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("software-a-medida") || pathname.includes("desarrollo-web")) {
    return "Hola IonosHub, me interesa Software a Medida. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("analitica") || pathname.includes("business-intelligence")) {
    return "Hola IonosHub, me interesa Analítica y Resultados. Quiero agendar un diagnóstico.";
  }
  if (pathname.includes("casos-de-exito")) {
    return "Hola IonosHub, vi sus casos de éxito y quiero agendar un diagnóstico.";
  }
  if (pathname.includes("equipo")) {
    return "Hola IonosHub, quiero conocer más del equipo y agendar un diagnóstico.";
  }
  return DEFAULT_WA_MESSAGE;
}
