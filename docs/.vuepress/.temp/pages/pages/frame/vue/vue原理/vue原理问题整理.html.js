export const data = {
  "key": "v-5ef7525f",
  "path": "/pages/frame/vue/vue%E5%8E%9F%E7%90%86/vue%E5%8E%9F%E7%90%86%E9%97%AE%E9%A2%98%E6%95%B4%E7%90%86.html",
  "title": "",
  "lang": "zh-cn",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "响应式数据的实现流程",
      "slug": "响应式数据的实现流程",
      "children": []
    },
    {
      "level": 3,
      "title": "vue收集依赖，什么是依赖？",
      "slug": "vue收集依赖-什么是依赖",
      "children": []
    },
    {
      "level": 2,
      "title": "明明是watcher收集依赖,应该是watcher收集数据,怎么成了数据的dep收集watcher了呢？",
      "slug": "明明是watcher收集依赖-应该是watcher收集数据-怎么成了数据的dep收集watcher了呢",
      "children": [
        {
          "level": 3,
          "title": "为什么数据劫持不能监听数组？",
          "slug": "为什么数据劫持不能监听数组",
          "children": []
        },
        {
          "level": 3,
          "title": "vue数组响应式的实现？",
          "slug": "vue数组响应式的实现",
          "children": []
        },
        {
          "level": 3,
          "title": "依赖收集过程：",
          "slug": "依赖收集过程",
          "children": []
        },
        {
          "level": 3,
          "title": "双向绑定的原理描述和总结",
          "slug": "双向绑定的原理描述和总结",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "computed 的实现原理",
      "slug": "computed-的实现原理",
      "children": []
    }
  ],
  "filePathRelative": "pages/frame/vue/vue原理/vue原理问题整理.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
