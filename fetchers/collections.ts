import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { TAGS } from "@/lib/cache-tags";

interface CollectionFetcherOptions {
  collection: string;
  tag: string;
  depth?: number;
  sort?: string;
  pagination?: boolean;
}

function createCollectionFetcher<T>(
  options: CollectionFetcherOptions,
): () => Promise<T[] | null> {
  const {
    collection,
    tag,
    depth = 1,
    sort,
    pagination = false,
  } = options;

  return async function fetchCollection() {
    "use cache";
    cacheTag(tag);

    try {
      const payload = await getPayload({ config: configPromise });
      const data = await payload.find({
        collection: collection as never,
        depth,
        pagination,
        ...(sort ? { sort } : {}),
      });
      return data.docs as T[];
    } catch (error) {
      console.error(`Failed to fetch ${collection}`, error);
      return null;
    }
  };
}

import { Capability, Experience, Project } from "@/payload-types";

export const getCapabilities = createCollectionFetcher<Capability>({
  collection: "capabilities",
  tag: TAGS.capabilities,
  sort: "order",
});

export const getExperiences = createCollectionFetcher<Experience>({
  collection: "experiences",
  tag: TAGS.experiences,
  sort: "-startingDate",
});

export const getProjects = createCollectionFetcher<Project>({
  collection: "projects",
  tag: TAGS.projects,
  depth: 2,
  sort: "order",
});
