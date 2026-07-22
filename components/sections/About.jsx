import { PERSONAL } from "@/data/personal";
import { ACHIEVEMENTS } from "@/data/achievements";

/**
 * About — bio card + achievements card, plus a press feature card.
 *
 * Props:
 *   scrollTo {fn} — smooth-scroll helper from page.jsx
 */
export default function About({ scrollTo }) {
  return (
    <section id="about" className="section-alt" aria-labelledby="about-h">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div className="eyebrow"><span className="eyebrow-line" />Who I Am</div>
          <h2 id="about-h" className="h2">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="card" style={{ "--cat-accent": "var(--accent)" }} data-reveal="up">
            <p className="about-bio">{PERSONAL.bio}</p>
            <div className="cta-row" style={{ marginBottom: 0 }}>
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download Resume ↓
              </a>
              <button className="btn-secondary" onClick={() => scrollTo("contact")}>
                Contact Me →
              </button>
            </div>
          </div>

          <div className="card" style={{ "--cat-accent": "#7c3aed" }} data-reveal="up" data-delay="120">
            <h3 className="card-heading">Key Achievements</h3>
            <ul className="ach-list">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i} className="ach-item">
                  <span className="ach-icon" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="ach-text">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
