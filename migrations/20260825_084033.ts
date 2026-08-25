import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "capabilities_config" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "capabilities_config" CASCADE;`)
}
