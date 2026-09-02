import type { Metadata } from "next";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Careers | ${STUDIO.name}`,
  description: `Open roles at ${STUDIO.name}. We're hiring a Junior Software Engineer (Unity).`,
};

const responsibilities = [
  "Build and maintain gameplay systems and tools in Unity (C#).",
  "Fix bugs, profile performance, and polish feel across Windows and macOS builds.",
  "Turn design docs and rough prototypes into shippable features.",
  "Review teammates' pull requests and take part in playtests.",
];

const requirements = [
  "0-2 years of professional experience, or a strong portfolio of personal or student projects.",
  "Working knowledge of C# and the Unity editor.",
  "Comfort with Git and reading an unfamiliar codebase.",
  "Based in or willing to relocate to Vancouver, BC (hybrid, 2 days/week in studio).",
];

const niceToHave = [
  "A shipped game, game jam entries, or mods you can show us.",
  "Familiarity with profiling tools, shaders, or netcode.",
];

export default function CareersPage() {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
          Careers
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Junior Software Engineer, Unity
        </h1>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-accent-soft" aria-hidden="true" />
            Engineering &middot; Full-time
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent-soft" aria-hidden="true" />
            Vancouver, BC (Hybrid)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent-soft" aria-hidden="true" />
            Entry level
          </span>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          <p>
            {STUDIO.name} is a small studio building {" "}
            <span className="text-foreground">Fury Racing</span>, a free
            high-velocity action game. We&rsquo;re looking for a junior engineer
            who wants to learn fast, ship often, and own real parts of the game.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              What you&rsquo;ll do
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              What we&rsquo;re looking for
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Nice to have
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {niceToHave.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">How to apply</h2>
            <p className="mt-3">
              Email{" "}
              <a
                href={`mailto:${STUDIO.supportEmail}?subject=Junior Software Engineer, Unity`}
                className="text-accent-soft underline underline-offset-2"
              >
                {STUDIO.supportEmail}
              </a>{" "}
              with your resume and links to anything you&rsquo;ve built. A short
              note on a project you&rsquo;re proud of goes a long way.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
