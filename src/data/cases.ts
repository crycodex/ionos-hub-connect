export interface SuccessCase {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  highlight: string;
  relatedService?: string;
}

export const successCases: SuccessCase[] = [
  {
    slug: "chipotle",
    client: "El Chipotle",
    industry: "Restaurante",
    challenge: "No tenía presencia ni visitas en internet.",
    solution: "Se levantó su presencia digital desde cero, conectada a WhatsApp.",
    result: "De 0 vistas a redirección activa de leads al canal de WhatsApp.",
    highlight: "De 0 a leads activos",
    relatedService: "pauta-publicidad-digital",
  },
  {
    slug: "zona-gamers",
    client: "Zona Gamers",
    industry: "Retail digital",
    challenge: "El administrador perdía ~5 horas revisando y clasificando archivos/juegos.",
    solution: "Automatización del proceso de clasificación.",
    result: "El proceso ahora toma ~10 minutos.",
    highlight: "De 5 h a 10 min",
    relatedService: "analitica-resultados",
  },
  {
    slug: "ecu593",
    client: "Ecu593 English",
    industry: "Educación",
    challenge: "Operaban con Excel, Word y notas de estudiantes en papel.",
    solution: "Sistema propio por roles, con reportería en línea y gestión centralizada.",
    result: "Negocio centralizado y digitalizado desde su origen.",
    highlight: "Operación 100% digital",
    relatedService: "software-a-medida",
  },
  {
    slug: "pawau",
    client: "Pawau",
    industry: "Peluquería y SPA canino",
    challenge: "Atendía ~20 personas/día; mientras atendían a uno, perdían al siguiente.",
    solution: "Agente IONIC que responde 24/7 por WhatsApp y registra citas.",
    result: "Atención continua sin perder clientes por saturación manual.",
    highlight: "Atención 24/7",
    relatedService: "ionic-agente-ia",
  },
  {
    slug: "la-victoria",
    client: 'Unidad Educativa Católica "La Victoria"',
    industry: "Educación",
    challenge: "Necesitaban gestión de redes y cobertura fotográfica profesional.",
    solution: "Equipo de marketing en redes + cobertura con cámara profesional.",
    result: "Mejor recibimiento de la comunidad de padres en redes.",
    highlight: "Comunidad más cercana",
    relatedService: "produccion-visual-audiovisual",
  },
  {
    slug: "comunidad-ia",
    client: "Comunidad de la IA (Perú)",
    industry: "Comunidad / formación",
    challenge: "Formar comunidades en plataformas digitales con contenido de calidad.",
    solution: "Talleres formativos del equipo IonosHub en la plataforma Skool.",
    result: "Talleres formativos activos y transferencia de conocimiento.",
    highlight: "Talleres activos",
    relatedService: "estrategia-contenido",
  },
];

export const homeCaseSlugs = ["chipotle", "zona-gamers", "pawau"] as const;

export function getCaseBySlug(slug: string) {
  return successCases.find((c) => c.slug === slug);
}
