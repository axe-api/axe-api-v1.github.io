import{_ as s,c as i,o as a,R as e}from"./chunks/framework.Kvze0q-R.js";const u=JSON.parse('{"title":"File uploading","description":"","frontmatter":{},"headers":[],"relativePath":"learn/file-uploading.md","filePath":"learn/file-uploading.md"}'),n={name:"learn/file-uploading.md"},t=e(`<h1 id="file-uploading" tabindex="-1">File uploading <a class="header-anchor" href="#file-uploading" aria-label="Permalink to &quot;File uploading&quot;">​</a></h1><p class="description"> Axe API provides file-uploading helpers. We are going to explain here how it is easy to add file uploading support to your API. </p><ul class="intro"><li>You will learn</li><li>How to upload files?</li><li>How to handle files?</li><li>How to send a file upload request to the server?</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>File uploading is an important part of APIs. You can use many different techniques and methods. We are going to explain how you can add the <a href="https://www.npmjs.com/package/formidable" target="_blank" rel="noreferrer">formidable</a> library to your API.</p><h2 id="installing-dependencies" tabindex="-1">Installing dependencies <a class="header-anchor" href="#installing-dependencies" aria-label="Permalink to &quot;Installing dependencies&quot;">​</a></h2><p>First of all, let&#39;s install the dependencies. We are going to use the <a href="https://www.npmjs.com/package/formidable" target="_blank" rel="noreferrer">formidable</a> library.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> formidable</span></span></code></pre></div><h2 id="handling-files" tabindex="-1">Handling files <a class="header-anchor" href="#handling-files" aria-label="Permalink to &quot;Handling files&quot;">​</a></h2><p>In Axe API, you are ready to handle files whenever you want. Let&#39;s assume that we have a <code>User</code> model and we are going to upload files in the creating new user.</p><p>We should create the following hook file;</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-N3XBz" id="tab-OcYXvY7" checked="checked"><label for="tab-OcYXvY7">app/v1/Hooks/User/onBeforeInsert.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IContext, ApiError } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (files.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ApiError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The file parameter is required!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // TODO: upload file in anywhere like AWS S3, etc.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // set the path to the original formData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  formData.path_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s3://filename.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><p>You can upload the file wherever you want. Also, you can set the user&#39;s model data to be saved for the file location.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>req.files()</code> method calls the <code>parse()</code> function of <code>formidable</code> library. You can get more information from the <a href="https://github.com/node-formidable/formidable#with-nodejs-http-module" target="_blank" rel="noreferrer">library documentation here</a>.</p></div><h2 id="sending-request" tabindex="-1">Sending request <a class="header-anchor" href="#sending-request" aria-label="Permalink to &quot;Sending request&quot;">​</a></h2><p>The only change is the request type.</p><p>You should send the file to the Axe API server like the following example;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;localhost:3000/api/v1/users&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;file=@&quot;/Users/my-user/Download/axe-api.png&quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;name=&quot;John&quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --form</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;surname=&quot;Locke&quot;&#39;</span></span></code></pre></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we simply demonstrate a file-uploading example.</p><p>In the next section, we are going to discuss about Authentication.</p>`,21),l=[t];function h(p,r,o,k,d,g){return a(),i("div",null,l)}const E=s(n,[["render",h]]);export{u as __pageData,E as default};
