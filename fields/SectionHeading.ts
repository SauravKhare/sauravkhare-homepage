import { revalidateTag } from "next/cache";
import { Field } from "payload";

export const sectionHeadingField: Field = {
  name: "heading",
  type: "group",
  label: "Section Heading",
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Eyebrow Label",
      admin: {
        description: "Small text above the heading (e.g., 'Open channel')",
      },
    },
    {
      name: "title",
      type: "richText",
      required: true,
      label: "Heading Title",
      admin: {
        description: "Main heading text. Use inline styling for colored text segments.",
      },
    },
    {
      name: "subtitle",
      type: "richText",
      label: "Subtitle",
      admin: {
        description: "Optional description below the heading",
      },
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("sectionHeadings", { expire: 0 });
      },
    ],
  },
};
