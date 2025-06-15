// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {text: '了解我',link: '/blog/about'},
    {
        text: '友情链接',
        items: [
            { text: 'Wup\'s Simple Blog', link: 'https://blog.wups-web.work/' }
        ]
    }
];