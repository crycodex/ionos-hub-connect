# PRD — Rediseño Web IonosHub
**Producto:** Sitio web corporativo (Landing + páginas de servicio)
**Versión:** 1.1
**Fecha:** Julio 2026
**Dominio actual:** ionoshub.net
**Preparado para:** Equipo de desarrollo
**Fuentes:** Brandbook IonosHub 2025, Manual Comercial & Estrategia de Precios 2025-2026, entrevista de descubrimiento con el cliente

---

## 1. Resumen ejecutivo

IonosHub es una empresa ecuatoriana de **transformación digital** que opera bajo un modelo de **ecosistemas digitales modulares y personalizados** ("Sistema LEGO"): no vende servicios sueltos, sino que arma con cada cliente un ecosistema hecho de módulos (estrategia de contenido, producción visual, cobertura audiovisual, pauta digital, agente de IA "IONIC", software a medida y analítica) que se conectan entre sí.

El sitio actual (ionoshub.net) es una SPA cuyo contenido no es visible en el HTML inicial, lo que limita gravemente su indexación en buscadores. El objetivo de este proyecto es **rediseñar el sitio como una plataforma multi-página (Home + Equipo + páginas de servicio)**, con foco en:

1. **Posicionar marca y autoridad técnica** (objetivo de negocio principal — no venta directa ni solo generación de leads).
2. **SEO técnico y de contenido robusto**, corrigiendo el problema de indexación actual.
3. **Experiencia visual dinámica y de diseño premium** (nivel de animación medio: parallax, contadores, micro-interacciones), 100% responsive — con énfasis explícito del cliente en que el diseño debe priorizarse por encima de lo puramente funcional.
4. **Funcionalidades de conversión**: formulario calificador conectado a webhook propio, WhatsApp, casos de éxito con métricas reales.

> ⚠️ **Regla de negocio importante:** el sitio web es una herramienta de **posicionamiento y calificación de leads**, no un catálogo de precios. Los precios del ecosistema son parte de un proceso comercial de 7 etapas (diagnóstico → propuesta personalizada → cierre), documentado en el Manual Comercial interno. **Ningún precio, tarifa o rango de inversión debe publicarse en el sitio web público.** El CTA del sitio siempre apunta a "agendar un diagnóstico" o "hablar con un asesor", nunca a "ver precios".

Este documento es la referencia única para el desarrollador: define alcance, arquitectura, contenido, SEO, funcionalidades, diseño y criterios de aceptación.

---

## 2. Objetivos y KPIs

| Objetivo | Métrica / KPI | Meta sugerida (revisar con cliente) |
|---|---|---|
| Posicionamiento SEO local | Palabras clave en Top 10 (Google Ecuador) | 8–10 keywords en 6 meses |
| Indexación técnica | Páginas indexadas en Search Console | 100% de páginas publicadas |
| Autoridad de marca | Tiempo en sitio / páginas por sesión | +40% vs. sitio actual |
| Generación de leads calificados | Envíos de formulario / conversaciones WhatsApp | Definir con cliente tras lanzamiento |
| Rendimiento técnico | Core Web Vitals (LCP, CLS, INP) | "Good" en PageSpeed Insights (móvil y escritorio) |

> ⚠️ **Pendiente de cliente:** confirmar metas numéricas de negocio (leads/mes, tráfico objetivo).

---

## 3. Público objetivo (Buyer Personas)

Basado en el modelo de ecosistema modular y el contexto de mercado en Ecuador:

- **Persona 1 — Emprendedor / negocio en digitalización temprana (0-2 años):** sin presencia digital sólida, procesos manuales (Excel, papel), necesita empezar con módulos base (estrategia + contenido + agente IA). Ej. tipo "El Chipotle", "Ecu593 English" en sus inicios.
- **Persona 2 — Negocio en crecimiento que quiere escalar ventas:** ya tiene redes/presencia, pero pierde leads por atención manual o falta de pauta estructurada. Ej. tipo "Pawau" (perdía clientes por atención manual).
- **Persona 3 — Empresa/institución establecida que busca presencia y automatización integral:** necesita cobertura audiovisual recurrente, gestión de marketing profesional y/o software a medida. Ej. tipo "Unidad Educativa La Victoria".

> ⚠️ **Pendiente de cliente:** validar personas y confirmar si se prioriza algún sector específico en el copy (educación, gastronomía/retail, servicios, comunidades/formación).

