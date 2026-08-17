import { getSocials } from "@/fetchers/globals";
import { Contact } from "@/components/Contact";

export async function ContactSection() {
  const data = await getSocials();
  return <Contact data={data} />;
}
