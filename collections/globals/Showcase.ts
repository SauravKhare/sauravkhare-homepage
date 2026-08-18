import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";

export const ShowcaseConfig: GlobalConfig = {
  slug: "showcase",
  label: "Showcase Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("showcase", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
  ],
};
