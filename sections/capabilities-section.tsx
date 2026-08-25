import { getCapabilitiesConfig } from "@/fetchers/globals";
import { getCapabilities } from "@/fetchers/collections";
import { Capabilities } from "@/components/Capabilities";

export async function CapabilitiesSection() {
  const [config, data] = await Promise.all([
    getCapabilitiesConfig(),
    getCapabilities(),
  ]);
  return <Capabilities config={config} data={data} />;
}
