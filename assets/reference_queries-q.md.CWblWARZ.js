import{_ as s,c as i,o as t,R as a}from"./chunks/framework.Kvze0q-R.js";const g=JSON.parse('{"title":"q (Query)","description":"","frontmatter":{},"headers":[],"relativePath":"reference/queries-q.md","filePath":"reference/queries-q.md"}'),e={name:"reference/queries-q.md"},n=a('<h1 id="q-query" tabindex="-1"><code>q</code> (Query) <a class="header-anchor" href="#q-query" aria-label="Permalink to &quot;`q` (Query)&quot;">​</a></h1><p>You can use almost everything on any database server. Also, it supports recursive conditions.</p><h2 id="simple-condition" tabindex="-1">Simple Condition <a class="header-anchor" href="#simple-condition" aria-label="Permalink to &quot;Simple Condition&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/api/v1/users?q={ &quot;id&quot;: 1 }</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="multiple-conditions" tabindex="-1">Multiple Conditions <a class="header-anchor" href="#multiple-conditions" aria-label="Permalink to &quot;Multiple Conditions&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/api/v1/users?q=[ {&quot;name&quot;: &quot;John&quot;}, {&quot;surname&quot;: &quot;Locke&quot; } ]</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AND</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `surname`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Locke&#39;</span></span></code></pre></div><h2 id="logical-expressions" tabindex="-1">Logical Expressions <a class="header-anchor" href="#logical-expressions" aria-label="Permalink to &quot;Logical Expressions&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/api/v1/users?q=[ {&quot;name&quot;: &quot;John&quot;}, {&quot;$or.surname&quot;: &quot;Locke&quot; } ]</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `surname`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Locke&#39;</span></span></code></pre></div><blockquote><p>Also, you can use the <code>$and</code> prefix. If you don&#39;t specify any prefix, $and will be used as default.</p></blockquote><h2 id="recursive-conditions" tabindex="-1">Recursive Conditions <a class="header-anchor" href="#recursive-conditions" aria-label="Permalink to &quot;Recursive Conditions&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/api/v1/users?q=[</span></span>\n<span class="line"><span>   [{&quot;name&quot;: &quot;John&quot;}, {&quot;$or.surname&quot;: &quot;Locke&quot; }],</span></span>\n<span class="line"><span>   [{&quot;$or.age&quot;: 18}, {&quot;$or.id&quot;: 666 }]</span></span>\n<span class="line"><span>  ]</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `surname`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Locke&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  OR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `age`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span></code></pre></div><h2 id="parent-conditions" tabindex="-1">Parent Conditions <a class="header-anchor" href="#parent-conditions" aria-label="Permalink to &quot;Parent Conditions&quot;">​</a></h2><p>If there is a one-to-one relationship between the parent record, you can filter the child&#39;s data by parent&#39;s fields.</p><p>Let&#39;s assume that you have a relationship like this;</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  school</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRelation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOne</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;School&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;school_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> School</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><p>In this scenario, the client is able to query the student by the school&#39;s names;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/api/v1/students?q=[ {&quot;school.name.$like&quot;: &quot;*Institution*&quot;} ]</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Clients should use the relationship definition title (<code>school</code> in this example) in the query.</p></div><p>The SQL equivalent will be like this;</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> students.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> students</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> schools </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> students</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">school_id</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%Institution%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You can use these kinds of queries for only a <strong>one-to-one</strong> relationship. For example, you <strong>can&#39;t</strong> filter schools by student names.</p></div><h2 id="operators" tabindex="-1">Operators <a class="header-anchor" href="#operators" aria-label="Permalink to &quot;Operators&quot;">​</a></h2><p>You may use the following operators in all of your queries by adding the operator to the end of your field name.</p><table><thead><tr><th>Operator</th><th>Request <code>/api/v1/users?q=</code></th><th>SQL (MySQL)</th></tr></thead><tbody><tr><td><code>$not</code></td><td><code>{&quot;id.$not&quot;: 10}</code></td><td><code>id &lt;&gt; 10</code></td></tr><tr><td><code>$gt</code></td><td><code>{&quot;id.$gt&quot;: 10}</code></td><td><code>id &gt; 10</code></td></tr><tr><td><code>$gte</code></td><td><code>{&quot;id.$gte&quot;: 10}</code></td><td><code>id &gt;= 10</code></td></tr><tr><td><code>$lt</code></td><td><code>{&quot;id.$lt&quot;: 10}</code></td><td><code>id &lt; 10</code></td></tr><tr><td><code>$lte</code></td><td><code>{&quot;id.$lte&quot;: 10}</code></td><td><code>id &lt;= 10</code></td></tr><tr><td><code>$like</code></td><td><code>{&quot;name.$like&quot;: &quot;Foo*&quot;}</code></td><td><code>name LIKE &#39;Foo%&#39;</code></td></tr><tr><td><code>$notLike</code></td><td><code>{&quot;name.$notLike&quot;: &quot;*Foo*&quot;}</code></td><td><code>name NOT LIKE &#39;%Foo%&#39;</code></td></tr><tr><td><code>$in</code></td><td><code>{&quot;id.$in&quot;: [1,2]}</code></td><td><code>id IN (1, 2)</code></td></tr><tr><td><code>$notIn</code></td><td><code>{&quot;id.$notIn&quot;: [1,2]}</code></td><td><code>id NOT IN (1,2 )</code></td></tr><tr><td><code>$between</code></td><td><code>{&quot;id.$between&quot;: [1, 10]}</code></td><td><code>id BETWEEN (1, 10)</code></td></tr><tr><td><code>$notBetween</code></td><td><code>{&quot;id.$notBetween&quot;: [1, 10]}</code></td><td><code>id NOT BETWEEN (1, 10)</code></td></tr><tr><td></td><td><code>{&quot;id&quot;: null}</code></td><td><code>id IS NULL</code></td></tr><tr><td><code>$not</code></td><td><code>{&quot;id.$not&quot;: null}</code></td><td><code>id IS NOT NULL</code></td></tr></tbody></table>',28),l=[n];function o(d,h,p,k,c,r){return t(),i("div",null,l)}const y=s(e,[["render",o]]);export{g as __pageData,y as default};
