import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import LegalLayout from "@/components/legal/LegalLayout";
import { FOUNDERS_PACK, GAME, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fulfillment & Refund Policy | ${STUDIO.name}`,
  description: `How ${GAME.title} and the ${FOUNDERS_PACK.name} are delivered, and how to request a refund.`,
};

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Fulfillment & Refund Policy"
      lastUpdated="September 2, 2026"
    >
      <div className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-5">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
        <p className="text-sm leading-6 text-foreground sm:text-base">
          <strong className="font-semibold">Summary:</strong> The base{" "}
          {GAME.title} download is free and delivered on-screen immediately. The{" "}
          {FOUNDERS_PACK.name} ({FOUNDERS_PACK.price} {FOUNDERS_PACK.currency},
          one-time) is a paid digital product delivered by email as a license
          key right after checkout. You can request a full refund of the
          Founder&rsquo;s Pack within 14 days of purchase as long as closed beta
          access has not yet been activated. Contact{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="underline underline-offset-2 hover:text-accent-soft">
            {STUDIO.supportEmail}
          </a>
          .
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground">1. Products</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="text-foreground">{GAME.title} (base game)</span>{" "}
            &mdash; free digital download, $0.00 CAD.
          </li>
          <li>
            <span className="text-foreground">{FOUNDERS_PACK.name}</span> &mdash;
            optional one-time purchase, {FOUNDERS_PACK.price}{" "}
            {FOUNDERS_PACK.currency}. Includes closed beta access, six Founder
            car liveries, a numbered profile badge, and a credit in the in-game
            Founders list.
          </li>
        </ul>
        <p className="mt-3">
          Prices and contents are shown on this Site before you complete any
          purchase. Payments for the Founder&rsquo;s Pack are processed by
          Stripe; {STUDIO.legalName} does not receive or store your full card
          number.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          2. How the free download is delivered
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>You click &ldquo;Claim Free Download&rdquo; on our Site.</li>
          <li>
            You provide your first name, last name, and email address and
            confirm your agreement to our{" "}
            <Link href="/terms" className="text-accent-soft underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-accent-soft underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </li>
          <li>No payment step occurs at any point in this flow.</li>
          <li>
            A &ldquo;Download Installer Now&rdquo; button appears immediately
            on-screen, linking directly to the game installer.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. How the Founder&rsquo;s Pack is delivered
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            You review the price and contents on this Site and continue to
            Stripe Checkout.
          </li>
          <li>You complete payment through Stripe.</li>
          <li>
            We email a license key and receipt to the address on your order,
            normally within a few minutes and no later than 24 hours.
          </li>
          <li>
            The key unlocks closed beta access when the beta opens and the
            in-game cosmetic items when the game launches. Purchasing before
            those dates is a pre-order of that content.
          </li>
        </ol>
        <p className="mt-3">
          If you have not received your key within 24 hours, check your spam
          folder and then contact{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Refunds and cancellation
        </h2>
        <p className="mt-3">
          The free base game involves no charge, so there is nothing to refund.
        </p>
        <p className="mt-3">
          For the {FOUNDERS_PACK.name}, you may request a full refund within 14
          days of purchase, provided your license key has not yet been used to
          activate closed beta access. Once beta access has been activated, the
          purchase is non-refundable because the digital content has been
          delivered and consumed.
        </p>
        <p className="mt-3">
          To request a refund, email{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          from the address on your order, or include your Stripe receipt number.
          Approved refunds are returned to the original payment method through
          Stripe, typically within 5&ndash;10 business days depending on your
          bank or card issuer. There are no separate cancellation fees.
        </p>
        <p className="mt-3">
          If you were charged unexpectedly or believe a charge is fraudulent,
          contact us immediately and we will investigate and resolve it
          promptly.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Contact support
        </h2>
        <p className="mt-3">
          For questions about your download, an order, or this policy, contact
          our support team at{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          or {STUDIO.phone}, or write to {STUDIO.legalName},{" "}
          {STUDIO.address.line1}, {STUDIO.address.line2}. We aim to respond to
          all support inquiries within two business days.
        </p>
      </section>
    </LegalLayout>
  );
}
