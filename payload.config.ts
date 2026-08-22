import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { TextColorFeature } from "@/fields/textColor/server";
import { buildConfig, SharpDependency } from "payload";
import { resendAdapter } from '@payloadcms/email-resend';

import { cloudinaryStorage } from "@/lib/storage/cloudinary";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Experiences } from "@/collections/Experiences";
import { Technologies } from "@/collections/Technologies";
import { Projects } from "@/collections/Projects";
import { Documents } from "@/collections/Documents";
import { Capabilities } from "@/collections/Capabilities";

import { Site } from "@/collections/globals/Site";
import { Hero } from "@/collections/globals/Hero";
import { Now } from "@/collections/globals/Now";
import { ExperienceConfig } from "@/collections/globals/Experience";
import { ShowcaseConfig } from "@/collections/globals/Showcase";
import { LastSeenConfig } from "@/collections/globals/LastSeen";
import { Contact } from "@/collections/globals/Contact";
import { FooterConfig } from "@/collections/globals/Footer";
import { Archives } from "@/collections/globals/Archives";

import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Site, Hero, Now, ExperienceConfig, ShowcaseConfig, LastSeenConfig, Contact, FooterConfig, Archives],
  collections: [Users, Media, Documents, Experiences, Technologies, Projects, Capabilities],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      TextColorFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: process.env.NODE_ENV === 'development',
  }),
  email: resendAdapter({
    defaultFromAddress: 'hello@sauravkhare.com',
    defaultFromName: 'Saurav',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  sharp: sharp as SharpDependency,
  plugins: [
    cloudinaryStorage({
      collections: {
        media: true,
        documents: {
          disablePayloadAccessControl: true,
        },
      },
      cloudConfig: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
        api_key: process.env.CLOUDINARY_API_KEY || '',
        api_secret: process.env.CLOUDINARY_API_SECRET || '',
      },
      folder: 'homepage',
    }),
  ],
});
