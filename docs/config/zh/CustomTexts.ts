import { AlgoliaThemeConfig } from "./algolia.Config"

// config/zh/customTexts.ts
export const CustomTexts = {
    logo: '/svg/logo.svg',
    socialLinks: [
        { icon: 'github', link: 'https://github.com/LorienYang  ' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/473089208'}
    ],
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    outline: {
        label: '页面导航'
    },
    notFound: {
        title: '页面未找到',
        quote: '当你迷失方向的时候不妨回头看看。',
        linkLabel: '前往首页',
        linkText: '带我回首页'
    },
    editLink: {
        pattern: 'https://github.com/LorienYang/Blog/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    algolia:AlgoliaThemeConfig,
};
