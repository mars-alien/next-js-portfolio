import { SKILLS } from "@/data/skills";
import { FaCode } from "react-icons/fa6";
import { SiReact, SiNodedotjs, SiDocker } from "react-icons/si";
import { LuBrainCircuit, LuDatabase } from "react-icons/lu";

const CATEGORY_ICONS = {
  Languages: FaCode,
  Frontend: SiReact,
  Backend: SiNodedotjs,
  "AI / ML": LuBrainCircuit,
  Databases: LuDatabase,
  "DevOps & Tools": SiDocker,
};

/**
 * Skills — masonry grid of skill-category cards, each with a real icon badge.
 */
export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div className="eyebrow"><span className="eyebrow-line" />What I Know</div>
          <h2 id="skills-h" className="h2">Technical Skills</h2>
          <p className="section-subtitle">
            Across six domains — built through real projects, backend systems, and AI/ML work.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.category] ?? FaCode;
            return (
              <article
                key={cat.category}
                className="skill-card"
                style={{ "--cat-accent": cat.color }}
                data-reveal="scale"
                data-delay={i * 90}
              >
                <div className="skill-head">
                  <h3 className="skill-name">{cat.category}</h3>
                  <span className="skill-badge" aria-hidden="true"><Icon /></span>
                </div>
                <div className="tag-row">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
