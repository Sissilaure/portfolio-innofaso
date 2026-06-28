import { useEffect, useState } from "react";
import { api } from "./data/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionOverview from "./components/SolutionOverview";
import SprintTimeline from "./components/SprintTimeline";
import DesignThinking from "./components/DesignThinking";
import MyTasks from "./components/MyTasks";
import Skills from "./components/Skills";
import Documents from "./components/Documents";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getAll()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, padding: 24, textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", color: "var(--status-critical)" }}>
          Impossible de charger les données du portfolio.
        </p>
        <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>
          Vérifiez que le serveur backend tourne bien sur <code>http://localhost:5000</code>.
        </p>
        <p style={{ color: "var(--ink-faint)", fontSize: 12 }}>{error}</p>
      </div>
    );
  }

  if (!data) return <Loader />;

  return (
    <>
      <Navbar />
      <Hero profile={data.profile} />
      <SolutionOverview solution={data.solutionOverview} client={data.client} />
      <SprintTimeline sprints={data.sprints} methodology={data.methodology} />
      <DesignThinking />
      <MyTasks tasks={data.myTasks} client={data.client} />
      <Skills skillsGained={data.skillsGained} techStack={data.techStack} innovation={data.innovation} />
      <Documents />
      <Team team={data.team} tools={data.tools} />
      <Contact />
      <Footer />
    </>
  );
}
