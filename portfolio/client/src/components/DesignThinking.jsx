import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    label: "Empathie",
    title: "Comprendre le terrain",
    text: "Nous sommes partis du besoin qualité d'InnoFaso : suivre les risques sanitaires sans attendre la lecture manuelle des rapports. Une première réunion de découverte de l'usine, des plans et des processus de production a été organisée avec tous les étudiants pour s'imprégner du contexte réel.",
  },
  {
    label: "Définition",
    title: "Transformer les irritants en problème clair",
    text: "Les post-it ont permis de regrouper les idées : zones à risque, alertes, historique, rôles utilisateurs et contraintes de production.",
  },
  {
    label: "Idéation",
    title: "Choisir une solution utile, pas spectaculaire",
    text: "L'équipe a privilégié une plateforme de pilotage temps réel, lisible par un responsable qualité et reliée aux livrables de gestion du projet.",
  },
  {
    label: "Prototype",
    title: "Passer vite à une première version testable",
    text: "Les maquettes, la cartographie et les premières pages ont servi de support aux discussions avant les développements complets.",
  },
  {
    label: "Test",
    title: "Valider avec le client par itérations",
    text: "Une première démonstration du MVP a eu lieu le 6 mai 2026 pour valider l'assemblage de la carte et du dashboard. Une réunion de validation intermédiaire en mai a permis d'ajuster les fonctionnalités, suivie d'une revue finale le 22 juin 2026 pour intégrer la gestion des actions correctives et l'historique détaillé.",
  },
];

const gallery = [
  {
    title: "Brainstorming initial",
    caption: "Post-it, reformulation du besoin et premières pistes de solution.",
    src: "/assets/brainstorming.jpeg",
    fallback: "Post-it",
  },
  {
    title: "Session de travail",
    caption: "Répartition des tâches, arbitrages techniques et avancement en équipe.",
    src: "/assets/travail1.jpeg",
    fallback: "Atelier",
  },
  {
    title: "Travail en groupe",
    caption: "Une solution construite à plusieurs, entre échanges, tests et corrections.",
    src: "/assets/travail2.jpeg",
    fallback: "Équipe",
  },
];

function GalleryCard({ item, index }) {
  const [missing, setMissing] = useState(false);
  return (
    <figure
      className="workshop-photo"
      style={{
        minHeight: index === 0 ? 390 : 260,
        gridRow: index === 0 ? "span 2" : undefined,
      }}
    >
      {!missing ? (
        <img src={item.src} alt={item.title} onError={() => setMissing(true)} />
      ) : (
        <div className="workshop-placeholder">
          <span>{item.fallback}</span>
          <small>Image à ajouter dans public/assets</small>
        </div>
      )}
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function DesignThinking() {
  const [ref, visible] = useReveal();

  return (
    <section id="atelier" className="section section-divider">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} workshop-shell`}>
          <div className="workshop-copy">
            <p className="eyebrow">Design thinking</p>
            <h2>Du tableau de post-it à une solution de terrain</h2>
            <p>
              Avant de coder, nous avons pris le temps de poser le problème avec une méthode design thinking : écouter le besoin,
              regrouper les idées, clarifier les risques sanitaires prioritaires, puis prototyper une réponse vraiment utilisable
              par l'équipe qualité.
            </p>
            <div className="workshop-steps">
              {steps.map((step, index) => (
                <article key={step.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{step.label}</small>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="workshop-gallery" aria-label="Photos de brainstorming et de travail en équipe">
            {gallery.map((item, index) => (
              <GalleryCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .workshop-shell {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: center;
        }
        .workshop-copy h2 {
          margin-top: 1rem;
          max-width: 620px;
          font-size: clamp(2.35rem, 5vw, 4.4rem);
          line-height: 0.98;
        }
        .workshop-copy > p {
          margin-top: 1.25rem;
          max-width: 620px;
          color: var(--ink-soft);
          font-size: 1.12rem;
          line-height: 1.75;
        }
        .workshop-steps {
          margin-top: 2rem;
          display: grid;
          gap: 0.85rem;
        }
        .workshop-steps article {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.68);
        }
        .workshop-steps article > span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--amber-tint);
          color: var(--amber-deep);
          font: 800 0.84rem var(--font-mono);
        }
        .workshop-steps small {
          display: block;
          color: var(--brand-deep);
          font: 800 0.75rem var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.25rem;
        }
        .workshop-steps strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.08rem;
          line-height: 1.25;
        }
        .workshop-steps p {
          margin-top: 0.35rem;
          color: var(--ink-soft);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .workshop-gallery {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          grid-auto-rows: minmax(160px, auto);
          gap: 1rem;
        }
        .workshop-photo {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: var(--surface);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-card);
        }
        .workshop-photo img,
        .workshop-placeholder {
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
        }
        .workshop-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 1.5rem;
          text-align: center;
          background:
            linear-gradient(135deg, rgba(251,235,216,0.96), rgba(227,242,232,0.96)),
            repeating-linear-gradient(45deg, transparent 0 12px, rgba(22,26,20,0.04) 12px 24px);
        }
        .workshop-placeholder span {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.45rem;
          color: var(--ink);
        }
        .workshop-placeholder small {
          color: var(--ink-soft);
          font-size: 0.86rem;
        }
        .workshop-photo figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1rem;
          color: white;
          background: linear-gradient(180deg, transparent, rgba(14,18,13,0.84));
        }
        .workshop-photo figcaption strong,
        .workshop-photo figcaption span {
          display: block;
        }
        .workshop-photo figcaption strong {
          font-family: var(--font-display);
          font-size: 1.05rem;
        }
        .workshop-photo figcaption span {
          margin-top: 0.25rem;
          font-size: 0.86rem;
          color: rgba(255,255,255,0.78);
          line-height: 1.4;
        }
        @media (max-width: 940px) {
          .workshop-shell, .workshop-gallery { grid-template-columns: 1fr; }
          .workshop-photo { min-height: 250px !important; grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
