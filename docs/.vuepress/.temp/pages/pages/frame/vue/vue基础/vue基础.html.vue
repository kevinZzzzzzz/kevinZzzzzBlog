<template><h3 id="computed和watch" tabindex="-1"><a class="header-anchor" href="#computed和watch" aria-hidden="true">#</a> computed和watch？</h3>
<p>答： computed计算属性：</p>
<ul>
<li>
<p>需要有<strong>依赖项</strong>，可以不止一个依赖项</p>
</li>
<li>
<p><strong>有缓存</strong>，只有当依赖项发生变化时才会重新执行</p>
</li>
<li>
<p>不能执行异步请求</p>
</li>
</ul>
<p>watch监听器：</p>
<ul>
<li>数据的监听回调函数，当数据发生变化时会执行回调函数</li>
<li>可以执行异步请求</li>
<li><strong>无缓存性</strong>，当页面重新刷新时，即便监听的值不变化也会触发，可以设置immidiate：false解决</li>
<li>可以深度监听对象的属性：deer：true，或者使用字符串形式监听：'object.key': function(n,o){}</li>
</ul>
<p><strong>运用场景：</strong></p>
<p>computed：当需要对某个值进行另外的计算时，避免在模版中放入过多的逻辑，难以维护，而把该值作为依赖项，采取计算属性重新求值。</p>
<p>watch：当需要在数据变化后执行异步请求或者更大开销的操作时，应该使用watch</p>
<hr>
<h3 id="nexttick的原理" tabindex="-1"><a class="header-anchor" href="#nexttick的原理" aria-hidden="true">#</a> nextTick的原理？</h3>
<p>答：首先vue中，更新DOM时是异步执行的，也就是说当数据发生变化后，视图不是立马更新的，而是等同一个循环中的数据变化完了，进入到下一个循环tick的时候才更新。</p>
<p><strong>nextTick的目的是在就是在dom更新完后或者说下一个tick触发时，执行回调。</strong>（比如可以用nextTick可以在dom异步渲染结束之后获取改变之后的数据等）</p>
<p>​		**原理及实现方式：**Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。<strong>Vue 在内部尝试对异步队列使用原生的Promise.then和MessageChannel，如果执行环境不支持，会采用setTimeout(fn, 0)代替。</strong></p>
<p>tip：基于事件循环机制，vue用异步队列的方式来控制DOM更新和nextTick回调执行，在事件队列中，微任务 ——&gt; Dom渲染 ——&gt; 宏任务，能确保队列中的微任务在进入下一次循环前执行完毕。</p>
<p><strong>应用场景：</strong></p>
<ul>
<li>在create中，对dom的操作这样放在nextTick中执行，因为在执行create时，dom还没挂载上去，此时如果有对dom的操作，就可以放在nextTick的回调中，等到dom渲染完成后，回调函数就会执行</li>
<li>在数据变化后，要对一个依赖数据变化的dom元素进行操作</li>
</ul>
<h4 id="视图更新优化" tabindex="-1"><a class="header-anchor" href="#视图更新优化" aria-hidden="true">#</a> 视图更新优化：</h4>
<p>​		Vue 视图更新 DOM 是异步执行的，检测到数据有变化，Vue 开启一个异步队列，下个 tick 更新视图。同一个 watcher 被多次触发，只会被推入到队列中一次。</p>
<hr>
<h2 id="vue-是如何对数组方法进行变异的" tabindex="-1"><a class="header-anchor" href="#vue-是如何对数组方法进行变异的" aria-hidden="true">#</a> vue 是如何对数组方法进行变异的 ?</h2>
<p>答：vue以Array.prototype为基础创建一个新的对象ArrayObj，然后将重写了ArrayObj上的数组方法，最后将所要操作的数组同Object.setPrototype()强制改变数组的原型指向ArrayObj上。这样每个数组上就会有一个携带上它的Observe对象，一旦有新的值，就会调用Observe对象上的observeArray方法对新的值进行数据劫持，并且会手动调用notify方法更新</p>
<h2 id="vue-组件-data-为什么必须是函数" tabindex="-1"><a class="header-anchor" href="#vue-组件-data-为什么必须是函数" aria-hidden="true">#</a> Vue 组件 data 为什么必须是函数 ?</h2>
<p>答：注册一个组件实质上是创建一个组件实例，而且组件是可以复用的，就会创造出更多的实例。如果组件data是一个对象时，所有组件data都会共享这个对象(即指向同一个内存地址)，导致修改其中一个属性就会影响其他组件上的同个属性。为了防止实例间 data 的冲突，将data设置成一个函数并return出一个对象，让每个组件都能各自维护一份独立拷贝的数据。</p>
<h2 id="聊聊-keep-alive-的实现原理和缓存策略" tabindex="-1"><a class="header-anchor" href="#聊聊-keep-alive-的实现原理和缓存策略" aria-hidden="true">#</a> 聊聊 keep-alive 的实现原理和缓存策略</h2>
<p>答：缓存原理：1、获取keep-alive包裹着的子组件和组件名，2、根据include/exclude数组里的组件名进行匹配，决定是否走缓存还是直接返回组件实例，3、根据组件ID和tag生成缓存key，然后根据缓存策略对key进行处理。</p>
<p>缓存策略：LRU缓存淘汰算法，核心思想就是如果数据最近被访问过，那么将来被访问的几率就更高，实际是每个组件都有一个key值，每次缓存一个组件都会在缓存数组中对应道组件key给移动到数组的最后面，并且缓存数组是有数量控制的，当达到一定数量后，缓存数组最前面、下标为0的一项会被删除。</p>
<h3 id="v-for-和-v-if不能一起用" tabindex="-1"><a class="header-anchor" href="#v-for-和-v-if不能一起用" aria-hidden="true">#</a> v-for 和 v-if不能一起用？</h3>
<p>答： 涉及到优先级问题，v-for会比v-if优先执行</p>
<p>如果v-if和v-for同一级的话会始终先循环v-for，然后在每个item上加上v-if。这样每个子项都要做一个v-if判断，会造成性能浪费（不会报错，会警告）</p>
<p>解决方法：可以把v-if提到外层去,(可以用template替换div)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### **new vue()发生了什么事情？**

