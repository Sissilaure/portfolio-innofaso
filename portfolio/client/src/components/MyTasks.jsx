import { useReveal } from "../hooks/useReveal";

const GROUP_COLORS = ["#1F7A4D", "#D97B29", "#2563A8", "#9B4FB0"];

function TaskGroup({ group, index }) {
  const [ref, visible] = useReveal();
  const color = GROUP_COLORS[index % GROUP_COLORS.length];
  return (
    <div ref={ref} className={`card reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${index * 70}ms` }}>
      <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: color, marginBottom: 10 }} />
      <h3 style={{ fontSize: "0.95rem", marginBottom: 12, fontWeight: 700 }}>{group.category}</h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {group.items.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.85rem", color: "var(--ink-soft)" }}>
            <span style={{ color, flexShrink: 0, marginTop: 2 }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MyTasks({ tasks, client }) {
  const [titleRef, titleVisible] = useReveal();
  const [meetRef, meetVisible] = useReveal();

  if (!tasks) return null;

  return (
    <section id="taches" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? "is-visible" : ""}`} style={{ maxWidth: 640, marginBottom: "var(--space-4)" }}>
          <p className="eyebrow">Mon rôle</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginTop: 12 }}>Ce que j'ai fait</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-3)" }}>
          {tasks.map((group, i) => <TaskGroup key={group.category} group={group} index={i} />)}
        </div>

        {client?.meetings && (
          <div ref={meetRef} className={`reveal ${meetVisible ? "is-visible" : ""}`} style={{ marginTop: "var(--space-5)" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Rencontres client</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
              {client.meetings.map((m, i) => (
                <div key={i} className="card" style={{ borderLeft: "3px solid var(--amber)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--amber-deep)" }}>{m.date}</span>
                  <strong style={{ fontSize: "0.92rem", display: "block", margin: "6px 0" }}>{m.title}</strong>
                  <p style={{ fontSize: "0.83rem", color: "var(--ink-soft)" }}>{m.description}</p>
                </div>
              ))}
            </div>

            {client.todoist && (
              <div className="card" style={{ marginTop: 20, padding: "1.25rem", borderLeft: "3px solid #E44332" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 24, lineHeight: 1 }}>📋</span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: "0.95rem", display: "block" }}>Organisation personnelle — Todoist</strong>
                    <p style={{ fontSize: "0.83rem", color: "var(--ink-soft)", marginTop: 4 }}>
                      {client.todoist.description}
                    </p>
                  </div>
                  <a
                    href={client.todoist.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: "0.85rem", padding: "0.6rem 1rem", whiteSpace: "nowrap" }}
                  >
                    Voir mon projet Todoist →
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
