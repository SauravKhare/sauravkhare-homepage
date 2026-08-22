import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";
import { ctaLinkField } from "@/fields/CtaLink";

export const ExperienceConfig: GlobalConfig = {
  slug: "experience",
  label: "Experience Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("experience", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
    ctaLinkField,
    {
      name: "decorativeImage",
      type: "upload",
      relationTo: "media",
      label: "Decorative Image",
      admin: {
        description: "Optional floating decorative image",
      },
    },
  ],
};
