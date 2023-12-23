import{_ as t,D as e,c as l,k as s,a as i,I as h,R as a,o as p}from"./chunks/framework.IIHvPPZM.js";const m=JSON.parse('{"title":"Auto-caching","description":"","frontmatter":{},"headers":[],"relativePath":"learn/caching.md","filePath":"learn/caching.md"}'),k={name:"learn/caching.md"},r=a("",28),d=s("li",null,[s("p",null,[s("code",null,"Time-Based Invalidation"),i(": Cache entries have an expiration time. When a client requests the resource after this time, the cache fetches a fresh copy from the server. This approach is simple but may lead to stale data if the expiration time is too long.")])],-1),o=s("code",null,"Tag-Based Invalidation",-1),E=a("",10);function c(g,y,u,F,C,v){const n=e("Badge");return p(),l("div",null,[r,s("ul",null,[d,s("li",null,[s("p",null,[o,i(": "),h(n,{type:"warning",text:"experimental"}),i(" When a resource changes, the server notifies the cache to remove or update the corresponding entry. This can be achieved using webhooks or server-sent events. It ensures real-time data consistency.")])])]),E])}const f=t(k,[["render",c]]);export{m as __pageData,f as default};
