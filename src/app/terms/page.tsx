import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";
import { FOUNDERS_PACK, GAME, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${STUDIO.name}`,
  description: `Terms of Service governing use of ${GAME.title} and the ${STUDIO.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="September 2, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the website located at {STUDIO.domain} (the &ldquo;Site&rdquo;)
        and the video game {GAME.title} (the &ldquo;Game&rdquo;), each
        provided by {STUDIO.legalName} (&ldquo;{STUDIO.name}&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By
        accessing the Site, downloading the Game, or clicking &ldquo;Claim
        Free Download,&rdquo; you agree to be bound by these Terms. If you do
        not agree, please do not use the Site or the Game.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          1. Eligibility
        </h2>
        <p className="mt-3">
          You must be at least 13 years old to download or play the Game. If
          you are under the age of majority in your jurisdiction, you
          represent that a parent or legal guardian has reviewed and agreed
          to these Terms on your behalf.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          2. The Game and Paid Products
        </h2>
        <p className="mt-3">
          The base version of {GAME.title} is offered as a free digital
          download at a price of $0.00 CAD. No payment or payment instrument is
          required or collected to download and play the base game.
        </p>
        <p className="mt-3">
          {STUDIO.name} also offers the {" "}
          <span className="text-foreground">{FOUNDERS_PACK.name}</span>, an
          optional one-time purchase priced at {FOUNDERS_PACK.price}{" "}
          {FOUNDERS_PACK.currency}. Payments for the Founder&rsquo;s Pack are
          processed by our payment processor, Stripe, and are also governed by
          Stripe&rsquo;s terms. Delivery, cancellation, and refund terms for the
          Founder&rsquo;s Pack are described in our{" "}
          <Link href="/refunds" className="text-accent-soft underline underline-offset-2">
            Fulfillment &amp; Refund Policy
          </Link>
          . The price and contents of the Founder&rsquo;s Pack are shown to you
          before you complete checkout.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. License Grant
        </h2>
        <p className="mt-3">
          Subject to your compliance with these Terms, {STUDIO.name} grants
          you a limited, non-exclusive, non-transferable, revocable license
          to download, install, and use the Game on compatible devices you
          own or control, solely for your personal, non-commercial
          entertainment. This license does not transfer any ownership rights
          to you.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Account Information
        </h2>
        <p className="mt-3">
          To claim your download, we collect your first name, last name, and
          email address. You agree that the information you provide is
          accurate and belongs to you. See our{" "}
          <Link href="/privacy" className="text-accent-soft underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          for details on how this information is used and protected.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Acceptable Use
        </h2>
        <p className="mt-3">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Reverse engineer, decompile, or disassemble the Game except as permitted by applicable law;</li>
          <li>Use cheats, automation software, bots, or exploits to gain an unfair advantage;</li>
          <li>Redistribute, resell, sublicense, or rent the Game or any part of it;</li>
          <li>Use the Game or Site for any unlawful, harmful, or fraudulent purpose; or</li>
          <li>Interfere with or disrupt the integrity or performance of the Game, the Site, or associated services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          6. Intellectual Property
        </h2>
        <p className="mt-3">
          The Game, the Site, and all related content, trademarks, logos, and
          artwork are the exclusive property of {STUDIO.legalName} or its
          licensors and are protected by copyright, trademark, and other
          intellectual property laws. No rights are granted to you other than
          the limited license described in Section 3.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          7. Updates and Availability
        </h2>
        <p className="mt-3">
          We may update, modify, or discontinue the Game or any of its
          features at any time, with or without notice. We do not guarantee
          that the Game will be available, error-free, or uninterrupted at
          all times.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          8. Disclaimer of Warranties
        </h2>
        <p className="mt-3">
          The Game and Site are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or
          implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          9. Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, {STUDIO.legalName} shall
          not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to
          your use of the Game or Site, even if advised of the possibility of
          such damages.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          10. Termination
        </h2>
        <p className="mt-3">
          We may suspend or terminate your access to the Game or Site at any
          time if we believe you have violated these Terms. You may stop
          using the Game and Site at any time by uninstalling the Game and
          discontinuing your use of the Site.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          11. Governing Law
        </h2>
        <p className="mt-3">
          These Terms are governed by the laws of the State of Washington,
          United States, without regard to its conflict of law principles,
          unless otherwise required by the mandatory consumer protection laws
          of your jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          12. Changes to These Terms
        </h2>
        <p className="mt-3">
          We may revise these Terms from time to time. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the most
          recent changes. Continued use of the Game or Site after changes
          take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          13. Contact Us
        </h2>
        <p className="mt-3">
          If you have questions about these Terms, please contact us at{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          or write to us at {STUDIO.address.line1}, {STUDIO.address.line2}.
        </p>
      </section>
    </LegalLayout>
  );
}
