<template><h3 id="响应式数据的实现流程" tabindex="-1"><a class="header-anchor" href="#响应式数据的实现流程" aria-hidden="true">#</a> 响应式数据的实现流程</h3>
<p><img src="@source/pages/img/1.png" alt="截屏2021-08-24"></p>
<h3 id="vue收集依赖-什么是依赖" tabindex="-1"><a class="header-anchor" href="#vue收集依赖-什么是依赖" aria-hidden="true">#</a> vue收集依赖，什么是依赖？</h3>
<p>答：需要用到数据的地方就叫依赖，在getter()中收集依赖，在setter()中触发依赖。有了依赖，就可以在数据变化时，只更新与这个数据有关的DOM结构，不至于说任何一个数据变化，都会导致整个页面重新渲染，代价太大。</p>
<h2 id="明明是watcher收集依赖-应该是watcher收集数据-怎么成了数据的dep收集watcher了呢" tabindex="-1"><a class="header-anchor" href="#明明是watcher收集依赖-应该是watcher收集数据-怎么成了数据的dep收集watcher了呢" aria-hidden="true">#</a> 明明是watcher收集依赖,应该是watcher收集数据,怎么成了数据的dep收集watcher了呢？</h2>
<p>答：Dep的作用是收集观察者以及当数据发生变化的时候通知观察者watcher去更新。（在每次observe的时候都会给每个实例添加一个属于自己的dep）</p>
<p>watcher观察者相当于中介，为的是通知组件更新</p>
<p><img src="@source/pages/img/2.png" alt="哈哈哈哈"></p>
<p><img src="@source/pages/img/3.png" alt="呵呵呵"></p>
<p><img src="@source/pages/img/7.png" alt="呵呵呵"></p>
<hr>
<h3 id="为什么数据劫持不能监听数组" tabindex="-1"><a class="header-anchor" href="#为什么数据劫持不能监听数组" aria-hidden="true">#</a> 为什么数据劫持不能监听数组？</h3>
<p>答：其实本身是可以的，只是尤大觉得实现的成本太高。毕竟数组是有序的结构，每次新增或者删除某项都会导致每个元素的位置移动，这会触发getter和setter函数，导致依赖发生变化。</p>
<ul>
<li>直接<code>vm.items[indexOfItem] = newValue</code>是无法检测到的，length 属性不能监听因为无法触发 obj 的 get 方法。</li>
</ul>
<h3 id="vue数组响应式的实现" tabindex="-1"><a class="header-anchor" href="#vue数组响应式的实现" aria-hidden="true">#</a> <strong>vue数组响应式的实现？</strong></h3>
<p>vue改写了数组的7个方法： push、pop、shift、unshift、splice、sort、reverse。这7个方法都是定义在<strong>Array.prototype</strong></p>
<p>以<strong>Array.prototype</strong>为原型创建了<strong>arrayMethods</strong>对象，然后用<strong>es6的Object.setPrototypeOf()</strong>（或者<code>__proto__</code>）强制改变所需要操作的数组的原型指向arrayMethods</p>
<p><img src="@source/pages/img/8.png" alt="呵呵呵"></p>
<hr>
<blockquote>
<p>每个 Vue 组件都有对应的一个 Watcher 实例，如果一个属性在不同组件上都使用到，将把不同组件的 Watcher 都添加到这个属性的 Dep 订阅器中，表示这些视图依赖这个对象属性，如果发生改变，这些视图都要进行更新。一个 Watcher 可能在多个 Dep 中同时存在。</p>
</blockquote>
<h3 id="依赖收集过程" tabindex="-1"><a class="header-anchor" href="#依赖收集过程" aria-hidden="true">#</a> 依赖收集过程：</h3>
<p><strong>Vue模版编译原理</strong></p>
<blockquote>
<p><strong>编译阶段compile</strong>											⬇️<strong>挂载前的准备工作：</strong></p>
<ul>
<li>
<p>查看是否有<code>&lt;template&gt;</code>(模板)，内部执行compile函数，解析成<code>render function</code>，</p>
<ul>
<li><strong>compile函数</strong>，包括parse（解析template为<strong>AST</strong>抽象语法树），optimize（标记静态节点，在diff算法执行过程中会跳过这些静态节点，优化点），generate（<strong>AST</strong>抽象语法树 --&gt; render function ）三个阶段。
<ul>
<li><strong>AST语法树</strong>：一种用js对象形式描述整个模版template。</li>
<li>解析阶段：使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子函数进行处理</li>
<li>优化阶段，模板中有些内容是不需要关联data数据的，首次渲染完就不会再变化的——静态节点，这些内容需要将他们进行标记，等下下次更新模板执行diff算法时就会跳过它们。</li>
<li>转换阶段：将解析并且优化后的AST语法树转换为可执行的代码render function。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>模板编译执行<code>render function</code>渲染出虚拟dom，**此时还没有生成真实 DOM，因为还没真正挂载。**然后读取模板上插值表达式的值，触发getter函数，执行收集依赖，将订阅者Watcher添加进Dep中。</p>
<p>（当插值表达式的值发生改变时，会触发setter函数，通知Dep中对应的订阅者Watcher，执行update函数重新渲染页面）</p>
</li>
</ul>
</blockquote>
<p>在执行compile函数后，template会被编译成render函数，然后在执行render函数的过程中每个组件会实例化一个watcher对象，实例化工程中就会触发属性的getter函数，从而将这个数据所对应的watcher对象收集各自的依赖管理者dep当中。render 函数的结果便是重新生成 vnode，当这个 render 函数字符串在第一次 mount、或者绑定的数据更新的时候，都会被调用，生成 Vnode。</p>
<blockquote>
<p>每个 Vue 组件都有对应的一个 Watcher 实例，如果一个属性在不同组件上都使用到，将把不同组件的 Watcher 都添加到这个属性的 Dep 订阅器中，表示这些视图依赖这个对象属性，如果发生改变，这些视图都要进行更新。一个 Watcher 可能在多个 Dep 中同时存在。</p>
</blockquote>
<hr>
<h3 id="双向绑定的原理描述和总结" tabindex="-1"><a class="header-anchor" href="#双向绑定的原理描述和总结" aria-hidden="true">#</a> 双向绑定的原理描述和总结</h3>
<p>当创建 Vue 实例时,vue 初始化会遍历 data 选项的属性，通过Object.defineProperty 为属性添加 getter 和 setter来实现对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在调用时收集依赖,在属性被访问和修改时通知变化。</p>
<p>每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中进行依赖收集（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。</p>
<p>一句话总结:</p>
<p>vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调</p>
<hr>
<h2 id="computed-的实现原理" tabindex="-1"><a class="header-anchor" href="#computed-的实现原理" aria-hidden="true">#</a> computed 的实现原理</h2>
<h4 id="computed属性初始化" tabindex="-1"><a class="header-anchor" href="#computed属性初始化" aria-hidden="true">#</a> computed属性初始化</h4>
<p>在vue初始化阶段中，当完成了对date属性的数据劫持过程后，也会初始化computed计算属性。</p>
<p>computed 内部实现了一个惰性的 watcher,也就是 computed watcher,每个计算属性都会创建一个computed watcher。在执行render函数时会触发computed属性值的get方法，然后依次将这个计算属性的computed watcher和对应data属性的watcher实例添加到data属性的收集器dep内(<strong>注意订阅队列里的顺序，computed-watcher先，render-watcher后</strong>)。</p>
<p>computed 本质是一个惰性求值的观察者。</p>
<p>其内部通过 <code>this.dirty </code>属性标记计算属性是否需要重新求值: 当data属性变化时先调用computed-watcher的update函数然后将this.dirty 置为true，然后再调用render-watcher的update函数重新渲染。</p>
<p>当 computed 的依赖状态发生改变时,就会通知这个惰性的 watcher,</p>
<p>computed watcher 通过 this.dep.subs.length 判断有没有订阅者,</p>
<p>有的话,会重新计算,然后对比新旧值,如果变化了,会重新渲染。 (<strong>Vue 想确保不仅仅是计算属性依赖的值发生变化，而且是当计算属性最终计算的值发生变化时才会触发渲染 watcher 重新渲染，本质上是一种优化。</strong>)</p>
<hr>
<p>Watcher : 观察者对象 , 实例分为<code>渲染 watcher</code> (render watcher),<code>计算属性 watcher</code> (computed watcher),<code>侦听器 watcher</code>（user watcher）</p>
<!-- ### **<img src="../../img/截屏2021-08-24 下午11.50.33.png" alt="截屏2021-08-24 下午11.50.33" style="zoom:33%;" />** -->
<p><img src="@source/pages/img/1.png" alt="截屏2021-08-24"></p>
<h3 id="vue收集依赖-什么是依赖-1" tabindex="-1"><a class="header-anchor" href="#vue收集依赖-什么是依赖-1" aria-hidden="true">#</a> vue收集依赖，什么是依赖？</h3>
<p>答：需要用到数据的地方就叫依赖，在getter()中收集依赖，在setter()中触发依赖。有了依赖，就可以在数据变化时，只更新与这个数据有关的DOM结构，不至于说任何一个数据变化，都会导致整个页面重新渲染，代价太大。</p>
<h2 id="明明是watcher收集依赖-应该是watcher收集数据-怎么成了数据的dep收集watcher了呢-1" tabindex="-1"><a class="header-anchor" href="#明明是watcher收集依赖-应该是watcher收集数据-怎么成了数据的dep收集watcher了呢-1" aria-hidden="true">#</a> 明明是watcher收集依赖,应该是watcher收集数据,怎么成了数据的dep收集watcher了呢？</h2>
<p>答：Dep的作用是收集观察者以及当数据发生变化的时候通知观察者watcher去更新。（在每次observe的时候都会给每个实例添加一个属于自己的dep）</p>
<p>watcher观察者相当于中介，为的是通知组件更新</p>
<h3 id="依赖收集过程-1" tabindex="-1"><a class="header-anchor" href="#依赖收集过程-1" aria-hidden="true">#</a> 依赖收集过程？</h3>
<p>答：渲染页面时碰到插值表达式，<code>v-bind</code>等需要数据等地方，会实例化一个<code>watcher</code>,实例化<code>watcher</code>就会对依赖的数据求值，从而触发<code>getter</code>，数据的<code>getter</code>函数就会添加依赖自己的<code>watcher</code>，从而完成依赖收集。我们可以理解为<code>watcher</code>在收集依赖，而代码的实现方式是在数据中存储依赖自己的<code>watcher</code></p>
<!-- <img src="../../img/截屏2021-08-28 下午7.53.07.png" alt="截屏2021-08-28 下午7.53.07" style="zoom: 33%;" /> -->
<!-- <img src="../../img/截屏2021-08-28 下午8.14.51.png" alt="截屏2021-08-28 下午8.14.51" style="zoom:33%;" /> -->
<p><img src="@source/pages/img/2.png" alt="哈哈哈哈"></p>
<!-- <img src="/Users/kevinzzzzzz/Library/Application Support/typora-user-images/截屏2021-08-28 下午11.40.19.png" alt="截屏2021-08-28 下午11.40.19" style="zoom:33%;" /> -->
<p><img src="@source/pages/img/3.png" alt="呵呵呵">
<img src="@source/pages/img/7.png" alt="呵呵呵"></p>
<hr>
<h3 id="为什么数据劫持不能监听数组-1" tabindex="-1"><a class="header-anchor" href="#为什么数据劫持不能监听数组-1" aria-hidden="true">#</a> 为什么数据劫持不能监听数组？</h3>
<p>答：其实本身是可以的，只是尤大觉得实现的成本太高。因为数组是有序的结构，每次新增或者删除某项都会导致每个元素的位置移动，这会触发getter和setter函数，导致依赖发生变化。</p>
<ul>
<li>直接<code>vm.items[indexOfItem] = newValue</code>是无法检测到的，length 属性不能监听因为无法触发 obj 的 get 方法。</li>
</ul>
<h3 id="vue数组响应式的实现-1" tabindex="-1"><a class="header-anchor" href="#vue数组响应式的实现-1" aria-hidden="true">#</a> <strong>vue数组响应式的实现？</strong></h3>
<p>vue改写了数组的7个方法： push、pop、shift、unshift、splice、sort、reverse。这7个方法都是定义在<strong>Array.prototype</strong></p>
<p>以<strong>Array.prototype</strong>为原型创建了<strong>arrayMethods</strong>对象，然后用<strong>es6的Object.setPrototypeOf()</strong>(或者<code>__proto__</code>)强制改变所需要操作的数组的原型指向arrayMethods</p>
<p><img src="@source/pages/img/8.png" alt="呵呵呵"></p>
<hr>
<h3 id="依赖收集过程-2" tabindex="-1"><a class="header-anchor" href="#依赖收集过程-2" aria-hidden="true">#</a> 依赖收集过程：</h3>
<p>渲染页面时碰到插值表达式，<code>v-bind</code>等需要数据等地方，会实例化一个<code>watcher</code>,实例化<code>watcher</code>就会对依赖的数据求值，从而触发<code>getter</code>，数据的<code>getter</code>函数就会添加依赖自己的<code>watcher</code>，从而完成依赖收集。我们可以理解为<code>watcher</code>在收集依赖，而代码的实现方式是在数据中存储依赖自己的<code>watcher</code></p>
<p>细心的读者可能会发现，利用这种方法，每遇到一个插值表达式就会新建一个<code>watcher</code>，这样每个节点就会对应一个<code>watcher</code>。实际上这是<code>vue1.x</code>的做法，以节点为单位进行更新，粒度较细。而<code>vue2.x</code>的做法是每个组件对应一个<code>watcher</code>，实例化<code>watcher</code>时传入的也不再是一个<code>expression</code>，而是渲染函数，渲染函数由组件的模板转化而来，这样一个组件的<code>watcher</code>就能收集到自己的所有依赖，以组件为单位进行更新，是一种中等粒度的方式。要实现<code>vue2.x</code>的响应式系统涉及到很多其他的东西，比如组件化，虚拟<code>DOM</code>等，而这个系列文章只专注于数据响应式的原理，因此不能实现<code>vue2.x</code>，但是两者关于响应式的方面，原理相同。</p>
<hr>
<h3 id="双向绑定的原理描述和总结-1" tabindex="-1"><a class="header-anchor" href="#双向绑定的原理描述和总结-1" aria-hidden="true">#</a> 双向绑定的原理描述和总结</h3>
<p>当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter来实现对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。</p>
<p>每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。</p>
<p>一句话总结:</p>
<p>vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调</p>
<hr>
<h2 id="computed-的实现原理-1" tabindex="-1"><a class="header-anchor" href="#computed-的实现原理-1" aria-hidden="true">#</a> computed 的实现原理</h2>
<p>computed 本质是一个惰性求值的观察者。</p>
<p>computed 内部实现了一个惰性的 watcher,也就是 computed watcher,computed watcher 不会立刻求值,同时持有一个 dep 实例。</p>
<p>其内部通过 this.dirty 属性标记计算属性是否需要重新求值。</p>
<p>当 computed 的依赖状态发生改变时,就会通知这个惰性的 watcher,</p>
<p>computed watcher 通过 this.dep.subs.length 判断有没有订阅者,</p>
<p>有的话,会重新计算,然后对比新旧值,如果变化了,会重新渲染。 (<strong>Vue 想确保不仅仅是计算属性依赖的值发生变化，而是当计算属性最终计算的值发生变化时才会触发渲染 watcher 重新渲染，本质上是一种优化。</strong>)</p>
<p>没有的话,仅仅把 this.dirty = true。 (<strong>当计算属性依赖于其他数据时，属性并不会立即重新计算，只有之后其他地方需要读取属性的时候，它才会真正计算，即具备 lazy（懒计算）特性。</strong>)</p>
<hr>
<p>Watcher : 观察者对象 , 实例分为<code>渲染 watcher</code> (render watcher),<code>计算属性 watcher</code> (computed watcher),<code>侦听器 watcher</code>（user watcher）三种</p>
</template>
