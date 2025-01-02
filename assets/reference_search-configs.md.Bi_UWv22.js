import{_ as s,c as i,o as a,a9 as e}from"./chunks/framework.DgZLXPSQ.js";const f=JSON.parse('{"title":"Search Configs","description":"","frontmatter":{},"headers":[],"relativePath":"reference/search-configs.md","filePath":"reference/search-configs.md"}'),n={name:"reference/search-configs.md"},t=e(`<h1 id="search-configs" tabindex="-1">Search Configs <a class="header-anchor" href="#search-configs" aria-label="Permalink to &quot;Search Configs&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Currently, the full-text search feature is <strong>EXPERIMENTAL</strong>.</p><p>Still, we strongly suggest to use it in some little parts of your application.</p></div><p>Axe API provides an full-text search configuration</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IDf9B" id="tab-umn0iEJ" checked><label for="tab-umn0iEJ">app/config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IApplicationConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IApplicationConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  search: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    indexPrefix: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;axe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config;</span></span></code></pre></div></div></div><h2 id="indexprefix" tabindex="-1"><code>indexPrefix</code> <a class="header-anchor" href="#indexprefix" aria-label="Permalink to &quot;\`indexPrefix\`&quot;">​</a></h2><p>You can set a prefix for the model index name prefix.</p><p>Let&#39;s assume that you have a model named <code>User</code>.</p><p>If you set the <code>indexPrefix</code> value as <code>my-api</code>, then the index name would be <code>my-api-user</code>.</p>`,8),p=[t];function l(h,o,r,c,d,k){return a(),i("div",null,p)}const E=s(n,[["render",l]]);export{f as __pageData,E as default};