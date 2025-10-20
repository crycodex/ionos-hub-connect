import { 
  Target, Award, Globe, Heart, Lightbulb, Shield, Zap,
  Building, TrendingUp, CheckCircle, Star, Clock, Users2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function QuienesSomos() {
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20">
                <img 
                  src="/imgs/no gringa.jpg" 
                  alt="Especialista en Datos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2 text-lg">María González</h4>
              <p className="text-primary font-medium mb-1">Directora de Datos</p>
              <p className="text-sm text-muted-foreground">+8 años experiencia en Business Intelligence</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20">
                <img 
                  src="/imgs/gringo loco.jpg" 
                  alt="Especialista en IA" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2 text-lg">David Chen</h4>
              <p className="text-primary font-medium mb-1">Lead AI Engineer</p>
              <p className="text-sm text-muted-foreground">Especialista en Machine Learning</p>
            </Card>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Nuestros Logros</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Números que respaldan nuestra experiencia y compromiso con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">+50</div>
              <div className="text-sm text-muted-foreground">Empresas Transformadas</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">+5</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">+30</div>
              <div className="text-sm text-muted-foreground">Industrias Atendidas</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
            </Card>
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
