import process from 'node:process';
import { defineConfig } from 'vitepress';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItMathjax3 from 'markdown-it-mathjax3';

import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress';
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img';

import { githubRepoLink, siteDescription, siteName, targetDomain } from '../metadata';
// import { creatorNames, creatorUsernames } from './creators';
import { sidebar } from './docsMetadata.json';

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  lang: 'zh-CN',
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'alternate icon', href: '/favicon.png', type: 'image/png', sizes: '16x16' }],
    // ['meta', { name: 'author', content: creatorNames.join(', ') }],
    ['meta', { name: 'keywords', content: ['lingmo', 'LingmoOS', 'linux', 'wiki', '维基百科', '灵墨维基百科', 'lingmo-wiki'].join(', ') }],
    ['meta', { property: 'og:title', content: siteName }],
    ['meta', { property: 'og:image', content: `${targetDomain}/og.png` }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:creator', content: creatorUsernames.join(', ') }],
    ['meta', { name: 'twitter:image', content: `${targetDomain}/og.png` }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#927baf' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
    // Proxying Plausible through Netlify | Plausible docs
    // https://plausible.io/docs/proxy/guides/netlify
    ['script', { 'defer': 'true', 'data-domain': 'nolebase.ayaka.io', 'data-api': '/api/v1/page-external-data/submit', 'src': '/assets/page-external-data/js/script.js' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        outline: { label: '页面大纲', level: 'deep' },
        darkModeSwitchLabel: '切换主题',
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: '编辑本页面',
        },
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
          // { icon: 'discord', link: discordLink },
        ],
        footer: {
          // message: '用 <span style="color: #e25555;">&#9829;</span> 撰写',
          copyright: 'Copyright © 2024 Lingmo OS. All rights reserved.',
          message: 'Powered by <a class="footer-cc-link" target="_blank" href="https://nolebase-template.vercel.app/">Nólëbase</a>',
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                    },
                  },
                },
              },
            },
          },
        },
        nav: [
          { text: '主页', link: '/' },
          { text: 'Wiki', link: '/LingmoOS/' },
          { text: '最近更新', link: '/toc' },
        ],
        sidebar: [
          {
            text: 'LingmoOS',
            collapsed: true,
            items: [
              { text: 'index', link: '/LingmoOS/index' },
              { text: '安装教程', link: '/LingmoOS/installation' },
              { text: '关于', link: '/LingmoOS/about' },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        outline: { label: 'Page Outline', level: 'deep' },
        darkModeSwitchLabel: 'Toggle Theme',
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: 'Edit this page',
        },
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
          // { icon: 'discord', link: discordLink },
        ],
        footer: {
          // message: 'Written with <span style="color: #e25555;">&#9829;</span>',
          copyright: 'Copyright © 2024 Lingmo OS. All rights reserved.',
          message: 'Powered by <a class="footer-cc-link" target="_blank" href="https://nolebase-template.vercel.app/">Nólëbase</a>',
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search docs',
                    buttonAriaLabel: 'Search docs',
                  },
                  modal: {
                    noResultsText: 'No results found',
                    resetButtonTitle: 'Clear search query',
                    footer: {
                      selectText: 'Select',
                      navigateText: 'Navigate',
                    },
                  },
                },
              },
            },
          },
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Wiki', link: '/en/LingmoOS/' },
          { text: 'Recent Updates', link: '/en/toc' },
        ],
        sidebar: [
          {
            text: 'LingmoOS',
            collapsed: true,
            items: [
              { text: 'index', link: '/en/LingmoOS/index' },
              { text: 'installation', link: '/en/LingmoOS/installation' },
              { text: 'about', link: '/en/LingmoOS/about' },
            ],
          },
        ],
      },
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote);
      md.use(MarkdownItMathjax3);
      md.use(BiDirectionalLinks({ dir: process.cwd() }));
      md.use(UnlazyImages(), { imgElementTag: 'NolebaseUnlazyImg' });
      md.use(InlineLinkPreviewElementTransform, { tag: 'VPNolebaseInlineLinkPreview' });
    },
  },
  async buildEnd(siteConfig) {
    await buildEndGenerateOpenGraphImages({
      baseUrl: targetDomain,
      category: {
        byLevel: 2,
      },
    })(siteConfig);
  },
});
