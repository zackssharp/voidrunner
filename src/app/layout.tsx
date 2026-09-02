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
    "Fury Racing is a free, high-velocity arcade racing game from Spectre River. Download the base game free, or grab the Founder's Pack to support development.",
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
