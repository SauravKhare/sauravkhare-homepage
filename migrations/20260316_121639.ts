import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal" ALTER COLUMN "seo_title" DROP NOT NULL;
  ALTER TABLE "siteglobal" ALTER COLUMN "seo_description" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal" ALTER COLUMN "seo_title" SET NOT NULL;
  ALTER TABLE "siteglobal" ALTER COLUMN "seo_description" SET NOT NULL;`)
}
