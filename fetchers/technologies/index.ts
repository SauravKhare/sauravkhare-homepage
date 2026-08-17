import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { Technology } from "@/payload-types";

export async function getTechnologies(): Promise<Technology[] | null> {
  "use cache";
  cacheTag("technologies");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "technologies",
      depth: 1,
      pagination: false,
    });
    return data.docs;
  } catch (error) {
    console.error("Failed to fetch technologies", error);
    return null;
  }
}
