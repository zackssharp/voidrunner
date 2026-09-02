import type { Metadata } from "next";
import { Building2, TrendingUp, Mail } from "lucide-react";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Investor Relations | ${STUDIO.name}`,
  description: `Investor information for ${STUDIO.name}, an independent game studio.`,
};

const snapshot = [
  { label: "Founded", value: "2026" },
  { label: "Headquarters", value: "Vancouver, BC, Canada" },
  { label: "Ownership", value: "Privately held" },
  { label: "Stage", value: "Pre-revenue, first title in development" },
];

export default function InvestorsPage() {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
          Investor Relations
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Investing in {STUDIO.name}
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          <p>
            {STUDIO.legalName} is an independent studio building{" "}
            <span className="text-foreground">Fury Racing</span>, a free
            high-velocity action game, with paid content planned after launch.
            We work with a small group of long-term partners who share that
            roadmap.
          </p>

          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Building2 className="h-5 w-5 text-accent-soft" aria-hidden="true" />
              Company snapshot
            </h2>
            <dl className="mt-4 divide-y divide-border-subtle overflow-hidden rounded-xl border border-border-subtle">
              {snapshot.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5"
                >
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="text-sm font-medium text-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 text-accent-soft" aria-hidden="true" />
              Financial information
            </h2>
            <p className="mt-3">
              {STUDIO.name} is privately held and not publicly traded. There is
              no public stock, and this page is not an offer to sell or a
              solicitation to buy any security. Detailed financials and product
              milestones are shared under NDA with prospective and current
              investors.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Mail className="h-5 w-5 text-accent-soft" aria-hidden="true" />
              Investor inquiries
            </h2>
            <p className="mt-3">
              Accredited investors can reach the team at{" "}
              <a
                href={`mailto:${STUDIO.supportEmail}?subject=Investor inquiry`}
                className="text-accent-soft underline underline-offset-2"
              >
                {STUDIO.supportEmail}
              </a>
              . Please include your firm or background and the size of investment
              you typically consider.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
