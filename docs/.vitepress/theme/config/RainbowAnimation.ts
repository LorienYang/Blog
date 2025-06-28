// .vitepress/theme/config/RainbowAnimation.ts
// 彩虹动画配置

// 用于存储彩虹样式 <style> 元素的变量
let homePageStyle: HTMLStyleElement | undefined;

if (typeof window !== 'undefined') {
    const browser = navigator.userAgent.toLowerCase();
    if (browser.includes('chrome')) {
        document.documentElement.classList.add('browser-chrome');
    } else if (browser.includes('firefox')) {
        document.documentElement.classList.add('browser-firefox');
    } else if (browser.includes('safari')) {
        document.documentElement.classList.add('browser-safari');
    }
}

export function updateHomePageAnimation(isOnHomePage: boolean) {
    if (typeof window === 'undefined') {
        return;
    }

    if (isOnHomePage) {

        if (homePageStyle) {
            return;
        }
        homePageStyle = document.createElement('style');
        homePageStyle.innerHTML = `
        :root {
        animation: rainbow 12s linear infinite;
        }`;
        document.body.appendChild(homePageStyle);
    } else {
        if (!homePageStyle) {
            return;
        }
        homePageStyle.remove();
        homePageStyle = undefined;
    }
}