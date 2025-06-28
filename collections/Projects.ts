import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "projectName"
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
    }
  ]
}