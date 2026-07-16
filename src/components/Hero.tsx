import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-16">
      {/* Soft brand atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 20%, hsl(205 100% 37% / 0.08), transparent), radial-gradient(ellipse 60% 40% at 10% 80%, hsl(200 100% 45% / 0.06), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full border border-primary/10 animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full border border-primary/5"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-content px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <p className="badge-pill mb-6">Ecosistema digital · Ecuador</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink mb-6">
              Transformación digital con un{" "}
              <span className="text-primary">ecosistema</span>, no servicios sueltos
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              IonosHub arma contigo un sistema modular —contenido, pauta, IONIC, software y analítica—
              que se conecta como piezas LEGO. De datos a resultados.
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={scrollToContact} className="btn-pill-cta">
                Agenda tu diagnóstico
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="btn-pill-secondary"
              >
                Hablar con un asesor
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-up hidden lg:block">
            <div className="product-ui-card-dark relative z-10 max-w-md ml-auto shadow-lg">
              <p className="text-xs uppercase tracking-wider text-white/50 mb-4">Tu ecosistema</p>
              <ul className="space-y-3">
                {[
                  "Estrategia & contenido",
                  "Producción visual",
                  "Pauta digital",
                  "IONIC · Agente IA",
                  "Software a medida",
                  "Analítica en tiempo real",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/#ecosistema" className="mt-6 inline-block text-sm text-primary hover:underline">
                Cómo se conectan las piezas →
              </Link>
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl bg-surface-strong border border-border -z-0"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
