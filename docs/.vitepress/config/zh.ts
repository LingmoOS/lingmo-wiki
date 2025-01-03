import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  themeConfig: {
    nav: nav(),
    editLink: {
      pattern: 'https://github.com/LingmoOS/lingmo-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      message: '遵循 <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a> 协议。',
      copyright: 'Copyright © 2024-present Lingmo OS Team',
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
      { text: '首页', link: '/' }
  ]
}
