// config.ts
import { defineConfig } from 'vitepress';
// customConfig
import { navConfig, sidebarConfig } from "../config/zh/config";
import { customTexts } from "../config/zh/customTexts";
import { pluginsconfig } from "../config/zh/pluginsconfig";


//customTheme
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/',
  lang: 'zh-Hans',
  title: "樱花小窝",
  head: [['link', { rel: 'icon', href: '/svg/logo.svg' }]],
  cleanUrls:true,
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    ...customTexts
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  vite: {...pluginsconfig},
});