import{_ as s,c as i,o as a,a9 as e}from"./chunks/framework.DYBOBc8m.js";const m=JSON.parse('{"title":"Model.limits()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-limits.md","filePath":"reference/model-limits.md"}'),n={name:"reference/model-limits.md"},t=e(`<h1 id="model-limits" tabindex="-1">Model.<code>limits()</code> <a class="header-anchor" href="#model-limits" aria-label="Permalink to &quot;Model.\`limits()\`&quot;">​</a></h1><p>You can allow and deny model-based query feature features in here.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model, QueryFeature, allow, deny } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> limits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      allow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(QueryFeature.WhereLike, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      deny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(QueryFeature.WithHasMany),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find more information in <a href="/reference/version-configs.html#query-limits">Config - Limits</a> section.</p></div>`,4),l=[t];function p(h,k,r,d,o,c){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{m as __pageData,y as default};