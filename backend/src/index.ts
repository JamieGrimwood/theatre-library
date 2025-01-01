import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json(
    [
      { name: 'Pink Panther Theme Tune', description: 'Pink Panther Theme Tune', keywords: ['pink', 'panther'], url: 'https://test.com' },
      { name: 'Pink Panther Theme Tune', description: 'Pink Panther Theme Tune', keywords: ['pink', 'panther'], url: 'https://test.com' },
      { name: 'Pink Panther Theme Tune', description: 'Pink Panther Theme Tune', keywords: ['pink', 'panther'], url: 'https://test.com' },
    ]
  )
})

export default {
  port: 5174,
  fetch: app.fetch,
}