// config.ts
import { defineConfig } from 'vitepress';
// customConfig
import { navConfig, sidebarConfig } from "../config/zh/config";
import { CustomConfig } from "../config/zh/CustomConfig";
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
    ...CustomConfig
  },
  vite: {
    plugins: PluginsConfig,
    ...ViteConfig
  },
  markdown: MarkdownConfig,
});

