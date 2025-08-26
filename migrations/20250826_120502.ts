import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal_social_platforms" DROP CONSTRAINT "siteglobal_social_platforms_platform_image_id_media_id_fk";
  
  DROP INDEX "siteglobal_social_platforms_platform_image_idx";
  ALTER TABLE "siteglobal_social_platforms" ADD COLUMN "platform_icon" varchar NOT NULL;
  ALTER TABLE "siteglobal_social_platforms" ADD COLUMN "platform_icon_color" varchar DEFAULT '#000000';
  ALTER TABLE "siteglobal_social_platforms" DROP COLUMN "platform_image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "siteglobal_social_platforms" ADD COLUMN "platform_image_id" integer;
  ALTER TABLE "siteglobal_social_platforms" ADD CONSTRAINT "siteglobal_social_platforms_platform_image_id_media_id_fk" FOREIGN KEY ("platform_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "siteglobal_social_platforms_platform_image_idx" ON "siteglobal_social_platforms" USING btree ("platform_image_id");
  ALTER TABLE "siteglobal_social_platforms" DROP COLUMN "platform_icon";
  ALTER TABLE "siteglobal_social_platforms" DROP COLUMN "platform_icon_color";`)
}
