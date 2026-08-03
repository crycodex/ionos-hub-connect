import { AlertCircle, MessageSquareOff, Puzzle } from "lucide-react";

const pains = [
  {
    icon: Puzzle,
    title: "Procesos manuales",
    text: "Excel, papel y herramientas desconectadas que no escalan cuando el negocio crece.",
  },
  {
    icon: MessageSquareOff,
    title: "Leads que se pierden",
    text: "Atención saturada o fuera de horario: mientras atiendes a uno, el siguiente se va.",
  },
  {
    icon: AlertCircle,
    title: "Presencia fragmentada",
    text: "Redes, pauta y operaciones sin un hilo común — esfuerzo disperso, resultados opacos.",
  },
];

export function PainPoints() {
  return (
    <section className="section-band-soft" id="dolor">
      <div className="container mx-auto max-w-content px-4">
        <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
              Lo que frena a los negocios que quieren digitalizarse
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No es falta de ganas: es falta de un sistema que conecte cada pieza.
            </p>
          </div>
          <div>
            {pains.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-5 border-b border-[hsl(var(--border))] py-6 first:pt-0 last:border-b-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--surface-dark))]">
                  <Icon className="h-5 w-5 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-1">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
