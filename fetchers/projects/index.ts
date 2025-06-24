import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getProjects() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({
    collection: "projects",
    depth: 2,
    pagination: false,
    sort: "createdAt"
  });

  return data;
}