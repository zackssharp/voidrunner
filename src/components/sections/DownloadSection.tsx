import { Check, ShieldCheck } from "lucide-react";
import DownloadTriggerButton from "@/components/checkout/DownloadTriggerButton";
import Link from "next/link";

const included = [
  "The full base game — nothing paywalled",
  "All future seasonal track drops",
  "Cross-platform multiplayer for up to 8 racers",
  "No ads, no loot boxes, no hidden fees",
];

export default function DownloadSection() {
  return (
    <section className="relative bg-background py-20 sm:py-28">
      <div
        className="absolute left-1/2 top-1/2 h-[28rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.35), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-accent/30 bg-surface shadow-[0_30px_90px_-30px_rgba(139,92,246,0.35)]">
          <div className="border-b border-border-subtle/80 bg-surface-2/40 px-6 py-8 text-center sm:px-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Free Download &mdash; No Account Required
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Claim your free download
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              The full game. Every feature. Zero cost.
            </p>

            <div className="mt-6 flex items-end justify-center gap-3">
              <span className="font-display text-5xl font-black text-foreground">
                $0.00
              </span>
              <span className="pb-1.5 text-sm font-medium text-muted">CAD</span>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <DownloadTriggerButton className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_12px_28px_-8px_rgba(139,92,246,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_16px_32px_-8px_rgba(167,139,250,0.7)]">
              Claim Free Download
            </DownloadTriggerButton>

            <p className="mt-4 text-center text-xs leading-5 text-muted">
              No account or payment is required for the free download. By
              downloading, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-accent-soft">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-accent-soft">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
