import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.ddc2bfae.js";const F=JSON.parse('{"title":"where()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-where.md","filePath":"reference/client-where.md"}'),o={name:"reference/client-where.md"},p=l(`<h1 id="where" tabindex="-1"><code>where()</code> <a class="header-anchor" href="#where" aria-label="Permalink to &quot;\`where()\`&quot;">​</a></h1><p>You can use the <code>where()</code> function to filter data. There are different versions of this function.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource()</code> function before using this function.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>paginate()</code> function after using this function.</p></div><h2 id="where-field-value" tabindex="-1"><code>where(field, value)</code> <a class="header-anchor" href="#where-field-value" aria-label="Permalink to &quot;\`where(field, value)\`&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">resource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Karl&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">paginate</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">resource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Karl&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">paginate</span><span style="color:#24292E;">()</span></span></code></pre></div><ul><li><code>field</code>: The field name on the resource.</li><li><code>value</code>: The value of the field.</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`name\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Karl&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`name\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Karl&#39;</span></span></code></pre></div><h2 id="where-field-condition-value" tabindex="-1"><code>where(field, condition, value)</code> <a class="header-anchor" href="#where-field-condition-value" aria-label="Permalink to &quot;\`where(field, condition, value)\`&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">resource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&lt;&gt;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Karl&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">paginate</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">resource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&lt;&gt;&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Karl&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">paginate</span><span style="color:#24292E;">()</span></span></code></pre></div><ul><li><code>field</code>: The field name on the resource.</li><li><code>condition</code>: The conditon parameter. You can use the following conditions; <ul><li><code>=</code></li><li><code>&lt;&gt;</code></li><li><code>&gt;</code></li><li><code>&gt;=</code></li><li><code>&lt;</code></li><li><code>&lt;=</code></li></ul></li><li><code>value</code>: The value of the field.</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`name\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Karl&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`name\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Karl&#39;</span></span></code></pre></div><h2 id="where-q-iqueryable-iqueryable" tabindex="-1"><code>where((q: IQueryable) =&gt; IQueryable)</code> <a class="header-anchor" href="#where-q-iqueryable-iqueryable" aria-label="Permalink to &quot;\`where((q: IQueryable) =&gt; IQueryable)\`&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api-client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">resource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">query</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IQueryable</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> query.</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Karl&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">orWhere</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;surname&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Popper&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">paginate</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api-client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">resource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">((</span><span style="color:#E36209;">query</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IQueryable</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> query.</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Karl&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">orWhere</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;surname&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Popper&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">paginate</span><span style="color:#24292E;">()</span></span></code></pre></div><ul><li><code>queryFunction</code>: The query function</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">\`name\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Karl&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`surname\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Popper&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">\`name\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Karl&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`surname\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Popper&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div>`,16),e=[p];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{F as __pageData,h as default};