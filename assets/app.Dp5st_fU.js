import{V as s,ac as p,ad as u,ae as l,af as c,ag as f,ah as d,ai as m,aj as h,ak as g,al as A,Y as P,d as _,u as v,k as y,y as R,am as w,an as C,ao as E,a8 as T}from"./chunks/framework.CdMsPAd6.js";import{R as b}from"./chunks/theme.ChzJTPZD.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(b),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),E(),o.setup&&o.setup(),()=>T(o.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(S)}function j(){let e=s,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};