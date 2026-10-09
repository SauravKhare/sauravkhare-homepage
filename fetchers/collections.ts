import { getPayload, type Where } from "payload";
import configPromise from "@payload-config";
import { cacheTag } from "next/cache";
import { TAGS } from "@/lib/cache-tags";

interface CollectionFetcherOptions {
  collection: string;
  tag: string;
  depth?: number;
  sort?: string;
  pagination?: boolean;
  where?: Where;
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
    where,
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
        ...(where ? { where } : {}),
      });
      return data.docs as T[];
    } catch (error) {
      console.error(`Failed to fetch ${collection}`, error);
      return null;
    }
  };
}

import { Capability, Experience, Post, Project } from "@/payload-types";

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

export const getPosts = createCollectionFetcher<Post>({
  collection: "posts",
  tag: TAGS.posts,
  depth: 2,
  sort: "-publishedDate",
  where: { _status: { equals: "published" } },
});

export async function getPostBySlug(slug: string): Promise<Post | null> {
  "use cache";
  cacheTag(TAGS.posts);

  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.find({
      collection: "posts",
      where: {
        and: [
          { slug: { equals: slug } },
          { _status: { equals: "published" } },
        ],
      },
      depth: 2,
      limit: 1,
    });
    return (data.docs[0] as Post) ?? null;
  } catch (error) {
    console.error(`Failed to fetch post "${slug}"`, error);
    return null;
  }
}
