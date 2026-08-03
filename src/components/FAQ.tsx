import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Venden paquetes fijos o precios públicos?",
    a: "No. Cada ecosistema se arma a medida tras un diagnóstico. El sitio no publica tarifas: el CTA siempre es agendar un diagnóstico o hablar con un asesor.",
  },
  {
    q: "¿Debo contratar todos los módulos?",
    a: "No. Empiezas con las piezas que más impacto den hoy y conectas el resto cuando el negocio lo pida. Ese es el Sistema LEGO.",
  },
  {
    q: "¿Qué es IONIC?",
    a: "Nuestro agente de IA 24/7 en WhatsApp y redes: responde, clasifica leads y agenda, para que tu equipo no pierda clientes por saturación.",
  },
  {
    q: "¿Trabajan solo en Ecuador?",
    a: "Somos una empresa ecuatoriana con foco local. También acompañamos iniciativas en la región (por ejemplo formación en comunidades LATAM).",
  },
  {
    q: "¿Cuánto dura el diagnóstico?",
    a: "Es una conversación para entender tu operación y proponer un ecosistema viable. Sin compromiso de compra al agendar.",
  },
];

export function FAQ() {
  return (
    <section className="section-band" id="faq">
      <div className="container mx-auto max-w-content px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-ink tracking-tight mb-3">
            Antes de agendar, resolvemos esto
          </h2>
          <p className="text-muted-foreground">
            Las dudas que más nos hacen antes de armar un diagnóstico.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-[hsl(var(--border))] bg-card px-6 border-b-0 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-semibold text-ink py-5 hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:rounded-full [&>svg]:bg-[hsl(var(--surface-strong))] [&>svg]:p-1 [&[data-state=open]>svg]:bg-primary [&[data-state=open]>svg]:text-primary-foreground [&[data-state=open]>svg]:rotate-45">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-0">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
