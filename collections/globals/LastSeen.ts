import { revalidateTag } from "next/cache";
import { GlobalConfig } from "payload";
import { sectionHeadingField } from "@/fields/SectionHeading";

export const LastSeenConfig: GlobalConfig = {
  slug: "lastseen",
  label: "Last Seen Section",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateTag("lastSeen", { expire: 0 });
      },
    ],
  },
  fields: [
    sectionHeadingField,
  ],
};
