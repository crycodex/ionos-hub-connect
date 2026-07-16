import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo } from "@/components/PageSeo";
import { teamAreas } from "@/data/team";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Team() {
  const [active, setActive] = useState(teamAreas[0].id);
  const area = teamAreas.find((a) => a.id === active) ?? teamAreas[0];

  return (
    <div className="min-h-screen">
      <PageSeo
        title="Nuestro equipo"
        description="Conoce al equipo IonosHub: dirección, desarrollo, automatizaciones y marketing detrás de tu ecosistema digital."
        path="/equipo"
      />
      <Navbar />
      <main className="pt-16">
        <section className="section-band">
          <div className="container mx-auto max-w-content px-4">
            <p className="badge-pill mb-4">Equipo</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink tracking-tight mb-4 max-w-2xl">
              Las personas detrás de IonosHub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              Organizados por área — como trabajamos en el día a día.
            </p>

            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Áreas del equipo">
              {teamAreas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  aria-selected={active === a.id}
                  onClick={() => setActive(a.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === a.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-strong text-foreground hover:bg-border"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6" role="tabpanel">
              {area.members.map((m) => (
                <article
                  key={m.name}
                  className="feature-card group transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-strong text-primary font-display text-xl mb-4">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{m.name}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {m.expertise}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16 feature-card bg-surface-soft text-center">
              <h2 className="font-display text-2xl mb-3">¿Quieres unirte al equipo?</h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Buscamos gente con ganas de construir ecosistemas digitales.
              </p>
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Hola IonosHub, me interesa unirme al equipo. ¿Tienen vacantes abiertas?"
                  )
                }
                className="btn-pill-primary"
              >
                Escribir por WhatsApp
              </button>
            </div>

            <div className="mt-8 text-center">
              <Link to="/#contacto" className="text-sm font-semibold text-primary">
                ¿Prefieres agendar un diagnóstico? →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
