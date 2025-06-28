//其他vite配置

export const ViteConfig = {
    optimizeDeps: {
        exclude: [
            '@nolebase/vitepress-plugin-enhanced-readabilities/client',
            'vitepress',
            '@nolebase/ui',
        ],
    },
    ssr: {
        noExternal: [
            // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
            '@nolebase/vitepress-plugin-enhanced-readabilities',
            '@nolebase/ui',
        ],
    },
}