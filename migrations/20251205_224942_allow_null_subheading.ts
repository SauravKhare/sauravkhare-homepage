import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    // This tells the database: "It's okay if this column is empty now."
    await db.execute(sql`
    ALTER TABLE "siteglobal_header"
    ALTER COLUMN "sub_heading" DROP NOT NULL;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
    // Only use this if you are sure no rows have null values,
    // otherwise this down migration will fail.
    // Generally safe to leave empty or log a warning.
    payload.logger.info('Skipping strict constraint restoration for safety')
}