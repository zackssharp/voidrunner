"use client";

import { useCheckout } from "@/components/checkout/CheckoutContext";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

export default function DownloadTriggerButton({
  children,
  className,
  icon = true,
}: {
  children: ReactNode;
  className?: string;
  icon?: boolean;
}) {
  const { open } = useCheckout();

  return (
    <button type="button" onClick={open} className={className}>
      {icon && <Download className="h-[1em] w-[1em]" aria-hidden="true" />}
      {children}
    </button>
  );
}
