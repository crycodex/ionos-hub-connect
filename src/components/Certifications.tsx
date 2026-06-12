import { Badge } from "@/components/ui/badge";
import { AnimatedTiltCard, AnimatedTiltCardProps } from "@/components/ui/animated-card";
import {
  FaAward,
  FaCheckCircle,
  FaBolt,
  FaMicrosoft,
  FaGoogle,
  FaDatabase
} from "react-icons/fa";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Certifications() {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".cert-reveal", stagger: 0.12 });

  const certifications: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    variant: AnimatedTiltCardProps["variant"];
    icon: typeof FaMicrosoft;
  }[] = [
    {
      image: "/imgs/certificados/certificadoAzure.webp",
      title: "Microsoft Azure",
      subtitle: "Cloud Computing",
      description: "Certificación oficial en servicios de computación en la nube de Microsoft Azure.",
      color: "from-blue-500 to-cyan-500",
      variant: "blue",
      icon: FaMicrosoft
    },
    {
      image: "/imgs/certificados/emblemagoogleCloud.png",
      title: "Google Cloud",
      subtitle: "Cloud Platform",
      description: "Certificación en Google Cloud Platform para desarrollo y despliegue de aplicaciones.",
      color: "from-green-500 to-emerald-500",
      variant: "yellow",
      icon: FaGoogle
    },
    {
      image: "/imgs/certificados/emblemaOracle.png",
      title: "Oracle Cloud",
      subtitle: "Database & Cloud",
      description: "Certificación en Oracle Cloud Infrastructure y gestión de bases de datos.",
      color: "from-red-500 to-orange-500",
      variant: "pink",
      icon: FaDatabase
    }
  ];

  return (
    <section id="certificaciones" className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#0ea5e9]/5 to-transparent pointer-events-none" />

      <div ref={revealRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="cert-reveal text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#0ea5e9] border-[#0ea5e9]/30 bg-[#0ea5e9]/5">
            <FaAward className="h-3 w-3 mr-2" />
            Certificaciones Oficiales
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Nuestras <span className="text-[#0ea5e9]">Credenciales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Certificaciones oficiales emitidas por las principales plataformas cloud del mercado.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="cert-reveal group">
              <AnimatedTiltCard variant={cert.variant} className="h-full">
                {/* Certificate Image */}
                <div className={`relative h-48 mb-8 rounded-2xl overflow-hidden bg-white/50 dark:bg-black/20 shadow-inner ${cert.title === 'Oracle Cloud' ? 'p-2' : 'p-6'}`}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-md`}>
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{cert.title}</h3>
                      <p className="text-sm text-[#0ea5e9] font-medium">{cert.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Verified Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <FaCheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Verificado Oficialmente</span>
                  </div>
                </div>
              </AnimatedTiltCard>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="cert-reveal text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ea5e9]/10 rounded-full border border-[#0ea5e9]/20">
            <FaBolt className="h-4 w-4 text-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#0ea5e9]">
              Competencias validadas a nivel global
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
