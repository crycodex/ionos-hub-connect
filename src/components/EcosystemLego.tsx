import { Link } from "react-router-dom";
import { services } from "@/data/services";

export function EcosystemLego() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-band" id="ecosistema">
      <div className="container mx-auto max-w-content px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="badge-pill mb-4">Sistema LEGO</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-5">
              Arma tu ecosistema pieza por pieza
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              IonosHub no vende módulos aislados. Construimos ecosistemas vivos: el contenido alimenta la pauta,
              la pauta trae leads, IONIC los clasifica y el software los gestiona — con analítica en tiempo real.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Cada negocio arma su combinación. Sin catálogos de precios públicos: el alcance se define en un
              diagnóstico personalizado.
            </p>
            <button type="button" onClick={scrollToContact} className="btn-pill-primary">
              Arma tu ecosistema — agenda tu diagnóstico
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={s.route}
                className={`feature-card !p-5 hover:border-primary/40 group ${
                  i === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2 block">
                  {s.moduleCode}
                </span>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {s.shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
