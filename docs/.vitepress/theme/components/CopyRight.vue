<template>
  <footer class="my-complex-footer">
    <div class="footer-line copyright-line">
      <span class="copyright-symbol">&copy;</span>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer" target="_blank">使用CC BY-NC-SA 4.0许可协议进行共享</a>
    </div>
  </footer>
</template>

<style scoped>
.my-complex-footer {
  text-align: left;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}
.footer-line {
  line-height: 1.5;
}
.footer-line:last-child {
  margin-bottom: 0;
}

.my-complex-footer a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
:root.dark .my-complex-footer a {
  color: var(--vp-c-brand-lighter);
  text-decoration: none;
}
.my-complex-footer a:hover {
  text-decoration: underline;
}

.copyright-symbol {
  margin-right: 0.6em;
}
</style>