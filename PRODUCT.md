# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Ecuadorian businesses broadly (SME through larger companies) exploring digital transformation. No single confirmed segment — the site targets any company in Ecuador evaluating a digital partner, not a narrowly defined persona.

## Product Purpose

IonosHub is a digital consultancy offering a modular ecosystem of services — content strategy, paid advertising, a proprietary AI agent (IONIC), custom software, and analytics/results — that clients can adopt individually or combined. Success is measured by qualified leads booking a free diagnostic ("diagnóstico gratuito") and converting to engagements.

## Positioning

A modular ecosystem, not a rigid agency bundle: clients choose only the services they need (content, pauta/ads, IONIC, software a medida, analítica), and the pieces are designed to interoperate. This is explicitly the differentiator over typical agencies that sell fixed packages.

## Operating Context

- Six core service lines, each with its own route under `/servicios/*`: estrategia-contenido, produccion-visual-audiovisual, pauta-publicidad-digital, ionic-agente-ia, software-a-medida, analitica-resultados.
- Legacy URLs (`/agentes-virtuales`, `/business-intelligence`, `/desarrollo-web-movil`, `/marketing-digital`, `/investigacion-de-mercados`, `/roi-calculator`, `/transformacion-digital`) redirect to current routes — SEO/link equity from a prior IA must be preserved.
- Primary conversion path: homepage → contact form (`#contacto`) → free diagnostic. WhatsApp float CTA is a secondary always-on contact channel (`wa.me/593992249152`).
- Homepage funnel order: Hero → PainPoints → EcosystemLego → Services → Steps → HomeTeam → HomeCases → AdvancedStats → ClientesCarousel → FAQ → ContactForm.
- Also has: team page (`/equipo`), case studies (`/casos-de-exito`), blog/resources (`/blog-recursos`), legal pages.

## Capabilities and Constraints

- Built with Vite + React + TypeScript + Tailwind + shadcn/ui; service pages are lazy-loaded, other pages eager.
- Contact form submits via a single Vercel serverless function (`api/send-email.ts`) using Resend to `info@ionoshub.net`.
- No test suite in the project.
- Deployed on Vercel with SPA catch-all rewrite.

## Brand Commitments

- Spanish-only copy (Ecuador/LatAm market) — no bilingual or English variants.
- Professional, consultative tone — not casual or playful.
- Name "IonosHub" and product name "IONIC" (the AI agent) are fixed identifiers.

## Evidence on Hand

- Real service copy, case studies (`/casos-de-exito`), client logos (`ClientesCarousel`), and team bios (`/equipo`) exist in the codebase. No confirmed testimonials, pricing, or benchmark data beyond what's already in the repo — future work must not fabricate these.

## Product Principles

- Modularity over bundling: every surface should make it legible that services can be adopted independently or combined.
- Outcome-oriented trust: "de datos a resultados" — design and copy should support measurable, credible claims, not vague promises.
- Low-friction path to the free diagnostic: the contact form and WhatsApp CTA are the product's primary conversion mechanisms and should stay prominent.
- Preserve SEO equity: legacy routes and metadata are load-bearing, not incidental.
