import type { AppType } from '@repo/backend/app'
import { hc } from 'hono/client'

export const apiClient = hc<AppType>('http://localhost:3000')
