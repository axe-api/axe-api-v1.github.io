import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.18efe07a.js";const g=JSON.parse('{"title":"paginate()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-paginate.md","filePath":"reference/client-paginate.md"}'),o={name:"reference/client-paginate.md"},p=e(`<h1 id="paginate" tabindex="-1"><code>paginate()</code> <a class="header-anchor" href="#paginate" aria-label="Permalink to &quot;\`paginate()\`&quot;">​</a></h1><p>You can use this function to paginate the resource.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">resource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">paginate</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  page: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  perPage: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">resource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">paginate</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  page: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  perPage: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><ul><li><code>IPaginate</code><ul><li><code>page</code>: The current page. The default value is <code>1</code>. It is optional.</li><li><code>perPage</code>: The value shows how many items will be fetched for each page. The default value is <code>10</code>. It is optional.</li></ul></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource(url: string)</code> function before using this function.</p></div>`,5),l=[p];function t(c,r,i,E,y,d){return a(),n("div",null,l)}const h=s(o,[["render",t]]);export{g as __pageData,h as default};
