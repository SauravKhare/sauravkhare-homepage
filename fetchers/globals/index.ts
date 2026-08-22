import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { TAGS } from "@/lib/cache-tags";
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

function createGlobalFetcher<T>(
  slug: string,
  tags: string[],
): () => Promise<T | null> {
  return async function fetchGlobal() {
    "use cache";
    cacheTag(...tags);

    try {
      const payload = await getPayload({ config: configPromise });
      return (await payload.findGlobal({ slug: slug as never })) as T;
    } catch (error) {
      console.error(`Failed to fetch global "${slug}"`, error);
      return null;
    }
  };
}

export const getSiteData = createGlobalFetcher<Site>("site", [
  TAGS.site,
  TAGS.globalSeo,
  TAGS.resume,
  TAGS.socials,
]);

export const getHero = createGlobalFetcher<Hero>("hero", [TAGS.hero]);

export const getNow = createGlobalFetcher<Now>("now", [TAGS.now]);

export const getExperienceConfig =
  createGlobalFetcher<Experience1>("experience", [TAGS.experience]);

export const getShowcaseConfig =
  createGlobalFetcher<Showcase>("showcase", [TAGS.showcase]);

export const getLastSeenConfig =
  createGlobalFetcher<Lastseen>("lastseen", [TAGS.lastSeen]);

export const getContactConfig =
  createGlobalFetcher<Contact>("contact", [TAGS.contact]);

export const getFooterConfig =
  createGlobalFetcher<Footerconfig>("footerconfig", [TAGS.footer]);

export async function getArchives(): Promise<Archive["records"]> {
  "use cache";
  cacheTag(TAGS.archives);

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.findGlobal({ slug: "archives" });
    return data.records ?? [];
  } catch (error) {
    console.error("Failed to fetch archives data", error);
    return [];
  }
}
