import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FaAward, 
  FaCheckCircle, 
  FaBolt,
  FaMicrosoft,
  FaGoogle,
  FaDatabase
} from "react-icons/fa";
import { motion } from "framer-motion";

export function Certifications() {
  const certifications = [
    {
      image: "/imgs/certificados/certificadoAzure.webp",
      title: "Microsoft Azure",
      subtitle: "Cloud Computing",
      description: "Certificación oficial en servicios de computación en la nube de Microsoft Azure.",
      badge: "Certificado",
      color: "from-blue-500 to-cyan-500",
      icon: FaMicrosoft
    },
    {
      image: "/imgs/certificados/emblemagoogleCloud.png",
      title: "Google Cloud",
      subtitle: "Cloud Platform",
      description: "Certificación en Google Cloud Platform para desarrollo y despliegue de aplicaciones.",
      badge: "Certificado",
      color: "from-green-500 to-emerald-500",
      icon: FaGoogle
    },
    {
      image: "/imgs/certificados/emblemaOracle.png",
      title: "Oracle Cloud",
      subtitle: "Database & Cloud",
      description: "Certificación en Oracle Cloud Infrastructure y gestión de bases de datos.",
      badge: "Certificado",
      color: "from-red-500 to-orange-500",
      icon: FaDatabase
    }
  ];

  return (
    <section id="certificaciones" className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#0ea5e9]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <Card 
                className="p-8 h-full rounded-[2rem] border border-border bg-card hover:bg-[#0ea5e9]/5 hover:border-[#0ea5e9]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                
                <div className="relative z-10">
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
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-md`}>
                          <cert.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold tracking-tight">{cert.title}</h3>
                          <p className="text-sm text-[#0ea5e9] font-medium">{cert.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border mt-auto">
                      <FaCheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Verificado Oficialmente</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ea5e9]/10 rounded-full border border-[#0ea5e9]/20">
            <FaBolt className="h-4 w-4 text-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#0ea5e9]">
              Competencias validadas a nivel global
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

