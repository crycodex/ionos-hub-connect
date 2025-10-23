import React from 'react';
import IntegrationsCard from '@/components/IntegrationsCard';

const IntegrationsExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ejemplo de Componente de Integraciones
          </h1>
          <p className="text-lg text-gray-600">
            Componente replicado basado en el diseño de la imagen proporcionada
          </p>
        </div>
        
        <IntegrationsCard />
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Características del Componente
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Diseño Responsivo</h3>
              <p className="text-gray-600 text-sm">
                Se adapta perfectamente a diferentes tamaños de pantalla con diseño móvil primero
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Logos Dinámicos</h3>
              <p className="text-gray-600 text-sm">
                Logos de aplicaciones populares con posiciones y rotaciones realistas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Efectos Hover</h3>
              <p className="text-gray-600 text-sm">
                Animaciones sutiles al pasar el mouse sobre los elementos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsExample;
