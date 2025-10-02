import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Automatización Inteligente",
    description: "Agentes IA personalizados para ventas, atención al cliente y gestión de solicitudes 24/7."
  },
  {
    title: "Integración Total",
    description: "Adaptabilidad a sistemas existentes: datos (BI), canales (voz/chat/web) y seguridad."
  },
  {
    title: "Resultados Medibles",
    description: "ROI comprobado, reducción de costos y aumento de eficiencia con métricas accionables."
  },
  {
    title: "Expertise Local",
    description: "Conocimiento profundo del mercado ecuatoriano con visión regional LATAM."
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold">
                ¿Por qué elegir{" "}
                <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                  IonosHub?
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos expertise tecnológico con tecnología global de vanguardia. 
                Nuestras soluciones cubren toda la cadena: desde asesoría hasta implementación, 
                con metodología ágil enfocada en resultados rápidos y escalables.
              </p>

              <div className="space-y-4 pt-4">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="flex gap-4 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card p-8 rounded-2xl border-2 border-primary/10 shadow-xl">
                <div className="space-y-8">
                  <div className="text-center pb-6 border-b border-border">
                    <div className="text-4xl font-bold text-primary mb-2">Nuestra Visión</div>
                    <p className="text-muted-foreground">
                      Ser el referente latinoamericano en integración de Data, CX y Seguridad
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground">Seguridad por diseño</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-light" />
                      <span className="text-foreground">Claridad antes que complejidad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-foreground">Integración primero</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground">Medición continua</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-light" />
                      <span className="text-foreground">Ética de datos</span>
                    </div>
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
