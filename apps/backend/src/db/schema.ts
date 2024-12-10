import { sqliteTable, text, integer, int } from 'drizzle-orm/sqlite-core'

export const notes = sqliteTable('notes', {
  id: int().primaryKey({ autoIncrement: true }),
  content: text('content').notNull(),
  createdAt: integer('created_at')
    .default(Math.floor(Date.now() / 1000))
    .notNull(),
})
