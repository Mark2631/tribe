import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')

test('manifest includes the core installability fields and icon sizes', async () => {
  const manifest = JSON.parse(await read('../public/manifest.webmanifest'))
  assert.ok(manifest.name || manifest.short_name)
  assert.equal(manifest.start_url, '/')
  assert.equal(manifest.display, 'standalone')
  const icons = manifest.icons.map((icon) => icon.sizes)
  assert.ok(icons.includes('192x192'))
  assert.ok(icons.includes('512x512'))
})

test('HTML declares the manifest and app icon', async () => {
  const html = await read('../index.html')
  assert.match(html, /rel="manifest" href="\/manifest\.webmanifest"/)
  assert.match(html, /tribe-mark\.svg/)
  assert.match(html, /TRIBE/)
})

test('entry point registers a service worker for offline shell support', async () => {
  const main = await read('../src/main.tsx')
  const worker = await read('../public/sw.js')
  assert.match(main, /serviceWorker\.register\('\/sw\.js'\)/)
  assert.match(worker, /caches\.open\(CACHE\)/)
  assert.match(worker, /caches\.match\('\/index\.html'\)/)
})

test('local-first boundaries and user data controls remain explicit', async () => {
  const app = await read('../src/App.tsx')
  assert.match(app, /Your RSVP stays on this device/)
  assert.match(app, /messages stay on this device and are not delivered/)
  assert.match(app, /const exportData =/)
  assert.match(app, /const importData =/)
  assert.match(app, /const clearLocalData =/)
  assert.match(app, /onClick=\{clearLocalData\}/)
})

test('new plans preserve insertion order unless the user selects sorting', async () => {
  const app = await read('../src/App.tsx')
  assert.match(app, /\.sort\(\(a, b\) => sort \? a\.people - b\.people : 0\)/)
})

test('mobile styles do not force a viewport wider than 320px', async () => {
  const css = await read('../src/styles.css')
  assert.match(css, /body\{margin:0;min-width:320px\}/)
  assert.match(css, /@media\(max-width:600px\)\{body\{min-width:320px\}/)
})

test('free-only filter requires an explicit free flag', async () => {
  const app = await read('../src/App.tsx')
  assert.match(app, /\(!filters\.free \|\| event\.free === true\)/)
})
