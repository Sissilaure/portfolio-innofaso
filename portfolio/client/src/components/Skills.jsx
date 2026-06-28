import { useReveal } from "../hooks/useReveal";

const DOMAIN_COLORS = ["#1F7A4D", "#D97B29", "#2563A8", "#9B4FB0"];

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal();
  const color = DOMAIN_COLORS[index % DOMAIN_COLORS.length];
  return (
    <div ref={ref} className={`card reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${index * 70}ms`, background: `linear-gradient(160deg, ${color}10, var(--surface) 40%)` }}>
      <h3 style={{ fontSize: "1rem", marginBottom: 10, color }}>{skill.domain}</h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
        {skill.items.map((item, i) => (
          <li key={i} style={{ fontSize: "0.85rem", color: "var(--ink-soft)", paddingLeft: 14, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color }}>·</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StackColumn({ title, items, color }) {
  if (!items) return null;
  return (
    <div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 700 }}>
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((item) => (
          <span key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 12, padding: "5px 10px", background: `${color}12`, borderRadius: 6, color: "var(--ink-soft)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skillsGained, techStack, innovation }) {
  const [titleRef, titleVisible] = useReveal();
  const [stackRef, stackVisible] = useReveal();
  const [innovRef, innovVisible] = useReveal();

  return (
    <section id="competences" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? "is-visible" : ""}`} style={{ maxWidth: 640, marginBottom: "var(--space-4)" }}>
          <p className="eyebrow">Bilan</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginTop: 12 }}>Ce que j'en retiens</h2>
        </div>

        {skillsGained && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
            {skillsGained.map((skill, i) => <SkillCard key={skill.domain} skill={skill} index={i} />)}
          </div>
        )}

        {techStack && (
          <div ref={stackRef} className={`reveal ${stackVisible ? "is-visible" : ""}`} style={{ borderTop: "1px solid var(--line)", paddingTop: "var(--space-3)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
            <StackColumn title="Frontend" items={techStack.frontend} color="#1F7A4D" />
            <StackColumn title="Backend" items={techStack.backend} color="#D97B29" />
            <StackColumn title="IoT" items={techStack.iot} color="#2563A8" />
            <StackColumn title="Outils" items={techStack.outils} color="#9B4FB0" />
          </div>
        )}

        {innovation && (
          <div ref={innovRef} className={`reveal ${innovVisible ? "is-visible" : ""}`} style={{ borderTop: "1px solid var(--line)", paddingTop: "var(--space-3)" }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>{innovation.title}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-3)" }}>
              {innovation.points?.map((p, i) => (
                <div key={i} className="card" style={{ background: "var(--ink)", color: "var(--bg)" }}>
                  <strong style={{ fontSize: "0.92rem", display: "block", marginBottom: 8, color: "var(--brand-bright)" }}>{p.title}</strong>
                  <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.7)" }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
