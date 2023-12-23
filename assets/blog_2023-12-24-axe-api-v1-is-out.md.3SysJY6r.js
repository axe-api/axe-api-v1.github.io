import{_ as s}from"./chunks/api-docs.OXu261BH.js";import{_ as e,c as a,o as i,R as t}from"./chunks/framework.IIHvPPZM.js";const n="/assets/lts.qOCWtjP_.png",l="/assets/pretty-demo.SgnjUm0F.png",f=JSON.parse('{"title":"Axe API v1.0 is out!","description":"","frontmatter":{},"headers":[],"relativePath":"blog/2023-12-24-axe-api-v1-is-out.md","filePath":"blog/2023-12-24-axe-api-v1-is-out.md"}'),h={name:"blog/2023-12-24-axe-api-v1-is-out.md"},p=t('<h1 id="axe-api-v1-0-is-out" tabindex="-1">Axe API v1.0 is out! <a class="header-anchor" href="#axe-api-v1-0-is-out" aria-label="Permalink to &quot;Axe API v1.0 is out!&quot;">​</a></h1><p><code>v1.0</code> is the most important major release in all of Axe API history ever made. Not just because the Axe API is more mature, but also is started to support many great features.</p><p>Let&#39;s discover it more!</p><h2 id="long-term-support-lts" tabindex="-1">Long-term support (LTS) <a class="header-anchor" href="#long-term-support-lts" aria-label="Permalink to &quot;Long-term support (LTS)&quot;">​</a></h2><p>LTS stands for Long-Term Support. It designates software versions with extended stability, security updates, and maintenance, ensuring reliable performance over an extended period, typically several years.</p><p>Axe API v1 is an LTS release. Which means it will be supported for 3 years at least.</p><p><img src="'+n+'" alt="Axe API v1 LTS release cycle"></p><h2 id="goodbye-express-js" tabindex="-1">Goodbye Express.js! <a class="header-anchor" href="#goodbye-express-js" aria-label="Permalink to &quot;Goodbye Express.js!&quot;">​</a></h2><p>Axe API started to work on the <a href="https://nodejs.org/api/http.html" target="_blank" rel="noreferrer">http</a> module now.</p><p>The main reason for the <a href="https://expressjs.com/" target="_blank" rel="noreferrer">Express.js</a> -&gt; <a href="https://nodejs.org/api/http.html" target="_blank" rel="noreferrer">http</a> change is to improve the performance and the confusion. Axe API is a standalone framework now. This means that Axe API&#39;s future is not dependent on <a href="https://expressjs.com/" target="_blank" rel="noreferrer">Express.js</a>&#39; future anymore.</p><p><a href="https://expressjs.com/" target="_blank" rel="noreferrer">Express.js</a> was a great choice in the beginning because of its development speed. But it is time to say good bye.</p><h2 id="new-logger-pino" tabindex="-1">New logger: pino <a class="header-anchor" href="#new-logger-pino" aria-label="Permalink to &quot;New logger: pino&quot;">​</a></h2><p>Axe API didn&#39;t have strong logging features and it was a big issue for a very long time. Axe API team has added the <a href="https://getpino.io/" target="_blank" rel="noreferrer">pino</a> to the Axe API project as default.</p><p>You can configure it according to your wishes!</p><p><img src="'+l+'" alt="Pino logger"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Check the <a href="/reference/pino-logger-configs.html">Pino Configuration</a></p></div><h2 id="swagger-support" tabindex="-1">Swagger support <a class="header-anchor" href="#swagger-support" aria-label="Permalink to &quot;Swagger support&quot;">​</a></h2><p>Axe API was supporting the auto-created documentation in the last couple of months. The problem was using a custom design was increasing the learning curve.</p><p>Because of that issue, the Axe API team has added the <a href="https://swagger.io/" target="_blank" rel="noreferrer">Swagger-based</a> documentation. Axe API generates the swagger definitions automatically. But also it provides an endpoint that you can see the documentation directly.</p><p><img src="'+s+`" alt="Axe API Docs"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can check a <a href="https://bookstore.axe-api.com/docs" target="_blank" rel="noreferrer">live example here</a>.</p></div><h2 id="auto-caching" tabindex="-1">Auto-caching <a class="header-anchor" href="#auto-caching" aria-label="Permalink to &quot;Auto-caching&quot;">​</a></h2><p>Axe API has started to provide an auto-caching mechanism with the new version. This means, as a developer you don&#39;t need to manage the whole caching strategies for your endpoint. You can provide great caching support for your API by changing simple configurations.</p><blockquote><p>Axe API uses Redis as the cache database.</p></blockquote><p>Axe API allows developers to define different cache configurations at the application level, version level, model level, and handler level.</p><p>You can use the following configurations to support auto-caching features for all endpoints.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0bVxw" id="tab-Xv9GQ7U" checked="checked"><label for="tab-Xv9GQ7U">app/config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IApplicationConfig, CacheStrategies } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IApplicationConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  redis: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;redis://127.0.0.1:6379&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ttl: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    invalidation: CacheStrategies.TimeBased,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><p>After this configuration, all GET handlers (PAGINATE, ALL, and SHOW) will be cached automatically.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Check the <a href="/learn/caching.html">Auto-caching</a> docs.</p></div><h2 id="full-text-search" tabindex="-1">Full-text search <a class="header-anchor" href="#full-text-search" aria-label="Permalink to &quot;Full-text search&quot;">​</a></h2><p>Axe API supports the <code>LIKE</code> keyword on database queries. The it can be slow because it performs a sequential scan, checking each record for a match. Unlike indexes that optimize searches, <code>LIKE</code> scans entire columns, causing slowdowns with large datasets.</p><p>Use full-text indexes or other techniques for better performance in complex searches.</p><p>Axe API supports only <a href="https://www.elastic.co" target="_blank" rel="noreferrer">Elasticsearch</a>.</p><p>You can activate the <strong>full-text search</strong> feature for each of your models separately by defining which fields should be indexed.</p><p>You should use the <code>search</code> getter to define which field values should be indexed on Elasticsearch.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-q18cp" id="tab-VAN3JXZ" checked="checked"><label for="tab-VAN3JXZ">app/v1/Models/User.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Model } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Which fields should be able to filled by HTTP clients</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fillable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;surname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;phone&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Which fields should be indexed on Elasticsearch</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;surname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User;</span></span></code></pre></div></div></div><p>After the model definition, Axe API creates an index on Elasticsearch by using the model name.</p><p>Also, Axe API <em>creates</em>, <em>updates</em>, and <em>deletes</em> the data on the index automatically.</p><p>All indexes will be generated <code>automatically</code> by Axe API in the <em>initialization process</em> if the index is not generated yet.</p><p>You can add the <a href="/reference/handlers-search-handler.html">SEARCH</a> handler to your API endpoints. In that endpoint, you can run a full-text search on the Elasticsearch index for the related model.</p><p>The <a href="/reference/handlers-search-handler.html">SEARCH</a> handler will be documented automatically on the <a href="/learn/documentation.html">Swagger documentation</a>.</p><p>After Axe API fetches the related data from Elasticsearch, it uses the primary key values to fetch the original record from the database.</p><p>This technique allows you to decide what kind of data should be fetched from API. For example, even though you haven&#39;t added a field value called <code>phone</code> to the Elasticsearch index, you can see that data on the result. Or, you can select only specific fields by using the <code>field</code> query parameter. The best news is you can fetch any relational data by using the <code>with</code> query feature.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Check the <a href="/learn/full-text-search.html">Full-text search</a> docs.</p></div><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>You can use the <a href="/upgrading/v1.html">Upgrading Guide</a> here to upgrade your legacy Axe API applications.</p><p>You can create an issue if you have any problems.</p><p><a href="https://github.com/axe-api/axe-api/issues" target="_blank" rel="noreferrer">https://github.com/axe-api/axe-api/issues</a></p>`,48),r=[p];function o(d,c,k,g,u,E){return i(),a("div",null,r)}const b=e(h,[["render",o]]);export{f as __pageData,b as default};
