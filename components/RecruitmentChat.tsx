"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useDictionary } from "@/components/DictionaryProvider";

type Role = "user" | "model";
type Msg = { role: Role; text: string };

export const RECRUIT_CHAT_OPEN_EVENT = "recruit-chat-open";

/** Abre el panel del chat (p. ej. desde el icono del navbar en móvil). */
export function openRecruitmentChat() {
  window.dispatchEvent(new Event(RECRUIT_CHAT_OPEN_EVENT));
}

export default function RecruitmentChat() {
  const { dict, locale } = useDictionary();
  const t = dict.chatbot;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Escucha el icono del navbar (móvil)
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(RECRUIT_CHAT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(RECRUIT_CHAT_OPEN_EVENT, onOpen);
  }, []);

  // Scroll al último mensaje
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, sending]);

  async function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const next: Msg[] = [...messages, { role: "user", text: trimmed }];
    setMessages(next);
    setInput("");
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, locale }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        reply?: string;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.reply) {
        const key = data.error ?? "send_failed";
        setError(
          key === "not_configured"
            ? t.errorNotConfigured
            : key === "rate_limited"
              ? t.errorRateLimited
              : t.errorGeneric,
        );
        return;
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply! }]);
    } catch {
      setError(t.errorGeneric);
    } finally {
      setSending(false);
    }
  }

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    void ask(input);
  }

  return (
    <div className="recruit-chat">
      {open && (
        <section
          className="recruit-chat-panel"
          aria-label={t.title}
          role="dialog"
          aria-modal="false"
        >
          <header className="recruit-chat-header">
            <div>
              <p className="recruit-chat-kicker">{t.kicker}</p>
              <h2 className="recruit-chat-title">{t.title}</h2>
            </div>
            <button
              type="button"
              className="recruit-chat-close"
              onClick={() => setOpen(false)}
              aria-label={t.close}
            >
              ×
            </button>
          </header>

          <div className="recruit-chat-messages" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`recruit-chat-bubble recruit-chat-bubble--${m.role}`}
              >
                {m.text}
              </div>
            ))}

            {sending && (
              <p className="recruit-chat-typing" aria-live="polite">
                {t.typing}
              </p>
            )}
          </div>

          {error && (
            <p className="recruit-chat-error" role="alert">
              {error}
            </p>
          )}

          <form className="recruit-chat-form" onSubmit={sendMessage}>
            <label className="sr-only" htmlFor="recruit-chat-input">
              {t.inputLabel}
            </label>
            <input
              id="recruit-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              disabled={sending}
              autoComplete="off"
              maxLength={800}
            />
            <button type="submit" disabled={sending || !input.trim()}>
              {t.send}
            </button>
          </form>
        </section>
      )}

      {/* Lanzador completo: solo escritorio */}
      <div className="recruit-chat-launch">
        {!open && (
          <span className="recruit-chat-bounce" aria-hidden="true">
            <MessageCircle strokeWidth={1.75} />
          </span>
        )}
        <button
          type="button"
          className={`recruit-chat-toggle${open ? " is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? t.close : t.open}
        </button>
      </div>
    </div>
  );
}
