import { getProjects } from "@/fetchers/projects";
import { Showcase } from "@/components/Showcase";

export async function ShowcaseSection() {
  const data = await getProjects();
  return <Showcase data={data} />;
}
