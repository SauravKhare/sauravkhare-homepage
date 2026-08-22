import { getSiteData, getArchives } from "@/fetchers/globals";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";
import { DEFAULT_BRAND_NAME } from "@/lib/fallbacks";

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
      brandName={site?.brandName ?? DEFAULT_BRAND_NAME}
      resumeUrl={site?.resume && typeof site.resume === "object" ? site.resume.url ?? null : null}
    />
  );
}
