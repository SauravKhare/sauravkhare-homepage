import { getFooterConfig, getSiteData } from "@/fetchers/globals";
import { Footer } from "@/components/Footer";

export async function FooterSection() {
  const [config, site] = await Promise.all([getFooterConfig(), getSiteData()]);
  return (
    <Footer
      config={config}
      brandName={site?.brandName}
      email={site?.email}
      socials={site?.socialPlatforms}
      navLinks={site?.footerNavLinks}
    />
  );
}
