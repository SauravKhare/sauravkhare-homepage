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
      name: "records",
      type: "array",
      label: "Past Iterations",
      labels: {
        singular: "Iteration",
        plural: "Iterations",
      },
      fields: [
        {
          name: "version",
          type: "text",
          required: true,
          label: "Version Name (e.g., Iteration V1)",
        },
        {
          name: "yearRange",
          type: "text",
          required: true,
          label: "Active Years (e.g., Circa 2024—2026)",
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: "Subdomain URL (e.g., https://v1.sauravkhare.com)",
        },
      ],
    },
  ],
};