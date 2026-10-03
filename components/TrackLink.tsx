"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackLinkProps = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventParams?: Record<string, string>;
};

export default function TrackLink({
  event,
  eventParams,
  onClick,
  ...props
}: TrackLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
