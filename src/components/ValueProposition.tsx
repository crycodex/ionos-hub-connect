import { CheckCircle2 } from "lucide-react";

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
    description: "Más de 5 años trabajando con empresas ecuatorianas nos dan el conocimiento único del mercado local y sus necesidades específicas."
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
                <span className="bakbak-one-regular bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                  IonosHub?
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos expertos en transformación digital con más de 100 casos de éxito. 
                Implementamos soluciones personalizadas usando tecnologías de última generación, 
                garantizando resultados tangibles en tiempo récord sin interrumpir tu operación.
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
                      Liderar la innovación tecnológica en Latinoamérica unificando datos, experiencia del cliente y ciberseguridad
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground">Protección de datos desde el diseño inicial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-light" />
                      <span className="text-foreground">Soluciones simples para problemas complejos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-foreground">Conectividad con sistemas existentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground">Análisis constante de resultados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-light" />
                      <span className="text-foreground">Manejo responsable de información</span>
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
