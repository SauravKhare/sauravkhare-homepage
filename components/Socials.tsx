import Link from "next/link";
import { getSocials } from "@/fetchers/globals";
import SocialIcon from "@/components/SocialIcon";

export default async function Socials() {
  const socialPlatforms = await getSocials();

  return (
    <div className="flex gap-5 align-middle flex-wrap">
      {socialPlatforms?.map((item) => (
        <Link
          key={item.id}
          href={item.platformUrl}
          target="_blank"
          className="text-ink transition-all duration-300 hover:-translate-y-1"
        >
          <SocialIcon
            iconName={item.platformIcon || undefined}
            size={20}
            weight="fill"
          />
        </Link>
      ))}
    </div>
  );
}