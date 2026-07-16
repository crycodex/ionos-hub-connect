import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="section-band-soft" id="servicios">
      <div className="container mx-auto max-w-content px-4">
        <div className="max-w-2xl mb-14">
          <p className="badge-pill mb-4">Módulos</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Seis piezas de tu ecosistema digital
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige por dónde empezar. Cada módulo se conecta con el resto cuando estés listo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={s.route} className="feature-card group flex flex-col bg-white">
              <span className="text-xs font-semibold text-primary mb-3">{s.moduleCode}</span>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{s.subtitle}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Ver módulo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
