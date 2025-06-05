import Image from "next/image";
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
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { formatDate } from "@/lib/utils";

export default async function Experience() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({ collection: "experiences", depth: 2, pagination: false, sort: "-startingDate", });

  return (
    <div className="flex flex-col mt-6">
      {
        data.docs.map((item, i) => (
          <Card key={item.id} className="mb-12 bg-transparent border-none">
            <CardHeader className={`pl-0 ${i === 0 ? `pt-0` : ``} mb-3`}>
              <CardTitle className="font-space-grotesk text-white">
                {item.position} <p className="inline-block mx-1">•</p>
                <Link
                  href={item.link ?? ""}
                  className=" hover:text-yellow-500 duration-500"
                  target="_blank"
                >
                  {item.companyName}
                </Link>
              </CardTitle>
              <CardDescription className="flex gap-2 items-center text-zinc-500 font-inter">
                {formatDate(item.startingDate)} <span>–</span>
                {item.isCurrent ? `Present` : formatDate(item.endingDate ?? "")}
              </CardDescription>
            </CardHeader>
            {item.description && (
              <CardContent className="text-zinc-500 font-inter">
                <p>{item.description}</p>
              </CardContent>
            )}

            <CardFooter className="flex flex-wrap gap-1.5 mt-3">
              {item.technologies && item.technologies.map((techItem) => {
                if (typeof techItem === "object" && techItem !== null) {
                  return (
                    <Badge
                      key={techItem.id}
                      variant="outline"
                      className="text-accent-yellow bg-accent-yellow/15 px-3 border-accent-yellow/50 border-2 font-inter"
                    >
                      {techItem.technology}
                    </Badge>
                  )
                }
              })}
            </CardFooter>
          </Card>
        ))
      }
      <Link
        href="https://0ave63j0lg.ufs.sh/f/j0oNiZlcJDrCoGern95Pz8evH41ZBQUacqbTl5f37noxYLRF"
        className="text-base text-white/80 duration-500 hover:underline hover:text-yellow-400 flex hover:gap-2 items-center font-inter"
      >
        View full Résumé.
        <Image src="./arrow.svg" alt="arrow" width={20} height={20} />
      </Link>
    </div>
  );
}
