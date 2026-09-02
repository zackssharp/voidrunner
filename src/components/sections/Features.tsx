import {
  Swords,
  Orbit,
  Users,
  Sparkles,
  ShieldHalf,
  Trophy,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Swords,
    title: "Fluid Momentum Combat",
    description:
      "Chain melee, gunplay, and zero-G dashes into seamless combos. Every encounter rewards precision over button-mashing.",
  },
  {
    icon: Orbit,
    title: "Living Star Systems",
    description:
      "Explore six procedurally-shifting sectors where gravity wells, debris fields, and collapsing stations change every run.",
  },
  {
    icon: Users,
    title: "Drop-In Co-Op",
    description:
      "Squad up with up to three friends with full cross-platform play between Windows and macOS — no extra setup required.",
  },
  {
    icon: Sparkles,
    title: "Deep Loadout Customization",
    description:
      "Unlock over 40 weapon mods and pilot augments to build a playstyle that's entirely your own.",
  },
  {
    icon: ShieldHalf,
    title: "Faction Reputation",
    description:
      "Side with rival factions across the galaxy to unlock unique storylines, gear, and endings shaped by your choices.",
  },
  {
    icon: Trophy,
    title: "Seasonal Rift Events",
    description:
      "Free content drops every season add new bosses, maps, and cosmetics — always at no additional cost.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-background py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
            Game Features
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built for players who hate downtime
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Every system in Fury Racing is designed around one idea: keep you
            in the fight, not the menus.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <feature.icon className="h-5.5 w-5.5" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
