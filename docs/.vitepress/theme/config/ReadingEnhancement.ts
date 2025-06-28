// .vitepress/theme/config/ReadingEnhancement.ts

//阅读增强配置
import {NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {h} from "vue";

export function ReadingEnhancement(){ // 这里是函数
    return {
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    }
}