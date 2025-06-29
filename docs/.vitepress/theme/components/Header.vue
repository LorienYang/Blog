<script setup>
import { useData } from "vitepress";
import { computed } from 'vue';
const { frontmatter, page } = useData();
//获取标题
const pageTitle = computed(()=> page.value.title)
</script>


<template>
  <header class="vp-header">
    <div class="vp-header-title-1">
      <h1>{{pageTitle}}</h1>
    </div>
  </header >
</template>