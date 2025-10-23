import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  SiWhatsapp,
  SiCanva, 
  SiGoogledrive,
  SiInstagram,
  SiGmail,
  SiZoom,
  SiGooglemeet,
  SiNotion,
  SiGoogle
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

const BusinessIntelligenceIntegrations: React.FC = () => {
  // Stack tecnológico con logos oficiales (más profesionales)
  const techLogos = [
    { node: <SiWhatsapp className="text-green-500" size={48} />, title: "WhatsApp" },
    { node: <SiCanva className="text-pink-500" size={48} />, title: "Canva" },
    { node: <SiGoogledrive className="text-blue-500" size={48} />, title: "Google Drive" },
    { node: <SiInstagram className="text-pink-600" size={48} />, title: "Instagram" },
    { node: <SiGmail className="text-red-500" size={48} />, title: "Gmail" },
    { node: <SiZoom className="text-blue-600" size={48} />, title: "Zoom" },
    { node: <SiGooglemeet className="text-green-600" size={48} />, title: "Google Meet" },
    { node: <FaFileExcel className="text-green-600" size={48} />, title: "Excel" },
    { node: <SiGoogle className="text-blue-500" size={48} />, title: "Google Sheets" },
    { node: <SiNotion className="text-gray-800" size={48} />, title: "Notion" }
  ];

  const handleWhatsAppIntegrations = () => {
    const message = encodeURIComponent(
      `Hola, me interesa conocer más sobre las integraciones de Business Intelligence.\n\n` +
      `🔗 Herramientas que uso actualmente:\n` +
      `• Comunicación: [WhatsApp, Gmail, Zoom, Google Meet]\n` +
      `• Diseño: [Canva]\n` +
      `• Productividad: [Excel, Google Sheets, Notion]\n` +
      `• Almacenamiento: [Google Drive]\n` +
      `• Redes sociales: [Instagram]\n` +
      `• Búsquedas: [Google]\n\n` +
      `📊 Objetivos:\n` +
      `• Unificar todos mis datos\n` +
      `• Crear dashboards ejecutivos\n` +
      `• Automatizar reportes\n\n` +
      `¿Podrían ayudarme a integrar mis herramientas actuales?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="w-full max-w-5xl mx-auto bg-gradient-to-br from-card to-card/80 border-0 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row h-full w-full">
          {/* Sección de texto y botones - 60% */}
          <div className="flex-1 lg:w-3/5 flex flex-col justify-center items-center text-center px-8 lg:px-12 py-8 lg:py-12">
            <div className="space-y-6 w-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Compatible con tus herramientas actuales
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-blue-light hover:from-primary/90 hover:to-blue-light/90"
                  onClick={handleWhatsAppIntegrations}
                >
                  Ver todas las integraciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleWhatsAppIntegrations}
                >
                  Solicitar Demo Personalizada
                </Button>
              </div>
            </div>
          </div>

          {/* LogoLoop diagonal - 40% */}
          <div className="lg:w-2/5 relative overflow-hidden bg-gradient-to-br from-muted/10 to-muted/5">
            {/* Fila superior */}
            <div 
              className="absolute top-8 left-0 w-full"
              style={{ 
                transform: 'rotate(-2deg)',
                height: '60px',
                overflow: 'hidden'
              }}
            >
              <LogoLoop
                logos={techLogos.slice(0, Math.ceil(techLogos.length / 2))}
                speed={60}
                direction="left"
                logoHeight={40}
                gap={35}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                ariaLabel="Tecnologías de Business Intelligence - Fila Superior"
                style={{ width: '120%' }}
              />
            </div>

            {/* Fila inferior */}
            <div 
              className="absolute bottom-8 left-0 w-full"
              style={{ 
                transform: 'rotate(2deg)',
                height: '60px',
                overflow: 'hidden'
              }}
            >
              <LogoLoop
                logos={techLogos.slice(Math.ceil(techLogos.length / 2))}
                speed={70}
                direction="right"
                logoHeight={40}
                gap={35}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                ariaLabel="Tecnologías de Business Intelligence - Fila Inferior"
                style={{ width: '120%' }}
              />
            </div>

            {/* Overlay sutil para mejor integración */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/20 pointer-events-none" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessIntelligenceIntegrations;
