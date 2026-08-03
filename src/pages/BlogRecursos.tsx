import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo } from "@/components/PageSeo";
import { Calendar, Download, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const BlogRecursos = () => {
  const handleWhatsAppDownload = (resource: string) => {
    openWhatsApp(
      `Hola, me interesa descargar el recurso: ${resource}. Me gustaría conocer más sobre los recursos educativos de IonosHub.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Blog y recursos"
        description="Recursos educativos y webinars de IonosHub para acelerar tu transformación digital."
        path="/blog-recursos"
      />
      <Navbar />
      <main className="pt-16">
        <section className="section-band bg-white">
          <div className="container mx-auto max-w-content px-4">
            <div className="max-w-2xl mb-14">
              <h1 className="font-display text-4xl sm:text-5xl text-ink tracking-tight mb-4">
                Conocimiento que transforma
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recursos exclusivos, webinars en vivo y contenido educativo para acelerar tu
                transformación digital.
              </p>
            </div>

            <h2 className="font-display text-2xl text-ink mb-8">Recursos descargables</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                {
                  tag: "E-book",
                  icon: Download,
                  title: "Guía Definitiva de Transformación Digital",
                  text: "45 páginas con frameworks, checklists y casos de estudio para digitalizar tu empresa.",
                  meta: "PDF • 8.5 MB",
                  stat: "2,400+ descargas",
                  cta: "Descargar gratis",
                },
                {
                  tag: "Webinar",
                  icon: Play,
                  title: "Automatización con IA: Casos Reales",
                  text: "Grabación de 60 minutos con demos en vivo y sesión Q&A con expertos.",
                  meta: "MP4 • 1080p",
                  stat: "1,850+ vistas",
                  cta: "Ver grabación",
                },
                {
                  tag: "Podcast",
                  icon: Play,
                  title: "Tech Talks: El Futuro del BI",
                  text: "Serie de 8 episodios con líderes de industria y casos de implementación.",
                  meta: "Audio • Spotify",
                  stat: "3,200+ escuchas",
                  cta: "Escuchar serie",
                },
                {
                  tag: "Template",
                  icon: Download,
                  title: "Dashboard de KPIs Ejecutivos",
                  text: "Plantilla editable de Excel con 25+ métricas empresariales predefinidas.",
                  meta: "XLSX • 2 MB",
                  stat: "4,100+ descargas",
                  cta: "Descargar gratis",
                },
              ].map((r) => (
                <div key={r.title} className="feature-card flex flex-col">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--surface-dark))]">
                    <r.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="badge-pill mb-3 w-fit">{r.tag}</span>
                  <h3 className="text-base font-semibold text-ink mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{r.text}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{r.meta}</span>
                    <span>{r.stat}</span>
                  </div>
                  <Button className="w-full" onClick={() => handleWhatsAppDownload(r.title)}>
                    <r.icon className="mr-2 h-4 w-4" />
                    {r.cta}
                  </Button>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-ink mb-8">Próximos webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  date: "15 de Enero, 2024",
                  time: "3:00 PM - 4:00 PM (GMT-5)",
                  title: "IA Generativa para Empresas",
                  text: "Cómo implementar ChatGPT y herramientas de IA generativa para automatizar procesos y mejorar la productividad.",
                  tags: ["Casos de uso reales", "Demo en vivo", "Q&A"],
                },
                {
                  date: "22 de Enero, 2024",
                  time: "2:00 PM - 3:00 PM (GMT-5)",
                  title: "Business Intelligence Avanzado",
                  text: "Técnicas avanzadas de BI, dashboards interactivos y análisis predictivo para decisiones basadas en datos.",
                  tags: ["Dashboards interactivos", "Análisis predictivo", "Workshop práctico"],
                },
                {
                  date: "29 de Enero, 2024",
                  time: "4:00 PM - 5:00 PM (GMT-5)",
                  title: "Automatización de Procesos",
                  text: "Cómo automatizar procesos repetitivos con RPA, integraciones API y workflows inteligentes.",
                  tags: ["RPA y workflows", "Integraciones API", "ROI de automatización"],
                },
              ].map((w) => (
                <div key={w.title} className="feature-card flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <Calendar className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">{w.date}</div>
                      <div className="text-xs text-muted-foreground">{w.time}</div>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{w.text}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {w.tags.map((t) => (
                      <span key={t} className="badge-pill">{t}</span>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => handleWhatsAppDownload(`Webinar: ${w.title}`)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Registrarse gratis
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band-dark">
          <div className="container mx-auto max-w-content px-4 text-center">
            <h2 className="font-display text-3xl text-white mb-4">¿Necesitas contenido personalizado?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Desarrollamos recursos educativos específicos para tu industria y necesidades.
            </p>
            <Button
              size="lg"
              onClick={() => handleWhatsAppDownload("Contenido Personalizado")}
              className="bg-white text-ink hover:bg-white/90"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Solicitar contenido personalizado
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogRecursos;
