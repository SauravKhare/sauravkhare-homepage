import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const Technologies: CollectionConfig = {
  slug: "technologies",
  admin: {
    useAsTitle: "technology"
  },
  fields: [
    {
      name: "technology",
      type: "text",
      required: true,
      label: "Technology name"
    }
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("technologies", { expire: 0 });
      },
    ]
  }
}