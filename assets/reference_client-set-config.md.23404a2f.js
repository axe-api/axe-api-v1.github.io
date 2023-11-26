import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.ddc2bfae.js";const h=JSON.parse('{"title":"setConfig()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-set-config.md","filePath":"reference/client-set-config.md"}'),o={name:"reference/client-set-config.md"},l=e(`<h1 id="setconfig" tabindex="-1"><code>setConfig()</code> <a class="header-anchor" href="#setconfig" aria-label="Permalink to &quot;\`setConfig()\`&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">api.</span><span style="color:#B392F0;">setConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: </span><span style="color:#9ECBFF;">&quot;https://your-domain.com/api/v1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;x-my-common-header&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my-value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  params: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">api.</span><span style="color:#6F42C1;">setConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  baseURL: </span><span style="color:#032F62;">&quot;https://your-domain.com/api/v1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  headers: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;x-my-common-header&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;my-value&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  params: {},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><ul><li><code>baseURL</code>: The main URL of the Axe API server. You can add the version name if you want.</li><li><code>headers</code>: The default headers that you want to add.</li><li><code>params</code>: The default params that you want to add.</li></ul>`,3),p=[l];function t(c,r,i,E,d,y){return n(),a("div",null,p)}const m=s(o,[["render",t]]);export{h as __pageData,m as default};