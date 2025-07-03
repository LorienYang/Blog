// config.ts
import { defineConfig } from 'vitepress';
// customConfig
import { ZHThemeConfig } from '../config/zh/config';
import { PluginsConfig } from "../config/zh/PluginsConfig";
import { MarkdownConfig } from "../config/zh/MarkdownConfig";
import { ViteConfig } from "../config/zh/ViteConfig";

export default defineConfig({
  base:'/',
  lang: 'zh-Hans',
  title: "樱花小窝",
  head: [['link', { rel: 'icon', href: '/svg/logo.svg' }]],
  cleanUrls:true,
  rewrites: {
    'zh/:path*': ':path*'
  },
  themeConfig: ZHThemeConfig,
  vite: {
    plugins: PluginsConfig,
    ...ViteConfig
  },
  markdown: MarkdownConfig,
  sitemap: {
    hostname: 'https://www.sakuraonline.cn',
    transformItems(items:any[]) {
      return items
          .filter(item => !item.url.includes('migration'))
          .map(item => ({
            url: item.url,
            lastmod: item.lastUpdated || new Date().toISOString(),
          }))
    }
  },
});

