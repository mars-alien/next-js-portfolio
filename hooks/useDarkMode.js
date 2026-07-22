"use client";
import { useState } from "react";

/**
 * useDarkMode — toggles the .dm class on the page root.
 * Colors are driven entirely by CSS custom properties (see globals.css),
 * so no direct DOM style manipulation is needed here.
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => setDarkMode((d) => !d);
  return { darkMode, toggle };
}