答：Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。 &lt;div v-if="boolean">
    &lt;div v-for="(item, idx) in array" :key="idx">&lt;/div>
&lt;/div>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="vue2中数组变化的限制-解决方法" tabindex="-1"><a class="header-anchor" href="#vue2中数组变化的限制-解决方法" aria-hidden="true">#</a> vue2中数组变化的限制&amp;解决方法</h3>
<p>答：vue2检测不了数组的索引和数组长度的变化，原因是数组的下标和value无法固定对应，Object.defineProperty()的方法对数组劫持的实现不太理想，或者无法对数组进行劫持，这个问题在vue3中已经解决，vue2的解决方法是对数组的方法进行重写</p>
<p>解决方法：$set,$detele,以及数组的方法splice。</p>
<hr>
<h3 id="v-if和v-show的区别" tabindex="-1"><a class="header-anchor" href="#v-if和v-show的区别" aria-hidden="true">#</a> <strong>v-if和v-show的区别</strong></h3>
<p>v-if：</p>
<ul>
<li>只有在条件为true的时候才会去渲染元素，条件不成立不会生成对应的vnode，render也不会渲染</li>
<li>适用于条件很少变化的场景，比如元素的显示和隐藏是一次性决定的那就用v-if</li>
</ul>
<p>v-show</p>
<ul>
<li>不管条件成不成立，都会生成vnode，render也会被渲染</li>
<li>在不满足条件时，元素上增加一个style：&quot;display: none&quot;的内敛样式</li>
<li>适用于切换频繁的场景</li>
</ul>
<hr>
<h3 id="v-cloak" tabindex="-1"><a class="header-anchor" href="#v-cloak" aria-hidden="true">#</a> v-cloak</h3>
<p>用来解决插值表达式闪烁一下{undefined{obj.name}} 这个vue.js模板变量的问题</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>html:
&lt;ul v-cloak v-for="item in obj">
 &lt;li>{{ obj.name }}&lt;/li>
