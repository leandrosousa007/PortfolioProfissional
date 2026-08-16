import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { projects } from "./data/portfolio";
import PortfolioScreen from "./screens/PortfolioScreen";
import ProjectDetailScreen from "./screens/ProjectDetailScreen";

function readProjectSlug() {
  if (Platform.OS !== "web" || typeof globalThis.location === "undefined") return undefined;
  const match = globalThis.location.hash.match(/^#\/projeto\/([^/]+)$/);
  return match?.[1] ? decodeURIComponent(match[1]) : undefined;
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(readProjectSlug);

  useEffect(() => {
    if (Platform.OS !== "web" || typeof globalThis.addEventListener !== "function") return;
    const updateRoute = () => setProjectSlug(readProjectSlug());
    globalThis.addEventListener("hashchange", updateRoute);
    return () => globalThis.removeEventListener("hashchange", updateRoute);
  }, []);

  const selectedProject = projectSlug ? projects.find((project) => project.slug === projectSlug) : undefined;
  if (selectedProject) return <ProjectDetailScreen project={selectedProject} />;

  return <PortfolioScreen />;
}
