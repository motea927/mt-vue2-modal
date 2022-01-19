import{_ as n,c as a,o as s,a as t}from"./app.67c98fe3.js";const g='{"title":"mt-vue2-modal","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"Motivation","slug":"motivation"},{"level":3,"title":"dynamic-component","slug":"dynamic-component"},{"level":3,"title":"Use mt-vue2-modal","slug":"use-mt-vue2-modal"}],"relativePath":"index.md","lastUpdated":1642563340506}',p={},o=t(`<h1 id="mt-vue2-modal" tabindex="-1">mt-vue2-modal <a class="header-anchor" href="#mt-vue2-modal" aria-hidden="true">#</a></h1><p>mt-vue2-modal is a promise based, highly customize modal component for vue2.</p><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-hidden="true">#</a></h2><p>Suppose your application has many different modal components, if you use <a href="https://vuejs.org/v2/guide/components-dynamic-async.html" target="_blank" rel="noopener noreferrer">dynamic-component</a>, you will find that your business logic is around all of components, that will hard to read and hard maintainable, so use promise based modal component can improve code readability and management.</p><h3 id="dynamic-component" tabindex="-1">dynamic-component <a class="header-anchor" href="#dynamic-component" aria-hidden="true">#</a></h3><p>If you use <a href="https://vuejs.org/v2/guide/components-dynamic-async.html" target="_blank" rel="noopener noreferrer">dynamic-component</a>, your code will like below.</p><p>Suppose your logic in onClickButton, when you do this.updateCurrentModal, your logic will end and jump to <code>SelectModal</code></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>do something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;Modal&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;updateCurrentModal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">onClickButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do something, validation, etc.</span>
      <span class="token comment">// Maybe you need others code to pass some parameters to vuex for modal before show SelectModal</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateCurrentModal</span><span class="token punctuation">(</span><span class="token string">&#39;SelectModal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>This is all modal entry.</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Modal Entry --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTabComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> SelectModal <span class="token keyword">from</span> <span class="token string">&#39;./SelectModal&#39;</span>
<span class="token comment">// Import others modal</span>
<span class="token comment">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    SelectModal<span class="token punctuation">,</span>
    <span class="token comment">// others modal</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;Modal&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;currentTabComponent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Your business logic will continue on here</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- SelectModal --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickSelectItem<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ i }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;Modal&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;updateCurrentModal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">onClickSelectItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Do something, validation, etc.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateCurrentModal</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// Your business logic will continue on here</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Above example is one modal, if your have much modal components, that will hard to read and hard maintainable</p><h3 id="use-mt-vue2-modal" tabindex="-1">Use mt-vue2-modal <a class="header-anchor" href="#use-mt-vue2-modal" aria-hidden="true">#</a></h3><p>Let us show you use mt-vue2-modal to make the code clean and easy to read.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>do something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">import</span> SelectModal <span class="token keyword">from</span> <span class="token string">&#39;./SelectModal&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;Modal&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;updateCurrentModal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">onClickButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Do something, validation, etc.</span>
      <span class="token keyword">const</span> selectIndex <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$mtModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> SelectModal<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selectIndex<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token comment">// Continue your business logic</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- SelectModal --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickSelectItem(i)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ i }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onClickSelectItem</span><span class="token punctuation">(</span><span class="token parameter">selectIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Do something, validation, etc.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;closed&#39;</span><span class="token punctuation">,</span> selectIndex<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>We can see that business logic on onClickButton.</p>`,18),e=[o];function c(l,u,k,i,r,d){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
