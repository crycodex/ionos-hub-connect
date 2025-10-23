import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Search, 
  Lightbulb, 
  Rocket, 
  BarChart, 
  CheckCircle2,
  ArrowRight,
  Clock
} from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Agenda una reunión gratuita de 30 minutos donde analizamos tus necesidades específicas, objetivos de negocio y desafíos actuales. Sin compromisos.",
      icon: MessageSquare,
      duration: "30 minutos",
      deliverables: [
        "Análisis inicial de necesidades",
        "Diagnóstico preliminar",
        "Propuesta de valor personalizada"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Investigación y Análisis",
      description: "Realizamos un estudio profundo de tu industria, competencia y procesos internos. Identificamos oportunidades de optimización y áreas de mejora críticas.",
      icon: Search,
      duration: "1-2 semanas",
      deliverables: [
        "Análisis de competencia",
        "Mapeo de procesos actuales",
        "Identificación de pain points",
        "Benchmarking de industria"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Estrategia y Diseño",
      description: "Desarrollamos una estrategia personalizada con arquitectura técnica, roadmap detallado y proyecciones de ROI. Presentamos mockups y prototipos para tu aprobación.",
      icon: Lightbulb,
      duration: "2-3 semanas",
      deliverables: [
        "Estrategia de implementación",
        "Arquitectura de solución",
        "Prototipos interactivos",
        "Proyecciones de ROI",
        "Plan de proyecto detallado"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      title: "Implementación",
      description: "Ejecutamos la solución con metodología ágil, entregas incrementales y sin interrumpir tu operación. Comunicación constante y ajustes en tiempo real.",
      icon: Rocket,
      duration: "4-12 semanas",
      deliverables: [
        "Desarrollo e integración",
        "Pruebas de calidad (QA)",
        "Capacitación del equipo",
        "Documentación técnica",
        "Migración de datos"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "05",
      title: "Optimización y Soporte",
      description: "Monitoreamos resultados 24/7, realizamos ajustes basados en datos reales y proporcionamos soporte continuo. Reportes mensuales de performance y mejoras proactivas.",
      icon: BarChart,
      duration: "Continuo",
      deliverables: [
        "Monitoreo 24/7",
        "Reportes mensuales de KPIs",
        "Optimizaciones proactivas",
        "Soporte técnico prioritario",
        "Actualizaciones gratuitas"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Proceso Probado
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Cómo <span className="text-primary">Trabajamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado y transparente que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-32 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20" />
                )}

                <Card className="p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden group">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left: Icon and Number */}
                      <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="lg:text-center">
                          <div className="text-4xl font-bold text-muted-foreground/20">
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Deliverables */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Entregables:
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Arrow */}
                      <div className="hidden lg:flex items-center">
                        {index !== steps.length - 1 && (
                          <ArrowRight className="h-8 w-8 text-primary/30 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-blue-light/10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu transformación digital?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593992249152?text=Hola,%20quiero%20agendar%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <MessageSquare className="h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
              <button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                Ver Servicios
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

