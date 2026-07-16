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
            <p className="badge-pill mb-4">Resultados reales</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-3">
              Casos de éxito
            </h2>
            <p className="text-muted-foreground text-lg">
              Historias de negocios que digitalizaron su operación con IonosHub.
            </p>
          </div>
          <Link
            to="/casos-de-exito"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary shrink-0"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.slug} className="feature-card flex flex-col">
              <span className="text-xs text-muted-foreground mb-2">{c.industry}</span>
              <h3 className="text-lg font-semibold mb-3">{c.client}</h3>
              <p className="text-2xl font-display text-primary mb-4">{c.highlight}</p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
