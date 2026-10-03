# Milestone 6 — Home cierre, Experiments, Analytics y pulido base

**Estado:** En curso.

**Objetivo:** Cerrar los gaps del roadmap GPT (Fases auditoría Home + 8 + 10 + 11 parcial) sin tocar Hero, Approach ni Selected Work.

**Criterio de éxito:** Home con narrativa completa hasta contacto, `/experiments` secundario, analytics opcionales vía env, favicon y sitemap actualizado. **STOP** para revisión.

---

## To-do (máx. 5 pasos)

### 1. Cierre narrativo en Home

- [x] Crear `HomeValueSection` — qué puedo aportar a una empresa (sin modificar secciones aprobadas).
- [x] Crear `HomeContactSection` — CTA final hacia `/contact` y `/about`.
- [x] Añadir ambas **después** de `SelectedWorkSection` en `app/page.tsx`.
- [x] Contenido bilingüe en `i18n/messages/es.ts` y `en.ts`.

### 2. Página Experiments (Fase 8 GPT)

- [x] Crear `i18n/content/experiments.es.ts` y `.en.ts` con Fitnia, Kiddoflow, MMVP, Belvik Fire.
- [x] Crear `/experiments` — sección secundaria, tono “curiosidad personal”.
- [x] Enlace discreto en Footer (no Navbar principal).

### 3. Analytics (Fase 10 GPT)

- [x] Crear `components/Analytics.tsx` — GA4 + Microsoft Clarity solo si hay ID en env.
- [x] Documentar `NEXT_PUBLIC_GA_ID` y `NEXT_PUBLIC_CLARITY_ID` en `.env.example`.

### 4. Pulido base (Fase 11 parcial)

- [x] Favicon `app/icon.svg` acorde al design system.
- [x] Imagen OG estática `app/opengraph-image.tsx` (texto marca, sin foto stock).
- [x] Actualizar `app/sitemap.ts` con `/experiments`.

### 5. Verificación

- [x] `npm run build` sin errores.
- [ ] **STOP.** Revisión visual antes de Fase 9 (personalización empresas).

---

## Fuera de alcance en M6

- Fase 9 — Personalización por empresa (Milestone 7).
- `public/cv.pdf` final (export manual del usuario).
- Vídeo Seedance, LinkedIn/GitHub sin confirmar.
- Cookies / privacidad legal (hasta deploy).

---

## Siguiente: Milestone 7 — Personalización empresas ⭐

Pantalla “¿Qué te trae aquí?” → Hiring / Collaboration / Exploring → selector de empresa → experiencia adaptada.
