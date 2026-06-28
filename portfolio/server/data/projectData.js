// server/data/projectData.js
// Données structurées du projet InnoFaso et du parcours de Sylviane
// Source : historique réel du projet (sprints, réunions, équipe, stack)

export const profile = {
  name: "Sylviane",
  role: "Étudiante ingénieure — Développement Full-Stack & IoT",
  school: "Institut 2iE — Institut International d'Ingénierie de l'Eau et de l'Environnement",
  location: "Ouagadougou, Burkina Faso",
  tagline: "Sécuriser une usine, capteur par capteur.",
  summary:
    "En tant qu'étudiante ingénieure à 2iE, j'ai eu l'opportunité de coordonner ce projet au sein d'une équipe de 5 personnes. Ce portfolio retrace notre aventure technique, de la première discussion client au câblage des capteurs IoT sous la chaleur de Ouaga.",
};

export const team = [
  { name: "Sylviane", role: "Coordination projet, intégration full-stack, module IoT, documentation" },
  { name: "Grace", role: "Frontend & UI/UX, maquettes Figma" },
  { name: "Aguira", role: "Backend & base de données, authentification" },
  { name: "Judicaël", role: "Full-stack, déploiement, qualité du code" },
  { name: "Vinoria", role: "Data & tests, jeux de données de démonstration" },
];

export const client = {
  name: "InnoFaso",
  description:
    "Entreprise burkinabè installée au technopôle de l'Institut 2iE, spécialisée dans la production d'aliments thérapeutiques pour lutter contre la malnutrition infantile. InnoFaso opère sous double certification ISO 9001 et FSSC 22000, ce qui impose un contrôle microbiologique rigoureux de ses lignes de production.",
  contact: "Dr Jean Christophe Dabiré, Responsable Qualité (biochimiste)",
  meetings: [
    {
      date: "Mars 2026",
      title: "Réunion n°1 — Découverte de l'usine",
      description:
        "Première réunion de découverte organisée avec tous les étudiants de l'équipe. Visite de l'usine InnoFaso, présentation des plans des installations, des processus de production et des enjeux qualité. Cette immersion a permis à toute l'équipe de comprendre le contexte réel avant de commencer la phase d'empathie du Design Thinking.",
    },
    {
      date: "Avril 2026",
      title: "Réunion n°2 — Cadrage",
      description:
        "Rencontre avec M. Dabiré. Clarification de 5 questions de cadrage technique : stabilité du format des bulletins de laboratoire, mise à jour automatique des couleurs après saisie, capteurs IoT en option à valeur ajoutée, et diffusion potentielle des résultats à des auditeurs externes dans le cadre de la certification FSSC 22000. Validation conjointe du périmètre et du MVP (Minimum Viable Product) avec présentation de la première ébauche de la cartographie interactive et du dashboard.",
    },
    {
      date: "Mai 2026",
      title: "Réunion n°3 — Validation du périmètre & Validation intermédiaire",
      description:
        "Session de travail avec le Dr Dabiré et M. Séraphin. Validation des fonctionnalités de base, présentation de l'avancement du prototype, recueil des retours pour les ajustements avant la livraison finale. Ajustement des seuils d'alerte et validation du passage aux 14 zones réelles de l'usine.",
    },
    {
      date: "Juin 2026",
      title: "Réunion n°4 — Validation finale",
      description:
        "Revue finale du projet avec le Dr Dabiré. Intégration de la gestion des actions correctives et de l'historique détaillé suite aux retours utilisateurs. Validation de la solution complète avant la soutenance devant le jury.",
    },
  ],
  todoist: {
    url: "https://app.todoist.com/app/project/inno-faso-6gxhvmfrXVFQp3QM",
    description:
      "Organisation personnelle via Todoist pour suivre l'avancement de mes tâches tout au long du projet.",
  },
};

