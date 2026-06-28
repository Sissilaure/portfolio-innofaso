// server/routes/portfolio.js
import { Router } from "express";
import {
  profile,
  team,
  client,
  methodology,
  sprints,
  myTasks,
  skillsGained,
  techStack,
  solutionOverview,
  innovation,
  tools,
  timeline,
} from "../data/projectData.js";

const router = Router();

router.get("/profile", (req, res) => res.json(profile));
router.get("/team", (req, res) => res.json(team));
router.get("/client", (req, res) => res.json(client));
router.get("/methodology", (req, res) => res.json(methodology));
router.get("/sprints", (req, res) => res.json(sprints));
router.get("/sprints/:id", (req, res) => {
  const sprint = sprints.find((s) => s.id === req.params.id);
  if (!sprint) return res.status(404).json({ error: "Sprint non trouvé" });
  res.json(sprint);
});
router.get("/tasks", (req, res) => res.json(myTasks));
router.get("/skills", (req, res) => res.json(skillsGained));
router.get("/stack", (req, res) => res.json(techStack));
router.get("/solution", (req, res) => res.json(solutionOverview));
router.get("/innovation", (req, res) => res.json(innovation));
router.get("/tools", (req, res) => res.json(tools));
router.get("/timeline", (req, res) => res.json(timeline));

// Endpoint agrégé pratique pour charger toute la page d'accueil en un seul appel
router.get("/all", (req, res) => {
  res.json({
    profile,
    team,
    client,
    methodology,
    sprints,
    myTasks,
    skillsGained,
    techStack,
    solutionOverview,
    innovation,
    tools,
    timeline,
  });
});

export default router;
