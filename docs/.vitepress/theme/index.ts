// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import {h,watch} from 'vue'
import type { Theme } from 'vitepress'

// customTheme
import CSSLayout from './components/CSSLayout.vue'
import './style/index.css'
import 'uno.css';
import 'virtual:uno.css';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

// Vue 插件
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
// 引入彩虹动画
import { updateHomePageAnimation } from './config/RainbowAnimation';

// Config
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(CSSLayout)
  },

  enhanceApp({app , router }) {
    app.use(NolebaseGitChangelogPlugin)

    // 彩虹动画部分
    if (typeof window === 'undefined') {
      return;
    }
    watch(
        () => router.route.data.relativePath,
        () => updateHomePageAnimation(location.pathname === '/'),
        { immediate: true },
    )
  },
} satisfies Theme