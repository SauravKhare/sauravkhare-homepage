import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal" ALTER COLUMN "seo_title" SET DEFAULT 'Saurav Khare';
  ALTER TABLE "siteglobal" ALTER COLUMN "seo_description" SET DEFAULT 'Frontend Developer';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal" ALTER COLUMN "seo_title" DROP DEFAULT;
  ALTER TABLE "siteglobal" ALTER COLUMN "seo_description" DROP DEFAULT;`)
}
