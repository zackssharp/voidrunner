# Fury Racing — Marketing Site

Landing page for **Spectre River Inc.** and its arcade racing game *Fury Racing*.
The base game is a free download; the site also sells a paid **Founder's Pack**
through Stripe.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- React state (Context) for the free-download modal — no external state library needed

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

- `/` — Hero, Features, System Requirements, the free Download card ($0.00 CAD),
  and the paid Founder's Pack section (`src/components/sections/FoundersPack.tsx`).
- `/terms`, `/privacy`, `/refunds` — legal pages. `/refunds` is the
  Fulfillment & Refund Policy covering both the free download and the paid
  Founder's Pack (delivery method, timeframe, 14-day refund window).
- `/support`, `/careers`, `/investors` — customer service and company pages.
- Global `Navbar` and `Footer` (legal name, mailing address, support email,
  phone) on every route.
- "Claim Free Download" opens a modal (`src/components/checkout/CheckoutModal.tsx`)
  that collects first name, last name, email, and a Terms/Privacy checkbox,
  validates client-side, shows a brief processing state, then a success screen
  with a "Download Installer Now" button.

## Before you go live

1. **Studio identity** lives in `src/lib/constants.ts` (`STUDIO`, `GAME`,
   `FOUNDERS_PACK`) and propagates everywhere. Make sure `legalName`, `address`,
   `supportEmail`, and `phone` match your real business registration.
2. **Replace the dummy installer.** `public/downloads/fury-racing-installer.zip`
   is a placeholder — point the success modal at your real installer.
3. **Wire up the Founder's Pack checkout.** Set `FOUNDERS_PACK.checkoutUrl` in
   `constants.ts` to your Stripe Payment Link (or Checkout Session URL). Until
   it's set, the buy button renders disabled. You also need a backend/webhook to
   email the license key and receipt described in `/refunds`.
4. **Add real trailer/screenshot media.** The hero media block is a placeholder
   labelled "Gameplay trailer coming soon".
5. **Have counsel review the legal copy** before connecting a live Stripe
   account or collecting data from EU/UK users.
