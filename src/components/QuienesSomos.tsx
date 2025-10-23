import { 
  Target, Award, Globe, Heart, Lightbulb, Shield, Zap,
  Building, TrendingUp, CheckCircle, Star, Clock, Users2,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function QuienesSomos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      name: "María González",
      position: "Directora de Datos",
      description: "+8 años experiencia en Business Intelligence",
      image: "/imgs/no gringa.jpg"
    },
    {
      name: "David Chen",
      position: "Lead AI Engineer",
      description: "Especialista en Machine Learning",
      image: "/imgs/gringo loco.jpg"
    },
    {
      name: "Ana Rodríguez",
      position: "Marketing Digital Lead",
      description: "Especialista en Growth Hacking",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendoza",
      position: "Full Stack Developer",
      description: "Especialista en React y Node.js",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Laura Silva",
      position: "UX/UI Designer",
      description: "Especialista en Design Thinking",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Vega",
      position: "Data Scientist",
      description: "Especialista en Python y R",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Patricia López",
      position: "Project Manager",
      description: "Certificada PMP y Agile",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Miguel Torres",
      position: "DevOps Engineer",
      description: "Especialista en AWS y Docker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sofia Herrera",
      position: "Business Analyst",
      description: "Especialista en Procesos de Negocio",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Diego Morales",
      position: "Cybersecurity Specialist",
      description: "Certificado CISSP y Ethical Hacker",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Valentina Cruz",
      position: "QA Engineer",
      description: "Especialista en Testing Automatizado",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Andrés Jiménez",
      position: "Cloud Architect",
      description: "Especialista en Azure y GCP",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const getCurrentSlideMembers = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return teamMembers.slice(startIndex, startIndex + cardsPerSlide);
  };
  return (
    <section id="quienes-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nuestra Historia</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Quienes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo de expertos apasionados por transformar datos en resultados tangibles 
            para empresas de todos los tamaños.
          </p>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar el acceso a tecnologías avanzadas de datos e inteligencia artificial, 
              haciendo que cada empresa pueda tomar decisiones informadas y crecer de manera sostenible.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser el partner tecnológico de confianza para empresas en Latinoamérica, 
              liderando la transformación digital con soluciones éticas y sostenibles.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestros Valores</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Transparencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Innovación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Ética</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Excelencia</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Nuestro Equipo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales multidisciplinarios con experiencia en tecnología, datos y transformación digital.
            </p>
          </div>
          
          {/* Carrusel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {teamMembers
                        .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                        .map((member, index) => (
                          <Card key={`${slideIndex}-${index}`} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                              <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="font-bold mb-3 text-xl">{member.name}</h4>
                            <p className="text-primary font-semibold mb-2 text-lg">{member.position}</p>
                            <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-12 w-12 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-12 w-12 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

          </div>
        </div>


        {/* Certificaciones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Certificaciones y Reconocimientos</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certificaciones que avalan nuestra experiencia y compromiso con la calidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground">Gestión de Seguridad</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">GDPR Certified</h4>
              <p className="text-sm text-muted-foreground">Protección de Datos</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Microsoft Partner</h4>
              <p className="text-sm text-muted-foreground">Soluciones Cloud</p>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Google Cloud</h4>
              <p className="text-sm text-muted-foreground">Especialista IA</p>
            </Card>
          </div>
        </div>

        {/* Compromiso */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">Nuestro Compromiso</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nos comprometemos a entregar soluciones que no solo cumplan con los objetivos técnicos, 
            sino que también impulsen el crecimiento sostenible y ético de tu empresa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-medium">Entrega Puntual</span>
            </div>
            <div className="flex items-center gap-3">
              <Users2 className="h-6 w-6 text-primary" />
              <span className="font-medium">Soporte Continuo</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-medium">Garantía Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
