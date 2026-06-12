# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:8080
npm run build      # Production build (outputs to dist/)
npm run build:dev  # Development build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

There are no tests in this project.

## Architecture

**IonosHub** is a marketing/landing site for a digital consultancy. It's a single-page React app built with Vite + TypeScript + Tailwind + shadcn/ui.

### Routing (`src/App.tsx`)

React Router v6. Service pages (`/agentes-virtuales`, `/business-intelligence`, etc.) are **lazy-loaded** via `React.lazy()` + `Suspense`. All other pages (Index, Team, Blog, legal pages) are eagerly imported. Vercel is configured with a catch-all rewrite to `index.html` for SPA routing.

### Page structure

- `src/pages/Index.tsx` — homepage, composes section components in conversion-funnel order
- `src/pages/servicios/*/` — each service has its own subdirectory with one or more page components
- `src/components/` — section-level components (Hero, Services, ContactForm, etc.)
- `src/components/ui/` — shadcn/ui primitives; do not hand-edit these

### Backend (`api/`)

Single Vercel serverless function: `api/send-email.ts`. Uses the **Resend** SDK to send contact form submissions to `info@ionoshub.net`. The API key is hardcoded in the file (not from env vars).

### Design system

Colors are CSS custom properties defined in `src/index.css` and referenced via Tailwind tokens in `tailwind.config.ts`. Key tokens: `primary` (blue), `accent` (orange), `blue-light`, `blue-vivid`. Dark mode is class-based (`darkMode: ["class"]`).

Custom Tailwind animations: `animate-fade-in`, `animate-fade-in-up`, `animate-scale-in`, `animate-slide-in`, `animate-glow`.

Section spacing convention: `py-20`, container `mx-auto px-4`. Cards use `p-6` or `p-8`.

### Aliases

`@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

### Build optimizations

`vite.config.ts` defines manual chunks: `react-vendor`, `router`, `ui-vendor` (lucide + framer-motion), `icons` (react-icons), `utils`. Terser drops console and debugger in production.

### WhatsApp integration

CTAs open WhatsApp links using `https://wa.me/593992249152?text=...`. The number is hardcoded in multiple components. Always use `encodeURIComponent` on the message and `rel="noopener noreferrer"` on the anchor.

### Deployment

Deployed on Vercel. `vercel --prod` for production, `vercel` for preview.
