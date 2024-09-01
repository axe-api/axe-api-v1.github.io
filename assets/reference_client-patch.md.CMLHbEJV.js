import{_ as s,c as i,o as a,a9 as t}from"./chunks/framework.DYBOBc8m.js";const u=JSON.parse('{"title":"patch()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-patch.md","filePath":"reference/client-patch.md"}'),e={name:"reference/client-patch.md"},n=t(`<h1 id="patch" tabindex="-1"><code>patch()</code> <a class="header-anchor" href="#patch" aria-label="Permalink to &quot;\`patch()\`&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api-client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;users/1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  surname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Popper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ul><li><code>data</code>: The data object that you want to patch by the resource.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource(url: string)</code> function before using this function.</p></div>`,4),h=[n];function p(l,c,k,r,o,d){return a(),i("div",null,h)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};
