import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Mail, 
  Phone,
  User,
  Send,
  CheckCircle,
  MapPin,
  Clock,
  Calendar
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Business Intelligence y Análisis de Datos",
    "Automatización de Procesos",
    "Agentes Virtuales e IA Conversacional",
    "Estudios de Mercado e Investigación",
    "Transformación Digital Empresarial",
    "Consultoría en Tecnología",
    "Desarrollo Web / Móvil",
    "Otro"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el correo');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  const handleWhatsAppDirect = () => {
    window.open("https://wa.me/593992249152?text=Hola,%20quiero%20información%20sobre%20IonosHub", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="contacto-form">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="h-3 w-3 mr-1" />
            Hablemos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comienza Tu <span className="text-primary">Transformación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Déjanos tus datos y un especialista se pondrá en contacto en menos de 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-2">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Correo Electrónico *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Teléfono *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+593 99 123 4567"
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      ¿En qué podemos ayudarte? *
                    </label>
                    <select
                    title="Servicio de Interés"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">Selecciona una opción</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos más sobre tu proyecto o consulta..."
                      required
                      rows={4}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-primary to-blue-light hover:from-primary/90 hover:to-blue-light/90 text-white font-semibold text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Solicitud
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos.
                </p>

                {/* Google Maps */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Nuestra Ubicación
                  </h4>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d-78.123!3d0.348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3b8c8c8c8c8c%3A0x8e2a3b8c8c8c8c8c!2sIbarra%2C%20Imbabura%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de IonosHub - Ibarra, Imbabura, Ecuador"
                    />
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground mb-6">
                  Gracias por tu interés. Un especialista se pondrá en contacto contigo pronto.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Enviar Otro Mensaje
                </Button>
              </div>
            )}
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-blue-light/10 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">¿Prefieres Contacto Directo?</h3>
              
              <div className="space-y-4 mb-6">
                <a 
                  href="https://wa.me/593992249152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">+593 99 224 9152</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@ionoshub.net"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">Email</div>
                    <div className="text-sm text-muted-foreground">info@ionoshub.net</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Ubicación</div>
                    <div className="text-sm text-muted-foreground">Ecuador • Ibarra</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Horario de Atención
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="pt-3 mt-3 border-t border-border">
                  <Badge variant="secondary" className="w-full justify-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Soporte 24/7 por WhatsApp
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
}

