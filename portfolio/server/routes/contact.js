// server/routes/contact.js
import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// Stockage en mémoire simple des messages reçus (suffisant pour un portfolio étudiant)
const messages = [];

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis (nom, email, message)." });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };
  messages.push(entry);

  // Envoi d'email réel si une configuration SMTP est fournie dans .env, sinon on stocke seulement
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_RECEIVER_EMAIL } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD && CONTACT_RECEIVER_EMAIL) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: false,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      });

      await transporter.sendMail({
        from: `"Portfolio - ${name}" <${SMTP_USER}>`,
        to: CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: `Nouveau message portfolio de ${name}`,
        text: message,
      });
    } catch (err) {
      console.error("Erreur envoi email:", err.message);
      // On ne bloque pas la réponse à l'utilisateur même si l'email échoue
    }
  }

  res.status(201).json({ success: true, message: "Message bien reçu, merci !" });
});

router.get("/", (req, res) => {
  // Endpoint pratique pour consulter les messages reçus en dev (à protéger en production)
  res.json(messages);
});

export default router;
