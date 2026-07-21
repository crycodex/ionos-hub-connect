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
        photo: "/imgs/equipo/orli.JPG",
      },
      {
        name: "Cristhian Recalde",
        role: "Director Financiero y Operaciones, Cofundador",
        expertise:
          "Gestión de recursos y proyectos; líder de desarrollo móvil (Flutter); expositor en comunidad AWS y Google.",
        photo: "/imgs/equipo/gris.JPG",
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
        role: "Especialista de Automatizaciones y Desarrollo Web",
        expertise:
          "Flujos de automatización y soporte técnico; tecnologías de vanguardia; apoyo en diseño y maquetado web.",
        photo: "/imgs/equipo/deivid.JPG",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    members: [
      {
        name: "Camila Navarrete",
        role: "CMO",
        expertise:
          "Gestión de redes sociales, cobertura de eventos.",
        photo: "/imgs/equipo/user.png",
      },
      {
        name: "Domenica Alvarez",
        role: "Representante de Marca",
        expertise:
          "Imagen pública para clientes; carisma y naturalidad en cámara y eventos.",
        photo: "/imgs/equipo/dome.png",
      },
    ],
  },
];

/** Fotos para el teaser de Home (mosaico grupal) */
export const teamTeaserPhotos = [
  { src: "/imgs/equipo/orli.JPG", alt: "Orlidan Montesdeoca" },
  { src: "/imgs/equipo/gris.JPG", alt: "Cristhian Recalde" },
  { src: "/imgs/equipo/deivid.JPG", alt: "David Villarreal" },
  { src: "/imgs/equipo/alan.JPG", alt: "Alan Rodríguez" },
  { src: "/imgs/equipo/user.png", alt: "Camila Navarrete" },
  { src: "/imgs/equipo/dome.png", alt: "Domenica Alvarez" },
];
