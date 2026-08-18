import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { Capability } from "@/payload-types";

export async function getCapabilities(): Promise<Capability[] | null> {
  "use cache";
  cacheTag("capabilities");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "capabilities",
      depth: 1,
      pagination: false,
      sort: "order",
    });
    return data.docs;
  } catch (error) {
    console.error("Failed to fetch capabilities", error);
    return null;
  }
}
