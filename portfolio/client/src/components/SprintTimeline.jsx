import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

function SprintRow({ sprint, isOpen, onToggle, index }) {
  const [ref, visible] = useReveal();
  const statusBadge =
    sprint.status === "done" ? { cls: "ok", label: "Terminé" } :
    sprint.status === "current" ? { cls: "warn", label: "En cours" } :
    { cls: "neutral", label: "À venir" };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 45}ms`, borderBottom: "1px solid var(--line)" }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "grid", gridTemplateColumns: "34px 70px 1fr auto auto", gap: 14,
          alignItems: "center", padding: "18px 4px", textAlign: "left",
        }}
        className="sprint-row"
      >
        <span className="step-index">{index}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--brand-deep)" }}>{sprint.label}</span>
        <span>
          <strong style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", display: "block" }}>
            {sprint.title}
          </strong>
          <span style={{ fontSize: 12, color: "var(--ink-faint)" }}>{sprint.period}</span>
        </span>
        <span className={`badge ${statusBadge.cls}`}>{statusBadge.label}</span>
        <span
          style={{
            display: "inline-block", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease", fontSize: 18, color: "var(--brand)", width: 20, textAlign: "center",
          }}
        >
          +
        </span>
      </button>

      <div style={{ maxHeight: isOpen ? 420 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <div style={{ padding: "0 4px 22px 48px" }} className="sprint-detail">
          <p style={{ color: "var(--ink-soft)", fontSize: "0.88rem", marginBottom: 10 }}>{sprint.objective}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {sprint.highlights?.map((h, i) => (
              <li key={i} style={{ display: "flex", gap: 9, fontSize: "0.86rem", color: "var(--ink-soft)" }}>
                <span style={{ color: "var(--brand)", flexShrink: 0 }}>—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sprint-row { grid-template-columns: 28px 1fr auto !important; row-gap: 2px; }
          .sprint-detail { padding-left: 4px !important; }
        }
      `}</style>
    </div>
  );
}

export default function SprintTimeline({ sprints, methodology }) {
  const [openId, setOpenId] = useState(sprints?.find((s) => s.status === "current")?.id || sprints?.[0]?.id);
  const [titleRef, titleVisible] = useReveal();

  if (!sprints) return null;

  return (
    <section id="parcours" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? "is-visible" : ""}`} style={{ maxWidth: 640, marginBottom: "var(--space-4)" }}>
          <p className="eyebrow">Parcours</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginTop: 12 }}>7 sprints, une méthode</h2>
        </div>

        {methodology?.ceremonies && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginBottom: "var(--space-4)" }}>
            {methodology.ceremonies.map((c, i) => (
              <div key={c.name} className="card" style={{ padding: 16 }}>
                <strong style={{ fontSize: "0.88rem", display: "block" }}>{c.name}</strong>
                <span style={{ fontSize: 11, color: "var(--brand-deep)", fontFamily: "var(--font-mono)" }}>{c.cadence}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {sprints.map((sprint, i) => (
            <SprintRow key={sprint.id} sprint={sprint} index={i} isOpen={openId === sprint.id} onToggle={() => setOpenId(openId === sprint.id ? null : sprint.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
