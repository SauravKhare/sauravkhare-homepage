import { getCapabilities } from "@/fetchers/collections";
import { Capabilities } from "@/components/Capabilities";

export async function CapabilitiesSection() {
  const data = await getCapabilities();
  return <Capabilities data={data} />;
}
