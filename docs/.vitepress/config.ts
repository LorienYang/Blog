// config.ts
import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';
import { presetIcons } from '@unocss/preset-icons'
// customConfig
import { nav } from "../config/zh/nav";
import { sidebar } from "../config/zh/sidebar";
import { customTexts } from "../config/zh/customTexts"; // 新增导入

//customTheme
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav,
    sidebar,
    ...customTexts // 展开并合并配置项
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetIcons(), // 启用图标预设
        ],
      })
    ]
  },
});