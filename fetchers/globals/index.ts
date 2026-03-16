import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";

export async function getGlobalData() {
  "use cache";
  cacheTag("siteglobal", "footer", "socials", "header", "now", "resume", "globalSeo");

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

export async function getFooter() {
  try {
    const data = await getGlobalData();
    return data.footer;
  } catch (error) {
    console.error("Failed to fetch footer data", error);
  }
}

export async function getResumeLink() {
  try {
    const data = await getGlobalData();

    if (data?.resume && typeof data.resume === 'object' && data.resume.url) {
      return data.resume.url;
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch resume link", error);
    return null;
  }
}

export async function getSeoData() {
  try {
    const data = await getGlobalData();
    return data.seo;
  } catch (error) {
    console.error("Failed to fetch seo data", error);
  }
}

export async function getArchives() {
  "use cache";
  cacheTag("archives");

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.findGlobal({ slug: "archives" });

    return data.records || [];
  } catch (error) {
    console.error("Failed to fetch archives data", error);
    return [];
  }
}