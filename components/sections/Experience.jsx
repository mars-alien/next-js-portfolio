import { EXPERIENCE } from "@/data/experience";

/**
 * Experience — professional experience card(s).
 * Reads from data/experience.js; accepts no props.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-alt" aria-labelledby="exp-h">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div className="eyebrow"><span className="eyebrow-line" />Work History</div>
          <h2 id="exp-h" className="h2">Professional Experience</h2>
          <p className="section-subtitle">
            Real-world backend engineering — building secure, high-performance APIs.
          </p>
        </div>

        {EXPERIENCE.map((exp, i) => (
          <article
            key={i}
            className="exp-card"
            style={{ "--cat-accent": exp.color }}
            data-reveal="up"
            data-delay={i * 90}
          >
            <div className="exp-meta">
              <span className="exp-badge" aria-hidden="true">{exp.company.charAt(0)}</span>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-role">{exp.role}</p>
              <p className="exp-period">🗓 {exp.period}</p>
            </div>
            <div>
              <div className="tag-row">
                {exp.tags.map((t) => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
              <ul className="exp-bullets" aria-label="Key achievements">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="exp-bullet-item">
                    <span className="exp-arrow">→</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
