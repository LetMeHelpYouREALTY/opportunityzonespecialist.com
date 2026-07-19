"use client";

import { useEffect } from "react";
import "./types";

type CalendlyBadgeProps = {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
};

const DEFAULT_URL = "https://calendly.com/drjanduffy/showing";

export function CalendlyBadge({
  url = DEFAULT_URL,
  text = "Schedule a showing",
  color = "#C4A35A",
  textColor = "#0B1F33",
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };

    if (window.Calendly) {
      initBadge();
      return;
    }

    const check = setInterval(() => {
      if (window.Calendly) {
        clearInterval(check);
        initBadge();
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(check), 10000);
    return () => {
      clearInterval(check);
      clearTimeout(timeout);
    };
  }, [url, text, color, textColor, branding]);

  return null;
}
