import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";
import { ctaLinkField } from "@/fields/CtaLink";

export const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("contact", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
    {
      name: "eyebrow",
      type: "text",
      required: true,
      label: "Eyebrow Text",
      admin: {
        description: "Small text above email (e.g., 'Let's talk about the interesting version')",
      },
    },
    ctaLinkField,
  ],
};
