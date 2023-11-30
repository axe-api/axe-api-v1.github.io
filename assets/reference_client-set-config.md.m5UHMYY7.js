import{_ as s,c as a,o as i,R as e}from"./chunks/framework.Kvze0q-R.js";const g=JSON.parse('{"title":"setConfig()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-set-config.md","filePath":"reference/client-set-config.md"}'),n={name:"reference/client-set-config.md"},t=e(`<h1 id="setconfig" tabindex="-1"><code>setConfig()</code> <a class="header-anchor" href="#setconfig" aria-label="Permalink to &quot;\`setConfig()\`&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api-client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://your-domain.com/api/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;x-my-common-header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-value&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  params: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ul><li><code>baseURL</code>: The main URL of the Axe API server. You can add the version name if you want.</li><li><code>headers</code>: The default headers that you want to add.</li><li><code>params</code>: The default params that you want to add.</li></ul>`,3),l=[t];function h(p,o,r,d,c,k){return i(),a("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