---

## 4. Modelo de negocio — Sistema LEGO (contexto para el desarrollador)

Esta sección **no es contenido público del sitio tal cual**, pero el desarrollador debe entenderla para que la estructura de información, el copy y los CTAs sean coherentes con cómo IonosHub vende realmente.

### 4.1 Filosofía
IonosHub no vende servicios sueltos: construye **ecosistemas digitales vivos**, personalizados y escalables, donde los módulos se conectan entre sí (el contenido alimenta la pauta, la pauta trae leads, el agente IONIC clasifica los leads, el software los gestiona).

### 4.2 Los 7 módulos del ecosistema (fuente: Manual Comercial 2025-2026)

| Código | Módulo | Qué incluye (resumen para copy web) |
|---|---|---|
| **M1** | Estrategia & Planificación de Contenido | Cronograma mensual, guiones, copys asistidos por IA, planificación para pauta |
| **M2** | Producción Visual — Artes & Edición Digital | Artes para redes, reels/TikToks editados, integración de IA generativa para visuales |
| **M3** | Cobertura In-situ & Producción Cinematográfica | Tomas profesionales, sesiones fotográficas, cobertura de eventos corporativos |
| **M4** | Pauta Digital — Gestión de Campañas | Meta Ads, TikTok Ads, Google Ads, configuración técnica y optimización |
| **M5** | IONIC — Agente IA 24/7 | Agente de IA en WhatsApp/redes, clasificación de leads, agendamiento, CRM, dashboard |
| **M6** | Software a Medida | Sistemas web, apps móviles, servidores de correo, infraestructura cloud/VPS propio |
| **M7** | Reportería & Analytics Dashboard | Dashboards en línea, informes ejecutivos mensuales, KPIs por módulo |

### 4.3 Cómo se traduce esto al sitio web (recomendación)

Mostrar los 7 códigos internos (M1-M7) tal cual sería demasiado técnico/interno para un visitante. Se recomienda agrupar en **páginas de servicio orientadas al cliente**, manteniendo la trazabilidad interna a los módulos:

| Página pública sugerida | Módulos que representa |
|---|---|
| Estrategia & Contenido Digital | M1 |
| Producción Visual y Audiovisual | M2 + M3 |
| Pauta y Publicidad Digital | M4 |
| IONIC — Agente de IA 24/7 | M5 |
| Software y Automatización a Medida | M6 |
| Analítica y Resultados en Tiempo Real | M7 |

> ⚠️ **Pendiente de validar con cliente:** esta es una propuesta de agrupación para hacerlo digerible en el sitio público. Confirmar si esta agrupación en 6 páginas es correcta, o si el cliente prefiere presentar los 7 módulos tal cual, o consolidar aún más (p. ej. una sola página "Ecosistema" con las 7 piezas en formato visual tipo LEGO, sin páginas individuales — más simple de mantener y muy coherente con el mensaje de marca).

### 4.4 Mensaje central para el copy
El concepto "Sistema LEGO" (el cliente arma su ecosistema pieza por pieza) es un diferenciador de marca fuerte y muy visual — se recomienda usarlo como metáfora de diseño en el sitio (ej. una sección interactiva donde se "arman" íconos de módulos), **sin mostrar precios**, y siempre cerrando con CTA a "Arma tu ecosistema — agenda tu diagnóstico gratuito".

---

## 5. Arquitectura del sitio (Sitemap)

**Páginas de prioridad 1 (alcance confirmado de este proyecto):**

```
Home (/)
├── /equipo                                    (Nuestro Equipo)
├── /servicios/estrategia-contenido             (M1)
├── /servicios/produccion-visual-audiovisual     (M2+M3)
├── /servicios/pauta-publicidad-digital          (M4)
├── /servicios/ionic-agente-ia                   (M5)
├── /servicios/software-a-medida                 (M6)
├── /servicios/analitica-resultados              (M7)
└── /contacto  (o formulario embebido en Home, a definir en diseño)
```

**Páginas de prioridad 2 (recomendadas, no bloqueantes para el lanzamiento):**

```
├── /casos-de-exito
├── /clientes
├── /blog
│   └── /blog/[slug]
├── /politica-de-privacidad  (obligatorio antes de publicar el formulario — LOPDP Ecuador)
└── /aviso-legal / términos y condiciones
```

