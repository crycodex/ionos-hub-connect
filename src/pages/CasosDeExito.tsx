import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo, organizationJsonLd } from "@/components/PageSeo";
import { successCases } from "@/data/cases";
import { services } from "@/data/services";

export default function CasosDeExito() {
  return (
    <div className="min-h-screen">
      <PageSeo
        title="Casos de éxito"
        description="Historias reales de transformación digital con IonosHub: El Chipotle, Zona Gamers, Pawau, Ecu593 y más."
        path="/casos-de-exito"
        jsonLd={organizationJsonLd}
      />
      <Navbar />
      <main className="pt-16">
        <section className="section-band">
          <div className="container mx-auto max-w-content px-4">
            <h1 className="font-display text-4xl sm:text-5xl text-ink tracking-tight mb-4 max-w-2xl">
              Casos de éxito
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-14">
              Reto, solución y resultado — así transformamos operaciones reales con el ecosistema IonosHub.
            </p>

            <div className="grid gap-8">
              {successCases.map((c) => {
                const related = c.relatedService
                  ? services.find((s) => s.slug === c.relatedService)
                  : undefined;
                return (
                  <article key={c.slug} className="feature-card grid lg:grid-cols-3 gap-6">
                    <div>
                      {c.logo && (
                        <div className="mb-4 h-14 flex items-center">
                          <img
                            src={c.logo}
                            alt={`Logo ${c.client}`}
                            className="max-h-12 max-w-[160px] object-contain"
                          />
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mb-1">{c.industry}</p>
                      <h2 className="text-2xl font-semibold mb-3">{c.client}</h2>
                      <span className="inline-block rounded-xl bg-[hsl(var(--surface-dark))] px-4 py-2 font-display text-2xl text-white">
                        {c.highlight}
                      </span>
                      {related && (
                        <Link to={related.route} className="inline-block mt-4 text-sm font-semibold text-primary">
                          Módulo: {related.shortTitle} →
                        </Link>
                      )}
                    </div>
                    <div className="lg:col-span-2 space-y-4 text-sm">
                      <div>
                        <h3 className="font-semibold mb-1">Reto</h3>
                        <p className="text-muted-foreground leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Solución</h3>
                        <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Resultado</h3>
                        <p className="text-muted-foreground leading-relaxed">{c.result}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link to="/#contacto" className="btn-pill-cta inline-flex">
                Agenda tu diagnóstico
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
