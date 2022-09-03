import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-4eaf9f84","/guide/page.html","",["/guide/page","/guide/page.md"]],
  ["v-664e5718","/pages/base/html.html","",["/pages/base/html","/pages/base/html.md"]],
  ["v-68f247ce","/pages/frame/vue/diff%E7%AE%97%E6%B3%95/diff%E7%AE%97%E6%B3%95.html","vue-diff算法过程概述",["/pages/frame/vue/diff算法/diff算法.html","/pages/frame/vue/diff%E7%AE%97%E6%B3%95/diff%E7%AE%97%E6%B3%95","/pages/frame/vue/diff算法/diff算法.md","/pages/frame/vue/diff%E7%AE%97%E6%B3%95/diff%E7%AE%97%E6%B3%95.md"]],
  ["v-6b34fb0a","/pages/frame/vue/vue%E5%9F%BA%E7%A1%80/vue%E5%9F%BA%E7%A1%80.html","vue的生命周期",["/pages/frame/vue/vue基础/vue基础.html","/pages/frame/vue/vue%E5%9F%BA%E7%A1%80/vue%E5%9F%BA%E7%A1%80","/pages/frame/vue/vue基础/vue基础.md","/pages/frame/vue/vue%E5%9F%BA%E7%A1%80/vue%E5%9F%BA%E7%A1%80.md"]],
  ["v-401b89d9","/pages/frame/vue/vue%E5%8E%9F%E7%90%86/vue%E5%8E%9F%E7%90%86.html","",["/pages/frame/vue/vue原理/vue原理.html","/pages/frame/vue/vue%E5%8E%9F%E7%90%86/vue%E5%8E%9F%E7%90%86","/pages/frame/vue/vue原理/vue原理.md","/pages/frame/vue/vue%E5%8E%9F%E7%90%86/vue%E5%8E%9F%E7%90%86.md"]],
  ["v-1669aa0e","/pages/frame/vue/vuex/vuex.html","Vuex",["/pages/frame/vue/vuex/vuex","/pages/frame/vue/vuex/vuex.md"]],
  ["v-c42e3bbe","/pages/frame/vue/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html","vue组件通讯",["/pages/frame/vue/vue组件通讯/vue组件通讯.html","/pages/frame/vue/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF","/pages/frame/vue/vue组件通讯/vue组件通讯.md","/pages/frame/vue/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.md"]],
  ["v-73618a36","/pages/frame/vue/vue%E8%B7%AF%E7%94%B1/vue%E8%B7%AF%E7%94%B1.html","路由原理",["/pages/frame/vue/vue路由/vue路由.html","/pages/frame/vue/vue%E8%B7%AF%E7%94%B1/vue%E8%B7%AF%E7%94%B1","/pages/frame/vue/vue路由/vue路由.md","/pages/frame/vue/vue%E8%B7%AF%E7%94%B1/vue%E8%B7%AF%E7%94%B1.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
