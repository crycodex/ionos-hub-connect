import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star,
  TrendingUp,
  Users,
  Clock,
  Award
} from "lucide-react";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Director General",
      company: "TechStore Ecuador",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "IonosHub transformó completamente nuestra atención al cliente. Los agentes virtuales manejan el 70% de las consultas, permitiendo que nuestro equipo se enfoque en casos complejos. El ROI fue positivo en solo 3 meses.",
      results: [
        { metric: "+185%", label: "Ventas Online" },
        { metric: "-60%", label: "Tiempo Respuesta" },
        { metric: "24/7", label: "Disponibilidad" }
      ],
      rating: 5,
      date: "Marzo 2024"
    },
    {
      id: 2,
      name: "María Fernanda López",
      position: "CEO",
      company: "BankSolutions",
      industry: "Finanzas",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "La plataforma de Business Intelligence que desarrollaron nos dio visibilidad total de nuestras operaciones. Los dashboards ejecutivos son intuitivos y los análisis predictivos nos ayudaron a identificar oportunidades de $2M en nuevos productos.",
      results: [
        { metric: "$2M", label: "Nuevas Oportunidades" },
        { metric: "+95%", label: "Precisión Forecasting" },
        { metric: "-40%", label: "Costos Operativos" }
      ],
      rating: 5,
      date: "Enero 2024"
    },
    {
      id: 3,
      name: "Roberto Sánchez",
      position: "Gerente de Marketing",
      company: "FashionRetail SA",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote: "Las campañas de marketing digital diseñadas por IonosHub superaron todas nuestras expectativas. El enfoque basado en datos y la personalización nos permitió triplicar nuestra base de clientes en 6 meses con un ROAS excepcional.",
      results: [
        { metric: "4.8x", label: "ROAS Promedio" },
        { metric: "+320%", label: "Base de Clientes" },
        { metric: "-55%", label: "Costo por Adquisición" }
      ],
      rating: 5,
      date: "Febrero 2024"
    },
    {
      id: 4,
      name: "Ana Beatriz Torres",
      position: "Directora de Operaciones",
      company: "LogisticsPro",
      industry: "Logística",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      quote: "La transformación digital que implementó IonosHub revolucionó nuestros procesos. La automatización RPA eliminó tareas repetitivas, y el sistema de tracking en tiempo real mejoró nuestra eficiencia operativa dramáticamente.",
      results: [
        { metric: "-75%", label: "Errores Manuales" },
        { metric: "+50%", label: "Eficiencia Operativa" },
        { metric: "98%", label: "Entregas a Tiempo" }
      ],
      rating: 5,
      date: "Abril 2024"
    },
    {
      id: 5,
      name: "Diego Ramírez",
      position: "VP de Tecnología",
      company: "HealthCare Plus",
      industry: "Salud",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      quote: "El estudio de mercado y la investigación que realizó IonosHub fue fundamental para nuestro lanzamiento de producto. Los insights fueron precisos y nos permitieron entrar al mercado con una estrategia ganadora desde el día uno.",
      results: [
        { metric: "+240%", label: "Proyección vs Real" },
        { metric: "92%", label: "Satisfacción Pacientes" },
        { metric: "6 meses", label: "ROI Break-even" }
      ],
      rating: 5,
      date: "Mayo 2024"
    },
    {
      id: 6,
      name: "Patricia Moreno",
      position: "Directora Legal",
      company: "LegalTech Ecuador",
      industry: "Legal",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      quote: "La asesoría en ética y tratamiento de datos de IonosHub fue excepcional. Logramos certificación GDPR en tiempo récord y ahora tenemos procesos robustos que nos dan ventaja competitiva. Su equipo es altamente profesional.",
      results: [
        { metric: "100%", label: "Cumplimiento GDPR" },
        { metric: "0", label: "Incidentes de Seguridad" },
        { metric: "-80%", label: "Tiempo Auditorías" }
      ],
      rating: 5,
      date: "Marzo 2024"
    }
  ];

  const totalSlides = testimonials.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // 8 seconds per testimonial

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

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Historias de Éxito
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales de empresas que confiaron en IonosHub para su transformación digital
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-2xl border-2 border-primary/10 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Quote className="w-full h-full text-primary" />
            </div>

            <div className="relative z-10">
              {/* Industry Badge */}
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="text-sm">
                  {currentTestimonial.industry}
                </Badge>
                <div className="flex gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Left: Profile */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{currentTestimonial.name}</h3>
                    <p className="text-primary font-semibold mb-1">{currentTestimonial.position}</p>
                    <p className="text-muted-foreground font-medium">{currentTestimonial.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{currentTestimonial.date}</p>
                  </div>
                </div>

                {/* Right: Quote and Results */}
                <div className="lg:col-span-2 space-y-6">
                  <blockquote className="text-lg leading-relaxed text-foreground italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {currentTestimonial.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs lg:text-sm text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full h-10 w-10 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full h-10 w-10 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}

