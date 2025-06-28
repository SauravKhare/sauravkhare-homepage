import Image from "next/image";
import Link from "next/link";

import { getSocials } from "@/fetchers/globals";

export default async function Socials() {
  const socialPlatforms = await getSocials();

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
