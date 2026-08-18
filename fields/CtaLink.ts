import { Field } from "payload";

export const ctaLinkField: Field = {
  name: "cta",
  type: "group",
  label: "Call to Action",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
      label: "Link Text",
    },
    {
      name: "href",
      type: "text",
      required: true,
      label: "Link URL",
      admin: {
        description: "Internal anchor (#work) or full URL (https://...)",
      },
    },
  ],
};
