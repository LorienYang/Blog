// .vitepress/themeConfig.ts

import { DefaultTheme } from "vitepress";

// 导航栏配置（保持不变）
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