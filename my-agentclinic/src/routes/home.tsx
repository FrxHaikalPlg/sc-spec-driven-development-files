import { Hono } from 'hono'
import { html } from 'hono/html'
import { WelcomePage } from '../views/welcome'

const home = new Hono()

home.get('/', (c) => c.html(html`<!DOCTYPE html>${<WelcomePage />}`))

export default home
