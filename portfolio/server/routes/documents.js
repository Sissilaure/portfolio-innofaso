// server/routes/documents.js
// Gère la bibliothèque de documents de gestion de projet :
// Kanban, RACI, Backlog, captures d'écran, livrables de design thinking, etc.
// Stockage simple sur disque (dossier uploads/) + un fichier JSON faisant office d'index.

import { Router } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, "..", "uploads");
const INDEX_FILE = path.join(UPLOAD_DIR, "index.json");

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
if (!fs.existsSync(INDEX_FILE)) fs.writeFileSync(INDEX_FILE, "[]");

function readIndex() {
  try {
    return JSON.parse(fs.readFileSync(INDEX_FILE, "utf-8"));
  } catch {
    return [];
  }
}
function writeIndex(data) {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(data, null, 2));
}

// Catégories proposées dans l'UI (gestion de projet + design thinking)
export const CATEGORIES = [
  "kanban",
  "raci",
  "backlog",
  "design-thinking",
  "capture-ecran",
  "compte-rendu",
  "diagramme",
  "autre",
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 Mo max par fichier
});

const router = Router();

// Liste tous les documents (avec filtre optionnel par catégorie)
router.get("/", (req, res) => {
  const { category } = req.query;
  let docs = readIndex();
  if (category) docs = docs.filter((d) => d.category === category);
  res.json(docs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)));
});

// Upload d'un nouveau document
router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Aucun fichier reçu." });

  const { title, category, description } = req.body;
  if (!CATEGORIES.includes(category)) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: "Catégorie invalide." });
  }

  const docs = readIndex();
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    title: title || req.file.originalname,
    category,
    description: description || "",
    filename: req.file.filename,
    originalName: req.file.originalname,
    mimeType: req.file.mimetype,
    size: req.file.size,
    uploadedAt: new Date().toISOString(),
  };
  docs.push(entry);
  writeIndex(docs);

  res.status(201).json(entry);
});

// Téléchargement / affichage d'un fichier
router.get("/file/:filename", (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "Fichier non trouvé." });
  res.sendFile(filePath);
});

// Suppression d'un document
router.delete("/:id", (req, res) => {
  const docs = readIndex();
  const doc = docs.find((d) => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: "Document non trouvé." });

  const filePath = path.join(UPLOAD_DIR, doc.filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  writeIndex(docs.filter((d) => d.id !== req.params.id));
  res.json({ success: true });
});

router.get("/meta/categories", (req, res) => res.json(CATEGORIES));

export default router;
