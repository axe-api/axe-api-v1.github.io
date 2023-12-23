import{_ as s,c as i,o as a,R as e}from"./chunks/framework.IIHvPPZM.js";const E=JSON.parse('{"title":"paginate()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-paginate.md","filePath":"reference/client-paginate.md"}'),t={name:"reference/client-paginate.md"},n=e(`<h1 id="paginate" tabindex="-1"><code>paginate()</code> <a class="header-anchor" href="#paginate" aria-label="Permalink to &quot;\`paginate()\`&quot;">​</a></h1><p>You can use this function to paginate the resource.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api-client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;users&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">paginate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  page: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  perPage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><ul><li><code>IPaginate</code><ul><li><code>page</code>: The current page. The default value is <code>1</code>. It is optional.</li><li><code>perPage</code>: The value shows how many items will be fetched for each page. The default value is <code>10</code>. It is optional.</li></ul></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource(url: string)</code> function before using this function.</p></div>`,5),l=[n];function p(h,o,c,k,r,d){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{E as __pageData,u as default};
