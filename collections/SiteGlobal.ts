import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";

export const SiteGlobal: GlobalConfig = {
  slug: "siteglobal",
  fields: [
    {
      name: "socialPlatforms",
      type: "array",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("socials");
          },
        ]
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "platform",
              type: "text",
              required: true,
              label: "Platform name"
            },
            {
              name: "platformUrl",
              type: "text",
              required: true,
              label: "Link"
            },
            {
              name: "platformImage",
              type: "upload",
              relationTo: "media",
            }
          ]

        }
      ]
    },
    {
      name: "header",
      type: "array",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("header");
          },
        ]
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
              label: "Site title"
            },
            {
              name: "subHeading",
              type: "text",
              required: true,
              label: "Site sub heading"
            }
          ]
        }
      ],
    },
    {
      name: "now",
      type: "array",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("now");
          },
        ]
      },
      fields: [
        {
          name: "nowCompanyName",
          type: "text",
          required: true
        },
        {
          name: "nowCompanyLink",
          type: "text",
          required: true
        },
        {
          name: "nowCompanyDescription",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "footer",
      type: "array",
      hooks: {
        afterChange: [
          async () => {
            revalidateTag("footer");
          },
        ]
      },
      fields: [
        {
          name: "footerHeading",
          type: "text"
        },
        {
          name: "footerDescription",
          type: "richText"
        }
      ]
    }
  ]
}