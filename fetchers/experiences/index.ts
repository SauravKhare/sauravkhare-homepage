import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";

export async function getExperiences() {
  "use cache";
  cacheTag("experiences");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "experiences",
      depth: 1,
      pagination: false,
      sort: "-startingDate",
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch experiences", error);
    return null;
  }
}