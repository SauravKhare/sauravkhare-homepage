import { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "companyName"
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      label: "Company name"
    },
    {
      name: "position",
      type: "text",
      required: true,
      label: "Position"
    },
    {
      name: "startingDate",
      type: "date",
      required: true,
      label: "Starting date"
    },
    {
      name: "endingDate",
      type: "date",
      label: "Ending date"
    },
    {
      name: "isCurrent",
      type: "checkbox",
      label: "Currently working here?"
    },
    {
      name: "description",
      type: "text",
      label: "Description"
    },
    {
      name: "link",
      type: "text",
      label: "Link"
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
      label: "Technologies",
    }
  ]
}