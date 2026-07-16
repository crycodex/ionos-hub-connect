import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo } from "@/components/PageSeo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidad = () => {
  const navigate = useNavigate();
  const lastUpdate = "16 de julio de 2026";

  const handleVolver = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Política de privacidad"
        description="Política de privacidad de IonosHub conforme a la LOPDP de Ecuador."
        path="/politica-de-privacidad"
      />
      <Navbar />
      <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleVolver}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Button>
          <div className="h-8 w-px bg-border" />
          <h1 className="font-display text-3xl text-ink">Política de Privacidad</h1>
        </div>

        {/* Información de actualización */}
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Última actualización: {lastUpdate} | Cumplimiento con la Ley Orgánica de Protección de Datos Personales del Ecuador
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Introducción */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Introducción</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En IonosHub, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, 
              utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios de 
              desarrollo de chatbots, análisis de datos, marketing digital y transformación digital.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos comprometemos a cumplir con la <strong className="text-foreground">Ley Orgánica de Protección de 
              Datos Personales del Ecuador</strong> y todas las normativas aplicables en materia de protección de datos 
              personales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política. Si no está de 
              acuerdo con alguna parte de esta política, le solicitamos que no utilice nuestros servicios.
            </p>
          </div>

          {/* 1. Responsable del Tratamiento */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. Responsable del Tratamiento de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El responsable del tratamiento de sus datos personales es:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg mb-4">
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Razón Social:</strong> IonosHub</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Email:</strong> info@ionoshub.net</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Teléfono:</strong> +593 99 224 9152</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Ubicación:</strong> Ecuador - Ibarra</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 (GMT-5)</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Para cualquier consulta relacionada con la protección de sus datos personales, puede contactar a 
              nuestro responsable de protección de datos en la dirección de correo electrónico indicada anteriormente.
            </p>
          </div>

          {/* 2. Datos que Recopilamos */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Datos Personales que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos recopilar y procesar los siguientes tipos de datos personales:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">2.1. Datos de Contacto</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa u organización</li>
              <li>Cargo o posición</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">2.2. Datos de Interacción con Chatbots</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Mensajes y conversaciones con nuestros chatbots</li>
              <li>Consultas e intenciones del usuario</li>
              <li>Historial de interacciones</li>
              <li>Preferencias y configuraciones</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">2.3. Datos Técnicos y de Navegación</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y versión</li>
              <li>Sistema operativo</li>
              <li>Dispositivo utilizado</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Fuentes de tráfico y referencias</li>
              <li>Cookies y tecnologías similares</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">2.4. Datos de Proyectos y Servicios</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Información empresarial proporcionada para desarrollo de proyectos</li>
              <li>Requisitos y especificaciones técnicas</li>
              <li>Datos de usuarios finales de los chatbots desarrollados</li>
              <li>Métricas y reportes de rendimiento</li>
            </ul>
          </div>

          {/* 3. Finalidad del Tratamiento */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. Finalidad del Tratamiento de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sus datos personales serán tratados para las siguientes finalidades:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">3.1. Prestación de Servicios</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Desarrollo e implementación de chatbots y agentes virtuales</li>
              <li>Servicios de Business Intelligence y análisis de datos</li>
              <li>Marketing digital y estrategias de crecimiento</li>
              <li>Transformación digital empresarial</li>
              <li>Desarrollo web y móvil</li>
              <li>Investigación de mercados</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3.2. Comunicación y Atención al Cliente</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Responder a consultas y solicitudes de información</li>
              <li>Enviar presupuestos y propuestas comerciales</li>
              <li>Brindar soporte técnico y atención al cliente</li>
              <li>Enviar comunicaciones sobre nuestros servicios</li>
              <li>Notificaciones importantes sobre cambios en los servicios</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3.3. Mejora y Optimización</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Analizar el uso de nuestros servicios para mejorarlos</li>
              <li>Personalizar la experiencia del usuario</li>
              <li>Desarrollar nuevas funcionalidades basadas en feedback</li>
              <li>Realizar estudios de satisfacción del cliente</li>
              <li>Generar reportes estadísticos agregados</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3.4. Cumplimiento Legal</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Responder a requerimientos de autoridades competentes</li>
              <li>Ejercer o defender derechos en procesos judiciales</li>
              <li>Prevenir y detectar actividades fraudulentas</li>
            </ul>
          </div>

          {/* 4. Base Legal */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Base Legal para el Tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El tratamiento de sus datos personales se fundamenta en las siguientes bases legales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-foreground">Consentimiento:</strong> Cuando usted nos proporciona sus datos voluntariamente para recibir información o contratar nuestros servicios.</li>
              <li><strong className="text-foreground">Ejecución de un contrato:</strong> Para cumplir con las obligaciones derivadas de los contratos de prestación de servicios.</li>
              <li><strong className="text-foreground">Interés legítimo:</strong> Para mejorar nuestros servicios, prevenir fraudes y garantizar la seguridad de nuestros sistemas.</li>
              <li><strong className="text-foreground">Obligación legal:</strong> Para cumplir con requerimientos de autoridades y obligaciones legales aplicables.</li>
            </ul>
          </div>

          {/* 5. Cookies y Tecnologías de Rastreo */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. Cookies y Tecnologías de Rastreo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, analizar 
              el tráfico del sitio y personalizar el contenido. Las cookies que utilizamos incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li><strong className="text-foreground">Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
              <li><strong className="text-foreground">Cookies de rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.</li>
              <li><strong className="text-foreground">Cookies de funcionalidad:</strong> Permiten recordar sus preferencias y configuraciones.</li>
              <li><strong className="text-foreground">Cookies de análisis:</strong> Utilizadas por Google Analytics y herramientas similares para generar estadísticas de uso.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando 
              una cookie. Sin embargo, si rechaza las cookies, algunas partes de nuestro sitio pueden no funcionar correctamente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos Google Analytics para analizar el tráfico de nuestro sitio web. Google Analytics recopila 
              información anónima sobre su uso del sitio. Para más información, consulte la 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Política de Privacidad de Google</a>.
            </p>
          </div>

          {/* 6. Compartir Datos */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. Compartición de Datos con Terceros</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No vendemos, alquilamos ni comercializamos sus datos personales a terceros. Sin embargo, 
              podemos compartir su información en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li><strong className="text-foreground">Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio (hosting, análisis de datos, procesamiento de pagos, etc.), siempre bajo acuerdos de confidencialidad.</li>
              <li><strong className="text-foreground">Cumplimiento legal:</strong> Cuando sea requerido por ley, orden judicial o autoridad competente.</li>
              <li><strong className="text-foreground">Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios.</li>
              <li><strong className="text-foreground">Transacciones empresariales:</strong> En caso de fusión, adquisición o venta de activos, sus datos podrían ser transferidos como parte del negocio.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Todos nuestros proveedores de servicios están obligados a mantener la confidencialidad de sus datos 
              y a utilizarlos únicamente para los fines específicos para los que fueron contratados.
            </p>
          </div>

          {/* 7. Seguridad */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">7. Seguridad de la Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Implementamos medidas técnicas, administrativas y físicas diseñadas para proteger sus datos 
              personales contra acceso no autorizado, pérdida, alteración o destrucción. Estas medidas incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Encriptación de datos en tránsito (SSL/TLS)</li>
              <li>Acceso restringido a datos personales solo para personal autorizado</li>
              <li>Firewalls y sistemas de detección de intrusiones</li>
              <li>Evaluaciones regulares de vulnerabilidades</li>
              <li>Capacitación del personal en materia de protección de datos</li>
              <li>Protocolos de respuesta ante incidentes de seguridad</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              A pesar de nuestros esfuerzos, ningún método de transmisión por Internet o almacenamiento electrónico 
              es 100% seguro. Por lo tanto, no podemos garantizar la seguridad absoluta de sus datos.
            </p>
          </div>

          {/* 8. Retención */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">8. Plazo de Conservación de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines 
              para los que fueron recopilados, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li><strong className="text-foreground">Datos de clientes activos:</strong> Durante la vigencia del contrato de servicios y hasta por 5 años después de su terminación.</li>
              <li><strong className="text-foreground">Datos de contactos y prospectos:</strong> Hasta 3 años desde el último contacto, salvo que solicite su eliminación antes.</li>
              <li><strong className="text-foreground">Datos de navegación:</strong> Hasta 2 años para fines analíticos, luego son anonimizados.</li>
              <li><strong className="text-foreground">Datos requeridos por ley:</strong> Durante el plazo establecido por la normativa aplicable.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Una vez cumplido el plazo de conservación, sus datos serán eliminados de forma segura o anonimizados 
              de manera que no puedan ser identificados.
            </p>
          </div>

          {/* 9. Derechos del Usuario */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">9. Derechos de los Titulares de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conforme a la <strong className="text-foreground">Ley Orgánica de Protección de Datos Personales del Ecuador</strong>, 
              usted tiene los siguientes derechos respecto a sus datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li><strong className="text-foreground">Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted.</li>
              <li><strong className="text-foreground">Derecho de rectificación:</strong> Corregir datos inexactos, incompletos o desactualizados.</li>
              <li><strong className="text-foreground">Derecho de eliminación (derecho al olvido):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong className="text-foreground">Derecho de oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
              <li><strong className="text-foreground">Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado y transferirlos a otro responsable.</li>
              <li><strong className="text-foreground">Derecho a revocar el consentimiento:</strong> Retirar su consentimiento en cualquier momento.</li>
              <li><strong className="text-foreground">Derecho a no ser objeto de decisiones automatizadas:</strong> Solicitar intervención humana en decisiones significativas basadas únicamente en tratamiento automatizado.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para ejercer cualquiera de estos derechos, puede enviarnos una solicitud a 
              <strong className="text-foreground"> info@ionoshub.net</strong> indicando claramente cuál derecho 
              desea ejercer y proporcionando la información necesaria para identificarlo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Responderemos su solicitud dentro de los 15 días hábiles siguientes a la recepción. En caso de 
              solicitudes complejas, este plazo podrá extenderse hasta 30 días hábiles, de lo cual le informaremos.
            </p>
          </div>

          {/* 10. Transferencias Internacionales */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">10. Transferencias Internacionales de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Ecuador. Cuando 
              transferimos datos personales a otros países, nos aseguramos de que existan garantías adecuadas 
              para proteger su información, tales como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Que el país destino cuente con una legislación de protección de datos equivalente a la ecuatoriana.</li>
              <li>Que el receptor haya suscrito cláusulas contractuales tipo que garanticen la protección de los datos.</li>
              <li>Que el receptor cuente con certificaciones reconocidas internacionalmente en materia de seguridad de la información.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Los principales destinos de transferencias internacionales incluyen Estados Unidos (servicios de 
              Google, Microsoft, Amazon Web Services) y la Unión Europea, siempre bajo las salvaguardas mencionadas.
            </p>
          </div>

          {/* 11. Menores de Edad */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">11. Protección de Menores de Edad</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente 
              datos personales de menores de edad. Si tenemos conocimiento de que hemos recopilado datos de 
              un menor, tomaremos medidas para eliminar dicha información lo antes posible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Si usted es padre, madre o tutor legal y cree que su hijo nos ha proporcionado datos personales, 
              por favor contáctenos en <strong className="text-foreground">info@ionoshub.net</strong> para 
              solicitar la eliminación de dicha información.
            </p>
          </div>

          {/* 12. Cambios */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">12. Cambios a esta Política de Privacidad</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras 
              prácticas de información, servicios o requisitos legales. Cualquier modificación será publicada 
              en esta página con la fecha de actualización correspondiente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le recomendamos revisar esta política regularmente para mantenerse informado sobre cómo protegemos 
              su información.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cambios significativos serán comunicados a través de correo electrónico o mediante un aviso 
              destacado en nuestro sitio web antes de que entren en vigor.
            </p>
          </div>

          {/* 13. Contacto */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">13. Información de Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tiene preguntas, inquietudes o desea ejercer sus derechos relacionados con esta Política de 
              Privacidad o el tratamiento de sus datos personales, puede contactarnos:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Email:</strong> info@ionoshub.net</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">WhatsApp:</strong> +593 99 224 9152</p>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">Ubicación:</strong> Ecuador - Ibarra</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 (GMT-5)</p>
            </div>
          </div>

        </div>

      </div>

      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
