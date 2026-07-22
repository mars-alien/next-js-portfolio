import { PERSONAL } from "@/data/personal";
import { TECH_PILLS } from "@/data/misc";

/**
 * Hero — full-viewport introduction section.
 *
 * Props:
 *   roleText {string} — current typewriter output (from useTypewriter hook)
 *   scrollTo {fn}    — smooth-scroll helper from page.jsx
 */
export default function Hero({ roleText, scrollTo }) {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* ── Left column ── */}
          <div>
            <div className="badge">
              <span className="badge-dot" aria-hidden="true" />
              Open to internships &amp; full-time roles
            </div>

            <h1 className="hero-h1">{PERSONAL.name}</h1>

            <div className="hero-role" aria-live="polite" aria-atomic="true">
              {roleText}
              <span className="cursor" aria-hidden="true" />
            </div>

            <p className="hero-desc">
              {PERSONAL.tagline}. Final-year CSE student at IIIT Senapati building backend
              systems and AI/ML pipelines — code that&apos;s efficient, maintainable, and
              purposeful, not just functional.
            </p>

            <div className="cta-row">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Get In Touch ↗
              </button>
              <button className="btn-secondary" onClick={() => scrollTo("projects")}>
                View Projects →
              </button>
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Resume ↓
              </a>
            </div>

            <div className="hero-pill-row">
              {TECH_PILLS.map((tp) => (
                <span key={tp} className="hero-pill">{tp}</span>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div>
            <div className="hero-image-outer">
              <div className="hero-image-ring">
                <img src={PERSONAL.photoUrl} alt="Royal Sachan — Full Stack Developer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
