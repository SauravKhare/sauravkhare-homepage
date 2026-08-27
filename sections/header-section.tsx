import { getSiteData, getArchivesConfig } from "@/fetchers/globals";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";

interface HeaderSectionProps {
  archivesVisible?: boolean;
}

export async function HeaderSection({ archivesVisible = true }: HeaderSectionProps) {
  const [site, archive] = await Promise.all([
    getSiteData(),
    archivesVisible ? getArchivesConfig() : Promise.resolve(null),
  ]);
  return (
    <HeaderTopNavigation
      archive={archive}
      socials={site?.socialPlatforms ?? []}
      navLinks={site?.headerNavLinks ?? []}
      brandName={site?.brandName}
      resumeUrl={site?.resume && typeof site.resume === "object" ? site.resume.url ?? null : null}
    />
  );
}
