# vue组件通讯

[组件通讯](https://juejin.cn/post/6844903887162310669#heading-0)

- 总结：父子通信用`props/$emit`、兄弟组件用事件总线 `EventBus`、跨级通信使用`provide/inject`和`$attrs/$listeners`、全局使用 `vuex`
- props/$emit+v-on: 父子通信：通过props将数据自上而下传递，而通过$emit 和 v-on(@)来向上传递信息。
- EventBus: 兄弟组件或跨级：事件总线：所有组件的共同事件中心，通过 EventBus 进行信息的发送和监听
  - 不适用多人协作和大项目，较难维护。
  - 组件没有同时显示不应该用 eventbus，一般需要先 on 再 emit。比如两个路由一个还没创建，所以监听不到。而应该使用 vuex。

```js
// event-bus.js

import Vue from "vue";
export const EventBus = new Vue(); // 注册事件总线
import { EventBus } from "./event-bus.js"; // 组件引入
EventBus.$emit("test", { num: this.num }); // A组件发送事件
EventBus.$on("test", (param) => {}); // B组件接收事件
EventBus.$off("test", {}); // 移除监听
```

- provide/inject：跨级：父组件中通过**provide 来提供变量, 然后再子孙后代组件中通过 inject 来注入变**量。不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

  ```js
  provide() {
      return {
        user: this.user
      }
  },
  
  inject: ['user'],
  ```

- $attrs/$listeners: 跨级： Vue2.4 中加入的$attrs/$listeners，$attrs含有父作用域**不被prop识别的特性**（class和style除外），$listeners 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器，并且可以通过 v-bind="$attrs/$listeners"继续传入内部组件,传递下去。

  -  新增了`inheritAttrs` 选项，设置`inheritAttrs=false`

  - 适合仅传递数据的跨级通信，用 vuex 是大材小用。

- vuex: 是全局数据管理库，可以通过 vuex 管理全局的数据流

- localStorage / sessionStorage

  - 数据和状态比较混乱，不好维护，不过可以结合 vuex, 实现数据的持久保存
  - window.localStorage.getItem(key)获取数据
  - 通过 window.localStorage.setItem(key,value)存储数据
  - JSON.parse() / JSON.stringify() 做数据格式转换