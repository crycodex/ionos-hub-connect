import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const faqs = [
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "Depende del servicio: chatbots y automatizaciones suelen estar en producción en semanas, los dashboards de BI muestran valor desde la primera fase, y los proyectos integrales suelen tomar entre 4 y 12 semanas según el alcance.",
  },
  {
    question: "No tengo conocimientos técnicos, ¿puedo trabajar con ustedes?",
    answer:
      "Sí. Nosotros nos encargamos de toda la implementación técnica de principio a fin. Tú solo necesitas contarnos tu proceso y tus objetivos de negocio.",
  },
  {
    question: "¿Los agentes virtuales se integran con WhatsApp y mi calendario?",
    answer:
      "Sí, nuestros agentes de IA se conectan con WhatsApp, redes sociales y tu calendario para responder, agendar y dar seguimiento a tus clientes de forma automática.",
  },
  {
    question: "¿Trabajan con empresas fuera de Ecuador?",
    answer:
      "Sí. Tenemos base en Ecuador, pero ejecutamos proyectos en toda Latinoamérica de forma remota, con el mismo nivel de seguimiento y soporte.",
  },
  {
    question: "Ya tengo herramientas (CRM, ERP, etc.), ¿tengo que cambiarlas?",
    answer:
      "No. Nuestras automatizaciones y dashboards de BI se integran con los sistemas que ya usas, no necesitas migrar todo desde cero.",
  },
  {
    question: "¿Cómo se mide el ROI del proyecto?",
    answer:
      "Definimos los KPIs y métricas de éxito desde la propuesta inicial, y los seguimos con reportes periódicos durante y después de la implementación.",
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer:
      "Sí. Todos nuestros planes incluyen una ventana de soporte post-lanzamiento (30 o 90 días según el plan), y opciones de acompañamiento continuo.",
  },
];

export function FAQ() {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".faq-reveal", stagger: 0.12 });

  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border">
      <div ref={revealRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="faq-reveal text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#0ea5e9] border-[#0ea5e9]/30 bg-[#0ea5e9]/5">
            <HelpCircle className="h-3 w-3 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Despeja tus <span className="text-[#0ea5e9]">Dudas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Las preguntas que más nos hacen antes de empezar un proyecto.
          </p>
        </div>

        <div className="faq-reveal max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
