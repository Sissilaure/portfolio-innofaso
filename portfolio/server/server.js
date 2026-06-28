// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import portfolioRoutes from "./routes/portfolio.js";
import contactRoutes from "./routes/contact.js";
import documentsRoutes from "./routes/documents.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "portfolio-api" });
});

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/documents", documentsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erreur serveur" });
});

app.listen(PORT, () => {
  console.log(`API portfolio démarrée sur http://localhost:${PORT}`);
});
