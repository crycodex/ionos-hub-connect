import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star,
  Building,
  Cloud,
  Lock,
  FileCheck,
  Globe,
  TrendingUp,
  Users,
  Zap
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

  const partnerships = [
    { name: "Salesforce", role: "Implementation Partner" },
    { name: "HubSpot", role: "Solutions Partner" },
    { name: "MongoDB", role: "Technology Partner" },
    { name: "OpenAI", role: "Developer Partner" },
    { name: "Stripe", role: "Verified Partner" },
    { name: "Twilio", role: "ISV Partner" }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Top 10 Tech Companies",
      description: "Ecuador 2024",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Innovation Award",
      description: "LATAM Tech Summit",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Best Growth",
      description: "Startup Awards 2023",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "98% NPS Score",
      color: "text-blue-500"
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

        {/* Technology Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Partnerships <span className="text-primary">Tecnológicos</span>
          </h3>
          
          <Card className="p-8 max-w-5xl mx-auto border-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnerships.map((partner, index) => (
                <div 
                  key={index}
                  className="text-center space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-sm">{partner.name}</div>
                  <div className="text-xs text-muted-foreground">{partner.role}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Premios y <span className="text-primary">Logros</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4`} />
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-blue-light/10 border-2 border-primary/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div>
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">0</div>
                <div className="text-sm text-muted-foreground">Brechas de Seguridad</div>
              </div>
              <div>
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Certificaciones</div>
              </div>
              <div>
                <Star className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">5+ Años</div>
                <div className="text-sm text-muted-foreground">En el Mercado</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

