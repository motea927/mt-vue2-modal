import{_ as t,c as n,o as a,a as s}from"./app.67c98fe3.js";const g='{"title":"API Reference","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"$mtModal.showDefaultModal(options)","slug":"mtmodal-showdefaultmodal-options"},{"level":2,"title":"$mtModal.show(options)","slug":"mtmodal-show-options"}],"relativePath":"advance/api-reference.md","lastUpdated":1642577059237}',e={},p=s(`<h1 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-hidden="true">#</a></h1><h2 id="mtmodal-showdefaultmodal-options" tabindex="-1"><code>$mtModal.showDefaultModal(options)</code> <a class="header-anchor" href="#mtmodal-showdefaultmodal-options" aria-hidden="true">#</a></h2><p>This is default modal method, we recommend to use custom modal to customize your need.</p><p>The API methods accepts these options:</p><p><code>componentAttrs</code>: Set default modal style (width, height, color, etc.) and content</p><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">width</td><td style="text-align:center;">String</td><td style="text-align:center;">80vw</td><td style="text-align:left;">Set default modal style width</td></tr><tr><td style="text-align:left;">maxWidth</td><td style="text-align:center;">String</td><td style="text-align:center;">600px</td><td style="text-align:left;">Set default modal style maxWidth</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:center;">String</td><td style="text-align:center;">60vh</td><td style="text-align:left;">Set default modal style height</td></tr><tr><td style="text-align:left;">maxHeight</td><td style="text-align:center;">String</td><td style="text-align:center;">300px</td><td style="text-align:left;">Set default modal style maxHeight</td></tr><tr><td style="text-align:left;">themeColor</td><td style="text-align:center;">String</td><td style="text-align:center;">#ffdf5e</td><td style="text-align:left;">Set default modal theme color</td></tr><tr><td style="text-align:left;">content</td><td style="text-align:center;">String</td><td style="text-align:center;">Lorem</td><td style="text-align:left;">Default modal content</td></tr><tr><td style="text-align:left;">showCancelButton</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">show cancel button</td></tr><tr><td style="text-align:left;">cancelButtonText</td><td style="text-align:center;">String</td><td style="text-align:center;">cancel</td><td style="text-align:left;">cancel button text</td></tr><tr><td style="text-align:left;">submitButtonText</td><td style="text-align:center;">String</td><td style="text-align:center;">submit</td><td style="text-align:left;">button text</td></tr></tbody></table><p><code>overlay</code>: Set default modal overlay (background, transition)</p><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">background</td><td style="text-align:center;">String</td><td style="text-align:center;">rgba(0, 0, 0, .8)</td><td style="text-align:left;">Set default modal style background</td></tr><tr><td style="text-align:left;">transitionName</td><td style="text-align:center;">String</td><td style="text-align:center;">mt-modal-overlay-fade</td><td style="text-align:left;">Set default modal transition name</td></tr></tbody></table><p><code>modal</code>: Set default modal body</p><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">transitionName</td><td style="text-align:center;">String</td><td style="text-align:center;">mt-modal-overlay-slide-fade</td><td style="text-align:left;">Set default modal body transition name</td></tr></tbody></table><p>example:</p><div class="language-js"><pre><code><span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$mtModal<span class="token punctuation">.</span><span class="token function">showDefaultModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">componentAttrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;80vw&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> <span class="token string">&#39;600px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;60vh&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">&#39;#ffdf5e&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showCancelButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;cancel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">submitButtonText</span><span class="token operator">:</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, .8)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;mt-modal-overlay-fade&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;mt-modal-overlay-slide-fade&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="mtmodal-show-options" tabindex="-1"><code>$mtModal.show(options)</code> <a class="header-anchor" href="#mtmodal-show-options" aria-hidden="true">#</a></h2><p>This is custom modal method, use custom component and props to customize modal.</p><p>The API methods accepts these options:</p><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">component(required)</td><td style="text-align:center;">Vue component</td><td style="text-align:center;">null</td><td style="text-align:left;">Pass custom component</td></tr><tr><td style="text-align:left;">componentAttrs</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:left;">Custom Props</td></tr><tr><td style="text-align:left;">overlay</td><td style="text-align:center;">Object</td><td style="text-align:center;"><code>{ background: &#39;rgba(0, 0, 0, .8)&#39;, transitionName: &#39;mt-modal-overlay-fade&#39; }</code></td><td style="text-align:left;">Custom Overlay</td></tr><tr><td style="text-align:left;">modal</td><td style="text-align:center;">Object</td><td style="text-align:center;"><code>{ transitionName: &#39;mt-modal-overlay-slide-fade&#39; }</code></td><td style="text-align:left;">Custom modal transition</td></tr></tbody></table><p>example:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> customModal <span class="token keyword">from</span> <span class="token string">&#39;./customModal.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$mtModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> customModal<span class="token punctuation">,</span>
      <span class="token literal-property property">componentAttrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, .8)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;mt-modal-overlay-fade&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;mt-modal-overlay-slide-fade&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>customModal.vue:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>closed<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>return value<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,20),o=[p];function l(c,r,i,d,u,k){return a(),n("div",null,o)}var m=t(e,[["render",l]]);export{g as __pageData,m as default};