import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import home from './routes/home'

const app = new Hono()

app.use('/styles.css', serveStatic({ root: './public' }))
app.route('/', home)

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`AgentClinic is running at http://localhost:${info.port}`)
})
