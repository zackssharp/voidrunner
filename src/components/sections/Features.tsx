import {
  Gauge,
  Route,
  Users,
  Wrench,
  Trophy,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Gauge,
    title: "Weight-Shift Handling",
    description:
      "Brake, drift, and boost with a handling model that rewards reading the corner ahead instead of holding the throttle flat.",
  },
  {
    icon: Route,
    title: "Tracks That Never Sit Still",
    description:
      "Race twelve circuits where weather rolls in, barriers shift, and shortcuts open and close from one lap to the next.",
  },
  {
    icon: Users,
    title: "Drop-In Multiplayer",
    description:
      "Jump into ranked or casual lobbies for up to eight racers, with full cross-play between Windows and macOS — no extra setup required.",
  },
  {
    icon: Wrench,
    title: "Garage & Tuning",
    description:
      "Swap over 40 parts and dial in gearing, downforce, and tire compound to build a car that matches your line.",
  },
  {
    icon: Trophy,
    title: "Rival Circuit Career",
    description:
      "Climb a season-long ladder where AI rivals remember how you race and come back faster at every event.",
  },
  {
    icon: CalendarClock,
    title: "Seasonal Track Drops",
    description:
      "New circuits, liveries, and time-trial ghosts land every season — always at no additional cost.",
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
            Built for players who hate lifting off the throttle
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Every system in Fury Racing is designed around one idea: keep you
            on the racing line, not in the menus.
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
