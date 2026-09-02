import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { FOUNDERS_PACK, GAME } from "@/lib/constants";

export default function FoundersPack() {
  const hasCheckout = FOUNDERS_PACK.checkoutUrl.trim().length > 0;

  return (
    <section
      id="founders-pack"
      className="relative bg-background py-20 sm:py-28 scroll-mt-16"
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
            Support Development
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {FOUNDERS_PACK.name}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            {GAME.title} is free to download and always will be. The Founder&rsquo;s
            Pack is an optional one-time purchase &mdash; cosmetic extras and a
            credit &mdash; for players who want to support ongoing development.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-accent/30 bg-surface shadow-[0_30px_90px_-30px_rgba(139,92,246,0.35)]">
          <div className="border-b border-border-subtle/80 bg-surface-2/40 px-6 py-8 text-center sm:px-10">
            <div className="flex items-end justify-center gap-2">
              <span className="font-display text-5xl font-black text-foreground">
                {FOUNDERS_PACK.price}
              </span>
              <span className="pb-1.5 text-sm font-medium text-muted">
                {FOUNDERS_PACK.currency} &middot; one-time
              </span>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <ul className="space-y-3">
              {FOUNDERS_PACK.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground sm:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {hasCheckout ? (
              <a
                href={FOUNDERS_PACK.checkoutUrl}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_12px_28px_-8px_rgba(139,92,246,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_16px_32px_-8px_rgba(167,139,250,0.7)]"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Buy the Founder&rsquo;s Pack
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-surface-2 px-8 py-4 text-base font-semibold text-muted"
              >
                Checkout opening soon
              </button>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-muted">
              Delivered as a license key by email right after checkout; redeem it
              in-game to unlock your items. Payments are processed by Stripe. See
              our{" "}
              <Link
                href="/refunds"
                className="underline underline-offset-2 hover:text-accent-soft"
              >
                Fulfillment &amp; Refund Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
