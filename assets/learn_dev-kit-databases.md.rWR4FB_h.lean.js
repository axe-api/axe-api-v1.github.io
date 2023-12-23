import{_ as s,c as i,o as a,R as e}from"./chunks/framework.IIHvPPZM.js";const g=JSON.parse('{"title":"Databases","description":"","frontmatter":{},"headers":[],"relativePath":"learn/dev-kit-databases.md","filePath":"learn/dev-kit-databases.md"}'),n={name:"learn/dev-kit-databases.md"},t=e(`<h1 id="databases" tabindex="-1">Databases <a class="header-anchor" href="#databases" aria-label="Permalink to &quot;Databases&quot;">​</a></h1><p class="description"> In this section, we will cover the database usage in the development environment with all details. </p><ul class="intro"><li>You will learn</li><li>How Axe API uses databases?</li><li>How to configure a database for dev-kit?</li><li>How to execute database migrations?</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>The <code>dev-kit</code> uses <code>SQLite</code> as the default database when you installed it. But it doesn&#39;t mean that you have to use <code>SQLite</code> all the time. Sometimes you going to need other databases such as <code>MySQL</code>, <code>PostgreSQL</code>, etc.</p><p>In this tutorial, we are going to explain how you can manage databases while you are developing new features or fixing a bug on Axe API.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Axe API uses <a href="https://knexjs.org/" target="_blank" rel="noreferrer">Knex.js</a> as the database library. That&#39;s why we have a configuration file in the <code>dev-kit</code> folder, which is called <code>knexfile.js</code>. You can select different database servers, databases, users, etc by changing that configuration file.</p><p>For example&#39; you should apply the folowing changes if you want to work with <code>MySQL</code>;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  client: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mysql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  connection: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DB_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DB_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DB_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    database: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_db&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pool: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    min: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    max: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  migrations: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tableName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;knex_migrations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The configuration file uses environment variables as you can see. You can change the environment variable file, which is called <code>.env</code> file, in the <code>root</code> directory.</p></div><h2 id="migrations" tabindex="-1">Migrations <a class="header-anchor" href="#migrations" aria-label="Permalink to &quot;Migrations&quot;">​</a></h2><p>You should execute the migrations to build a database schema on the database. To do that, you should;</p><ul><li>Go to <code>dev-api</code> directory (<code>cd dev-api</code>)</li><li>Create a new migration file (<code>knex --esm migrate:make MyFile</code>)</li><li>Change the migration file content like the following example.</li><li>Execute the migration (<code>knex --esm migrate:latest</code>)</li></ul><p>You can see here how a migration file looks like;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> up</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">knex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> knex.schema.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;users&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">increments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;surname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> down</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">knex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> knex.schema.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dropTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;users&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the <a href="https://knexjs.org/guide/schema-builder.html" target="_blank" rel="noreferrer">Schema Builder Documentation</a>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Remember, all <code>knex</code> cli commands should be executed on the <code>dev-kit</code> folder. Because the <code>knexfile.js</code> file is located in there.</p></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we&#39;ve explained how you can manage your development database.</p><p>In the following section, we are going to talk about how you can test your changes in your development environment.</p>`,21),l=[t];function h(p,k,o,r,d,E){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
