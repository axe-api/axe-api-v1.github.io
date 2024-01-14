import{_ as s,c as i,o as a,R as n}from"./chunks/framework.Kvze0q-R.js";const E=JSON.parse('{"title":"Pino (Logger) Config","description":"","frontmatter":{},"headers":[],"relativePath":"reference/pino-logger-configs.md","filePath":"reference/pino-logger-configs.md"}'),e={name:"reference/pino-logger-configs.md"},t=n(`<h1 id="pino-logger-config" tabindex="-1">Pino (Logger) Config <a class="header-anchor" href="#pino-logger-config" aria-label="Permalink to &quot;Pino (Logger) Config&quot;">​</a></h1><p>Axe API uses <a href="https://getpino.io" target="_blank" rel="noreferrer">pino</a> for logging.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-c4otV" id="tab-08rb9QN" checked="checked"><label for="tab-08rb9QN">app/config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IApplicationConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IApplicationConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pino: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    level: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transport: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pino-pretty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config;</span></span></code></pre></div></div></div><p>All of the database configurations are the same as the original documentation.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://github.com/pinojs/pino-pretty" target="_blank" rel="noreferrer">pino-pretty</a> is a basic prettifier for Pino log lines. You don&#39;t have to use it in your project.</p></div>`,5),p=[t];function l(o,h,r,k,g,c){return a(),i("div",null,p)}const f=s(e,[["render",l]]);export{E as __pageData,f as default};