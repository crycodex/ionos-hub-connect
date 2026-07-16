/**
 * Post-build: duplicate index.html into route folders with unique meta
 * so crawlers get correct title/description without full SSR.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const htmlPath = join(dist, "index.html");

if (!existsSync(htmlPath)) {
  console.warn("prerender: dist/index.html not found, skip");
  process.exit(0);
}

const routes = [
  {
    path: "",
    title: "IonosHub — Ecosistema digital para empresas en Ecuador",
    description:
      "Transformación digital con ecosistema modular: contenido, pauta, IONIC, software y analítica. Agenda tu diagnóstico gratuito.",
  },
  {
    path: "equipo",
    title: "Nuestro equipo | IonosHub",
    description:
      "Conoce al equipo IonosHub: dirección, desarrollo, automatizaciones y marketing.",
  },
  {
    path: "casos-de-exito",
    title: "Casos de éxito | IonosHub",
    description:
      "Historias reales de transformación digital: El Chipotle, Zona Gamers, Pawau, Ecu593 y más.",
  },
  {
    path: "servicios/estrategia-contenido",
    title: "Estrategia y Contenido Digital | IonosHub Ecuador",
    description:
      "Cronogramas, guiones y copys para empresas en Ecuador. Contenido que alimenta tu ecosistema digital.",
  },
  {
    path: "servicios/produccion-visual-audiovisual",
    title: "Producción Visual y Audiovisual | IonosHub",
    description:
      "Artes, reels, fotografía y cobertura de eventos para empresas en Ecuador.",
  },
  {
    path: "servicios/pauta-publicidad-digital",
    title: "Pauta y Publicidad Digital Ecuador | IonosHub",
    description:
      "Gestión de Meta Ads, TikTok Ads y Google Ads para empresas en Ecuador.",
  },
  {
    path: "servicios/ionic-agente-ia",
    title: "IONIC Agente de IA para WhatsApp | IonosHub Ecuador",
    description:
      "Agente de inteligencia artificial 24/7 para WhatsApp: clasifica leads y agenda citas.",
  },
  {
    path: "servicios/software-a-medida",
    title: "Software a Medida y Automatización | IonosHub Ecuador",
    description:
      "Desarrollo de sistemas web, apps y automatizaciones para digitalizar negocios en Ecuador.",
  },
  {
    path: "servicios/analitica-resultados",
    title: "Analítica y Dashboards en Tiempo Real | IonosHub",
    description:
      "Reportería y analytics dashboard para negocios en Ecuador.",
  },
  {
    path: "politica-de-privacidad",
    title: "Política de privacidad | IonosHub",
    description: "Política de privacidad conforme a la LOPDP de Ecuador.",
  },
  {
    path: "terminos-y-condiciones",
    title: "Términos y condiciones | IonosHub",
    description: "Términos y condiciones del sitio IonosHub.",
  },
];

const base = readFileSync(htmlPath, "utf8");

for (const r of routes) {
  if (!r.path) continue;
  let out = base
    .replace(/<title>[^<]*<\/title>/, `<title>${r.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${r.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="https://ionoshub.net/${r.path}" />`
    );

  const dir = join(dist, r.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), out);
  console.log("prerender:", r.path);
}

console.log("prerender: done");
