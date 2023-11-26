import{_ as s,c as e,o as a,Q as l}from"./chunks/framework.ddc2bfae.js";const E=JSON.parse('{"title":"fields","description":"","frontmatter":{},"headers":[],"relativePath":"reference/queries-fields.md","filePath":"reference/queries-fields.md"}'),n={name:"reference/queries-fields.md"},o=l('<h1 id="fields" tabindex="-1"><code>fields</code> <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;`fields`&quot;">​</a></h1><p>To get only specific fields, you may use a query like the following statement;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/api/v1/users?fields:id,name,surname</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/api/v1/users?fields:id,name,surname</span></span></code></pre></div><p>This request is equal on SQL;</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`id`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">`name`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">`surname`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`id`</span><span style="color:#24292E;">, </span><span style="color:#032F62;">`name`</span><span style="color:#24292E;">, </span><span style="color:#032F62;">`surname`</span></span></code></pre></div>',5),p=[o];function t(c,r,i,d,u,h){return a(),e("div",null,p)}const _=s(n,[["render",t]]);export{E as __pageData,_ as default};