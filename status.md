# Estado del proyecto: ionos-hub-connect

Fecha: 2025-10-20  
Rama actual: dev

## Inventario y arquitectura
- Build: Vite 5 + React 18 + TypeScript + TailwindCSS + shadcn/ui (Radix)
- Router: react-router-dom (BrowserRouter)
- Estado remoto: @tanstack/react-query
- UI global: `Toaster` + `Sonner` + `TooltipProvider`
- Entrada: `src/main.tsx` monta `App.tsx`
- Rutas: `/` → `src/pages/Index.tsx`, fallback `*` → `src/pages/NotFound.tsx`
- Componentes principales (home): `SliderNavbar`, `Hero`, `Services`, `ValueProposition`, `Architecture`, `CTA`, `Footer`
- Efectos visuales: `BlobCursor.jsx` (GSAP), `MagnetLines.tsx`, `CursorFollower.tsx` (no usado)
- Estilos: `src/index.css` define tokens HSL y dark mode por clase `dark`
- Despliegue: `vercel.json` (output `dist`)

## Dependencias relevantes
- Muchas dependencias Radix/shadcn incluidas (no todas usadas). Oportunidad de reducir bundle.
- GSAP para cursor animado.
- React Query inicializado (sin llamadas aún).

## Hallazgos de seguridad (<REVISIÓN_DE_SEGURIDAD>)
- `window.open` en `Hero.tsx` y `CTA.tsx` usa `_blank` sin `noopener`/`noreferrer` → riesgo de reverse tabnabbing (OWASP A01:2021).
  - Mitigación: `window.open(url, "_blank", "noopener,noreferrer")` o `<a target="_blank" rel="noopener noreferrer">`.
  - Prueba: pulsar CTA y verificar `window.opener === null`.
- `NotFound.tsx` usa `<a href="/">`; preferible `Link` de `react-router-dom`.
- No hay inputs; cuando existan: validar con `zod` y `@hookform/resolvers`.

## Quick wins de rendimiento
- Imágenes: `loading="lazy"` y tamaños explícitos; optimizar `hero.webp` y logos.
- Lazy load: `Services`, `ValueProposition`, `Architecture`, `CTA` con `React.lazy` + `Suspense`.
- GSAP/BlobCursor: desactivar en móvil o `prefers-reduced-motion`.
- Analyzer: añadir `rollup-plugin-visualizer` para inspeccionar bundle.
- Purga: remover paquetes Radix no usados.

## Recomendaciones concretas
1) Seguridad
   - Cambiar `window.open` en `Hero.tsx` y `CTA.tsx` a `noopener,noreferrer`.
   - Usar `<Link to="/">` en `NotFound.tsx`.

2) Rendimiento
   - Lazy de secciones y `loading="lazy"` en imágenes no críticas.
   - Añadir visualizer y condicionar `BlobCursor`.

3) DX/Operación
   - Scripts `analyze` y `preview:dist`.
   - Mover WhatsApp/correos a `.env`.

## Tareas propuestas
- seguridad: corregir `_blank` y `NotFound`.
- rendimiento: lazy secciones e imágenes; `BlobCursor` condicional.
- limpieza: revisar dependencias Radix no usadas.

## Notas
- Tailwind correcto; dark mode por clase.
- Vercel listo para `dist`.


