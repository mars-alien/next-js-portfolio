import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* ── Font definitions — loaded once at build time via next/font ── */
const plexSans = IBM_Plex_Sans({
  subsets:  ["latin"],
  variable: "--font-plex-sans",
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets:  ["latin"],
  variable: "--font-plex-mono",
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
});

export const metadata = {
  title:       "Royal Sachan | Full Stack Developer & Backend Engineer",
  description:
    "Royal Sachan — Final-year CSE student at IIIT Senapati (Manipur). Backend Developer, AI/ML Enthusiast & Competitive Programmer. Building efficient, sustainable software.",
  keywords:
    "Royal Sachan, Full Stack Developer, Backend Engineer, React, Node.js, Python, AI/ML, LangChain, IIIT Senapati, IIIT Manipur, Competitive Programmer",
  openGraph: {
    title:       "Royal Sachan | Full Stack Developer",
    description: "Building clean, efficient code. Explore my projects, skills, and experience.",
    type:        "website",
    url:         "https://lazyroyal.vercel.app",
  },
  twitter: { card: "summary_large_image" },
  robots:  { index: true, follow: true },
};

/* viewportFit:"cover" is required for env(safe-area-inset-*) to resolve on iOS
   instead of always returning 0 — used to keep fixed UI clear of notches/home-indicator */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
