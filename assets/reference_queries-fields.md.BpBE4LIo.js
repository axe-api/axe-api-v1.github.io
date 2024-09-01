import{_ as s,c as e,o as i,a9 as a}from"./chunks/framework.DYBOBc8m.js";const _=JSON.parse('{"title":"fields","description":"","frontmatter":{},"headers":[],"relativePath":"reference/queries-fields.md","filePath":"reference/queries-fields.md"}'),t={name:"reference/queries-fields.md"},n=a('<h1 id="fields" tabindex="-1"><code>fields</code> <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;`fields`&quot;">​</a></h1><p>To get only specific fields, you may use a query like the following statement;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api/v1/users?fields:id,name,surname</span></span></code></pre></div><p>This request is equal on SQL;</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `id`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`surname`</span></span></code></pre></div>',5),l=[n];function d(p,h,r,o,c,k){return i(),e("div",null,l)}const f=s(t,[["render",d]]);export{_ as __pageData,f as default};
