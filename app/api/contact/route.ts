import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: string, max: number) {
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: ContactBody;

  try {
    payload = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = sanitize(payload.name ?? "", 120);
  const email = sanitize(payload.email ?? "", 180);
  const message = sanitize(payload.message ?? "", 4000);
  const subject = sanitize(
    payload.subject ?? "Contacto desde portfolio — Israel Santos",
    180,
  );

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "isra31987@gmail.com";
  const text = [
    `Nuevo mensaje desde el portfolio`,
    ``,
    `Nombre: ${name}`,
    `Email: ${email}`,
    ``,
    message,
  ].join("\n");

  try {
    // Prefer client-side Web3Forms (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY).
    // This route is the Resend fallback (server-side API key).
    if (process.env.RESEND_API_KEY) {
      await sendWithResend({ toEmail, email, name, subject, text, message });
      return NextResponse.json({ ok: true, provider: "resend" });
    }

    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 503 },
    );
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}

async function sendWithResend({
  toEmail,
  email,
  name,
  subject,
  text,
  message,
}: {
  toEmail: string;
  email: string;
  name: string;
  subject: string;
  text: string;
  message: string;
}) {
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Israel Santos <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<hr/>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend failed: ${res.status} ${detail}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
