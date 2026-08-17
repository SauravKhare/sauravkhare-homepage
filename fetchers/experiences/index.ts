import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { Experience } from "@/payload-types";

export async function getExperiences(): Promise<Experience[] | null> {
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
    return data.docs;
  } catch (error) {
    console.error("Failed to fetch experiences", error);
    return null;
  }
}
