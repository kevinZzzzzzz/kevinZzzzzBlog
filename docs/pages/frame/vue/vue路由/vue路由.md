# 路由原理

本质就是监听 `URL` 的变化，然后匹配路由规则，显示相应的页面组件，页面不会重新加载。

并且改变视图的同时不会向后端发出请求

### **hash和history两种模式的区别** 

**hash模式**是指url上**#**符号以及后面的内容，用来做定位的，定位到对应的页面组件，改变hash会想浏览器记录添加。

***hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，请求时只会拿#前面的url，所以后端是拿不到#后面的参数。***

**hash模式的原理**： 改变 hash值，然后通过window上的onhashchange事件监听hash变化,一旦有变化就会执行该hash值对应的回调方法渲染出对应的页面组件。

实现步骤：

​	**hash变化：**如果是正常跳转的话，会触发onhashChange事件监听hash变化，匹配到对应到路由规则再渲染(替换)对应的页面组件

而如果是手动刷新的话，虽然不会重新请求服务器，但是不会触发onhashchange事件，而是触发load事件，再匹配到对应到路由规则再渲染(替换)对应的页面组件。

------

**history模式**，相对于hash模式美观一些，不会向hash一样有#符号，并且参数长度不会受限制，可以将参数放在指定对象中

***history模式在发出http请求时，会将整条url带上。***

其原理是基于html5的history api，新增的 pushState() 和 replaceState() 方法，这两个方法是应用于当前浏览器的历史栈，通过调用back、go、forward方法对浏览记录进行修改，修改url也不会导致浏览器向服务器发出请求。

**浏览器前进后退按钮或 JS 触发 history.back(),history.forward()等方法会触发 popstate，然后都会触发popstate 事件来监听 url 的变化，执行监听回调，进行页面进行跳转（渲染）**

pushState() 新增一条记录，replaceState()则是替换一条记录，但是不会触发 popstate 事件，我们需要手动触发路由的回调，进行跳转，切换显示内容。

它也有个问题：不怕前进，不怕后退，就怕刷新，hash模式修改的是#/后的内容，请求是不会携带的，history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的路径的资源，会分分钟刷出一个404来，这就需要后端在服务器上对这条路有规则进行进行配置。对匹配不到的资源路径要返回 index.html（兜底页面）

实现步骤：

- 如果浏览器动作，比如回退或者前进，包括调用history的方法，会触发pushState()事件，然后解析url，匹配到对应到路由规则再渲染(替换)对应的页面组件。
- 如果是点击跳转的，调用pushState函数向浏览器的历史添加一个状态，并且不会向服务器请求。
- 刷新或者输入url，会请求服务器，使用history的方法需要后端配置好重定向地址。

### 跳转方式

> Vue Router 的导航方法 (push、 replace、 go) 在各类路由模式 (history、 hash 和 abstract) 下表现一致。

- 声明式`<router-link to=""></router-link>`
- 编程式`this.$router.push('home')`
- 前进后退`router.go(1)/router.go(-1)`
- 替换 history 的当前记录`router.replace(...)`

------

### 路由懒（按需）加载

- 没配置路由懒加载的情况下，我们的路由组件在打包的时候，都会打包到同一个 js 文件去，导致越来越大，请求时间变长
- 把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件， 首屏时不用加载全部的资源，从而减少首屏加载速度。
- import()方法由 ES6 提出，import()方法是动态加载。

```js
// webpack< 2.4 时
{
  path:'/',
  name:'home',
  components:resolve=>require(['@/components/home'],resolve)
}

// webpack> 2.4 时
{
  path:'/',
  name:'home',
  components:()=>import('@/components/home')
}
```

------

### 路由守卫

用于路由跳转前做一些逻辑处理，确定下一步要跳转的路由地址。

- 全局前置守卫`router.beforeEach`

  ```js
  router.beforeEach((to, from, next) => {
    // ...
  })
  ```

- 全局前置解析`router.beforeResolve`

  ```js
  router.beforeResolve((to, from) => {
    // ...
  })
  ```

- 全局后置守卫`router.afterEach`，**不会接受 next 函数也不会改变导航本身**

  ```js
  router.afterEach((to, from) => {
    // ...
  })
  ```

- 路由独享守卫`router.beforeEnter`，router的一个属性

  ```js
   // 在路由配置上直接定义
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        }
      }
    ]
  })
  ```

- 组件内的守卫

  - `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫。

  - `beforeRouteUpdate` (2.2 新增)

  - `beforeRouteLeave`

    ```js
    const Foo = {
      template: `...`,
      beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        // 不过，可以通过传一个回调给 next来访问组件实例。beforeRouteEnter是支持给 `next` 传递回调的唯一守卫。
        next(vm => {
        	// 通过 `vm` 访问组件实例
      	})
      },
      beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
      },
      beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
      }
    }
    ```

每个守卫都接收三个属性to 表示将要跳转去的路由，from 表示正要离开的路由，next()方法用来执行 resolve 这个钩子，进行下一步跳转。

- next() 下一个钩子，全部钩子执行完就跳转到 to 地址
- next('/') 跳到指定地址
- next(false) 中断当前导航，回到 from 地址
- next(error) 传入 error 实例，传递到 router.onError()的回调

## Vue 动态路由方案

- 整体思路
  - 登录：当用户填写完账号和密码后向服务端验证是否正确，验证通过之后，服务端会返回一个 token，拿到 token 之后（我会将这个 token 存贮到 cookie 中，保证刷新页面后能记住用户登录状态），前端会根据 token 再去拉取一个 user_info 的接口来获取用户的详细信息（如用户权限，用户名等等信息）
  - 权限验证：通过 token 获取用户对应的 role，动态根据用户的 role 算出其对应有权限的路由，通过 router.addRoutes 动态挂载这些路由。
    - 设置一个 tree 空间给每个页面动态配置权限，将这份路由表保存到后端
    - 当用户登录后得到 roles，前端根据 roles 去向后端请求可访问的路由表，
    - 之后就是 router.addRoutes 动态挂载到 router 上
- 具体实现
  - router 里实例化不需要权限的公用页面
  - 设置一个 tree 空间给每个页面动态配置权限，通过 meta 标签来标示改页面能访问的权限，`meta: { role: ['admin','super_editor'] }`，将这份路由表保存到后端
  - 在路由钩子 router.beforeEach 里判断是否有 token，没有则去登录页
  - 有 token 则获取用户信息比如 roles，拿到权限路由表
  - 通过用户的权限和我们配置的每一个页面所需要的权限做匹配，最后返回一个该用户能够访问路由有哪些，
  - 通过 addRoutes 将可访问路由，动态添加到路由表里，没权限的默认去 404 页


