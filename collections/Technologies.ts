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
  ]
}