import { createSSRApp, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import { createHead } from '@vueuse/head'
import '@/assets/scss/main.scss'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(PageWithLayout)
  const head = createHead()

  app.use(head)
  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
