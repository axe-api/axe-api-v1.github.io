import{_ as e,o as t,c as s,Q as a}from"./chunks/framework.b8d6d8db.js";const E=JSON.parse('{"title":"onBeforeUpdate()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/hooks-events-on-before-update.md","filePath":"reference/hooks-events-on-before-update.md"}'),o={name:"reference/hooks-events-on-before-update.md"},n=a(`<h1 id="onbeforeupdate" tabindex="-1"><code>onBeforeUpdate()</code> <a class="header-anchor" href="#onbeforeupdate" aria-label="Permalink to &quot;\`onBeforeUpdate()\`&quot;">​</a></h1><p>This hook/event is called the before updating a new record.</p><p>It can be used in the <code>UPDATE</code> handler.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-dkYRR" id="tab-3JG0Tj4" checked="checked"><label for="tab-3JG0Tj4">app/v1/Hooks/User/onBeforeUpdate.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { IContext } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axe-api&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">parameters</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IContext</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// do something in here</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { IContext } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axe-api&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">parameters</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IContext</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// do something in here</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div></div></div><h2 id="icontext" tabindex="-1"><code>IContext</code> <a class="header-anchor" href="#icontext" aria-label="Permalink to &quot;\`IContext\`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See the <a href="/reference/icontext.html">IContext</a> reference to learn more.</p></div><p>The following parameters can be used in the hook/event function;</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>req</code></td><td><a href="/reference/axe-request.html">AxeRequest</a></td></tr><tr><td><code>res</code></td><td><a href="/reference/axe-response.html">AxeResponse</a></td></tr><tr><td><code>model</code></td><td>Current model instance. For example; <code>User</code></td></tr><tr><td><code>database</code></td><td>Database connection instance. For example <a href="http://knexjs.org/#Installation-client" target="_blank" rel="noreferrer">Knex.js</a></td></tr><tr><td><code>relation</code></td><td>The relation definition if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>parentModel</code></td><td>The parent model instance if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>query</code></td><td>The Knex.js&#39; <a href="http://knexjs.org/#Builder-wheres" target="_blank" rel="noreferrer">query instance</a>.</td></tr><tr><td><code>item</code></td><td>The current record.</td></tr><tr><td><code>formData</code></td><td>The data has been sent by HTTP client to create or update row.</td></tr></tbody></table>`,8),r=[n];function p(l,c,d,i,h,y){return t(),s("div",null,r)}const f=e(o,[["render",p]]);export{E as __pageData,f as default};