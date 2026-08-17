import { getExperiences } from "@/fetchers/experiences";
import { Experience } from "@/components/Experience";

export async function ExperienceSection() {
  const data = await getExperiences();
  return <Experience data={data} />;
}
