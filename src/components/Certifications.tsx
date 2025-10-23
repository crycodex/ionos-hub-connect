import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Cloud,
  Lock,
  FileCheck,
  Globe,
  Building
} from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001",
      subtitle: "Gestión de Seguridad",
      description: "Certificación internacional en gestión de seguridad de la información",
      badge: "2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileCheck,
      title: "GDPR Certified",
      subtitle: "Protección de Datos",
      description: "Cumplimiento total con regulaciones europeas de privacidad",
      badge: "Vigente",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "AWS Partner",
      subtitle: "Cloud Solutions",
      description: "Partner oficial de Amazon Web Services para soluciones cloud",
      badge: "Advanced",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Building,
      title: "Microsoft Partner",
      subtitle: "Technology Solutions",
      description: "Partner certificado en Azure y soluciones empresariales Microsoft",
      badge: "Gold",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Google Cloud",
      subtitle: "AI & ML Specialist",
      description: "Especialista certificado en Inteligencia Artificial y Machine Learning",
      badge: "Expert",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "SOC 2 Type II",
      subtitle: "Security & Compliance",
      description: "Auditoría de controles de seguridad y privacidad",
      badge: "2024",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="certificaciones" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Confianza y Excelencia
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certificaciones y <span className="text-primary">Reconocimientos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respaldados por las certificaciones más exigentes de la industria tecnológica
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {cert.badge}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{cert.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-muted-foreground">Verificado</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

