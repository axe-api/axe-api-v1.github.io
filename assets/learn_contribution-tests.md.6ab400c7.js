import{_ as e,o as t,c as s,Q as a}from"./chunks/framework.18efe07a.js";const g=JSON.parse('{"title":"Tests","description":"","frontmatter":{},"headers":[],"relativePath":"learn/contribution-tests.md","filePath":"learn/contribution-tests.md"}'),o={name:"learn/contribution-tests.md"},n=a('<h1 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-label="Permalink to &quot;Tests&quot;">​</a></h1><p class="description"> In this section, we are going to explain how you can run axe-api tests. </p><ul class="intro"><li>You will learn</li><li>What kind of tests do we have?</li><li>How to execute unit tests?</li><li>How to execute integration tests?</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p><code>Axe API</code> has many tests both unit and integration. We are expecting you, as a developer, to contribute not only features or bugs but tests.</p><p>Besides, we believe that integration tests especially should be able to execute very easily.</p><p>In this tutorial, we are going to explain everything about tests.</p><h2 id="unit-tests" tabindex="-1">Unit Tests <a class="header-anchor" href="#unit-tests" aria-label="Permalink to &quot;Unit Tests&quot;">​</a></h2><p>You can execute all unit tests with the following command;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>We suggest that use the following command when you are developing something to not break anything important;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test:dev</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In Axe API we use <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a>.</p></div><h2 id="integration-tests" tabindex="-1">Integration Tests <a class="header-anchor" href="#integration-tests" aria-label="Permalink to &quot;Integration Tests&quot;">​</a></h2><p>Integration tests are more complicated than unit tests. Because we want to test a real Rest API on a specific database such as MySQL or PostgreSQL. It means that you should have the real database server on your local machine.</p><p>Thanks to Docker, it is very easy these days to have a database on your machine. Also, we created some scripts to execute all the tests with all migration support.</p><p>Just you need to have <a href="https://www.docker.com/" target="_blank" rel="noreferrer">docker</a> and <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">docker-compose</a> on your local machine.</p><p>After you have installed docker-compose on your machine, for example, you can execute the following command to perform MySQL 8 integration tests.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test:mysql8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test:mysql8</span></span></code></pre></div><p>This command will execute a script that pulls MySQL 8, initialize it, initialize the testing API, and execute all integration tests.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We suggest that you run integration tests, in the beginning, to see if everything is ok.</p></div><p>Currently, we have the following integration tests;</p><ul><li><code>npm run test:mysql57</code></li><li><code>npm run test:mysql8</code></li><li><code>npm run test:postgres</code></li></ul><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we tried to cover how you can test your changes.</p><p>By this, you completed the Learn section of the Axe API Documentation. You can check the API Reference out to get more information about Axe API.</p>',26),l=[n];function p(i,r,c,h,d,u){return t(),s("div",null,l)}const m=e(o,[["render",p]]);export{g as __pageData,m as default};
