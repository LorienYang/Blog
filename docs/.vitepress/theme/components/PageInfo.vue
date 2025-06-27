<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter, page } = useData(); // page 包含了页面的 title

// 从 frontmatter 中提取作者信息
const author = computed(() => frontmatter.value.author || '未知作者');

// 直接使用 page.value.title 获取页面标题
const pageTitle = computed(() => page.value.title);
</script>

<template>
  <div class="page-info-container">
    <h2 class="page-info-main-title">{{ pageTitle }}</h2>
    <p class="page-info-author">作者: {{ author }}</p>
  </div>
</template>

<style scoped>
.page-info-container {
  background-color: #2a2a2a; /* 深色背景 */
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  color: #e0e0e0; /* 浅色文字 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.page-info-main-title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 2em; /* 标题可以大一些 */
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* 底部加一条细线 */
  padding-bottom: 10px;
}

.page-info-author {
  margin: 0;
  font-size: 1.1em;
  color: #b0b0b0; /* 作者信息颜色稍暗 */
}
</style>