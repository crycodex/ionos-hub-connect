export interface ServiceModule {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  moduleCode: string;
  problem: string;
  includes: string[];
  caseSlug?: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  waMessage: string;
}

export const services: ServiceModule[] = [
  {
    slug: "estrategia-contenido",
    route: "/servicios/estrategia-contenido",
    title: "Estrategia & Contenido Digital",
    shortTitle: "Estrategia & Contenido",
    subtitle: "Planificación, guiones y copys que alimentan tu ecosistema",
    moduleCode: "M1",
    problem:
      "Publicar sin estrategia satura el equipo y no convierte. Sin calendario, guiones ni alineación con pauta, el contenido se vuelve ruido.",
    includes: [
      "Cronograma mensual de contenidos orientado a objetivos de negocio",
      "Guiones y copys asistidos por IA, revisados por humanos",
      "Planificación pensada para alimentar pauta y el agente IONIC",
      "Alineación de mensajes con tu propuesta de valor",
    ],
    caseSlug: "la-victoria",
    faqs: [
      {
        question: "¿Necesito ya tener redes activas?",
        answer:
          "No. Partimos desde tu punto actual: si aún no tienes presencia, armamos la base; si ya publicas, ordenamos y potencializamos.",
      },
      {
        question: "¿El contenido se conecta con otros módulos?",
        answer:
          "Sí. El contenido alimenta la pauta, los leads llegan a IONIC y la analítica mide qué piezas funcionan. Ese es el Sistema LEGO.",
      },
    ],
    metaTitle: "Estrategia y Contenido Digital | IonosHub Ecuador",
    metaDescription:
      "Cronogramas, guiones y copys para empresas en Ecuador. Contenido que alimenta tu ecosistema digital, sin servicios sueltos.",
    waMessage:
      "Hola IonosHub, me interesa el módulo de Estrategia & Contenido Digital. Quiero agendar un diagnóstico.",
  },
  {
    slug: "produccion-visual-audiovisual",
    route: "/servicios/produccion-visual-audiovisual",
    title: "Producción Visual y Audiovisual",
    shortTitle: "Producción Visual",
    subtitle: "Artes, reels y cobertura que elevan tu marca",
    moduleCode: "M2+M3",
    problem:
      "Sin piezas visuales profesionales, tu marca se ve amateur y pierde atención en redes y eventos corporativos.",
    includes: [
      "Artes para redes y piezas editadas para Reels/TikTok",
      "Integración de IA generativa para visuales cuando aporta velocidad",
      "Cobertura in-situ y sesiones fotográficas",
      "Producción cinematográfica para eventos corporativos",
    ],
    caseSlug: "la-victoria",
    faqs: [
      {
        question: "¿Cubren eventos en sitio?",
        answer:
          "Sí. Incluye cobertura fotográfica y audiovisual en ubicaciones acordadas, con entrega lista para redes y archivo interno.",
      },
      {
        question: "¿Usan IA en la producción?",
        answer:
          "Cuando acelera sin perder calidad de marca. Siempre con supervisión humana y criterios visuales de IonosHub.",
      },
    ],
    metaTitle: "Producción Visual y Audiovisual | IonosHub",
    metaDescription:
      "Artes, reels, fotografía y cobertura de eventos para empresas en Ecuador. Producción visual conectada a tu ecosistema digital.",
    waMessage:
      "Hola IonosHub, me interesa Producción Visual y Audiovisual. Quiero agendar un diagnóstico.",
  },
  {
    slug: "pauta-publicidad-digital",
    route: "/servicios/pauta-publicidad-digital",
    title: "Pauta y Publicidad Digital",
    shortTitle: "Pauta Digital",
    subtitle: "Meta, TikTok y Google Ads con optimización continua",
    moduleCode: "M4",
    problem:
      "Invertir en anuncios sin estructura técnica ni optimización quema presupuesto y no genera leads calificados.",
    includes: [
      "Configuración y gestión de Meta Ads, TikTok Ads y Google Ads",
      "Estructura de campañas alineada a tus módulos de contenido",
      "Optimización continua de audiencia, creativos y presupuesto",
      "Reportes claros para decidir qué escalar",
    ],
    caseSlug: "chipotle",
    faqs: [
      {
        question: "¿Manejan el presupuesto de anuncios?",
        answer:
          "Gestionamos la estructura y optimización. El presupuesto publicitario lo define y aporta tu negocio; nosotros lo hacemos rendir.",
      },
      {
        question: "¿Se integra con el agente IONIC?",
        answer:
          "Sí. La pauta trae conversaciones; IONIC las atiende 24/7, clasifica leads y agenda. El ecosistema cierra el ciclo.",
      },
    ],
    metaTitle: "Pauta y Publicidad Digital Ecuador | IonosHub",
    metaDescription:
      "Gestión de Meta Ads, TikTok Ads y Google Ads para empresas en Ecuador. Pauta conectada a contenido, IA y resultados.",
    waMessage:
      "Hola IonosHub, me interesa Pauta y Publicidad Digital. Quiero agendar un diagnóstico.",
  },
  {
    slug: "ionic-agente-ia",
    route: "/servicios/ionic-agente-ia",
    title: "IONIC — Agente de IA 24/7",
    shortTitle: "IONIC Agente IA",
    subtitle: "Atención automática en WhatsApp y redes, sin perder leads",
    moduleCode: "M5",
    problem:
      "Cuando atiendes a un cliente, pierdes al siguiente. La atención manual no escala y los leads se enfrían fuera de horario.",
    includes: [
      "Agente de IA en WhatsApp y redes con tono de tu marca",
      "Clasificación de leads y agendamiento automático",
      "Integración con CRM y flujos de seguimiento",
      "Dashboard para ver conversaciones y resultados",
    ],
    caseSlug: "pawau",
    faqs: [
      {
        question: "¿IONIC reemplaza a mi equipo humano?",
        answer:
          "No. Atiende, califica y agenda 24/7; tu equipo se enfoca en conversaciones de alto valor y cierres.",
      },
      {
        question: "¿En qué canales funciona?",
        answer:
          "Principalmente WhatsApp y canales de redes acordados en el diagnóstico. Se configura según tu operación.",
      },
    ],
    metaTitle: "IONIC Agente de IA para WhatsApp | IonosHub Ecuador",
    metaDescription:
      "Agente de inteligencia artificial 24/7 para WhatsApp: clasifica leads, agenda citas y no pierde clientes por saturación.",
    waMessage:
      "Hola IonosHub, me interesa IONIC — Agente de IA 24/7. Quiero agendar un diagnóstico.",
  },
  {
    slug: "software-a-medida",
    route: "/servicios/software-a-medida",
    title: "Software y Automatización a Medida",
    shortTitle: "Software a Medida",
    subtitle: "Sistemas web, apps y automatizaciones que ordenan tu operación",
    moduleCode: "M6",
    problem:
      "Excel, papel y herramientas desconectadas frenan el crecimiento. Necesitas software que refleje cómo opera tu negocio.",
    includes: [
      "Sistemas web y apps móviles a medida",
      "Automatización de procesos y flujos internos",
      "Infraestructura cloud / VPS y correo profesional",
      "Integración con el resto de tu ecosistema IonosHub",
    ],
    caseSlug: "ecu593",
    faqs: [
      {
        question: "¿Desarrollan desde cero o adaptan herramientas?",
        answer:
          "Según el diagnóstico: a veces conviene software a medida; otras, automatizar e integrar lo que ya usas.",
      },
      {
        question: "¿Incluyen mantenimiento?",
        answer:
          "El alcance de soporte y evolución se define en la propuesta tras el diagnóstico. No hay packs públicos genéricos.",
      },
    ],
    metaTitle: "Software a Medida y Automatización | IonosHub Ecuador",
    metaDescription:
      "Desarrollo de sistemas web, apps y automatizaciones para digitalizar negocios en Ecuador. Del Excel al sistema propio.",
    waMessage:
      "Hola IonosHub, me interesa Software y Automatización a Medida. Quiero agendar un diagnóstico.",
  },
  {
    slug: "analitica-resultados",
    route: "/servicios/analitica-resultados",
    title: "Analítica y Resultados en Tiempo Real",
    shortTitle: "Analítica & Resultados",
    subtitle: "Dashboards e informes para decidir con datos, no con intuición",
    moduleCode: "M7",
    problem:
      "Sin reportería clara por módulo, no sabes qué funciona. Las decisiones se basan en sensación, no en KPIs.",
    includes: [
      "Dashboards en línea con KPIs por módulo del ecosistema",
      "Informes ejecutivos mensuales accionables",
      "Visibilidad de campañas, contenido, agente y operación",
      "Base para optimizar inversión y esfuerzo",
    ],
    caseSlug: "zona-gamers",
    faqs: [
      {
        question: "¿Necesito tener todos los módulos para ver analítica?",
        answer:
          "No. Medimos lo que actives. A medida que conectas más piezas, el dashboard refleja el ecosistema completo.",
      },
      {
        question: "¿Quién interpreta los datos?",
        answer:
          "Entregamos dashboards claros e informes ejecutivos. En el acompañamiento te ayudamos a priorizar acciones.",
      },
    ],
    metaTitle: "Analítica y Dashboards en Tiempo Real | IonosHub",
    metaDescription:
      "Reportería y analytics dashboard para negocios en Ecuador. KPIs por módulo y decisiones basadas en resultados reales.",
    waMessage:
      "Hola IonosHub, me interesa Analítica y Resultados en Tiempo Real. Quiero agendar un diagnóstico.",
  },
];

export const serviceSelectOptions = services.map((s) => ({
  value: s.slug,
  label: s.title,
}));

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
