import { h, watch } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// 导入自定义 CSSLayout
import CSSLayout from './components/CSSLayout.vue';

// 导入 ReadingEnhancement
import { ReadingEnhancement } from './config/ReadingEnhancement';

// 导入Git Changelog 插件
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';

// 导入彩虹动画
import { updateHomePageAnimation } from './config/RainbowAnimation';
// 全局样式
import './style/index.css';
import 'uno.css';
import 'virtual:uno.css';

export default {
  extends: DefaultTheme,
  // 定义根布局组件为CSSLayout
  Layout: () => {
    return h(
        CSSLayout,
        null,
        {
          ...ReadingEnhancement(),
        }
    );
  },

  // 应用增强函数
  enhanceApp({ app, router }) {
    // 全局使用Git Changelog 插件
    app.use(NolebaseGitChangelogPlugin);

    // 彩虹动画部分
    if (typeof window === 'undefined') {
      return;
    }
    watch(
        () => router.route.data.relativePath,
        () => updateHomePageAnimation(location.pathname === '/'),
        { immediate: true },
    );
  },
} satisfies Theme;
