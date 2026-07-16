import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageSeo } from "@/components/PageSeo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceModule } from "@/data/services";
import { services } from "@/data/services";
import { getCaseBySlug } from "@/data/cases";
import { openWhatsApp, waLink } from "@/lib/whatsapp";

interface Props {
  service: ServiceModule;
}

export function ServicePageLayout({ service }: Props) {
  const relatedCase = service.caseSlug ? getCaseBySlug(service.caseSlug) : undefined;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const scrollToContact = () => {
    window.location.href = "/#contacto";
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: "IonosHub" },
    areaServed: "EC",
    url: `https://ionoshub.net${service.route}`,
  };

  return (
    <div className="min-h-screen">
      <PageSeo
        title={service.metaTitle}
        description={service.metaDescription}
        path={service.route}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />
      <Navbar />
      <main className="pt-16">
        <section className="section-band bg-white border-b border-border">
          <div className="container mx-auto max-w-content px-4">
            <p className="badge-pill mb-4">{service.moduleCode}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-3xl mb-5">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {service.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={scrollToContact} className="btn-pill-cta">
                Consulta si este módulo es para ti
              </button>
              <a
                href={waLink(service.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section-band-soft">
          <div className="container mx-auto max-w-content px-4 max-w-3xl">
            <h2 className="font-display text-3xl text-ink mb-4">El problema que resolvemos</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.problem}</p>
          </div>
        </section>

        <section className="section-band">
          <div className="container mx-auto max-w-content px-4">
            <h2 className="font-display text-3xl text-ink mb-8">Qué incluye</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.includes.map((item) => (
                <li key={item} className="feature-card flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {relatedCase && (
          <section className="section-band-soft">
            <div className="container mx-auto max-w-content px-4">
              <h2 className="font-display text-3xl text-ink mb-6">Caso relacionado</h2>
              <article className="feature-card bg-white max-w-2xl">
                <p className="text-xs text-muted-foreground mb-1">{relatedCase.industry}</p>
                <h3 className="text-xl font-semibold mb-2">{relatedCase.client}</h3>
                <p className="text-primary font-display text-2xl mb-4">{relatedCase.highlight}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Reto:</strong> {relatedCase.challenge}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Solución:</strong> {relatedCase.solution}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Resultado:</strong> {relatedCase.result}
                </p>
                <Link to="/casos-de-exito" className="text-sm font-semibold text-primary">
                  Ver todos los casos →
                </Link>
              </article>
            </div>
          </section>
        )}

        <section className="section-band">
          <div className="container mx-auto max-w-content px-4 max-w-2xl">
            <h2 className="font-display text-3xl text-ink mb-6">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible>
              {service.faqs.map((f, i) => (
                <AccordionItem key={f.question} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-band-dark">
          <div className="container mx-auto max-w-content px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              ¿Este módulo encaja en tu negocio?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Agenda un diagnóstico gratuito. Sin precios públicos: armamos la propuesta a tu medida.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button type="button" onClick={scrollToContact} className="btn-pill-cta">
                Agenda tu diagnóstico
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp(service.waMessage)}
                className="btn-pill-outline-dark"
              >
                Hablar con un asesor
              </button>
            </div>
          </div>
        </section>

        <section className="section-band-soft">
          <div className="container mx-auto max-w-content px-4">
            <h2 className="font-display text-2xl text-ink mb-6">Otros módulos del ecosistema</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((s) => (
                <Link key={s.slug} to={s.route} className="feature-card bg-white hover:border-primary/40">
                  <span className="text-xs text-primary font-semibold">{s.moduleCode}</span>
                  <p className="font-semibold mt-1">{s.shortTitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
