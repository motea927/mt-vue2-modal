import { defineConfig } from 'vitepress'
const base = process.env.NODE_ENV === 'production' ? '/mt-vue2-modal/' : '/'

export default defineConfig({
  title: 'mt-vue2-modal',
  base,
  themeConfig: {
    repo: 'motea927/mt-vue2-modal',
    nav: [
      { text: 'Introduction', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'API',
        link: '/advance/api-reference',
        activeMatch: '^/advance/',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            { text: 'Motivation', link: '/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Demo', link: '/guide/demo' },
          ],
        },
        {
          text: 'Advance',
          children: [{ text: 'API Reference', link: '/advance/api-reference' }],
        },
      ],
    },
  },
})
