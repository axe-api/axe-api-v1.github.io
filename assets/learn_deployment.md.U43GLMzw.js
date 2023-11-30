import{_ as s,c as i,o as a,R as e}from"./chunks/framework.Kvze0q-R.js";const y=JSON.parse('{"title":"Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"learn/deployment.md","filePath":"learn/deployment.md"}'),n={name:"learn/deployment.md"},t=e(`<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h1><p class="description"> To deploy an Axe API project, the process is just as straightforward as deploying any other Node.js application. In this section, we will talk about the deployment an Axe API project. </p><ul class="intro"><li>You will learn</li><li>What is deployment?</li><li>How to deploy an Axe API project?</li><li>How to execute migrations?</li><li>How to dockerize an Axe API project?</li><li>How to use docker-compose for an Axe API project?</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>Deployment is the process of making the API available for use on a server or hosting environment. It involves configuration, installing dependencies, and transferring the API code and associated files to the server.</p><p>The deployment process may involve steps like environment configuration, code compilation or interpretation, database migration, and setting up security measures.</p><p>Once deployed, the API becomes accessible to clients who can send requests and receive responses. Deployment ensures the API is ready for production use, reliable, and scalable to handle user traffic efficiently.</p><p>In this section, we will provide all information you need.</p><h2 id="compiling-the-app" tabindex="-1">Compiling the app <a class="header-anchor" href="#compiling-the-app" aria-label="Permalink to &quot;Compiling the app&quot;">​</a></h2><p>Since the Axe API uses <strong>TypeScript</strong> as the language, you need to compile your application to plain <strong>JavaScript</strong> in order to run it.</p><p>You can compile your application by using the following command;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>After this command, you will have a folder called <code>build</code>, and the <code>build</code> folder would have all of your compiled application codes, migration files, and other necessary parts of the application.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Remember that in the <code>build</code> folder you should define your environment variables in the <code>.env</code> file. Since this is your production build, <code>npm run build</code> command does not include the <code>.env</code> file. You might add <code>.env</code> file automatically to the build folder by editing the <code>scripts/postbuild.sh</code> file if you want.</p></div><h2 id="execute-the-build" tabindex="-1">Execute the build <a class="header-anchor" href="#execute-the-build" aria-label="Permalink to &quot;Execute the build&quot;">​</a></h2><p>Your compiled codes are basic <strong>Node.js</strong> codes. So that, in the <code>build</code> folder, you can execute the application with the following command;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:00:00] INFO: Axe API listens requests on http://localhost:3000</span></span></code></pre></div><p>Tada! 🎉</p><h2 id="database-migrations" tabindex="-1">Database migrations <a class="header-anchor" href="#database-migrations" aria-label="Permalink to &quot;Database migrations&quot;">​</a></h2><p><strong>Axe API</strong> adds your migrations files to your <code>build</code> folder. Only thing you should do is executing the migrate command like the following one;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> knex</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --esm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Batch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrations</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Remember that in your machine you must have the <code>knex</code> cli. You can install it by using the following code:</p><p><code>npm i -g knex</code></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find more command example on the <a href="https://knexjs.org/guide/migrations.html#migration-cli" target="_blank" rel="noreferrer">Migration CLI Documentation</a></p></div><h2 id="dockerize" tabindex="-1">Dockerize <a class="header-anchor" href="#dockerize" aria-label="Permalink to &quot;Dockerize&quot;">​</a></h2><p><strong>Axe API</strong> adds <code>Dockerfile</code> to your build folder by default. A standard <strong>Axe API</strong> Dockerfile looks like the following one;</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --platform=linux/amd64 node:18</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create app directory</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /home</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install app dependencies</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package*.json ./</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Building for a production</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm ci --only=production</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># To migrate database changes we need \`knex\` cli</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm i -g knex</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Bundle app source</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . .</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPOSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can change the <code>Dockerfile</code> by your requirements.</p></div><p>Once you build your application, you can execute the following command in the <code>build</code> directory to build a docker image for your application;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-api-image</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>Once your docker image is ready, you can execute it with the following command;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-api-image</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please keep in your mind that you should provide all environment variables in <code>.env</code> files or via docker environment parameters.</p></div><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h2><p>Using a <code>docker-compose.yml</code> file could be very helpful in your project. You may find a simple example of a <code>docker-compose.yml</code> file in the following one. You are free to edit the example by your requirements.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  migration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my-api-image</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    working_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">knex --esm migrate:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_host</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_user</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_db_schema</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my-api-image</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node index.js</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">migration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3000:3000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_host</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_user</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db_password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      DB_DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_db_schema</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use <code>host.docker.internal</code> as <code>DB_HOST</code> value to access the dabase which on located in your machine. You can find more details in the Docker documentation.</p></div><h2 id="dive-deeper" tabindex="-1">Dive deeper <a class="header-anchor" href="#dive-deeper" aria-label="Permalink to &quot;Dive deeper&quot;">​</a></h2><p>We tried to show some of the basic deployment methods in here. Nevertheless we know that there are many different scenario which you can use. We encrouge Axe API developers to write blog posts abou how to deploy your application in different environments instead of adding many pages here.</p><p>No matter in which platform or environment you deploy your application, the following facts would be same;</p><ul><li>Your application is a <em>TypeScript</em> application. It should be compiled to plain <em>JavaScript</em>.</li><li>You need a supported <em>Node.js</em> version in the machine which you will deploy.</li><li>You need to execute the migration files via <code>knex</code> cli.</li><li>You must execute the compiled <em>JavaScript</em> file with <em>Node.js</em>.</li></ul><p>Other than tehese are just implementation details.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we tried to cover how you can deploy your API.</p><p>In the next chapter, you can learn how you can contribute to Axe API.</p>`,44),l=[t];function p(h,o,d,k,r,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{y as __pageData,u as default};
