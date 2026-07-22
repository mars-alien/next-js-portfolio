import { NAV_LINKS } from "@/constants/nav";
import { PERSONAL } from "@/data/personal";
import { FOOTER_TECH } from "@/data/misc";

/**
 * Footer — four-column grid with brand, nav, tech stack, and profiles.
 *
 * Props:
 *   scrollTo {fn} — smooth-scroll helper from page.jsx
 */
export default function Footer({ scrollTo }) {
  const profiles = [
    { label: "GitHub",   href: PERSONAL.github,               color: "#7c3aed" },
    { label: "LinkedIn", href: PERSONAL.linkedin,              color: "#2563eb" },
    { label: "LeetCode", href: PERSONAL.leetcode,              color: "#f59e0b" },
    { label: "CodeChef", href: PERSONAL.codechef,              color: "#92400e" },
    { label: "Email",    href: `mailto:${PERSONAL.email}`,     color: "#d97706" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Royal Sachan</p>
            <p className="footer-tagline">
              Final-year CSE student at IIIT Senapati, Manipur. Building efficient backend
              systems and AI/ML solutions.
            </p>
            <p className="footer-quote">
              &ldquo;The best code runs efficiently, maintainably, and leaves the world a little better.&rdquo;
            </p>
          </div>

          <div>
            <p className="footer-col-heading">Navigate</p>
            <ul className="footer-link-list">
              {NAV_LINKS.map(([lbl, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  >
                    {lbl}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-heading">Tech Stack</p>
            <ul className="footer-link-list">
              {FOOTER_TECH.map((t) => (
                <li key={t} className="footer-link">{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-heading">Profiles</p>
            <ul className="footer-link-list">
              {profiles.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-profile-link"
                    style={{ "--cat-accent": l.color }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer-bottom">© 2026 Royal Sachan · All rights reserved</p>
      </div>
    </footer>
  );
}
