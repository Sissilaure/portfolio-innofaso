export default function Loader() {
  return (
    <div
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 16,
        background: "var(--paper)",
      }}
    >
      <div className="stamp" style={{ animation: "spin 1.4s linear infinite", borderStyle: "dashed" }}>
        <strong style={{ fontSize: "0.85rem" }}>···</strong>
      </div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Chargement du dossier...
      </p>
      <style>{`
        @keyframes spin { from { transform: rotate(-8deg); } to { transform: rotate(352deg); } }
      `}</style>
    </div>
  );
}
