import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ siteData }) {
    siteData.value.title = 'Diploma Dude'
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => null // Remove "Powered by VitePress"
    })
  }
}