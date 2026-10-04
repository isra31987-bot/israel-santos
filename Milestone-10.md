# Milestone 10 — Aviso por email al abrir el enlace (estilo Mosset)

**Estado:** Implementado (probar en local/producción con tu Web3Forms).

**Objetivo:** Enviar a una empresa un enlace del WebCV y recibir un email cuando alguien lo abre (igual que los enlaces de seguimiento de Mosset).

**Criterio de éxito:** Con `https://israel-santos.vercel.app/?ref=empresa-x` recibes un email al abrirse. Sin base de datos.

---

## Cómo funciona

1. En el email pones un enlace con un código: `?ref=acme`.
2. `VisitNotifier` lee `ref` al cargar cualquier página.
3. Si hay `ref` válido, envía email vía Web3Forms (navegador) o `/api/visit-notify` (Resend).
4. `sessionStorage` evita repetir el aviso en la misma pestaña.

**Límite:** un escáner de seguridad del correo también puede disparar el aviso.

---

## To-do (máx. 5 pasos)

### 1. API de aviso

- [x] Crear `app/api/visit-notify/route.ts` (fallback Resend).
- [x] Validar `ref` (letras, números, guiones; máx. 40).
- [x] Asunto: `WebCV abierto — ref: …`.

### 2. Cliente que dispara el aviso

- [x] Crear `components/VisitNotifier.tsx`.
- [x] Web3Forms desde el navegador (plan free); si no hay key → API Resend.
- [x] `sessionStorage` `visit-notified:${ref}`.

### 3. Montar en el layout

- [x] `<VisitNotifier />` en `app/layout.tsx`.

### 4. Env y privacidad

- [x] Documentar en `.env.example`.
- [x] Actualizar `/privacy` ES/EN.

### 5. Probar y usar

- [ ] Local: abrir `http://localhost:3000/?ref=prueba` → debe llegar el email.
- [ ] Recargar la misma pestaña → no debe llegar otro email.
- [ ] En candidaturas: `https://israel-santos.vercel.app/?ref=nombre-empresa` (tras deploy).
- [ ] **STOP.** Revisar un envío a tu propia bandeja antes de usarlo con empresas.

---

## Cómo usarlo

1. Eliges un código: `mercadona`, `acme-marzo`.
2. Pegas: `https://israel-santos.vercel.app/?ref=mercadona`
3. Cuando abran el enlace, te llega el aviso con ese `ref`.
