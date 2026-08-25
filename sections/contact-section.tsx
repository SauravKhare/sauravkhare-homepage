import { getContactConfig, getSiteData } from "@/fetchers/globals";
import { Contact } from "@/components/Contact";

export async function ContactSection() {
  const [config, site] = await Promise.all([getContactConfig(), getSiteData()]);
  return (
    <Contact
      config={config}
      email={site?.email}
    />
  );
}
