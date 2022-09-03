import {
    defineUserConfig,
} from 'vuepress'
import type {
    DefaultThemeOptions
} from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
    title: " kevinZzzzzz Blog",
    lang: 'zh-cn',
    description: 'heroText: kevinZzzzzz的小记',
    // theme: 'vuepress-theme-xx',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/kevinZzzzzz.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/kevinZzzzzBlog/', // 这是部署到github相关的配置 下面会讲
    // MarkdownOptions: {
    //     lineNumbers: true // 代码块显示行号
    // },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        logo: '/kevinZzzzzz.jpg',
        // lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        //顶部导航栏
        navbar: [
            {
                text :'首页', link: '/'
            },
            {
                text: '笔记', link: '/pages/base/html.md'
            },
            {
                text: '随笔', link: '/pages/base/html.md'
            }
        ],
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: [
            {
                text: '前端基础', // 一级菜单名称
                link: '/pages/base/html.md',
                // collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                // sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                children: [
                    {
                        text: 'html知识',
                        link: '/pages/base/html.md'
                    }
                ],
            },
            {
                text: '框架基础', // 一级菜单名称
                link: '/pages/frame/vue/vue原理/vue原理.md',
                // collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                // sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                children: [
                    {
                        text: 'vue',
                        link: '/pages/frame/vue/vue基础/vue基础.md',
                        children: [
                            {
                                text: '基础',
                                link: '/pages/frame/vue/vue基础/vue基础.md'
                            },
                            {
                                text: 'diff算法',
                                link: '/pages/frame/vue/diff算法/diff算法.md'
                            },
                            {
                                text: '原理',
                                link: '/pages/frame/vue/vue原理/vue原理.md'
                            },
                            {
                                text: '路由',
                                link: '/pages/frame/vue/vue路由/vue路由.md'
                            },
                            {
                                text: '组件通讯',
                                link: '/pages/frame/vue/vue组件通讯/vue组件通讯.md'
                            },
                            {
                                text: 'vuex',
                                link: '/pages/frame/vue/vuex/vuex.md'
                            }
                        ],
                    }
                ],
            },
        ]
    },
})