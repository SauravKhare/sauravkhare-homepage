import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"_key" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "siteglobal" ADD COLUMN "resume_id" integer;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_title" varchar DEFAULT 'Saurav Khare';
  ALTER TABLE "siteglobal" ADD COLUMN "seo_description" varchar DEFAULT 'Frontend Developer';
  ALTER TABLE "siteglobal" ADD COLUMN "seo_keywords" varchar;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_og_title" varchar;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_og_description" varchar;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_twitter_handle" varchar;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_no_follow" boolean DEFAULT false;
  ALTER TABLE "siteglobal" ADD COLUMN "seo_canonical_url" varchar;
  CREATE INDEX "documents_updated_at_idx" ON "documents" USING btree ("updated_at");
  CREATE INDEX "documents_created_at_idx" ON "documents" USING btree ("created_at");
  CREATE UNIQUE INDEX "documents_filename_idx" ON "documents" USING btree ("filename");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal" ADD CONSTRAINT "siteglobal_resume_id_documents_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "siteglobal" ADD CONSTRAINT "siteglobal_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("documents_id");
  CREATE INDEX "siteglobal_resume_idx" ON "siteglobal" USING btree ("resume_id");
  CREATE INDEX "siteglobal_seo_seo_og_image_idx" ON "siteglobal" USING btree ("seo_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "documents" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "documents" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_documents_fk";

  ALTER TABLE "siteglobal" DROP CONSTRAINT "siteglobal_resume_id_documents_id_fk";

  ALTER TABLE "siteglobal" DROP CONSTRAINT "siteglobal_seo_og_image_id_media_id_fk";

  DROP INDEX "payload_locked_documents_rels_documents_id_idx";
  DROP INDEX "siteglobal_resume_idx";
  DROP INDEX "siteglobal_seo_seo_og_image_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "documents_id";
  ALTER TABLE "siteglobal" DROP COLUMN "resume_id";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_title";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_description";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_keywords";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_og_title";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_og_description";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_twitter_handle";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_no_index";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_no_follow";
  ALTER TABLE "siteglobal" DROP COLUMN "seo_canonical_url";`)
}
