import Link from "next/link";
import { Mail, MapPin, Zap } from "lucide-react";
import { GAME, STUDIO } from "@/lib/constants";

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refunds", label: "Fulfillment & Free Product Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/80 bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-bold tracking-wide">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-accent">
                <Zap className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>{GAME.title}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              A free sci-fi action game built by {STUDIO.name}. 
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-3 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {STUDIO.legalName}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" aria-hidden="true" />
                <span>
                  {STUDIO.address.line1}
                  <br />
                  {STUDIO.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-soft" aria-hidden="true" />
                <a
                  href={`mailto:${STUDIO.supportEmail}`}
                  className="transition-colors hover:text-accent-soft"
                >
                  {STUDIO.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-subtle/80 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {STUDIO.legalName}. All rights
            reserved.
          </p>
          <p>All game titles and imagery are property of {STUDIO.legalName}.</p>
        </div>
      </div>
    </footer>
  );
}
