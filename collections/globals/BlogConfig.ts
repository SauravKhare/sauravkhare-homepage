import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";

export const BlogConfig: GlobalConfig = {
  slug: "blog",
  label: "Notes Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("blog", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
    {
      type: "collapsible",
      label: "Archive Page",
      fields: [
        {
          name: "archive",
          type: "group",
          label: false,
          fields: [
            {
              name: "eyebrow",
              type: "text",
              label: "Eyebrow",
              defaultValue: "Field notes / 2026",
              admin: {
                description: "Small label above the archive heading.",
              },
            },
            {
              name: "heading",
              type: "richText",
              label: "Heading",
              admin: {
                description: "Use inline styling for colored text segments.",
              },
            },
            {
              name: "description",
              type: "richText",
              label: "Description",
              admin: {
                description: "Intro copy beside the archive heading.",
              },
            },
            {
              name: "note",
              type: "text",
              label: "Footer note",
              defaultValue: "A small, growing archive of ideas",
              admin: {
                description: "Small note below the description.",
              },
            },
            {
              name: "archiveEyebrow",
              type: "text",
              label: "Archive eyebrow",
              defaultValue: "The archive",
            },
            {
              name: "archiveTitle",
              type: "text",
              label: "Archive title",
              defaultValue: "All notes",
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Labels & Links",
      fields: [
        {
          name: "labels",
          type: "group",
          label: false,
          fields: [
            {
              name: "pinned",
              type: "text",
              label: "Pinned label",
              defaultValue: "Pinned note",
            },
            {
              name: "recent",
              type: "text",
              label: "Recently written label",
              defaultValue: "Recently written",
            },
            {
              name: "readNote",
              type: "text",
              label: "Read note link",
              defaultValue: "Read the note",
            },
            {
              name: "openAll",
              type: "text",
              label: "Open all link",
              defaultValue: "Open all notes",
            },
            {
              name: "enterNote",
              type: "text",
              label: "Enter note link",
              defaultValue: "Enter the note",
            },
            {
              name: "allNotes",
              type: "text",
              label: "All notes link",
              defaultValue: "All notes",
            },
            {
              name: "backToNotes",
              type: "text",
              label: "Back to notes link",
              defaultValue: "Back to notes",
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Images",
      fields: [
        {
          name: "images",
          type: "group",
          label: false,
          fields: [
            {
              name: "fallbackCover",
              type: "upload",
              relationTo: "media",
              label: "Fallback cover image",
              admin: {
                description: "Used on cards and detail pages when a note has no cover image.",
              },
            },
            {
              name: "fallbackCoverAlt",
              type: "text",
              label: "Fallback cover alt text",
            },
            {
              name: "decorativeImage",
              type: "upload",
              relationTo: "media",
              label: "Archive decorative image",
              admin: {
                description: "Optional art shown behind the archive heading.",
              },
            },
            {
              name: "decorativeImageAlt",
              type: "text",
              label: "Archive decorative image alt text",
            },
            {
              name: "ogImage",
              type: "upload",
              relationTo: "media",
              label: "Default social image",
              admin: {
                description: "Used for social sharing when a note has no social image of its own.",
              },
            },
          ],
        },
      ],
    },
  ],
};
