import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal_social_platforms" ALTER COLUMN "platform_icon" SET DEFAULT 'XLogo';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal_social_platforms" ALTER COLUMN "platform_icon" DROP DEFAULT;`)
}
