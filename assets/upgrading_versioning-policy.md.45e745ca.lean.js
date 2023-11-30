import{h as he,a3 as fe,o as A,c as D,k as Q,F as U,D as Z,N as R,t as K,l as X,a4 as pe,a as ge,H as se,Q as oe}from"./chunks/framework.ddc2bfae.js";var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var ce={exports:{}};(function(b,O){(function(M,w){b.exports=w()})(ue,function(){var M=1e3,w=6e4,N=36e5,P="millisecond",y="second",S="minute",T="hour",u="day",_="week",m="month",E="quarter",f="year",q="date",F="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var n=["th","st","nd","rd"],e=a%100;return"["+a+(n[(e-20)%10]||n[e]||n[0])+"]"}},v=function(a,n,e){var r=String(a);return!r||r.length>=n?a:""+Array(n+1-r.length).join(e)+a},ee={s:v,z:function(a){var n=-a.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(t,2,"0")},m:function a(n,e){if(n.date()<e.date())return-a(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(r,m),i=e-t<0,s=n.clone().add(r+(i?-1:1),m);return+(-(r+(e-t)/(i?t-s:s-t))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:m,y:f,w:_,d:u,D:q,h:T,m:S,s:y,ms:P,Q:E}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},k="en",Y={};Y[k]=V;var ae="$isDayjsObject",te=function(a){return a instanceof G||!(!a||!a[ae])},z=function a(n,e,r){var t;if(!n)return k;if(typeof n=="string"){var i=n.toLowerCase();Y[i]&&(t=i),e&&(Y[i]=e,t=i);var s=n.split("-");if(!t&&s.length>1)return a(s[0])}else{var d=n.name;Y[d]=n,t=d}return!r&&t&&(k=t),t||!r&&k},l=function(a,n){if(te(a))return a.clone();var e=typeof n=="object"?n:{};return e.date=a,e.args=arguments,new G(e)},o=ee;o.l=z,o.i=te,o.w=function(a,n){return l(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var G=function(){function a(e){this.$L=z(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ae]=!0}var n=a.prototype;return n.parse=function(e){this.$d=function(r){var t=r.date,i=r.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var s=t.match(p);if(s){var d=s[2]-1||0,c=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],d,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)):new Date(s[1],d,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==F},n.isSame=function(e,r){var t=l(e);return this.startOf(r)<=t&&t<=this.endOf(r)},n.isAfter=function(e,r){return l(e)<this.startOf(r)},n.isBefore=function(e,r){return this.endOf(r)<l(e)},n.$g=function(e,r,t){return o.u(e)?this[r]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,r){var t=this,i=!!o.u(r)||r,s=o.p(e),d=function(j,$){var C=o.w(t.$u?Date.UTC(t.$y,$,j):new Date(t.$y,$,j),t);return i?C:C.endOf(u)},c=function(j,$){return o.w(t.toDate()[j].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),t)},h=this.$W,g=this.$M,x=this.$D,B="set"+(this.$u?"UTC":"");switch(s){case f:return i?d(1,0):d(31,11);case m:return i?d(1,g):d(0,g+1);case _:var W=this.$locale().weekStart||0,H=(h<W?h+7:h)-W;return d(i?x-H:x+(6-H),g);case u:case q:return c(B+"Hours",0);case T:return c(B+"Minutes",1);case S:return c(B+"Seconds",2);case y:return c(B+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,r){var t,i=o.p(e),s="set"+(this.$u?"UTC":""),d=(t={},t[u]=s+"Date",t[q]=s+"Date",t[m]=s+"Month",t[f]=s+"FullYear",t[T]=s+"Hours",t[S]=s+"Minutes",t[y]=s+"Seconds",t[P]=s+"Milliseconds",t)[i],c=i===u?this.$D+(r-this.$W):r;if(i===m||i===f){var h=this.clone().set(q,1);h.$d[d](c),h.init(),this.$d=h.set(q,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](c);return this.init(),this},n.set=function(e,r){return this.clone().$set(e,r)},n.get=function(e){return this[o.p(e)]()},n.add=function(e,r){var t,i=this;e=Number(e);var s=o.p(r),d=function(g){var x=l(i);return o.w(x.date(x.date()+Math.round(g*e)),i)};if(s===m)return this.set(m,this.$M+e);if(s===f)return this.set(f,this.$y+e);if(s===u)return d(1);if(s===_)return d(7);var c=(t={},t[S]=w,t[T]=N,t[y]=M,t)[s]||1,h=this.$d.getTime()+e*c;return o.w(h,this)},n.subtract=function(e,r){return this.add(-1*e,r)},n.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||F;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=o.z(this),d=this.$H,c=this.$m,h=this.$M,g=t.weekdays,x=t.months,B=t.meridiem,W=function($,C,L,J){return $&&($[C]||$(r,i))||L[C].slice(0,J)},H=function($){return o.s(d%12||12,$,"0")},j=B||function($,C,L){var J=$<12?"AM":"PM";return L?J.toLowerCase():J};return i.replace(I,function($,C){return C||function(L){switch(L){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return h+1;case"MM":return o.s(h+1,2,"0");case"MMM":return W(t.monthsShort,h,x,3);case"MMMM":return W(x,h);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return W(t.weekdaysMin,r.$W,g,2);case"ddd":return W(t.weekdaysShort,r.$W,g,3);case"dddd":return g[r.$W];case"H":return String(d);case"HH":return o.s(d,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return j(d,c,!0);case"A":return j(d,c,!1);case"m":return String(c);case"mm":return o.s(c,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return s}return null}($)||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,r,t){var i,s=this,d=o.p(r),c=l(e),h=(c.utcOffset()-this.utcOffset())*w,g=this-c,x=function(){return o.m(s,c)};switch(d){case f:i=x()/12;break;case m:i=x();break;case E:i=x()/3;break;case _:i=(g-h)/6048e5;break;case u:i=(g-h)/864e5;break;case T:i=g/N;break;case S:i=g/w;break;case y:i=g/M;break;default:i=g}return t?i:o.a(i)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),i=z(e,r,!0);return i&&(t.$L=i),t},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),ie=G.prototype;return l.prototype=ie,[["$ms",P],["$s",y],["$m",S],["$H",T],["$W",u],["$M",m],["$y",f],["$D",q]].forEach(function(a){ie[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),l.extend=function(a,n){return a.$i||(a(n,G,l),a.$i=!0),l},l.locale=z,l.isDayjs=te,l.unix=function(a){return l(1e3*a)},l.en=Y[k],l.Ls=Y,l.p={},l})})(ce);var me=ce.exports;const ne=de(me);var le={exports:{}};(function(b,O){(function(M,w){b.exports=w()})(ue,function(){var M="month",w="quarter";return function(N,P){var y=P.prototype;y.quarter=function(u){return this.$utils().u(u)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(u-1))};var S=y.add;y.add=function(u,_){return u=Number(u),this.$utils().p(_)===w?this.add(3*u,M):S.bind(this)(u,_)};var T=y.startOf;y.startOf=function(u,_){var m=this.$utils(),E=!!m.u(_)||_;if(m.p(u)===w){var f=this.quarter()-1;return E?this.month(3*f).startOf(M).startOf("day"):this.month(3*f+2).endOf(M).endOf("day")}return T.bind(this)(u,_)}}})})(le);var ve=le.exports;const ye=de(ve);const _e={class:"TimeBar-Header"},$e={class:"TimeBar-ReleaseTitle"},re=48,be={__name:"TimeBar",setup(b){ne.extend(ye);const O=he([{title:"v0.20",periods:[{title:"ACTIVE",start:2022.75,end:2023.5},{title:"MAINTENANCE",start:2023.5,end:2024}]},{title:"v0.30",periods:[{title:"ACTIVE",start:2023.25,end:2024.25},{title:"MAINTENANCE",start:2024.25,end:2024.75}]},{title:"v1",periods:[{title:"ACTIVE",start:2024,end:2026},{title:"MAINTENANCE",start:2026,end:2027}]}]),M=()=>Math.floor(Math.min.apply(Math,O.value.map(p=>p.periods).flat().map(p=>p.start))),w=()=>Math.ceil(Math.max.apply(Math,O.value.map(I=>I.periods).flat().map(I=>I.end)))-1,N=M(),P=w(),y=ne().year(),S=ne().quarter(),T=y+.25*(S-1),u=P-N+1,_=Array.from(Array(u).keys()),E=100/u/4,f=p=>100*(p.start-N)/u,q=p=>{const V=100-100*(P-p.end+1)/u;return 100-f(p)-(100-V)},F=p=>p.title==="ACTIVE"?(p.end<T,"#46497d"):p.title==="MAINTENANCE"?"#282a2f":"#3c3422";return(p,I)=>{const V=fe("tooltip");return A(),D("div",null,[Q("div",_e,[(A(!0),D(U,null,Z(X(_),v=>(A(),D("div",{class:"TimeBar-Year",key:v,style:R({left:`${100*v/u}%`})},K(X(N)+v),5))),128)),(A(!0),D(U,null,Z(X(_),v=>(A(),D("div",{class:"TimeBar-YearLine",key:v,style:R({left:`${100*v/u}%`,height:`${O.value.length*re}px`})},null,4))),128)),Q("div",{class:"TimeBar-CurrentQuarter",style:R({left:`${f({start:T})}%`,width:`calc(${E}% - 1px)`,height:`calc(${O.value.length*re}px - 30px)`})},null,4),Q("div",{class:"TimeBar-CurrentQuarterTitle",style:R({left:`${f({start:T})}%`,top:`calc(${O.value.length*re}px - 25px)`,width:`calc(${E}% - 1px)`})}," Q"+K(X(S)),5)]),(A(!0),D(U,null,Z(O.value,(v,ee)=>(A(),D("div",{class:"TimeBar-Release",key:ee},[Q("div",$e,K(v.title),1),(A(!0),D(U,null,Z(v.periods,k=>pe((A(),D("div",{class:"TimeBar-PeriodTitle",key:v.title+k.title,style:R({background:F(k),left:`${f(k)}%`,width:`${q(k)}%`})},[ge(K(k.title),1)],4)),[[V,k.title]])),128))]))),128))])}}};const Me={class:"release-container"},we={__name:"ReleasePlan",setup(b){return(O,M)=>(A(),D("div",Me,[se(be)]))}};const Te=oe("",9),ke=oe("",18),Ae=JSON.parse('{"title":"Versioning Policy","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading/versioning-policy.md","filePath":"upgrading/versioning-policy.md"}'),xe={name:"upgrading/versioning-policy.md"},De=Object.assign(xe,{setup(b){return(O,M)=>(A(),D("div",null,[Te,se(we),ke]))}});export{Ae as __pageData,De as default};
