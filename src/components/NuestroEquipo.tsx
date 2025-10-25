import { Users, Award, Brain, Zap } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const NuestroEquipo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales especializados en tecnología e innovación, trabajando juntos
            para transformar ideas en soluciones digitales de vanguardia.
          </p>
        </div>

        {/* Grid de Equipo */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Orlidan Montesdeoca - CEO & CTO */}
          <div className="text-center space-y-6">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex items-center justify-center">
                {/* Espacio para imagen */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
              </div>
            </SpotlightCard>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Orlidan Montesdeoca</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">CEO & CTO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialista en Business Analyst y DevOps.
              </p>
            </div>
          </div>

          {/* Cristhian Recalde - COO & Head of Growth */}
          <div className="text-center space-y-6">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(34, 197, 94, 0.2)">
              <div className="flex items-center justify-center">
                {/* Espacio para imagen */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-white" />
                </div>
              </div>
            </SpotlightCard>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Cristhian Recalde</h3>
              <p className="text-green-600 dark:text-green-400 font-medium">COO & Head of Growth</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tech lead Flutter and Web Developer.
              </p>
            </div>
          </div>

          {/* Juan Pablo Vasquez - Solutions Architect & Development Lead */}
          <div className="text-center space-y-6">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="flex items-center justify-center">
                {/* Espacio para imagen */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-white" />
                </div>
              </div>
            </SpotlightCard>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Juan Pablo Vasquez</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Solutions Architect & Development Lead</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experto en Tecnologías de Vanguardia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroEquipo;