export const methodology = {
  name: "SCRUM adapté",
  description:
    "Nous avons choisi de travailler par sprints de deux semaines pour avancer pas à pas, en commençant par un Sprint 0 de cadrage. Chaque cycle se terminait par une démonstration devant le groupe, ce qui nous a permis de réajuster le tir rapidement en cas de besoin.",
  ceremonies: [
    { name: "Sprint Planning", cadence: "Lundi, début de sprint", description: "Répartition des tâches du backlog, estimation, priorisation." },
    { name: "Point d'avancement", cadence: "2x / semaine", description: "Court point sur l'avancement, les blocages et les priorités du jour." },
    { name: "Sprint Review", cadence: "Vendredi, fin de sprint", description: "Démonstration des fonctionnalités terminées, validation collective." },
    { name: "Rétrospective", cadence: "Fin de sprint", description: "Ce qui a bien fonctionné, ce qui peut être amélioré pour le sprint suivant." },
  ],
};

export const sprints = [
  {
    id: "sprint-0",
    label: "Sprint 0",
    period: "Mi-mars → 31 mars 2026",
    status: "done",
    title: "Découverte & cadrage",
    objective:
      "Comprendre le besoin réel d'InnoFaso, explorer les pistes de solution, choisir une méthodologie et une stack technique.",
    highlights: [
      "Étude de la méthode SCRUM (rôles, cérémonies, organisation en backlog)",
      "Brainstorming technique : simplification du plan d'usine en zones de risque colorées plutôt qu'en points individuels",
      "Définition de la logique de couleur (conforme / surveillance / critique) selon les seuils UFC/cm²",
      "Fusion de deux pistes de roadmap en une roadmap unique en 9 étapes",
      "Choix de la stack : React/Vite + Next.js + Express + MySQL",
      "Répartition des rôles dans l'équipe de 5",
    ],
  },
  {
    id: "sprint-1",
    label: "Sprint 1",
    period: "01 → 14 avril 2026",
    status: "done",
    title: "Cadrage & conception",
    objective: "Formaliser le besoin et l'aspect visuel dans des livrables documentés.",
    highlights: [
      "Rédaction du cahier des charges fonctionnel et technique",
      "Étude du rapport d'analyse réel fourni par InnoFaso (modèle N°2026-0001)",
      "Maquettes Figma : connexion, dashboard, cartographie",
      "Confirmation des rôles et de la stack",
    ],
  },
  {
    id: "sprint-2",
    label: "Sprint 2",
    period: "15 → 28 avril 2026",
    status: "done",
    title: "Architecture & fondations",
    objective: "Mettre en place l'architecture technique et la base de données.",
    highlights: [
      "Script SQL complet (7 tables) basé sur le rapport d'analyse réel",
      "Connexion MySQL et module d'authentification JWT",
      "Thème visuel global de la plateforme (mode sombre, typographies)",
    ],
  },
  {
    id: "sprint-3",
    label: "Sprint 3",
    period: "29 avril → 12 mai 2026",
    status: "done",
    title: "Authentification & dashboard",
    objective: "Construire la coquille applicative et le tableau de bord principal.",
    highlights: [
      "Page de connexion et API d'authentification",
      "Layout principal : sidebar rétractable, navbar avec horloge temps réel, footer",
      "Tableau de bord : cartes statistiques animées, graphiques d'évolution sur 7 jours",
    ],
  },
  {
    id: "sprint-4",
    label: "Sprint 4",
    period: "13 → 26 mai 2026",
    status: "done",
    title: "Cartographie & saisie des analyses",
    objective: "Rendre la carte d'usine interactive et permettre la saisie hebdomadaire des résultats.",
    highlights: [
      "Carte interactive de l'usine, 14 zones, code couleur dynamique",
      "Panneau de détail par zone avec liste des points de prélèvement",
      "Module de saisie des résultats (132 points, 4 catégories de seuils UFC/cm²)",
    ],
  },
  {
    id: "sprint-5",
    label: "Sprint 5",
    period: "27 mai → 09 juin 2026",
    status: "done",
    title: "Historique & alertes",
    objective: "Ajouter la profondeur analytique et le système d'alerte automatique.",
    highlights: [
      "Page historique avec graphiques par semaine/mois",
      "Génération automatique d'alertes quand une valeur dépasse un seuil",
      "Badge de notification dynamique, notifications toast",
    ],
  },
  {
    id: "sprint-6",
    label: "Sprint 6",
    period: "10 → 23 juin 2026",
    status: "done",
    title: "IoT, paramètres, tests & livraison",
    objective: "Déployer la solution complète, finaliser l'administration et préparer la soutenance.",
    highlights: [
      "Déploiement en production sur plateforme cloud",
      "Finalisation des widgets IoT temps réel via Firebase",
      "Validation finale par le Dr Dabiré et remise du projet",
      "Soutenance devant le jury et présentation du démonstrateur",
    ],
  },
];

