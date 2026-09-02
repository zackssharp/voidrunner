"use client";

import { useState } from "react";
import { AppWindow, Apple } from "lucide-react";

type SpecRow = {
  label: string;
  minimum: string;
  recommended: string;
};

type PlatformSpecs = {
  label: string;
  icon: typeof AppWindow;
  rows: SpecRow[];
};

const platforms: Record<"windows" | "mac", PlatformSpecs> = {
  windows: {
    label: "Windows",
    icon: AppWindow,
    rows: [
      { label: "OS", minimum: "Windows 10 (64-bit)", recommended: "Windows 11 (64-bit)" },
      { label: "Processor", minimum: "Intel Core i5-8400 / AMD Ryzen 5 2600", recommended: "Intel Core i7-11700 / AMD Ryzen 7 5800X" },
      { label: "Memory", minimum: "8 GB RAM", recommended: "16 GB RAM" },
      { label: "Graphics", minimum: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB", recommended: "NVIDIA RTX 3060 / AMD RX 6700 XT" },
      { label: "Storage", minimum: "35 GB available space (SSD recommended)", recommended: "35 GB available space (NVMe SSD)" },
      { label: "DirectX", minimum: "Version 12", recommended: "Version 12" },
    ],
  },
  mac: {
    label: "macOS",
    icon: Apple,
    rows: [
      { label: "OS", minimum: "macOS 12 Monterey", recommended: "macOS 14 Sonoma or later" },
      { label: "Processor", minimum: "Apple M1", recommended: "Apple M2 Pro or later" },
      { label: "Memory", minimum: "8 GB unified memory", recommended: "16 GB unified memory" },
      { label: "Graphics", minimum: "Apple M1 integrated GPU", recommended: "Apple M2 Pro integrated GPU or better" },
      { label: "Storage", minimum: "35 GB available space", recommended: "35 GB available space (SSD)" },
      { label: "Display", minimum: "1440 x 900", recommended: "2560 x 1600 (Retina)" },
    ],
  },
};

export default function SystemRequirements() {
  const [platform, setPlatform] = useState<"windows" | "mac">("windows");
  const active = platforms[platform];

  return (
    <section id="specs" className="relative bg-background py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
            System Requirements
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Runs great on modest hardware
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            VOIDRUNNER is optimized to run smoothly across a wide range of
            systems. Check your specs below before downloading.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-2 rounded-full border border-border-subtle bg-surface p-1.5 mx-auto w-fit">
          {(Object.keys(platforms) as Array<"windows" | "mac">).map((key) => {
            const p = platforms[key];
            const isActive = key === platform;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPlatform(key)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-accent text-white shadow-[0_4px_14px_-4px_rgba(139,92,246,0.6)]"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <p.icon className="h-4 w-4" aria-hidden="true" />
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border-subtle bg-surface">
          <div className="grid grid-cols-3 border-b border-border-subtle bg-surface-2/60 text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">
            <div className="px-4 py-4 sm:px-6">Component</div>
            <div className="px-4 py-4 sm:px-6">Minimum</div>
            <div className="px-4 py-4 sm:px-6 text-accent-soft">Recommended</div>
          </div>
          {active.rows.map((row, idx) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 text-xs sm:text-sm ${
                idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
              }`}
            >
              <div className="px-4 py-4 font-medium text-foreground sm:px-6">
                {row.label}
              </div>
              <div className="px-4 py-4 text-muted sm:px-6">{row.minimum}</div>
              <div className="px-4 py-4 text-foreground sm:px-6">
                {row.recommended}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
