import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_hero_image_position" AS ENUM('right', 'left');
  CREATE TABLE "capabilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_alt" varchar NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_social_platforms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"icon" varchar DEFAULT 'XLogo' NOT NULL,
  	"icon_color" varchar DEFAULT '#000000'
  );
  
  CREATE TABLE "site_header_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site_footer_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand_name" varchar DEFAULT 'Saurav Khare' NOT NULL,
  	"email" varchar DEFAULT 'hello@sauravkhare.com' NOT NULL,
  	"resume_id" integer,
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
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "hero_sub_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "hero_marquee_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "hero" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar NOT NULL,
  	"heading" jsonb NOT NULL,
  	"bio" jsonb,
  	"cta_text" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"hero_image_id" integer NOT NULL,
  	"hero_image_alt" varchar NOT NULL,
  	"decorative_image_id" integer,
  	"image_position" "enum_hero_image_position" DEFAULT 'right',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "now_disciplines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "now" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"company_description" varchar NOT NULL,
  	"company_name" varchar NOT NULL,
  	"company_link" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"cta_text" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"decorative_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "showcase" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "lastseen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar NOT NULL,
  	"heading_title" jsonb NOT NULL,
  	"heading_subtitle" jsonb,
  	"eyebrow" varchar NOT NULL,
  	"cta_text" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footerconfig" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" jsonb,
  	"copyright" varchar NOT NULL,
  	"decorative_text" varchar,
  	"cta_text" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "siteglobal_social_platforms" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "siteglobal_header_sub_heading" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "siteglobal_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "siteglobal_now" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "siteglobal_footer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "siteglobal" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "siteglobal_social_platforms" CASCADE;
  DROP TABLE "siteglobal_header_sub_heading" CASCADE;
  DROP TABLE "siteglobal_header" CASCADE;
  DROP TABLE "siteglobal_now" CASCADE;
  DROP TABLE "siteglobal_footer" CASCADE;
  DROP TABLE "siteglobal" CASCADE;
  ALTER TABLE "projects" ADD COLUMN "screenshot_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "capabilities_id" integer;
  ALTER TABLE "capabilities" ADD CONSTRAINT "capabilities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_social_platforms" ADD CONSTRAINT "site_social_platforms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_header_nav_links" ADD CONSTRAINT "site_header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_footer_nav_links" ADD CONSTRAINT "site_footer_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site" ADD CONSTRAINT "site_resume_id_documents_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site" ADD CONSTRAINT "site_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hero_sub_heading" ADD CONSTRAINT "hero_sub_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero_marquee_items" ADD CONSTRAINT "hero_marquee_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_decorative_image_id_media_id_fk" FOREIGN KEY ("decorative_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "now_disciplines" ADD CONSTRAINT "now_disciplines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."now"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience" ADD CONSTRAINT "experience_decorative_image_id_media_id_fk" FOREIGN KEY ("decorative_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "capabilities_image_idx" ON "capabilities" USING btree ("image_id");
  CREATE INDEX "capabilities_updated_at_idx" ON "capabilities" USING btree ("updated_at");
  CREATE INDEX "capabilities_created_at_idx" ON "capabilities" USING btree ("created_at");
  CREATE INDEX "site_social_platforms_order_idx" ON "site_social_platforms" USING btree ("_order");
  CREATE INDEX "site_social_platforms_parent_id_idx" ON "site_social_platforms" USING btree ("_parent_id");
  CREATE INDEX "site_header_nav_links_order_idx" ON "site_header_nav_links" USING btree ("_order");
  CREATE INDEX "site_header_nav_links_parent_id_idx" ON "site_header_nav_links" USING btree ("_parent_id");
  CREATE INDEX "site_footer_nav_links_order_idx" ON "site_footer_nav_links" USING btree ("_order");
  CREATE INDEX "site_footer_nav_links_parent_id_idx" ON "site_footer_nav_links" USING btree ("_parent_id");
  CREATE INDEX "site_resume_idx" ON "site" USING btree ("resume_id");
  CREATE INDEX "site_seo_seo_og_image_idx" ON "site" USING btree ("seo_og_image_id");
  CREATE INDEX "hero_sub_heading_order_idx" ON "hero_sub_heading" USING btree ("_order");
  CREATE INDEX "hero_sub_heading_parent_id_idx" ON "hero_sub_heading" USING btree ("_parent_id");
  CREATE INDEX "hero_marquee_items_order_idx" ON "hero_marquee_items" USING btree ("_order");
  CREATE INDEX "hero_marquee_items_parent_id_idx" ON "hero_marquee_items" USING btree ("_parent_id");
  CREATE INDEX "hero_hero_image_idx" ON "hero" USING btree ("hero_image_id");
  CREATE INDEX "hero_decorative_image_idx" ON "hero" USING btree ("decorative_image_id");
  CREATE INDEX "now_disciplines_order_idx" ON "now_disciplines" USING btree ("_order");
  CREATE INDEX "now_disciplines_parent_id_idx" ON "now_disciplines" USING btree ("_parent_id");
  CREATE INDEX "experience_decorative_image_idx" ON "experience" USING btree ("decorative_image_id");
  ALTER TABLE "projects" ADD CONSTRAINT "projects_screenshot_id_media_id_fk" FOREIGN KEY ("screenshot_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_screenshot_idx" ON "projects" USING btree ("screenshot_id");
  CREATE INDEX "payload_locked_documents_rels_capabilities_id_idx" ON "payload_locked_documents_rels" USING btree ("capabilities_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "siteglobal_social_platforms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar NOT NULL,
  	"platform_url" varchar NOT NULL,
  	"platform_icon" varchar DEFAULT 'XLogo' NOT NULL,
  	"platform_icon_color" varchar DEFAULT '#000000'
  );
  
  CREATE TABLE "siteglobal_header_sub_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "siteglobal_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"bio" jsonb
  );
  
  CREATE TABLE "siteglobal_now" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"now_company_name" varchar NOT NULL,
  	"now_company_link" varchar NOT NULL,
  	"now_company_description" varchar NOT NULL
  );
  
  CREATE TABLE "siteglobal_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"footer_heading" varchar,
  	"footer_description" jsonb
  );
  
  CREATE TABLE "siteglobal" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"resume_id" integer,
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
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_social_platforms" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_header_nav_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_footer_nav_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hero_sub_heading" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hero_marquee_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "now_disciplines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "now" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "experience" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "showcase" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "lastseen" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footerconfig" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "capabilities" CASCADE;
  DROP TABLE "site_social_platforms" CASCADE;
  DROP TABLE "site_header_nav_links" CASCADE;
  DROP TABLE "site_footer_nav_links" CASCADE;
  DROP TABLE "site" CASCADE;
  DROP TABLE "hero_sub_heading" CASCADE;
  DROP TABLE "hero_marquee_items" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "now_disciplines" CASCADE;
  DROP TABLE "now" CASCADE;
  DROP TABLE "experience" CASCADE;
  DROP TABLE "showcase" CASCADE;
  DROP TABLE "lastseen" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "footerconfig" CASCADE;
  ALTER TABLE "projects" DROP CONSTRAINT "projects_screenshot_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_capabilities_fk";
  
  DROP INDEX "projects_screenshot_idx";
  DROP INDEX "payload_locked_documents_rels_capabilities_id_idx";
  ALTER TABLE "siteglobal_social_platforms" ADD CONSTRAINT "siteglobal_social_platforms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siteglobal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal_header_sub_heading" ADD CONSTRAINT "siteglobal_header_sub_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siteglobal_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal_header" ADD CONSTRAINT "siteglobal_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siteglobal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal_now" ADD CONSTRAINT "siteglobal_now_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siteglobal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal_footer" ADD CONSTRAINT "siteglobal_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siteglobal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siteglobal" ADD CONSTRAINT "siteglobal_resume_id_documents_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "siteglobal" ADD CONSTRAINT "siteglobal_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "siteglobal_social_platforms_order_idx" ON "siteglobal_social_platforms" USING btree ("_order");
  CREATE INDEX "siteglobal_social_platforms_parent_id_idx" ON "siteglobal_social_platforms" USING btree ("_parent_id");
  CREATE INDEX "siteglobal_header_sub_heading_order_idx" ON "siteglobal_header_sub_heading" USING btree ("_order");
  CREATE INDEX "siteglobal_header_sub_heading_parent_id_idx" ON "siteglobal_header_sub_heading" USING btree ("_parent_id");
  CREATE INDEX "siteglobal_header_order_idx" ON "siteglobal_header" USING btree ("_order");
  CREATE INDEX "siteglobal_header_parent_id_idx" ON "siteglobal_header" USING btree ("_parent_id");
  CREATE INDEX "siteglobal_now_order_idx" ON "siteglobal_now" USING btree ("_order");
  CREATE INDEX "siteglobal_now_parent_id_idx" ON "siteglobal_now" USING btree ("_parent_id");
  CREATE INDEX "siteglobal_footer_order_idx" ON "siteglobal_footer" USING btree ("_order");
  CREATE INDEX "siteglobal_footer_parent_id_idx" ON "siteglobal_footer" USING btree ("_parent_id");
  CREATE INDEX "siteglobal_resume_idx" ON "siteglobal" USING btree ("resume_id");
  CREATE INDEX "siteglobal_seo_seo_og_image_idx" ON "siteglobal" USING btree ("seo_og_image_id");
  ALTER TABLE "projects" DROP COLUMN "screenshot_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "capabilities_id";
  DROP TYPE "public"."enum_hero_image_position";`)
}
