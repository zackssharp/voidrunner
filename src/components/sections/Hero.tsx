import { ArrowRight, Star } from "lucide-react";
import DownloadTriggerButton from "@/components/checkout/DownloadTriggerButton";
import { GAME } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <div
        className="absolute left-1/2 top-[-10rem] h-[36rem] w-[64rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.35), rgba(236,72,153,0.12), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/80 px-4 py-1.5 text-xs font-medium text-muted">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            100% Free &mdash; No Trial, No Card Required
          </div>

          <h1
            className="animate-fade-in-up mt-6 font-display text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-gradient">{GAME.title}</span>
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {GAME.tagline} Drop into the cockpit, chain flawless drifts through
            neon-lit circuits, and out-brake a full grid of rivals that wants
            you in the wall.
          </p>

          <div
            className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <DownloadTriggerButton className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_12px_28px_-8px_rgba(139,92,246,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_16px_32px_-8px_rgba(167,139,250,0.7)]">
              Get It Free Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </DownloadTriggerButton>

            <a
              href="#founders-pack"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent-soft/50 hover:text-accent-soft"
            >
              See the Founder&rsquo;s Pack
            </a>
          </div>

          <p
            className="animate-fade-in-up mt-4 text-xs text-muted"
            style={{ animationDelay: "300ms" }}
          >
            In development for Windows &amp; macOS
          </p>
        </div>

        <div
          className="animate-fade-in-up relative mx-auto mt-16 flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl border border-border-subtle/80 bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "360ms" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.25),rgba(9,9,11,0.9)_60%)]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <span className="relative text-sm font-medium text-white/70">
            Gameplay trailer coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
