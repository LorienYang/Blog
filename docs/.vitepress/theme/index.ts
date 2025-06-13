import DefaultTheme from 'vitepress/theme'
import {h,watch} from 'vue'
import type { Theme } from 'vitepress'

//customTheme
import CSSLayout from './components/CSSLayout.vue'
let homePageStyle: HTMLStyleElement | undefined
import './style/index.css'
import 'uno.css'
//import vue
import RainbowAnimationSwitcher from "./components/RainbowAnimationSwitcher.vue";
//config
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(CSSLayout)
  },

  enhanceApp({app , router }) {
    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher)
    // 彩虹背景动画样式
    if (typeof window === 'undefined')
      return

    watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
    )
  },
}satisfies Theme

// 彩虹背景动画样式
if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}
// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}