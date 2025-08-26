import Link from "next/link";

import { getSocials } from "@/fetchers/globals";
import SocialIcon from "./SocialIcon";

export default async function Socials() {
  const socialPlatforms = await getSocials();

  return (
    <div className="flex gap-5 align-middle flex-wrap">
      {
        socialPlatforms?.map((item) => (
          <Link key={item.id} href={item.platformUrl} target="_blank">
            <SocialIcon
              iconName={item.platformIcon || undefined}
              color={item.platformIconColor || undefined}
              size={20}
              weight="fill"
            />
          </Link>
        ))
      }
    </div>
  );
}