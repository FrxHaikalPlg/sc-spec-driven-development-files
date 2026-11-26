import type { Child } from 'hono/jsx'
import { Header } from './components/header'
import { Main } from './components/main'
import { Footer } from './components/footer'

type MainLayoutProps = {
  title?: string
  children: Child
}

export function MainLayout({ title = 'AgentClinic', children }: MainLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
