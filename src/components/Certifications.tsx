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
      description: "Certificación oficial en servicios de computación en la nube de Microsoft Azure",
      badge: "Certificado",
      color: "from-blue-500 to-cyan-500",
      icon: FaMicrosoft
    },
    {
      image: "/imgs/certificados/emblemagoogleCloud.png",
      title: "Google Cloud",
      subtitle: "Cloud Platform",
      description: "Certificación en Google Cloud Platform para desarrollo y despliegue de aplicaciones",
      badge: "Certificado",
      color: "from-green-500 to-emerald-500",
      icon: FaGoogle
    },
    {
      image: "/imgs/certificados/emblemaOracle.png",
      title: "Oracle Cloud",
      subtitle: "Database & Cloud",
      description: "Certificación en Oracle Cloud Infrastructure y gestión de bases de datos",
      badge: "Certificado",
      color: "from-red-500 to-orange-500",
      icon: FaDatabase
    }
  ];

  return (
    <section id="certificaciones" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <FaAward className="h-3 w-3 mr-1" />
            Certificaciones Oficiales
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certificaciones <span className="text-primary">Cloud</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certificaciones oficiales de las principales plataformas cloud del mercado
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-6 hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Certificate Image */}
                  <div className={`relative h-48 mb-6 rounded-xl overflow-hidden bg-white shadow-lg ${cert.title === 'Oracle Cloud' ? 'p-2' : 'p-4'}`}>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute ${cert.title === 'Oracle Cloud' ? 'inset-2' : 'inset-4'} bg-gradient-to-t from-black/5 to-transparent rounded-lg`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-md`}>
                          <cert.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{cert.title}</h3>
                          <p className="text-sm text-primary font-semibold">{cert.subtitle}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs font-semibold">
                        {cert.badge}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                      <FaCheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-muted-foreground font-medium">Certificación Oficial</span>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <FaBolt className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Certificaciones actualizadas y vigentes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

