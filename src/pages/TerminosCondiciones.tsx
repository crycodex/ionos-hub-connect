import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const TerminosCondiciones = () => {
  const navigate = useNavigate();
  const lastUpdate = "25 de octubre de 2025";

  const handleVolver = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleVolver}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Button>
          <div className="h-8 w-px bg-border" />
          <h1 className="text-3xl font-bold">Términos y Condiciones</h1>
        </div>

        {/* Información de actualización */}
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Última actualización: {lastUpdate} | Legislación ecuatoriana aplicable
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          
          {/* Introducción */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Introducción</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bienvenido a IonosHub. Estos Términos y Condiciones regulan el uso de nuestros servicios de desarrollo 
              de chatbots, análisis de datos y transformación digital. Al acceder o utilizar nuestros servicios, 
              usted acepta cumplir con estos términos y condiciones en su totalidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestros servicios.
            </p>
          </div>

          {/* 1. Definiciones */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. Definiciones</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para efectos de estos términos y condiciones, se entiende por:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-foreground">"IonosHub"</strong> o <strong className="text-foreground">"la Empresa"</strong>: Se refiere a nuestra consultoría especializada en desarrollo de chatbots y transformación digital.</li>
              <li><strong className="text-foreground">"Servicios"</strong>: Incluyen el desarrollo, implementación y mantenimiento de chatbots, análisis de datos, Business Intelligence, marketing digital, transformación digital, desarrollo web y móvil, e investigación de mercados.</li>
              <li><strong className="text-foreground">"Usuario"</strong> o <strong className="text-foreground">"Cliente"</strong>: Persona natural o jurídica que contrata o utiliza nuestros servicios.</li>
              <li><strong className="text-foreground">"Datos Personales"</strong>: Cualquier información que identifique o permita identificar a una persona natural.</li>
              <li><strong className="text-foreground">"Sitio Web"</strong>: La plataforma digital de IonosHub disponible en nuestro dominio.</li>
            </ul>
          </div>

          {/* 2. Descripción de Servicios */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Descripción de Servicios</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IonosHub es una consultoría especializada en transformación digital que ofrece los siguientes servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Desarrollo de chatbots y agentes virtuales inteligentes</li>
              <li>Business Intelligence y análisis de datos</li>
              <li>Marketing digital y estrategias de crecimiento</li>
              <li>Transformación digital empresarial</li>
              <li>Desarrollo web y móvil</li>
              <li>Investigación de mercados</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Todos nuestros servicios están diseñados para cumplir con las normativas legales vigentes en Ecuador 
              y están sujetos a las condiciones específicas acordadas en cada contrato de prestación de servicios.
            </p>
          </div>

          {/* 3. Uso de los Servicios */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. Uso de los Servicios</h2>
            <h3 className="text-xl font-semibold mb-4">3.1. Responsabilidades del Usuario</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El usuario se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Proporcionar información veraz, actualizada y completa</li>
              <li>Utilizar los servicios de manera lícita y ética</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>Mantener la confidencialidad de información sensible</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">3.2. Prohibiciones</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Está estrictamente prohibido:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Utilizar nuestros servicios para actividades ilegales o fraudulentas</li>
              <li>Infringir derechos de propiedad intelectual de terceros</li>
              <li>Intentar acceder no autorizado a nuestros sistemas</li>
              <li>Interferir con el funcionamiento normal de nuestros servicios</li>
              <li>Utilizar nuestros servicios para enviar spam o contenido malicioso</li>
            </ul>
          </div>

          {/* 4. Recopilación y Uso de Datos */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Recopilación y Uso de Datos</h2>
            <h3 className="text-xl font-semibold mb-4">4.1. Datos Recopilados</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para el correcto funcionamiento de nuestros servicios, especialmente en el desarrollo de chatbots, 
              es necesario recopilar ciertos datos de los usuarios finales, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Mensajes e interacciones con el chatbot</li>
              <li>Intenciones y consultas del usuario</li>
              <li>Datos de contacto proporcionados voluntariamente</li>
              <li>Metadatos de conversación (fecha, hora, duración)</li>
              <li>Información de navegación y comportamiento en el sitio web</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4.2. Finalidad del Tratamiento</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los datos recopilados se utilizan exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Proporcionar y mejorar nuestros servicios de chatbot</li>
              <li>Generar reportes y análisis de rendimiento</li>
              <li>Optimizar la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y contractuales</li>
              <li>Desarrollar nuevas funcionalidades basadas en feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4.3. Cumplimiento Legal</h3>
            <p className="text-muted-foreground leading-relaxed">
              IonosHub cumple estrictamente con la <strong className="text-foreground">Ley Orgánica de Protección 
              de Datos Personales de Ecuador</strong> y demás normativas aplicables. Al utilizar nuestros servicios, 
              usted otorga su consentimiento expreso para la recopilación, procesamiento, almacenamiento y análisis 
              de sus datos personales según lo descrito en nuestra Política de Privacidad.
            </p>
          </div>

          {/* 5. Google Analytics y Métricas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. Google Analytics y Métricas</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos Google Analytics y otras herramientas de medición para recopilar información sobre cómo 
              los usuarios interactúan con nuestro sitio web y servicios. Esta información incluye:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Fuente de tráfico y navegación</li>
              <li>Dispositivo y navegador utilizado</li>
              <li>Ubicación geográfica aproximada (ciudad/país)</li>
              <li>Interacciones con elementos del sitio</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Esta información se utiliza para mejorar nuestro sitio web, entender mejor las necesidades de nuestros 
              usuarios y optimizar nuestros servicios. Para más información sobre el uso de cookies, consulte 
              nuestra Política de Cookies.
            </p>
          </div>

          {/* 6. Análisis de Intenciones */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. Análisis de Intenciones del Usuario</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestros sistemas de chatbot analizan las intenciones de los usuarios durante las conversaciones 
              para proporcionar respuestas más precisas y relevantes. Creamos reportes basados en:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Categorías de consultas más frecuentes</li>
              <li>Patrones de comportamiento del usuario</li>
              <li>Tasa de resolución exitosa</li>
              <li>Satisfacción del cliente</li>
              <li>Oportunidades de mejora identificadas</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales identificables son anonimizados en los reportes agregados para proteger 
              la privacidad de los usuarios.
            </p>
          </div>

          {/* 7. Propiedad Intelectual */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">7. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todo el contenido, diseño, software, código fuente y demás elementos de propiedad intelectual 
              de IonosHub están protegidos por las leyes de propiedad intelectual vigentes en Ecuador y 
              tratados internacionales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Queda prohibida la reproducción, distribución o uso no autorizado de nuestros servicios, 
              código o contenido sin el consentimiento expreso por escrito de IonosHub.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Los derechos de propiedad intelectual sobre las soluciones personalizadas desarrolladas para 
              cada cliente serán definidos en el contrato específico de prestación de servicios correspondiente.
            </p>
          </div>

          {/* 8. Limitación de Responsabilidad */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">8. Limitación de Responsabilidad</h2>
            <h3 className="text-xl font-semibold mb-4">8.1. Disponibilidad del Servicio</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos esforzamos por mantener nuestros servicios disponibles 24/7, pero no garantizamos que 
              estarán libres de interrupciones o errores. IonosHub no será responsable por daños indirectos, 
              incidentales o consecuentes que resulten del uso o la imposibilidad de uso de los servicios.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">8.2. Exactitud de la Información</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si bien nos esforzamos por proporcionar información precisa, no garantizamos la exactitud 
              absoluta de todas las respuestas de nuestros chatbots o análisis generados.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">8.3. Responsabilidad del Usuario</h3>
            <p className="text-muted-foreground leading-relaxed">
              El cliente es responsable del uso adecuado de nuestros servicios y de cumplir con todas 
              las leyes aplicables. El usuario indemnizará a IonosHub por cualquier reclamo derivado 
              del uso indebido de nuestros servicios.
            </p>
          </div>

          {/* 9. Confidencialidad */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">9. Confidencialidad</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada 
              durante la prestación de los servicios. Toda la información proporcionada por el cliente 
              será tratada con estricta confidencialidad y utilizada únicamente para la prestación de los 
              servicios contratados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Esta obligación de confidencialidad permanecerá vigente incluso después de la terminación 
              de la relación contractual, salvo que la información sea de dominio público o sea requerida 
              por autoridad competente.
            </p>
          </div>

          {/* 10. Derechos del Usuario */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">10. Derechos del Usuario</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conforme a la legislación ecuatoriana, usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Revocar su consentimiento en cualquier momento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para ejercer estos derechos, contáctenos en: <strong className="text-foreground">info@ionoshub.net</strong>
            </p>
          </div>

          {/* 11. Modificaciones */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">11. Modificaciones a los Términos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IonosHub se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor al momento de su publicación en nuestro sitio web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le recomendamos revisar periódicamente esta página para estar informado sobre cualquier cambio. 
              El uso continuado de nuestros servicios después de la publicación de modificaciones constituye 
              la aceptación de los nuevos términos.
            </p>
          </div>

          {/* 12. Legislación y Jurisdicción */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">12. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estos términos y condiciones se rigen por las leyes de la <strong className="text-foreground">
              República del Ecuador</strong>. Cualquier disputa que surja en relación con estos términos 
              será sometida a la jurisdicción exclusiva de los tribunales competentes de Ecuador.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En caso de conflicto entre las disposiciones de estos términos y condiciones y las condiciones 
              específicas acordadas en contratos individuales, prevalecerán las condiciones del contrato específico.
            </p>
          </div>

          {/* 13. Contacto */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">13. Información de Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para cualquier consulta sobre estos términos y condiciones, protección de datos o para 
              ejercer sus derechos, puede contactarnos:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Razón Social:</strong> IonosHub</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Email:</strong> info@ionoshub.net</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">WhatsApp:</strong> +593 99 224 9152</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Ubicación:</strong> Ecuador - LATAM</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 (GMT-5)</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;

