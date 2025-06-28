<script setup lang="ts">
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import HomePage from './HomePage.vue';
import Footer from './Footer.vue';
import CopyRight from './CopyRight.vue';
import {computed, nextTick, provide} from "vue";

// 引入动态深浅切换和 frontmatter 数据
const { isDark, frontmatter } = useData();
// 获取当前路由对象，用于判断是否是主页
const route = useRoute();

// 动态深浅切换的过渡动画逻辑
function enableTransitions() {
  return 'startViewTransition' in document
      && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
  );
});

// 计算属性：判断当前是否是主页
const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <DefaultTheme.Layout>
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>

    <template #home-features-after>
      <HomePage />
    </template>
    <template #layout-bottom>
      <Footer v-if="isHomePage" />
    </template>
    <template #doc-footer-before>
      <CopyRight v-if="frontmatter.CopyRight" />
    </template>
  </DefaultTheme.Layout>
</template>