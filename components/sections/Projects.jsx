import { PROJECTS } from "@/data/projects";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";

/**
 * Projects — 3-column card grid.
 */
export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="proj-h">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div className="eyebrow"><span className="eyebrow-line" />Selected Work</div>
          <h2 id="proj-h" className="h2">Projects</h2>
          <p className="section-subtitle">
            A curated selection of platforms and tools, focused on performance, scalability, and solving real-world problems.
          </p>
          <div className="stats-row">
            <div><p className="stat-num">{String(PROJECTS.length).padStart(2, "0")}</p><p className="stat-label">Projects</p></div>
            <div><p className="stat-num">03</p><p className="stat-label">Years Active</p></div>
            <div><p className="stat-num">12+</p><p className="stat-label">Tech Stacks</p></div>
          </div>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((proj, i) => (
            <article
              key={proj.name}
              className="proj-card"
              style={{ "--cat-accent": proj.color }}
              data-reveal="up"
              data-delay={i * 90}
            >
              <div className="proj-image-wrap">
                <img src={proj.overviewImage || DEFAULT_IMAGE} alt={proj.name} />
              </div>
              <div className="proj-body">
                <p className="proj-name">{proj.name}</p>
                <p className="proj-tagline">{proj.subtitle}</p>
                <p className="proj-desc">{proj.description}</p>
                <div className="proj-tag-row">
                  {proj.tags.map((tg) => (
                    <span key={tg} className="proj-tag">{tg}</span>
                  ))}
                </div>
                <div className="proj-link-row">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link-primary">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      View Repository
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="proj-link-ghost">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
