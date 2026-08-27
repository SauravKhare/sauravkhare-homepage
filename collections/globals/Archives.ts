import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";

export const Archives: GlobalConfig = {
  slug: "archives",
  label: "Archive Records",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("archives", { expire: 0 });
      },
    ]
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
      admin: {
        description: "Small text above the heading (e.g., 'Time capsule'). Leave blank to hide.",
      },
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      admin: {
        description: "Main title (e.g., 'The Archive'). Leave blank to hide.",
      },
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      admin: {
        description: "Body copy below the heading. Leave blank to hide.",
      },
    },
    {
      name: "footer",
      type: "text",
      label: "Footer Text",
      admin: {
        description: "Small note at the bottom (e.g., 'Archived snapshots, hosted separately...'). Leave blank to hide.",
      },
    },
    {
      name: "records",
      type: "array",
      label: "Past Iterations",
      labels: {
        singular: "Iteration",
        plural: "Iterations",
      },
      fields: [
        {
          name: "index",
          type: "text",
          required: true,
          label: "Index Numeral (e.g., I, II, III, IV)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Label (e.g., Terminal era)",
        },
        {
          name: "year",
          type: "text",
          required: true,
          label: "Year (e.g., 2022)",
        },
        {
          name: "description",
          type: "text",
          required: true,
          label: "Description (e.g., ASCII borders, blinking cursor, monospace)",
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: "URL (e.g., https://v1.sauravkhare.com)",
        },
      ],
    },
  ],
};