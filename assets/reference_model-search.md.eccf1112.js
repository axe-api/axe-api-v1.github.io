import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.b8d6d8db.js";const u=JSON.parse('{"title":"Model.search()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-search.md","filePath":"reference/model-search.md"}'),l={name:"reference/model-search.md"},o=n(`<h1 id="model-search" tabindex="-1">Model.<code>search()</code> <a class="header-anchor" href="#model-search" aria-label="Permalink to &quot;Model.\`search()\`&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Currently, the full-text search feature is <strong>EXPERIMENTAL</strong>.</p><p>Still, we strongly suggest to use it in some little parts of your application.</p></div><p>You can decide which fields should be indexed on Elasticsearch.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find more information in <a href="/learn/full-text-search.html">Full-text search</a> section.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You should review the <a href="/reference/elastic-search-configs.html">Elasticsearch Configs</a> and the <a href="/reference/search-configs.html">Search Configs</a></p></div><p>For example, in the following example, only the <code>name</code> and <code>surname</code> fields will be indexed on the Elasticsearch.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3-9zd" id="tab-3fKk7XM" checked="checked"><label for="tab-3fKk7XM">app/v1/Models/User.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Model } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fillable</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;surname&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;email&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;surname&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> User;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Model } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fillable</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;surname&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;email&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">() {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;surname&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line highlighted"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> User;</span></span></code></pre></div></div></div><p>After that definition:</p><ul><li>Axe API creates the indexes automatically in the initialization process.</li><li>Axe API saves, updates, and deletes the data on the index by using the primary key.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You MUST activate the <a href="/reference/handlers-search-handler.html">SEARCH</a> handler to allow HTTP clients are able to use the full-text search feature.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can manipulate the search query by overriding the <a href="/reference/model-get-search-query.html">getSearchQuery()</a> function.</p></div>`,11),p=[o];function t(c,r,i,E,y,d){return a(),e("div",null,p)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
