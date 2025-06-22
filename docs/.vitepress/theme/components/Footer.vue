<template>
  <footer class="vp-footer">
    <div class="vp-footer-container">
      <div class="vp-footer-left">
        <p class="vp-footer-copyright">
          &copy; {{ currentYear }} Lorien Yang 版权所有.
        </p>
        <p class="vp-footer-license">
          本网站以<a href="https://github.com/LorienYang/Blog/blob/main/LICENSE" target="_blank" rel="noopener">GNU General Public License v3.0</a>条款发布。
        </p>
        <p class="vp-footer-poweredby">
          基于 <a href="https://vitepress.dev/" target="_blank" rel="noopener">VitePress</a> 构建.
        </p>
      </div>
      <div class="vp-footer-right">
        <ul class="vp-footer-links">
          <li><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="vp-footer-link">浙ICP备2025171659号-1</a></li>
          <li class="vp-footer-gongan">
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33030302250602" target="_blank" rel="noopener" class="vp-footer-link">
              <img src="/img/GWAB.png" alt="公安备案图标" class="gongan-icon" />
              浙公网安备33030302250602号
            </a>
          </li>
          <li><a href="https://icp.gov.moe/?keyword=20259099" target="_blank" rel="noopener" class="vp-footer-link">萌ICP备20259099号</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

</script>

<style scoped>
/* 样式部分保持不变 */
.vp-footer {
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 24px;
  margin-top: 64px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.vp-footer-container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .vp-footer-container {
    flex-direction: column;
    text-align: center;
  }
  .vp-footer-left,
  .vp-footer-right {
    width: 100%;
  }
}

.vp-footer-copyright,
.vp-footer-poweredby,
.vp-footer-license {
  margin: 0;
  line-height: 1.5;
}

.vp-footer-poweredby a,
.vp-footer-license a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.vp-footer-poweredby a:hover,
.vp-footer-license a:hover {
  text-decoration: underline;
}

.vp-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.vp-footer-gongan {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gongan-icon {
  width: 16px;
  height: 17px;
  vertical-align: middle;
}

.vp-footer-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.vp-footer-link:hover {
  color: var(--vp-c-text-1);
}
</style>