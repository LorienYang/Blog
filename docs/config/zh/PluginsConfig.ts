import UnoCSS from "unocss/vite";
import {presetIcons} from "@unocss/preset-icons";
import {GitChangelog, GitChangelogMarkdownSection} from "@nolebase/vitepress-plugin-git-changelog";

export const PluginsConfig = [
    UnoCSS({
        presets: [
            presetIcons(), // 启用图标预设
        ],
    }),
    GitChangelog({
        repoURL: () => 'https://github.com/LorienYang/lorienyang.github.io',
        mapAuthors: [
            {
                name: 'Lorien Yang',
                username: 'LorienYang',
                mapByEmailAliases: ['postmaster@sakuraonline.cn']
            },
        ]
    }),
    GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
    })
]