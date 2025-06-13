export {}

declare module 'vue' {
    export interface GlobalComponents {
        HomePage: typeof import('./.vitepress/theme/components/HomePage.vue')['default']
        RainbowAnimationSwitcher: typeof import('./.vitepress/theme/components/RainbowAnimationSwitcher.vue')['default']
        RainbowSwitcher: typeof import('./.vitepress/theme/components/RainbowSwitcher.vue')['default']
        RouterLink: typeof import('vue-router')['RouterLink']
        RouterView: typeof import('vue-router')['RouterView']
    }
}