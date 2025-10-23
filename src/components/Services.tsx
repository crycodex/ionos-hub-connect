import { BarChart3, Bot, Lightbulb, Rocket, Search, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "Agentes Virtuales a medida",
    description: "Asistentes virtuales inteligentes que atienden 24/7 con funciones como agendar citas, brindar información y atención al cliente.",
    gradient: "from-primary to-blue-light",
    path: "/agentes-virtuales",
    features: ["Atención 24/7", "Integración WhatsApp", "ROI Calculator", "Personalización completa"],
    stats: "Atención 24/7"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards ejecutivos, análisis avanzado y pronósticos que transforman datos en decisiones estratégicas.",
    gradient: "from-blue-light to-primary",
    path: "/business-intelligence",
    features: ["Dashboards en tiempo real", "Análisis predictivo", "Reportes automáticos", "Demo personalizada"],
    stats: "Tiempo Real"
  },
  {
    icon: Lightbulb,
    title: "Marketing Digital",
    description: "Campañas de marketing efectivas, retailing digital y engagement estratégico. Contamos con personal capacitado y tecnologías emergentes para impulsar tu presencia digital.",
    gradient: "from-accent to-orange-500",
    path: "/marketing-digital",
    features: ["Campañas ROI+", "Retargeting digital", "Casos de éxito", "Portfolio completo"],
    stats: "ROAS Optimizado"
  },
  {
    icon: Search,
    title: "Investigación de Mercados",
    description: "Estudios especializados que identifican oportunidades y ventajas competitivas para tu negocio.",
    gradient: "from-secondary to-muted-foreground",
    path: "/investigacion-de-mercados",
    features: ["Análisis cuantitativo", "Estudios cualitativos", "Benchmarking", "N=10k respondentes/año"],
    stats: "Datos Precisos"
  },
  {
    icon: Rocket,
    title: "Transformación Digital",
    description: "Asesorías tecnológicas, capacitaciones especializadas y consultorías para automatización de procesos y modernización sin detener tu operación.",
    gradient: "from-accent to-orange-500",
    path: "/transformacion-digital",
    features: ["Asesoría tecnológica", "Capacitación especializada", "RPA Automation", "Modernización sin parar"],
    stats: "Sin Interrupciones"
  },
  {
    icon: Shield,
    title: "Ética y Tratamiento de Datos",
    description: "Garantizamos que los datos son seguros y trabajamos bajo la Ley Orgánica de Protección de Datos  (15/1999).",
    gradient: "from-blue-vivid to-primary",
    path: "/etica-y-tratamiento-de-datos",
    features: ["Cumplimiento LOPD", "Auditorías de seguridad", "Capacitación GDPR", "Monitoreo 24/7"],
    stats: "Totalmente Seguro"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30 theme-instant">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Servicios que{" "}
            <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
              Impulsan tu Crecimiento
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones completas que abarcan desde el análisis inicial hasta el crecimiento proyectado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link key={service.title} to={service.path}>
              <Card 
                className="group relative p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card animate-fade-in cursor-pointer overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Simple CTA indicator */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.stats}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