**Nota de arquitectura SEO:** se recomienda una página pilar (ej. `/ecosistema` o integrada en Home) que explique el modelo modular y enlace internamente a las 6 páginas de servicio — modelo de "topic cluster" que mejora el ranking conjunto de todas las páginas relacionadas.

> ⚠️ **BLOQUEANTE — Pendiente de confirmar con cliente:** validar el agrupamiento de 6 páginas de servicio propuesto en la sección 4.3 (nombres exactos, o si prefieren otra agrupación/cantidad de páginas).

---

## 6. Especificación de contenido por página

### 6.1 Home
| Sección | Contenido / Funcionalidad |
|---|---|
| Header sticky | Logo, menú (Inicio, Servicios ▾, Equipo, Casos de éxito, Contacto), botón WhatsApp, CTA "Agenda tu diagnóstico" |
| Hero | H1 con keyword principal + propuesta de valor ("ecosistema digital, no servicios sueltos"). Animación ligera (fade/slide-in), fondo con elementos gráficos animados sutiles (no video pesado, para no afectar LCP) |
| Bloque de dolor/problema | Pain points reales: procesos manuales, atención que se pierde por falta de automatización, presencia digital fragmentada |
| Bloque de solución (Sistema LEGO) | Explica el enfoque de ecosistema modular con un recurso visual tipo "piezas que se conectan" (ver sección 4.4) — **sin precios** |
| Servicios (6 tarjetas) | Una por cada página de servicio (sección 5) — cada una enlaza a su página, sin precios, con CTA a diagnóstico |
| Proceso de trabajo | Versión simplificada y orientada al cliente del proceso comercial de 7 etapas (diagnóstico → propuesta → arranque → resultados), con iconografía animada al hacer scroll — sin mencionar montos ni fechas internas de cobro |
| Equipo (teaser) | Foto grupal del equipo + copy breve + botón "Conoce al equipo" que redirige a `/equipo` — **no** se listan miembros individuales en Home (ver sección 6.3) |
| Casos de éxito | Mínimo 3 tarjetas con métrica/resultado real (ver sección 6.4) + link a `/casos-de-exito` |
| Contadores animados | Ej: clientes atendidos, años de experiencia, horas ahorradas con automatización (validar cifras con cliente) |
| Clientes (logos) | Grid/marquee con los 11 logos de clientes (ver sección 6.4) |
| CTA final + Formulario | Formulario calificador (ver sección 7.1) |
| Footer | Links, contacto, redes sociales, política de privacidad |

### 6.2 Páginas de servicio (x6, misma plantilla)
- H1 único por servicio (keyword específica)
- Descripción del problema que resuelve
- Qué incluye (lista de funcionalidades del módulo, en lenguaje de beneficio, no de "features técnicas" — **sin precios ni packs**)
- Caso de éxito relacionado (si existe, ver sección 6.4)
- FAQ específico del servicio (bueno para SEO — rich snippets)
- CTA a formulario o WhatsApp ("Consulta si este módulo es para ti")

### 6.3 Nuestro Equipo (`/equipo`) — prioridad 1

**Confirmado con el cliente:** en Home **no** se despliega el equipo uno por uno — solo una foto grupal con link a esta página. Aquí sí se presenta el detalle, **organizado por área** (no como lista plana), reflejando cómo se divide el equipo:

| Área | Integrantes | Expertise a destacar en el copy |
|---|---|---|
| **Dirección** | Orlidan Montesdeoca (Director Ejecutivo, Cofundador) | DevOps, análisis de datos, infraestructura cloud (Docker/SaaS open source), IA, automatización avanzada con RAGs, relación con clientes |
| | Cristhian Recalde (Director Financiero y Operaciones, Cofundador) | Gestión de recursos y proyectos; líder de desarrollo móvil (Flutter); expositor en comunidad AWS y Google |
| **Desarrollo (Devs)** | Alan Rodríguez (PMO) | Bases de datos transaccionales, levantamiento de propuestas, organización bajo SCRUM |
| **Automatizaciones** | David Villarreal (Especialista de Automatizaciones) | Flujos de automatización y soporte técnico; tecnologías de vanguardia; también apoya en diseño/maquetado web |
| **Marketing** | Cami (Especialista de Marketing) | Gestión de redes sociales, traducción de tecnicismos a lenguaje de negocio, cobertura de eventos |
| | Dome (Especialista en Representación de Marca) | Vocera pública para clientes, carisma y naturalidad en cámara/eventos |

