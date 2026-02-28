import { revalidateTag } from "next/cache";
import { Field } from "payload";

export const seoField: Field = {
  name: "seo",
  type: "group",
  label: "SEO & Metadata",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          admin: {
            description: "Browser tab title and search engine title",
          },
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          maxLength: 160,
          admin: {
            description: "Meta description (max 160 characters)",
          },
        },
      ],
    },
    {
      name: "keywords",
      type: "text",
      admin: {
        description: "Comma-separated keywords",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          label: "Social Image",
          admin: {
            description: "1200x630px recommended",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Advanced SEO",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "ogTitle",
          type: "text",
          label: "Social Media Title Override",
        },
        {
          name: "ogDescription",
          type: "textarea",
          label: "Social Media Description Override",
          maxLength: 160,
        },
        {
          name: "twitterHandle",
          type: "text",
          admin: {
            placeholder: "@username",
          },
        },
        {
          name: "noIndex",
          type: "checkbox",
          label: "Hide from search engines",
          defaultValue: false,
        },
        {
          name: "noFollow",
          type: "checkbox",
          label: "No follow links",
          defaultValue: false,
        },
        {
          name: "canonicalUrl",
          type: "text",
          label: "Canonical URL",
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("globalSeo", { expire: 0 });
      },
    ],
  }
};