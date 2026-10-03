# Milestone 7 — Pulido, analytics, cookies y deploy

**Estado:** En curso.

**Objetivo:** Dejar el portfolio listo para producción. Fase 9 (personalización empresas) queda **al final**.

**Criterio de éxito:** Analytics opcional con consentimiento, enlaces CV unificados, página privacidad, README actualizado, build OK. **STOP** antes de Fase 9.

---

## To-do (máx. 5 pasos)

### 1. Enlaces CV unificados

- [x] CTAs «Descargar CV» → `/cv.pdf` (archivo en `public/cv.pdf` cuando exista).
- [x] Página web `/cv` sigue disponible para imprimir (Ctrl+P).
- [x] Constante `CV_PDF_HREF` en `data/site.ts`.

### 2. Analytics con eventos

- [x] `lib/analytics.ts` — `trackEvent()` para GA4.
- [x] Eventos: `download_cv`, `contact_click`, `view_projects`.
- [x] Scripts solo tras consentimiento de cookies.

### 3. Cookies y privacidad

- [x] Banner de consentimiento (solo si hay GA4 o Clarity configurados).
- [x] Página `/privacy` bilingüe.
- [x] Enlace en Footer.

### 4. SEO y metadata

- [x] Open Graph image en `createPageMetadata`.
- [x] Sitemap incluye `/privacy`.

### 5. Deploy

- [x] README actualizado (M6–M7, analytics, cv.pdf).
- [x] `npm run build` sin errores.
- [ ] Deploy en Vercel (lo ejecuta el usuario).

---

## Fuera de alcance (M7)

- Fase 9 — Personalización empresas (Milestone final).
- Crear `public/cv.pdf` (export manual del usuario).
- LinkedIn / GitHub sin confirmar.
