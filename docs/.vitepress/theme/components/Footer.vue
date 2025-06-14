<template>
  <footer class="custom-footer">
    <div>© 2025 YourSiteName 版权所有</div>
    <div>
      <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备12345678号-1</a> |
      <a href="https://menga.miit.gov.cn/" target="_blank">萌ICP备20250001号</a> |
      <a href="https://beian.mps.gov.cn/" target="_blank">
        <img src="" alt="公安图标" class="police-icon" />
        浙公网安备 33010002000001号
      </a>
    </div>
  </footer>
    <footer style="background: red; color: white; padding: 1rem;">
      ✅ 页脚成功渲染
    </footer>
</template>

<style scoped>
.custom-footer {
  padding: 16px 20px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 40px;
}
.custom-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  margin: 0 6px;
}
.custom-footer a:hover {
  text-decoration: underline;
}
.police-icon {
  width: 16px;
  height: 17px;
  vertical-align: middle;
  margin-right: 4px;
}
</style>
