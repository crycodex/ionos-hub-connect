import { Database, MessageSquare, Link2, Shield, Globe, BarChart2, FileCode, Users } from "lucide-react";
import { Card } from "./ui/card";

const solutions = [
  {
    icon: BarChart2,
    name: "Ionos Insight",
    description: "Dashboards & BI",
    color: "from-primary to-blue-light"
  },
  {
    icon: MessageSquare,
    name: "Ionos Voice",
    description: "IVR y agentes virtuales",
    color: "from-blue-light to-primary"
  },
  {
    icon: MessageSquare,
    name: "Ionos Chat",
    description: "Chatbots IA en WhatsApp",
    color: "from-accent to-orange-500"
  },
  {
    icon: Link2,
    name: "Ionos Link",
    description: "Integraciones/API & RPA",
    color: "from-accent to-orange-500"
  },
  {
    icon: Shield,
    name: "Ionos Secure",
    description: "Sistemas de seguridad empresarial y protección de datos personales",
    color: "from-secondary to-foreground"
  },
  {
    icon: Globe,
    name: "Ionos Web",
    description: "Desarrollo web y growth",
    color: "from-blue-vivid to-primary"
  },
  {
    icon: Database,
    name: "Ionos DataCare",
    description: "Gobierno de datos",
    color: "from-primary to-blue-light"
  },
  {
    icon: Users,
    name: "Ionos Marketing",
    description: "Campañas de marketing y engagement estratégico",
    color: "from-accent to-orange-500"
  }
];

export function Architecture() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Arquitectura de{" "}
            <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
              Soluciones
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Suite completa de servicios diseñada para adaptarse a cualquier industria
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={solution.name}
              className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card animate-fade-in text-center cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${solution.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {solution.name}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Arquitectura Adaptable y Escalable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada solución se integra perfectamente con las demás, creando un ecosistema tecnológico 
                que crece con tu negocio. Sin detener tu operación actual, implementamos mejoras 
                iterativas con valor continuo y ROI probado.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
