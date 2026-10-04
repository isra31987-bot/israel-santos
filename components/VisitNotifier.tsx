"use client";

import { useEffect } from "react";

// Lee ?ref= de la URL y envía un email de aviso (estilo Mosset).
// Una sola vez por ref en la misma pestaña (sessionStorage).

const REF_RE = /^[a-zA-Z0-9-]{1,40}$/;
const STORAGE_PREFIX = "visit-notified:";

function isValidRef(value: string) {
  return REF_RE.test(value);
}

async function sendVisitNotify(ref: string) {
  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const when = new Date().toISOString();
  const ua = typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 200) : "";
  const message = [
    "Alguien abrió el portfolio con un enlace de seguimiento.",
    "",
    `ref: ${ref}`,
    `fecha (UTC): ${when}`,
    `user-agent: ${ua}`,
  ].join("\n");

  // Web3Forms free solo acepta envíos desde el navegador.
  if (web3Key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3Key,
        name: "Visit notifier",
        email: "isra31987@gmail.com",
        subject: `WebCV abierto — ref: ${ref}`,
        message,
        from_name: "Portfolio Israel Santos",
        botcheck: false,
      }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(res.ok && data.success);
  }

  // Fallback: Resend en servidor
  const res = await fetch("/api/visit-notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ref }),
  });
  const data = (await res.json()) as { ok?: boolean };
  return Boolean(res.ok && data.ok);
}

export default function VisitNotifier() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = (params.get("ref") ?? "").trim();
    if (!isValidRef(ref)) return;

    const key = `${STORAGE_PREFIX}${ref}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // sessionStorage bloqueado: seguir e intentar notificar una vez
    }

    void sendVisitNotify(ref).catch(() => {
      // Silencioso: no mostrar UI; el tracking no debe romper la página
    });
  }, []);

  return null;
}
