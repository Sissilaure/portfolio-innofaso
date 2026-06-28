import { useReveal } from "../hooks/useReveal";

const MODULE_COLORS = ["#1F7A4D", "#D97B29", "#2563A8", "#9B4FB0", "#C13E2C"];

function ModuleCard({ module, index }) {
  const [ref, visible] = useReveal();
  const color = MODULE_COLORS[index % MODULE_COLORS.length];
  return (
    <div
      ref={ref}
      className={`card reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms`, borderTop: `3px solid ${color}` }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color, fontWeight: 700 }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 style={{ fontSize: "1.05rem", marginTop: 10, marginBottom: 6 }}>{module.name}</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.88rem", lineHeight: 1.5 }}>{module.description}</p>
    </div>
  );
}

export default function SolutionOverview({ solution, client }) {
  const [titleRef, titleVisible] = useReveal();

  if (!solution) return null;

  return (
    <section id="apercu" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? "is-visible" : ""}`} style={{ maxWidth: 640, marginBottom: "var(--space-4)" }}>
          <p className="eyebrow">La solution</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginTop: 12 }}>5 modules, une plateforme</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-3)" }}>
          {solution.modules?.map((m, i) => <ModuleCard key={m.name} module={m} index={i} />)}
        </div>

        <div
          className="reveal is-visible"
          style={{
            marginTop: "var(--space-4)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            border: "1px solid var(--line)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          <img
            src="/assets/dashboard.png"
            alt="Aperçu du tableau de bord InnoFaso — Dashboard qualité"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {client && (
          <div
            style={{
              marginTop: "var(--space-4)", padding: "var(--space-3)",
              border: "1px solid var(--line)", borderRadius: "var(--radius-md)",
              background: "linear-gradient(135deg, var(--brand-tint) 0%, var(--surface) 60%)",
              display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-3)", alignItems: "center",
            }}
            className="client-block"
          >
            <div
              style={{
                width: 56, height: 56, borderRadius: 14, background: "var(--brand)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, flexShrink: 0,
              }}
            >
              IF
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>{client.name}</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>{client.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
