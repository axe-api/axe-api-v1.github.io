import{_ as e,c as t,o as s,a9 as a}from"./chunks/framework.BBIENrth.js";const u=JSON.parse('{"title":"onBeforeForceDelete()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/hooks-events-on-before-force-delete.md","filePath":"reference/hooks-events-on-before-force-delete.md"}'),i={name:"reference/hooks-events-on-before-force-delete.md"},o=a('<h1 id="onbeforeforcedelete" tabindex="-1"><code>onBeforeForceDelete()</code> <a class="header-anchor" href="#onbeforeforcedelete" aria-label="Permalink to &quot;`onBeforeForceDelete()`&quot;">​</a></h1><p>This hook/event is called the before deleting a record.</p><p>It can be used in the <code>FORCE_DELETE</code> handler.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qgPre" id="tab-M4ZAioZ" checked="checked"><label for="tab-M4ZAioZ">app/v1/Hooks/User/onBeforeForceDelete.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IContext } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // do something in here</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><h2 id="icontext" tabindex="-1"><code>IContext</code> <a class="header-anchor" href="#icontext" aria-label="Permalink to &quot;`IContext`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See the <a href="/reference/icontext.html">IContext</a> reference to learn more.</p></div><p>The following parameters can be used in the hook/event function;</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>req</code></td><td><a href="/reference/axe-request.html">AxeRequest</a></td></tr><tr><td><code>res</code></td><td><a href="/reference/axe-response.html">AxeResponse</a></td></tr><tr><td><code>model</code></td><td>Current model instance. For example; <code>User</code></td></tr><tr><td><code>database</code></td><td>Database connection instance. For example <a href="http://knexjs.org/#Installation-client" target="_blank" rel="noreferrer">Knex.js</a></td></tr><tr><td><code>relation</code></td><td>The relation definition if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>parentModel</code></td><td>The parent model instance if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>query</code></td><td>The Knex.js&#39; <a href="http://knexjs.org/#Builder-wheres" target="_blank" rel="noreferrer">query instance</a>.</td></tr></tbody></table>',8),r=[o];function n(d,l,h,c,p,k){return s(),t("div",null,r)}const g=e(i,[["render",n]]);export{u as __pageData,g as default};