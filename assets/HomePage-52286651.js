import{w as gn,s as Rt,r as g,T as He,u as ft,i as yn,_ as x,R as bn,j as a,C as xn,c as vn,n as $n,g as B,a as wn,M as Sn,b as ve,d as Pt,e as jn,f as _n,h as kn,k as S,l as Ue,m as Cn,W as On}from"./index-f6f25fa8.js";import"./hoist-non-react-statics.cjs-eed63a4b.js";import{b as At}from"./bg_img_bubbles-c11f2eb9.js";var Mn=gn(function(e,t){var n=e.styles,r=Rt([n],void 0,g.useContext(He)),o=g.useRef();return ft(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(l=!0,c.setAttribute("data-emotion",i),s.hydrate([c])),o.current=[s,l],function(){s.flush()}},[t]),ft(function(){var i=o.current,s=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&yn(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function Et(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Rt(t)}var Tn=function(){var t=Et.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ve={},Ft={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ft);var le=Ft.exports,Be={};function q(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function It(e){if(!q(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=It(e[n])}),t}function D(e,t,n={clone:!0}){const r=n.clone?x({},e):e;return q(e)&&q(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(q(t[o])&&o in e&&q(e[o])?r[o]=D(e[o],t[o],n):n.clone?r[o]=q(t[o])?It(t[o]):t[o]:r[o]=t[o])}),r}const Rn=Object.freeze(Object.defineProperty({__proto__:null,default:D,isPlainObject:q},Symbol.toStringTag,{value:"Module"}));function se(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const Pn=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));var zt={exports:{}},b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=Symbol.for("react.element"),Xe=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),_e=Symbol.for("react.context"),An=Symbol.for("react.server_context"),ke=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),En=Symbol.for("react.offscreen"),Dt;Dt=Symbol.for("react.module.reference");function E(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ye:switch(e=e.type,e){case $e:case Se:case we:case Ce:case Oe:return e;default:switch(e=e&&e.$$typeof,e){case An:case _e:case ke:case Te:case Me:case je:return e;default:return t}}case Xe:return t}}}b.ContextConsumer=_e;b.ContextProvider=je;b.Element=Ye;b.ForwardRef=ke;b.Fragment=$e;b.Lazy=Te;b.Memo=Me;b.Portal=Xe;b.Profiler=Se;b.StrictMode=we;b.Suspense=Ce;b.SuspenseList=Oe;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(e){return E(e)===_e};b.isContextProvider=function(e){return E(e)===je};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ye};b.isForwardRef=function(e){return E(e)===ke};b.isFragment=function(e){return E(e)===$e};b.isLazy=function(e){return E(e)===Te};b.isMemo=function(e){return E(e)===Me};b.isPortal=function(e){return E(e)===Xe};b.isProfiler=function(e){return E(e)===Se};b.isStrictMode=function(e){return E(e)===we};b.isSuspense=function(e){return E(e)===Ce};b.isSuspenseList=function(e){return E(e)===Oe};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$e||e===Se||e===we||e===Ce||e===Oe||e===En||typeof e=="object"&&e!==null&&(e.$$typeof===Te||e.$$typeof===Me||e.$$typeof===je||e.$$typeof===_e||e.$$typeof===ke||e.$$typeof===Dt||e.getModuleId!==void 0)};b.typeOf=E;zt.exports=b;var pt=zt.exports;const Fn=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Bt(e){const t=`${e}`.match(Fn);return t&&t[1]||""}function Lt(e,t=""){return e.displayName||e.name||Bt(e)||t}function ht(e,t,n){const r=Lt(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function In(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Lt(e,"Component");if(typeof e=="object")switch(e.$$typeof){case pt.ForwardRef:return ht(e,e.render,"ForwardRef");case pt.Memo:return ht(e,e.type,"memo");default:return}}}const zn=Object.freeze(Object.defineProperty({__proto__:null,default:In,getFunctionName:Bt},Symbol.toStringTag,{value:"Module"}));function G(e){if(typeof e!="string")throw new Error(se(7));return e.charAt(0).toUpperCase()+e.slice(1)}const Dn=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));function Bn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Ln(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Nn(e,t){return()=>null}function Wn(e,t){var n,r;return g.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Nt(e){return e&&e.ownerDocument||document}function Kn(e){return Nt(e).defaultView||window}function qn(e,t){return()=>null}function Wt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Gn=typeof window<"u"?g.useLayoutEffect:g.useEffect,Kt=Gn;let mt=0;function Hn(e){const[t,n]=g.useState(e),r=e||t;return g.useEffect(()=>{t==null&&(mt+=1,n(`mui-${mt}`))},[t]),r}const gt=bn["useId".toString()];function Un(e){if(gt!==void 0){const t=gt();return e??t}return Hn(e)}function Vn(e,t,n,r,o){return null}function Yn({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=g.useRef(e!==void 0),[i,s]=g.useState(t),l=o?e:i,c=g.useCallback(d=>{o||s(d)},[]);return[l,c]}function Xn(e){const t=g.useRef(e);return Kt(()=>{t.current=e}),g.useRef((...n)=>(0,t.current)(...n)).current}function Jn(...e){return g.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Wt(n,t)})},e)}class Je{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Je}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}let Re=!0,Ke=!1;const Qn=new Je,Zn={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function er(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Zn[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function tr(e){e.metaKey||e.altKey||e.ctrlKey||(Re=!0)}function Le(){Re=!1}function nr(){this.visibilityState==="hidden"&&Ke&&(Re=!0)}function rr(e){e.addEventListener("keydown",tr,!0),e.addEventListener("mousedown",Le,!0),e.addEventListener("pointerdown",Le,!0),e.addEventListener("touchstart",Le,!0),e.addEventListener("visibilitychange",nr,!0)}function or(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Re||er(t)}function ir(){const e=g.useCallback(o=>{o!=null&&rr(o.ownerDocument)},[]),t=g.useRef(!1);function n(){return t.current?(Ke=!0,Qn.start(100,()=>{Ke=!1}),t.current=!1,!0):!1}function r(o){return or(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function qt(e,t){const n=x({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=x({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=x({},i),Object.keys(o).forEach(s=>{n[r][s]=qt(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function sr(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const l=t(s);l!==""&&i.push(l),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const yt=e=>e,ar=()=>{let e=yt;return{configure(t){e=t},generate(t){return e(t)},reset(){e=yt}}},lr=ar(),Gt=lr,cr={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ht(e,t,n="Mui"){const r=cr[t];return r?`${n}-${r}`:`${Gt.generate(e)}-${t}`}function ur(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ht(e,o,n)}),r}function dr(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const fr=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"}));function H(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ut(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ut(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function pr(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ut(e))&&(r&&(r+=" "),r+=t);return r}function hr(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:qt(t.components[n].defaultProps,r)}const mr=["values","unit","step"],gr=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>x({},n,{[r.key]:r.val}),{})};function Vt(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=H(e,mr),i=gr(t),s=Object.keys(i);function l(u){return`@media (min-width:${typeof t[u]=="number"?t[u]:u}${n})`}function c(u){return`@media (max-width:${(typeof t[u]=="number"?t[u]:u)-r/100}${n})`}function d(u,y){const m=s.indexOf(y);return`@media (min-width:${typeof t[u]=="number"?t[u]:u}${n}) and (max-width:${(m!==-1&&typeof t[s[m]]=="number"?t[s[m]]:y)-r/100}${n})`}function p(u){return s.indexOf(u)+1<s.length?d(u,s[s.indexOf(u)+1]):l(u)}function h(u){const y=s.indexOf(u);return y===0?l(s[1]):y===s.length-1?c(s[y]):d(u,s[s.indexOf(u)+1]).replace("@media","@media not all and")}return x({keys:s,values:i,up:l,down:c,between:d,only:p,not:h,unit:n},o)}const yr={borderRadius:4},br=yr;function ie(e,t){return t?D(e,t,{clone:!1}):e}const Qe={xs:0,sm:600,md:900,lg:1200,xl:1536},bt={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Qe[e]}px)`};function W(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||bt;return t.reduce((s,l,c)=>(s[i.up(i.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const i=r.breakpoints||bt;return Object.keys(t).reduce((s,l)=>{if(Object.keys(i.values||Qe).indexOf(l)!==-1){const c=i.up(l);s[c]=n(t[l],l)}else{const c=l;s[c]=t[c]}return s},{})}return n(t)}function xr(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function vr(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Pe(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function be(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Pe(e,n)||r,t&&(o=t(o,r,e)),o}function j(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const l=s[t],c=s.theme,d=Pe(c,r)||{};return W(s,l,h=>{let u=be(d,o,h);return h===u&&typeof h=="string"&&(u=be(d,o,`${t}${h==="default"?"":G(h)}`,h)),n===!1?u:{[n]:u}})};return i.propTypes={},i.filterProps=[t],i}function $r(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const wr={m:"margin",p:"padding"},Sr={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},xt={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},jr=$r(e=>{if(e.length>2)if(xt[e])e=xt[e];else return[e];const[t,n]=e.split(""),r=wr[t],o=Sr[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Ze=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],et=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ze,...et];function ce(e,t,n,r){var o;const i=(o=Pe(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Yt(e){return ce(e,"spacing",8)}function ue(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function _r(e,t){return n=>e.reduce((r,o)=>(r[o]=ue(t,n),r),{})}function kr(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=jr(n),i=_r(o,r),s=e[n];return W(e,s,i)}function Xt(e,t){const n=Yt(e.theme);return Object.keys(e).map(r=>kr(e,t,r,n)).reduce(ie,{})}function $(e){return Xt(e,Ze)}$.propTypes={};$.filterProps=Ze;function w(e){return Xt(e,et)}w.propTypes={};w.filterProps=et;function Cr(e=8){if(e.mui)return e;const t=Yt({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Ae(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?ie(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function R(e){return typeof e!="number"?e:`${e}px solid`}function F(e,t){return j({prop:e,themeKey:"borders",transform:t})}const Or=F("border",R),Mr=F("borderTop",R),Tr=F("borderRight",R),Rr=F("borderBottom",R),Pr=F("borderLeft",R),Ar=F("borderColor"),Er=F("borderTopColor"),Fr=F("borderRightColor"),Ir=F("borderBottomColor"),zr=F("borderLeftColor"),Dr=F("outline",R),Br=F("outlineColor"),Ee=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ce(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:ue(t,r)});return W(e,e.borderRadius,n)}return null};Ee.propTypes={};Ee.filterProps=["borderRadius"];Ae(Or,Mr,Tr,Rr,Pr,Ar,Er,Fr,Ir,zr,Ee,Dr,Br);const Fe=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ce(e.theme,"spacing",8),n=r=>({gap:ue(t,r)});return W(e,e.gap,n)}return null};Fe.propTypes={};Fe.filterProps=["gap"];const Ie=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({columnGap:ue(t,r)});return W(e,e.columnGap,n)}return null};Ie.propTypes={};Ie.filterProps=["columnGap"];const ze=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({rowGap:ue(t,r)});return W(e,e.rowGap,n)}return null};ze.propTypes={};ze.filterProps=["rowGap"];const Lr=j({prop:"gridColumn"}),Nr=j({prop:"gridRow"}),Wr=j({prop:"gridAutoFlow"}),Kr=j({prop:"gridAutoColumns"}),qr=j({prop:"gridAutoRows"}),Gr=j({prop:"gridTemplateColumns"}),Hr=j({prop:"gridTemplateRows"}),Ur=j({prop:"gridTemplateAreas"}),Vr=j({prop:"gridArea"});Ae(Fe,Ie,ze,Lr,Nr,Wr,Kr,qr,Gr,Hr,Ur,Vr);function Z(e,t){return t==="grey"?t:e}const Yr=j({prop:"color",themeKey:"palette",transform:Z}),Xr=j({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Z}),Jr=j({prop:"backgroundColor",themeKey:"palette",transform:Z});Ae(Yr,Xr,Jr);function M(e){return e<=1&&e!==0?`${e*100}%`:e}const Qr=j({prop:"width",transform:M}),tt=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Qe[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:M(n)}};return W(e,e.maxWidth,t)}return null};tt.filterProps=["maxWidth"];const Zr=j({prop:"minWidth",transform:M}),eo=j({prop:"height",transform:M}),to=j({prop:"maxHeight",transform:M}),no=j({prop:"minHeight",transform:M});j({prop:"size",cssProperty:"width",transform:M});j({prop:"size",cssProperty:"height",transform:M});const ro=j({prop:"boxSizing"});Ae(Qr,tt,Zr,eo,to,no,ro);const oo={border:{themeKey:"borders",transform:R},borderTop:{themeKey:"borders",transform:R},borderRight:{themeKey:"borders",transform:R},borderBottom:{themeKey:"borders",transform:R},borderLeft:{themeKey:"borders",transform:R},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:R},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ee},color:{themeKey:"palette",transform:Z},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Z},backgroundColor:{themeKey:"palette",transform:Z},p:{style:w},pt:{style:w},pr:{style:w},pb:{style:w},pl:{style:w},px:{style:w},py:{style:w},padding:{style:w},paddingTop:{style:w},paddingRight:{style:w},paddingBottom:{style:w},paddingLeft:{style:w},paddingX:{style:w},paddingY:{style:w},paddingInline:{style:w},paddingInlineStart:{style:w},paddingInlineEnd:{style:w},paddingBlock:{style:w},paddingBlockStart:{style:w},paddingBlockEnd:{style:w},m:{style:$},mt:{style:$},mr:{style:$},mb:{style:$},ml:{style:$},mx:{style:$},my:{style:$},margin:{style:$},marginTop:{style:$},marginRight:{style:$},marginBottom:{style:$},marginLeft:{style:$},marginX:{style:$},marginY:{style:$},marginInline:{style:$},marginInlineStart:{style:$},marginInlineEnd:{style:$},marginBlock:{style:$},marginBlockStart:{style:$},marginBlockEnd:{style:$},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Fe},rowGap:{style:ze},columnGap:{style:Ie},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:M},maxWidth:{style:tt},minWidth:{transform:M},height:{transform:M},maxHeight:{transform:M},minHeight:{transform:M},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},de=oo;function io(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function so(e,t){return typeof e=="function"?e(t):e}function Jt(){function e(n,r,o,i){const s={[n]:r,theme:o},l=i[n];if(!l)return{[n]:r};const{cssProperty:c=n,themeKey:d,transform:p,style:h}=l;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[n]:r};const u=Pe(o,d)||{};return h?h(s):W(s,r,m=>{let f=be(u,p,m);return m===f&&typeof m=="string"&&(f=be(u,p,`${n}${m==="default"?"":G(m)}`,m)),c===!1?f:{[c]:f}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:de;function l(c){let d=c;if(typeof c=="function")d=c(i);else if(typeof c!="object")return c;if(!d)return null;const p=xr(i.breakpoints),h=Object.keys(p);let u=p;return Object.keys(d).forEach(y=>{const m=so(d[y],i);if(m!=null)if(typeof m=="object")if(s[y])u=ie(u,e(y,m,i,s));else{const f=W({theme:i},m,C=>({[y]:C}));io(f,m)?u[y]=t({sx:m,theme:i}):u=ie(u,f)}else u=ie(u,e(y,m,i,s))}),vr(h,u)}return Array.isArray(o)?o.map(l):l(o)}return t}const Qt=Jt();Qt.filterProps=["sx"];const nt=Qt;function Zt(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const ao=["breakpoints","palette","spacing","shape"];function rt(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=H(e,ao),l=Vt(n),c=Cr(o);let d=D({breakpoints:l,direction:"ltr",components:{},palette:x({mode:"light"},r),spacing:c,shape:x({},br,i)},s);return d.applyStyles=Zt,d=t.reduce((p,h)=>D(p,h),d),d.unstable_sxConfig=x({},de,s==null?void 0:s.unstable_sxConfig),d.unstable_sx=function(h){return nt({sx:h,theme:this})},d}const lo=Object.freeze(Object.defineProperty({__proto__:null,default:rt,private_createBreakpoints:Vt,unstable_applyStyles:Zt},Symbol.toStringTag,{value:"Module"}));let qe;typeof document=="object"&&(qe=vn({key:"css",prepend:!0}));function co(e){const{injectFirst:t,children:n}=e;return t&&qe?a.jsx(xn,{value:qe,children:n}):n}function uo(e){return e==null||Object.keys(e).length===0}function fo(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(uo(o)?n:o):t;return a.jsx(Mn,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function po(e,t){return $n(e,t)}const ho=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},mo=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:fo,StyledEngineProvider:co,ThemeContext:He,css:Et,default:po,internal_processStyles:ho,keyframes:Tn},Symbol.toStringTag,{value:"Module"}));function go(e){return Object.keys(e).length===0}function yo(e=null){const t=g.useContext(He);return!t||go(t)?e:t}const bo=rt();function xo(e=bo){return yo(e)}function vo({props:e,name:t,defaultTheme:n,themeId:r}){let o=xo(n);return r&&(o=o[r]||o),hr({theme:o,name:t,props:e})}const $o=["sx"],wo=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:de;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function So(e){const{sx:t}=e,n=H(e,$o),{systemProps:r,otherProps:o}=wo(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const l=t(...s);return q(l)?x({},r,l):r}:i=x({},r,t),x({},o,{sx:i})}const jo=Object.freeze(Object.defineProperty({__proto__:null,default:nt,extendSxProp:So,unstable_createStyleFunctionSx:Jt,unstable_defaultSxConfig:de},Symbol.toStringTag,{value:"Module"}));function _o(e,t){return x({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var _={};const ko=B(Pn),Co=B(fr);var en=le;Object.defineProperty(_,"__esModule",{value:!0});_.alpha=on;_.blend=Lo;_.colorChannel=void 0;var Oo=_.darken=it;_.decomposeColor=A;_.emphasize=Bo;var Mo=_.getContrastRatio=Fo;_.getLuminance=xe;_.hexToRgb=tn;_.hslToRgb=rn;var To=_.lighten=st;_.private_safeAlpha=Io;_.private_safeColorChannel=void 0;_.private_safeDarken=zo;_.private_safeEmphasize=sn;_.private_safeLighten=Do;_.recomposeColor=ee;_.rgbToHex=Eo;var vt=en(ko),Ro=en(Co);function ot(e,t=0,n=1){return(0,Ro.default)(e,t,n)}function tn(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Po(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function A(e){if(e.type)return e;if(e.charAt(0)==="#")return A(tn(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,vt.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,vt.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const nn=e=>{const t=A(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};_.colorChannel=nn;const Ao=(e,t)=>{try{return nn(e)}catch{return e}};_.private_safeColorChannel=Ao;function ee(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Eo(e){if(e.indexOf("#")===0)return e;const{values:t}=A(e);return`#${t.map((n,r)=>Po(r===3?Math.round(255*n):n)).join("")}`}function rn(e){e=A(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(d,p=(d+n/30)%12)=>o-i*Math.max(Math.min(p-3,9-p,1),-1);let l="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),ee({type:l,values:c})}function xe(e){e=A(e);let t=e.type==="hsl"||e.type==="hsla"?A(rn(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Fo(e,t){const n=xe(e),r=xe(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function on(e,t){return e=A(e),t=ot(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ee(e)}function Io(e,t,n){try{return on(e,t)}catch{return e}}function it(e,t){if(e=A(e),t=ot(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ee(e)}function zo(e,t,n){try{return it(e,t)}catch{return e}}function st(e,t){if(e=A(e),t=ot(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ee(e)}function Do(e,t,n){try{return st(e,t)}catch{return e}}function Bo(e,t=.15){return xe(e)>.5?it(e,t):st(e,t)}function sn(e,t,n){try{return sn(e,t)}catch{return e}}function Lo(e,t,n,r=1){const o=(c,d)=>Math.round((c**(1/r)*(1-n)+d**(1/r)*n)**r),i=A(e),s=A(t),l=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return ee({type:"rgb",values:l})}const No={black:"#000",white:"#fff"},ae=No,Wo={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ko=Wo,qo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},V=qo,Go={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Y=Go,Ho={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},oe=Ho,Uo={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},X=Uo,Vo={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},J=Vo,Yo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Q=Yo,Xo=["mode","contrastThreshold","tonalOffset"],$t={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ae.white,default:ae.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ne={text:{primary:ae.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ae.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function wt(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=To(e.main,o):t==="dark"&&(e.dark=Oo(e.main,i)))}function Jo(e="light"){return e==="dark"?{main:X[200],light:X[50],dark:X[400]}:{main:X[700],light:X[400],dark:X[800]}}function Qo(e="light"){return e==="dark"?{main:V[200],light:V[50],dark:V[400]}:{main:V[500],light:V[300],dark:V[700]}}function Zo(e="light"){return e==="dark"?{main:Y[500],light:Y[300],dark:Y[700]}:{main:Y[700],light:Y[400],dark:Y[800]}}function ei(e="light"){return e==="dark"?{main:J[400],light:J[300],dark:J[700]}:{main:J[700],light:J[500],dark:J[900]}}function ti(e="light"){return e==="dark"?{main:Q[400],light:Q[300],dark:Q[700]}:{main:Q[800],light:Q[500],dark:Q[900]}}function ni(e="light"){return e==="dark"?{main:oe[400],light:oe[300],dark:oe[700]}:{main:"#ed6c02",light:oe[500],dark:oe[900]}}function ri(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=H(e,Xo),i=e.primary||Jo(t),s=e.secondary||Qo(t),l=e.error||Zo(t),c=e.info||ei(t),d=e.success||ti(t),p=e.warning||ni(t);function h(f){return Mo(f,Ne.text.primary)>=n?Ne.text.primary:$t.text.primary}const u=({color:f,name:C,mainShade:k=500,lightShade:K=300,darkShade:U=700})=>{if(f=x({},f),!f.main&&f[k]&&(f.main=f[k]),!f.hasOwnProperty("main"))throw new Error(se(11,C?` (${C})`:"",k));if(typeof f.main!="string")throw new Error(se(12,C?` (${C})`:"",JSON.stringify(f.main)));return wt(f,"light",K,r),wt(f,"dark",U,r),f.contrastText||(f.contrastText=h(f.main)),f},y={dark:Ne,light:$t};return D(x({common:x({},ae),mode:t,primary:u({color:i,name:"primary"}),secondary:u({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:u({color:l,name:"error"}),warning:u({color:p,name:"warning"}),info:u({color:c,name:"info"}),success:u({color:d,name:"success"}),grey:Ko,contrastThreshold:n,getContrastText:h,augmentColor:u,tonalOffset:r},y[t]),o)}const oi=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function ii(e){return Math.round(e*1e5)/1e5}const St={textTransform:"uppercase"},jt='"Roboto", "Helvetica", "Arial", sans-serif';function si(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=jt,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:p,pxToRem:h}=n,u=H(n,oi),y=o/14,m=h||(k=>`${k/d*y}rem`),f=(k,K,U,pe,O)=>x({fontFamily:r,fontWeight:k,fontSize:m(K),lineHeight:U},r===jt?{letterSpacing:`${ii(pe/K)}em`}:{},O,p),C={h1:f(i,96,1.167,-1.5),h2:f(i,60,1.2,-.5),h3:f(s,48,1.167,0),h4:f(s,34,1.235,.25),h5:f(s,24,1.334,0),h6:f(l,20,1.6,.15),subtitle1:f(s,16,1.75,.15),subtitle2:f(l,14,1.57,.1),body1:f(s,16,1.5,.15),body2:f(s,14,1.43,.15),button:f(l,14,1.75,.4,St),caption:f(s,12,1.66,.4),overline:f(s,12,2.66,1,St),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return D(x({htmlFontSize:d,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:l,fontWeightBold:c},C),u,{clone:!1})}const ai=.2,li=.14,ci=.12;function v(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ai})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${li})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ci})`].join(",")}const ui=["none",v(0,2,1,-1,0,1,1,0,0,1,3,0),v(0,3,1,-2,0,2,2,0,0,1,5,0),v(0,3,3,-2,0,3,4,0,0,1,8,0),v(0,2,4,-1,0,4,5,0,0,1,10,0),v(0,3,5,-1,0,5,8,0,0,1,14,0),v(0,3,5,-1,0,6,10,0,0,1,18,0),v(0,4,5,-2,0,7,10,1,0,2,16,1),v(0,5,5,-3,0,8,10,1,0,3,14,2),v(0,5,6,-3,0,9,12,1,0,3,16,2),v(0,6,6,-3,0,10,14,1,0,4,18,3),v(0,6,7,-4,0,11,15,1,0,4,20,3),v(0,7,8,-4,0,12,17,2,0,5,22,4),v(0,7,8,-4,0,13,19,2,0,5,24,4),v(0,7,9,-4,0,14,21,2,0,5,26,4),v(0,8,9,-5,0,15,22,2,0,6,28,5),v(0,8,10,-5,0,16,24,2,0,6,30,5),v(0,8,11,-5,0,17,26,2,0,6,32,5),v(0,9,11,-5,0,18,28,2,0,7,34,6),v(0,9,12,-6,0,19,29,2,0,7,36,6),v(0,10,13,-6,0,20,31,3,0,8,38,7),v(0,10,13,-6,0,21,33,3,0,8,40,7),v(0,10,14,-6,0,22,35,3,0,8,42,7),v(0,11,14,-7,0,23,36,3,0,9,44,8),v(0,11,15,-7,0,24,38,3,0,9,46,8)],di=ui,fi=["duration","easing","delay"],pi={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},hi={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function _t(e){return`${Math.round(e)}ms`}function mi(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function gi(e){const t=x({},pi,e.easing),n=x({},hi,e.duration);return x({getAutoHeightDuration:mi,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:l=t.easeInOut,delay:c=0}=i;return H(i,fi),(Array.isArray(o)?o:[o]).map(d=>`${d} ${typeof s=="string"?s:_t(s)} ${l} ${typeof c=="string"?c:_t(c)}`).join(",")}},e,{easing:t,duration:n})}const yi={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},bi=yi,xi=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function vi(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=H(e,xi);if(e.vars)throw new Error(se(18));const l=ri(r),c=rt(e);let d=D(c,{mixins:_o(c.breakpoints,n),palette:l,shadows:di.slice(),typography:si(l,i),transitions:gi(o),zIndex:x({},bi)});return d=D(d,s),d=t.reduce((p,h)=>D(p,h),d),d.unstable_sxConfig=x({},de,s==null?void 0:s.unstable_sxConfig),d.unstable_sx=function(h){return nt({sx:h,theme:this})},d}const $i=vi(),an=$i,ln="$$material";function wi({props:e,name:t}){return vo({props:e,name:t,defaultTheme:an,themeId:ln})}var fe={};const Si=B(wn);var We={exports:{}},kt;function ji(){return kt||(kt=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),s,l;for(l=0;l<i.length;l++)s=i[l],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(We)),We.exports}const _i=B(mo),ki=B(Rn),Ci=B(Dn),Oi=B(zn),Mi=B(lo),Ti=B(jo);var te=le;Object.defineProperty(fe,"__esModule",{value:!0});var Ri=fe.default=qi;fe.shouldForwardProp=ge;fe.systemDefaultTheme=void 0;var T=te(Si),Ge=te(ji()),Ct=Di(_i),Pi=ki;te(Ci);te(Oi);var Ai=te(Mi),Ei=te(Ti);const Fi=["ownerState"],Ii=["variants"],zi=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function cn(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(cn=function(r){return r?n:t})(e)}function Di(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=cn(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function Bi(e){return Object.keys(e).length===0}function Li(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ge(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Ni=fe.systemDefaultTheme=(0,Ai.default)(),Wi=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function me({defaultTheme:e,theme:t,themeId:n}){return Bi(t)?e:t[n]||t}function Ki(e){return e?(t,n)=>n[e]:null}function ye(e,t){let{ownerState:n}=t,r=(0,Ge.default)(t,Fi);const o=typeof e=="function"?e((0,T.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>ye(i,(0,T.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let l=(0,Ge.default)(o,Ii);return i.forEach(c=>{let d=!0;typeof c.props=="function"?d=c.props((0,T.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(p=>{(n==null?void 0:n[p])!==c.props[p]&&r[p]!==c.props[p]&&(d=!1)}),d&&(Array.isArray(l)||(l=[l]),l.push(typeof c.style=="function"?c.style((0,T.default)({ownerState:n},r,n)):c.style))}),l}return o}function qi(e={}){const{themeId:t,defaultTheme:n=Ni,rootShouldForwardProp:r=ge,slotShouldForwardProp:o=ge}=e,i=s=>(0,Ei.default)((0,T.default)({},s,{theme:me((0,T.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,l={})=>{(0,Ct.internal_processStyles)(s,O=>O.filter(L=>!(L!=null&&L.__mui_systemSx)));const{name:c,slot:d,skipVariantsResolver:p,skipSx:h,overridesResolver:u=Ki(Wi(d))}=l,y=(0,Ge.default)(l,zi),m=p!==void 0?p:d&&d!=="Root"&&d!=="root"||!1,f=h||!1;let C,k=ge;d==="Root"||d==="root"?k=r:d?k=o:Li(s)&&(k=void 0);const K=(0,Ct.default)(s,(0,T.default)({shouldForwardProp:k,label:C},y)),U=O=>typeof O=="function"&&O.__emotion_real!==O||(0,Pi.isPlainObject)(O)?L=>ye(O,(0,T.default)({},L,{theme:me({theme:L.theme,defaultTheme:n,themeId:t})})):O,pe=(O,...L)=>{let De=U(O);const ne=L?L.map(U):[];c&&u&&ne.push(N=>{const z=me((0,T.default)({},N,{defaultTheme:n,themeId:t}));if(!z.components||!z.components[c]||!z.components[c].styleOverrides)return null;const re=z.components[c].styleOverrides,he={};return Object.entries(re).forEach(([hn,mn])=>{he[hn]=ye(mn,(0,T.default)({},N,{theme:z}))}),u(N,he)}),c&&!m&&ne.push(N=>{var z;const re=me((0,T.default)({},N,{defaultTheme:n,themeId:t})),he=re==null||(z=re.components)==null||(z=z[c])==null?void 0:z.variants;return ye({variants:he},(0,T.default)({},N,{theme:re}))}),f||ne.push(i);const ut=ne.length-L.length;if(Array.isArray(O)&&ut>0){const N=new Array(ut).fill("");De=[...O,...N],De.raw=[...O.raw,...N]}const dt=K(De,...ne);return s.muiName&&(dt.muiName=s.muiName),dt};return K.withConfig&&(pe.withConfig=K.withConfig),pe}}function Gi(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Hi=e=>Gi(e)&&e!=="classes",Ui=Hi,Vi=Ri({themeId:ln,defaultTheme:an,rootShouldForwardProp:Ui}),Yi=Vi;function Xi(e){return Ht("MuiSvgIcon",e)}ur("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ji=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Qi=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${G(t)}`,`fontSize${G(n)}`]};return sr(o,Xi,r)},Zi=Yi("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${G(n.color)}`],t[`fontSize${G(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,s,l,c,d,p,h,u,y,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((d=e.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[t.fontSize],color:(h=(u=(e.vars||e).palette)==null||(u=u[t.color])==null?void 0:u.main)!=null?h:{action:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.active,disabled:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),un=g.forwardRef(function(t,n){const r=wi({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:l="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:h,viewBox:u="0 0 24 24"}=r,y=H(r,Ji),m=g.isValidElement(o)&&o.type==="svg",f=x({},r,{color:s,component:l,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:p,viewBox:u,hasSvgAsChild:m}),C={};p||(C.viewBox=u);const k=Qi(f);return a.jsxs(Zi,x({as:l,className:pr(k.root,i),focusable:"false",color:d,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},C,y,m&&o.props,{ownerState:f,children:[m?o.props.children:o,h?a.jsx("title",{children:h}):null]}))});un.muiName="SvgIcon";const Ot=un;function es(e,t){function n(r,o){return a.jsx(Ot,x({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Ot.muiName,g.memo(g.forwardRef(n))}const ts={configure:e=>{Gt.configure(e)}},ns=Object.freeze(Object.defineProperty({__proto__:null,capitalize:G,createChainedFunction:Bn,createSvgIcon:es,debounce:Ln,deprecatedPropType:Nn,isMuiElement:Wn,ownerDocument:Nt,ownerWindow:Kn,requirePropFactory:qn,setRef:Wt,unstable_ClassNameGenerator:ts,unstable_useEnhancedEffect:Kt,unstable_useId:Un,unsupportedProp:Vn,useControlled:Yn,useEventCallback:Xn,useForkRef:Jn,useIsFocusVisible:ir},Symbol.toStringTag,{value:"Module"})),rs=B(ns);var Mt;function at(){return Mt||(Mt=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=rs}(Be)),Be}var os=le;Object.defineProperty(Ve,"__esModule",{value:!0});var dn=Ve.default=void 0,is=os(at()),ss=a;dn=Ve.default=(0,is.default)((0,ss.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"CloseOutlined");const as=({children:e})=>a.jsx(Sn,{children:e}),ls=()=>{const[e,t]=g.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return{isOpen:e,openModal:n,closeModal:r,handleKeyDown:i=>{i.key==="Escape"&&r()}}},cs=e=>e.water.month,us=e=>{var t;return(t=e.water.dayInfo)==null?void 0:t.norm},ds=()=>{const e=ve(us),t=Pt(),n=r=>{r.preventDefault(),t(jn(r.target.value))};return a.jsxs("form",{children:[a.jsxs("label",{children:["Write down how much water you will drink:",a.jsx("input",{type:"number",name:"dailyNorma",defaultValue:e})]}),a.jsx("button",{className:"confirm",onClick:n,children:"Save"})]})},fs=()=>{const e=ve(_n),[t,n]=g.useState(e),[r,o]=g.useState(0),[i,s]=g.useState(0),l=d=>{const{name:p,value:h}=d.target;switch(p){case"gender":n(h);break;case"weight":o(h);break;case"activeHours":s(h);break}},c=t==="woman"?r*.03+i*.4:r*.04+i*.6;return a.jsx("div",{children:a.jsxs("form",{action:"",children:[a.jsx("h3",{children:"Calculate your rate:"}),a.jsxs("label",{children:["Gender",a.jsxs("label",{children:["Male",a.jsx("input",{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:l})]}),a.jsxs("label",{children:["Female",a.jsx("input",{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:l})]})]}),a.jsxs("label",{htmlFor:"",children:["Your weight in kilograms:",a.jsx("input",{type:"number",name:"weight",value:r,onChange:l})]}),a.jsxs("label",{htmlFor:"",children:["The time of active participation in sports or other activities with a high physical. load in hours:",a.jsx("input",{type:"number",name:"activeHours",value:i,onChange:l})]}),a.jsxs("p",{children:["The required amount of water in liters per day:"," ",a.jsxs("span",{children:[c," L"]})]})]})})},ps=()=>{const{isOpen:e,closeModal:t,handleKeyDown:n}=ls();return document.addEventListener("keydown",n),a.jsx(a.Fragment,{children:e&&a.jsx(as,{onClose:t,children:a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsxs("div",{className:"topline",children:[a.jsx("h2",{children:"My daily norm"}),a.jsx(dn,{className:"close",onClick:t})]}),a.jsxs("div",{children:[a.jsxs("p",{children:["For woman: ",a.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs("p",{children:["For man: ",a.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx("div",{children:a.jsxs("p",{children:[a.jsx("span",{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),a.jsx("div",{children:a.jsx(fs,{})}),a.jsx("div",{children:a.jsx(ds,{})})]})})})},hs=()=>{const{waterRate:e}=ve(kn),[t,n]=g.useState(!1),r=()=>{n(!0)},o=()=>{n(!1)},i=(e/1e3).toFixed(1)+" L";return a.jsx("div",{children:a.jsxs("div",{children:[a.jsx("h2",{children:"My daily norma: "}),a.jsxs("div",{children:[a.jsx("p",{children:i}),a.jsx("button",{onClick:r,children:"Edit"})]}),a.jsx(ps,{onClose:o,onShow:t})]})})},ms=()=>a.jsx("div",{children:"TodayListModal"}),gs=()=>a.jsxs(a.Fragment,{children:[a.jsx("div",{children:"WaterRatioPanel"}),a.jsx(ms,{})]}),ys=()=>a.jsx("div",{children:"TodayWaterList"});var lt={},bs=le;Object.defineProperty(lt,"__esModule",{value:!0});var fn=lt.default=void 0,xs=bs(at()),vs=a;fn=lt.default=(0,xs.default)((0,vs.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var ct={},$s=le;Object.defineProperty(ct,"__esModule",{value:!0});var pn=ct.default=void 0,ws=$s(at()),Ss=a;pn=ct.default=(0,ws.default)((0,Ss.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const P={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},js=S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media screen and (max-width: 767px) {
    left: ${e=>-7-e.$deltaNum}px;
  }

  @media screen and (min-width: 768px) {
    right: ${e=>e.$delta?"17px":""};
    left: ${e=>e.$delta?"":"17px"};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 56px;
  }

  h3 {
    color: ${P.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${P.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${P.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,_s=({calendarRef:e,refData:t,waterData:n={}})=>{const{dayOfMonth:r,waterRate:o,percent:i,numberRecords:s}=n,l=t==null?void 0:t.current.getBoundingClientRect().left,c=e==null?void 0:e.current.getBoundingClientRect().left;let d=!0;const p=l-c;return p<250&&(d=!1),a.jsx(js,{$delta:d,$deltaNum:p,children:Object.values(n).length?a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:r}),a.jsxs("p",{children:["Daily norma: ",a.jsxs("span",{children:[o/1e3," L"]})]}),a.jsxs("p",{children:["Fulfillment of the daily norm:"," ",a.jsxs("span",{children:[i>100?100:i,"%"]})]}),a.jsxs("p",{children:["How many servings of water: ",a.jsx("span",{children:s})]})]}):a.jsx("h3",{children:"You dont have records of this day."})})},ks=S.div`
  display: flex;
  flex-direction: column;
`,Cs=S.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Os=S.h2`
  color: ${P.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,Tt=S.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${P.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${P.colors.violet};
    cursor: not-allowed;
  }
`,Ms=S.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${e=>e.$isOutlineVisible?`1px solid ${P.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,Ts=S.div`
  color: ${P.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Rs=S.span`
  font-size: 16px;
  line-height: 20px;
`,Ps=S.span`
  color: ${P.colors.violet};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`,As=S.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`,Es=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Fs=({calendarRef:e,day:t,waterPercentage:n})=>{const[r,o]=g.useState(null),i=g.useRef(null),s=c=>{i.current&&!i.current.contains(c.target)&&o(null)};g.useEffect(()=>(document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[]);const l=()=>{o(c=>c===t?null:t)};return a.jsxs(Es,{children:[a.jsx("div",{children:r===t&&a.jsx(_s,{calendarRef:e,refData:i,waterData:n},t)}),a.jsx(Ms,{ref:i,onClick:()=>l(),$isOutlineVisible:!n||n.percent<100,children:t}),a.jsx(Ps,{children:n?`${Math.min(n.percent,100)}%`:"0%"})]},t)},Is="#4fa94d",zs={"aria-busy":!0,role:"progressbar"},Ds=S.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Bs="http://www.w3.org/2000/svg",I=242.776657104492,Ls=1.6,Ns=Ue`
12.5% {
  stroke-dasharray: ${I*.14}px, ${I}px;
  stroke-dashoffset: -${I*.11}px;
}
43.75% {
  stroke-dasharray: ${I*.35}px, ${I}px;
  stroke-dashoffset: -${I*.35}px;
}
100% {
  stroke-dasharray: ${I*.01}px, ${I}px;
  stroke-dashoffset: -${I*.99}px;
}
`;S.path`
  stroke-dasharray: ${I*.01}px, ${I};
  stroke-dashoffset: 0;
  animation: ${Ns} ${Ls}s linear infinite;
`;const Ws=Ue`
to {
   transform: rotate(360deg);
 }
`;S.svg`
  animation: ${Ws} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;S.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Ks=({height:e=80,width:t=80,radius:n=9,color:r=Is,ariaLabel:o="three-dots-loading",wrapperStyle:i,wrapperClass:s,visible:l=!0})=>a.jsx(Ds,{style:i,$visible:l,className:s,"data-testid":"three-dots-loading","aria-label":o,...zs,children:a.jsxs("svg",{width:t,height:e,viewBox:"0 0 120 30",xmlns:Bs,fill:r,"data-testid":"three-dots-svg",children:[a.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[a.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),a.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[a.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),a.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),a.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[a.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),qs=Ue`
to {
   stroke-dashoffset: 136;
 }
`;S.polygon`
  stroke-dasharray: 17;
  animation: ${qs} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;S.svg`
  transform-origin: 50% 65%;
`;const Gs=e=>{const[t,n]=g.useState(new Date),[r]=g.useState(),o=Pt(),i=g.useRef(null),s=ve(cs);g.useEffect(()=>{const u=`${t.getMonth()+1} - ${t.getFullYear()}`;o(Cn(u))},[o,t,e]);const l=()=>{const u=new Date(t.getFullYear(),t.getMonth()+1,1);n(u)},c=()=>{const u=new Date(t.getFullYear(),t.getMonth()-1,1);n(u)},d=()=>{const u=new Date;return t.getMonth()===u.getMonth()&&t.getFullYear()===u.getFullYear()},p=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),h=()=>{const u=p();return Array.from({length:u},(y,m)=>{const f=m+1,C=s==null?void 0:s.find(k=>k.dayOfMonth&&Number(k.dayOfMonth.split(",")[0])===f);return a.jsx(Fs,{calendarRef:i,day:f,waterPercentage:C},f)})};return a.jsxs(ks,{className:"calendar",ref:i,children:[a.jsxs(Cs,{children:[a.jsx(Os,{children:"Month"}),r&&a.jsx(Ks,{height:"60",width:"60",radius:"9",color:P.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),a.jsxs(Ts,{children:[a.jsx(Tt,{"aria-label":"Previous month",onClick:c,children:a.jsx(pn,{sx:{color:P.colors.blue}})}),a.jsx(Rs,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),a.jsx(Tt,{"aria-label":"Next month",onClick:l,disabled:d(),children:a.jsx(fn,{sx:{color:P.colors.blue}})})]})]}),a.jsx(As,{children:h()})]})};S.div`
background-color: #fff;
  background-image: url(${At});
  background-repeat: no-repeat;
  background-size: cover;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;const Hs=S.div`
background-image: url(${At}); 
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  width: 100%;

 display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /*width: 50%;*/
    flex-direction: row;
  }
`,Us=S.div`
  flex: 1; 
`,Vs=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /*width: 50%;*/
    flex: 1;
  }
`,Qs=()=>a.jsx(On,{children:a.jsxs(Hs,{children:[a.jsxs(Us,{children:[a.jsx(hs,{}),a.jsx(gs,{})]}),a.jsxs(Vs,{children:[a.jsx(ys,{}),a.jsx(Gs,{})]})]})});export{Qs as default};
