import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface IntegrationLogo {
  name: string;
  logo: React.ReactNode;
  position: {
    top: string;
    left: string;
    rotate?: number;
    scale?: number;
  };
}

const IntegrationsCard: React.FC = () => {
  // Definir los logos de las aplicaciones con sus posiciones
  const integrationLogos: IntegrationLogo[] = [
    {
      name: 'Mailchimp',
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
          MC
        </div>
      ),
      position: { top: '10%', left: '75%', rotate: 0, scale: 1 }
    },
    {
      name: 'Slack',
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">S</span>
          </div>
        </div>
      ),
      position: { top: '35%', left: '45%', rotate: -5, scale: 1.1 }
    },
    {
      name: 'Zapier',
      logo: (
        <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          Z
        </div>
      ),
      position: { top: '50%', left: '60%', rotate: 8, scale: 0.9 }
    },
    {
      name: 'Google Ads',
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">A</span>
        </div>
      ),
      position: { top: '25%', left: '70%', rotate: -3, scale: 0.8 }
    },
    {
      name: 'Gmail',
      logo: (
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">G</span>
        </div>
      ),
      position: { top: '65%', left: '55%', rotate: 4, scale: 0.7 }
    },
    {
      name: 'Shopify',
      logo: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
          S
        </div>
      ),
      position: { top: '15%', left: '80%', rotate: -8, scale: 0.9 }
    },
    {
      name: 'Zapier Duplicate',
      logo: (
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
          Z
        </div>
      ),
      position: { top: '70%', left: '80%', rotate: 12, scale: 0.6 }
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white border-0 shadow-lg rounded-xl overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Sección de texto */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Compatible con tus herramientas actuales
            </h2>
            <p className="text-xl lg:text-2xl font-bold text-gray-600 mb-4">
              y más de 1900 integraciones.
            </p>
            <a 
              href="#" 
              className="inline-block text-orange-500 hover:text-orange-600 font-medium text-lg underline decoration-orange-500 decoration-2 underline-offset-2 transition-colors duration-200"
            >
              Ver todas las integraciones
            </a>
          </div>

          {/* Sección de logos */}
          <div className="flex-1 relative h-80 w-full">
            <div className="relative w-full h-full bg-white rounded-lg">
              {integrationLogos.map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="absolute transition-transform duration-300 hover:scale-110 hover:z-10"
                  style={{
                    top: integration.position.top,
                    left: integration.position.left,
                    transform: `rotate(${integration.position.rotate || 0}deg) scale(${integration.position.scale || 1})`,
                  }}
                >
                  {integration.logo}
                </div>
              ))}
              
              {/* Logos adicionales para crear más densidad */}
              <div className="absolute top-5 left-10 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold rotate-6">
                H
              </div>
              <div className="absolute top-20 left-15 w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold -rotate-12">
                D
              </div>
              <div className="absolute top-40 left-5 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold rotate-45">
                W
              </div>
              <div className="absolute top-60 left-25 w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold -rotate-6">
                T
              </div>
              <div className="absolute top-30 left-85 w-5 h-5 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xs font-bold rotate-90">
                F
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationsCard;
