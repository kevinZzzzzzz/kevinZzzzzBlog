<template><h1 id="路由原理" tabindex="-1"><a class="header-anchor" href="#路由原理" aria-hidden="true">#</a> 路由原理</h1>
<p>本质就是监听 <code>URL</code> 的变化，然后匹配路由规则，显示相应的页面组件，页面不会重新加载。</p>
<p>并且改变视图的同时不会向后端发出请求</p>
<h3 id="hash和history两种模式的区别" tabindex="-1"><a class="header-anchor" href="#hash和history两种模式的区别" aria-hidden="true">#</a> <strong>hash和history两种模式的区别</strong></h3>
<p><strong>hash模式</strong>是指url上**#**符号以及后面的内容，用来做定位的，定位到对应的页面组件，改变hash会想浏览器记录添加。</p>
<p><em><strong>hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，请求时只会拿#前面的url，所以后端是拿不到#后面的参数。</strong></em></p>
<p><strong>hash模式的原理</strong>： 改变 hash值，然后通过window上的onhashchange事件监听hash变化,一旦有变化就会执行该hash值对应的回调方法渲染出对应的页面组件。</p>
<p>实现步骤：</p>
<p>​	**hash变化：**如果是正常跳转的话，会触发onhashChange事件监听hash变化，匹配到对应到路由规则再渲染(替换)对应的页面组件</p>
<p>而如果是手动刷新的话，虽然不会重新请求服务器，但是不会触发onhashchange事件，而是触发load事件，再匹配到对应到路由规则再渲染(替换)对应的页面组件。</p>
<hr>
<p><strong>history模式</strong>，相对于hash模式美观一些，不会向hash一样有#符号，并且参数长度不会受限制，可以将参数放在指定对象中</p>
<p><em><strong>history模式在发出http请求时，会将整条url带上。</strong></em></p>
<p>其原理是基于html5的history api，新增的 pushState() 和 replaceState() 方法，这两个方法是应用于当前浏览器的历史栈，通过调用back、go、forward方法对浏览记录进行修改，修改url也不会导致浏览器向服务器发出请求。</p>
<p><strong>浏览器前进后退按钮或 JS 触发 history.back(),history.forward()等方法会触发 popstate，然后都会触发popstate 事件来监听 url 的变化，执行监听回调，进行页面进行跳转（渲染）</strong></p>
<p>pushState() 新增一条记录，replaceState()则是替换一条记录，但是不会触发 popstate 事件，我们需要手动触发路由的回调，进行跳转，切换显示内容。</p>
<p>它也有个问题：不怕前进，不怕后退，就怕刷新，hash模式修改的是#/后的内容，请求是不会携带的，history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的路径的资源，会分分钟刷出一个404来，这就需要后端在服务器上对这条路有规则进行进行配置。对匹配不到的资源路径要返回 index.html（兜底页面）</p>
<p>实现步骤：</p>
<ul>
<li>如果浏览器动作，比如回退或者前进，包括调用history的方法，会触发pushState()事件，然后解析url，匹配到对应到路由规则再渲染(替换)对应的页面组件。</li>
<li>如果是点击跳转的，调用pushState函数向浏览器的历史添加一个状态，并且不会向服务器请求。</li>
<li>刷新或者输入url，会请求服务器，使用history的方法需要后端配置好重定向地址。</li>
</ul>
<h3 id="跳转方式" tabindex="-1"><a class="header-anchor" href="#跳转方式" aria-hidden="true">#</a> 跳转方式</h3>
<blockquote>
<p>Vue Router 的导航方法 (push、 replace、 go) 在各类路由模式 (history、 hash 和 abstract) 下表现一致。</p>
</blockquote>
<ul>
<li>声明式<code>&lt;router-link to=&quot;&quot;&gt;&lt;/router-link&gt;</code></li>
<li>编程式<code>this.$router.push('home')</code></li>
<li>前进后退<code>router.go(1)/router.go(-1)</code></li>
<li>替换 history 的当前记录<code>router.replace(...)</code></li>
</ul>
<hr>
<h3 id="路由懒-按需-加载" tabindex="-1"><a class="header-anchor" href="#路由懒-按需-加载" aria-hidden="true">#</a> 路由懒（按需）加载</h3>
<ul>
<li>没配置路由懒加载的情况下，我们的路由组件在打包的时候，都会打包到同一个 js 文件去，导致越来越大，请求时间变长</li>
<li>把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件， 首屏时不用加载全部的资源，从而减少首屏加载速度。</li>
<li>import()方法由 ES6 提出，import()方法是动态加载。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack&lt; 2.4 时</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span><span class="token string">'home'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">components</span><span class="token operator">:</span><span class="token parameter">resolve</span><span class="token operator">=></span><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'@/components/home'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>resolve<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// webpack> 2.4 时</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span><span class="token string">'home'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">components</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/components/home'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr>
<h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3>
<p>用于路由跳转前做一些逻辑处理，确定下一步要跳转的路由地址。</p>
<ul>
<li>
<p>全局前置守卫<code>router.beforeEach</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>全局前置解析<code>router.beforeResolve</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>全局后置守卫<code>router.afterEach</code>，<strong>不会接受 next 函数也不会改变导航本身</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>路由独享守卫<code>router.beforeEnter</code>，router的一个属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// 在路由配置上直接定义</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'/foo'</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> Foo<span class="token punctuation">,</span>
      <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
