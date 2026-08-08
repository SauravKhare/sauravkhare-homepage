import Link from "next/link";

import { Badge } from "@/components/badge";
import { formatDate } from "@/lib/utils";
import { Technology, type Experience } from "@/payload-types";
import ResumeButton from "@/components/ResumeButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Container } from "./Container";

interface ExperiencesSectionProps {
  data: {
    docs: Experience[];
  } | undefined;
  technologies: {
    docs: Technology[];
  } | undefined;
}

export default async function Experience({ data, technologies }: ExperiencesSectionProps) {
  const tech = technologies?.docs.map((item) => item.technology);
  return (
    <Container id="experience" borderBottom={true}>
      <div className="flex flex-col lg:flex-row gap-32 justify-between items-start">
        <div className="w-2/3">
          <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">03. EXPERIENCE</p>
          <div className="">
            {
              data?.docs.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.15}>
                  <div key={item.id} className="mb-8">
                    <div className="flex justify-between items-center">
                      <p className="font-fraunces text-light-primary text-2xl font-medium mb-2">{item.position}</p>
                      <p className="font-jakarta text-[12px] text-light-primary">{formatDate(item.startingDate)} <span>–</span>
                        {item.isCurrent ? `Present` : formatDate(item.endingDate ?? "")}</p>
                    </div>
                    <p className="font-jakarta text-[16px] text-teal-primary"><Link
                      href={item?.link ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.companyName}
                    </Link></p>
                    <p className="text-width mt-2.5 font-jakarta text-light-primary text-[16px] leading-6">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))
            }
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">04. ARSENAL</p>
          <div className="flex flex-wrap gap-3">
            {tech?.map((item) => (<div className="px-2 py-3 rounded-md text-light-primary border border-light-primary/10 font-jakarta uppercase">{item}</div>))}
          </div>
        </div>
      </div>
    </Container>
  );
}
