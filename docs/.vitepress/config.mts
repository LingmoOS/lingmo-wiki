import { defineConfig } from 'vitepress'
import { en } from './en'
export default defineConfig({
  title: 'Lingmo Wiki',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingmoOS/lingmo-wiki' }
    ],
    search: {
      provider: 'local'
    },
    outline: [2, 6]
  },
  locales: {
    root: {
      label: 'English', ...en
    },
  },
})
