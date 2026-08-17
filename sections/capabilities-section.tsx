import { getTechnologies } from "@/fetchers/technologies";
import { Capabilities } from "@/components/Capabilities";

export async function CapabilitiesSection() {
  const data = await getTechnologies();
  return <Capabilities data={data} />;
}
