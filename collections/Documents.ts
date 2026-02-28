import { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";

export const Documents: CollectionConfig = {
  slug: "documents",
  upload: {
    mimeTypes: ["application/pdf"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("media", { expire: 0 });
      }
    ]
  },
  fields: [
    { name: "Name", type: 'text', required: true },
  ],
};