import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckoutProvider } from "@/components/checkout/CheckoutContext";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import { GAME, STUDIO } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: `${GAME.title} — Free Download | ${STUDIO.name}`,
  description:
    "Fury Racing is a free, high-velocity sci-fi action game from Spectre River. Claim your free download today — no payment required.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <CheckoutProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CheckoutModal />
        </CheckoutProvider>
      </body>
    </html>
  );
}
