import { Link } from "react-router-dom";

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
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-surface-dark-elevated aspect-[4/3] flex items-center justify-center">
            <img
              src="/imgs/logo%20remove.png"
              alt="Equipo IonosHub — foto grupal pendiente"
              className="max-h-24 opacity-80 invert brightness-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
