# Milestone 5 — Vídeo Seedance, SEO y deploy

**Estado:** Pendiente de revisión visual.

**Objetivo del producto:** Cerrar el ecosistema de candidatura. La web es indexable (SEO), incluye hueco para el vídeo Seedance, `/approach` funciona y el proyecto está listo para desplegar en Vercel.

**Base:** M1–M4 completos. No tocar Hero, Approach en Home, Selected Work, Navbar ni Footer.

**Criterio de éxito:** `sitemap.xml` y `robots.txt` activos, metadata Open Graph en páginas clave, sección vídeo en About (placeholder hasta tener URL), README con pasos de deploy. Tras esto, **parar** para revisión.

---

## To-do (máx. 5 pasos)

### 1. Configuración del sitio

- [x] Crear `data/site.ts` con `getSiteUrl()` leyendo `NEXT_PUBLIC_SITE_URL`.
- [x] Añadir `.env.example` con la variable documentada.
- [x] Sin URL de producción confirmada → fallback `http://localhost:3000`.

```ts
// data/site.ts
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
```

---

### 2. SEO (metadata, sitemap, robots)

- [x] Crear `lib/seo.ts` con helper `createPageMetadata`.
- [x] Ampliar `app/layout.tsx`: Open Graph, Twitter, JSON-LD Person.
- [x] Crear `app/sitemap.ts` con rutas estáticas + case studies.
- [x] Crear `app/robots.ts` apuntando al sitemap.
- [x] Metadata en About, Contact, CV, Work y Approach.

---

### 3. Sección vídeo Seedance (About)

- [x] Crear `data/video.ts` con URL vacía `[POR CONFIRMAR]`.
- [x] Crear `components/VideoSection.tsx`: placeholder editorial si no hay URL; `<video>` si hay archivo local.
- [x] Añadir sección al final de `/about` (no modificar Home).

**Cuando exista el vídeo:** pegar la URL en `data/video.ts` → `url`.

---

### 4. Página `/approach`

- [x] Sustituir placeholder: reutilizar `ApproachSection` (misma sección que Home).
- [x] El enlace del Navbar deja de llevar a una página vacía.

---

### 5. Deploy en Vercel

- [x] Documentar en README: import repo → Vercel → `NEXT_PUBLIC_SITE_URL`.
- [x] `npm run build` sin errores.
- [x] **STOP.** El deploy lo ejecuta el usuario en Vercel cuando confirme la URL.

---

## Fuera de alcance en M5

- i18n real ES/EN.
- Imagen Open Graph personalizada (hasta tener asset).
- Subir el vídeo Seedance (depende del usuario).
- LinkedIn/GitHub sin confirmar.

---

## Definición de terminado (DoD)

| Requisito | Verificado |
|-----------|------------|
| `/sitemap.xml` generado | ☑ |
| `/robots.txt` generado | ☑ |
| Open Graph en layout | ☑ |
| Sección vídeo en About | ☑ |
| `/approach` con contenido real | ☑ |
| README con deploy | ☑ |
| `npm run build` sin errores | ☑ |
