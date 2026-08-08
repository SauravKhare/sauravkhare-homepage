import Link from "next/link";

import { Project } from "@/payload-types";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Container } from "./Container";

interface ProjectsSectionProps {
  data: {
    docs: Project[];
  } | undefined;
  titleItalics?: boolean;
  descriptionItalics?: boolean;
}

export default async function Showcase({ data, titleItalics, descriptionItalics }: ProjectsSectionProps) {
  return (
    <Container id="projects">
      {/* <section  className="px-6 md:px-16 py-20 bg-dark-primary max-w-360 mx-auto"> */}
      <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">02. SELECTED WORKS</p>
      <p className="font-fraunces text-[40px] text-light-primary mb-4">Featured Projects</p>
      <div className="flex flex-wrap gap-x-32 gap-y-12">
        {
          data?.docs.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <div key={project.id} className="md:w-2xs">
                {/* <div className="bg-light-primary rounded-sm block md:w-[630] md:h-[414] mb-4"></div> */}
                <Image src={project.screenshot?.url} alt={project.screenshot?.alt} width={630} height={414} className="w-full h-full mb-4" />
                <Link href={project.projectLink}><p className="font-fraunces text-2xl font-medium text-light-primary">{project.projectName}</p></Link>
                <p className="text-[12px] font-jakarta text-light-primary">{project.description}</p>
              </div>
            </ScrollReveal>
          ))
        }
      </div>
      {/* </section> */}
    </Container>
  );
}
