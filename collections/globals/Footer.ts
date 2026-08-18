import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { ctaLinkField } from "@/fields/CtaLink";

export const FooterConfig: GlobalConfig = {
  slug: "footerconfig",
  label: "Footer Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("footer", { expire: 0 });
      },
    ],
  },
  fields: [
    {
      name: "description",
      type: "richText",
      label: "Footer Description",
    },
    {
      name: "copyright",
      type: "text",
      required: true,
      label: "Copyright Text",
      admin: {
        description: "e.g., 'Bengaluru · India'",
      },
    },
    {
      name: "decorativeText",
      type: "text",
      label: "Decorative Text",
      admin: {
        description: "Large decorative text at bottom (e.g., 'PER ASPERA AD ASTRA')",
      },
    },
    ctaLinkField,
  ],
};
