import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site" ADD COLUMN "section_visibility_hero" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_now" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_capabilities" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_experience" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_showcase" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_last_seen" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_contact" boolean DEFAULT true;
  ALTER TABLE "site" ADD COLUMN "section_visibility_archives" boolean DEFAULT true;
  ALTER TABLE "now" ADD COLUMN "description" varchar;
  ALTER TABLE "media" DROP COLUMN "prefix";
  ALTER TABLE "documents" DROP COLUMN "prefix";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT '';
  ALTER TABLE "documents" ADD COLUMN "prefix" varchar DEFAULT '';
  ALTER TABLE "site" DROP COLUMN "section_visibility_hero";
  ALTER TABLE "site" DROP COLUMN "section_visibility_now";
  ALTER TABLE "site" DROP COLUMN "section_visibility_capabilities";
  ALTER TABLE "site" DROP COLUMN "section_visibility_experience";
  ALTER TABLE "site" DROP COLUMN "section_visibility_showcase";
  ALTER TABLE "site" DROP COLUMN "section_visibility_last_seen";
  ALTER TABLE "site" DROP COLUMN "section_visibility_contact";
  ALTER TABLE "site" DROP COLUMN "section_visibility_archives";
  ALTER TABLE "now" DROP COLUMN "description";`)
}
