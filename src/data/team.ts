export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  photo: string;
}

export interface TeamArea {
  id: string;
  label: string;
  members: TeamMember[];
}

/** Rutas en /public/imgs/equipo */
export const teamAreas: TeamArea[] = [
  {
    id: "direccion",
    label: "Dirección",
    members: [
      {
        name: "Orlidan Montesdeoca",
        role: "Director Ejecutivo, Cofundador",
        expertise:
          "DevOps, análisis de datos, infraestructura cloud, IA y automatización avanzada con RAGs. Relación con clientes.",
        photo: "/imgs/equipo/orli.png",
      },
      {
        name: "Cristhian Recalde",
        role: "Director Financiero y Operaciones, Cofundador",
        expertise:
          "Gestión de recursos y proyectos; líder de desarrollo móvil (Flutter); expositor en comunidad AWS y Google.",
        photo: "/imgs/equipo/gris.png",
      },
    ],
  },
  {
    id: "desarrollo",
    label: "Desarrollo",
    members: [
      {
        name: "Alan Rodríguez",
        role: "PMO",
        expertise:
          "Bases de datos transaccionales, levantamiento de propuestas y organización bajo SCRUM.",
        photo: "/imgs/equipo/user.png",
      },
    ],
  },
  {
    id: "automatizaciones",
    label: "Automatizaciones",
    members: [
      {
        name: "David Villarreal",
        role: "Especialista de Automatizaciones",
        expertise:
          "Flujos de automatización y soporte técnico; tecnologías de vanguardia; apoyo en diseño y maquetado web.",
        photo: "/imgs/equipo/deivid.png",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    members: [
      {
        name: "Cami",
        role: "Especialista de Marketing",
        expertise:
          "Gestión de redes sociales, traducción de tecnicismos a lenguaje de negocio y cobertura de eventos.",
        photo: "/imgs/equipo/user.png",
      },
      {
        name: "Dome",
        role: "Especialista en Representación de Marca",
        expertise:
          "Vocera pública para clientes; carisma y naturalidad en cámara y eventos.",
        photo: "/imgs/equipo/dome.png",
      },
    ],
  },
];

/** Fotos para el teaser de Home (mosaico grupal) */
export const teamTeaserPhotos = [
  { src: "/imgs/equipo/orli.png", alt: "Orlidan Montesdeoca" },
  { src: "/imgs/equipo/gris.png", alt: "Cristhian Recalde" },
  { src: "/imgs/equipo/deivid.png", alt: "David Villarreal" },
  { src: "/imgs/equipo/dome.png", alt: "Dome" },
  { src: "/imgs/equipo/gius.png", alt: "Equipo IonosHub" },
  { src: "/imgs/equipo/cris.png", alt: "Equipo IonosHub" },
];
