import { SerializedLinkNode } from "@payloadcms/richtext-lexical";

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;

  let slug: string | undefined = undefined;
  if (
    typeof value === "object" &&
    value !== null &&
    "slug" in value
  ) {
    slug = String((value as unknown as { slug: unknown }).slug);
  }

  if (relationTo === "posts") {
    return `/posts/${slug ?? ""}`;
  } else if (relationTo === "users") {
    return `/users/${slug ?? ""}`;
  } else {
    return `/${slug ?? ""}`;
  }
};

export { internalDocToHref }