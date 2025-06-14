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
        text: '友情链接',
        items: [
            { text: 'Wup\'s Simple Blog', link: 'https://blog.wups-web.work/' }
        ]
    }
];