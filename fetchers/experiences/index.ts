import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getExperiences() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({ collection: "experiences", depth: 1, pagination: false, sort: "-startingDate", });

  return data;
}