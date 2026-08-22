import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const Capabilities: CollectionConfig = {
  slug: "capabilities",
  labels: {
    singular: "Capability",
    plural: "Capabilities",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["label", "title", "order"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("capabilities", { expire: 0 });
      },
    ],
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Eyebrow Label",
      admin: {
        description: "Short label above the title (e.g., 'Shape')",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
      admin: {
        description: "Feature card title (e.g., 'UI & interaction')",
      },
    },
    {
      name: "copy",
      type: "text",
      required: true,
      label: "Description",
      admin: {
        description: "Short description of this capability",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Feature Image",
    },
    {
      name: "imageAlt",
      type: "text",
      required: true,
      label: "Image Alt Text",
    },
    {
      name: "order",
      type: "number",
      label: "Sort Order",
      defaultValue: 0,
      admin: {
        description: "Lower numbers appear first",
      },
    },
  ],
};
