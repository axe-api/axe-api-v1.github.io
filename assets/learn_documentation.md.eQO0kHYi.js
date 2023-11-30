import{_ as e,c as a,o as t,R as s}from"./chunks/framework.Kvze0q-R.js";const i="/assets/api-docs.cF0Lp0SD.png",m=JSON.parse('{"title":"Auto-created documentation","description":"","frontmatter":{},"headers":[],"relativePath":"learn/documentation.md","filePath":"learn/documentation.md"}'),n={name:"learn/documentation.md"},o=s('<h1 id="auto-created-documentation" tabindex="-1">Auto-created documentation <a class="header-anchor" href="#auto-created-documentation" aria-label="Permalink to &quot;Auto-created documentation&quot;">​</a></h1><p class="description"> In this section, we are going to talk about everything about API documentation and prove why Axe API is a great framework for it. </p><ul class="intro"><li>You will learn</li><li>Why documentation is important?</li><li>What are the best practices?</li><li>What is the Axe API approach to documentation?</li><li>What API features are supported on auto-created documentation?</li><li>What are the missing parts of the documentation?</li></ul><h2 id="why-it-is-important" tabindex="-1">Why it is important? <a class="header-anchor" href="#why-it-is-important" aria-label="Permalink to &quot;Why it is important?&quot;">​</a></h2><p>API documentation is crucial as it serves as a comprehensive reference guide for developers, enabling them to understand and utilize an API effectively. It provides detailed explanations of API functionalities, endpoints, parameters, request/response formats, and authentication requirements.</p><p>Good API documentation enhances developer productivity, reduces learning curves, promotes proper API usage, and facilitates integration with other systems. Clear documentation also fosters collaboration and encourages the development of third-party applications, expanding the API&#39;s reach and potential.</p><p>Overall, API documentation is essential for seamless integration, developer satisfaction, and successful API adoption.</p><h2 id="best-practices" tabindex="-1">Best practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best practices&quot;">​</a></h2><p>Creating API documentation involves several best practices:</p><ul><li><p><strong>Clear Structure</strong>: Organize the documentation logically with sections such as introduction, endpoints, parameters, and examples. Use consistent formatting and headings.</p></li><li><p><strong>Request and Response Examples</strong>: Include sample requests and responses to illustrate how to interact with the API effectively. Cover different scenarios and provide code snippets in different ways.</p></li><li><p><strong>Detailed Parameter Documentation</strong>: Document all parameters, their types, required/optional status, and possible values. Explain their purpose with relevant examples.</p></li><li><p><strong>Error Handling</strong>: Provide a comprehensive list of error codes and their meanings. Describe how errors are returned and suggest error handling strategies for developers.</p></li><li><p><strong>Versioning</strong>: Clearly indicate the versioning scheme and how to specify the desired version in API requests.</p></li><li><p><strong>Regular Updates</strong>: Keep the documentation up to date with any changes or additions to the API. Communicate changes effectively, highlighting deprecated features and suggesting alternative approaches.</p></li></ul><p>Remember, high-quality API documentation is an ongoing process that requires regular maintenance and updates to ensure its relevance and usefulness to developers.</p><h2 id="auto-created-api-docs" tabindex="-1">Auto-created API docs <a class="header-anchor" href="#auto-created-api-docs" aria-label="Permalink to &quot;Auto-created API docs&quot;">​</a></h2><p>There are many best practices out there to be implemented as you can see. Creating well-designed API documentation requires a lot of time and energy. But <strong>we don&#39;t have that time and energy</strong>. That&#39;s why we&#39;ve built the Axe API framework.</p><p>Since Axe API already <strong><em>analyzes</em></strong> all of your models, routes, validations, etc, it is able to create your API documentation automatically.</p><p>Axe API supports the <a href="https://www.openapis.org" target="_blank" rel="noreferrer">OpenAPI</a> format with the <a href="https://swagger.io/docs/specification/about/" target="_blank" rel="noreferrer">Swagger interface</a>.</p><p>You can see the following link a full-working example of the documentation that has been created by Axe API automatically.</p><p><a href="https://bookstore.axe-api.com/docs" target="_blank" rel="noreferrer">bookstore.axe-api.com/docs</a></p><a href="https://bookstore.axe-api.com/docs" target="_blank" alt="Auto-created Axe API documentation"><img src="'+i+`"></a><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>You can decide to enable or disable the auto-documentation generation via the configuration file.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-I7cjS" id="tab-ILuU0l_" checked="checked"><label for="tab-ILuU0l_">app/config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IApplicationConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;axe-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IApplicationConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  docs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><h2 id="customization" tabindex="-1">Customization <a class="header-anchor" href="#customization" aria-label="Permalink to &quot;Customization&quot;">​</a></h2><p>You can customize the documentation structure if you wish. Axe API uses <a href="https://spec.openapis.org/oas/v3.1.0" target="_blank" rel="noreferrer">OpenAPI v3 specification</a>.</p><p>You can create a <code>swagger.ts</code> file like the following example.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Fav9T" id="tab-fHRyS7W" checked="checked"><label for="tab-fHRyS7W">app/swagger.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  info: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Your API Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Description the API in here&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  servers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://your-api.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></div></div><p>This file is used as the base of the documentation. <strong>Axe API</strong> analyzes all of your API structure and overrides the base file.</p><p>You can access the <code>/docs</code> path to see the <strong>Swagger</strong> documentation.</p><h2 id="next-step" tabindex="-1">Next step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;Next step&quot;">​</a></h2><p>Axe API supports powerful documentation that is created automatically by your model definitions. It is another magic of Axe API.</p><p>But this is not enough. You will learn how advanced queries you can use in the next section.</p>`,30),r=[o];function l(p,h,c,d,u,g){return t(),a("div",null,r)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};
