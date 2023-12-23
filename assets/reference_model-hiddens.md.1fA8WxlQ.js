import{_ as s,c as i,o as a,R as e}from"./chunks/framework.IIHvPPZM.js";const u=JSON.parse('{"title":"Model.hiddens()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-hiddens.md","filePath":"reference/model-hiddens.md"}'),n={name:"reference/model-hiddens.md"},t=e(`<h1 id="model-hiddens" tabindex="-1">Model.<code>hiddens()</code> <a class="header-anchor" href="#model-hiddens" aria-label="Permalink to &quot;Model.\`hiddens()\`&quot;">​</a></h1><p>You may want to hide some columns in your API results when you have some sensitive information such as password hash. In this case, you should use the following getters to define which columns will be hide;</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hiddens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password_hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This definition will be used for all queries, even recursive queries too. You can check the <strong>Queries</strong> section to learn more about queries.</p></div>`,4),l=[t];function h(p,d,o,r,k,c){return a(),i("div",null,l)}const g=s(n,[["render",h]]);export{u as __pageData,g as default};
