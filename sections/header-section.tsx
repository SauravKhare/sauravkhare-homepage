import { getSiteData, getArchives } from "@/fetchers/globals";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";

export async function HeaderSection() {
  const [site, records] = await Promise.all([getSiteData(), getArchives()]);
  return (
    <HeaderTopNavigation
      records={records}
      socials={site?.socialPlatforms ?? []}
      navLinks={site?.headerNavLinks ?? []}
      brandName={site?.brandName ?? "Saurav Khare"}
      resumeUrl={site?.resume && typeof site.resume === "object" ? site.resume.url ?? null : null}
    />
  );
}
