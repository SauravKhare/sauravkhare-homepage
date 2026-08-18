import { Field } from "payload";

export const navLinkField: Field[] = [
  {
    name: "label",
    type: "text",
    required: true,
    label: "Link Label",
  },
  {
    name: "href",
    type: "text",
    required: true,
    label: "Link URL",
    admin: {
      description: "Internal anchor (#experience) or full URL (/resume)",
    },
  },
];
