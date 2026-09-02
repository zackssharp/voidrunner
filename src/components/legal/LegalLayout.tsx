import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
          Legal
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {children}
        </div>
      </div>
    </div>
  );
}
