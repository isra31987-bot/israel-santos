# Milestone 3 — Selected Work (4 case studies)

**Estado:** Pendiente de revisión visual.

**Objetivo del producto:** Demostrar el posicionamiento con casos reales. Un recruiter entra en Work y ve cuatro proyectos con problema, análisis, solución, tecnologías y estado honesto. No parece un portfolio de programador.

**Base:** Hero y design system de M1/M2. Los datos viven en `data/projects.ts`. No inventar clientes, cifras ni tecnologías.

**Criterio de éxito:** `/work` lista los 4 casos. Cada uno abre en `/work/[slug]`. Tarjetas editoriales, responsive. Tras esto, **parar** para revisión visual.

---

## To-do (máx. 5 pasos)

### 1. Ampliar datos de cada caso (sin inventar)

- [x] En `data/projects.ts`, añadir `problem`, `analysis` y `solution` a cada proyecto.
- [x] Usar solo lo ya confirmado en las conversaciones. Si falta algo, dejarlo vacío.
- [x] Mantener `technologies` y `status` honestos.

```ts
// data/projects.ts — cada caso cuenta problema → análisis → solución
{
  slug: "document-intelligence",
  problem: "...",
  analysis: "...",
  solution: "...", // puede coincidir con description
}
```

---

### 2. Tarjeta editorial reutilizable

- [x] Crear `components/ProjectCard.tsx`: número, título, subtítulo, resumen, tags de tech, estado.
- [x] Enlace a `/work/[slug]`. Sin imágenes inventadas ni mockups.
- [x] Comentario breve: la tarjeta resume; el detalle está en la página del caso.

```tsx
// components/ProjectCard.tsx
<Link href={`/work/${project.slug}`}>Ver caso →</Link>
```

---

### 3. Página `/work` (listado)

- [x] Sustituir el placeholder de `app/work/page.tsx`.
- [x] Cabecera: etiqueta Work + "Selected work" + intro corta.
- [x] Listar los 4 proyectos con `ProjectCard`, en orden 01–04.
- [x] Espaciado generoso, coherente con el Hero.

---

### 4. Página de detalle `/work/[slug]`

- [x] Crear `app/work/[slug]/page.tsx` con `generateStaticParams` para los 4 slugs.
- [x] Mostrar: problema, análisis, solución, tecnologías, estado.
- [x] Enlace "← Volver a Work". Si el slug no existe, 404.

```tsx
// app/work/[slug]/page.tsx
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
```

---

### 5. Probar y parar

- [x] Abrir `/work` y entrar en cada caso.
- [x] Comprobar responsive y que no se tocó Hero, Navbar ni Footer.
- [x] `npm run build` sin errores.
- [x] **STOP.** No construir Approach, About ni Contact hasta la revisión.

---

## Fuera de alcance en M3

- About, Contact, formulario, PDF, vídeo, i18n.
- Métricas inventadas, logos de clientes, capturas falsas.
- Rediseño del Hero o del design system.

---

## Definición de terminado (DoD)

| Requisito | Verificado |
|-----------|------------|
| 4 casos en `/work` con tarjetas editoriales | ☑ |
| Detalle en `/work/[slug]` con problema/análisis/solución | ☑ |
| Estados y tecnologías honestos | ☑ |
| Responsive; estética M1 intacta | ☑ |
| `npm run build` sin errores | ☑ |
