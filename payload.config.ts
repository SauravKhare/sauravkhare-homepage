import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig, SharpDependency } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Experiences } from "./collections/Experiences";
import { Technologies } from "./collections/Technologies";
import { Projects } from "./collections/Projects";
import { SiteGlobal } from "./collections/SiteGlobal";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [SiteGlobal],
  collections: [Users, Media, Experiences, Technologies, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp: sharp as SharpDependency,
  plugins: [
    payloadCloudPlugin(),
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || "",
        acl: 'public-read',
      },
    }),
  ],
});
