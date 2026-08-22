import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { seoField } from "@/fields/SEO";
import { socialPlatformField } from "@/fields/SocialPlatform";
import { navLinkField } from "@/fields/NavLink";

export const Site: GlobalConfig = {
  slug: "site",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brandName",
      type: "text",
      required: true,
      defaultValue: "Saurav Khare",
      label: "Brand Name",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("site", { expire: 0 });
          },
        ],
      },
    },
    {
      name: "email",
      type: "text",
      required: true,
      defaultValue: "hello@sauravkhare.com",
      label: "Contact Email",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("site", { expire: 0 });
          },
        ],
      },
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "documents",
      label: "Résumé PDF",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("resume", { expire: 0 });
          },
        ],
      },
    },
    seoField,
    {
      name: "socialPlatforms",
      type: "array",
      label: "Social Platforms",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("socials", { expire: 0 });
          },
        ],
      },
      fields: [...socialPlatformField],
    },
    {
      name: "headerNavLinks",
      type: "array",
      label: "Header Navigation Links",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("site", { expire: 0 });
          },
        ],
      },
      fields: [...navLinkField],
    },
    {
      name: "footerNavLinks",
      type: "array",
      label: "Footer Navigation Links",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("site", { expire: 0 });
          },
        ],
      },
      fields: [...navLinkField],
    },
    {
      name: "sectionVisibility",
      type: "group",
      label: "Section Visibility",
      fields: [
        {
          name: "hero",
          type: "checkbox",
          label: "Hero",
          defaultValue: true,
        },
        {
          name: "now",
          type: "checkbox",
          label: "Now",
          defaultValue: true,
        },
        {
          name: "capabilities",
          type: "checkbox",
          label: "Capabilities",
          defaultValue: true,
        },
        {
          name: "experience",
          type: "checkbox",
          label: "Experience",
          defaultValue: true,
        },
        {
          name: "showcase",
          type: "checkbox",
          label: "Showcase",
          defaultValue: true,
        },
        {
          name: "lastSeen",
          type: "checkbox",
          label: "Last Seen",
          defaultValue: true,
        },
        {
          name: "contact",
          type: "checkbox",
          label: "Contact",
          defaultValue: true,
        },
        {
          name: "archives",
          type: "checkbox",
          label: "Archives",
          defaultValue: true,
        },
      ],
    },
  ],
};