<li>
<p>组件内的守卫</p>
<ul>
<li>
<p><code>beforeRouteEnter</code> 是支持给 <code>next</code> 传递回调的唯一守卫。</p>
</li>
<li>
<p><code>beforeRouteUpdate</code> (2.2 新增)</p>
</li>
<li>
<p><code>beforeRouteLeave</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
    <span class="token comment">// 不！能！获取组件实例 `this`</span>
    <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
    <span class="token comment">// 不过，可以通过传一个回调给 next来访问组件实例。beforeRouteEnter是支持给 `next` 传递回调的唯一守卫。</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	<span class="token comment">// 通过 `vm` 访问组件实例</span>
  	<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
    <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
    <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 导航离开该组件的对应路由时调用</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>
</ul>
</li>
</ul>
<p>每个守卫都接收三个属性to 表示将要跳转去的路由，from 表示正要离开的路由，next()方法用来执行 resolve 这个钩子，进行下一步跳转。</p>
<ul>
<li>next() 下一个钩子，全部钩子执行完就跳转到 to 地址</li>
<li>next('/') 跳到指定地址</li>
<li>next(false) 中断当前导航，回到 from 地址</li>
<li>next(error) 传入 error 实例，传递到 router.onError()的回调</li>
</ul>
<h2 id="vue-动态路由方案" tabindex="-1"><a class="header-anchor" href="#vue-动态路由方案" aria-hidden="true">#</a> Vue 动态路由方案</h2>
<ul>
<li>整体思路
<ul>
<li>登录：当用户填写完账号和密码后向服务端验证是否正确，验证通过之后，服务端会返回一个 token，拿到 token 之后（我会将这个 token 存贮到 cookie 中，保证刷新页面后能记住用户登录状态），前端会根据 token 再去拉取一个 user_info 的接口来获取用户的详细信息（如用户权限，用户名等等信息）</li>
<li>权限验证：通过 token 获取用户对应的 role，动态根据用户的 role 算出其对应有权限的路由，通过 router.addRoutes 动态挂载这些路由。
<ul>
<li>设置一个 tree 空间给每个页面动态配置权限，将这份路由表保存到后端</li>
<li>当用户登录后得到 roles，前端根据 roles 去向后端请求可访问的路由表，</li>
<li>之后就是 router.addRoutes 动态挂载到 router 上</li>
</ul>
</li>
</ul>
</li>
<li>具体实现
<ul>
<li>router 里实例化不需要权限的公用页面</li>
<li>设置一个 tree 空间给每个页面动态配置权限，通过 meta 标签来标示改页面能访问的权限，<code>meta: { role: ['admin','super_editor'] }</code>，将这份路由表保存到后端</li>
<li>在路由钩子 router.beforeEach 里判断是否有 token，没有则去登录页</li>
<li>有 token 则获取用户信息比如 roles，拿到权限路由表</li>
<li>通过用户的权限和我们配置的每一个页面所需要的权限做匹配，最后返回一个该用户能够访问路由有哪些，</li>
<li>通过 addRoutes 将可访问路由，动态添加到路由表里，没权限的默认去 404 页</li>
</ul>
</li>
</ul>
</template>
