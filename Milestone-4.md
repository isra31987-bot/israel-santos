# Milestone 4 — About, Contact y CV

**Estado:** Pendiente de revisión visual.

**Objetivo del producto:** Cerrar las páginas de candidatura que faltan. Un recruiter puede conocer el perfil (`/about`), contactar (`/contact`) y descargar/imprimir el CV (`/cv`). Misma historia que la Home, sin inventar experiencia ni métricas.

**Base:** Design system de M1–M3. Datos en `data/profile.ts` y `data/about.ts`. No tocar Hero, Navbar (solo enlace CV), Footer ni secciones aprobadas de Home.

**Criterio de éxito:** `/about`, `/contact` y `/cv` listos, responsive, coherentes con el resto. Enlace «Descargar CV» apunta a `/cv`. Tras esto, **parar** para revisión visual.

---

## To-do (máx. 5 pasos)

### 1. Datos del perfil extendidos (sin inventar)

- [x] Crear `data/about.ts` con narrativa, enfoque y áreas de trabajo.
- [x] Solo hechos confirmados en `profile.ts` y README. Sin cargos, empresas ni cifras inventadas.
- [x] Si falta LinkedIn/GitHub, no mostrarlos.

```ts
// data/about.ts — la página About lee de aquí
export const aboutNarrative = [
  "Párrafo 1: negocio antes que tecnología.",
  // ...
];
```

---

### 2. Página `/about`

- [x] Sustituir placeholder de `app/about/page.tsx`.
- [x] Cabecera editorial: «I didn't start in technology.»
- [x] Dos columnas en desktop: titular sticky + narrativa, claim y tags.
- [x] Enlace a `/work` para ver casos reales.

---

### 3. Página `/contact`

- [x] Sustituir placeholder de `app/contact/page.tsx`.
- [x] Cabecera: «Have a business problem?»
- [x] Email (`mailto:`), teléfono (`tel:`) y ciudad desde `profile.ts`.
- [x] Sin formulario con backend; contacto directo.

---

### 4. CV imprimible en `/cv`

- [x] Crear `app/cv/page.tsx`: resumen, competencias y 4 proyectos (una línea cada uno).
- [x] Estilos `@media print` en `globals.css` para exportar a PDF desde el navegador.
- [x] Botón «Imprimir / Guardar PDF» (client component mínimo).
- [x] Actualizar Navbar: `#cv` → `/cv`.

**Nota:** Cuando exista el PDF final en `public/cv.pdf`, cambiar enlaces a `/cv.pdf`.

---

### 5. Probar y parar

- [x] Abrir `/about`, `/contact` y `/cv`.
- [x] Probar impresión del CV (Ctrl+P → Guardar como PDF).
- [x] Comprobar responsive; no tocar Hero ni secciones aprobadas.
- [x] `npm run build` sin errores.
- [x] **STOP.** No construir vídeo Seedance ni deploy hasta la revisión.

---

## Fuera de alcance en M4

- Vídeo Seedance, SEO avanzado, deploy (M5).
- Formulario con API, i18n real ES/EN.
- Timeline de empleo inventada, logos de clientes, métricas falsas.

---

## Definición de terminado (DoD)

| Requisito | Verificado |
|-----------|------------|
| `/about` con narrativa y posicionamiento | ☑ |
| `/contact` con datos reales de contacto | ☑ |
| `/cv` imprimible (1–2 páginas) | ☑ |
| Navbar enlaza a `/cv` | ☑ |
| Sin datos inventados | ☑ |
| `npm run build` sin errores | ☑ |
