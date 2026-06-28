import { useEffect, useState } from "react";
import InnoFasoMark from "./InnoFasoMark";

const sections = [
  { id: "apercu", label: "Aperçu" },
  { id: "parcours", label: "Parcours" },
  { id: "atelier", label: "Atelier" },
  { id: "taches", label: "Tâches" },
  { id: "competences", label: "Compétences" },
  { id: "documents", label: "Documents" },
  { id: "equipe", label: "Équipe" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(251, 250, 246, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 78 }}>
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <img
            src="/assets/sylviane-profile.jpg"
            alt="Sylviane"
            style={{
              width: 40, height: 40, borderRadius: "50%", objectFit: "cover", objectPosition: "center 18%",
              background: "var(--surface)", border: "2px solid white", boxShadow: "var(--shadow-card)",
            }}
          />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800, color: "var(--ink)" }}>
            Sylviane
          </span>
        </a>

        <nav className="nav-desktop" style={{ display: "flex", gap: 22 }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14.5, color: "var(--ink-soft)", fontWeight: 700,
                padding: "7px 0", borderBottom: "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--brand)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-soft)"; e.currentTarget.style.borderColor = "transparent"; }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--brand-deep)",
              background: "var(--brand-tint)", padding: "5px 11px 5px 7px", borderRadius: 999,
              border: "1px solid var(--brand-tint-strong)",
            }}
          >
            <InnoFasoMark size={15} />
            Projet InnoFaso
          </span>
          <button className="btn btn-primary" onClick={() => handleClick("contact")} style={{ fontSize: 13.5, padding: "0.7em 1.35em" }}>
            Contact
          </button>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
          className="nav-burger"
          style={{
            display: "none", background: "var(--surface)", border: "1.5px solid var(--line-strong)",
            borderRadius: 8, width: 40, height: 40, cursor: "pointer",
            flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
          }}
        >
          <span style={{ width: 16, height: 1.5, background: "var(--ink)" }} />
          <span style={{ width: 16, height: 1.5, background: "var(--ink)" }} />
        </button>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid var(--line)", background: "var(--bg)", padding: "var(--space-2) var(--space-4)", display: "flex", flexDirection: "column", gap: 4 }}>
          {sections.map((s) => (
            <button key={s.id} onClick={() => handleClick(s.id)} style={{ background: "none", border: "none", textAlign: "left", padding: "10px 0", fontSize: 15, color: "var(--ink)", cursor: "pointer" }}>
              {s.label}
            </button>
          ))}
          <button onClick={() => handleClick("contact")} className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>
            Contact
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop, .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
