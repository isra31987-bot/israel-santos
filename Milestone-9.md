# Milestone 9 — Personalización por empresa

**Estado:** Pendiente (después de M7 + deploy + revisión).

**Objetivo:** Que un recruiter sienta que la candidatura está pensada para *su* contexto, sin rehacer el sitio ni inventar datos.

**Criterio de éxito:** URL compartible (`/for/logistica`, `/for/mercadona`), mensaje adaptado al sector/empresa, proyectos relevantes destacados, CTA con asunto personalizado, build OK. **STOP** para revisión.

---

## Enfoque elegido: landing por sector/empresa (URL compartible)

**Por qué esta vía y no un modal genérico**

| Opción | Ventaja | Desventaja |
|--------|---------|------------|
| Modal “¿Qué te trae aquí?” | Interactivo | No se puede enviar en un email de candidatura |
| **`/for/[slug]` (elegida)** | Link directo al recruiter: *“Mira esto preparado para vosotros”* | Hay que crear datos por empresa/sector |
| Rehacer Home por visitante | Máximo impacto | Complejo, rompe secciones aprobadas |

**Principio:** no tocar Hero, Approach ni Selected Work. Añadir una **página nueva** que reutiliza el design system y enlaza a lo ya aprobado.

**Qué ve el recruiter en `/for/logistica` (ejemplo)**

1. Titular: *“Así puedo aportar valor en operaciones y logística”*
2. 2–3 fricciones típicas del sector (documentación, datos dispersos, procesos manuales)
3. 2 case studies enlazados (Document Intelligence, Real Estate Automation…)
4. Bloque “Qué busco” adaptado al tipo de rol (BA, transformación, automatización)
5. CTA: email con asunto `Candidatura Israel Santos — [Nombre empresa]`

**Reglas de contenido (obligatorias)**

- Solo sectores y empresas que **tú** confirmes al preparar cada candidatura.
- Nunca afirmar que trabajaste en esa empresa.
- Fricciones = problemas **genéricos del sector**, no datos internos inventados.
- Si no hay slug, la web normal sigue igual (`/`).

---

## To-do (máx. 5 pasos)

### 1. Datos por empresa/sector

- [ ] Crear `data/targetCompanies.ts` con un array de entradas:

```ts
// Cada entrada = una URL /for/[slug]
export type TargetCompany = {
  slug: string;           // "logistica" | "mercadona" — minúsculas, sin espacios
  displayName: string;    // "Logística" o "Mercadona" — lo que ve el usuario
  sectorLabel: string;    // "Operaciones y transporte"
  frictions: string[];    // 2–3 dolores típicos del sector (ES; EN en i18n)
  projectSlugs: string[]; // slugs de case studies relevantes (de data/projects)
  roleFocus: string;      // Una línea: qué rol encaja (BA, transformación…)
};
```

- [ ] Empezar con **3 plantillas de sector** (logística, retail, proptech). Añadir empresas concretas solo cuando prepares una candidatura real.
- [ ] Función helper `getTargetCompany(slug)` — devuelve `undefined` si no existe (→ 404).

### 2. Ruta `/for/[slug]`

- [ ] Crear `app/for/[slug]/page.tsx` — Server Component.
- [ ] Si `getTargetCompany(slug)` no existe → `notFound()`.
- [ ] Metadata dinámica: título `Israel Santos — [displayName]`.
- [ ] Crear `components/for/ForCompanyPage.tsx` — layout editorial (misma estética que About/CV).

**Estructura visual de la página (4 bloques)**

1. **Hero contextual** — sector + titular personalizado  
2. **Fricciones** — lista corta (reutilizar estilos `.home-value-list`)  
3. **Proyectos relevantes** — cards con link a `/work/[slug]` (solo los del array)  
4. **CTA final** — `TrackLink` a contacto + `mailto:` con asunto personalizado  

```tsx
// En ForCompanyPage — construir asunto del email con el nombre visible
const subject = encodeURIComponent(`Candidatura Israel Santos — ${company.displayName}`);
```

### 3. Contenido bilingüe

- [ ] Crear `i18n/content/forCompany.es.ts` y `.en.ts` — textos fijos de la plantilla:
  - label (“PARA TU CONTEXTO”)
  - headings (“Así puedo aportar valor en…”)
  - labels de sección (Fricciones, Proyectos, Contacto)
  - disclaimer (“Contenido orientativo al sector; no implica relación previa con la empresa.”)
- [ ] Fricciones y `roleFocus` por empresa: en `targetCompanies` en ES; duplicar en EN o mapear por clave i18n si prefieres un solo archivo bilingüe (`targetCompanies.es.ts` / `.en.ts`).

### 4. Entrada y tracking

- [ ] En `HomeContactSection` o Footer: enlace discreto “¿Vienes de una empresa?” → `/for` (opcional: índice con lista de sectores disponibles).
- [ ] Evento analytics `company_view` con param `slug` en `lib/analytics.ts`.
- [ ] Añadir rutas `/for/*` al sitemap **solo si** quieres indexarlas (recomendado: **no indexar** — `robots` nofollow o excluir del sitemap; son landing de candidatura, no SEO).

### 5. Verificación y uso

- [ ] `npm run build` sin errores.
- [ ] Probar `/for/logistica` y un slug inexistente (404).
- [ ] Documentar en README: “Para una candidatura, añade entrada en `targetCompanies.ts` y envía `tudominio.com/for/empresa`”.
- [ ] **STOP.** Revisión antes de usar en emails reales.

---

## Fuera de alcance (M9)

- Modal multi-paso “Hiring / Collaboration / Exploring” (se puede añadir en M10 si hace falta).
- Scraping o datos automáticos de empresas.
- Cambiar Hero/Approach/Selected Work según visitante.
- A/B testing o CMS.

---

## Cómo usarlo en una candidatura real

1. Investigas la empresa (web, oferta, sector).
2. Añades o ajustas una entrada en `targetCompanies.ts` (5 minutos).
3. Envías en el email: *“He preparado un resumen de cómo encajaría en [Empresa]: https://tu-dominio.com/for/mercadona”*
4. El recruiter ve fricciones de su mundo + proyectos tuyos que encajan — no un CV genérico.

---

## Plantillas iniciales sugeridas (contenido a confirmar contigo)

| Slug | Display name | Proyectos a destacar |
|------|--------------|----------------------|
| `logistica` | Logística y transporte | document-intelligence, real-estate-automation |
| `retail` | Retail / gran consumo | document-intelligence, lead-intelligence |
| `proptech` | Inmobiliaria / PropTech | real-estate-automation, logicalc |

Empresas concretas (`mercadona`, `inditex`…) se crean **bajo demanda** cuando apliques, reutilizando la plantilla del sector y cambiando solo `displayName` + 1 fricción específica de la oferta.