export const myTasks = [
  {
    category: "Coordination & gestion de projet",
    items: [
      "Mise en place de la documentation de gestion de projet (sprints, backlog, guide Git, outils)",
      "Organisation des comptes-rendus de réunion avec InnoFaso et structuration du suivi d'équipe",
      "Rédaction de la roadmap fusionnée (Sprint 0 → Sprint 6) à partir de deux pistes explorées avec l'équipe",
    ],
  },
  {
    category: "Développement full-stack",
    items: [
      "Intégration de composants React dans le dashboard (widgets temps réel, cartes statistiques)",
      "Connexion frontend ↔ backend Express, débogage des flux de données",
      "Mise en place de Firebase Realtime Database comme canal de données IoT",
    ],
  },
  {
    category: "Module IoT — conception & câblage",
    items: [
      "Choix et câblage des capteurs (DHT11) sur microcontrôleur ESP32",
      "Programmation Arduino/C++ : lecture capteur, connexion Wi-Fi, envoi HTTP vers Firebase",
      "Résolution de contraintes réseau réelles (Wi-Fi institutionnel WPA2-Enterprise incompatible avec l'ESP32, bascule vers hotspot mobile)",
      "Construction du widget React écoutant les données en temps réel (sans rechargement de page)",
    ],
  },
  {
    category: "Documentation & soutenance",
    items: [
      "Rédaction de la documentation technique (architecture, modèle de données, guide outils)",
      "Préparation des supports de présentation pour la soutenance finale",
    ],
  },
];

export const skillsGained = [
  {
    domain: "Gestion de projet",
    items: [
      "<strong>Méthodologie SCRUM allégée</strong> : J'ai animé nos réunions régulières sur 14 semaines. Au début, c'était un peu intimidant de coordonner tout le monde, mais l'équipe a vite pris le pli et les sprints sont devenus naturels.",
      "<strong>Gestion du backlog</strong> : Avec 5 personnes, il y avait beaucoup d'idées. J'ai dû trier et prioriser les tâches pour que chacun sache exactement quoi faire et éviter de s'éparpiller.",
      "<strong>Relation client concrète</strong> : Travailler avec le Dr Dabiré et M. Séraphin m'a appris à traduire des besoins complexes (normes ISO et seuils microbiologiques UFC/cm²) en fonctionnalités simples à coder."
    ],
  },
  {
    domain: "Développement logiciel",
    items: [
      "<strong>Architecture Full-stack</strong> : C'était mon premier grand projet reliant React, Next.js et Express. J'ai compris à quel point il est crucial de bien documenter les API pour que le frontend et le backend communiquent sans bug.",
      "<strong>Base de données MySQL</strong> : Nous avons conçu la structure SQL à partir d'un vrai bulletin d'analyse papier fourni par InnoFaso. C'était un exercice génial pour passer de la théorie à un modèle de données réel.",
      "<strong>Sécurité & Authentification</strong> : J'ai participé à la mise en place de la connexion sécurisée par jetons JWT, ce qui a permis de bien séparer les rôles entre les techniciens et les auditeurs."
    ],
  },
  {
    domain: "IoT & systèmes embarqués",
    items: [
      "<strong>Soudure et programmation C++</strong> : J'ai câblé et configuré nous-mêmes le microcontrôleur ESP32 avec son capteur DHT11. Manipuler le matériel physique et téléverser le code a rendu le projet très concret.",
      "<strong>Flux temps réel</strong> : Connecter l'ESP32 à Firebase pour voir la température et l'humidité varier en direct sur l'écran sans aucun rechargement de page a été l'un des moments les plus gratifiants du projet !",
      "<strong>Débrouillardise réseau</strong> : Le Wi-Fi de l'école (2iE) utilise une sécurité WPA2-Enterprise qui bloquait l'ESP32. J'ai dû trouver une solution de contournement en configurant un point d'accès mobile dédié."
    ],
  },
  {
    domain: "Compétences transversales",
    items: [
      "<strong>Vulgarisation scientifique</strong> : Expliquer à mes camarades comment fonctionnent les analyses microbiologiques, ou détailler le code C++ au client non-technique, a été un excellent exercice de communication.",
      "<strong>Cohésion d'équipe</strong> : Gérer les coups de rush ou les divergences d'opinion au sein d'un groupe de 5 m'a appris l'importance d'une écoute bienveillante et d'une bonne humeur constante.",
      "<strong>Autonomie face aux bugs</strong> : Quand les capteurs ne répondaient plus ou que la base de données plantait, j'ai appris à ne pas paniquer, à lire les documentations brutes et à avancer pas à pas."
    ],
  },
];

