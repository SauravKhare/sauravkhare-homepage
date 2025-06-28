import { GlobalConfig } from "payload";
import { text } from "stream/consumers";

export const SiteGlobal: GlobalConfig = {
  slug: "siteglobal",
  fields: [
    {
      name: "socialPlatforms",
      type: "array",
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