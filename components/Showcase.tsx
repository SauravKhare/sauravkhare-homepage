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
import { Projects } from "@/constants";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Showcase() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({
    collection: "projects",
    depth: 2,
    pagination: false,
    sort: "createdAt"
  });

  return (
    <div className="mt-6">
      {
        data.docs.map((project) => (
          <Card
            key={project.id}
            className="bg-transparent h-full border-none mb-12"
          >
            <CardHeader>
              <CardTitle>
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="font-space-grotesk text-white duration-500 hover:text-yellow-500"
                >
                  {project.projectName}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Paragraph classname="font-inter font-normal text-zinc-500 mt-3">
                {project.description}
              </Paragraph>
            </CardContent>
            <CardFooter className="flex flex-wrap mt-3">
              {project.technologies && project.technologies.map((technology) => {
                if (typeof technology === "object" && technology !== null) {
                  return (
                    <Badge
                      key={technology.id}
                      variant="outline"
                      className="text-white/40 font-inter bg-zinc-800 px-3 border-zinc-900 border-2 mr-1"
                    >
                      {technology.technology}
                    </Badge>
                  );
                }
              })}
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}
