import{_ as s,c as a,o as i,R as e}from"./chunks/framework.IIHvPPZM.js";const g=JSON.parse('{"title":"Model.transaction()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-transactions.md","filePath":"reference/model-transactions.md"}'),n={name:"reference/model-transactions.md"},t=e(`<h1 id="model-transaction" tabindex="-1">Model.<code>transaction()</code> <a class="header-anchor" href="#model-transaction" aria-label="Permalink to &quot;Model.\`transaction()\`&quot;">​</a></h1><p>In your model file, you can decide to use database transaction for all <strong>model-related</strong> routes like the following example;</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Ft-_q" id="tab-TaVsDws" checked="checked"><label for="tab-TaVsDws">api/v1/Models/User.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div></div></div><p>By the example above, all auto-generated routes by <code>User</code> model will use a database transaction.</p><h2 id="handler-based-transactions" tabindex="-1">Handler-based transactions <a class="header-anchor" href="#handler-based-transactions" aria-label="Permalink to &quot;Handler-based transactions&quot;">​</a></h2><p><strong>Handler-based</strong> database transactions are the most efficient way to define database transaction. By this strategy, you only create database structure for the routes that you really need.</p><p>Let&#39;s check the following example;</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fTTPW" id="tab-uSUwgu3" checked="checked"><label for="tab-uSUwgu3">app/v1/Models/User.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model, HandlerTypes } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      handlers: [HandlerTypes.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">INSERT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      transaction: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div></div></div><p>By this model, Axe API creates a database transaction only for the <code>INSERT</code> handler.</p>`,9),l=[t];function p(h,r,d,k,o,c){return i(),a("div",null,l)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};
