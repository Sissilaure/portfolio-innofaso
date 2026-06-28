import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const CATEGORY_META = {
  planning: { label: "Planification", icon: "PLN", color: "#1F7A4D", bg: "#E3F2E8" },
  responsabilites: { label: "Responsabilités", icon: "RACI", color: "#D97B29", bg: "#FBEBD8" },
  risques: { label: "Risques sanitaires", icon: "RSK", color: "#C13E2C", bg: "#FAE3DE" },
  backlog: { label: "Backlog produit", icon: "BL", color: "#2563A8", bg: "#E1ECF8" },
  reunions: { label: "Comptes rendus", icon: "CR", color: "#5B6470", bg: "#ECEFF2" },
};

const STATIC_DOCUMENTS = [
  {
    id: "wbs",
    title: "WBS InnoFaso",
    category: "planning",
    description: "Découpage du projet en lots de travail pour structurer les livrables et le pilotage.",
    preview: ["Lots de travail", "Responsables", "Livrables attendus"],
    type: "PDF",
    url: "/documents/wbs-innofaso.pdf",
  },
  {
    id: "gantt",
    title: "Gantt hebdomadaire InnoFaso",
    category: "planning",
    description: "Planning hebdomadaire du projet, jalons et suivi des activités.",
    preview: ["14 semaines", "Jalons", "Suivi d'avancement"],
    type: "XLSX",
    url: "/documents/gantt-innofaso-hebdo.xlsx",
  },
  {
    id: "raci",
    title: "Matrice RACI",
    category: "responsabilites",
    description: "Répartition des rôles et responsabilités dans la gestion des risques sanitaires.",
    preview: ["Rôles", "Validation", "Contribution équipe"],
    type: "XLSX",
    url: "/documents/raci-innofaso-gestion-risques-sanitaires.xlsx",
  },
  {
    id: "risk-matrix",
    title: "Matrice de risque",
    category: "risques",
    description: "Évaluation et priorisation des risques sanitaires identifiés au niveau de la production.",
    preview: ["Probabilité", "Impact", "Priorité sanitaire"],
    type: "XLSX",
    url: "/documents/matrice-de-risque.xlsx",
  },
  {
    id: "product-backlog",
    title: "Product backlog",
    category: "backlog",
    description: "Tableau Trello des user stories, priorités et tâches du projet.",
    preview: ["User stories", "Priorités", "Suivi Trello"],
    type: "Lien",
    url: "https://trello.com/b/o0x050cv",
    external: true,
  },
  {
    id: "meeting-notes",
    title: "Comptes rendus de réunions",
    category: "reunions",
    description: "Document Google Docs centralisant les comptes rendus et décisions de réunion.",
    preview: ["Décisions", "Points d'action", "Historique réunions"],
    type: "Lien",
    url: "https://docs.google.com/document/d/1RmdZ2ZoZY1s43t8U-BYJQw9YveCXUhNArAuNmCDAym8/edit?usp=sharing",
    external: true,
  },
  {
    id: "design-thinking",
    title: "Design Thinking — Roadmap",
    category: "planning",
    description: "Parcours des 5 phases du Design Thinking : empathie, définition, idéation, prototypage et test.",
    preview: ["5 phases", "Brainstorming post-it", "MVP & tests client"],
    type: "DOCX",
    url: "/documents/design-thinking-roadmap.docx",
  },
  {
    id: "users-story",
    title: "Users Story",
    category: "backlog",
    description: "Récits utilisateur détaillant les fonctionnalités attendues de la plateforme de suivi microbiologique.",
    preview: ["Récits utilisateur", "Fonctionnalités", "Critères d'acceptation"],
    type: "PDF",
    url: "/documents/users-story.pdf",
  },
  {
    id: "rapport-projet",
    title: "Rapport de projet InnoFaso",
    category: "planning",
    description: "Rapport complet du projet : contexte, architecture technique, méthodologie, résultats attendus et perspectives.",
    preview: ["Contexte", "Architecture", "Résultats"],
    type: "PDF",
    url: "/documents/rapport-projet-innofaso.pdf",
  },
];

