import { getFooterConfig, getSiteData } from "@/fetchers/globals";
import { Footer } from "@/components/Footer";

export async function FooterSection() {
  const [config, site] = await Promise.all([getFooterConfig(), getSiteData()]);
  return (
    <Footer
      config={config}
      brandName={site?.brandName ?? "Saurav Khare"}
      email={site?.email ?? "hello@sauravkhare.com"}
      socials={site?.socialPlatforms ?? []}
      navLinks={site?.footerNavLinks ?? []}
    />
  );
}
