import Image from "next/image";
import Link from "next/link";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Socials() {
  const payload = await getPayload({ config: configPromise });
  const socialPlatforms = (await payload.findGlobal({ slug: "siteglobal" })).socialPlatforms;

  return (
    <div className="flex gap-5 align-middle flex-wrap">
      {
        socialPlatforms?.map((item) => (
          <Link key={item.id} href={item.platformUrl} target="_blank">
            {typeof item.platformImage === "object" && item.platformImage !== null ? (
              <Image
                src={item.platformImage.url ?? ""}
                width={28}
                height={28}
                alt={item.platformImage.alt}
              />
            ) : null}
          </Link>
        ))
      }
    </div>
  );
}
