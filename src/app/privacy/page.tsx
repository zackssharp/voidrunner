import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { GAME, STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${STUDIO.name}`,
  description: `How ${STUDIO.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="September 1, 2026">
      <p>
        {STUDIO.legalName} (&ldquo;{STUDIO.name}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy. This
        Privacy Policy explains what information we collect through{" "}
        {STUDIO.domain} (the &ldquo;Site&rdquo;) and the {GAME.title} download
        flow (the &ldquo;Game&rdquo;), how we use it, and the choices you
        have.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          1. Information We Collect
        </h2>
        <p className="mt-3">
          When you claim your free download, we collect the information you
          voluntarily submit through our download form:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>First name and last name;</li>
          <li>Email address;</li>
          <li>Your confirmation that you agree to our Terms of Service and Privacy Policy.</li>
        </ul>
        <p className="mt-3">
          We do not collect payment card numbers, billing addresses, or any
          other payment information, because {GAME.title} is provided free of
          charge and no payment method is ever requested. We also
          automatically collect limited technical information, such as
          general device type, browser type, and approximate location
          derived from IP address, for security and analytics purposes.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          2. How We Use Your Information
        </h2>
        <p className="mt-3">We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Deliver your download link and any backup download email;</li>
          <li>Send important updates about the Game, such as patch notes and seasonal content (you may opt out at any time);</li>
          <li>Respond to support requests sent to {STUDIO.supportEmail};</li>
          <li>Maintain the security, integrity, and performance of the Site and Game;</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. Cookies and Similar Technologies
        </h2>
        <p className="mt-3">
          The Site may use cookies and similar technologies to remember your
          preferences and understand how visitors use the Site. You can
          control cookies through your browser settings; disabling cookies
          may affect certain features of the Site.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. How We Share Information
        </h2>
        <p className="mt-3">
          We do not sell your personal information. We may share information
          with trusted service providers who help us operate the Site and
          deliver downloads (such as email delivery and hosting providers),
          each bound by confidentiality obligations, or when required to
          comply with applicable law, legal process, or to protect the
          rights, property, or safety of {STUDIO.name}, our players, or
          others.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Data Retention
        </h2>
        <p className="mt-3">
          We retain the information collected through the download form for
          as long as necessary to provide the Game, deliver related
          communications, and comply with our legal obligations. You may
          request deletion of your information at any time as described in
          Section 7.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          6. Data Security
        </h2>
        <p className="mt-3">
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect your information from unauthorized
          access, disclosure, alteration, or destruction. No method of
          transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          7. Your Rights and Choices
        </h2>
        <p className="mt-3">
          Depending on your location, you may have the right to access,
          correct, delete, or export your personal information, or to object
          to or restrict certain processing. To exercise any of these
          rights, contact us at{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>
          . We will respond to verified requests within the timeframe
          required by applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          8. Children&rsquo;s Privacy
        </h2>
        <p className="mt-3">
          The Game and Site are not directed to children under 13, and we do
          not knowingly collect personal information from children under 13.
          If you believe a child has provided us with personal information,
          please contact us so we can delete it.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          9. International Transfers
        </h2>
        <p className="mt-3">
          We are based in the United States, and information you provide may
          be processed and stored in the United States or other countries
          where our service providers operate. We take steps to ensure your
          information receives an adequate level of protection wherever it is
          processed.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          10. Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. The &ldquo;Last
          updated&rdquo; date above reflects the most recent revision.
          Material changes will be communicated through the Site or by email
          where appropriate.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          11. Contact Us
        </h2>
        <p className="mt-3">
          Questions about this Privacy Policy can be directed to{" "}
          <a href={`mailto:${STUDIO.supportEmail}`} className="text-accent-soft underline underline-offset-2">
            {STUDIO.supportEmail}
          </a>{" "}
          or {STUDIO.address.line1}, {STUDIO.address.line2}.
        </p>
      </section>
    </LegalLayout>
  );
}
