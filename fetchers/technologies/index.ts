import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";

export async function getTechnologies() {
  "use cache";
  cacheTag("technologies");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "technologies",
      depth: 1,
      pagination: false,
      sort: "-startingDate",
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch technologies", error);
    return null;
  }
}