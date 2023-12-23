import{_ as e,c as s,o as a,R as i}from"./chunks/framework.IIHvPPZM.js";const t="/assets/dev-kit.DtrpyFbF.jpeg",v=JSON.parse('{"title":"Development Kit","description":"","frontmatter":{},"headers":[],"relativePath":"learn/development-kit.md","filePath":"learn/development-kit.md"}'),n={name:"learn/development-kit.md"},o=i('<h1 id="development-kit" tabindex="-1">Development Kit <a class="header-anchor" href="#development-kit" aria-label="Permalink to &quot;Development Kit&quot;">​</a></h1><p class="description"> In this section, we will provide all the information about how you can set up your development environment. </p><ul class="intro"><li>You will learn</li><li>What is the development kit?</li><li>How you can run the `axe-api` package in your machine?</li><li>How to install dev-kit?</li></ul><h2 id="fork-the-repository" tabindex="-1">Fork the repository <a class="header-anchor" href="#fork-the-repository" aria-label="Permalink to &quot;Fork the repository&quot;">​</a></h2><p>You must fork the <a href="https://github.com/axe-api/axe-api" target="_blank" rel="noreferrer">axe-api</a> repository to your GitHub account first.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" target="_blank" rel="noreferrer">Fork a repo</a> docs of GitHub.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You don&#39;t need to <strong>fork</strong> the repository if you are a <strong>core team member</strong>.</p></div><h2 id="clone-repository" tabindex="-1">Clone repository <a class="header-anchor" href="#clone-repository" aria-label="Permalink to &quot;Clone repository&quot;">​</a></h2><p>You can clone the repository via your command line.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:{GITHUB_USERNAME}/axe-api.git</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should change the <code>{GITHUB_USERNAME}</code> with your GitHub username.</p><p>You can use <code>git@github.com:axe-api/axe-api.git</code> SSH URL if you are a <strong>core team member</strong>.</p></div><h2 id="install-dev-kit" tabindex="-1">Install <code>dev-kit</code> <a class="header-anchor" href="#install-dev-kit" aria-label="Permalink to &quot;Install `dev-kit`&quot;">​</a></h2><p>Axe API provides built-in <code>dev-kit</code> scripts to manage your development environment.</p><p>You can use the following command in the <code>root</code> directory of the repository you cloned.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> knex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ts-node-dev</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev-kit:install</span></span></code></pre></div><p>You should be able to see the following message in your termianl;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev-kit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed.</span></span></code></pre></div><h2 id="run-the-dev-kit" tabindex="-1">Run the <code>dev-kit</code> <a class="header-anchor" href="#run-the-dev-kit" aria-label="Permalink to &quot;Run the `dev-kit`&quot;">​</a></h2><p>It means that you are ready to execute the <code>dev-kit</code> in your local machine if you did not get any errors.</p><p>You can use the following command to run <code>dev-kit</code>;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev-kit</span></span></code></pre></div><p>You should be able to see the following screen if everything goes correctly.</p><p><img src="'+t+`" alt="dev-kit"></p><p>This message shows that your <code>dev-kit</code> API is running and it is ready to handle your API requests.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Whenever you change anything in the code, your <code>dev-kit</code> application would be compiled again.</p></div><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><p>The installation scripts adds some folders and files to the <code>axe-api</code> project when you install <code>dev-kit</code> to your project. These files and folders actually represent a real Rest API application that uses <code>axe-api</code>.</p><p>Let&#39;s see the following folder structure in your <code>axe-api</code> project after you installed the <code>dev-kit</code>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── dev-kit</span></span>
<span class="line"><span>  ├── app</span></span>
<span class="line"><span>    ├── v1</span></span>
<span class="line"><span>      ├── Config</span></span>
<span class="line"><span>      ├── Events</span></span>
<span class="line"><span>      ├── Hooks</span></span>
<span class="line"><span>      ├── Models</span></span>
<span class="line"><span>      ├── init.ts</span></span>
<span class="line"><span>      ├── config.ts</span></span>
<span class="line"><span>    ├── config.ts</span></span>
<span class="line"><span>  ├── migrations</span></span>
<span class="line"><span>    ├── 20210509145612_User.js</span></span>
<span class="line"><span>  ├── knexfile.js</span></span>
<span class="line"><span>  ├── mydb.sqlite</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>├── index.ts</span></span>
<span class="line"><span>├── dev-kit.ts</span></span>
<span class="line"><span>├── ...</span></span></code></pre></div><h3 id="index-ts" tabindex="-1"><code>index.ts</code> <a class="header-anchor" href="#index-ts" aria-label="Permalink to &quot;\`index.ts\`&quot;">​</a></h3><p>This file is the main file of the <code>axe-api</code> package. You will need to touch this file only if you need to export more types.</p><h3 id="dev-kit-ts" tabindex="-1"><code>dev-kit.ts</code> <a class="header-anchor" href="#dev-kit-ts" aria-label="Permalink to &quot;\`dev-kit.ts\`&quot;">​</a></h3><p>This file is the initial point of <code>dev-kit</code>. This file has been executing when you run the <code>npm run dev-kit</code> command. Basically, it creates an Axe API application which is located in the <code>dev-kit</code> folder by using the <code>axe-api</code> framework files.</p><p>Usually, you don&#39;t need to change this file.</p><h3 id="dev-kit-directory" tabindex="-1"><code>dev-kit</code> directory <a class="header-anchor" href="#dev-kit-directory" aria-label="Permalink to &quot;\`dev-kit\` directory&quot;">​</a></h3><p>In this folder, you have a Rest API structure that uses Axe API as a framework. You can change all files in this folder by your requirements.</p><p>For example; you can add a new model structure to test your Axe API changes. Your <code>dev-kit</code> application will be refreshed when you change the <code>dev-kit</code> folder.</p><h3 id="src-directory" tabindex="-1"><code>src</code> directory <a class="header-anchor" href="#src-directory" aria-label="Permalink to &quot;\`src\` directory&quot;">​</a></h3><p>This folder contains all of the core framework codes. It means that you are working on the core structure if you are changing a file in the folder.</p><p>Your <code>dev-kit</code> application will be refreshed when you change a file in the <code>src</code> folder.</p><h2 id="remove-dev-kit" tabindex="-1">Remove <code>dev-kit</code> <a class="header-anchor" href="#remove-dev-kit" aria-label="Permalink to &quot;Remove \`dev-kit\`&quot;">​</a></h2><p>You can remove the <code>dev-kit</code> helpers whenever you want. Just execute the following command to remove <code>dev-kit</code> installation.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev-kit:remove</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All of <code>dev-kit</code> files and folders have been added to the <code>.gitignore</code> file. You don&#39;t need to delete the <code>dev-kit</code> from your repository ever. You will not send your <code>dev-kit</code> files to the main <code>axe-api</code> projects.</p></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we&#39;ve explained what is the development kit and how you can use it.</p><p>In the following section, we are going to talk about how you can manage your development databases.</p>`,47),l=[o];function p(r,d,c,h,k,u){return a(),s("div",null,l)}const y=e(n,[["render",p]]);export{v as __pageData,y as default};
