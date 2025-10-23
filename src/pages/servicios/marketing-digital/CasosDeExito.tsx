import { ArrowLeft, ShoppingCart, Zap, Heart, BadgeCheck, TrendingUp, Target, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const CasosDeExito = () => {
  const navigate = useNavigate();
  const handleVolver = () => navigate("/marketing-digital");
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola, me interesa revisar más casos de éxito y entender cómo podríamos replicar estos resultados en mi empresa.`
    );
    window.open(`https://wa.me/593992249152?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleVolver}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div className="h-8 w-px bg-border" />
          <h1 className="text-3xl font-bold">Casos de Éxito</h1>
        </div>

        {/* Hero + Métricas */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Resultados Reales</Badge>
          <h2 className="text-4xl font-bold mb-4">Impacto Medible en Diferentes Industrias</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Casos con trazabilidad completa: objetivos claros, acciones concretas y resultados comparables.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">+420%</div>
            <p className="text-sm text-muted-foreground">ROAS Máximo</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">-65%</div>
            <p className="text-sm text-muted-foreground">Reducción de CPA</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">+450%</div>
            <p className="text-sm text-muted-foreground">Leads Calificados</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">1–3m</div>
            <p className="text-sm text-muted-foreground">Tiempo de Impacto</p>
          </Card>
        </div>

        {/* Grid de casos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-commerce */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">E-commerce Moda</h3>
                <p className="text-sm text-muted-foreground">Retail B2C</p>
              </div>
            </div>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Ventas: <span className="font-semibold text-green-500">+280%</span></li>
              <li>• ROAS: <span className="font-semibold text-green-500">5.2x</span></li>
              <li>• CPA: <span className="font-semibold text-green-500">-65%</span></li>
              <li>• Tiempo: <span className="font-semibold">3 meses</span></li>
            </ul>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" /> Objetivo: Escalar ventas
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Q2–Q3
              </div>
            </div>
          </Card>

          {/* SaaS */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">SaaS B2B</h3>
                <p className="text-sm text-muted-foreground">Software empresarial</p>
              </div>
            </div>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Leads calificados: <span className="font-semibold text-green-500">+450%</span></li>
              <li>• Conversión: <span className="font-semibold text-green-500">+180%</span></li>
              <li>• CPL: <span className="font-semibold text-green-500">-40%</span></li>
              <li>• Tiempo: <span className="font-semibold">2 meses</span></li>
            </ul>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" /> Objetivo: Generación de MQLs
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Q1–Q2
              </div>
            </div>
          </Card>

          {/* Restaurante */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Restaurante</h3>
                <p className="text-sm text-muted-foreground">QSR multi-sede</p>
              </div>
            </div>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Pedidos online: <span className="font-semibold text-green-500">+320%</span></li>
              <li>• Recurrentes: <span className="font-semibold text-green-500">+190%</span></li>
              <li>• Engagement: <span className="font-semibold text-green-500">+250%</span></li>
              <li>• Tiempo: <span className="font-semibold">1 mes</span></li>
            </ul>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" /> Objetivo: Pedidos y recurrencia
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Q3
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonio y CTA */}
        <Card className="p-8 mt-14">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">
                “El equipo de IonosHub transformó nuestro performance digital. Pasamos de campañas
                que apenas rendían a una máquina de adquisición rentable y escalable.”
              </p>
              <div className="mt-3 text-sm text-muted-foreground">CMO – Retail Moda LATAM</div>
            </div>
            <div className="text-center">
              <Button className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsApp}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Quiero resultados similares
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CasosDeExito;

