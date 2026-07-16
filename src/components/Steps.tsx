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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="badge-pill mb-4">Proceso</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Cómo trabajamos contigo
          </h2>
          <p className="text-muted-foreground text-lg">
            Un camino claro hacia tu ecosistema — siempre empezando por el diagnóstico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative">
              <div className="feature-card h-full">
                <span className="text-xs font-semibold text-muted-foreground mb-3 block">
                  0{i + 1}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-strong">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
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
