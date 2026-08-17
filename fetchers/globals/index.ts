import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { Siteglobal, Archive } from "@/payload-types";

export async function getGlobalData(): Promise<Siteglobal | null> {
  "use cache";
  cacheTag("siteglobal", "footer", "socials", "header", "now", "resume", "globalSeo");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "siteglobal" });
  } catch (error) {
    console.error("Failed to fetch global data", error);
    return null;
  }
}

export async function getHeader(): Promise<Siteglobal["header"] | null> {
  const data = await getGlobalData();
  return data?.header ?? null;
}

export async function getNow(): Promise<Siteglobal["now"] | null> {
  const data = await getGlobalData();
  return data?.now ?? null;
}

export async function getSocials(): Promise<Siteglobal["socialPlatforms"] | null> {
  const data = await getGlobalData();
  return data?.socialPlatforms ?? null;
}

export async function getFooter(): Promise<Siteglobal["footer"] | null> {
  const data = await getGlobalData();
  return data?.footer ?? null;
}

export async function getSeoData(): Promise<Siteglobal["seo"] | null> {
  const data = await getGlobalData();
  return data?.seo ?? null;
}

export async function getResumeLink(): Promise<string | null> {
  const data = await getGlobalData();

  if (data?.resume && typeof data.resume === "object" && data.resume.url) {
    return data.resume.url;
  }

  return null;
}

export async function getArchives(): Promise<Archive["records"]> {
  "use cache";
  cacheTag("archives");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.findGlobal({ slug: "archives" });
    return data.records ?? [];
  } catch (error) {
    console.error("Failed to fetch archives data", error);
    return [];
  }
}
