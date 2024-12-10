import { serve } from '@hono/node-server'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'
import { cors } from 'hono/cors'
import { db, notes } from './db'

const app = new Hono()

const appDefinition = app.use(cors()).get('/notes', async (c) => {
  const allNotes = await db.select().from(notes)
  return c.json(allNotes)
})

// Routes go here :)

export type AppType = typeof appDefinition

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
