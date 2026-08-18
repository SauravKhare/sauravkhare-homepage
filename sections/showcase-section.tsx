import { getShowcaseConfig } from "@/fetchers/globals";
import { getProjects } from "@/fetchers/projects";
import { Showcase } from "@/components/Showcase";

export async function ShowcaseSection() {
  const [config, projects] = await Promise.all([
    getShowcaseConfig(),
    getProjects(),
  ]);
  return <Showcase config={config} data={projects} />;
}
