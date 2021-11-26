import {
    defineUserConfig,
} from 'vuepress'
import type {
    DefaultThemeOptions
} from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
    title: " kevinZzzzzz Blog",
    lang: 'zh-cn',
    description: 'heroText: kevinZzzzzz的前端世界',
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
                text: '笔记', link: '/pages/kevin1/html.md'
            },
            {
                text: '随笔', link: '/pages/kevin1/html.md'
            }
        ],
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/kevin1/': [
                {
                    text: '前端基础', // 一级菜单名称
                    link: '/pages/kevin1/',
                    // collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    // sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        {
                            text: '哈哈',
                            link: '/pages/kevin1/html.md'
                        }
                    ],
                  },
            ]
        }
    },
})