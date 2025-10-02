import { BarChart3, Bot, Lightbulb, Rocket, Search, Shield } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Bot,
    title: "Call Center IA en WhatsApp",
    description: "Bots inteligentes que atienden 24/7, automatizan respuestas y optimizan la experiencia del cliente.",
    gradient: "from-primary to-blue-light"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards ejecutivos, análisis avanzado y pronósticos que transforman datos en decisiones estratégicas.",
    gradient: "from-blue-light to-primary"
  },
  {
    icon: Lightbulb,
    title: "Marketing Digital",
    description: "Estrategias disruptivas con tecnologías emergentes para impulsar tu presencia digital.",
    gradient: "from-accent to-orange-500"
  },
  {
    icon: Search,
    title: "Investigación de Mercados",
    description: "Estudios especializados que identifican oportunidades y ventajas competitivas.",
    gradient: "from-secondary to-muted-foreground"
  },
  {
    icon: Rocket,
    title: "Transformación Digital",
    description: "Automatización de procesos y modernización tecnológica sin detener tu operación.",
    gradient: "from-accent to-orange-500"
  },
  {
    icon: Shield,
    title: "Seguridad & Datos",
    description: "Gobierno de datos, ciberseguridad y control con arquitectura adaptable a cualquier industria.",
    gradient: "from-blue-vivid to-primary"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Servicios que{" "}
            <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
              Impulsan tu Crecimiento
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales end-to-end desde investigación hasta implementación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
