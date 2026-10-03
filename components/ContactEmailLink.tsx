"use client";

import { trackEvent } from "@/lib/analytics";

export default function ContactEmailLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent("contact_click")}
    >
      {children}
    </a>
  );
}