**Funcionalidad sugerida:** agrupación visual por área (tabs, secciones o filtro), tarjetas con hover/micro-interacción que revelen el expertise al pasar el mouse o al tap en móvil.

> ⚠️ **Acción para el desarrollador:** las fotos del equipo están en una carpeta **compartida por Giussepe** — solicitar acceso a esa carpeta antes de maquetar esta página.

### 6.4 Casos de éxito / Clientes (`/casos-de-exito`, `/clientes` y sección "Confían en nosotros")

**Logos de clientes (11 confirmados):**

Fondues Escuela de Chefs · Ecu593 English · Pawau Peluquería y SPA Canino · Volaire Salón · El Chipotle · Zona Gamers · Insider Jobs · Unidad Educativa Católica "La Victoria" · Comunidad de la IA Perú · Autoservicios Rosales · Distribuidora Hernández

> ⚠️ **Acción para el desarrollador:** para los logos, **revisar primero el canal de avisos de la comunidad de IonosHub en WhatsApp** como referencia visual, y luego conseguir la versión en mejor calidad de cada logo, convirtiéndolos a **SVG** cuando sea posible (mejor nitidez y peso más liviano que PNG).

**Casos de éxito confirmados (contenido real para redactar el copy):**

| Cliente | Reto | Solución de IonosHub | Resultado |
|---|---|---|---|
| **El Chipotle** (restaurante mexicano) | No tenía presencia ni visitas en internet | Se levantó su presencia digital desde cero | De 0 vistas a redirección activa de leads al canal de WhatsApp |
| **Zona Gamers** | El administrador perdía ~5 horas revisando y clasificando archivos/juegos digitales para la venta | Automatización del proceso de clasificación | El proceso ahora toma ~10 minutos |
| **Ecu593 English** | SAS levantada desde cero; llevaban todo en Excel/Word, notas de estudiantes en papel | Desarrollo de sistema propio por roles, con reportería en línea y gestión centralizada | Negocio centralizado y digitalizado desde su origen |
| **Pawau** (peluquería y SPA canino) | Atendía ~20 personas/día; mientras atendían a un cliente, perdían a otro | Agente de IA (IONIC) que responde 24/7 por WhatsApp, atención sutil y registro automatizado de citas | Atención continua sin perder clientes por saturación manual |
| **Unidad Educativa Católica "La Victoria"** | Gestión de redes sociales y cobertura fotográfica | Equipo de marketing maneja redes + cobertura con cámara profesional | Mejor recibimiento de la comunidad de padres de familia en redes |
| **Comunidad de la IA (Perú)** | — | El equipo de IonosHub da talleres a comunidades particulares en la plataforma Skool | Talleres formativos activos |

**Uso recomendado:**
- **Home:** carrusel/grid de logos (marquee animado sutil) bajo el encabezado "Empresas que confían en IonosHub"
- **Página de Casos de éxito:** tarjetas ampliadas con el formato Reto → Solución → Resultado de la tabla anterior

> ⚠️ **Pendiente de cliente:** confirmar si estos 6 casos de éxito ya están autorizados para publicarse tal cual, o si requieren revisión/aprobación de cada cliente antes de publicar (recomendado por buena práctica, aunque no sea obligatorio legalmente).

### 6.5 Contacto
- Formulario completo + WhatsApp + horario de atención
- Ver especificación exacta del formulario y webhook en sección 7.1

**Contacto oficial confirmado:**
- Correo: `info@ionoshub.net`
- Teléfono / WhatsApp: `0992249152`

> ⚠️ **Pendiente de cliente:** copy definitivo por página (o autorización para que el equipo redacte con revisión del cliente), y confirmar si existe dirección física a mostrar.

---

## 7. Funcionalidades (Requisitos funcionales)

### 7.1 Formulario de contacto calificador (prioridad alta — CONFIRMADO)

**Campos del formulario:**

| Campo | Tipo | Obligatorio |
|---|---|---|
| Nombre del negocio o persona | Texto | Sí |
| Servicio de interés | Select (poblado con las 6 páginas de servicio de la sección 5, o los 7 módulos si el cliente prefiere ese detalle) | Sí |
| Teléfono | Texto/tel, con validación de formato | Sí |
| Correo electrónico | Email, con validación de formato | Sí |
| Nota de detalle | Textarea | No (opcional) |

