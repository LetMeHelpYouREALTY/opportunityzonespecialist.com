"use client";

import "./types";

type CalendlyPopupLinkProps = {
  url: string;
  className?: string;
  children: React.ReactNode;
};

/** Opens the Calendly popup; falls back to the booking page without JS. */
export function CalendlyPopupLink({ url, className, children }: CalendlyPopupLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || !window.Calendly) return;
        event.preventDefault();
        window.Calendly.initPopupWidget({ url });
      }}
    >
      {children}
    </a>
  );
}
