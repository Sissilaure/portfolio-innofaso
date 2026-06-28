import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { api } from "../data/api";

export default function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await api.sendContact(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Une erreur est survenue.");
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: "var(--space-4)" }}>
      <div className="container">
        <div ref={ref} className={`reveal contact-grid ${visible ? "is-visible" : ""}`}>
          <div className="contact-profile">
            <img src="/assets/sylviane-profile.jpg" alt="Sylviane" />
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Échanger sur le projet ou une collaboration</h2>
              <p>
                Étudiante ingénieure à l'Institut 2iE, je m'intéresse aux projets où le numérique aide à rendre
                les opérations plus lisibles, plus sûres et mieux pilotées.
              </p>
              <div className="contact-facts">
                <span>Institut 2iE</span>
                <span>Ouagadougou, Burkina Faso</span>
                <span>Projet InnoFaso 2026</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Votre nom" />
            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="vous@exemple.com" />
            <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Votre message..." />
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>
            {status === "sent" && <p className="contact-ok">Message envoyé, merci !</p>}
            {status === "error" && <p className="contact-error">Erreur : {errorMsg}</p>}
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: var(--space-4);
          padding: var(--space-5);
          border-radius: var(--radius-lg);
          background:
            linear-gradient(135deg, rgba(22,26,20,0.98), rgba(20,94,58,0.95)),
            var(--ink);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .contact-grid::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -120px;
          top: -160px;
          border-radius: 50%;
          background: rgba(217,123,41,0.2);
          pointer-events: none;
        }
        .contact-profile {
          position: relative;
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 1.4rem;
          align-items: center;
          z-index: 1;
        }
        .contact-profile img {
          width: 150px;
          height: 190px;
          border-radius: 20px;
          object-fit: cover;
          object-position: center 14%;
          border: 3px solid rgba(255,255,255,0.24);
          box-shadow: 0 24px 60px rgba(0,0,0,0.28);
        }
        .contact-profile .eyebrow {
          background: rgba(255,255,255,0.1);
          color: var(--brand-bright);
          border-color: rgba(255,255,255,0.16);
        }
        .contact-profile h2 {
          margin-top: 1rem;
          color: white;
          font-size: clamp(2rem, 4.2vw, 3.45rem);
          line-height: 1;
        }
        .contact-profile p:not(.eyebrow) {
          margin-top: 1rem;
          color: rgba(255,255,255,0.72);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 560px;
        }
        .contact-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.3rem;
        }
        .contact-facts span {
          padding: 0.48rem 0.75rem;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          color: rgba(255,255,255,0.78);
          font: 700 0.78rem var(--font-mono);
        }
        .contact-form {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: var(--radius-sm);
          background: rgba(255,255,255,0.08);
          font-family: var(--font-body);
          font-size: 1rem;
          color: white;
          outline: none;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: rgba(255,255,255,0.46); }
        .contact-form textarea { resize: vertical; min-height: 132px; }
        .contact-form .btn { justify-content: center; }
        .contact-ok { color: var(--brand-bright); font-size: 0.92rem; }
        .contact-error { color: #FFB39F; font-size: 0.92rem; }
        @media (max-width: 920px) {
          .contact-grid { grid-template-columns: 1fr; padding: var(--space-4); }
        }
        @media (max-width: 620px) {
          .contact-profile { grid-template-columns: 1fr; }
          .contact-profile img { width: 128px; height: 160px; }
        }
      `}</style>
    </section>
  );
}
