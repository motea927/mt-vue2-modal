import{_ as n,c as s,o as a,a as t}from"./app.67c98fe3.js";const m='{"title":"Getting Started","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"guide/getting-started.md","lastUpdated":1642562613454}',p={},o=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>This section will help you to use mt-vue2-modal.</p><ul><li><strong>Step. 1:</strong> Installation.</li></ul><div class="language-bash"><pre><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> mt-vue2-modal

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> --save mt-vue2-modal
</code></pre></div><ul><li><strong>Step. 2:</strong> Global Register plugin</li></ul><div class="language-js"><pre><code><span class="token comment">// import MtVue2Modal &amp; Vue.use</span>
<span class="token keyword">import</span> MtVue2Modal <span class="token keyword">from</span> <span class="token string">&#39;mt-vue2-modal&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MtVue2Modal<span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>Step. 3:</strong> Use <code>showDefaultModal</code> or <code>show</code></li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>showModal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">onClickShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isSubmit <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$mtModal<span class="token punctuation">.</span><span class="token function">showDefaultModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSubmit<span class="token punctuation">)</span> <span class="token keyword">return</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You can do anything after click modal submit&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,8),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
