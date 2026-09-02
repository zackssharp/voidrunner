import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, Bug, ReceiptText } from "lucide-react";
import { GAME, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Customer Service | ${STUDIO.name}`,
  description: `Get help with your ${GAME.title} download, account, or a bug report.`,
};

const topics = [
  {
    icon: Download,
    title: "Download & install",
    body: "Your download link appears on-screen right after the form and is also emailed to you. If it won't start, check your spam folder or request it again.",
  },
  {
    icon: Mail,
    title: "Account & email",
    body: "We only store the name and email you submit. Email us to update or delete your details at any time.",
  },
  {
    icon: Bug,
    title: "Bugs & crashes",
    body: "Tell us your OS, hardware, and what you were doing when it happened. Screenshots or a short clip help a lot.",
  },
  {
    icon: ReceiptText,
    title: "Charges & refunds",
    body: null,
  },
];

export default function SupportPage() {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
          Customer Service
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          We&rsquo;re here to help
        </h1>

        <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {GAME.title} is free, and so is support. Email{" "}
          <a
            href={`mailto:${STUDIO.supportEmail}?subject=${encodeURIComponent(
              `${GAME.title} support`,
            )}`}
            className="text-accent-soft underline underline-offset-2"
          >
            {STUDIO.supportEmail}
          </a>{" "}
          and we aim to reply within two business days.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-border-subtle bg-surface p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <topic.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">
                {topic.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {topic.body ?? (
                  <>
                    No payment is ever collected, so there is nothing to refund.
                    If you were charged unexpectedly, see our{" "}
                    <Link
                      href="/refunds"
                      className="text-accent-soft underline underline-offset-2"
                    >
                      Fulfillment &amp; Free Product Terms
                    </Link>{" "}
                    and contact us right away.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border-subtle bg-surface-2/40 p-6">
          <h2 className="text-base font-semibold text-foreground">
            Contact us directly
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Email:{" "}
            <a
              href={`mailto:${STUDIO.supportEmail}`}
              className="text-accent-soft underline underline-offset-2"
            >
              {STUDIO.supportEmail}
            </a>
            <br />
            Mail: {STUDIO.legalName}, {STUDIO.address.line1},{" "}
            {STUDIO.address.line2}
          </p>
        </div>
      </div>
    </div>
  );
}
