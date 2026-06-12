import { CheckCircle2 } from "lucide-react";
import MagnetLines from "./MagnetLines";
import { WorldMap } from "@/components/ui/world-map";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const values = [
  {
    title: "Automatización Inteligente",
    description: "Agentes IA que atienden tu negocio 24/7."
  },
  {
    title: "Integración Total",
    description: "Nos conectamos a tus sistemas sin fricción."
  },
  {
    title: "Resultados Medibles",
    description: "ROI y KPIs claros desde el primer mes."
  },
  {
    title: "Expertise Local",
    description: "+5 años con empresas de la región."
  }
];

export function ValueProposition() {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".vp-reveal", stagger: 0.12 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background with MagnetLines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <MagnetLines
          rows={12}
          columns={12}
          containerSize="100%"
          lineColor="#0ea5e9"
          lineWidth="1px"
          lineHeight="40px"
          baseAngle={0}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div ref={revealRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="space-y-8">
              <div className="vp-reveal">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  ¿Por qué elegir <br />
                  <span className="text-[#0ea5e9]">
                    IonosHub?
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Tecnología con impacto real en tus ingresos, sin interrumpir tu operación.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {values.map((value) => (
                  <div key={value.title} className="vp-reveal flex items-center gap-4 group">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center group-hover:bg-[#0ea5e9] transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-reveal relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent rounded-[2.5rem] blur-2xl" />
              <div className="relative bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border border-border shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Presencia <span className="text-[#0ea5e9]">regional</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Base en Ecuador, proyectos en toda Latinoamérica.
                  </p>
                </div>

                <WorldMap />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
