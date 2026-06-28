import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" style={{ position: "relative", paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "var(--surface)", border: "1px solid var(--line)",
            borderRadius: 999, padding: "6px 16px 6px 12px",
            boxShadow: "var(--shadow-card)", marginBottom: "var(--space-3)",
            opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/assets/logo-2ie.jpg" alt="2iE" style={{ height: 22, width: "auto", borderRadius: 2 }} />
            <img src="/assets/logo-innofaso.jpg" alt="InnoFaso" style={{ height: 22, width: "auto", borderRadius: 2 }} />
          </div>
          <span style={{ width: 1, height: 14, background: "var(--line-strong)" }} />
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)" }}>Projet InnoFaso</span>
          <span style={{ width: 1, height: 14, background: "var(--line-strong)" }} />
          <span style={{ fontSize: 12.5, color: "var(--ink-faint)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
            Gestion des risques sanitaires
          </span>
        </div>

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--space-5)", alignItems: "center" }}>
          <div>
            <h1
              style={{
                fontSize: "clamp(3rem, 6.8vw, 5.35rem)",
                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s",
              }}
            >
              Piloter les risques sanitaires, {" "}
              <span style={{ color: "var(--brand)", fontFamily: "var(--font-accent)", fontWeight: 850 }}>en temps réel</span>
            </h1>

            <p
              style={{
                marginTop: "var(--space-3)", maxWidth: 620, fontSize: "1.28rem", color: "var(--ink-soft)", lineHeight: 1.65,
                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
              }}
            >
              J'ai contribué à la conception d'une plateforme de gestion des risques sanitaires en temps réel pour la production agroalimentaire, avec une approche terrain, des livrables de projet et un prototype fonctionnel.
            </p>

            <div
              style={{
                display: "flex", gap: 14, marginTop: "var(--space-4)", flexWrap: "wrap",
                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s",
              }}
            >
              <a href="#parcours" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("parcours")?.scrollIntoView({ behavior: "smooth" }); }}>
                Voir le parcours
              </a>
              <a href="#atelier" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("atelier")?.scrollIntoView({ behavior: "smooth" }); }}>
                Méthode design thinking
              </a>
            </div>
          </div>

          <div
            className="hero-bento"
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
              opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.92)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <div className="card" style={{ gridColumn: "1 / -1", background: "var(--brand-deep)", color: "white", padding: "22px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.72)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>
                  Projet InnoFaso
                </span>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-bright)", boxShadow: "0 0 0 4px rgba(127,217,165,0.3)" }} />
              </div>
              <p style={{ fontSize: "1.06rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.65 }}>
                Plateforme de gestion des risques sanitaires en temps réel, de l'analyse des besoins au prototype fonctionnel.
              </p>
            </div>

            <div className="card hero-stat">
              <div>14</div>
              <span>zones de risque</span>
            </div>
            <div className="card hero-stat amber">
              <div>14</div>
              <span>semaines de projet</span>
            </div>
            <div className="card" style={{ gridColumn: "1 / -1", display: "flex", gap: 14, alignItems: "center", justifyContent: "space-between", padding: "16px 18px" }}>
              <span style={{ fontSize: 15, color: "var(--ink-soft)", fontWeight: 700 }}>14 zones · 132 points de contrôle · suivi temps réel</span>
              <span className="badge ok">Plateforme livrée</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-stat { text-align: center; padding: 20px 10px; }
        .hero-stat div { font-family: var(--font-accent); font-size: 2.3rem; color: var(--brand-deep); font-weight: 900; line-height: 1; }
        .hero-stat.amber div { color: var(--amber-deep); }
        .hero-stat span { display: block; font-size: 0.84rem; color: var(--ink-faint); margin-top: 0.35rem; font-weight: 800; }
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-bento { margin-top: var(--space-3); }
        }
      `}</style>
    </section>
  );
}
