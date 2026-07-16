import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

function scrollToContacto() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}

interface PricingTier {
  name: string;
  highlight?: boolean;
  description: string;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Diagnóstico & Quick Win",
    description: "Ideal para un primer piloto: un chatbot, una automatización o un dashboard de BI para un área específica.",
    features: ["Auditoría inicial de procesos", "1 caso de uso implementado", "Soporte 30 días incluido"],
  },
  {
    name: "Transformación Integral",
    highlight: true,
    description: "2 a 3 servicios combinados (automatización + BI + chatbot) integrados con tus sistemas, calendarios y WhatsApp.",
    features: [
      "Integración con tus sistemas actuales",
      "Múltiples servicios combinados",
      "Soporte y optimización 90 días",
    ],
  },
  {
    name: "Partner Estratégico",
    description: "Roadmap multi-servicio (marketing + desarrollo + BI + RevOps) con acompañamiento continuo.",
    features: ["Retainer mensual continuo", "Reportes ejecutivos periódicos", "Soporte prioritario"],
  },
];

export function Pricing() {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".pricing-reveal", stagger: 0.12 });

  return (
    <section id="planes" className="py-20 bg-background relative overflow-hidden border-t border-border">
      <div ref={revealRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="pricing-reveal text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#0ea5e9] border-[#0ea5e9]/30 bg-[#0ea5e9]/5">
            <Sparkles className="h-3 w-3 mr-2" />
            Sin planes fijos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Cotiza tu <span className="text-[#0ea5e9]">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            No manejamos tarifas fijas: cada proyecto se cotiza según su alcance real tras un diagnóstico.
            Cuéntanos qué necesitas y te armamos una propuesta a tu medida.
          </p>
          <button
            onClick={scrollToContacto}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0ea5e9]/90 transition-colors font-semibold"
          >
            <FileText className="h-5 w-5" />
            Solicitar Cotización Gratis
          </button>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`pricing-reveal p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 ${
                tier.highlight
                  ? "border-2 border-[#0ea5e9] shadow-xl lg:scale-[1.03]"
                  : "border-2 hover:border-[#0ea5e9]/30 hover:shadow-lg"
              }`}
            >
              {tier.highlight && (
                <Badge className="absolute top-6 right-6 bg-[#0ea5e9] text-white hover:bg-[#0ea5e9]">
                  Más solicitado
                </Badge>
              )}

              <h3 className="text-xl font-bold tracking-tight mb-3 pr-20">{tier.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContacto}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-[#0ea5e9] text-white hover:bg-[#0ea5e9]/90"
                    : "border-2 border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9]/10"
                }`}
              >
                <FileText className="h-4 w-4" />
                Solicitar Cotización
              </button>
            </Card>
          ))}
        </div>

        {/* Guarantee band */}
        <Card className="pricing-reveal max-w-3xl mx-auto p-6 bg-muted/40 border-dashed border-2 flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Garantía de transparencia:</strong> si en la primera fase no ves el
            avance acordado, ajustamos el plan sin costo adicional. Llena el formulario y te enviamos tu cotización
            personalizada en menos de 24 horas.
          </p>
        </Card>
      </div>
    </section>
  );
}
