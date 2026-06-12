export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  route: string;
  image: string;
}

// Rutas exactas según App.tsx
export const services: ServiceItem[] = [
  {
    id: 1,
    title: "AI & Chatbots",
    subtitle: "Agentes virtuales 24/7",
    route: "/agentes-virtuales",
    image: "/imgs/agenteVirtual.png",
  },
  {
    id: 2,
    title: "Análisis de Datos & BI",
    subtitle: "Dashboards y decisiones en tiempo real",
    route: "/business-intelligence",
    image: "/imgs/fotoDashboards.webp",
  },
  {
    id: 3,
    title: "Automatizaciones & RevOps",
    subtitle: "Procesos escalables sin fricción",
    route: "/transformacion-digital",
    image: "/imgs/cta.jpg",
  },
  {
    id: 4,
    title: "Desarrollo Web & Sistemas",
    subtitle: "Landings, apps y plataformas a medida",
    route: "/desarrollo-web-movil",
    image: "/imgs/imgsWeb/appWeb1.png",
  },
  {
    id: 5,
    title: "Marketing Digital",
    subtitle: "Estrategias orientadas a resultados",
    route: "/marketing-digital",
    image: "/imgs/imgsMovil/appMovil1.png",
  },
  {
    id: 6,
    title: "Investigación de Mercados",
    subtitle: "Oportunidades ocultas, datos precisos",
    route: "/investigacion-de-mercados",
    image: "/imgs/inv.png",
  },
];
