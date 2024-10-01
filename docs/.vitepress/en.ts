import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: nav(),
    sidebar: sidebarItems(),
    editLink: {
      pattern: 'https://github.com/LingmoOS/lingmo-wiki/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Licensed under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>.',
      copyright: 'Copyright © 2024-present Lingmo OS Team',
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
      { text: 'Home', link: '/' }
  ]
}

function sidebarItems(): DefaultTheme.Sidebar[] {
  return {
    '/wiki/': {
      base: '/wiki/', items: [
        {
          text: 'About',
          link: 'about'
        },
        {
          text: 'Installation Guide',
          link: 'installation-guide'
        },
        {
          text: 'FAQ',
          link: 'faq'
        },
        {
          text: 'Historical Archive',
          link: 'historical-archive',
          collapsed: false,
          items: [
            {
              text: 'How to Install Lingmo OS without CD or USB: A Step-by-Step Guide',
              link: 'historical-archive/harddisk-install'
            }
          ]
        },
      ]
    },
  }
}
