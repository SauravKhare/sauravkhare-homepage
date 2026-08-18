import { Field } from "payload";

export const socialPlatformField: Field[] = [
  {
    name: "name",
    type: "text",
    required: true,
    label: "Platform Name",
  },
  {
    name: "url",
    type: "text",
    required: true,
    label: "Profile URL",
  },
  {
    name: "icon",
    type: "text",
    required: true,
    label: "Icon",
    defaultValue: "XLogo",
    admin: {
      components: {
        Field: {
          path: "@/fields/IconPicker#default",
        },
      },
    },
  },
  {
    name: "iconColor",
    type: "text",
    label: "Icon Color",
    defaultValue: "#000000",
    admin: {
      description: "Hex color code (e.g., #FF5733, #1DA1F2)",
      placeholder: "#000000",
    },
  },
];
