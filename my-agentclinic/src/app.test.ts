import { describe, expect, it } from 'vitest'
import app from './app'

describe('GET /', () => {
  it('returns a successful HTML response', async () => {
    const response = await app.request('/')

    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toMatch(/^text\/html\b/i)
  })

  it('returns a complete English HTML document with page metadata', async () => {
    const response = await app.request('/')
    const html = await response.text()

    expect(html).toMatch(/^<!doctype html>/i)
    expect(html).toMatch(/<html\b[^>]*\blang="en"/i)
    expect(html).toMatch(/<meta\b[^>]*\bcharset="UTF-8"/i)
    expect(html).toContain('<title>AgentClinic</title>')
    const viewport = html.match(/<meta\b[^>]*\bname="viewport"[^>]*>/i)?.[0]
    expect(viewport).toContain('width=device-width')
    expect(viewport).toContain('initial-scale=1')
    expect(viewport).not.toMatch(/user-scalable\s*=\s*no|(?:maximum|minimum)-scale\s*=/i)
    expect(html).toMatch(/<\/body>\s*<\/html>\s*$/i)
  })

  it('renders header, main, and footer with one welcome heading in main', async () => {
    const response = await app.request('/')
    const html = await response.text()
    const regions = html.match(
      /<header\b[^>]*>([\s\S]*?)<\/header>\s*<main\b[^>]*>([\s\S]*?)<\/main>\s*<footer\b[^>]*>([\s\S]*?)<\/footer>/i,
    )

    expect(regions).not.toBeNull()
    expect(html.match(/<header\b/gi)).toHaveLength(1)
    expect(html.match(/<main\b/gi)).toHaveLength(1)
    expect(html.match(/<footer\b/gi)).toHaveLength(1)
    expect(html.match(/<h1\b/gi)).toHaveLength(1)
    expect(regions?.[1]).toMatch(/<a\b[^>]*\bhref="\/"[^>]*>AgentClinic<\/a>/i)
    expect(regions?.[2]).toMatch(/<h1\b[^>]*>Welcome to AgentClinic<\/h1>/i)
    expect(regions?.[3]).toContain('AgentClinic')
  })

  it('returns the page content without client-side scripts', async () => {
    const response = await app.request('/')
    const html = await response.text()

    expect(html).toContain('Welcome to AgentClinic')
    expect(html).not.toMatch(/<script\b/i)
  })

  it('links to a stylesheet that the application serves as CSS', async () => {
    const response = await app.request('/')
    const html = await response.text()
    const stylesheetLink = html.match(/<link\b[^>]*>/gi)?.find(
      (link) => /\brel="stylesheet"/i.test(link),
    )
    const href = stylesheetLink?.match(/\bhref="([^"]+)"/i)?.[1]

    expect(href).toBe('/styles.css')
    if (!href) throw new Error('The page must link to a stylesheet')

    const stylesheet = await app.request(href)
    const css = await stylesheet.text()

    expect(stylesheet.status).toBe(200)
    expect(stylesheet.headers.get('Content-Type')).toMatch(/^text\/css\b/i)
    expect(css).toMatch(/[^{}]+\{[^{}]+\}/)
    expect(css).not.toMatch(/<!doctype html/i)
  })
})
