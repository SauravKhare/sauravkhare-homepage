import Link from "next/link";

import { Badge } from "@/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { formatDate } from "@/lib/utils";
import { type Experience } from "@/payload-types";
import ResumeButton from "./ResumeButton";
import ScrollReveal from "./ScrollReveal";

interface ExperiencesSectionProps {
  data: {
    docs: Experience[];
  } | undefined;
}

export default async function Experience({ data }: ExperiencesSectionProps) {
  return (
    <div className="flex flex-col">
      {
        data?.docs.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.15}>
            <Card key={item.id} className="bg-transparent border-none mb-16 shadow-none">
              <CardHeader className={`pl-0 ${i === 0 ? `pt-0` : ``} mb-3`}>
                <CardTitle className="font-heading text-ink text-2xl font-normal">
                  {item.position} <p className="inline-block mx-1">•</p>
                  <Link
                    href={item.link ?? ""}
                    className="text-2xl italic link-wet-ink"
                    target="_blank"
                  >
                    {item.companyName}
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center font-mono text-ink text-sm">
                  {formatDate(item.startingDate)} <span>–</span>
                  {item.isCurrent ? `Present` : formatDate(item.endingDate ?? "")}
                </CardDescription>
              </CardHeader>
              {item.description && (
                <CardContent className="font-body text-ink text-lg mb-6">
                  <p>{item.description}</p>
                </CardContent>
              )}

              <CardFooter className="flex flex-wrap gap-1.5">
                {item.technologies?.map((techItem) =>
                  typeof techItem === "object" && techItem !== null ? (
                    <Badge
                      key={techItem.id}
                      variant="outline"
                      className="border-[6px] border-transparent [border-image:url(/border.svg)_10_stretch] text-ink px-3 py-0 text-center font-mono"
                    >
                      {techItem.technology}
                    </Badge>
                  ) : null
                )}
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))
      }
      <ResumeButton />
    </div>
  );
}
