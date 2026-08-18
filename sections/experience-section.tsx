import { getExperienceConfig } from "@/fetchers/globals";
import { getExperiences } from "@/fetchers/experiences";
import { Experience } from "@/components/Experience";

export async function ExperienceSection() {
  const [config, experiences] = await Promise.all([
    getExperienceConfig(),
    getExperiences(),
  ]);
  return <Experience config={config} data={experiences} />;
}
