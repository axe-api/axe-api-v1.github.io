import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.ddc2bfae.js";const h=JSON.parse('{"title":"patch()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-patch.md","filePath":"reference/client-patch.md"}'),p={name:"reference/client-patch.md"},e=o(`<h1 id="patch" tabindex="-1"><code>patch()</code> <a class="header-anchor" href="#patch" aria-label="Permalink to &quot;\`patch()\`&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">resource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users/1&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">patch</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  surname: </span><span style="color:#9ECBFF;">&quot;Popper&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">user</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">resource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users/1&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">patch</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  surname: </span><span style="color:#032F62;">&quot;Popper&quot;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><ul><li><code>data</code>: The data object that you want to patch by the resource.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource(url: string)</code> function before using this function.</p></div>`,4),l=[e];function t(c,r,i,E,y,u){return n(),a("div",null,l)}const _=s(p,[["render",t]]);export{h as __pageData,_ as default};