function DocCard({ doc, index }) {
  const [ref, visible] = useReveal();
  const meta = CATEGORY_META[doc.category] || CATEGORY_META.planning;
  const actionLabel = doc.external ? "Ouvrir" : "Télécharger";

  return (
    <article ref={ref} className={`card reveal doc-card ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${(index % 6) * 50}ms` }}>
      <div className="doc-preview" style={{ background: `linear-gradient(135deg, ${meta.bg}, #ffffff)` }}>
        <div className="doc-filetype" style={{ color: meta.color, borderColor: meta.color }}>{doc.type}</div>
        <div className="doc-lines">
          {doc.preview.map((line) => <span key={line}>{line}</span>)}
        </div>
        <span className="doc-category" style={{ color: meta.color }}>{meta.label}</span>
      </div>

      <div className="doc-body">
        <strong>{doc.title}</strong>
        <p>{doc.description}</p>
        <a
          href={doc.url}
          download={doc.external ? undefined : true}
          target={doc.external ? "_blank" : undefined}
          rel={doc.external ? "noreferrer" : undefined}
          className="btn btn-primary"
        >
          {actionLabel}
        </a>
      </div>
    </article>
  );
}

export default function Documents() {
  const [titleRef, titleVisible] = useReveal();
  const [filter, setFilter] = useState("tous");
  const docs = STATIC_DOCUMENTS;

  const filtered = filter === "tous" ? docs : docs.filter((d) => d.category === filter);
  const usedCategories = ["tous", ...new Set(docs.map((d) => d.category))];

  return (
    <section id="documents" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal docs-heading ${titleVisible ? "is-visible" : ""}`}>
          <p className="eyebrow">Supports de gestion de projet</p>
          <h2>Documents du projet</h2>
          <p>
            Les livrables ne sont pas juste des fichiers à télécharger : ils racontent comment l'équipe a cadré, planifié,
            priorisé et suivi la gestion des risques sanitaires pendant le projet.
          </p>
        </div>

        {usedCategories.length > 1 && (
          <div className="docs-filters">
            {usedCategories.map((cat) => {
              const meta = cat === "tous" ? { label: "Tous", icon: "" } : CATEGORY_META[cat];
              const active = filter === cat;
              return (
                <button key={cat} onClick={() => setFilter(cat)} className={active ? "is-active" : ""}>
                  {meta.icon ? `${meta.icon} ` : ""}{meta.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="docs-grid">
          {filtered.map((doc, i) => (
            <DocCard key={doc.id} doc={doc} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .docs-heading {
          max-width: 780px;
          margin-bottom: var(--space-4);
        }
        .docs-heading h2 {
          margin-top: 1rem;
          font-size: clamp(2.2rem, 4.8vw, 4rem);
          line-height: 1;
        }
        .docs-heading p:not(.eyebrow) {
          margin-top: 1rem;
          color: var(--ink-soft);
          font-size: 1.1rem;
          line-height: 1.7;
        }
        .docs-filters {
          display: flex;
          gap: 0.55rem;
          flex-wrap: wrap;
          margin-bottom: var(--space-3);
        }
        .docs-filters button {
          font-size: 0.82rem;
          padding: 0.55rem 0.9rem;
          border-radius: 999px;
          cursor: pointer;
          border: 1.5px solid var(--line-strong);
          background: var(--surface);
          color: var(--ink-soft);
          font-weight: 800;
        }
        .docs-filters button.is-active {
          border-color: var(--brand);
          background: var(--brand-tint);
          color: var(--brand-deep);
        }
        .docs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: var(--space-3);
        }
        .doc-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .doc-preview {
          position: relative;
          min-height: 185px;
          padding: 1.25rem;
          border-bottom: 1px solid var(--line);
        }
        .doc-filetype {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 58px;
          height: 38px;
          border: 2px solid;
          border-radius: 10px;
          background: rgba(255,255,255,0.72);
          font: 900 0.82rem var(--font-mono);
        }
        .doc-lines {
          margin-top: 1.25rem;
          display: grid;
          gap: 0.55rem;
        }
        .doc-lines span {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 28px;
          padding: 0.28rem 0.62rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.72);
          color: var(--ink-soft);
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: 0 1px 0 rgba(22,26,20,0.05);
        }
        .doc-category {
          position: absolute;
          right: 1.1rem;
          bottom: 1rem;
          font: 900 0.76rem var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .doc-body {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
        }
        .doc-body strong {
          font-family: var(--font-display);
          font-size: 1.24rem;
          line-height: 1.2;
        }
        .doc-body p {
          color: var(--ink-soft);
          font-size: 0.98rem;
          line-height: 1.58;
          flex: 1;
        }
        .doc-body .btn {
          width: 100%;
          justify-content: center;
          font-size: 0.92rem;
          padding: 0.82rem 1.1rem;
        }
      `}</style>
    </section>
  );
}

