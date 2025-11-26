import { useState } from "react";
import { Users, Award, Brain, Zap, Instagram, Linkedin, ChevronDown } from "lucide-react";

const NuestroEquipo = () => {
  const [showDani, setShowDani] = useState(false);
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
            <div className="flex items-center justify-center">
              <img src="/imgs/equipo/orli.jpeg" alt="Orlidan Montesdeoca" className="w-48 h-48 rounded-full shadow-lg object-cover" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Orlidan Montesdeoca</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialista en Business Analyst y DevOps.
              </p>
              <div className="flex justify-center space-x-4 pt-2">
                <a href="https://www.instagram.com/its.orlo" className="text-pink-500 hover:text-pink-600 transition-colors" aria-label="Instagram de Orlidan Montesdeoca">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/orlidan-montesdeoca" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="LinkedIn de Orlidan Montesdeoca">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Cristhian Recalde - COO & Head of Growth */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center">
              <img src="/imgs/equipo/gris.jpeg" alt="Cristhian Recalde" className="w-48 h-48 rounded-full shadow-lg object-cover" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Cristhian Recalde</h3>
              <p className="text-green-600 dark:text-green-400 font-medium">COO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tech lead Flutter and Web Developer.
              </p>
              <div className="flex justify-center space-x-4 pt-2">
                <a href="https://www.instagram.com/cry.code/" className="text-pink-500 hover:text-pink-600 transition-colors" aria-label="Instagram de Cristhian Recalde">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/isnotcristhianr/" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="LinkedIn de Cristhian Recalde">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Juan Pablo Vasquez - Solutions Architect & Development Lead */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center">
              <img src="/imgs/equipo/jp.jpg" alt="Juan Pablo Vasquez" className="w-48 h-48 rounded-full shadow-lg object-cover" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Juan Pablo Vasquez</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Solutions Architect</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experto en Tecnologías de Vanguardia.
              </p>
              <div className="flex justify-center space-x-4 pt-2">
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors" aria-label="Instagram de Juan Pablo Vasquez">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="LinkedIn de Juan Pablo Vasquez">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Botón Ver Más */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowDani(!showDani)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {showDani ? "Ver menos" : "Ver más del equipo"}
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${showDani ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Sección de Dani - Desplegable */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${showDani ? "max-h-[600px] opacity-100 mt-12" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex justify-center">
            <div className="text-center space-y-6 max-w-sm">
              <div className="flex items-center justify-center">
                <img
                  src="/imgs/equipo/dani.jpg"
                  alt="Daniela - Marketing Digital"
                  className="w-48 h-48 rounded-full shadow-lg object-cover ring-4 ring-orange-500/20"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Daniela Ortega</h3>
                <p className="text-orange-600 dark:text-orange-400 font-medium">Marketing Digital</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialista en estrategias digitales y gestión de redes sociales.
                </p>
                <div className="flex justify-center space-x-4 pt-2">
                  <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors" aria-label="Instagram de Daniela">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="LinkedIn de Daniela">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroEquipo;
