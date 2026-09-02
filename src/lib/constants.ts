export const STUDIO = {
  name: "Spectre River",
  legalName: "Spectre River Inc.",
  address: {
    line1: "6433 Cartier St",
    line2: "Vancouver, BC V6M 0E2, Canada",
  },
  supportEmail: "support@spectreriver.com",
  phone: "+1 (672) 208-6448",
  phoneHref: "+16722086448",
  domain: "spectreriver.com",
};

export const GAME = {
  title: "Fury Racing",
  tagline: "The spectre doesn't wait for the weak.",
};

// Paid product offered alongside the free base game.
// Set `checkoutUrl` to your Stripe Payment Link (or Checkout Session URL)
// once the Stripe account is approved; until then the buy button is disabled.
export const FOUNDERS_PACK = {
  name: "Fury Racing Founder's Pack",
  price: "CA$14.99",
  currency: "CAD",
  checkoutUrl: "",
  items: [
    "Closed beta access before the public launch",
    "Six exclusive Founder car liveries",
    "Numbered Founder badge on your in-game profile",
    "Your name in the in-game Founders credits",
  ],
};
