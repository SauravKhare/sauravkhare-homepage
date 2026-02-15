import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getProjects() {
  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "projects",
      depth: 2,
      pagination: false,
      sort: "order",
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch projects", error);
  }
}