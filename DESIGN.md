---
name: IonosHub
description: Ecosistema digital modular para empresas en Ecuador — de datos a resultados.
colors:
  primary: "hsl(205 100% 37%)"
  primary-active: "hsl(205 100% 30%)"
  blue-vivid: "hsl(200 100% 45%)"
  accent: "hsl(22 100% 63%)"
  surface-dark: "hsl(214 23% 23%)"
  surface-dark-elevated: "hsl(215 20% 18%)"
  surface-soft: "hsl(0 0% 97%)"
  surface-strong: "hsl(220 14% 94%)"
  ink: "hsl(214 23% 23%)"
  body-text: "hsl(220 8% 40%)"
  border: "hsl(220 13% 88%)"
  canvas: "hsl(0 0% 100%)"
typography:
  display:
    fontFamily: "Bakbak One, Monda, sans-serif"
    fontWeight: 400
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Monda, system-ui, sans-serif"
    fontWeight: 400
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  xl: "1.5rem"
  pill: "100px"
spacing:
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-active}"
  button-secondary:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
---

# Design System: IonosHub

## Overview

**Creative North Star: "The Modular Toolkit"**

IonosHub sells a system, not a bundle: six independent modules (content, ads, IONIC, software, analytics) that connect like reusable pieces. The visual system mirrors that idea — a confident, restrained blue-and-ink base with one warm accent used sparingly, expressed through varied but coherent card shells (media-led, dark-metric, hairline-list) rather than one repeated card shape. The brand is Ecuadorian B2B: professional and consultative, not playful, not corporate-cold. Real product screenshots (dashboards, the IONIC agent, mobile apps) and real team/client photography carry proof; icon grids are used sparingly and never as the sole content of a section.

