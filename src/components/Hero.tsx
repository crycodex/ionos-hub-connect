import { openWhatsApp } from "@/lib/whatsapp";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

const ecosystemItems: LogoItem[] = [
  "Estrategia & contenido",
  "Producción visual",
  "Pauta digital",
  "IONIC · Agente IA",
  "Software a medida",
  "Analítica en tiempo real",
].map((item) => {
  const isFlagship = item.startsWith("IONIC");
  return {
    node: (
      <span
        className={`badge-pill gap-2 whitespace-nowrap border transition-colors duration-200 ${
          isFlagship
            ? "border-accent/30 bg-accent/10 text-[hsl(22_70%_35%)] hover:border-accent/50 hover:bg-accent/15"
            : "border-transparent hover:bg-[hsl(var(--border))]"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isFlagship ? "bg-accent" : "bg-primary"}`} />
        {item}
      </span>
    ),
    ariaLabel: item,
  };
});

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

      <div className="container relative z-10 mx-auto max-w-content px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
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

          <div className="relative hidden lg:block animate-fade-in-up" aria-hidden>
            <div className="relative mx-auto max-w-md">
              {/* Primary proof: real reporting dashboard, framed as a browser window */}
              <div className="group/primary relative z-0 rounded-2xl border border-[hsl(var(--border))] bg-card shadow-[0_20px_50px_hsl(0_0%_0%_/_0.12)] overflow-hidden rotate-[1.5deg] transition-[transform,box-shadow] duration-500 ease-out hover:z-20 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_28px_60px_hsl(0_0%_0%_/_0.18)]">
                <div className="flex items-center gap-1.5 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/imgs/dashboards/reporteventas/image.png"
                    alt="Panel de analítica IonosHub con métricas de ventas en tiempo real"
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover/primary:scale-[1.03]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Secondary proof: IONIC agent, offset lower-left */}
              <div className="group/secondary absolute -left-10 -bottom-10 z-10 w-48 rounded-2xl border border-[hsl(var(--border))] bg-card shadow-[0_16px_36px_hsl(0_0%_0%_/_0.14)] overflow-hidden -rotate-[4deg] transition-[transform,box-shadow] duration-500 ease-out hover:z-20 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0_24px_48px_hsl(0_0%_0%_/_0.2)]">
                <div className="overflow-hidden">
                  <img
                    src="/imgs/imgsWeb/appWeb2.png"
                    alt="Vista de app móvil desarrollada por IonosHub"
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover/secondary:scale-[1.05]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Live-metric chip, upper-right */}
              <div className="absolute -right-6 -top-6 z-20 flex items-center gap-2 rounded-2xl bg-[hsl(var(--surface-dark))] text-white px-5 py-3 shadow-[0_16px_36px_hsl(0_0%_0%_/_0.2)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_44px_hsl(0_0%_0%_/_0.28)]">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <p className="text-xs font-semibold">Analítica en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="relative z-10 border-t border-[hsl(var(--border))] bg-white py-7 lg:py-9 animate-fade-in">
      <LogoLoop
        logos={ecosystemItems}
        speed={36}
        direction="left"
        gap={20}
        pauseOnHover
        fadeOut
        fadeOutColor="hsl(0 0% 100%)"
        scaleOnHover
        ariaLabel="Piezas del ecosistema IonosHub"
      />
    </div>
    </>
  );
}
