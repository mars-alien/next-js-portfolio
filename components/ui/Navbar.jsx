import DarkToggle from "@/components/ui/DarkToggle";
import { NAV_LINKS } from "@/constants/nav";

/**
 * Navbar — top navigation bar.
 * Pure presentational: all state and handlers come from page.jsx via props.
 *
 * Props:
 *   darkMode    {boolean}  — current dark mode state
 *   onToggleDark {fn}     — dark mode toggle handler
 *   menuOpen    {boolean} — mobile menu open state
 *   onMenuToggle {fn}     — toggles mobile menu
 *   scrollTo    {fn}      — smooth-scroll to a section id
 *   resumeUrl   {string}  — href for the Resume button
 */
export default function Navbar({
  darkMode,
  onToggleDark,
  menuOpen,
  onMenuToggle,
  scrollTo,
  resumeUrl,
}) {
  return (
    <nav className="nav-outer" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>
          Royal Sachan
        </a>

        <ul className="nav-links-row">
          {NAV_LINKS.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <DarkToggle darkMode={darkMode} onToggle={onToggleDark} />
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume ↓
          </a>
          <button
            className="hamburger-btn"
            onClick={onMenuToggle}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
