import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";

export const Now: GlobalConfig = {
  slug: "now",
  label: "Now Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("now", { expire: 0 });
      },
    ],
  },
  fields: [
    {
      name: "companyDescription",
      type: "text",
      required: true,
      label: "Role Title",
      admin: {
        description: "e.g., 'Senior Experience Engineer'",
      },
    },
    {
      name: "companyName",
      type: "text",
      required: true,
      label: "Company Name",
    },
    {
      name: "companyLink",
      type: "text",
      required: true,
      label: "Company URL",
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      admin: {
        description: "Short paragraph below the role heading (e.g., 'Shipping product surfaces...')",
      },
    },
    {
      name: "disciplines",
      type: "array",
      label: "Disciplines",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
