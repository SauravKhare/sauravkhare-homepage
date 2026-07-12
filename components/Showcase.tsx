import Link from "next/link";

import { Project } from "@/payload-types";
import ScrollReveal from "@/components/ScrollReveal";

interface ProjectsSectionProps {
  data: {
    docs: Project[];
  } | undefined;
  titleItalics?: boolean;
  descriptionItalics?: boolean;
}

export default async function Showcase({ data, titleItalics, descriptionItalics }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-16 py-20 bg-dark-primary max-w-360 mx-auto">
      <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">02. SELECTED WORKS</p>
      <p className="font-fraunces text-[40px] text-light-primary mb-4">Featured Projects</p>
      <div className="flex flex-wrap gap-x-32 gap-y-12">
        {
          data?.docs.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <div key={project.id} className="w-138">
                <div className="bg-light-primary rounded-sm block w-[630] h-[414] mb-4"></div>
                <Link href={project.projectLink}><p className="font-fraunces text-2xl font-medium text-light-primary">{project.projectName}</p></Link>
                <p className="text-[12px] font-jakarta text-light-primary">{project.description}</p>
              </div>
            </ScrollReveal>
          ))
        }
      </div>
    </section>
  );
}
