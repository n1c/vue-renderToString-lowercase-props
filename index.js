// this runs in Node.js on the server.
import { createSSRApp } from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
  template: `<svg viewBox="0 0 10 10"></svg>`
})

renderToString(app).then((html) => {
  console.log('Expected behaviour is to see "viewBox", though param will render as "viewbox"')
  console.log(html)
})