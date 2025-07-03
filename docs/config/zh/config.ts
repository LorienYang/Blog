// .vitepress/config/zh/config.ts

import { DefaultTheme } from "vitepress";
import { SearchThemeConfig } from "./Search.Config";

export const navConfig: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    { text: '了解我', link: '/blog/about' },
    {
        text: '友情链接',
        items: [
            { text: 'Wup\'s Simple Blog', link: 'https://blog.wups-web.work/' }
        ]
    }
];

export const sidebarConfig: DefaultTheme.Sidebar = {
    '/blog/about/': [
        {
            text: '了解我',
            items: [
                { text: '自我介绍', link: '/blog/about/' }
            ]
        }
    ],
    '/blog/docs/': [
        {
            text: '建设中',
            items: [
                { text: '第一篇文章', link: '/blog/docs/Introduction' }
            ]
        }
    ],
    '/blog/MC/': [
        {
            text: 'Minecraft',
            items: [
                { text: '简介', link: '/blog/MC/Introduction' }
            ]
        }
    ],
    '/blog/AE2/': [
        {
            text: 'Applied Energistics 2',
            items: [
                { text: '简介', link: '/blog/AE2/Introduction' },
                {
                    text: '基础教程',
                    items: [
                        { text: '频道', link: '/blog/AE2/guide/Channel' },
                    ]
                }
            ],
        },
    ]
};

export const ZHThemeConfig: DefaultTheme.Config = {
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
    search: {
        provider: 'local',
        options: SearchThemeConfig
    },
    nav: navConfig,
    sidebar: sidebarConfig
};
