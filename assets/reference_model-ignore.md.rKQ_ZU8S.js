import{_ as s,c as i,o as e,R as a}from"./chunks/framework.Kvze0q-R.js";const E=JSON.parse('{"title":"Model.ignore()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-ignore.md","filePath":"reference/model-ignore.md"}'),n={name:"reference/model-ignore.md"},t=a(`<h1 id="model-ignore" tabindex="-1">Model.<code>ignore()</code> <a class="header-anchor" href="#model-ignore" aria-label="Permalink to &quot;Model.\`ignore()\`&quot;">​</a></h1><p>In case you don&#39;t want to create routes for a model, Axe API provides ignore getter. Using the ignore getter you can block the model for auto-route creation. By default, ignore getter returns false. But you can change the value like the following code;</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ignore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div><p>With this configuration, <code>User</code> model&#39;s routes wouldn&#39;t be created automatically.</p>`,4),l=[t];function o(r,h,p,d,k,c){return e(),i("div",null,l)}const u=s(n,[["render",o]]);export{E as __pageData,u as default};
