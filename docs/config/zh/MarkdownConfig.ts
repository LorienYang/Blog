import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import path from 'path'

export const MarkdownConfig = {
    config: (md: any) => {
        md.use(BiDirectionalLinks, {
            dir: path.resolve(__dirname, '../zh'),
            baseDir: '/',
        })
    },
}
