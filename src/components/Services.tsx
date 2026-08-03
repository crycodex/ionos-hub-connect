import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "estrategia-contenido": "/imgs/cajeraRestaurante.png",
  "produccion-visual-audiovisual": "/imgs/pixelart3d.png",
  "pauta-publicidad-digital": "/imgs/dashboards/reporteventas/image.png",
  "ionic-agente-ia": "/imgs/agenteVirtual.png",
  "software-a-medida": "/imgs/imgsMovil/appMovil2.png",
  "analitica-resultados": "/imgs/dashboards/reporteIncidencias/image.png",
};

export function Services() {
  return (
    <section className="section-band-soft" id="servicios">
      <div className="container mx-auto max-w-content px-4">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Seis piezas de tu ecosistema digital
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige por dónde empezar. Cada módulo se conecta con el resto cuando estés listo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={s.route} className="feature-card-media group flex flex-col">
              <div className="feature-card-media-frame">
                <img
                  src={serviceImages[s.slug]}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="feature-card-media-body flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary mb-2">{s.moduleCode}</span>
                <h3 className="text-lg font-semibold mb-2 text-ink group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{s.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ver módulo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
