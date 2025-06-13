// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {
        text: '了解我们',
        items: [
            { text: '组织介绍', link: '/server/introduction' },
            { text: '组织政策', link: '/server/rule' },
            { text: '组织成员', link: '/server/team' }
        ]
    },
    {
        text: '更多信息',
        items: [
            { text: '特别鸣谢', link: '/info/Thx' }
        ]
    }
];