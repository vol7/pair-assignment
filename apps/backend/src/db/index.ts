import { config } from 'dotenv'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'

config({
  path: '../../../.env',
})

const sqlite = new Database('data.db')
export const db = drizzle(sqlite, { schema })

export * from './schema'
