<template><h1 id="vue组件通讯" tabindex="-1"><a class="header-anchor" href="#vue组件通讯" aria-hidden="true">#</a> vue组件通讯</h1>
<p><a href="https://juejin.cn/post/6844903887162310669#heading-0" target="_blank" rel="noopener noreferrer">组件通讯<OutboundLink/></a></p>
<ul>
<li>总结：父子通信用<code>props/$emit</code>、兄弟组件用事件总线 <code>EventBus</code>、跨级通信使用<code>provide/inject</code>和<code>$attrs/$listeners</code>、全局使用 <code>vuex</code></li>
<li>props/$emit+v-on: 父子通信：通过props将数据自上而下传递，而通过$emit 和 v-on(@)来向上传递信息。</li>
<li>EventBus: 兄弟组件或跨级：事件总线：所有组件的共同事件中心，通过 EventBus 进行信息的发送和监听
<ul>
<li>不适用多人协作和大项目，较难维护。</li>
<li>组件没有同时显示不应该用 eventbus，一般需要先 on 再 emit。比如两个路由一个还没创建，所以监听不到。而应该使用 vuex。</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// event-bus.js</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> EventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册事件总线</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./event-bus.js"</span><span class="token punctuation">;</span> <span class="token comment">// 组件引入</span>
EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> num<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A组件发送事件</span>
EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// B组件接收事件</span>
EventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除监听</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>
<p>provide/inject：跨级：父组件中通过<strong>provide 来提供变量, 然后再子孙后代组件中通过 inject 来注入变</strong>量。不论组件层次有多深，并在起上下游关系成立的时间里始终生效。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

inject<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>$attrs/$listeners: 跨级： Vue2.4 中加入的$attrs/$listeners，$attrs含有父作用域<strong>不被prop识别的特性</strong>（class和style除外），$listeners 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器，并且可以通过 v-bind=&quot;$attrs/$listeners&quot;继续传入内部组件,传递下去。</p>
<ul>
<li>
<p>新增了<code>inheritAttrs</code> 选项，设置<code>inheritAttrs=false</code></p>
</li>
<li>
<p>适合仅传递数据的跨级通信，用 vuex 是大材小用。</p>
</li>
</ul>
</li>
<li>
<p>vuex: 是全局数据管理库，可以通过 vuex 管理全局的数据流</p>
</li>
<li>
<p>localStorage / sessionStorage</p>
<ul>
<li>数据和状态比较混乱，不好维护，不过可以结合 vuex, 实现数据的持久保存</li>
<li>window.localStorage.getItem(key)获取数据</li>
<li>通过 window.localStorage.setItem(key,value)存储数据</li>
<li>JSON.parse() / JSON.stringify() 做数据格式转换</li>
</ul>
</li>
</ul>
</template>
