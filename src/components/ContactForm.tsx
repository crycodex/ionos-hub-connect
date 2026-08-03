import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { serviceSelectOptions } from "@/data/services";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

const WEBHOOK_URL = "https://n8n.ionoshub.net/webhook/correos-ionos";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre_negocio_o_persona: "",
    servicio_interes: "",
    telefono: "",
    correo: "",
    nota_detalle: "",
    website: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // bot

    setIsSubmitting(true);
    setStatus("idle");

    const payload = {
      nombre_negocio_o_persona: formData.nombre_negocio_o_persona.trim(),
      servicio_interes: formData.servicio_interes,
      telefono: formData.telefono.trim(),
      correo: formData.correo.trim(),
      nota_detalle: formData.nota_detalle.trim() || null,
      pagina_origen: typeof window !== "undefined" ? window.location.href : "",
      fecha_envio: new Date().toISOString(),
    };

    try {
      // Prefer serverless proxy (CORS-safe); fallback to direct webhook
      let response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 404) {
        response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus("success");
      setFormData({
        nombre_negocio_o_persona: "",
        servicio_interes: "",
        telefono: "",
        correo: "",
        nota_detalle: "",
        website: "",
      });
    } catch (err) {
      console.error("Error enviando lead:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-band-soft" id="contacto-form">
      <div className="container mx-auto max-w-content px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
              Agenda tu diagnóstico gratuito
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cuéntanos qué necesitas. Un asesor te contactará para armar tu ecosistema —
              sin catálogo de precios públicos.
            </p>
            <div className="space-y-4 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-primary">
                <Mail className="h-5 w-5 text-primary" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary"
              >
                <Phone className="h-5 w-5 text-primary" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <div className="feature-card bg-white">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-10 gap-3">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Mensaje enviado</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Recibimos tu solicitud. Te contactaremos pronto para agendar el diagnóstico.
                </p>
                <button type="button" className="btn-pill-secondary mt-4" onClick={() => setStatus("idle")}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                <div>
                  <label htmlFor="nombre_negocio_o_persona" className="block text-sm font-medium mb-1.5">
                    Nombre del negocio o persona *
                  </label>
                  <Input
                    id="nombre_negocio_o_persona"
                    name="nombre_negocio_o_persona"
                    required
                    value={formData.nombre_negocio_o_persona}
                    onChange={handleChange}
                    className="h-12 rounded-xl"
                    placeholder="Ej. Mi Empresa SAS"
                  />
                </div>

                <div>
                  <label htmlFor="servicio_interes" className="block text-sm font-medium mb-1.5">
                    Servicio de interés *
                  </label>
                  <Select
                    value={formData.servicio_interes}
                    onValueChange={(value) => setField("servicio_interes", value)}
                    required
                  >
                    <SelectTrigger id="servicio_interes" className="h-12 rounded-xl">
                      <SelectValue placeholder="Selecciona un módulo" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceSelectOptions.map((o) => (
                        <SelectItem key={o.value} value={o.label}>
                          {o.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="Ecosistema completo / no sé aún">
                        Ecosistema completo / no sé aún
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-1.5">
                      Teléfono *
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      pattern="[\d\s+\-()]{7,20}"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="h-12 rounded-xl"
                      placeholder="099..."
                    />
                  </div>
                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium mb-1.5">
                      Correo electrónico *
                    </label>
                    <Input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      className="h-12 rounded-xl"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nota_detalle" className="block text-sm font-medium mb-1.5">
                    Nota de detalle (opcional)
                  </label>
                  <Textarea
                    id="nota_detalle"
                    name="nota_detalle"
                    rows={3}
                    value={formData.nota_detalle}
                    onChange={handleChange}
                    className="rounded-xl"
                    placeholder="Cuéntanos brevemente tu reto..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/5 rounded-xl p-3">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>
                      No pudimos enviar el mensaje. Intenta de nuevo o escríbenos por{" "}
                      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                        WhatsApp
                      </a>
                      .
                    </span>
                  </div>
                )}

                <Button type="submit" disabled={isSubmitting} className="btn-pill-primary w-full h-12 border-0">
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar y agendar diagnóstico
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar aceptas nuestra{" "}
                  <a href="/politica-de-privacidad" className="underline hover:text-foreground">
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
