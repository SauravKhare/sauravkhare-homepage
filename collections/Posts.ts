import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";
import { seoField } from "@/fields/SEO";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Note",
    plural: "Notes",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "kind", "publishedDate", "pinned", "_status"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.title) {
          data.slug = slugify(data.title);
        }
        return data;
      },
    ],
    afterChange: [
      async () => {
        revalidateTag("posts", { expire: 0 });
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: "Slug",
      admin: {
        description: "URL segment. Auto-generated from the title when left blank.",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: "Excerpt",
      admin: {
        description: "Short summary shown on cards and in the archive list.",
      },
    },
    {
      name: "kind",
      type: "select",
      required: true,
      defaultValue: "Essay",
      label: "Kind",
      admin: {
        description: "Format label shown on the card (e.g., Essay, Notebook).",
      },
      options: [
        { label: "Essay", value: "Essay" },
        { label: "Notebook", value: "Notebook" },
        { label: "Field note", value: "Field note" },
      ],
    },
    {
      name: "readTime",
      type: "text",
      label: "Read time",
      admin: {
        description: "e.g., '12 min read'. Leave blank to hide.",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      label: "Published date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Cover image",
      admin: {
        description: "Falls back to the default cover set in the Notes Section settings.",
      },
    },
    {
      name: "coverImageAlt",
      type: "text",
      label: "Cover image alt text",
    },
    {
      name: "pinned",
      type: "checkbox",
      label: "Pinned / featured",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Feature this note at the top of the archive and homepage preview.",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Body",
    },
    {
      name: "readingNote",
      type: "group",
      label: "Reading note",
      admin: {
        description: "Optional aside shown beside the article. Hidden when the text is empty.",
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Reading note",
        },
        {
          name: "text",
          type: "textarea",
          label: "Text",
        },
      ],
    },
    {
      name: "inThisNote",
      type: "group",
      label: "In this note",
      admin: {
        description: "Optional sticky aside shown on wide screens. Hidden when the text is empty.",
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "In this note",
        },
        {
          name: "text",
          type: "textarea",
          label: "Text",
        },
      ],
    },
    seoField,
  ],
};
