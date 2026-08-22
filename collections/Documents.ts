import { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";

export const Documents: CollectionConfig = {
  slug: "documents",
  upload: true,
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("documents", { expire: 0 });
        revalidateTag("resume", { expire: 0 });
      }
    ]
  },
  fields: [
    { name: "Name", type: 'text', required: true },
  ],
};