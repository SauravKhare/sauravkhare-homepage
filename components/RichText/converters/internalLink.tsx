import { SerializedLinkNode } from "@payloadcms/richtext-lexical";

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const doc = linkNode.fields.doc;
  if (!doc) {
    console.warn('Internal link missing doc field');
    return '/';
  }

  const { value, relationTo } = doc;

  const slug = (value && typeof value === "object" && "slug" in value)
    ? String(value.slug)
    : undefined;

  if (relationTo === "posts") {
    return `/posts/${slug ?? ""}`;
  } else if (relationTo === "users") {
    return `/users/${slug ?? ""}`;
  } else {
    return `/${slug ?? ""}`;
  }
};

export { internalDocToHref }