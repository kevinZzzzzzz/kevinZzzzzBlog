"use strict";(self.webpackChunkkevinBlog=self.webpackChunkkevinBlog||[]).push([[756],{9685:(e,l,n)=>{n.r(l),n.d(l,{data:()=>t});const t={key:"v-6b34fb0a",path:"/pages/frame/vue/vue%E5%9F%BA%E7%A1%80/vue%E5%9F%BA%E7%A1%80.html",title:"vue的生命周期",lang:"zh-cn",frontmatter:{},excerpt:"",headers:[{level:3,title:"computed和watch？",slug:"computed和watch",children:[]},{level:3,title:"nextTick的原理？",slug:"nexttick的原理",children:[]},{level:2,title:"vue 是如何对数组方法进行变异的 ?",slug:"vue-是如何对数组方法进行变异的",children:[]},{level:2,title:"Vue 组件 data 为什么必须是函数 ?",slug:"vue-组件-data-为什么必须是函数",children:[]},{level:2,title:"聊聊 keep-alive 的实现原理和缓存策略",slug:"聊聊-keep-alive-的实现原理和缓存策略",children:[{level:3,title:"v-for 和 v-if不能一起用？",slug:"v-for-和-v-if不能一起用",children:[]},{level:3,title:"vue2中数组变化的限制&解决方法",slug:"vue2中数组变化的限制-解决方法",children:[]},{level:3,title:"v-if和v-show的区别",slug:"v-if和v-show的区别",children:[]},{level:3,title:"v-cloak",slug:"v-cloak",children:[]}]},{level:2,title:"Vue3.0的生命周期",slug:"vue3-0的生命周期",children:[]},{level:2,title:"vue的渲染过程",slug:"vue的渲染过程",children:[]}],filePathRelative:"pages/frame/vue/vue基础/vue基础.md",git:{updatedTime:1662212859e3,contributors:[{name:"kevinZzzzzzzz",email:"jie736805161@qq.com",commits:1}]}}},7996:(e,l,n)=>{n.r(l),n.d(l,{default:()=>Ie});var t=n(6252),a=n(5064),u=n(4175),s=n(4185),r=n(7506);const _=(0,t._)("h3",{id:"computed和watch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#computed和watch","aria-hidden":"true"},"#"),(0,t.Uk)(" computed和watch？")],-1),o=(0,t._)("p",null,"答： computed计算属性：",-1),i=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("需要有"),(0,t._)("strong",null,"依赖项"),(0,t.Uk)("，可以不止一个依赖项")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"有缓存"),(0,t.Uk)("，只有当依赖项发生变化时才会重新执行")])]),(0,t._)("li",null,[(0,t._)("p",null,"不能执行异步请求")])],-1),d=(0,t._)("p",null,"watch监听器：",-1),c=(0,t._)("ul",null,[(0,t._)("li",null,"数据的监听回调函数，当数据发生变化时会执行回调函数"),(0,t._)("li",null,"可以执行异步请求"),(0,t._)("li",null,[(0,t._)("strong",null,"无缓存性"),(0,t.Uk)("，当页面重新刷新时，即便监听的值不变化也会触发，可以设置immidiate：false解决")]),(0,t._)("li",null,"可以深度监听对象的属性：deer：true，或者使用字符串形式监听：'object.key': function(n,o){}")],-1),p=(0,t._)("p",null,[(0,t._)("strong",null,"运用场景：")],-1),k=(0,t._)("p",null,"computed：当需要对某个值进行另外的计算时，避免在模版中放入过多的逻辑，难以维护，而把该值作为依赖项，采取计算属性重新求值。",-1),h=(0,t._)("p",null,"watch：当需要在数据变化后执行异步请求或者更大开销的操作时，应该使用watch",-1),m=(0,t._)("hr",null,null,-1),f=(0,t._)("h3",{id:"nexttick的原理",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#nexttick的原理","aria-hidden":"true"},"#"),(0,t.Uk)(" nextTick的原理？")],-1),v=(0,t._)("p",null,"答：首先vue中，更新DOM时是异步执行的，也就是说当数据发生变化后，视图不是立马更新的，而是等同一个循环中的数据变化完了，进入到下一个循环tick的时候才更新。",-1),b=(0,t._)("p",null,[(0,t._)("strong",null,"nextTick的目的是在就是在dom更新完后或者说下一个tick触发时，执行回调。"),(0,t.Uk)("（比如可以用nextTick可以在dom异步渲染结束之后获取改变之后的数据等）")],-1),g=(0,t._)("p",null,[(0,t.Uk)("​ **原理及实现方式：**Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。"),(0,t._)("strong",null,"Vue 在内部尝试对异步队列使用原生的Promise.then和MessageChannel，如果执行环境不支持，会采用setTimeout(fn, 0)代替。")],-1),U=(0,t._)("p",null,"tip：基于事件循环机制，vue用异步队列的方式来控制DOM更新和nextTick回调执行，在事件队列中，微任务 ——> Dom渲染 ——> 宏任务，能确保队列中的微任务在进入下一次循环前执行完毕。",-1),x=(0,t._)("p",null,[(0,t._)("strong",null,"应用场景：")],-1),y=(0,t._)("ul",null,[(0,t._)("li",null,"在create中，对dom的操作这样放在nextTick中执行，因为在执行create时，dom还没挂载上去，此时如果有对dom的操作，就可以放在nextTick的回调中，等到dom渲染完成后，回调函数就会执行"),(0,t._)("li",null,"在数据变化后，要对一个依赖数据变化的dom元素进行操作")],-1),w=(0,t._)("h4",{id:"视图更新优化",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#视图更新优化","aria-hidden":"true"},"#"),(0,t.Uk)(" 视图更新优化：")],-1),D=(0,t._)("p",null,"​ Vue 视图更新 DOM 是异步执行的，检测到数据有变化，Vue 开启一个异步队列，下个 tick 更新视图。同一个 watcher 被多次触发，只会被推入到队列中一次。",-1),O=(0,t._)("hr",null,null,-1),j=(0,t._)("h2",{id:"vue-是如何对数组方法进行变异的",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue-是如何对数组方法进行变异的","aria-hidden":"true"},"#"),(0,t.Uk)(" vue 是如何对数组方法进行变异的 ?")],-1),M=(0,t._)("p",null,"答：vue以Array.prototype为基础创建一个新的对象ArrayObj，然后将重写了ArrayObj上的数组方法，最后将所要操作的数组同Object.setPrototype()强制改变数组的原型指向ArrayObj上。这样每个数组上就会有一个携带上它的Observe对象，一旦有新的值，就会调用Observe对象上的observeArray方法对新的值进行数据劫持，并且会手动调用notify方法更新",-1),V=(0,t._)("h2",{id:"vue-组件-data-为什么必须是函数",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue-组件-data-为什么必须是函数","aria-hidden":"true"},"#"),(0,t.Uk)(" Vue 组件 data 为什么必须是函数 ?")],-1),T=(0,t._)("p",null,"答：注册一个组件实质上是创建一个组件实例，而且组件是可以复用的，就会创造出更多的实例。如果组件data是一个对象时，所有组件data都会共享这个对象(即指向同一个内存地址)，导致修改其中一个属性就会影响其他组件上的同个属性。为了防止实例间 data 的冲突，将data设置成一个函数并return出一个对象，让每个组件都能各自维护一份独立拷贝的数据。",-1),A=(0,t._)("h2",{id:"聊聊-keep-alive-的实现原理和缓存策略",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#聊聊-keep-alive-的实现原理和缓存策略","aria-hidden":"true"},"#"),(0,t.Uk)(" 聊聊 keep-alive 的实现原理和缓存策略")],-1),$=(0,t._)("p",null,"答：缓存原理：1、获取keep-alive包裹着的子组件和组件名，2、根据include/exclude数组里的组件名进行匹配，决定是否走缓存还是直接返回组件实例，3、根据组件ID和tag生成缓存key，然后根据缓存策略对key进行处理。",-1),z=(0,t._)("p",null,"缓存策略：LRU缓存淘汰算法，核心思想就是如果数据最近被访问过，那么将来被访问的几率就更高，实际是每个组件都有一个key值，每次缓存一个组件都会在缓存数组中对应道组件key给移动到数组的最后面，并且缓存数组是有数量控制的，当达到一定数量后，缓存数组最前面、下标为0的一项会被删除。",-1),B=(0,t._)("h3",{id:"v-for-和-v-if不能一起用",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#v-for-和-v-if不能一起用","aria-hidden":"true"},"#"),(0,t.Uk)(" v-for 和 v-if不能一起用？")],-1),C=(0,t._)("p",null,"答： 涉及到优先级问题，v-for会比v-if优先执行",-1),E=(0,t._)("p",null,"如果v-if和v-for同一级的话会始终先循环v-for，然后在每个item上加上v-if。这样每个子项都要做一个v-if判断，会造成性能浪费（不会报错，会警告）",-1),W=(0,t._)("p",null,"解决方法：可以把v-if提到外层去,(可以用template替换div)",-1),P=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'### **new vue()发生了什么事情？**\n\n答：Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。 <div v-if="boolean">\n    <div v-for="(item, idx) in array" :key="idx"></div>\n</div>\n')]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br")])],-1),S=(0,t._)("h3",{id:"vue2中数组变化的限制-解决方法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue2中数组变化的限制-解决方法","aria-hidden":"true"},"#"),(0,t.Uk)(" vue2中数组变化的限制&解决方法")],-1),q=(0,t._)("p",null,"答：vue2检测不了数组的索引和数组长度的变化，原因是数组的下标和value无法固定对应，Object.defineProperty()的方法对数组劫持的实现不太理想，或者无法对数组进行劫持，这个问题在vue3中已经解决，vue2的解决方法是对数组的方法进行重写",-1),N=(0,t._)("p",null,"解决方法：$set,$detele,以及数组的方法splice。",-1),R=(0,t._)("hr",null,null,-1),I=(0,t._)("h3",{id:"v-if和v-show的区别",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#v-if和v-show的区别","aria-hidden":"true"},"#"),(0,t.Uk)(),(0,t._)("strong",null,"v-if和v-show的区别")],-1),Z=(0,t._)("p",null,"v-if：",-1),F=(0,t._)("ul",null,[(0,t._)("li",null,"只有在条件为true的时候才会去渲染元素，条件不成立不会生成对应的vnode，render也不会渲染"),(0,t._)("li",null,"适用于条件很少变化的场景，比如元素的显示和隐藏是一次性决定的那就用v-if")],-1),H=(0,t._)("p",null,"v-show",-1),L=(0,t._)("ul",null,[(0,t._)("li",null,"不管条件成不成立，都会生成vnode，render也会被渲染"),(0,t._)("li",null,'在不满足条件时，元素上增加一个style："display: none"的内敛样式'),(0,t._)("li",null,"适用于切换频繁的场景")],-1),Y=(0,t._)("hr",null,null,-1),G=(0,t._)("h3",{id:"v-cloak",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#v-cloak","aria-hidden":"true"},"#"),(0,t.Uk)(" v-cloak")],-1),J=(0,t._)("p",null,"用来解决插值表达式闪烁一下{undefined{obj.name}} 这个vue.js模板变量的问题",-1),K=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'html:\n<ul v-cloak v-for="item in obj">\n <li>{{ obj.name }}</li>\n</ul>\ncss:\n[v-cloak] {\n     display: none;\n}\n')]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br")])],-1),Q=(0,t._)("h1",{id:"vue的生命周期",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue的生命周期","aria-hidden":"true"},"#"),(0,t.Uk)(" vue的生命周期")],-1),X=(0,t._)("h6",{id:"",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),ee=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"呵呵呵"}),(0,t._)("img",{src:u,alt:"呵呵呵"})],-1),le=(0,t._)("h4",{id:"init-new-vue-发生了什么事情",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#init-new-vue-发生了什么事情","aria-hidden":"true"},"#"),(0,t.Uk)(" init："),(0,t._)("em",null,"new vue()发生了什么事情？")],-1),ne=(0,t._)("p",null,[(0,t._)("img",{src:s,alt:"呵呵呵"})],-1),te=(0,t._)("p",null,"Vue 初始化主要就干了几件事情，合并配置，**初始化生命周期，初始化事件，初始化渲染，初始化 data、props、computed、watcher 等等。 **",-1),ae=(0,t._)("p",null,"在初始化data时，会运行 observe 函数深度遍历数据中的每一个属性，进行数据劫持(Object.defineProperty),实现响应式。",-1),ue=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"beforeCreated")]),(0,t.Uk)(": 实例刚创建，此时还不能访问methods，data，computed等上的方法和数据，(因为如图中initState初始化data在beforeCreated后面执行)")],-1),se=(0,t._)("hr",null,null,-1),re=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"created")]),(0,t.Uk)(": 实例创建完成，属性已经完成数据劫持完成， "),(0,t._)("strong",null,[(0,t._)("code",null,"但还未生成真实dom，因为还没有挂载到页面上，")])],-1),_e=(0,t._)("p",null,[(0,t.Uk)("​ "),(0,t._)("strong",null,"可以调用methods里面的方法，data可以访问，可以获取computed中的计算属性等")],-1),oe=(0,t._)("hr",null,null,-1),ie=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"beforeMount")]),(0,t.Uk)("：挂载之前。")],-1),de=(0,t._)("p",null,[(0,t._)("strong",null,"编译阶段compile"),(0,t.Uk)(" ⬇️"),(0,t._)("strong",null,"挂载前的准备工作：")],-1),ce=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("查看是否有"),(0,t._)("code",null,"<template>"),(0,t.Uk)("(模板)，内部执行compile函数，解析成"),(0,t._)("code",null,"render function"),(0,t.Uk)("，")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"compile函数"),(0,t.Uk)("，包括parse（解析template为"),(0,t._)("strong",null,"AST"),(0,t.Uk)("抽象语法树），optimize（标记静态节点，在diff算法执行过程中会跳过这些静态节点，优化点），generate（"),(0,t._)("strong",null,"AST"),(0,t.Uk)("抽象语法树 --\x3e render function ）三个阶段。")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("模板编译执行"),(0,t._)("code",null,"render function"),(0,t.Uk)("渲染出虚拟dom，**此时还没有生成真实 DOM，因为还没真正挂载。**然后读取模板上插值表达式的值，触发getter函数，执行收集依赖，将订阅者Watcher添加进Dep中。")]),(0,t._)("p",null,"（当插值表达式的值发生改变时，会触发setter函数，通知Dep中对应的订阅者Watcher，执行update函数重新渲染页面）")])],-1),pe=(0,t._)("p",null,[(0,t._)("code",null,".vue"),(0,t.Uk)("文件: "),(0,t._)("code",null,"vue-loader"),(0,t.Uk)("会将"),(0,t._)("code",null,"<template>"),(0,t.Uk)("编译成"),(0,t._)("code",null,"render function"),(0,t.Uk)("*")],-1),ke=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"mounted")]),(0,t.Uk)("：组件挂载完成，可以拿到挂载对象$el，"),(0,t._)("strong",null,[(0,t.Uk)("真正生成真实dom，data、method 可访问、"),(0,t._)("em",null,"el 可访问"),(0,t.Uk)("。")])],-1),he=(0,t._)("p",null,"mounted只会执行一次。",-1),me=(0,t._)("hr",null,null,-1),fe=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"beforeUpdate")]),(0,t.Uk)("：更新前，发生在虚拟 DOM patch之前，在数据更新之前被调用")],-1),ve=(0,t._)("p",null,[(0,t.Uk)("​ ⬇️"),(0,t._)("strong",null,"更新的过程中：")],-1),be=(0,t._)("p",null,[(0,t.Uk)("数据变化触发 update 后，执行 render function 得到新的 VNode 节点，期间会执行"),(0,t._)("code",null,"diff"),(0,t.Uk)("算法，对比新旧的虚拟节点，得出最小的修改点，仅修改对应的dom节点。")],-1),ge=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"updated")]),(0,t.Uk)("：更新完成。此时，dom已经更新完毕！"),(0,t._)("strong",null,"如果有 nextTick 回调，会在视图更新后执行。")],-1),Ue=(0,t._)("hr",null,null,-1),xe=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"beforeDestroy")]),(0,t.Uk)("：实例销毁前。")],-1),ye=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,"这里实例仍然存在，仍然可以用this访问实例，")]),(0,t._)("li",null,[(0,t._)("p",null,"做一些清理工作，如清除计时器，移除绑定了 DOM/BOM 对象中的事件，")])],-1),we=(0,t._)("hr",null,null,-1),De=(0,t._)("p",null,[(0,t._)("strong",null,[(0,t._)("code",null,"destroyed")]),(0,t.Uk)("：销毁完成，组件销毁后调用，解绑指令，所有事件监听被移除（重点），所有子组件实例销毁，都不可用。")],-1),Oe=(0,t._)("hr",null,null,-1),je=(0,t._)("h4",{id:"关键节点简述",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#关键节点简述","aria-hidden":"true"},"#"),(0,t.Uk)(),(0,t._)("strong",null,"关键节点简述")],-1),Me=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,"创建阶段"),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"beforeCreate"),(0,t.Uk)("：【data、methods、el 均不可访问】")]),(0,t._)("li",null,"中间执行：初始化 data、methods、props、computed、watcher、provide。"),(0,t._)("li",null,[(0,t._)("code",null,"created"),(0,t.Uk)("：【data、methods 可访问、el 不可访问】【最早可访问 data】 "),(0,t._)("ul",null,[(0,t._)("li",null,"可以执行ajax请求数据")])])]),(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"created"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 允许并推荐"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$http"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"get"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("xxx"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"res"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("data "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("data\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 不允许"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$el\n  "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$ref"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("demo\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" a "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getElementById"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'demo'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br")])])]),(0,t._)("li",null,[(0,t._)("p",null,"挂载阶段"),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"beforeMount"),(0,t.Uk)("：【data、methods 可访问、el 不可访问】【虚拟 DOM 编译还在内存中，还未挂载】")]),(0,t._)("li",null,[(0,t._)("code",null,"mounted"),(0,t.Uk)("：【data、methods 可访问、el 可访问】【最早可操作 DOM】【页面已显示】")])]),(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"mounted"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// 允许"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$el\n    "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$ref"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("demo\n    "),(0,t._)("span",{class:"token keyword"},"let"),(0,t.Uk)(" a "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getElementById"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"''"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br")])])]),(0,t._)("li",null,[(0,t._)("p",null,"运行阶段"),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"beforeUpdate"),(0,t.Uk)("：【数据更新后执行】【data 数据是新的，但页面是旧的】")]),(0,t._)("li",null,[(0,t.Uk)("中间执行："),(0,t._)("code",null,"re-render和patch"),(0,t.Uk)("进行虚拟 DOM 的 diff 和更新渲染")]),(0,t._)("li",null,[(0,t._)("code",null,"updated"),(0,t.Uk)("：【视图更新完执行】【data 和页面都是最新的】")])])]),(0,t._)("li",null,[(0,t._)("p",null,"销毁阶段"),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"beforeDestroy"),(0,t.Uk)("：【实例的 data、methods、指令完全可用】")]),(0,t._)("li",null,[(0,t._)("code",null,"destroyed"),(0,t.Uk)("：【实例的 data、methods、指令都不可用】")]),(0,t._)("li",null,[(0,t.Uk)("触发销毁钩子的方法 "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("手动调用"),(0,t._)("code",null,"$destory()"),(0,t.Uk)("销毁组件实例")]),(0,t._)("li",null,"v-if 与 v-for 指令（v-show 不行）"),(0,t._)("li",null,"路由切换、关闭或刷新浏览器")])])])])],-1),Ve=(0,t._)("hr",null,null,-1),Te=(0,t._)("p",null,"【服务器端渲染】：beforeCreate、created，其他不可调用",-1),Ae=(0,t._)("p",null,"【异步请求常放在 created】：官方推荐在 mounted 中调用，实际上可以在 created 生命周期中调用（能更快获取到服务端数据，减少页面 loading 时间），如果需要在请求中修改dom，还是在mounted上。 服务端渲染时不支持 mounted，需要放到 created 中。",-1),$e=(0,t._)("p",null,"【最早访问 data】：在 created 钩子中可以对 data 数据进行操作，可以进行 ajax 请求将返回的数据赋给 data。",-1),ze=(0,t._)("h2",{id:"vue3-0的生命周期",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue3-0的生命周期","aria-hidden":"true"},"#"),(0,t.Uk)(" Vue3.0的生命周期")],-1),Be=(0,t._)("table",null,[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{style:{"text-align":"left"}},"Vue2"),(0,t._)("th",{style:{"text-align":"left"}},"Vue3")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"beforeCreate")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t.Uk)("❌"),(0,t._)("code",null,"setup"),(0,t.Uk)("(替代)")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"created")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t.Uk)("❌"),(0,t._)("code",null,"setup"),(0,t.Uk)("(替代)")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"beforeMount")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onBeforeMount")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"mounted")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onMounted")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"beforeUpdate")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onBeforeUpdate")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"updated")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onUpdated")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"beforeDestroy")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onBeforeUnmount")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"destroyed")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onUnmounted")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"errorCaptured")]),(0,t._)("td",{style:{"text-align":"left"}},[(0,t._)("code",null,"onErrorCaptured")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},"-"),(0,t._)("td",{style:{"text-align":"left"}},[(0,t.Uk)("🎉"),(0,t._)("code",null,"onRenderTracked")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"left"}},"-"),(0,t._)("td",{style:{"text-align":"left"}},[(0,t.Uk)("🎉"),(0,t._)("code",null,"onRenderTriggered")])])])],-1),Ce=(0,t._)("hr",null,null,-1),Ee=(0,t._)("h2",{id:"vue的渲染过程",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue的渲染过程","aria-hidden":"true"},"#"),(0,t.Uk)(" vue的渲染过程")],-1),We=(0,t._)("p",null,[(0,t._)("img",{src:r,alt:"呵呵呵"})],-1),Pe=(0,t._)("blockquote",null,[(0,t._)("p",null,"new Vue()调用 init 初始化 -> $mount 挂载 -> compile()编译模板 -> render function -> 响应式系统 -> 视图更新")],-1),Se=(0,t._)("blockquote",null,[(0,t._)("p",null,"响应式系统：render -> touch -> getter -> Dep 依赖收集 Watcher；setter -> Dep.notify -> Watcher.update() -> patch()进行 diff -> DOM")],-1),qe=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("分为四个阶段：初始化、挂载编译、响应式、视图更新 "),(0,t._)("ul",null,[(0,t._)("li",null,"1、初始化：new Vue():调用 init 函数初始化，包括生命周期、事件、props、data、methods、watch 等，还有数据劫持，通过 Object.defineProperty 设置 setter 和 getter 函数(同时将 this.data.test 代理成 this.test)，用于后续的依赖收集和响应式。"),(0,t._)("li",null,"2、编译挂载：初始化后调用$mount 挂载组件，有 template 的情况下，内部执行 compile()编译，包括 parse（解析 template 转成 AST） 、 optimize(标记静态节点、用于 diff 优化跳过静态节点) 与 generate（AST -> render function） 三个阶段，最终得到 render function，用来渲染 VNode，然后生成真实 DOM 显示在页面上。"),(0,t._)("li",null,"3、响应式：render function 被渲染，读取所需对象的值，触发 getter 函数，执行依赖收集，将订阅者 Watcher 添加 Dep 订阅器中。修改对象的值时触发 setter，通知 Dep 订阅器中的订阅者 Watcher，需要重新渲染视图，然后 Watcher 调用 update 进行更新。"),(0,t._)("li",null,"4、视图更新：数据变化触发 update 后，执行 render function 得到新的 VNode 节点，与旧的 VNode 一起传入 patch 进行比较，经过 diff 算法得到「 差异」，根据差异来修改对应的 DOM。")])])],-1),Ne=(0,t._)("hr",null,null,-1),Re={},Ie=(0,n(3744).Z)(Re,[["render",function(e,l){return(0,t.wg)(),(0,t.iD)(t.HY,null,[_,o,i,d,c,p,k,h,m,f,v,b,g,U,x,y,w,D,O,j,M,V,T,A,$,z,B,C,E,W,P,S,q,N,R,I,Z,F,H,L,Y,G,J,K,Q,X,ee,le,ne,te,ae,ue,se,re,_e,oe,ie,de,ce,pe,ke,he,me,fe,ve,be,ge,Ue,xe,ye,we,De,Oe,je,Me,Ve,Te,Ae,$e,ze,Be,Ce,Ee,We,Pe,Se,qe,Ne],64)}]])},3744:(e,l)=>{l.Z=(e,l)=>{const n=e.__vccOpts||e;for(const[e,t]of l)n[e]=t;return n}},5064:(e,l,n)=>{e.exports=n.p+"assets/img/15.72d25a7f.png"},4175:(e,l,n)=>{e.exports=n.p+"assets/img/16.532748dc.png"},4185:(e,l,n)=>{e.exports=n.p+"assets/img/17.e31ea7b4.png"},7506:(e,l,n)=>{e.exports=n.p+"assets/img/18.3f87837c.png"}}]);