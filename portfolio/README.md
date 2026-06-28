# Portfolio — Sylviane · Projet InnoFaso

Portfolio personnel full-stack présentant en détail le projet **InnoFaso** (plateforme de
surveillance microbiologique IoT pour l'agroalimentaire, développé à l'Institut 2iE) :
démarche de gestion de projet, tâches réalisées, compétences acquises, travail en équipe,
et aperçu de la solution technique.

**Stack** : React (Vite) côté frontend, Express.js côté backend, données du projet servies via une API REST.

## Structure du projet

```
portfolio/
├── client/                 # Frontend React (Vite)
│   ├── src/
│   │   ├── components/     # Navbar, Hero, Timeline des sprints, Équipe, Contact...
│   │   ├── data/api.js     # Client API (fetch vers le backend)
│   │   ├── hooks/          # Hook d'animation au scroll
│   │   └── styles/         # Design system (tokens.css)
│   └── index.html
├── server/                  # Backend Express
│   ├── data/projectData.js  # Contenu structuré du projet (sprints, tâches, équipe...)
│   ├── routes/               # Routes API (portfolio, contact)
│   └── server.js
└── package.json             # Scripts racine (lance les deux en même temps)
```

## Installation

Prérequis : Node.js v18+

```bash
npm run install:all
```

Cette commande installe les dépendances à la racine, dans `client/` et dans `server/`.

### Configuration (optionnelle)

Pour activer l'envoi réel des emails depuis le formulaire de contact :

```bash
cp server/.env.example server/.env
```

Puis renseigner les identifiants SMTP dans `server/.env`. Sans configuration, les messages
du formulaire sont simplement reçus et stockés côté serveur (aucun email n'est envoyé), ce
qui suffit pour faire fonctionner le site.

## Lancer le projet

Depuis la racine :

```bash
npm run dev
```

Cela démarre en même temps :

| Service | URL | Description |
|---|---|---|
| Backend (API) | http://localhost:5000 | Express.js |
| Frontend | http://localhost:5174 | React / Vite |

Ouvrir **http://localhost:5174** dans le navigateur.

## Modifier le contenu

Tout le contenu textuel du portfolio (profil, sprints, tâches, compétences, équipe, outils)
se trouve dans un seul fichier, facile à éditer :

```
server/data/projectData.js
```

Aucune modification du frontend n'est nécessaire pour changer le texte — il est chargé
dynamiquement depuis l'API au démarrage de la page.

## Bibliothèque de documents (Kanban, RACI, Backlog, captures d'écran...)

La section **Documents** de la page (`/#documents`) permet d'ajouter directement depuis le
navigateur tous les supports de gestion de projet : Kanban, matrice RACI, backlog produit,
livrables de design thinking, captures d'écran du dashboard, comptes-rendus, diagrammes...

- Cliquer sur **"+ Ajouter un document"**, glisser-déposer ou choisir un fichier (image ou PDF
  recommandés, 15 Mo max), choisir une catégorie, valider.
- Les fichiers sont stockés sur disque dans `server/uploads/` et indexés dans
  `server/uploads/index.json` — aucune base de données externe n'est nécessaire.
- Les documents peuvent être filtrés par catégorie et supprimés directement depuis l'interface.

Ce dossier `server/uploads/` n'est pas versionné par défaut (voir `.gitignore`) puisqu'il
contient des fichiers personnels ajoutés après installation.

## Build pour la production

```bash
npm run build
```

Génère la version statique du frontend dans `client/dist/`. Le dossier peut être déployé sur
Vercel, Netlify, ou tout hébergeur statique ; le backend Express peut être déployé séparément
(Render, Railway, etc.) — dans ce cas, mettre à jour l'URL de l'API dans `client/src/data/api.js`.
