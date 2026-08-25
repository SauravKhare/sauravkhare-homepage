import { getSiteData, getArchives } from "@/fetchers/globals";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";

interface HeaderSectionProps {
  archivesVisible?: boolean;
}

export async function HeaderSection({ archivesVisible = true }: HeaderSectionProps) {
  const [site, records] = await Promise.all([
    getSiteData(),
    archivesVisible ? getArchives() : Promise.resolve(null),
  ]);
  return (
    <HeaderTopNavigation
      records={records}
      socials={site?.socialPlatforms ?? []}
      navLinks={site?.headerNavLinks ?? []}
      brandName={site?.brandName}
      resumeUrl={site?.resume && typeof site.resume === "object" ? site.resume.url ?? null : null}
    />
  );
}