**Integración — Webhook (CONFIRMADO):**

El envío del formulario debe hacer un `POST` con el payload en JSON al siguiente endpoint:

```
https://n8n.ionoshub.net/webhook/correos-ionos
```

Ejemplo de payload sugerido:
```json
{
  "nombre_negocio_o_persona": "string",
  "servicio_interes": "string",
  "telefono": "string",
  "correo": "string",
  "nota_detalle": "string | null",
  "pagina_origen": "string (URL de la página desde donde se envió)",
  "fecha_envio": "ISO 8601 timestamp"
}
```

**Flujo confirmado de los datos:** el webhook de n8n recibe los campos del formulario y el cliente (equipo IonosHub) posteriormente traslada esos datos a una base de datos propia con fines de contacto comercial. Es decir, **n8n es el punto de entrada**, no necesariamente el destino final del dato — el frontend solo necesita garantizar la entrega exitosa al webhook.

**Requisitos técnicos:**
- Validación en frontend y backend antes de enviar al webhook
- Protección anti-spam (honeypot field y/o reCAPTCHA v3)
- Manejo de estado de envío: loading → éxito → error, con mensajes claros al usuario
- Mostrar confirmación en pantalla en cuanto el `POST` al webhook responda con éxito HTTP (no bloquear la UX esperando procesos internos de n8n)
- Registro de fallos de envío (log en consola/servicio de monitoreo) para no perder leads si el webhook falla

> ⚠️ **Nota técnica menor:** confirmar con David Villarreal (Especialista de Automatizaciones) si el workflow de n8n espera nombres de propiedades distintos a los propuestos arriba, antes de la integración final.

### 7.2 Botón/widget de WhatsApp flotante (prioridad alta)
- Visible en todas las páginas, esquina inferior derecha
- Número: `0992249152`
- Mensaje predefinido según la página de origen (ej. si viene de la página de "IONIC — Agente de IA", el mensaje inicial lo menciona)

### 7.3 Sección de casos de éxito con métricas (prioridad alta)
- Componente reutilizable (tarjeta) con: logo/imagen cliente, industria, resultado destacado (ver tabla en sección 6.4), link a caso completo

### 7.4 Contadores animados y micro-interacciones (prioridad media)
- Contadores que animan al entrar en viewport (Intersection Observer)
- Hover states en tarjetas de servicio (elevación, cambio de color)
- Scroll reveal en secciones (fade-in-up), efecto parallax sutil en hero e imágenes de fondo
- Iconos/figuras con animación ligera de "flotación" o movimiento continuo sutil (sin saturar, no debe afectar performance)

### 7.5 Chatbot con IA (opcional — fase 2, recomendado por coherencia de marca)
- Un chatbot básico en el sitio reforzaría el mensaje de marca ("expertos en IA que usan su propia IA" — coherente con IONIC). Sugerido como fase 2 si el timeline lo permite.

### 7.6 Blog (opcional — fase 2, altamente recomendado para SEO)
- Estructura lista desde el inicio (aunque se publique después) para capturar keywords de cola larga.

---

## 8. Requisitos técnicos

### 8.1 Stack (recomendación, sin restricción del cliente)
Dado el problema de indexación detectado en el sitio actual, se **recomienda fuertemente**:
- **Next.js (React) con SSR o SSG**, o alternativa equivalente con renderizado en servidor (Astro, Nuxt, etc.)
- Si se prioriza velocidad de entrega y facilidad de gestión de contenido por el cliente: **WordPress con tema custom (no page builder pesado)** + optimización de caché, como alternativa viable.
- Evitar SPA pura client-side-only (el problema actual).

