"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send, User, Loader2, RotateCcw } from "lucide-react";
import { GAME } from "@/lib/constants";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING = `Hi! I'm the ${GAME.title} assistant. Ask me about downloads, the Founder's Pack, refunds, or system requirements.`;

export default function SupportChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessages(next: ChatMessage[]) {
    setMessages(next);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/support-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!res.ok || !data.reply) {
        throw new Error(data.error ?? "The assistant is unavailable right now.");
      }
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    void sendMessages([...messages, { role: "user", content: text }]);
  }

  function retry() {
    if (loading || messages.length === 0) return;
    void sendMessages(messages);
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      <div className="flex items-center gap-2 border-b border-border-subtle bg-surface-2/40 px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
          <Bot className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-foreground">
          {GAME.title} assistant
        </span>
        <span className="ml-auto text-[11px] text-muted">AI &middot; answers may be imperfect</span>
      </div>

      <div
        ref={scrollRef}
        className="flex max-h-96 min-h-64 flex-col gap-4 overflow-y-auto px-4 py-5"
        aria-live="polite"
      >
        <Bubble role="assistant" content={GREETING} />
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} content={m.content} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-muted">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Thinking&hellip;
          </div>
        )}
        {error && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-rose-400/30 bg-rose-400/5 px-3 py-2 text-xs text-rose-300">
            <span>{error}</span>
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-1 font-medium text-rose-200 underline underline-offset-2"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              Try again
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border-subtle px-3 py-3"
      >
        <label htmlFor="support-chat-input" className="sr-only">
          Message the {GAME.title} assistant
        </label>
        <input
          id="support-chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question&hellip;"
          autoComplete="off"
          className="flex-1 rounded-lg border border-border-subtle bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function Bubble({ role, content }: ChatMessage) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
          isUser ? "bg-surface-2 text-muted" : "bg-accent/15 text-accent-soft"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Bot className="h-4 w-4" aria-hidden="true" />
        )}
      </span>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
          isUser
            ? "bg-accent text-white"
            : "bg-surface-2 text-foreground"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
