"use client";
import { useEffect } from "react";

/**
 * useNavOffset — measures the real rendered height of the ticker + navbar
 * and exposes it as --nav-offset on the document root, so the mobile menu
 * overlay always sits flush below them instead of relying on a guessed
 * pixel value that drifts out of sync when the nav's content changes.
 */
export function useNavOffset() {
  useEffect(() => {
    const nav = document.querySelector(".nav-outer");
    if (!nav) return;

    const update = () => {
      const bottom = nav.getBoundingClientRect().bottom;
      document.documentElement.style.setProperty("--nav-offset", `${bottom}px`);
    };

    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(nav);

    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);
}
