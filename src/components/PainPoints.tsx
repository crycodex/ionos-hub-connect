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
        <div className="max-w-2xl mb-14">
          <p className="badge-pill mb-4">El problema</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Lo que frena a los negocios que quieren digitalizarse
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No es falta de ganas: es falta de un sistema que conecte cada pieza.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature-card bg-white">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface-strong">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
