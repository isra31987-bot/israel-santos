# Milestone 1 — Design system y cascarón de navegación

**Estado:** Completado.

**Objetivo del producto:** Dejar lista la identidad visual de la candidatura **Business × Technology**, sin Hero ni casos todavía. Un recruiter que abra la web debe sentir consultoría + producto, no un portfolio de programador. Navbar y footer reales. El resto de páginas existen vacías para revisar color, tipografía y aire antes de seguir.

**Estado actual:** App Next.js creada. Hay que alinear menú, datos y marca con la conversación completa.

**Criterio de éxito:** En `http://localhost:3000` se ve fondo `#F7F7F5`, el nombre, el titular profesional y el menú Work / Approach / About / Contact. Se navega entre esas rutas. En móvil el menú abre y cierra. Ningún dato inventado.

---

## To-do (máx. 5 pasos)

### 1. Design system en un solo sitio

- [x] En `app/globals.css` dejar los tokens de marca (un acento, para poder cambiarlo después).
- [x] Tipografía Geist. Sin modo oscuro automático: la web es clara a propósito.
- [x] No añadir Framer Motion ni librerías de UI.

```css
/* app/globals.css — cambia --accent y cambia toda la web */
:root {
  --bg: #f7f7f5;
  --text: #111111;
  --muted: #666666;
  --border: #e5e5e5;
  --accent: #2563eb;
}
```

---

### 2. Datos reales, sin rellenar huecos

- [x] Actualizar `data/profile.ts` con titular, claim y contacto confirmados. LinkedIn/GitHub vacíos si no están confirmados.
- [x] `data/nav.ts`: Work, Approach, About, Contact (ese orden).
- [x] `data/projects.ts` con los 4 casos y estados honestos. Esta lista no se pinta aún; solo queda lista para M2.

```ts
// data/profile.ts — el resto de la web lee de aquí
export const profile = {
  name: "Israel Santos",
  title: "Business & Digital Transformation Analyst",
  brand: "Business × Technology",
  headline: "Convierto problemas empresariales en soluciones digitales.",
  linkedin: "", // [POR CONFIRMAR]
  github: "",  // [POR CONFIRMAR]
};
```

---

### 3. Navbar (desktop + móvil)

- [x] `components/Navbar.tsx`: nombre a la izquierda, enlaces, `ES` visible (EN aún no funciona), Descargar CV (sin PDF todavía).
- [x] Subrayar la ruta activa con `usePathname`.
- [x] Móvil: hamburguesa que abre/cierra. Al pulsar un enlace, se cierra.
- [x] Solo `useState`. Sin Context.

```tsx
// components/Navbar.tsx
export default function Navbar() {
  const [open, setOpen] = useState(false); // menú móvil
  const pathname = usePathname();          // saber qué página está activa
  // ...
}
```

---

### 4. Footer, layout y páginas vacías

- [x] Footer: nombre, marca y *Built with curiosity, AI and a lot of problem solving.*
- [x] `app/layout.tsx` envuelve todo con Navbar + Footer. Idioma `es`.
- [x] Home (`/`): solo marca (etiqueta + titular profesional + headline). Sin botones de Hero.
- [x] Páginas vacías: `/work`, `/approach`, `/about`, `/contact`.

---

### 5. Probar y parar

- [x] `npm run build` sin errores.
- [x] Abrir `npm run dev` → `http://localhost:3000`.
- [x] Recorrer Work → Approach → About → Contact → Home.
- [x] No construir el Hero ni los casos. Esperar revisión visual.

---

## Fuera de alcance en M1

- Hero animado, métricas, tarjetas de proyectos, timeline, formulario.
- i18n real ES/EN, PDF del CV, vídeo Seedance.
- Context, Zustand, tipos avanzados, prop drilling.

---

## Estructura objetivo

```
app/
  layout.tsx
  page.tsx
  globals.css
  work/page.tsx
  approach/page.tsx
  about/page.tsx
  contact/page.tsx
components/
  Navbar.tsx
  Footer.tsx
data/
  profile.ts
  nav.ts
  projects.ts
```

---

## Definición de terminado (DoD)

| Requisito | Verificado |
|-----------|------------|
| Tokens de marca en CSS | ☑ |
| Navbar con Work / Approach / About / Contact | ☑ |
| Footer con marca y tagline | ☑ |
| Home solo con identidad, sin Hero | ☑ |
| Sin datos inventados | ☑ |
| `npm run build` sin errores | ☑ |
