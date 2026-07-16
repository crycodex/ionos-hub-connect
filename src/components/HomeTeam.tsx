import { Link } from "react-router-dom";
import { teamTeaserPhotos } from "@/data/team";

export function HomeTeam() {
  return (
    <section className="section-band-dark relative overflow-hidden" id="equipo-teaser">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, hsl(205 100% 37% / 0.35), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="container relative z-10 mx-auto max-w-content px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold mb-4">
              Nuestro equipo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5">
              Personas detrás del ecosistema
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Dirección, desarrollo, automatizaciones y marketing — un equipo multidisciplinario
              que diseña e implementa tu transformación digital.
            </p>
            <Link to="/equipo" className="btn-pill bg-white text-ink hover:bg-white/90">
              Conoce al equipo
            </Link>
          </div>

          <div
            className="grid grid-cols-3 gap-2 sm:gap-3 rounded-3xl overflow-hidden"
            aria-label="Equipo IonosHub"
          >
            {teamTeaserPhotos.map((p, i) => (
              <div
                key={p.src + i}
                className={`relative overflow-hidden rounded-2xl bg-surface-dark-elevated ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
