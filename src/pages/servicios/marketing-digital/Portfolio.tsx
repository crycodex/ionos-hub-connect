import { ArrowLeft, FolderKanban, Image, FileText, Video, Link, Filter, Calendar, Download, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const handleVolver = () => navigate("/marketing-digital");
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola, me gustaría recibir el portfolio completo y ejemplos específicos para mi industria.`
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
          <h1 className="text-3xl font-bold">Portfolio Completo</h1>
        </div>

        {/* Hero + Filtros */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Selección Curada</Badge>
          <h2 className="text-4xl font-bold mb-4">Portfolio de Campañas y Materiales</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compendio de creatividades, reportes y piezas audiovisuales de alto rendimiento.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-center mb-12">
          <Badge variant="secondary" className="cursor-default">
            <Filter className="h-3 w-3 mr-1" /> Filtro rápido: E-commerce, SaaS, Retail
          </Badge>
          <Badge variant="outline" className="cursor-default">Últimos 12 meses</Badge>
          <Badge variant="outline" className="cursor-default">CTR &gt; 3%</Badge>
        </div>

        {/* Grid de items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Image className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Creatividades de Alto Rendimiento</h3>
                <p className="text-sm text-muted-foreground">Display / Social / Video</p>
              </div>
            </div>
            <ul className="text-sm space-y-2">
              <li>• 20+ banners y anuncios con CTR &gt; 3%</li>
              <li>• Plantillas editables para iterar rápido</li>
              <li>• Guía de mejores prácticas</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Reportes Ejecutivos</h3>
                <p className="text-sm text-muted-foreground">Formato PDF + Dashboard</p>
              </div>
            </div>
            <ul className="text-sm space-y-2">
              <li>• KPIs clave y conclusiones accionables</li>
              <li>• Atribución y ROAS por canal</li>
              <li>• Checklist de optimización</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Piezas Audiovisuales</h3>
                <p className="text-sm text-muted-foreground">YouTube / TikTok / Reels</p>
              </div>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Storyboards y guiones</li>
              <li>• Edición y animación</li>
              <li>• Paquetes por industria</li>
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-2">¿Quieres ver el portfolio completo?</h3>
              <p className="text-muted-foreground">Te enviamos un paquete con ejemplos por industria y un dossier PDF con casos explicados.</p>
            </div>
            <div className="flex gap-3 justify-center md:justify-end">
              <Button variant="outline" onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}>
                <Download className="h-4 w-4 mr-2" /> Descargar Dossier
              </Button>
              <Button className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsApp}>
                <MessageCircle className="h-4 w-4 mr-2" /> Solicitar Demo
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;

