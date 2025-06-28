// config.ts
import { defineConfig } from 'vitepress';
// customConfig
import { navConfig, sidebarConfig } from "../config/zh/config";
import { CustomTexts } from "../config/zh/CustomTexts";
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
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    ...CustomTexts
  },
  vite: {
    plugins: PluginsConfig,
    ...ViteConfig
  },
  markdown: MarkdownConfig,
});