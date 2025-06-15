<template>
  <footer>
    <div>
      版权声明：本博客所有文章，除特别声明外均采用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer" target="_blank">CC BY-NC-SA 4.0</a>许可协议.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-top: 1px solid #eee;
  color: #888;
}
</style>