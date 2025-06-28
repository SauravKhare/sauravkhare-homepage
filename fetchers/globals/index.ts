import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getGlobalData() {
  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.findGlobal({ slug: "siteglobal" });
    return data;
  } catch (error) {
    console.error("Failed to fetch global data", error);
    throw error;
  }
}

export async function getNow() {
  try {
    const data = await getGlobalData();
    return data.now;
  } catch (error) {
    console.error("Failed to fetch now data", error);
  }
}

export async function getHeader() {
  try {
    const data = await getGlobalData();
    return data.header;
  } catch (error) {
    console.error("Failed to fetch header data", error);
  }
}

export async function getSocials() {
  try {
    const data = await getGlobalData();
    return data.socialPlatforms;
  } catch (error) {
    console.error("Failed to fetch social data", error);
  }
}