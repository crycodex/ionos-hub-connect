import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo } from "@/components/PageSeo";
import TeamShowcase from "@/components/ui/team-showcase";
import { teamAreas } from "@/data/team";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Team() {
  const showcaseMembers = teamAreas.flatMap((area) =>
    area.members.map((m) => ({
      id: m.name,
      name: m.name,
      role: `${m.role} · ${area.label}`,
      image: m.photo,
      expertise: m.expertise,
    }))
  );

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
              Dirección, desarrollo, automatizaciones y marketing — el equipo completo.
            </p>

            <TeamShowcase members={showcaseMembers} />

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
