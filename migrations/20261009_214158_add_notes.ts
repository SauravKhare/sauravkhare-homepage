import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_posts_kind" AS ENUM('Essay', 'Notebook', 'Field note');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_kind" AS ENUM('Essay', 'Notebook', 'Field note');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"excerpt" varchar,
  	"kind" "enum_posts_kind" DEFAULT 'Essay',
  	"read_time" varchar,
  	"published_date" timestamp(3) with time zone,
  	"cover_image_id" integer,
  	"cover_image_alt" varchar,
  	"pinned" boolean DEFAULT false,
  	"content" jsonb,
  	"reading_note_label" varchar DEFAULT 'Reading note',
  	"reading_note_text" varchar,
  	"in_this_note_label" varchar DEFAULT 'In this note',
  	"in_this_note_text" varchar,
  	"seo_title" varchar DEFAULT 'Saurav Khare',
  	"seo_description" varchar DEFAULT 'Frontend Developer',
  	"seo_keywords" varchar,
  	"seo_og_image_id" integer,
  	"seo_og_title" varchar,
  	"seo_og_description" varchar,
  	"seo_twitter_handle" varchar,
  	"seo_no_index" boolean DEFAULT false,
  	"seo_no_follow" boolean DEFAULT false,
  	"seo_canonical_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_kind" "enum__posts_v_version_kind" DEFAULT 'Essay',
  	"version_read_time" varchar,
  	"version_published_date" timestamp(3) with time zone,
  	"version_cover_image_id" integer,
  	"version_cover_image_alt" varchar,
  	"version_pinned" boolean DEFAULT false,
  	"version_content" jsonb,
  	"version_reading_note_label" varchar DEFAULT 'Reading note',
  	"version_reading_note_text" varchar,
  	"version_in_this_note_label" varchar DEFAULT 'In this note',
  	"version_in_this_note_text" varchar,
  	"version_seo_title" varchar DEFAULT 'Saurav Khare',
  	"version_seo_description" varchar DEFAULT 'Frontend Developer',
  	"version_seo_keywords" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_og_title" varchar,
  	"version_seo_og_description" varchar,
  	"version_seo_twitter_handle" varchar,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_seo_no_follow" boolean DEFAULT false,
  	"version_seo_canonical_url" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"archive_eyebrow" varchar DEFAULT 'Field notes / 2026',
  	"archive_heading" jsonb,
  	"archive_description" jsonb,
  	"archive_note" varchar DEFAULT 'A small, growing archive of ideas',
  	"archive_archive_eyebrow" varchar DEFAULT 'The archive',
  	"archive_archive_title" varchar DEFAULT 'All notes',
  	"labels_pinned" varchar DEFAULT 'Pinned note',
  	"labels_recent" varchar DEFAULT 'Recently written',
  	"labels_read_note" varchar DEFAULT 'Read the note',
  	"labels_open_all" varchar DEFAULT 'Open all notes',
  	"labels_enter_note" varchar DEFAULT 'Enter the note',
  	"labels_all_notes" varchar DEFAULT 'All notes',
  	"labels_back_to_notes" varchar DEFAULT 'Back to notes',
  	"images_fallback_cover_id" integer,
  	"images_fallback_cover_alt" varchar,
  	"images_decorative_image_id" integer,
  	"images_decorative_image_alt" varchar,
  	"images_og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "site" ADD COLUMN "brand_link" varchar DEFAULT '/';
  ALTER TABLE "site" ADD COLUMN "section_visibility_notes" boolean DEFAULT true;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog" ADD CONSTRAINT "blog_images_fallback_cover_id_media_id_fk" FOREIGN KEY ("images_fallback_cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog" ADD CONSTRAINT "blog_images_decorative_image_id_media_id_fk" FOREIGN KEY ("images_decorative_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog" ADD CONSTRAINT "blog_images_og_image_id_media_id_fk" FOREIGN KEY ("images_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE INDEX "posts_seo_seo_og_image_idx" ON "posts" USING btree ("seo_og_image_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_cover_image_idx" ON "_posts_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_posts_v_version_seo_version_seo_og_image_idx" ON "_posts_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "blog_images_images_fallback_cover_idx" ON "blog" USING btree ("images_fallback_cover_id");
  CREATE INDEX "blog_images_images_decorative_image_idx" ON "blog" USING btree ("images_decorative_image_id");
  CREATE INDEX "blog_images_images_og_image_idx" ON "blog" USING btree ("images_og_image_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "blog" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_posts_fk";
  
  DROP INDEX "payload_locked_documents_rels_posts_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "posts_id";
  ALTER TABLE "site" DROP COLUMN "brand_link";
  ALTER TABLE "site" DROP COLUMN "section_visibility_notes";
  DROP TYPE "public"."enum_posts_kind";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_kind";
  DROP TYPE "public"."enum__posts_v_version_status";`)
}
