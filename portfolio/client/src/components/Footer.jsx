import InnoFasoMark from "./InnoFasoMark";

export default function Footer() {
  return (
    <footer style={{ padding: "var(--space-4) 0", background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <InnoFasoMark size={18} />
          <p style={{ fontSize: 12.5, color: "var(--ink-faint)" }}>Sylviane — Projet InnoFaso, Institut 2iE, 2026</p>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-faint)" }}>React · Express</p>
      </div>
    </footer>
  );
}