export const techStack = {
  frontend: ["React", "Vite", "Next.js", "JavaScript / TypeScript", "CSS personnalisé"],
  backend: ["Node.js", "Express.js", "MySQL", "phpMyAdmin", "JWT"],
  iot: ["ESP32", "DHT11", "Arduino IDE (C++)", "Firebase Realtime Database"],
  outils: ["Git & GitHub", "VS Code", "Figma", "Notion", "Google Sheets"],
};

export const solutionOverview = {
  description:
    "InnoFaso Surveillance Microbiologique est une plateforme web qui transforme les rapports d'analyse papier d'une usine agroalimentaire en tableau de bord vivant : cartographie des zones à risque avec code couleur automatique, historique des contaminations, alertes en temps réel, et désormais un flux de données environnementales (température, humidité) provenant de capteurs physiques.",
  modules: [
    {
      name: "Tableau de bord",
      description: "Vue d'ensemble en temps réel : alertes critiques, zones en surveillance, contamination moyenne, graphiques d'évolution.",
    },
    {
      name: "Cartographie interactive",
      description: "Plan de l'usine divisé en 14 zones, dont la couleur change automatiquement selon les derniers résultats de prélèvement.",
    },
    {
      name: "Saisie des analyses",
      description: "Interface admin pour enregistrer chaque semaine les résultats des 132 points de prélèvement, avec calcul automatique de conformité.",
    },
    {
      name: "Historique & alertes",
      description: "Suivi dans le temps par zone, génération automatique d'alertes lors d'un dépassement de seuil.",
    },
    {
      name: "Module IoT",
      description: "Capteur ESP32 + DHT11 publiant température et humidité en temps réel vers le dashboard via Firebase — détection préventive des conditions favorables à la contamination, avant même le prochain prélèvement de laboratoire.",
    },
  ],
};

export const innovation = {
  title: "Ce qui rend la solution différente",
  points: [
    {
      title: "Du réactif au préventif",
      description:
        "Les contrôles microbiologiques classiques arrivent 48 à 72h après le prélèvement. Le module IoT permet de détecter des conditions ambiantes à risque (humidité, température) en temps réel, avant la prochaine analyse de laboratoire.",
    },
    {
      title: "Corrélation environnement / microbiologie",
      description:
        "En croisant les mesures de capteurs avec l'historique des résultats de prélèvement, la plateforme ouvre la voie à une lecture prédictive plutôt que purement constatée.",
    },
    {
      title: "Conçu pour la certification",
      description:
        "La structuration des données (zones, seuils, horodatage, traçabilité) est pensée pour appuyer une démarche de certification FSSC 22000 / ISO 9001, avec une vision exploitable lors d'un audit.",
    },
    {
      title: "IA d'aide à la décision",
      description:
        "Intégration d'un module d'IA pour analyser les tendances historiques de contamination et générer automatiquement des rapports de synthèse. Cela permet aux responsables qualité de prendre des décisions correctives immédiates.",
    },
  ],
};

export const tools = {
  gestion: ["Notion", "Trello", "Google Sheets", "Google Drive", "Google Meet"],
  communication: ["WhatsApp"],
  code: ["GitHub", "VS Code", "Thunder Client"],
  design: ["Figma"],
  deploiement: ["Vercel", "Render", "XAMPP / phpMyAdmin"],
};

export const timeline = sprints.map((s) => ({
  id: s.id,
  label: s.label,
  period: s.period,
  status: s.status,
  title: s.title,
}));