Visual rejections confirmed during this pass: no kicker/eyebrow pills above headings (the heading carries its own weight), no single repeated card shell across every section (the site's earlier "generic" feel came from over-using one hairline card everywhere), no fabricated metrics or claims not present in PRODUCT.md's Evidence on Hand.

**Key Characteristics:**
- Restrained color strategy: neutrals + ink, with the primary blue carrying CTAs/links and the orange accent reserved for rare emphasis (progress dots, small highlights).
- Editorial section rhythm: generous `py-24` bands alternating white / soft-gray / dark-ink backgrounds.
- Proof over icons: real screenshots and photography lead wherever the content allows it.
- Pill-shaped CTAs, large rounded (24px) cards, hairline borders instead of heavy shadows.

## Colors

Restrained palette: one confident brand blue, one warm accent used at low frequency, and a dark-ink surface used as a structural band (not just text color).

### Primary
- **Celeste Vívido** (`hsl(205 100% 37%)` / `#006EBD`): primary CTAs, links, active states, focus ring.
- **Gris Cielo** (`hsl(200 100% 45%)` / `#0099E6`, token `blue-vivid`/`blue-light`): secondary blue used in gradients and the hero atmosphere glow.

### Secondary
- **Naranja Cálido** (`hsl(22 100% 63%)` / `#FF8C42`, token `accent`): used sparingly — small live-status dots, rare highlight moments. Never a large surface fill.

### Neutral
- **Ink** (`hsl(214 23% 23%)` / `#2D3748`): headings, body text, and the dark section-band background (`surface-dark`).
- **Body** (`hsl(220 8% 40%)`): secondary/supporting text.
- **Surface Soft** (`hsl(0 0% 97%)`): alternating section background.
- **Surface Strong** (`hsl(220 14% 94%)`): tinted chips, badge-pill background, hover fills.
- **Border** (`hsl(220 13% 88%)`): hairline borders on cards, dividers, inputs.

### Named Rules
**The One Accent Rule.** The orange accent appears in at most one small element per section — a status dot, a single highlighted word. It never fills a card, button, or large surface.

## Typography

**Display Font:** Bakbak One (with Monda, sans-serif fallback)
**Body Font:** Monda (with system-ui, sans-serif fallback)

**Character:** Bakbak One is a geometric, slightly rounded display face used only for headings — it gives the brand a confident, modern-tech voice without going playful. Monda is a clean, humanist sans for body copy and UI text, keeping long-form content readable.

### Hierarchy
- **Display** (400, `text-4xl`–`text-6xl`, tracking `-0.02em`): H1/H2 headings, always Bakbak One.
- **Body** (400, `text-base`–`text-lg`, line-height relaxed): paragraph copy, Monda.
- **Label** (600, `text-xs`, uppercase tracking-wider on module codes and eyebrow-style labels only when functional, e.g. "M1", never as a decorative kicker above a heading): small metadata.

### Named Rules
**The No-Kicker Rule.** No pill/eyebrow label sits above a heading purely for decoration. If a heading needs a small label, it's a functional identifier (module code, date), not a category tag.

## Layout

Container max-width 1200px (`max-w-content`), centered with `px-4`/`px-8` padding. Section rhythm: `py-24` (`section-band`/`section-band-soft`/`section-band-dark` utility classes alternate white, soft-gray, and dark-ink backgrounds down the page). Grids are responsive (`sm:grid-cols-2 lg:grid-cols-3/4`), with two-column split layouts (copy + visual) used for Hero, PainPoints, EcosystemLego, and service-page heroes.

## Elevation & Depth

Hybrid: flat by default, soft elevation on hover and on media cards. Cards rest on a 1px hairline border rather than a resting shadow; hover states add a soft, low-opacity shadow. Media cards (screenshots, dashboards) use a stronger shadow to read as "floating proof" — offset, blurred, never a hard block shadow.

### Shadow Vocabulary
- **Resting card** (`border: 1px solid hsl(var(--border))`, no shadow): the default card state.
- **Card hover** (`0 4px 12px rgba(0,0,0,0.04)` to `0 10px 24px rgba(0,0,0,0.08)`): feature-card and feature-card-media hover.
- **Media proof** (`0 16-20px 36-50px rgba(0,0,0,0.1-0.2)`): floating screenshot compositions (Hero, service hero, metric chips).

### Named Rules
**The Hairline-First Rule.** A card's resting state is a border, not a shadow. Shadow is earned on hover or when the card carries floating media.

## Shapes

Large, soft radii throughout: `0.75rem` (12px) default, `1.5rem` (24px) for cards (`rounded-xl`/`rounded-3xl`), full pill (`100px`) for every button and badge. No sharp corners anywhere in the system — the roundedness is a consistent brand signature.

## Components

### Buttons
- **Shape:** full pill (`rounded-pill`, 100px).
- **Primary:** `bg-primary` / white text, `h-11`–`h-14` depending on CTA weight, hover darkens to `primary-active`.
- **Secondary:** `bg-surface-strong` / ink text, hover to `border` color.
- **Outline-dark:** white border/text on dark bands (`section-band-dark`, dark hero visuals).

### Cards / Containers
Three purposeful variants, chosen by content, not applied uniformly:
- **`feature-card`** — hairline border, white background, `rounded-3xl`, `p-8`. Used for dense text content (FAQ-adjacent lists, includes-lists via `feature-row`, resource cards).
- **`feature-card-media`** — same shell with a top `16:10` image frame (`feature-card-media-frame`) for screenshot/dashboard proof, used in Services and service-page heroes.
- **`feature-card-metric`** — dark-ink background, one large display-font number, used where a result/metric is the point (HomeCases, CasosDeExito highlight).

### Inputs / Fields
shadcn `Input`/`Select`/`Textarea` throughout — no native `<select>`/`<textarea>` mixed in. `rounded-xl`, `border-input`, focus ring in primary blue.

### Accordion (FAQ)
Each item is its own `rounded-2xl` bordered card (not a flat divided list); the trigger's chevron is recolored into a small circular toggle that fills primary-blue and rotates 45° open, echoing a plus/close affordance without a literal plus icon.

### Navigation
Sticky white header with backdrop blur, dropdown mega-menu via Framer Motion for "Servicios", mobile drawer. Active/hover states darken to primary blue.

## Do's and Don'ts

### Do:
- **Do** reserve the orange accent for single small elements — never a section-wide fill.
- **Do** lead proof-oriented sections (Services, Hero, case studies) with real screenshots or photography over icon grids.
- **Do** keep every card fully pill/rounded-corner — no sharp edges.
- **Do** use `feature-card-metric` (dark ground) when the content is a single standout number/result.

### Don't:
- **Don't** stack a badge-pill "kicker" above a heading purely for label decoration.
- **Don't** reuse the exact same `feature-card` shell for every section on a page — vary media-card, metric-card, and hairline-row treatments by content role.
- **Don't** invent metrics, testimonials, or benchmark numbers not present in PRODUCT.md's Evidence on Hand.
- **Don't** mix native `<select>`/`<textarea>` with shadcn `Input` in the same form.
