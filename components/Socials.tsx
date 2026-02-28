import Link from "next/link";
import { getSocials } from "@/fetchers/globals";
import SocialIcon from "./SocialIcon";

export default async function Socials() {
  const socialPlatforms = await getSocials();

  return (
    <div className="flex gap-5 align-middle flex-wrap">
      {socialPlatforms?.map((item) => (
        <Link
          key={item.id}
          href={item.platformUrl}
          target="_blank"
          // We assign the Payload CMS color to a custom CSS variable
          style={{ '--brand-color': item.platformIconColor } as React.CSSProperties}
          // The icon defaults to your theme's text-ink, but switches to the brand color on hover
          className="text-ink transition-all duration-300 hover:-translate-y-1 hover:text-[var(--brand-color)]"
        >
          <SocialIcon
            iconName={item.platformIcon || undefined}
            size={20}
            weight="fill"
          // Notice we completely removed the `color` prop so it inherits the parent's text color!
          />
        </Link>
      ))}
    </div>
  );
}