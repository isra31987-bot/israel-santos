"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Dictionary } from "@/i18n/types";

type Channel = "email" | "whatsapp";
type Status = "idle" | "sending" | "success" | "error";

type Props = {
  /** Teléfono solo dígitos con prefijo país, p.ej. 34677230612 */
  whatsappNumber: string;
  emailSubject: string;
  labels: Dictionary["contact"]["form"];
};

export default function ContactForm({
  whatsappNumber,
  emailSubject,
  labels,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState<Channel>("email");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  function buildWhatsappText() {
    const lines = [
      name.trim() ? `Nombre: ${name.trim()}` : "",
      email.trim() ? `Email: ${email.trim()}` : "",
      "",
      message.trim(),
    ];
    return lines.filter(Boolean).join("\n").trim();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    if (!name.trim() || !message.trim()) {
      setStatus("error");
      setErrorKey("missing_fields");
      return;
    }

    if (channel === "email" && !email.trim()) {
      setStatus("error");
      setErrorKey("missing_fields");
      return;
    }

    trackEvent("contact_click");
    setStatus("sending");
    setErrorKey(null);

    if (channel === "whatsapp") {
      const text = encodeURIComponent(buildWhatsappText());
      // api.whatsapp.com es más fiable que wa.me en escritorio
      const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
      window.location.href = url;
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: emailSubject,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorKey(data.error ?? "send_failed");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorKey("send_failed");
    }
  }

  const statusMessage =
    status === "sending"
      ? labels.statusSending
      : status === "success"
        ? channel === "whatsapp"
          ? labels.statusSuccessWhatsapp
          : labels.statusSuccessEmail
        : status === "error"
          ? errorKey === "email_not_configured"
            ? labels.statusNotConfigured
            : labels.statusError
          : null;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-field">
        <label htmlFor="contact-name">{labels.name}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder={labels.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "sending"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-email">{labels.emailField}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required={channel === "email"}
          placeholder={labels.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message">{labels.message}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder={labels.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "sending"}
        />
      </div>

      <fieldset className="contact-form-channel">
        <legend>{labels.channelLabel}</legend>
        <div className="contact-form-channel-options" role="group">
          <button
            type="button"
            className={`contact-channel-btn${channel === "email" ? " is-active" : ""}`}
            onClick={() => {
              setChannel("email");
              setStatus("idle");
              setErrorKey(null);
            }}
            aria-pressed={channel === "email"}
            disabled={status === "sending"}
          >
            {labels.channelEmail}
          </button>
          <button
            type="button"
            className={`contact-channel-btn${channel === "whatsapp" ? " is-active" : ""}`}
            onClick={() => {
              setChannel("whatsapp");
              setStatus("idle");
              setErrorKey(null);
            }}
            aria-pressed={channel === "whatsapp"}
            disabled={status === "sending"}
          >
            {labels.channelWhatsapp}
          </button>
        </div>
      </fieldset>

      <button
        type="submit"
        className="contact-form-submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? labels.statusSending
          : channel === "email"
            ? labels.submitEmail
            : labels.submitWhatsapp}
      </button>

      <p className="contact-form-hint">
        {channel === "email" ? labels.hintEmail : labels.hintWhatsapp}
      </p>

      {statusMessage && (
        <p
          className={`contact-form-status contact-form-status--${status}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
