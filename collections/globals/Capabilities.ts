import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";

export const CapabilitiesConfig: GlobalConfig = {
  slug: "capabilitiesConfig",
  label: "Capabilities Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("capabilitiesConfig", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
  ],
};
