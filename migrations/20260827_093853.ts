import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hero" ALTER COLUMN "cta_text" DROP NOT NULL;
  ALTER TABLE "hero" ALTER COLUMN "cta_href" DROP NOT NULL;
  ALTER TABLE "experience" ALTER COLUMN "cta_text" DROP NOT NULL;
  ALTER TABLE "experience" ALTER COLUMN "cta_href" DROP NOT NULL;
  ALTER TABLE "contact" ALTER COLUMN "cta_text" DROP NOT NULL;
  ALTER TABLE "contact" ALTER COLUMN "cta_href" DROP NOT NULL;
  ALTER TABLE "footerconfig" ALTER COLUMN "cta_text" DROP NOT NULL;
  ALTER TABLE "footerconfig" ALTER COLUMN "cta_href" DROP NOT NULL;
  ALTER TABLE "archives_records" ADD COLUMN "index" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ADD COLUMN "label" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ADD COLUMN "year" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ADD COLUMN "description" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ALTER COLUMN "index" DROP DEFAULT;
  ALTER TABLE "archives_records" ALTER COLUMN "label" DROP DEFAULT;
  ALTER TABLE "archives_records" ALTER COLUMN "year" DROP DEFAULT;
  ALTER TABLE "archives_records" ALTER COLUMN "description" DROP DEFAULT;
  ALTER TABLE "archives" ADD COLUMN "eyebrow" varchar;
  ALTER TABLE "archives" ADD COLUMN "heading" varchar;
  ALTER TABLE "archives" ADD COLUMN "description" varchar;
  ALTER TABLE "archives" ADD COLUMN "footer" varchar;
  ALTER TABLE "archives_records" DROP COLUMN "version";
  ALTER TABLE "archives_records" DROP COLUMN "year_range";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hero" ALTER COLUMN "cta_text" SET NOT NULL;
  ALTER TABLE "hero" ALTER COLUMN "cta_href" SET NOT NULL;
  ALTER TABLE "experience" ALTER COLUMN "cta_text" SET NOT NULL;
  ALTER TABLE "experience" ALTER COLUMN "cta_href" SET NOT NULL;
  ALTER TABLE "contact" ALTER COLUMN "cta_text" SET NOT NULL;
  ALTER TABLE "contact" ALTER COLUMN "cta_href" SET NOT NULL;
  ALTER TABLE "footerconfig" ALTER COLUMN "cta_text" SET NOT NULL;
  ALTER TABLE "footerconfig" ALTER COLUMN "cta_href" SET NOT NULL;
  ALTER TABLE "archives_records" ADD COLUMN "version" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ADD COLUMN "year_range" varchar NOT NULL DEFAULT '';
  ALTER TABLE "archives_records" ALTER COLUMN "version" DROP DEFAULT;
  ALTER TABLE "archives_records" ALTER COLUMN "year_range" DROP DEFAULT;
  ALTER TABLE "archives_records" DROP COLUMN "index";
  ALTER TABLE "archives_records" DROP COLUMN "label";
  ALTER TABLE "archives_records" DROP COLUMN "year";
  ALTER TABLE "archives_records" DROP COLUMN "description";
  ALTER TABLE "archives" DROP COLUMN "eyebrow";
  ALTER TABLE "archives" DROP COLUMN "heading";
  ALTER TABLE "archives" DROP COLUMN "description";
  ALTER TABLE "archives" DROP COLUMN "footer";`)
}
