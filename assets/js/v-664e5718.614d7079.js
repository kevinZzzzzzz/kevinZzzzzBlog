"use strict";(self.webpackChunkkevinBlog=self.webpackChunkkevinBlog||[]).push([[144],{742:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-664e5718",path:"/pages/base/html.html",title:"",lang:"zh-cn",frontmatter:{},excerpt:"",headers:[{level:2,title:"HTML 语义化",slug:"html-语义化",children:[]},{level:2,title:"SEO（搜索引擎优化）",slug:"seo-搜索引擎优化",children:[]},{level:2,title:"DOCTYPE",slug:"doctype",children:[]},{level:2,title:"HTML 5 新标签",slug:"html-5-新标签",children:[]},{level:2,title:"常用的meta标签",slug:"常用的meta标签",children:[]},{level:2,title:"Label标签",slug:"label标签",children:[]},{level:2,title:"易混淆的标签",slug:"易混淆的标签",children:[]},{level:2,title:"标准模式和兼容模式",slug:"标准模式和兼容模式",children:[]},{level:2,title:"行内元素、块级元素、空元素",slug:"行内元素、块级元素、空元素",children:[]},{level:2,title:"src(引入文件)和href(链接跳转)的区别",slug:"src-引入文件-和href-链接跳转-的区别",children:[]},{level:2,title:"DOM事件模型 ✨",slug:"dom事件模型-✨",children:[]}],filePathRelative:"pages/base/html.md",git:{updatedTime:1662212859e3,contributors:[{name:"kevinZzzzzzzz",email:"jie736805161@qq.com",commits:1}]}}},8584:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});const t=(0,s(6252).uE)('<h2 id="html-语义化" tabindex="-1"><a class="header-anchor" href="#html-语义化" aria-hidden="true">#</a> HTML 语义化</h2><ul><li><p>概念：正确的html标签做正确的事情，让页面具有良好结构和含义。 如：p代表段落，article代表正文，nav代表导航，section代表章节</p></li><li><p>好处：</p><ul><li>1、页面结构清晰，方便阅读维护，支持读屏软件。</li><li>2、利于seo，爬虫更好获取信息，提升搜索量。</li></ul></li><li><p>缺点： 冗余标签，导致嵌套过多。</p></li><li><p>使用原则：</p><ul><li>1、用对比不用好，不用比用错好。</li><li>2、明确场景可使用语义化： <ul><li>页面整体结构（header、nav、aside、section、footer）</li><li>自然语言的补充、比如重音（em）、注音（ruby）</li></ul></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// 语义化标签示例：\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>\n            ……\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>\n            ……\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>……<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>……<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>……<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>……<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ul><h2 id="seo-搜索引擎优化" tabindex="-1"><a class="header-anchor" href="#seo-搜索引擎优化" aria-hidden="true">#</a> SEO（搜索引擎优化）</h2><ul><li>利用搜索引擎的规则</li><li>提高网站在有关搜索内的自然排名</li></ul><h2 id="doctype" tabindex="-1"><a class="header-anchor" href="#doctype" aria-hidden="true">#</a> DOCTYPE</h2><ul><li><code>&lt;!DOCTYPE html&gt;</code> 声明文档类型和引入DTD规范(H4.0.1才需要DTD)</li><li>作用：告知浏览器的解析器用什么文档标准解析这个文档。</li><li>必须声明在HTML文档的第一行。</li></ul><h2 id="html-5-新标签" tabindex="-1"><a class="header-anchor" href="#html-5-新标签" aria-hidden="true">#</a> HTML 5 新标签</h2><ul><li><code>&lt;header&gt;</code>：定义了文档的头部区域</li><li><code>&lt;footer&gt;</code>：定义 section 或 document 的页脚。</li><li><code>&lt;article&gt;</code>：定义页面独立的内容区域</li><li><code>&lt;aside&gt;</code>：定义页面的侧边栏内容</li><li><code>&lt;nav&gt;</code>：定义导航链接的部分。</li><li><code>&lt;video&gt;</code>：定义视频（video 或者 movie）</li><li><code>&lt;audio&gt;</code>：定义音频内容</li><li><code>&lt;canvas&gt;</code>：标签定义图形 ...</li></ul><h2 id="常用的meta标签" tabindex="-1"><a class="header-anchor" href="#常用的meta标签" aria-hidden="true">#</a> 常用的meta标签</h2><p>meta标签由name和content两个属性来定义，来描述一个HTML网页文档的元信息</p><ul><li>viewport —— 可以控制视口的大小和比例</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>keywords —— 关键词，用于搜索引擎</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTML, CSS, XML, XHTML, JavaScript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>charset —— 描述HTML文档的编码形式（HTML5 中，有一个新的 charset 属性）</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>http-equiv —— 通过content属性设置http头部,可以设置http的缓存过期日期</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>expires<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Wed, 20 Jun 2019 22:33:00 GMT<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="label标签" tabindex="-1"><a class="header-anchor" href="#label标签" aria-hidden="true">#</a> Label标签</h2><ul><li>将该标签显示的内容绑定对应的表单控件。</li><li>将<code>&lt;label&gt;</code> 标签的 for 属性和控件的id设置为相同即可。</li><li>多个控件(input)的name设为相同可限制单选一个，如sex性别，选男或女。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Female<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="易混淆的标签" tabindex="-1"><a class="header-anchor" href="#易混淆的标签" aria-hidden="true">#</a> 易混淆的标签</h2><ul><li>title 和 h1 <ul><li><code>&lt;title&gt;</code> 单纯的标题，放在head中浏览器会特殊处理，放在标题栏上</li><li><code>&lt;h1&gt;</code> 标题 + 层次明确，对页面信息的抓取有很大的影响</li></ul></li><li>b 和 strong <ul><li><code>&lt;b&gt;</code> 单纯的粗体</li><li><code>&lt;strong&gt;</code> 粗体 + 语气更强的强调，使用阅读设备<code>&lt;strong&gt;</code>会重读</li></ul></li><li>i 和 em <ul><li><code>&lt;i&gt;</code> 单纯的斜体</li><li><code>&lt;em&gt;</code> 斜体 + 强调</li></ul></li></ul><h2 id="标准模式和兼容模式" tabindex="-1"><a class="header-anchor" href="#标准模式和兼容模式" aria-hidden="true">#</a> 标准模式和兼容模式</h2><ul><li>标准模式：排版和js都以浏览器最高标准执行</li><li>兼容模式：以宽松的向后兼容方式显示，模拟老式浏览器的行为，以防无法正常工作。</li><li>比如：360浏览器里有着两个浏览器内核，一个是极速模式用的谷歌浏览器Chrome（Chrommium内核），另外一个是兼容模式用IE浏览器IE（Trident内核）</li></ul><h2 id="行内元素、块级元素、空元素" tabindex="-1"><a class="header-anchor" href="#行内元素、块级元素、空元素" aria-hidden="true">#</a> 行内元素、块级元素、空元素</h2><blockquote><p>CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值。如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。</p></blockquote><p>默认情况下</p><ul><li>行内元素不会以新行开始，块级元素会新起一行。</li><li>行内元素只能包含数据和其他行内元素，块级元素可以包含行内元素和其他块级元素。</li><li>块级元素只能出现在 <code>&lt;body&gt;</code> 元素内。</li></ul><ol><li>行内元素有：a b span img input select button em strong ...（强调的语气）</li><li>块级元素有：div ul ol li dl dd h1…h6 p table form ...</li><li>常见的空元素：<code>&lt;br&gt;换行</code> <code>&lt;hr&gt;分割线</code> <code>&lt;img&gt;</code> <code>&lt;input&gt;</code> <code>&lt;link&gt;</code> <code>&lt;meta&gt;</code>... (在开始标签加斜杠表示闭合空元素，如<code>&lt;br /&gt;</code>)</li></ol><h2 id="src-引入文件-和href-链接跳转-的区别" tabindex="-1"><a class="header-anchor" href="#src-引入文件-和href-链接跳转-的区别" aria-hidden="true">#</a> src(引入文件)和href(链接跳转)的区别</h2><ul><li>src表示来源地址，是<strong>引入</strong>。 <ul><li>用于 img、script、iframe等</li><li>解析到该元素，暂停其他资源下载和处理，直到加载执行完毕，js一般放底部。</li></ul></li><li>href表示超文本<strong>引用</strong>，指向需要连接的资源位置。 <ul><li>用于link和a等</li><li>并行下载，不会暂停当前处理。</li></ul></li></ul><h2 id="dom事件模型-✨" tabindex="-1"><a class="header-anchor" href="#dom事件模型-✨" aria-hidden="true">#</a> DOM事件模型 ✨</h2><ul><li><p>DOM 0/2/3 级别</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// DOM0</span>\nelement<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment">// DOM2</span>\nelement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token comment">// DOM3</span>\nelement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token comment">//例子：</span>\n<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getELementById</span><span class="token punctuation">(</span><span class="token string">&#39;myBtn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;clicked&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\nbtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;clicked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>参数： <ul><li>事件名</li><li>事件处理函数</li><li>布尔值：true表示在捕获阶段调用处理函数，false表示在冒泡阶段调用处理函数。一般推荐放在冒泡阶段，兼容多个浏览器，不是特别需要在到达目标前截获就不放在捕获阶段。</li></ul></li><li>DOM2/3可为同一元素添加多个事件处理程序，按照添加顺序依次触发。</li></ul></li><li><p>DOM2事件模型</p><ul><li>三个阶段：第一阶段捕获，第二阶段目标阶段，第三阶段冒泡阶段</li><li>捕获流程(从最外层一层层进入)：window -&gt; document -&gt; html -&gt; body -&gt;... -&gt; 目标元素</li><li>冒泡流程(从最里层一层层出去)：目标元素-&gt; ... -&gt; body-&gt; html -&gt; document -&gt; window</li><li>当addEventListener方法的<strong>第三个参数为true时，表示只进行事件捕获，不执行事件冒泡</strong>，在捕获的过程中，触发途径标签的对应事件函数。当第三个参数为false，表示执行事件冒泡的过程（默认情况）</li></ul></li><li><p>DOM3级事件在DOM2级事件的基础上添加了更多的事件类型,全部类型如下：</p><ul><li>UI事件，当用户与页面上的元素交互时触发，如：load、scroll、resize</li><li>焦点事件，当元素获得或失去焦点时触发，如：blur、focus</li><li>鼠标事件，当用户通过鼠标在页面执行操作时触发如：click、dbclick、mouseup</li><li>滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel（已废弃，现为WheelEvent.deltaX横线滚动量）</li><li>文本事件，当在文档中输入文本时触发，如：textInput</li><li>键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress、keyup</li><li>合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart</li></ul></li><li><p>event对象</p><ul><li>event.preventDefault() 阻止默认事件（如a标签点击默认跳转）</li><li>event.stopPropagation() 阻止事件捕获或冒泡（父元素不响应）</li><li>event.stopImmediatePropagation() 阻止捕获或冒泡，且阻止其他事件执行。如同个按钮两个函数，可在a中阻止b。</li><li>event.currentTarget 正在处理事件的对象（挂载onclick的对象），总是等于事件处理函数内部this</li><li>event.target 父元素绑定事件监听子元素，表示被触发的那个子元素。</li><li>当挂载监听事件和触发是同个dom，则target和currentTarget和this是同一个。</li></ul></li><li><p>事件委托</p><ul><li>定义：利用事件冒泡，只指定一个事件处理程序，管理某一事件类型的所有事件，不必在每个元素上添加事件处理程序。</li><li>实现：在DOM树更高的层次添加事件处理程序，如给父组件添加事件，通过事件冒泡，排查触发事件的子元素是否为指定元素，并进行对应的处理。</li><li>优点：DOM引用减少，占用内存减少，提高性能。</li><li>应用：一个按钮是异步生成的，对它绑定事件</li><li>适合采用事件委托的：click、mousedown、mouseup、keydown、keyup和keypress。</li></ul></li><li><p>移除事件监听</p><ul><li><p>为了避免DOM被移除或者页面卸载时候，事件处理程序的引用仍保存在内存中，无法回收。</p></li><li><p>方法：</p><ul><li>1、DOM 0级： btn.onclick = null; DOM2/3级：btn.removeEventListener(&quot;click&quot;,handler,false);</li><li>2、在页面卸载时监听的onunload事件中，移除所有事件处理程序。</li></ul><blockquote><p>注意removeEventListener(&quot;click&quot;,handler,false);和addEventListener(&quot;click&quot;,handler,false);是同一个处理函数。</p></blockquote></li></ul></li></ul>',34),e={},l=(0,s(3744).Z)(e,[["render",function(n,a){return t}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);