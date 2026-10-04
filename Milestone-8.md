# Milestone 8 — Chatbot de reclutamiento (Gemini)

**Estado:** Implementado (falta clave Gemini del usuario).

**Objetivo:** Añadir un chat con IA que conozca el perfil de Israel y solo responda preguntas relacionadas con reclutamiento / evaluación profesional.

**Criterio de éxito:** Un reclutador puede preguntar por experiencia, proyectos, stack y disponibilidad; las preguntas fuera de tema se rechazan con cortesía. Sin SDK pesado: `fetch` a la API de Gemini.

---

## To-do (máx. 5 pasos)

### 1. Conocimiento del perfil

- [x] Crear `data/chatKnowledge.ts` con un texto curado (CV, proyectos, skills, búsqueda).
- [x] Incluir comentario claro: este texto es la única “fuente de verdad” del bot.

### 2. API `/api/chat`

- [x] `POST` recibe `{ messages, locale }`.
- [x] System prompt: solo reclutamiento; no inventar; redirigir a contacto si no sabe.
- [x] Llamar a Gemini con `GEMINI_API_KEY` (servidor). Rate limit simple por IP.
- [x] Comentarios en las funciones esenciales para aprender.

### 3. UI del chat

- [x] Componente cliente `components/RecruitmentChat.tsx` (botón flotante + panel).
- [x] Textos i18n ES/EN (`chatbot` en el diccionario).
- [x] Estilos en `globals.css` alineados con el portfolio (sin cards genéricas de “AI purple”).

### 4. Montaje y env

- [x] Renderizar el chat en `app/layout.tsx`.
- [x] Documentar `GEMINI_API_KEY` (y opcional `GEMINI_MODEL`) en `.env.example`.

### 5. Probar

- [ ] Local: añadir `GEMINI_API_KEY` en `.env.local`, reiniciar `npm run dev`.
- [ ] Pregunta de reclutamiento → respuesta útil; off-topic → rechazo.
- [ ] En Vercel: añadir `GEMINI_API_KEY` y redesplegar.
