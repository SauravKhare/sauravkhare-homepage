import { getFooterConfig, getSiteData } from "@/fetchers/globals";
import { Footer } from "@/components/Footer";
import { DEFAULT_BRAND_NAME, DEFAULT_EMAIL } from "@/lib/fallbacks";

export async function FooterSection() {
  const [config, site] = await Promise.all([getFooterConfig(), getSiteData()]);
  return (
    <Footer
      config={config}
      brandName={site?.brandName ?? DEFAULT_BRAND_NAME}
      email={site?.email ?? DEFAULT_EMAIL}
      socials={site?.socialPlatforms ?? []}
      navLinks={site?.footerNavLinks ?? []}
    />
  );
}
