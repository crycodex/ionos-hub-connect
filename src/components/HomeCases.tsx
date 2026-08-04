import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { successCases, homeCaseSlugs } from "@/data/cases";

export function HomeCases() {
  const cases = successCases.filter((c) =>
    (homeCaseSlugs as readonly string[]).includes(c.slug)
  );

  return (
    <section className="section-band" id="casos">
      <div className="container mx-auto max-w-content px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-3">
              Casos de éxito
            </h2>
            <p className="text-muted-foreground text-lg">
              Historias de negocios que digitalizaron su operación con IonosHub.
            </p>
          </div>
          <Link
            to="/casos-de-exito"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-primary shrink-0 transition-colors duration-200 hover:text-[hsl(var(--primary-active))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            Ver todos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to={`/casos-de-exito#${c.slug}`}
              className="feature-card-metric feature-card-metric-link group flex flex-col"
              aria-label={`Ver caso completo: ${c.client} — ${c.highlight}`}
            >
              {c.logo && (
                <div className="mb-6 h-8 flex items-center">
                  <img
                    src={c.logo}
                    alt=""
                    className="max-h-8 max-w-[140px] object-contain brightness-0 invert opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              )}
              <p className="text-3xl font-display mb-2">{c.highlight}</p>
              <span className="text-xs text-white/60 mb-4 block">{c.industry} · {c.client}</span>
              <p className="text-sm text-white/80 leading-relaxed flex-1">{c.result}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/70 transition-colors duration-200 group-hover:text-white">
                Ver caso completo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