&lt;/ul>
css:
[v-cloak] {
     display: none;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="vue的生命周期" tabindex="-1"><a class="header-anchor" href="#vue的生命周期" aria-hidden="true">#</a> vue的生命周期</h1>
<h6 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h6>
<p><img src="@source/pages/img/15.png" alt="呵呵呵">
<img src="@source/pages/img/16.png" alt="呵呵呵"></p>
<h4 id="init-new-vue-发生了什么事情" tabindex="-1"><a class="header-anchor" href="#init-new-vue-发生了什么事情" aria-hidden="true">#</a> init：<em>new vue()发生了什么事情？</em></h4>
<p><img src="@source/pages/img/17.png" alt="呵呵呵"></p>
<p>Vue 初始化主要就干了几件事情，合并配置，**初始化生命周期，初始化事件，初始化渲染，初始化 data、props、computed、watcher 等等。 **</p>
<p>在初始化data时，会运行 observe 函数深度遍历数据中的每一个属性，进行数据劫持(Object.defineProperty),实现响应式。</p>
<p><strong><code>beforeCreated</code></strong>: 实例刚创建，此时还不能访问methods，data，computed等上的方法和数据，(因为如图中initState初始化data在beforeCreated后面执行)</p>
<hr>
<p><strong><code>created</code></strong>: 实例创建完成，属性已经完成数据劫持完成， <strong><code>但还未生成真实dom，因为还没有挂载到页面上，</code></strong></p>
<p>​				<strong>可以调用methods里面的方法，data可以访问，可以获取computed中的计算属性等</strong></p>
<hr>
<p><strong><code>beforeMount</code></strong>：挂载之前。</p>
<p><strong>编译阶段compile</strong>											⬇️<strong>挂载前的准备工作：</strong></p>
<ul>
<li>
<p>查看是否有<code>&lt;template&gt;</code>(模板)，内部执行compile函数，解析成<code>render function</code>，</p>
</li>
<li>
<p><strong>compile函数</strong>，包括parse（解析template为<strong>AST</strong>抽象语法树），optimize（标记静态节点，在diff算法执行过程中会跳过这些静态节点，优化点），generate（<strong>AST</strong>抽象语法树 --&gt; render function ）三个阶段。</p>
</li>
<li>
<p>模板编译执行<code>render function</code>渲染出虚拟dom，**此时还没有生成真实 DOM，因为还没真正挂载。**然后读取模板上插值表达式的值，触发getter函数，执行收集依赖，将订阅者Watcher添加进Dep中。</p>
<p>（当插值表达式的值发生改变时，会触发setter函数，通知Dep中对应的订阅者Watcher，执行update函数重新渲染页面）</p>
</li>
</ul>
<p><code>.vue</code>文件: <code>vue-loader</code>会将<code>&lt;template&gt;</code>编译成<code>render function</code>*</p>
<p><strong><code>mounted</code></strong>：组件挂载完成，可以拿到挂载对象$el，<strong>真正生成真实dom，data、method 可访问、<em>el 可访问</em>。</strong></p>
<p>mounted只会执行一次。</p>
<hr>
<p><strong><code>beforeUpdate</code></strong>：更新前，发生在虚拟 DOM patch之前，在数据更新之前被调用</p>
<p>​																		 ⬇️<strong>更新的过程中：</strong></p>
<p>数据变化触发 update 后，执行 render function 得到新的 VNode 节点，期间会执行<code>diff</code>算法，对比新旧的虚拟节点，得出最小的修改点，仅修改对应的dom节点。</p>
<p><strong><code>updated</code></strong>：更新完成。此时，dom已经更新完毕！<strong>如果有 nextTick 回调，会在视图更新后执行。</strong></p>
<hr>
<p><strong><code>beforeDestroy</code></strong>：实例销毁前。</p>
<ul>
<li>
<p>这里实例仍然存在，仍然可以用this访问实例，</p>
</li>
<li>
<p>做一些清理工作，如清除计时器，移除绑定了 DOM/BOM 对象中的事件，</p>
</li>
</ul>
<hr>
<p><strong><code>destroyed</code></strong>：销毁完成，组件销毁后调用，解绑指令，所有事件监听被移除（重点），所有子组件实例销毁，都不可用。</p>
<hr>
<h4 id="关键节点简述" tabindex="-1"><a class="header-anchor" href="#关键节点简述" aria-hidden="true">#</a> <strong>关键节点简述</strong></h4>
<ul>
<li>
<p>创建阶段</p>
<ul>
<li><code>beforeCreate</code>：【data、methods、el 均不可访问】</li>
<li>中间执行：初始化 data、methods、props、computed、watcher、provide。</li>
<li><code>created</code>：【data、methods 可访问、el 不可访问】【最早可访问 data】
<ul>
<li>可以执行ajax请求数据</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 允许并推荐</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 不允许</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$el
  <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>demo
  <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>挂载阶段</p>
<ul>
<li><code>beforeMount</code>：【data、methods 可访问、el 不可访问】【虚拟 DOM 编译还在内存中，还未挂载】</li>
<li><code>mounted</code>：【data、methods 可访问、el 可访问】【最早可操作 DOM】【页面已显示】</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 允许</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el
    <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>demo
    <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>运行阶段</p>
<ul>
<li><code>beforeUpdate</code>：【数据更新后执行】【data 数据是新的，但页面是旧的】</li>
<li>中间执行：<code>re-render和patch</code>进行虚拟 DOM 的 diff 和更新渲染</li>
<li><code>updated</code>：【视图更新完执行】【data 和页面都是最新的】</li>
</ul>
</li>
<li>
<p>销毁阶段</p>
<ul>
<li><code>beforeDestroy</code>：【实例的 data、methods、指令完全可用】</li>
<li><code>destroyed</code>：【实例的 data、methods、指令都不可用】</li>
<li>触发销毁钩子的方法
<ul>
<li>手动调用<code>$destory()</code>销毁组件实例</li>
<li>v-if 与 v-for 指令（v-show 不行）</li>
<li>路由切换、关闭或刷新浏览器</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<p>【服务器端渲染】：beforeCreate、created，其他不可调用</p>
<p>【异步请求常放在 created】：官方推荐在 mounted 中调用，实际上可以在 created 生命周期中调用（能更快获取到服务端数据，减少页面 loading 时间），如果需要在请求中修改dom，还是在mounted上。 服务端渲染时不支持 mounted，需要放到 created 中。</p>
<p>【最早访问 data】：在 created 钩子中可以对 data 数据进行操作，可以进行 ajax 请求将返回的数据赋给 data。</p>
<h2 id="vue3-0的生命周期" tabindex="-1"><a class="header-anchor" href="#vue3-0的生命周期" aria-hidden="true">#</a> Vue3.0的生命周期</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Vue2</th>
<th style="text-align:left">Vue3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>beforeCreate</code></td>
<td style="text-align:left">❌<code>setup</code>(替代)</td>
</tr>
<tr>
<td style="text-align:left"><code>created</code></td>
<td style="text-align:left">❌<code>setup</code>(替代)</td>
</tr>
<tr>
<td style="text-align:left"><code>beforeMount</code></td>
<td style="text-align:left"><code>onBeforeMount</code></td>
</tr>
<tr>
<td style="text-align:left"><code>mounted</code></td>
<td style="text-align:left"><code>onMounted</code></td>
</tr>
<tr>
<td style="text-align:left"><code>beforeUpdate</code></td>
<td style="text-align:left"><code>onBeforeUpdate</code></td>
</tr>
<tr>
<td style="text-align:left"><code>updated</code></td>
<td style="text-align:left"><code>onUpdated</code></td>
</tr>
<tr>
<td style="text-align:left"><code>beforeDestroy</code></td>
<td style="text-align:left"><code>onBeforeUnmount</code></td>
</tr>
<tr>
<td style="text-align:left"><code>destroyed</code></td>
<td style="text-align:left"><code>onUnmounted</code></td>
</tr>
<tr>
<td style="text-align:left"><code>errorCaptured</code></td>
<td style="text-align:left"><code>onErrorCaptured</code></td>
</tr>
<tr>
<td style="text-align:left">-</td>
<td style="text-align:left">🎉<code>onRenderTracked</code></td>
</tr>
<tr>
<td style="text-align:left">-</td>
<td style="text-align:left">🎉<code>onRenderTriggered</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="vue的渲染过程" tabindex="-1"><a class="header-anchor" href="#vue的渲染过程" aria-hidden="true">#</a> vue的渲染过程</h2>
<p><img src="@source/pages/img/18.png" alt="呵呵呵"></p>
<blockquote>
<p>new Vue()调用 init 初始化 -&gt; $mount 挂载 -&gt; compile()编译模板 -&gt; render function -&gt; 响应式系统 -&gt; 视图更新</p>
</blockquote>
<blockquote>
<p>响应式系统：render -&gt; touch -&gt; getter -&gt; Dep 依赖收集 Watcher；setter -&gt; Dep.notify -&gt; Watcher.update() -&gt; patch()进行 diff -&gt; DOM</p>
</blockquote>
<ul>
<li>分为四个阶段：初始化、挂载编译、响应式、视图更新
<ul>
<li>1、初始化：new Vue():调用 init 函数初始化，包括生命周期、事件、props、data、methods、watch 等，还有数据劫持，通过 Object.defineProperty 设置 setter 和 getter 函数(同时将 this.data.test 代理成 this.test)，用于后续的依赖收集和响应式。</li>
<li>2、编译挂载：初始化后调用$mount 挂载组件，有 template 的情况下，内部执行 compile()编译，包括 parse（解析 template 转成 AST） 、 optimize(标记静态节点、用于 diff 优化跳过静态节点) 与 generate（AST -&gt; render function） 三个阶段，最终得到 render function，用来渲染 VNode，然后生成真实 DOM 显示在页面上。</li>
<li>3、响应式：render function 被渲染，读取所需对象的值，触发 getter 函数，执行依赖收集，将订阅者 Watcher 添加 Dep 订阅器中。修改对象的值时触发 setter，通知 Dep 订阅器中的订阅者 Watcher，需要重新渲染视图，然后 Watcher 调用 update 进行更新。</li>
<li>4、视图更新：数据变化触发 update 后，执行 render function 得到新的 VNode 节点，与旧的 VNode 一起传入 patch 进行比较，经过 diff 算法得到「 差异」，根据差异来修改对应的 DOM。</li>
</ul>
</li>
</ul>
<hr>
</template>
