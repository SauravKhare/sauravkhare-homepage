import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { ctaLinkField } from "@/fields/CtaLink";

export const Hero: GlobalConfig = {
  slug: "hero",
  label: "Hero Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("hero", { expire: 0 });
      },
    ],
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      required: true,
      label: "Eyebrow Text",
      admin: {
        description: "Small text above heading (e.g., 'Frontend engineer / 5.6 years / India')",
      },
    },
    {
      name: "heading",
      type: "richText",
      required: true,
      label: "Main Heading",
      admin: {
        description: "Use inline styling for colored text segments (e.g., make 'Saurav.' primary-colored)",
      },
    },
    {
      name: "subHeading",
      type: "array",
      label: "Rotating Subheading",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "bio",
      type: "richText",
      label: "Bio",
    },
    ctaLinkField,
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Hero Image",
    },
    {
      name: "heroImageAlt",
      type: "text",
      required: true,
      label: "Hero Image Alt Text",
    },
    {
      name: "decorativeImage",
      type: "upload",
      relationTo: "media",
      label: "Decorative Image",
      admin: {
        description: "Optional decorative image (e.g., abstract burst)",
      },
    },
    {
      name: "imagePosition",
      type: "select",
      defaultValue: "right",
      label: "Image Position",
      options: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
    },
    {
      name: "marqueeItems",
      type: "array",
      label: "Marquee Items",
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
