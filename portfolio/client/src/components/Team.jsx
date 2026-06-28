import { useReveal } from "../hooks/useReveal";

const AVATAR_COLORS = ["#1F7A4D", "#D97B29", "#2563A8", "#9B4FB0", "#C13E2C"];

function TeamCard({ member, index, isMe }) {
  const [ref, visible] = useReveal();
  const initials = member.name.slice(0, 2).toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <article
      ref={ref}
      className={`card reveal team-card ${visible ? "is-visible" : ""}`}
      style={{
        transitionDelay: `${index * 60}ms`,
        borderColor: isMe ? "var(--brand)" : "var(--line)",
        background: isMe ? "linear-gradient(180deg, #ffffff, var(--brand-tint))" : "var(--surface)",
      }}
    >
      {isMe ? (
        <img className="team-avatar" src="/assets/sylviane-profile.jpg" alt="Sylviane" />
      ) : (
        <span className="team-avatar team-initials" style={{ background: color }}>
          {initials}
        </span>
      )}
      <div>
        <strong>
          {member.name}
          {isMe && <span className="badge ok">Moi</span>}
        </strong>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

function ToolGroup({ title, items, color }) {
  if (!items) return null;
  return (
    <div className="tool-group">
      <span style={{ color }}>{title}</span>
      <p>{items.join(" · ")}</p>
    </div>
  );
}

export default function Team({ team, tools }) {
  const [titleRef, titleVisible] = useReveal();
  const [toolsRef, toolsVisible] = useReveal();

  return (
    <section id="equipe" className="section section-divider">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? "is-visible" : ""} team-heading`}>
          <p className="eyebrow">Équipe</p>
          <h2>5 étudiants ingénieurs, une solution construite ensemble</h2>
          <p>
            Le projet a avancé grâce à une organisation simple : rôles clairs, points réguliers, entraide sur les blocages et livrables partagés.
          </p>
        </div>

        <div className="team-grid">
          {team?.map((member, i) => <TeamCard key={member.name} member={member} index={i} isMe={member.name === "Sylviane"} />)}
        </div>

        {tools && (
          <div ref={toolsRef} className={`reveal tools-panel ${toolsVisible ? "is-visible" : ""}`}>
            <p className="eyebrow">Outils utilisés</p>
            <div className="tools-grid">
              <ToolGroup title="Gestion" items={tools.gestion} color="#1F7A4D" />
              <ToolGroup title="Communication" items={tools.communication} color="#D97B29" />
              <ToolGroup title="Code" items={tools.code} color="#2563A8" />
              <ToolGroup title="Design" items={tools.design} color="#9B4FB0" />
              <ToolGroup title="Déploiement" items={tools.deploiement} color="#C13E2C" />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .team-heading {
          max-width: 760px;
          margin-bottom: var(--space-4);
        }
        .team-heading h2 {
          margin-top: 1rem;
          font-size: clamp(2.1rem, 4.6vw, 3.8rem);
          line-height: 1;
        }
        .team-heading p:not(.eyebrow) {
          margin-top: 1rem;
          color: var(--ink-soft);
          font-size: 1.08rem;
          max-width: 620px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: var(--space-5);
        }
        .team-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          min-height: 150px;
        }
        .team-avatar {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          flex-shrink: 0;
          object-fit: cover;
          object-position: center 18%;
          box-shadow: var(--shadow-card);
        }
        .team-initials {
          display: flex;
          align-items: center;
          justify-content: center;
          font: 800 0.95rem var(--font-display);
          color: white;
        }
        .team-card strong {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-size: 1.12rem;
          line-height: 1.2;
        }
        .team-card p {
          margin-top: 0.45rem;
          color: var(--ink-soft);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .tools-panel {
          border-top: 1px solid var(--line);
          padding-top: var(--space-3);
        }
        .tools-grid {
          margin-top: 1.2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 1rem;
        }
        .tool-group {
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.62);
        }
        .tool-group span {
          font: 800 0.78rem var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .tool-group p {
          margin-top: 0.55rem;
          color: var(--ink-soft);
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
