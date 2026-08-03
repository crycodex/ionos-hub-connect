import { ClipboardList, FileCheck, Rocket, LineChart } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    text: "Entendemos tu operación, canales y objetivos. Sin compromiso de compra.",
  },
  {
    icon: FileCheck,
    title: "Propuesta",
    text: "Armamos el ecosistema a tu medida: qué módulos activar y en qué orden.",
  },
  {
    icon: Rocket,
    title: "Arranque",
    text: "Implementamos las piezas acordadas e integramos lo que ya usas.",
  },
  {
    icon: LineChart,
    title: "Resultados",
    text: "Medimos, optimizamos y escalamos el sistema con datos reales.",
  },
];

export function Steps() {
  return (
    <section className="section-band" id="proceso">
      <div className="container mx-auto max-w-content px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Cómo trabajamos contigo
          </h2>
          <p className="text-muted-foreground text-lg">
            Un camino claro hacia tu ecosistema — siempre empezando por el diagnóstico.
          </p>
        </div>

        <div className="relative mb-12">
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-[hsl(var(--border))] sm:block"
            aria-hidden
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative">
                <div className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--surface-dark))] text-[10px] font-semibold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button type="button" onClick={() => openWhatsApp()} className="btn-pill-primary">
            Empezar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
