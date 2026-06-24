import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb, Rocket, MessageSquare, FileText, Sparkles } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const MES_ACTUAL = new Date().toLocaleDateString("es-EC", { month: "long", year: "numeric" });

function scrollToContacto() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}

export function Steps() {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".steps-reveal", stagger: 0.12 });

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Gratuito",
      description:
        "Agenda una llamada de 30 minutos. Analizamos tu operación y te decimos, sin compromiso, dónde hay oportunidad de automatizar, vender más o decidir con mejores datos.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Plan a Medida",
      description:
        "Te entregamos una propuesta clara: alcance, tiempos y ROI estimado. Tú decides si avanzamos, sin letra pequeña.",
      icon: Lightbulb,
      color: "from-[#0ea5e9] to-blue-light",
    },
    {
      number: "03",
      title: "Implementación y Resultados",
      description:
        "Construimos, integramos y medimos. Reportes y soporte continuo para que el proyecto siga dando resultados después del lanzamiento.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="steps-reveal text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#0ea5e9] border-[#0ea5e9]/30 bg-[#0ea5e9]/5">
            <Sparkles className="h-3 w-3 mr-2" />
            Sin complicaciones
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Cómo <span className="text-[#0ea5e9]">Empezar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tres pasos simples para llevar tu negocio al siguiente nivel, sin enredos ni esperas eternas.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="steps-reveal p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#0ea5e9]/30 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Urgency band */}
        <Card className="steps-reveal max-w-3xl mx-auto p-8 bg-gradient-to-r from-[#0ea5e9]/10 to-blue-light/10 border-2 border-[#0ea5e9]/20 text-center">
          <Badge variant="secondary" className="mb-4 capitalize">
            Cupos limitados — {MES_ACTUAL}
          </Badge>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Este mes solo tomamos <strong className="text-foreground">4 diagnósticos gratuitos</strong> de 30
            minutos para nuevos proyectos, para poder darle atención personalizada a cada equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContacto}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0ea5e9]/90 transition-colors font-semibold"
            >
              <FileText className="h-5 w-5" />
              Llenar Formulario
            </button>
            <a
              href={`https://wa.me/593992249152?text=${encodeURIComponent(
                "Hola, quiero agendar mi diagnóstico gratuito de 30 minutos"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-lg hover:bg-[#0ea5e9]/10 transition-colors font-semibold"
            >
              <MessageSquare className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
