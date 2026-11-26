import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import home from './routes/home'

const app = new Hono()

app.use('/styles.css', serveStatic({ root: './public' }))
app.route('/', home)

export default app