### 8.2 Rendimiento
- Core Web Vitals en verde (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- Imágenes en formato WebP/AVIF, lazy loading
- Animaciones con CSS/GSAP optimizadas (evitar layout thrashing), respetar `prefers-reduced-motion`

### 8.3 Responsive
- Mobile-first, breakpoints estándar (móvil, tablet, desktop, wide)
- Menú hamburguesa en móvil, sin menús duplicados en el DOM (bug detectado en sitio de referencia Bbrand — evitar)

### 8.4 Accesibilidad
- Etiquetas `alt` en todas las imágenes
- Contraste AA mínimo, navegación por teclado, roles ARIA en componentes interactivos (acordeones FAQ, carruseles)

### 8.5 Seguridad y legal
- Certificado SSL, formulario con protección CSRF/spam
- Página de Política de Privacidad conforme a la **LOPDP (Ley Orgánica de Protección de Datos Personales) de Ecuador** — obligatoria si se recolectan datos vía formulario
- Banner de cookies si se usan analytics/pixeles de terceros

---

## 9. SEO — Requisitos detallados

### 9.1 SEO técnico
- [ ] Renderizado SSR/SSG (contenido visible en HTML fuente, no solo vía JS)
- [ ] `sitemap.xml` y `robots.txt` correctamente configurados
- [ ] URLs limpias y semánticas en español (`/servicios/ionic-agente-ia`, no `/service?id=3`)
- [ ] Un solo `<h1>` por página, jerarquía H1→H2→H3 coherente con keywords
- [ ] Metadatos únicos por página: `title` (50-60 caracteres), `meta description` (140-160 caracteres)
- [ ] Datos estructurados (Schema.org): `Organization`, `LocalBusiness` (si aplica), `Service`, `FAQPage`, `BreadcrumbList`
- [ ] Open Graph y Twitter Cards por página (para compartir en redes)
- [ ] Canonical tags, evitar contenido duplicado
- [ ] Enlazado interno entre las 6 páginas de servicio y la página/sección pilar del ecosistema
- [ ] Redirects 301 desde URLs del sitio actual (si cambian) para no perder autoridad

### 9.2 Propuesta preliminar de investigación de palabras clave

*(Contexto de mercado: Ecuador está en etapa temprana de adopción de IA empresarial — pocas empresas locales especializadas en el nicho, lo que representa una oportunidad de posicionamiento con competencia directa baja/media en SEO local, aunque alta competencia genérica de agencias internacionales.)*

**Keywords "pilar" / cabeza (alto volumen, marca):**
- inteligencia artificial para empresas Ecuador
- transformación digital Ecuador
- ecosistema digital para empresas
- agencia de automatización con IA Ecuador

**Keywords de servicio (intención media-alta):**
- agente de inteligencia artificial para WhatsApp
- automatización de atención al cliente con IA
- gestión de pauta digital Meta Ads Ecuador
- desarrollo de software a medida Ecuador
- producción audiovisual para redes sociales Ecuador
- dashboard de resultados en tiempo real para negocios

**Keywords de cola larga (blog / contenido, conversión alta):**
- "cómo automatizar la atención al cliente por WhatsApp con IA"
- "qué es un ecosistema digital para mi negocio"
- "cómo digitalizar un negocio que usa Excel y papel"
- "agente de IA para agendar citas automáticamente"

> ⚠️ **Esta es una propuesta inicial basada en investigación de mercado y no en herramientas de volumen de búsqueda real (SEMrush/Ahrefs/Google Keyword Planner).** Antes de desarrollo final, se recomienda validar estas keywords con una herramienta profesional y, dado que "Comunidad de la IA Perú" es cliente, confirmar si se prioriza SEO solo para Ecuador o también para audiencia LATAM/Perú.

### 9.3 SEO de contenido
- Cada página de servicio debe responder una intención de búsqueda clara (informacional o comercial)
- FAQ por servicio (potencial rich snippet en Google)
- Blog (fase 2) para capturar cola larga y nutrir autoridad temática

---

## 10. Diseño UI/UX

### 10.1 Filosofía de diseño — PRIORIDAD EXPLÍCITA DEL CLIENTE

> **El cliente ha enfatizado que el sitio debe priorizar una presencia de diseño profesional y distintiva por encima de lo puramente funcional.** Esto significa que el desarrollador/diseñador no debe conformarse con una maquetación "correcta" o genérica (bloques apilados, tarjetas estándar de framework UI sin personalizar): se espera dirección de arte deliberada — composición, ritmo visual, tratamiento gráfico del isotipo (el robot), y un layout que se sienta diseñado a medida para IonosHub, no una plantilla. La funcionalidad (formulario, WhatsApp, SEO) es requisito base, pero el criterio de éxito visual es más alto que "que funcione bien": debe **verse como una marca tecnológica premium**.

Implicaciones concretas para el desarrollador:
- Evitar layouts de "tres columnas con ícono, título, párrafo" repetidos sin variación — alternar composición por sección (asimetría controlada, quiebres de grid, uso del patrón de "capas circulares" ya presente en el brandbook como recurso gráfico de fondo).
- El isotipo del robot (símbolo de marca) debería tener presencia como elemento gráfico recurrente (no solo en el logo del header), por ejemplo como motivo decorativo animado sutil en secciones clave.
- El concepto "Sistema LEGO" (sección 4) es una oportunidad visual fuerte: piezas/módulos que se conectan gráficamente, coherente con el mensaje de marca.
- Cuidar el detalle: espaciados consistentes, alineación pixel-perfect, transiciones suaves (ease-out/ease-in-out, nunca "linear" abrupto).

### 10.2 Identidad de marca (Brandbook 2025 — fuente de verdad)

**Logotipo:** "IONOS HUB" con isotipo de robot integrado, eslogan "De datos a resultados". Existen versión principal a color y versión monocromática (para grabado/bordado o bajo contraste). Ver reglas de aplicación sobre fondos claros, oscuros y cromáticos en el archivo de marca — mantener siempre proporciones y área de seguridad del logo.

**Tipografías:**
| Uso | Fuente | Aplicación |
|---|---|---|
| Principal (titulares, cifras clave, alto impacto) | **Bakbak One** | H1, números de contadores, elementos hero — no usar en párrafos largos |
| Secundaria (texto corrido, UI, lectura prolongada) | **Monda** | Body text, subtítulos, labels, formularios — usar Regular/Medium; Bold solo para énfasis puntual |

**Paleta cromática oficial:**

| Color | HEX | RGB | Uso sugerido |
|---|---|---|---|
| Celeste Vívido (primario) | `#006EBD` | 0, 110, 189 | Color de marca principal — headers, CTAs primarios, links |
| Gris Cielo (secundario) | `#0099E6` | 0, 153, 230 | Acentos, hover states, gradientes con el primario |
| Naranja Cálido (acento) | `#FF8C42` | 255, 140, 66 | Uso selectivo para CTAs de alto contraste o elementos de énfasis (usar con moderación — es el único color cálido de la marca, no saturar el diseño con él) |
| Gris Oscuro | `#2D3748` | 45, 55, 72 | Textos oscuros, fondos dark-mode/secciones de contraste |
| Gris | `#737373` | 115, 115, 115 | Textos secundarios, bordes, elementos neutros |
| Blanco | `#FFFFFF` | 255, 255, 255 | Fondos base, texto sobre fondos oscuros/de color |

**Iconografía:** set de iconos lineales/sólidos ya definido en el brandbook (estilo geométrico simple, un solo color) — el desarrollador debe reutilizar este set en vez de introducir una librería de iconos con estilo distinto (ej. no mezclar con Font Awesome de otro estilo visual).

**Ícono de redes sociales / favicon:** versión cuadrada de esquinas redondeadas del isotipo (robot), con variantes en azul corporativo, celeste, blanco y gris oscuro — usar la versión ya definida para favicon y compartidos en redes (Open Graph image).

### 10.3 Nivel de animación
Medio: parallax sutil, contadores animados al hacer scroll (Intersection Observer), micro-interacciones en botones/tarjetas, movimiento ligero de figuras decorativas del isotipo o del patrón de "capas circulares" de fondo — cuidando siempre performance y `prefers-reduced-motion`.

### 10.4 Sistema de diseño
Construir con **design tokens** (colores, tipografía, espaciados de la tabla anterior) como variables reutilizables (CSS custom properties o equivalente en el framework elegido) — esto facilita mantener coherencia entre Home, Equipo y las 6 páginas de servicio, y agiliza cualquier ajuste de marca a futuro.

---

## 11. Integraciones

| Integración | Propósito | Estado |
|---|---|---|
| Google Analytics 4 | Medición de tráfico y conversiones | Pendiente de cuenta del cliente |
| Google Search Console | Monitoreo de indexación y SEO | Pendiente de verificación de dominio |
| Google Tag Manager | Gestión centralizada de tags/pixeles | Recomendado |
| Meta Pixel (opcional) | Si se hará pauta en Facebook/Instagram (coherente con módulo M4) | Pendiente de definir |
| WhatsApp (wa.me) | Botón de contacto directo — número `0992249152` | ✅ Confirmado |
| Webhook n8n | Recepción de leads del formulario, ver sección 7.1 | ✅ Confirmado (`https://n8n.ionoshub.net/webhook/correos-ionos`) |
| reCAPTCHA v3 | Anti-spam en formularios | Recomendado, pendiente de implementar |

---

## 12. Fases y cronograma sugerido

*(Referencial — ajustar con el desarrollador/cliente según disponibilidad real)*

| Fase | Contenido | Duración estimada |
|---|---|---|
| 1. Descubrimiento y contenido | Recolección de copy final, logos en SVG, fotos de equipo, validación de agrupación de servicios | 1–2 semanas |
| 2. Diseño (wireframes + UI) | Home + 1 página de servicio como plantilla maestra | 2 semanas |
| 3. Desarrollo | Maquetación completa, SEO técnico, integración de webhook | 3–4 semanas |
| 4. QA y optimización | Pruebas responsive, performance, SEO checklist, revisión de que no haya precios publicados | 1 semana |
| 5. Lanzamiento | Migración de dominio, redirects, Search Console | 2–3 días |
| 6. Fase 2 (opcional) | Blog + chatbot IA | Post-lanzamiento |

---

## 13. Criterios de aceptación / QA Checklist

- [ ] Todas las páginas cargan con contenido visible en el HTML fuente (verificar con "Ver código fuente", no solo inspector)
- [ ] Lighthouse (móvil): Performance >85, SEO >95, Accesibilidad >90
- [ ] Formulario envía correctamente al webhook de n8n y valida en desktop y móvil
- [ ] Botón de WhatsApp funcional en todas las páginas (número `0992249152`)
- [ ] **Ningún precio, tarifa o rango de inversión visible en el sitio público** (revisión manual obligatoria antes de lanzar)
- [ ] Sin menús o bloques de contenido duplicados en el DOM
- [ ] Todas las imágenes con `alt` descriptivo
- [ ] Sitemap.xml enviado a Search Console
- [ ] Meta title/description únicos verificados página por página
- [ ] Pruebas en Chrome, Safari, Firefox + iOS/Android
- [ ] Certificado SSL activo, sin contenido mixto (http dentro de https)

---

## 14. Información pendiente del cliente

### ✅ Ya recibido
- Manual de marca completo (logo, variaciones, tipografías, paleta HEX) — Brandbook 2025
- Manual Comercial completo (modelo de ecosistema, 7 módulos, proceso de venta) — usado como contexto, **no** como contenido público
- Lista de 11 clientes (nombres) + 6 casos de éxito con reto/solución/resultado real
- Equipo completo, organizado por área
- Especificación de campos del formulario, endpoint del webhook y flujo de los datos (n8n → BDD propia)
- Contacto oficial: `info@ionoshub.net` / `0992249152`
- Confirmación de que el equipo NO se despliega individualmente en Home (solo foto grupal + link a `/equipo`)
- Confirmación de que no se muestran precios en el sitio (modelo comercial personalizado)

### ⚠️ Aún pendiente / bloqueante

1. **Validar la agrupación de 6 páginas de servicio propuesta** (sección 4.3) — nombres exactos y si el cliente prefiere otra agrupación
2. Logos en alta calidad de los 11 clientes, en formato SVG — desarrollador debe revisar primero el canal de avisos de la comunidad de IonosHub en WhatsApp como referencia
3. Acceso a la carpeta de fotos del equipo (compartida por Giussepe)
4. Confirmar si los 6 casos de éxito documentados en sección 6.4 ya están autorizados para publicarse, o requieren aprobación previa del cliente final
5. Copy definitivo por página (o autorización para que el equipo redacte con revisión del cliente)
6. Confirmar dirección física a mostrar (si aplica)
7. Acceso a dominio/hosting actual (ionoshub.net) o decisión de proveedor nuevo
8. Cuentas de Google Analytics/Search Console (o autorización para crearlas)
9. Presupuesto y fecha límite de lanzamiento del proyecto web (no confundir con los precios de los módulos del ecosistema, que son para clientes de IonosHub, no para este proyecto)
10. Confirmación de alcance geográfico de SEO (Ecuador únicamente vs. también Perú/LATAM, dado el cliente "Comunidad de la IA Perú")

---

## 15. Referencias de benchmark utilizadas

- **sointem.ec** — patrón de formulario calificador B2B, estructura dolor→solución→proceso, landing pages temáticas por industria/servicio (buena práctica de SEO estructural)
- **bbrand.com.ec** — nivel de dinamismo visual (contadores, hover, video hero) como referencia de "energía" visual, con nota de corregir sus errores técnicos (menú duplicado, alt vacíos)
