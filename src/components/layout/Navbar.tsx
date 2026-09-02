"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import DownloadTriggerButton from "@/components/checkout/DownloadTriggerButton";
import { GAME } from "@/lib/constants";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#specs", label: "Specs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-wide">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-accent">
            <Zap className="h-4.5 w-4.5" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span>
            {GAME.title.slice(0, 4)}
            <span className="text-accent-soft">{GAME.title.slice(4)}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <DownloadTriggerButton className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_8px_20px_-6px_rgba(139,92,246,0.55)] transition-all hover:bg-accent-soft hover:shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_10px_24px_-6px_rgba(167,139,250,0.65)]">
            Download Free
          </DownloadTriggerButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle/80 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-3">
              <DownloadTriggerButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
                Download Free
              </DownloadTriggerButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
