import { openWhatsApp } from "@/lib/whatsapp";
import { SplineScene } from "@/components/ui/spline";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

const ecosystemItems: LogoItem[] = [
  "Estrategia & contenido",
  "Producción visual",
  "Pauta digital",
  "IONIC · Agente IA",
  "Software a medida",
  "Analítica en tiempo real",
].map((item) => ({
  node: (
    <span className="badge-pill gap-2 whitespace-nowrap">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      {item}
    </span>
  ),
  ariaLabel: item,
}));

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <section className="relative min-h-[90vh] flex items-center bg-white pt-16">
      {/* Soft brand atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% 20%, hsl(205 100% 37% / 0.08), transparent), radial-gradient(ellipse 60% 40% at 10% 80%, hsl(200 100% 45% / 0.06), transparent)",
          }}
        />
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full border border-primary/10 animate-float" />
        <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full border border-primary/5" />
      </div>

      <div className="absolute inset-0 z-0 opacity-25 lg:z-30 lg:opacity-100 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[65%] animate-fade-in-up">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="h-full w-full"
        />
      </div>

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

          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>

    <div className="relative z-10 bg-white py-8 lg:py-10 animate-fade-in">
      <LogoLoop
        logos={ecosystemItems}
        speed={40}
        direction="left"
        gap={16}
        pauseOnHover
        fadeOut
        fadeOutColor="hsl(0 0% 100%)"
        ariaLabel="Piezas del ecosistema IonosHub"
      />
    </div>
    </>
  );
}
