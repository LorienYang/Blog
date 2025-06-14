// config.ts
import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';
// customConfig
import { nav } from "../config/zh/nav";
import { sidebar } from "../config/zh/sidebar";
import { socialLinks } from "../config/zh/socialLinks";
import { customTexts } from "../config/zh/customTexts"; // 新增导入

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav,
    sidebar,
    socialLinks,
    ...customTexts // 展开并合并配置项
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  vite: {
    plugins: [
      UnoCSS()
    ]
  },
});