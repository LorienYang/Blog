<script setup lang="ts">
import { useData, useRoute} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, computed } from 'vue'
import HomePage from './HomePage.vue'
import Footer from './Footer.vue'
import CopyRight from "./CopyRight.vue";
//引入动态深浅切换和frontmatter
const { isDark, frontmatter } = useData()

function enableTransitions() {
  return 'startViewTransition' in document
      && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
  )
})

//引入仅在主页显示footer
const route = useRoute() // 获取当前路由对象
const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <DefaultTheme.Layout>
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