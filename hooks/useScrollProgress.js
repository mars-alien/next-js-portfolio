"use client";
import { useState, useEffect } from "react";

/**
 * useScrollProgress — returns how far down the page the user has scrolled, 0–100.
 * Drives the fixed progress bar under the ticker.
 */
export function useScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return pct;
}
