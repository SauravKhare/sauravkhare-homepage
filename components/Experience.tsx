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
import ResumeButton from "@/components/ResumeButton";
import ScrollReveal from "@/components/ScrollReveal";

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
                  {item.position} <span className="inline-block mx-1">•</span>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="text-2xl italic link-wet-ink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.companyName}
                    </Link>
                  ) : (
                    <span className="italic">{item.companyName}</span>
                  )}
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
                      className="relative border-[6px] border-transparent text-ink px-3 py-0 text-center font-mono"
                    >
                      <span
                        className="absolute -inset-1.5 -z-10 bg-ink"
                        style={{
                          WebkitMaskImage: `url(/border-mask.png)`,
                          maskImage: `url(/border-mask.png)`,
                          WebkitMaskSize: "100% 100%",
                          maskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                        }}
                        aria-hidden="true"
                      />
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
