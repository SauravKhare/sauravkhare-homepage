import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import {
  Site,
  Hero,
  Now,
  Experience1,
  Showcase,
  Lastseen,
  Contact,
  Footerconfig,
  Archive,
} from "@/payload-types";

export async function getSiteData(): Promise<Site | null> {
  "use cache";
  cacheTag("site", "globalSeo", "resume", "socials");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "site" });
  } catch (error) {
    console.error("Failed to fetch site data", error);
    return null;
  }
}

export async function getHero(): Promise<Hero | null> {
  "use cache";
  cacheTag("hero");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "hero" });
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return null;
  }
}

export async function getNow(): Promise<Now | null> {
  "use cache";
  cacheTag("now");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "now" });
  } catch (error) {
    console.error("Failed to fetch now data", error);
    return null;
  }
}

export async function getExperienceConfig(): Promise<Experience1 | null> {
  "use cache";
  cacheTag("experience");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "experience" });
  } catch (error) {
    console.error("Failed to fetch experience config", error);
    return null;
  }
}

export async function getShowcaseConfig(): Promise<Showcase | null> {
  "use cache";
  cacheTag("showcase");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "showcase" });
  } catch (error) {
    console.error("Failed to fetch showcase config", error);
    return null;
  }
}

export async function getLastSeenConfig(): Promise<Lastseen | null> {
  "use cache";
  cacheTag("lastSeen");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "lastseen" });
  } catch (error) {
    console.error("Failed to fetch lastSeen config", error);
    return null;
  }
}

export async function getContactConfig(): Promise<Contact | null> {
  "use cache";
  cacheTag("contact");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "contact" });
  } catch (error) {
    console.error("Failed to fetch contact config", error);
    return null;
  }
}

export async function getFooterConfig(): Promise<Footerconfig | null> {
  "use cache";
  cacheTag("footer");

  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: "footerconfig" });
  } catch (error) {
    console.error("Failed to fetch footer config", error);
    return null;
  }
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
