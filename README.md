# VOIDRUNNER — Marketing Site

A free-to-download game landing page built for **Nightspire Interactive**, structured to satisfy Stripe's business-account review requirements for a $0.00 digital product.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- React state (Context) for the checkout modal — no external state library needed

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build:

```bash
npm run build
npm run start
```

## What's inside

- `/` — Hero, Game Features, System Requirements (Windows/macOS tabs with Minimum vs Recommended specs), and the Download/Checkout card ($0.00 pricing).
- `/terms`, `/privacy`, `/refunds` — full legal pages. `/refunds` contains the exact Stripe-required fulfillment statement in a highlighted callout at the top of the page.
- Global `Navbar` and `Footer` (with studio legal name, mailing address, and support email) on every route.
- "Claim Free Download" / "Get It Free Now" open a modal (`src/components/checkout/CheckoutModal.tsx`) that collects first name, last name, email, and a Terms/Privacy checkbox; validates client-side; simulates a 1.5s "processing" state; then shows a success screen with a "Download Installer Now" button (pointing at a placeholder file in `public/downloads/`) and a "we also emailed you a backup link" message.

## Before you launch

1. **Swap the studio identity.** Everything — legal name, address, support email, game title, tagline — lives in one file: `src/lib/constants.ts`. Update it there and it propagates to the footer, legal pages, metadata, and modal copy.
2. **Replace the dummy installer.** `public/downloads/voidrunner-installer.zip` is a placeholder. Point the success modal at your real installer.
3. **Wire up real email delivery.** The "backup link sent to your email" message is currently just copy — there's no backend. Hook the form submit handler in `CheckoutModal.tsx` up to your email/CRM provider (or an API route) if you want that promise to be real before going live.
4. **Add real trailer/screenshot media.** The hero's video block and background are placeholder gradients — drop in your actual trailer embed and key art.
5. **Confirm the legal copy with counsel.** The Terms, Privacy Policy, and Fulfillment page are professional starting drafts, not a substitute for legal review — especially before connecting a live Stripe account or collecting data from EU/UK users.
