# Milestone 2 — Hero distintivo (solo primer viewport)

**Estado:** Pendiente de revisión visual.

**Objetivo del producto:** El cascarón de M1 se mantiene. El Hero deja de verse vacío: texto a la izquierda, método Problem → Build a la derecha, con un flujo animado sutil. Sigue pareciendo consultoría + producto, no un portfolio de programador.

**Base:** Design system, Navbar y Footer de M1. No rediseñar la web. No añadir más secciones.

**Criterio de éxito:** En `http://localhost:3000` el primer viewport se ve completo (~85–90vh). Hay dos CTAs. A la derecha se entiende el método en 5 etapas conectadas. En móvil el texto va primero y el proceso debajo. Tras esto, **parar** para revisión visual.

---

## To-do (máx. 5 pasos)

### 1. Datos del método (sin inventar copy)

- [x] Crear `data/process.ts` con las 5 etapas acordadas: PROBLEM, ANALYZE, DESIGN, AUTOMATE, BUILD.
- [x] Números `01`–`05`. Nada más: esta lista solo alimenta el visual del Hero.

```ts
// data/process.ts — el visual del Hero lee de aquí
export const processSteps = [
  { number: "01", label: "PROBLEM" },
  { number: "02", label: "ANALYZE" },
  { number: "03", label: "DESIGN" },
  { number: "04", label: "AUTOMATE" },
  { number: "05", label: "BUILD" },
];
```

---

### 2. Visual del proceso (no cinco cajas sueltas)

- [x] Crear `components/ProcessFlow.tsx`. Etapas numeradas unidas por una línea fina.
- [x] Animación CSS: puntos que recorren la línea + la etapa activa se marca con el acento. Sin Framer Motion.
- [x] En móvil, quitar los puntos en movimiento. Respetar `prefers-reduced-motion`.
- [x] Comentarios cortos en el JSX para explicar línea, puntos y etapa activa.

```tsx
// components/ProcessFlow.tsx
// La línea vertical conecta las 5 etapas.
// Los puntos (.process-dot) recorren esa línea en bucle.
```

---

### 3. Recomponer el Hero (texto + visual)

- [x] Sustituir el bloque vacío de `app/page.tsx`. Altura ~85–90vh, no 100vh.
- [x] Desktop: texto ~55–60% izquierda, `ProcessFlow` ~40–45% derecha.
- [x] Copy desde `profile`: marca, titular, H1, descripción.
- [x] CTAs: `VER PROYECTOS →` enlaza a `/work`. `DESCARGAR CV` enlaza a `/cv.pdf` (no crear un PDF falso).

```tsx
// app/page.tsx — grid: texto | proceso
<Link href="/work">VER PROYECTOS →</Link>
<a href="/cv.pdf">DESCARGAR CV</a>
```

---

### 4. Scroll hint y móvil

- [x] Al fondo del Hero, discreto: `SCROLL TO EXPLORE ↓`.
- [x] Móvil: columna, texto primero, proceso debajo, CTAs fáciles de pulsar.
- [x] No tocar Navbar, Footer ni las otras páginas.

---

### 5. Probar y parar

- [x] Abrir `http://localhost:3000` y revisar desktop + móvil.
- [x] Comprobar que el Hero se siente completo y que no hay otras secciones nuevas.
- [x] **STOP.** No construir Selected Work, Approach ni el resto hasta la revisión.

---

## Fuera de alcance en este slice

- Selected Work, métricas, timeline, formulario, i18n, PDF real.
- Rediseño global, modo oscuro, Framer Motion, glow, snippets de código.

---

## Definición de terminado (DoD)

| Requisito | Verificado |
|-----------|------------|
| Estética M1 intacta (off-white, negro, acento azul) | ☑ |
| Hero ~85–90vh, equilibrado izq/der en desktop | ☑ |
| Proceso de 5 etapas con flujo animado (no cajas sueltas) | ☑ |
| CTAs a `/work` y `/cv.pdf` | ☑ |
| Responsive; sin secciones nuevas | ☑ |
