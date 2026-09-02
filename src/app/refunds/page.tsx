import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import LegalLayout from "@/components/legal/LegalLayout";
import { GAME, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fulfillment & Free Product Terms | ${STUDIO.name}`,
  description: `How ${GAME.title} is delivered and why no refunds are necessary for our free digital game.`,
};

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Fulfillment & Free Product Terms"
      lastUpdated="September 1, 2026"
    >
      <div className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-5">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
        <p className="text-sm leading-6 text-foreground sm:text-base">
          <strong className="font-semibold">Fulfillment Policy:</strong> Our
          digital downloadable games are provided 100% free of charge. Upon
          completing the checkout form, users are immediately provided a
          direct digital download link on-screen. No credit cards or payment
          methods are collected for free tiers. For support, contact{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="underline underline-offset-2 hover:text-accent-soft">
            {STUDIO.supportEmail}
          </a>
          .
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          1. Overview
        </h2>
        <p className="mt-3">
          This page describes how {GAME.title} is delivered to players and
          clarifies our position on refunds, given that the current version
          of the Game is offered entirely free of charge. This policy exists
          to provide transparency to our players and to our payment
          processing partners regarding our digital fulfillment practices.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          2. How Fulfillment Works
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>You click &ldquo;Claim Free Download&rdquo; on our Site.</li>
          <li>
            You provide your first name, last name, and email address, and
            confirm your agreement to our{" "}
            <a href="/terms" className="text-accent-soft underline underline-offset-2">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-accent-soft underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </li>
          <li>
            Your request is processed instantly &mdash; no payment step
            occurs at any point in this flow.
          </li>
          <li>
            A &ldquo;Download Installer Now&rdquo; button appears immediately
            on-screen, linking directly to the Game installer.
          </li>
          <li>
            As a convenience, a backup copy of your download link is also
            sent to the email address you provided.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. Pricing
        </h2>
        <p className="mt-3">
          The current price of {GAME.title} is $0.00 USD. This price is shown
          clearly at checkout before you submit your information. We do not
          charge for the download, and we do not store or request any credit
          card, debit card, or other payment method to complete this free
          transaction.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Refunds
        </h2>
        <p className="mt-3">
          Because no payment is collected for the current free version of{" "}
          {GAME.title}, there is no charge to refund and no cancellation
          process is necessary. If you were charged unexpectedly in
          connection with our Site or Game, please contact us immediately at{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          and we will investigate and resolve the issue promptly.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Future Paid Products
        </h2>
        <p className="mt-3">
          Should {STUDIO.name} introduce paid downloadable content,
          expansions, or other purchasable products in the future, a
          dedicated refund policy specific to those offerings will be
          published and made available to purchasers prior to checkout, in
          compliance with applicable consumer protection laws and our
          payment processor&rsquo;s requirements.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          6. Contact Support
        </h2>
        <p className="mt-3">
          For questions about your download, fulfillment, or this policy,
          contact our support team at{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          or write to {STUDIO.address.line1}, {STUDIO.address.line2}. We
          aim to respond to all support inquiries within two business days.
        </p>
      </section>
    </LegalLayout>
  );
}
