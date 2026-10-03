# Israel Santos — Business × Technology

Ecosistema de candidatura. No es un CV de programador: es cómo un perfil de negocio + tecnología se presenta a empresas (Business Analyst, transformación digital, automatización).

**Convierto problemas empresariales en soluciones digitales.**

## Las tres piezas

1. **Web** — pieza que se experimenta. Consultoría + producto. En 30 segundos se entiende quién eres.
2. **PDF de 1–2 páginas** — para ATS y envíos. Misma historia que la web. Llega cuando la marca visual está cerrada.
3. **Vídeo Seedance 2.5 (45–60 s)** — no es una presentación personal. Muestra el método: observar → analizar → diseñar → automatizar → construir.

CV, web, vídeo y LinkedIn cuentan lo mismo.

## Posicionamiento

**Business & Digital Transformation Analyst**
Business Analysis · Process Optimization · AI & Automation · Digital Solutions

La programación (asistida con IA) es una herramienta, no el titular.

> I understand the business. I find the friction. I build the solution.

## Cómo se construye

Cada milestone se revisa en el navegador antes del siguiente. Si un dato no está confirmado, queda `[POR CONFIRMAR]`. Nunca se inventan clientes, cifras ni tecnologías.

| Milestone | Qué entrega |
|-----------|-------------|
| **1** | Design system + Navbar + Footer + rutas vacías |
| 2 | Home completa |
| 3 | Case studies (4 proyectos) |
| **4** | About, Contact y PDF |
| **5** | Vídeo Seedance, SEO y deploy |
| **6** | Cierre Home, Experiments, OG image |
| **7** | Analytics, cookies, privacidad, pulido final |
| **9** | Personalización empresas *(al final)* |

## Arrancar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Desplegar en Vercel

1. Sube el repo a GitHub (o conéctalo directamente desde Vercel).
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repositorio.
3. Framework: **Next.js** (detectado automáticamente). Build: `npm run build`. Output: default.
4. En **Environment Variables**, añade (copia `.env.example`):
   ```
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
   WEB3FORMS_ACCESS_KEY=tu-access-key
   CONTACT_TO_EMAIL=isra31987@gmail.com
   ```
   GA4 y Clarity son opcionales. Si no hay IDs, no aparece el banner de cookies.
   Para el formulario de contacto: crea una clave gratis en [web3forms.com](https://web3forms.com) (o usa Resend) y añádela en Vercel. Sin clave, el canal Email devolverá error de configuración; WhatsApp sigue funcionando.
   (Copia la URL final que te asigne Vercel tras el primer deploy.)
5. Deploy. Comprueba `/sitemap.xml` y `/robots.txt` en producción.

### Formulario de contacto (local)

1. Copia `.env.example` → `.env.local`
2. Entra en [web3forms.com](https://web3forms.com), genera un Access Key con tu email
3. Pega la clave en `WEB3FORMS_ACCESS_KEY=`
4. Reinicia `npm run dev` y prueba enviar desde `/contact`

WhatsApp abre la app/web de WhatsApp con el mensaje listo (así funciona el contacto WhatsApp en webs personales; no requiere API de negocio).

### Tras el deploy

- Pega la URL del vídeo Seedance en `data/video.ts` → `url`.
- Exporta el CV a PDF y colócalo en `public/cv.pdf` (los CTAs «Descargar CV» apuntan ahí; la versión web imprimible sigue en `/cv`).
- LinkedIn y GitHub quedan `[POR CONFIRMAR]` hasta que los confirmes.
