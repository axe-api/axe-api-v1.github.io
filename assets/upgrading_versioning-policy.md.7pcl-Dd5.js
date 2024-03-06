import{h as he,aa as fe,o as A,c as D,m as Q,F as U,G as Z,Q as R,t as K,p as X,ab as pe,a as ge,J as se,a9 as oe}from"./chunks/framework.BBIENrth.js";var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var ce={exports:{}};(function(b,O){(function(M,w){b.exports=w()})(ue,function(){var M=1e3,w=6e4,N=36e5,q="millisecond",y="second",x="minute",T="hour",u="day",$="week",m="month",E="quarter",f="year",I="date",F="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,B={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var n=["th","st","nd","rd"],e=a%100;return"["+a+(n[(e-20)%10]||n[e]||n[0])+"]"}},v=function(a,n,e){var r=String(a);return!r||r.length>=n?a:""+Array(n+1-r.length).join(e)+a},ee={s:v,z:function(a){var n=-a.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(t,2,"0")},m:function a(n,e){if(n.date()<e.date())return-a(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(r,m),i=e-t<0,s=n.clone().add(r+(i?-1:1),m);return+(-(r+(e-t)/(i?t-s:s-t))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:m,y:f,w:$,d:u,D:I,h:T,m:x,s:y,ms:q,Q:E}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},k="en",Y={};Y[k]=B;var ae="$isDayjsObject",te=function(a){return a instanceof J||!(!a||!a[ae])},G=function a(n,e,r){var t;if(!n)return k;if(typeof n=="string"){var i=n.toLowerCase();Y[i]&&(t=i),e&&(Y[i]=e,t=i);var s=n.split("-");if(!t&&s.length>1)return a(s[0])}else{var d=n.name;Y[d]=n,t=d}return!r&&t&&(k=t),t||!r&&k},l=function(a,n){if(te(a))return a.clone();var e=typeof n=="object"?n:{};return e.date=a,e.args=arguments,new J(e)},o=ee;o.l=G,o.i=te,o.w=function(a,n){return l(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var J=function(){function a(e){this.$L=G(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ae]=!0}var n=a.prototype;return n.parse=function(e){this.$d=function(r){var t=r.date,i=r.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var s=t.match(p);if(s){var d=s[2]-1||0,c=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],d,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)):new Date(s[1],d,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==F},n.isSame=function(e,r){var t=l(e);return this.startOf(r)<=t&&t<=this.endOf(r)},n.isAfter=function(e,r){return l(e)<this.startOf(r)},n.isBefore=function(e,r){return this.endOf(r)<l(e)},n.$g=function(e,r,t){return o.u(e)?this[r]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,r){var t=this,i=!!o.u(r)||r,s=o.p(e),d=function(j,_){var C=o.w(t.$u?Date.UTC(t.$y,_,j):new Date(t.$y,_,j),t);return i?C:C.endOf(u)},c=function(j,_){return o.w(t.toDate()[j].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(_)),t)},h=this.$W,g=this.$M,S=this.$D,V="set"+(this.$u?"UTC":"");switch(s){case f:return i?d(1,0):d(31,11);case m:return i?d(1,g):d(0,g+1);case $:var W=this.$locale().weekStart||0,H=(h<W?h+7:h)-W;return d(i?S-H:S+(6-H),g);case u:case I:return c(V+"Hours",0);case T:return c(V+"Minutes",1);case x:return c(V+"Seconds",2);case y:return c(V+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,r){var t,i=o.p(e),s="set"+(this.$u?"UTC":""),d=(t={},t[u]=s+"Date",t[I]=s+"Date",t[m]=s+"Month",t[f]=s+"FullYear",t[T]=s+"Hours",t[x]=s+"Minutes",t[y]=s+"Seconds",t[q]=s+"Milliseconds",t)[i],c=i===u?this.$D+(r-this.$W):r;if(i===m||i===f){var h=this.clone().set(I,1);h.$d[d](c),h.init(),this.$d=h.set(I,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](c);return this.init(),this},n.set=function(e,r){return this.clone().$set(e,r)},n.get=function(e){return this[o.p(e)]()},n.add=function(e,r){var t,i=this;e=Number(e);var s=o.p(r),d=function(g){var S=l(i);return o.w(S.date(S.date()+Math.round(g*e)),i)};if(s===m)return this.set(m,this.$M+e);if(s===f)return this.set(f,this.$y+e);if(s===u)return d(1);if(s===$)return d(7);var c=(t={},t[x]=w,t[T]=N,t[y]=M,t)[s]||1,h=this.$d.getTime()+e*c;return o.w(h,this)},n.subtract=function(e,r){return this.add(-1*e,r)},n.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||F;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=o.z(this),d=this.$H,c=this.$m,h=this.$M,g=t.weekdays,S=t.months,V=t.meridiem,W=function(_,C,L,z){return _&&(_[C]||_(r,i))||L[C].slice(0,z)},H=function(_){return o.s(d%12||12,_,"0")},j=V||function(_,C,L){var z=_<12?"AM":"PM";return L?z.toLowerCase():z};return i.replace(P,function(_,C){return C||function(L){switch(L){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return h+1;case"MM":return o.s(h+1,2,"0");case"MMM":return W(t.monthsShort,h,S,3);case"MMMM":return W(S,h);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return W(t.weekdaysMin,r.$W,g,2);case"ddd":return W(t.weekdaysShort,r.$W,g,3);case"dddd":return g[r.$W];case"H":return String(d);case"HH":return o.s(d,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return j(d,c,!0);case"A":return j(d,c,!1);case"m":return String(c);case"mm":return o.s(c,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return s}return null}(_)||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,r,t){var i,s=this,d=o.p(r),c=l(e),h=(c.utcOffset()-this.utcOffset())*w,g=this-c,S=function(){return o.m(s,c)};switch(d){case f:i=S()/12;break;case m:i=S();break;case E:i=S()/3;break;case $:i=(g-h)/6048e5;break;case u:i=(g-h)/864e5;break;case T:i=g/N;break;case x:i=g/w;break;case y:i=g/M;break;default:i=g}return t?i:o.a(i)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),i=G(e,r,!0);return i&&(t.$L=i),t},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),ie=J.prototype;return l.prototype=ie,[["$ms",q],["$s",y],["$m",x],["$H",T],["$W",u],["$M",m],["$y",f],["$D",I]].forEach(function(a){ie[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),l.extend=function(a,n){return a.$i||(a(n,J,l),a.$i=!0),l},l.locale=G,l.isDayjs=te,l.unix=function(a){return l(1e3*a)},l.en=Y[k],l.Ls=Y,l.p={},l})})(ce);var me=ce.exports;const ne=de(me);var le={exports:{}};(function(b,O){(function(M,w){b.exports=w()})(ue,function(){var M="month",w="quarter";return function(N,q){var y=q.prototype;y.quarter=function(u){return this.$utils().u(u)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(u-1))};var x=y.add;y.add=function(u,$){return u=Number(u),this.$utils().p($)===w?this.add(3*u,M):x.bind(this)(u,$)};var T=y.startOf;y.startOf=function(u,$){var m=this.$utils(),E=!!m.u($)||$;if(m.p(u)===w){var f=this.quarter()-1;return E?this.month(3*f).startOf(M).startOf("day"):this.month(3*f+2).endOf(M).endOf("day")}return T.bind(this)(u,$)}}})})(le);var ve=le.exports;const ye=de(ve),$e={class:"TimeBar-Header"},_e={class:"TimeBar-ReleaseTitle"},re=48,be={__name:"TimeBar",setup(b){ne.extend(ye);const O=he([{title:"v0.20",periods:[{title:"ACTIVE",start:2022.75,end:2023.5},{title:"MAINTENANCE",start:2023.5,end:2024}]},{title:"v0.30",periods:[{title:"ACTIVE",start:2023.25,end:2024.25},{title:"MAINTENANCE",start:2024.25,end:2024.75}]},{title:"v1",periods:[{title:"ACTIVE",start:2024,end:2026},{title:"MAINTENANCE",start:2026,end:2027}]}]),M=()=>Math.floor(Math.min.apply(Math,O.value.map(p=>p.periods).flat().map(p=>p.start))),w=()=>Math.ceil(Math.max.apply(Math,O.value.map(P=>P.periods).flat().map(P=>P.end)))-1,N=M(),q=w(),y=ne().year(),x=ne().quarter(),T=y+.25*(x-1),u=q-N+1,$=Array.from(Array(u).keys()),E=100/u/4,f=p=>100*(p.start-N)/u,I=p=>{const B=100-100*(q-p.end+1)/u;return 100-f(p)-(100-B)},F=p=>p.title==="ACTIVE"?(p.end<T,"#46497d"):p.title==="MAINTENANCE"?"#282a2f":"#3c3422";return(p,P)=>{const B=fe("tooltip");return A(),D("div",null,[Q("div",$e,[(A(!0),D(U,null,Z(X($),v=>(A(),D("div",{class:"TimeBar-Year",key:v,style:R({left:`${100*v/u}%`})},K(X(N)+v),5))),128)),(A(!0),D(U,null,Z(X($),v=>(A(),D("div",{class:"TimeBar-YearLine",key:v,style:R({left:`${100*v/u}%`,height:`${O.value.length*re}px`})},null,4))),128)),Q("div",{class:"TimeBar-CurrentQuarter",style:R({left:`${f({start:T})}%`,width:`calc(${E}% - 1px)`,height:`calc(${O.value.length*re}px - 30px)`})},null,4),Q("div",{class:"TimeBar-CurrentQuarterTitle",style:R({left:`${f({start:T})}%`,top:`calc(${O.value.length*re}px - 25px)`,width:`calc(${E}% - 1px)`})}," Q"+K(X(x)),5)]),(A(!0),D(U,null,Z(O.value,(v,ee)=>(A(),D("div",{class:"TimeBar-Release",key:ee},[Q("div",_e,K(v.title),1),(A(!0),D(U,null,Z(v.periods,k=>pe((A(),D("div",{class:"TimeBar-PeriodTitle",key:v.title+k.title,style:R({background:F(k),left:`${f(k)}%`,width:`${I(k)}%`})},[ge(K(k.title),1)],4)),[[B,k.title]])),128))]))),128))])}}},Me={class:"release-container"},we={__name:"ReleasePlan",setup(b){return(O,M)=>(A(),D("div",Me,[se(be)]))}},Te=oe('<h1 id="versioning-policy" tabindex="-1">Versioning Policy <a class="header-anchor" href="#versioning-policy" aria-label="Permalink to &quot;Versioning Policy&quot;">​</a></h1><p>Axe API uses the semantic version system.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Semantic versioning is a numbering system used in software development to indicate the compatibility and changes of a software version.</p><p>It consists of three parts: MAJOR.MINOR.PATCH.</p><p>MAJOR version changes indicate incompatible updates, MINOR version changes introduce new features without breaking compatibility, and PATCH version changes represent bug fixes without adding new features.</p><p>Pre-release and build metadata can also be included for additional information.</p><h2 id="release-plan" tabindex="-1">Release plan <a class="header-anchor" href="#release-plan" aria-label="Permalink to &quot;Release plan&quot;">​</a></h2><p>You can check the current release plan of Axe API.</p>',9),ke=oe('<div class="release-table"><table><thead><tr><th>Version</th><th>LTS</th><th>Release Date</th><th>Maintanence</th><th>EOL</th></tr></thead><tbody><tr><td>v1</td><td>✓</td><td>2024-01-01</td><td>2026-01-01</td><td>2027-01-01</td></tr><tr><td>v0.30</td><td></td><td>2023-04-01</td><td>2023-04-01</td><td>2024-10-01</td></tr><tr><td>v0.20</td><td></td><td>2022-10-01</td><td>2023-06-01</td><td>2024-01-01</td></tr></tbody></table></div><h2 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h2><p>At Axe API, we strive to provide a stable and reliable experience for our users.</p><p>We understand the importance of minimizing disruptions and ensuring a smooth transition when introducing changes to our API.</p><p>This section outlines our approach to handling breaking changes and our commitment to providing comprehensive upgrade guides.</p><h3 id="gradual-evolution" tabindex="-1">Gradual Evolution <a class="header-anchor" href="#gradual-evolution" aria-label="Permalink to &quot;Gradual Evolution&quot;">​</a></h3><p>We are dedicated to evolving the Axe API in a gradual manner, avoiding sudden and disruptive changes. We believe in maintaining compatibility whenever possible and minimizing the impact on existing integrations.</p><p>Our goal is to ensure that your applications continue to work seamlessly without requiring extensive modifications.</p><h3 id="major-changes-and-upgrade-guides" tabindex="-1">Major Changes and Upgrade Guides <a class="header-anchor" href="#major-changes-and-upgrade-guides" aria-label="Permalink to &quot;Major Changes and Upgrade Guides&quot;">​</a></h3><p>When a major change is introduced, which may involve significant alterations or require modifications to your code, we will provide a detailed upgrade guide.</p><p>This guide will assist you in understanding the changes, adapting your implementation, and maintaining compatibility with the latest version of the Axe API.</p><p>We aim to make the upgrade process as straightforward as possible, guiding you through any necessary adjustments.</p><h3 id="breaking-changes-frequency" tabindex="-1">Breaking Changes Frequency <a class="header-anchor" href="#breaking-changes-frequency" aria-label="Permalink to &quot;Breaking Changes Frequency&quot;">​</a></h3><p>Starting from version 1 (v1) of the Axe API, we commit to a predictable schedule for introducing breaking changes. To provide a stable environment for our users, we will limit major breaking changes to occur approximately every two years.</p><p>This approach ensures that you have a reasonable timeframe to plan and implement the necessary updates, minimizing the disruption to your application&#39;s functionality.</p><h2 id="feedback-and-support" tabindex="-1">Feedback and Support <a class="header-anchor" href="#feedback-and-support" aria-label="Permalink to &quot;Feedback and Support&quot;">​</a></h2><p>We value your feedback and are committed to providing assistance during the upgrade process. If you encounter any challenges or have questions regarding breaking changes or upgrades, our dedicated support team is available to help you. Feel free to reach out to us via our issues, and we will gladly provide the necessary guidance to ensure a smooth transition.</p><p>We understand the importance of stability and continuity for your applications, and we remain dedicated to delivering a reliable and developer-friendly experience throughout the evolution of the Axe API.</p>',18),Ae=JSON.parse('{"title":"Versioning Policy","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading/versioning-policy.md","filePath":"upgrading/versioning-policy.md"}'),Se={name:"upgrading/versioning-policy.md"},De=Object.assign(Se,{setup(b){return(O,M)=>(A(),D("div",null,[Te,se(we),ke]))}});export{Ae as __pageData,De as default};
