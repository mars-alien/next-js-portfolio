import { NAV_LINKS } from "@/constants/nav";
import { PERSONAL } from "@/data/personal";

/**
 * MobileMenu — full-screen overlay navigation for small screens.
 * Pure presentational: open/close state lives in page.jsx.
 */
export default function MobileMenu({ open, scrollTo }) {
  if (!open) return null;

  return (
    <div className="mobile-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      {NAV_LINKS.map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          className="mobile-link"
          onClick={(e) => { e.preventDefault(); scrollTo(id); }}
        >
          {label}
        </a>
      ))}
      <a href={PERSONAL.resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ display: "inline-flex", width: "fit-content" }}>
        Resume ↓
      </a>
    </div>
  );
}
