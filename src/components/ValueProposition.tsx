import { CheckCircle2 } from "lucide-react";
import MagnetLines from "./MagnetLines";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const values = [
  {
    title: "Automatización Inteligente",
    description: "Agentes IA que aprenden y se adaptan a tu negocio, gestionando consultas, ventas y soporte técnico de forma autónoma las 24 horas."
  },
  {
    title: "Integración Total",
    description: "Conectamos perfectamente con tus sistemas actuales - desde bases de datos y CRMs hasta canales de comunicación, manteniendo altos estándares de seguridad."
  },
  {
    title: "Resultados Medibles",
    description: "Reportes detallados del retorno de inversión, reducción de tiempos operativos y mejoras en satisfacción del cliente con KPIs específicos."
  },
  {
    title: "Expertise Local",
    description: "Más de 5 años trabajando con empresas innovadoras nos dan el conocimiento único del mercado y sus necesidades operativas."
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  ¿Por qué elegir <br />
                  <span className="text-[#0ea5e9]">
                    IonosHub?
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Somos especialistas en transformación digital orientada a resultados.
                  Implementamos tecnología de última generación garantizando impacto tangible en ingresos y eficiencia operativa, sin interrumpir tu operación activa.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {values.map((value) => (
                  <div key={value.title} className="vp-reveal flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center group-hover:bg-[#0ea5e9] transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-reveal relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent rounded-[2.5rem] blur-2xl" />
              <div className="relative bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm p-10 md:p-12 rounded-[2.5rem] border border-border shadow-2xl">
                <div className="space-y-8">
                  <div className="text-center pb-8 border-b border-border">
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Cultura de Ingeniería</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lideramos el diseño de software en la región con una prioridad innegociable por el rendimiento, la escalabilidad y la obsesión por el usuario.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {[
                      "Protección y cifrado de datos by design",
                      "Código minimalista para problemas complejos",
                      "Arquitecturas desacopladas y serverless",
                      "Monitoreo de telemetría constante",
                      "Gobernanza ética y responsable"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="shrink-0 w-2 h-2 rounded-full bg-[#0ea5e9]" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
