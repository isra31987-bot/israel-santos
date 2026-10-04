import { NextResponse } from "next/server";

// Solo notifica por email; no guarda historial en base de datos.
// Preferir Web3Forms desde el navegador (VisitNotifier). Esta ruta es el fallback Resend.

const REF_RE = /^[a-zA-Z0-9-]{1,40}$/;

type Body = { ref?: string };

export async function POST(request: Request) {
  let payload: Body;
  try {
    payload = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const ref = (payload.ref ?? "").trim();
  if (!REF_RE.test(ref)) {
    return NextResponse.json({ ok: false, error: "invalid_ref" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 503 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "isra31987@gmail.com";
  const ua = request.headers.get("user-agent")?.slice(0, 200) ?? "unknown";
  const when = new Date().toISOString();
  const subject = `WebCV abierto — ref: ${ref}`;
  const text = [
    "Alguien abrió el portfolio con un enlace de seguimiento.",
    "",
    `ref: ${ref}`,
    `fecha (UTC): ${when}`,
    `user-agent: ${ua}`,
  ].join("\n");

  try {
    const from =
      process.env.RESEND_FROM_EMAIL ??
      "Portfolio Israel Santos <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[visit-notify]", res.status, detail);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, provider: "resend" });
  } catch (error) {
    console.error("[visit-notify]", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
