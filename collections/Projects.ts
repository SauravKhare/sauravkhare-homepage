import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "projectName",
    defaultColumns: ['projectName', 'order', 'updatedAt'],
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("projects");
      }
    ]
  },
  fields: [
    {
      name: "projectName",
      label: "Project name",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true
    },
    {
      name: "projectLink",
      label: "Project link",
      type: "text",
      required: true
    },
    {
      name: "technologies",
      label: "Technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first. Set new projects to 1 to show them first.',
      },
    },
  ]
}