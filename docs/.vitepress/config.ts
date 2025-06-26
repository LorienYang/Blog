// config.ts
import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';
import { presetIcons } from '@unocss/preset-icons'
import {GitChangelog, GitChangelogMarkdownSection} from "@nolebase/vitepress-plugin-git-changelog"; // 新增导入
// customConfig
import { nav } from "../config/zh/nav";
import { sidebar } from "../config/zh/sidebar";
import { customTexts } from "../config/zh/customTexts";


//customTheme
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/',
  lang: 'zh-Hans',
  title: "樱花小窝",
  head: [['link', { rel: 'icon', href: '/svg/logo.svg' }]],
  cleanUrls:true,
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
      }),
      GitChangelog({
        repoURL:() => 'https://github.com/LorienYang/lorienyang.github.io',
        mapAuthors: [
          {
            name: 'Lorien Yang',
            username: 'LorienYang',
            mapByEmailAliases: ['postmaster@sakuraonline.cn']
          },
        ]
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
      })
    ]
  },
});