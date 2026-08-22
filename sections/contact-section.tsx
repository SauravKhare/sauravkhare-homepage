import { getContactConfig, getSiteData } from "@/fetchers/globals";
import { Contact } from "@/components/Contact";
import { DEFAULT_EMAIL } from "@/lib/fallbacks";

export async function ContactSection() {
  const [config, site] = await Promise.all([getContactConfig(), getSiteData()]);
  return (
    <Contact
      config={config}
      email={site?.email ?? DEFAULT_EMAIL}
    />
  );
}
