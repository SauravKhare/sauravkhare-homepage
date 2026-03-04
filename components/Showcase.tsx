import Link from "next/link";

import { Badge } from "@/components/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import Paragraph from "@/components/Paragraph";
import { Project } from "@/payload-types";
import ScrollReveal from "@/components/ScrollReveal";

interface ProjectsSectionProps {
  data: {
    docs: Project[];
  } | undefined;
}

export default async function Showcase({ data }: ProjectsSectionProps) {
  return (
    <div className="">
      {
        data?.docs.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.15}>
            <Card
              key={project.id}
              className="bg-transparent border-none mb-16 shadow-none"
            >
              <CardHeader>
                <CardTitle>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="font-heading text-ink text-2xl font-normal link-wet-ink"
                  >
                    {project.projectName}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Paragraph classname="font-body text-ink text-lg mb-6">
                  {project.description}
                </Paragraph>
              </CardContent>
              <CardFooter className="flex flex-wrap mt-3 gap-1.5">
                {project.technologies && project.technologies.map((technology) => {
                  if (typeof technology === "object" && technology !== null) {
                    return (
                      <Badge
                        key={technology.id}
                        variant="outline"
                        className="border-[6px] border-transparent [border-image:url(/border.svg)_10_stretch] text-ink px-3 py-0 text-center font-mono"
                      >
                        {technology.technology}
                      </Badge>
                    );
                  }
                })}
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))
      }
    </div>
  );
}
