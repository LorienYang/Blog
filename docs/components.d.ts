export {}

declare module 'vue' {
    export interface GlobalComponents {
        HomePage: typeof import('./.vitepress/theme/components/HomePage.vue')['default']
        RouterLink: typeof import('vue-router')['RouterLink']
        RouterView: typeof import('vue-router')['RouterView']
    }
}