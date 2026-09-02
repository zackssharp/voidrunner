"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  Loader2,
  Lock,
  Mail,
  User,
  X,
} from "lucide-react";
import { useCheckout } from "@/components/checkout/CheckoutContext";

type Step = "form" | "processing" | "success";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  agreed: boolean;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  agreed: false,
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function CheckoutModal() {
  const { isOpen, close } = useCheckout();
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setStep("form");
        setForm(initialForm);
        setErrors({});
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email.trim()) {
      next.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.agreed) {
      next.agreed = "You must agree to the Terms of Service and Privacy Policy.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("processing");
    window.setTimeout(() => {
      setStep("success");
    }, 1500);
  }

  function handleOverlayClick() {
    if (step !== "processing") close();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl border border-border-subtle bg-surface shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)] animate-fade-in-up"
      >
        {step !== "processing" && (
          <button
            type="button"
            onClick={close}
            aria-label="Close dialog"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        )}

        {step === "form" && (
          <div className="px-6 py-8 sm:px-8">
            <h2 id="checkout-modal-title" className="font-display text-xl font-bold tracking-tight">
              Claim your free download
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              Enter your details to unlock the VOIDRUNNER installer. It&rsquo;s
              free &mdash; no card, ever.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-xs font-medium text-muted">
                    First name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                      className="w-full rounded-lg border border-border-subtle bg-surface-2 py-2.5 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Jordan"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-rose-400">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-xs font-medium text-muted">
                    Last name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                      className="w-full rounded-lg border border-border-subtle bg-surface-2 py-2.5 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Reyes"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-rose-400">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-lg border border-border-subtle bg-surface-2 py-2.5 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-2.5 text-xs leading-5 text-muted">
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={(e) => setForm((f) => ({ ...f, agreed: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-subtle bg-surface-2 text-accent accent-accent"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" target="_blank" className="font-medium text-accent-soft underline underline-offset-2">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="font-medium text-accent-soft underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.agreed && (
                  <p className="mt-1 text-xs text-rose-400">{errors.agreed}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
              >
                Submit
              </button>

              <p className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted">
                <Lock className="h-3 w-3" aria-hidden="true" />
                No payment method is collected. This game is 100% free.
              </p>
            </form>
          </div>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
            <Loader2 className="h-10 w-10 animate-spin text-accent" aria-hidden="true" />
            <h2 className="mt-5 font-display text-lg font-bold tracking-tight">
              Securely processing your request&hellip;
            </h2>
            <p className="mt-1.5 max-w-xs text-sm text-muted">
              Verifying your details and preparing your download link.
            </p>
          </div>
        )}

        {step === "success" && (
          <div className="px-6 py-8 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-display text-xl font-bold tracking-tight">
              You&rsquo;re all set, {form.firstName || "pilot"}!
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Your VOIDRUNNER installer is ready. A backup download link has
              also been sent to {form.email || "your email"}.
            </p>

            <a
              href="/downloads/voidrunner-installer.zip"
              download
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Installer Now
            </a>

            <button
              type="button"
              onClick={close}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
