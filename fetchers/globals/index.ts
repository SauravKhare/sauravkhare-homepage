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
  CapabilitiesConfig,
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

export const getCapabilitiesConfig =
  createGlobalFetcher<CapabilitiesConfig>("capabilitiesConfig", [TAGS.capabilitiesConfig]);

export const getLastSeenConfig =
  createGlobalFetcher<Lastseen>("lastseen", [TAGS.lastSeen]);

export const getContactConfig =
  createGlobalFetcher<Contact>("contact", [TAGS.contact]);

export const getFooterConfig =
  createGlobalFetcher<Footerconfig>("footerconfig", [TAGS.footer]);

export const getArchivesConfig =
  createGlobalFetcher<Archive>("archives", [TAGS.archives]);
