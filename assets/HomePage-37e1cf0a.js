var ya=Object.defineProperty;var va=(n,r,t)=>r in n?ya(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t;var _=(n,r,t)=>(va(n,typeof r!="symbol"?r+"":r,t),t);import{r as D,a as ar,u as P,b as Ye,c as ct,j as f,e as ba,f as _o,g as xa,d as Da,s as Ie,h as gn,M as wn,i as ka,k as So,l as Po,R as Eo,m as y,n as re,o as Ca,p as Ma,q as _a,t as Sa,v as Pa,w as sr,x as Ke,y as Ea,W as Na}from"./index-dbea9ce3.js";import{b as Mr,a as Oa}from"./bottle_mob_2x-8d352aa4.js";const wt=Math.min,rt=Math.max,rn=Math.round,Kt=Math.floor,Ve=n=>({x:n,y:n}),Ta={left:"right",right:"left",bottom:"top",top:"bottom"},Ra={start:"end",end:"start"};function Ya(n,r,t){return rt(n,wt(r,t))}function yn(n,r){return typeof n=="function"?n(r):n}function yt(n){return n.split("-")[0]}function jt(n){return n.split("-")[1]}function Ia(n){return n==="x"?"y":"x"}function ir(n){return n==="y"?"height":"width"}function cr(n){return["top","bottom"].includes(yt(n))?"y":"x"}function lr(n){return Ia(cr(n))}function $a(n,r,t){t===void 0&&(t=!1);const e=jt(n),o=lr(n),s=ir(o);let a=o==="x"?e===(t?"end":"start")?"right":"left":e==="start"?"bottom":"top";return r.reference[s]>r.floating[s]&&(a=on(a)),[a,on(a)]}function La(n){const r=on(n);return[zn(n),r,zn(r)]}function zn(n){return n.replace(/start|end/g,r=>Ra[r])}function ja(n,r,t){const e=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(n){case"top":case"bottom":return t?r?o:e:r?e:o;case"left":case"right":return r?s:a;default:return[]}}function Fa(n,r,t,e){const o=jt(n);let s=ja(yt(n),t==="start",e);return o&&(s=s.map(a=>a+"-"+o),r&&(s=s.concat(s.map(zn)))),s}function on(n){return n.replace(/left|right|bottom|top/g,r=>Ta[r])}function Wa(n){return{top:0,right:0,bottom:0,left:0,...n}}function No(n){return typeof n!="number"?Wa(n):{top:n,right:n,bottom:n,left:n}}function an(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function _r(n,r,t){let{reference:e,floating:o}=n;const s=cr(r),a=lr(r),i=ir(a),c=yt(r),l=s==="y",u=e.x+e.width/2-o.width/2,p=e.y+e.height/2-o.height/2,h=e[i]/2-o[i]/2;let m;switch(c){case"top":m={x:u,y:e.y-o.height};break;case"bottom":m={x:u,y:e.y+e.height};break;case"right":m={x:e.x+e.width,y:p};break;case"left":m={x:e.x-o.width,y:p};break;default:m={x:e.x,y:e.y}}switch(jt(r)){case"start":m[a]-=h*(t&&l?-1:1);break;case"end":m[a]+=h*(t&&l?-1:1);break}return m}const Aa=async(n,r,t)=>{const{placement:e="bottom",strategy:o="absolute",middleware:s=[],platform:a}=t,i=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(r));let l=await a.getElementRects({reference:n,floating:r,strategy:o}),{x:u,y:p}=_r(l,e,c),h=e,m={},g=0;for(let w=0;w<i.length;w++){const{name:v,fn:x}=i[w],{x:b,y:k,data:N,reset:M}=await x({x:u,y:p,initialPlacement:e,placement:h,strategy:o,middlewareData:m,rects:l,platform:a,elements:{reference:n,floating:r}});u=b??u,p=k??p,m={...m,[v]:{...m[v],...N}},M&&g<=50&&(g++,typeof M=="object"&&(M.placement&&(h=M.placement),M.rects&&(l=M.rects===!0?await a.getElementRects({reference:n,floating:r,strategy:o}):M.rects),{x:u,y:p}=_r(l,h,c)),w=-1)}return{x:u,y:p,placement:h,strategy:o,middlewareData:m}};async function Ha(n,r){var t;r===void 0&&(r={});const{x:e,y:o,platform:s,rects:a,elements:i,strategy:c}=n,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:h=!1,padding:m=0}=yn(r,n),g=No(m),v=i[h?p==="floating"?"reference":"floating":p],x=an(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(v)))==null||t?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:l,rootBoundary:u,strategy:c})),b=p==="floating"?{...a.floating,x:e,y:o}:a.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),N=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},M=an(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:b,offsetParent:k,strategy:c}):b);return{top:(x.top-M.top+g.top)/N.y,bottom:(M.bottom-x.bottom+g.bottom)/N.y,left:(x.left-M.left+g.left)/N.x,right:(M.right-x.right+g.right)/N.x}}const Ba=n=>({name:"arrow",options:n,async fn(r){const{x:t,y:e,placement:o,rects:s,platform:a,elements:i,middlewareData:c}=r,{element:l,padding:u=0}=yn(n,r)||{};if(l==null)return{};const p=No(u),h={x:t,y:e},m=lr(o),g=ir(m),w=await a.getDimensions(l),v=m==="y",x=v?"top":"left",b=v?"bottom":"right",k=v?"clientHeight":"clientWidth",N=s.reference[g]+s.reference[m]-h[m]-s.floating[g],M=h[m]-s.reference[m],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let C=O?O[k]:0;(!C||!await(a.isElement==null?void 0:a.isElement(O)))&&(C=i.floating[k]||s.floating[g]);const E=N/2-M/2,T=C/2-w[g]/2-1,H=wt(p[x],T),q=wt(p[b],T),j=H,Z=C-w[g]-q,Y=C/2-w[g]/2+E,z=Ya(j,Y,Z),B=!c.arrow&&jt(o)!=null&&Y!==z&&s.reference[g]/2-(Y<j?H:q)-w[g]/2<0,F=B?Y<j?Y-j:Y-Z:0;return{[m]:h[m]+F,data:{[m]:z,centerOffset:Y-z-F,...B&&{alignmentOffset:F}},reset:B}}}),Qa=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var t,e;const{placement:o,middlewareData:s,rects:a,initialPlacement:i,platform:c,elements:l}=r,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:w=!0,...v}=yn(n,r);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const x=yt(o),b=yt(i)===i,k=await(c.isRTL==null?void 0:c.isRTL(l.floating)),N=h||(b||!w?[on(i)]:La(i));!h&&g!=="none"&&N.push(...Fa(i,w,g,k));const M=[i,...N],O=await Ha(r,v),C=[];let E=((e=s.flip)==null?void 0:e.overflows)||[];if(u&&C.push(O[x]),p){const j=$a(o,a,k);C.push(O[j[0]],O[j[1]])}if(E=[...E,{placement:o,overflows:C}],!C.every(j=>j<=0)){var T,H;const j=(((T=s.flip)==null?void 0:T.index)||0)+1,Z=M[j];if(Z)return{data:{index:j,overflows:E},reset:{placement:Z}};let Y=(H=E.filter(z=>z.overflows[0]<=0).sort((z,B)=>z.overflows[1]-B.overflows[1])[0])==null?void 0:H.placement;if(!Y)switch(m){case"bestFit":{var q;const z=(q=E.map(B=>[B.placement,B.overflows.filter(F=>F>0).reduce((F,pe)=>F+pe,0)]).sort((B,F)=>B[1]-F[1])[0])==null?void 0:q[0];z&&(Y=z);break}case"initialPlacement":Y=i;break}if(o!==Y)return{reset:{placement:Y}}}return{}}}};async function za(n,r){const{placement:t,platform:e,elements:o}=n,s=await(e.isRTL==null?void 0:e.isRTL(o.floating)),a=yt(t),i=jt(t),c=cr(t)==="y",l=["left","top"].includes(a)?-1:1,u=s&&c?-1:1,p=yn(r,n);let{mainAxis:h,crossAxis:m,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return i&&typeof g=="number"&&(m=i==="end"?g*-1:g),c?{x:m*u,y:h*l}:{x:h*l,y:m*u}}const Ka=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var t,e;const{x:o,y:s,placement:a,middlewareData:i}=r,c=await za(r,n);return a===((t=i.offset)==null?void 0:t.placement)&&(e=i.arrow)!=null&&e.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:a}}}}};function qe(n){return Oo(n)?(n.nodeName||"").toLowerCase():"#document"}function de(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function je(n){var r;return(r=(Oo(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Oo(n){return n instanceof Node||n instanceof de(n).Node}function ue(n){return n instanceof Element||n instanceof de(n).Element}function Pe(n){return n instanceof HTMLElement||n instanceof de(n).HTMLElement}function Sr(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof de(n).ShadowRoot}function Ft(n){const{overflow:r,overflowX:t,overflowY:e,display:o}=ge(n);return/auto|scroll|overlay|hidden|clip/.test(r+e+t)&&!["inline","contents"].includes(o)}function Va(n){return["table","td","th"].includes(qe(n))}function ur(n){const r=dr(),t=ge(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(e=>(t.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(t.contain||"").includes(e))}function qa(n){let r=vt(n);for(;Pe(r)&&!vn(r);){if(ur(r))return r;r=vt(r)}return null}function dr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vn(n){return["html","body","#document"].includes(qe(n))}function ge(n){return de(n).getComputedStyle(n)}function bn(n){return ue(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function vt(n){if(qe(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Sr(n)&&n.host||je(n);return Sr(r)?r.host:r}function To(n){const r=vt(n);return vn(r)?n.ownerDocument?n.ownerDocument.body:n.body:Pe(r)&&Ft(r)?r:To(r)}function Rt(n,r,t){var e;r===void 0&&(r=[]),t===void 0&&(t=!0);const o=To(n),s=o===((e=n.ownerDocument)==null?void 0:e.body),a=de(o);return s?r.concat(a,a.visualViewport||[],Ft(o)?o:[],a.frameElement&&t?Rt(a.frameElement):[]):r.concat(o,Rt(o,[],t))}function Ro(n){const r=ge(n);let t=parseFloat(r.width)||0,e=parseFloat(r.height)||0;const o=Pe(n),s=o?n.offsetWidth:t,a=o?n.offsetHeight:e,i=rn(t)!==s||rn(e)!==a;return i&&(t=s,e=a),{width:t,height:e,$:i}}function pr(n){return ue(n)?n:n.contextElement}function mt(n){const r=pr(n);if(!Pe(r))return Ve(1);const t=r.getBoundingClientRect(),{width:e,height:o,$:s}=Ro(r);let a=(s?rn(t.width):t.width)/e,i=(s?rn(t.height):t.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const Ua=Ve(0);function Yo(n){const r=de(n);return!dr()||!r.visualViewport?Ua:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Xa(n,r,t){return r===void 0&&(r=!1),!t||r&&t!==de(n)?!1:r}function at(n,r,t,e){r===void 0&&(r=!1),t===void 0&&(t=!1);const o=n.getBoundingClientRect(),s=pr(n);let a=Ve(1);r&&(e?ue(e)&&(a=mt(e)):a=mt(n));const i=Xa(s,t,e)?Yo(s):Ve(0);let c=(o.left+i.x)/a.x,l=(o.top+i.y)/a.y,u=o.width/a.x,p=o.height/a.y;if(s){const h=de(s),m=e&&ue(e)?de(e):e;let g=h,w=g.frameElement;for(;w&&e&&m!==g;){const v=mt(w),x=w.getBoundingClientRect(),b=ge(w),k=x.left+(w.clientLeft+parseFloat(b.paddingLeft))*v.x,N=x.top+(w.clientTop+parseFloat(b.paddingTop))*v.y;c*=v.x,l*=v.y,u*=v.x,p*=v.y,c+=k,l+=N,g=de(w),w=g.frameElement}}return an({width:u,height:p,x:c,y:l})}const Ga=[":popover-open",":modal"];function Io(n){return Ga.some(r=>{try{return n.matches(r)}catch{return!1}})}function Za(n){let{elements:r,rect:t,offsetParent:e,strategy:o}=n;const s=o==="fixed",a=je(e),i=r?Io(r.floating):!1;if(e===a||i&&s)return t;let c={scrollLeft:0,scrollTop:0},l=Ve(1);const u=Ve(0),p=Pe(e);if((p||!p&&!s)&&((qe(e)!=="body"||Ft(a))&&(c=bn(e)),Pe(e))){const h=at(e);l=mt(e),u.x=h.x+e.clientLeft,u.y=h.y+e.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+u.x,y:t.y*l.y-c.scrollTop*l.y+u.y}}function Ja(n){return Array.from(n.getClientRects())}function $o(n){return at(je(n)).left+bn(n).scrollLeft}function es(n){const r=je(n),t=bn(n),e=n.ownerDocument.body,o=rt(r.scrollWidth,r.clientWidth,e.scrollWidth,e.clientWidth),s=rt(r.scrollHeight,r.clientHeight,e.scrollHeight,e.clientHeight);let a=-t.scrollLeft+$o(n);const i=-t.scrollTop;return ge(e).direction==="rtl"&&(a+=rt(r.clientWidth,e.clientWidth)-o),{width:o,height:s,x:a,y:i}}function ts(n,r){const t=de(n),e=je(n),o=t.visualViewport;let s=e.clientWidth,a=e.clientHeight,i=0,c=0;if(o){s=o.width,a=o.height;const l=dr();(!l||l&&r==="fixed")&&(i=o.offsetLeft,c=o.offsetTop)}return{width:s,height:a,x:i,y:c}}function ns(n,r){const t=at(n,!0,r==="fixed"),e=t.top+n.clientTop,o=t.left+n.clientLeft,s=Pe(n)?mt(n):Ve(1),a=n.clientWidth*s.x,i=n.clientHeight*s.y,c=o*s.x,l=e*s.y;return{width:a,height:i,x:c,y:l}}function Pr(n,r,t){let e;if(r==="viewport")e=ts(n,t);else if(r==="document")e=es(je(n));else if(ue(r))e=ns(r,t);else{const o=Yo(n);e={...r,x:r.x-o.x,y:r.y-o.y}}return an(e)}function Lo(n,r){const t=vt(n);return t===r||!ue(t)||vn(t)?!1:ge(t).position==="fixed"||Lo(t,r)}function rs(n,r){const t=r.get(n);if(t)return t;let e=Rt(n,[],!1).filter(i=>ue(i)&&qe(i)!=="body"),o=null;const s=ge(n).position==="fixed";let a=s?vt(n):n;for(;ue(a)&&!vn(a);){const i=ge(a),c=ur(a);!c&&i.position==="fixed"&&(o=null),(s?!c&&!o:!c&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ft(a)&&!c&&Lo(n,a))?e=e.filter(u=>u!==a):o=i,a=vt(a)}return r.set(n,e),e}function os(n){let{element:r,boundary:t,rootBoundary:e,strategy:o}=n;const a=[...t==="clippingAncestors"?rs(r,this._c):[].concat(t),e],i=a[0],c=a.reduce((l,u)=>{const p=Pr(r,u,o);return l.top=rt(p.top,l.top),l.right=wt(p.right,l.right),l.bottom=wt(p.bottom,l.bottom),l.left=rt(p.left,l.left),l},Pr(r,i,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function as(n){const{width:r,height:t}=Ro(n);return{width:r,height:t}}function ss(n,r,t){const e=Pe(r),o=je(r),s=t==="fixed",a=at(n,!0,s,r);let i={scrollLeft:0,scrollTop:0};const c=Ve(0);if(e||!e&&!s)if((qe(r)!=="body"||Ft(o))&&(i=bn(r)),e){const p=at(r,!0,s,r);c.x=p.x+r.clientLeft,c.y=p.y+r.clientTop}else o&&(c.x=$o(o));const l=a.left+i.scrollLeft-c.x,u=a.top+i.scrollTop-c.y;return{x:l,y:u,width:a.width,height:a.height}}function Er(n,r){return!Pe(n)||ge(n).position==="fixed"?null:r?r(n):n.offsetParent}function jo(n,r){const t=de(n);if(!Pe(n)||Io(n))return t;let e=Er(n,r);for(;e&&Va(e)&&ge(e).position==="static";)e=Er(e,r);return e&&(qe(e)==="html"||qe(e)==="body"&&ge(e).position==="static"&&!ur(e))?t:e||qa(n)||t}const is=async function(n){const r=this.getOffsetParent||jo,t=this.getDimensions;return{reference:ss(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,...await t(n.floating)}}};function cs(n){return ge(n).direction==="rtl"}const Fo={convertOffsetParentRelativeRectToViewportRelativeRect:Za,getDocumentElement:je,getClippingRect:os,getOffsetParent:jo,getElementRects:is,getClientRects:Ja,getDimensions:as,getScale:mt,isElement:ue,isRTL:cs};function ls(n,r){let t=null,e;const o=je(n);function s(){var i;clearTimeout(e),(i=t)==null||i.disconnect(),t=null}function a(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),s();const{left:l,top:u,width:p,height:h}=n.getBoundingClientRect();if(i||r(),!p||!h)return;const m=Kt(u),g=Kt(o.clientWidth-(l+p)),w=Kt(o.clientHeight-(u+h)),v=Kt(l),b={rootMargin:-m+"px "+-g+"px "+-w+"px "+-v+"px",threshold:rt(0,wt(1,c))||1};let k=!0;function N(M){const O=M[0].intersectionRatio;if(O!==c){if(!k)return a();O?a(!1,O):e=setTimeout(()=>{a(!1,1e-7)},100)}k=!1}try{t=new IntersectionObserver(N,{...b,root:o.ownerDocument})}catch{t=new IntersectionObserver(N,b)}t.observe(n)}return a(!0),s}function us(n,r,t,e){e===void 0&&(e={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=e,l=pr(n),u=o||s?[...l?Rt(l):[],...Rt(r)]:[];u.forEach(x=>{o&&x.addEventListener("scroll",t,{passive:!0}),s&&x.addEventListener("resize",t)});const p=l&&i?ls(l,t):null;let h=-1,m=null;a&&(m=new ResizeObserver(x=>{let[b]=x;b&&b.target===l&&m&&(m.unobserve(r),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var k;(k=m)==null||k.observe(r)})),t()}),l&&!c&&m.observe(l),m.observe(r));let g,w=c?at(n):null;c&&v();function v(){const x=at(n);w&&(x.x!==w.x||x.y!==w.y||x.width!==w.width||x.height!==w.height)&&t(),w=x,g=requestAnimationFrame(v)}return t(),()=>{var x;u.forEach(b=>{o&&b.removeEventListener("scroll",t),s&&b.removeEventListener("resize",t)}),p==null||p(),(x=m)==null||x.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const ds=Qa,Nr=Ba,ps=(n,r,t)=>{const e=new Map,o={platform:Fo,...t},s={...o.platform,_c:e};return Aa(n,r,{...o,platform:s})},fs=n=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:e,padding:o}=typeof n=="function"?n(t):n;return e&&r(e)?e.current!=null?Nr({element:e.current,padding:o}).fn(t):{}:e?Nr({element:e,padding:o}).fn(t):{}}}};var Jt=typeof document<"u"?D.useLayoutEffect:D.useEffect;function sn(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let t,e,o;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==r.length)return!1;for(e=t;e--!==0;)if(!sn(n[e],r[e]))return!1;return!0}if(o=Object.keys(n),t=o.length,t!==Object.keys(r).length)return!1;for(e=t;e--!==0;)if(!{}.hasOwnProperty.call(r,o[e]))return!1;for(e=t;e--!==0;){const s=o[e];if(!(s==="_owner"&&n.$$typeof)&&!sn(n[s],r[s]))return!1}return!0}return n!==n&&r!==r}function Wo(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Or(n,r){const t=Wo(n);return Math.round(r*t)/t}function Tr(n){const r=D.useRef(n);return Jt(()=>{r.current=n}),r}function hs(n){n===void 0&&(n={});const{placement:r="bottom",strategy:t="absolute",middleware:e=[],platform:o,elements:{reference:s,floating:a}={},transform:i=!0,whileElementsMounted:c,open:l}=n,[u,p]=D.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[h,m]=D.useState(e);sn(h,e)||m(e);const[g,w]=D.useState(null),[v,x]=D.useState(null),b=D.useCallback(F=>{F!==O.current&&(O.current=F,w(F))},[]),k=D.useCallback(F=>{F!==C.current&&(C.current=F,x(F))},[]),N=s||g,M=a||v,O=D.useRef(null),C=D.useRef(null),E=D.useRef(u),T=c!=null,H=Tr(c),q=Tr(o),j=D.useCallback(()=>{if(!O.current||!C.current)return;const F={placement:r,strategy:t,middleware:h};q.current&&(F.platform=q.current),ps(O.current,C.current,F).then(pe=>{const fe={...pe,isPositioned:!0};Z.current&&!sn(E.current,fe)&&(E.current=fe,ar.flushSync(()=>{p(fe)}))})},[h,r,t,q]);Jt(()=>{l===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,p(F=>({...F,isPositioned:!1})))},[l]);const Z=D.useRef(!1);Jt(()=>(Z.current=!0,()=>{Z.current=!1}),[]),Jt(()=>{if(N&&(O.current=N),M&&(C.current=M),N&&M){if(H.current)return H.current(N,M,j);j()}},[N,M,j,H,T]);const Y=D.useMemo(()=>({reference:O,floating:C,setReference:b,setFloating:k}),[b,k]),z=D.useMemo(()=>({reference:N,floating:M}),[N,M]),B=D.useMemo(()=>{const F={position:t,left:0,top:0};if(!z.floating)return F;const pe=Or(z.floating,u.x),fe=Or(z.floating,u.y);return i?{...F,transform:"translate("+pe+"px, "+fe+"px)",...Wo(z.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:pe,top:fe}},[t,i,z.floating,u.x,u.y]);return D.useMemo(()=>({...u,update:j,refs:Y,elements:z,floatingStyles:B}),[u,j,Y,z,B])}const ms=P.h3`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  margin-bottom: 16px;
`,gs=P.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Rr=P.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Yr=P.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,Ir=P.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,$r=P.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Lr=P.svg`
  width: 12px;
  height: 12px;
`,jr=P.label`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Kn=P.input`
  background-color: transparent;
  border: 1px solid ${({theme:n})=>n.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({theme:n})=>n.color.blue};
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: none;
  }

  &.activated {
    border: 1px solid ${({theme:n})=>n.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:n})=>n.color.blue};
  }

  &.error {
    border-color: ${({theme:n})=>n.color.red};
    color: ${({theme:n})=>n.color.red};
  }

  &::placeholder {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:n})=>n.color.skyBlue};
  }
`,ws=P.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 24px;
`,ys=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  width: 190px;

  @media ${({theme:n})=>n.device.tablet} {
    width: auto;
  }
`,vs=P.p`
  font-family: 'Roboto-Bold', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,bs=P.label`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,xs=P.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({theme:n})=>n.boxShadow.normalButton};
  background: ${({theme:n})=>n.color.blue};
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${({theme:n})=>n.color.white};
  border: none;
  transition: box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};
  }

  &:active {
    box-shadow: ${({theme:n})=>n.boxShadow.activeButton};
  }

  @media ${({theme:n})=>n.device.tablet} {
    padding: 10px 30px;
    margin-left: auto;
    font-size: 18px;
    width: 160px;
  }
`,Ot=P.p`
  position: absolute;
  bottom: -20px;
  left: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({theme:n})=>n.color.red};
`,Ds=n=>n.water.month,Ao=n=>n.water.dayInfo,ks=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.consumedWaterPercentage},Cs=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.dailyWaterGoal},Ms=n=>n.water.dayDataLoading,_s=({closeModal:n})=>{const t=(Ye(Cs)/1e3).toFixed(1),[e,o]=D.useState(""),[s,a]=D.useState(!0),i=15,c=p=>{const{value:h}=p.target,m=/^(\d+([.,]\d{0,1})?)?$/;var g=h;h.match(/^[.,]/)?g="0"+h:g=h.replace(/^0+([^.])/,"$1"),a(g===""||parseFloat(g.replace(",","."))<=i),m.test(g)&&o(g)},l=ct(),u=async p=>{if(p.preventDefault(),!s||e<=0)return;const h=p.target.elements.dailyNorm.value*1e3;try{const{payload:m}=await l(ba(h));m.user&&(l(_o()),n())}catch(m){console.log("🚀 ~ error:",m)}};return f.jsxs("form",{onSubmit:u,children:[f.jsxs(bs,{children:["Write down how much water you will drink:",f.jsx(Kn,{className:!s&&e<=0?"error":"",type:"number",name:"dailyNorm",value:e,onChange:c,placeholder:t}),!s&&f.jsx(Ot,{children:`The water rate cannot exceed ${i} liters`}),e<0&&f.jsx(Ot,{children:"The water rate cannot be negative"}),parseFloat(e)===0&&f.jsx(Ot,{children:"The water rate cannot be 0"})]}),f.jsx(xs,{className:"confirm",type:"submit",children:"Save"})]})},Ss=()=>{const n=Ye(xa),[r,t]=D.useState(n),[e,o]=D.useState(""),[s,a]=D.useState(""),[i,c]=D.useState(!0),[l,u]=D.useState(!0),p=Ye(Da)?"dark":"light",m=`radio-${r==="woman"?"active":"inactive"}-${p}`,w=`radio-${r==="man"?"active":"inactive"}-${p}`,v=300,x=12,b=M=>{const{name:O,value:C}=M.target,E=/^(\d+([.,]\d{0,1})?)?$/;var T=C;switch(O){case"gender":t(C);break;case"weight":C.match(/^[.,]/)?T="0"+C:T=C.replace(/^0+([^.])/,"$1"),c(T===""||parseFloat(T.replace(",","."))<=v),E.test(T)&&o(T);break;case"activeHours":C.match(/^[.,]/)?T="0"+C:T=C.replace(/^0+([^.])/,"$1"),u(T===""||parseFloat(T.replace(",","."))<=x),E.test(T)&&a(T);break}},k=r==="woman"?e*.03+s*.4:e*.04+s*.6,N=Math.round(k*10)/10;return f.jsx("div",{children:f.jsxs("form",{action:"",children:[f.jsx(ms,{children:"Calculate your rate:"}),f.jsxs(gs,{children:[f.jsxs(Rr,{children:[f.jsx(Yr,{id:"woman",type:"radio",name:"gender",value:"woman",checked:r==="woman",onChange:b}),f.jsxs(Ir,{htmlFor:"woman",children:[f.jsx($r,{children:f.jsx(Lr,{children:f.jsx("use",{href:`${Ie}#${m}`})})}),"For woman"]})]}),f.jsxs(Rr,{children:[f.jsx(Yr,{id:"man",type:"radio",name:"gender",value:"man",checked:r==="man",onChange:b}),f.jsxs(Ir,{htmlFor:"man",children:[f.jsx($r,{children:f.jsx(Lr,{children:f.jsx("use",{href:`${Ie}#${w}`})})}),"For man"]})]})]}),f.jsxs(jr,{children:["Your weight in kilograms:",f.jsx(Kn,{className:i?"":"error",type:"number",name:"weight",value:e,onChange:b,placeholder:"0"}),!i&&f.jsx(Ot,{children:`Weight cannot exceed ${v} kg`})]}),f.jsxs(jr,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",f.jsx(Kn,{className:l?"":"error",type:"number",name:"activeHours",value:s,onChange:b,placeholder:"0"}),!l&&f.jsx(Ot,{children:`Active hours cannot exceed ${x} hours`})]}),f.jsxs(ws,{children:[f.jsxs(ys,{children:["The required amount of water in liters per day:"," "]}),i&&l&&f.jsxs(vs,{children:[N," L"]})]})]})})},Ps=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  padding: 24px 12px;
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;

  background-color: ${({theme:n})=>n.color.white};
  border-radius: 10px;

  z-index: 4;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`,Es=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Ns=P.h2`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
`,Os=P(gn)`
  color: ${({theme:n})=>n.color.blue};
  cursor: pointer;
`,Ts=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,Fr=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`,Wr=P.span`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,Rs=P.div`
  border: 1px solid ${({theme:n})=>n.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,Ys=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,Is=P.span`
  color: ${({theme:n})=>n.color.blue};
`,$s=({isModalOpen:n,closeModal:r})=>f.jsx(f.Fragment,{children:n&&f.jsx(wn,{onClose:r,children:f.jsxs(Ps,{children:[f.jsxs("div",{children:[f.jsxs(Es,{className:"topline",children:[f.jsx(Ns,{children:"My daily norm"}),f.jsx(Os,{className:"close",onClick:r})]}),f.jsxs(Ts,{children:[f.jsxs(Fr,{children:["For woman: ",f.jsx(Wr,{children:"V=(M*0,03) + (T*0,4)"})]}),f.jsxs(Fr,{children:["For man: ",f.jsx(Wr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),f.jsx(Rs,{children:f.jsxs(Ys,{children:[f.jsx(Is,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),f.jsx("div",{children:f.jsx(Ss,{})}),f.jsx("div",{children:f.jsx(_s,{closeModal:r})})]})})}),Ls=P.div`
  position: relative;
`,js=P.div`
  display: inline-flex;
  padding: 8px 20px;
  height: 74px;
  width: 150px;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:n})=>n.color.lavender};
  background: ${({theme:n})=>n.color.white};
  box-shadow: ${({theme:n})=>n.boxShadow.normalButton};

  @media ${({theme:n})=>n.device.tablet} {
    margin-top: 16px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    margin-top: 30px;
  }
`,Fs=P.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,Ws=P.button`
  display: block;
  padding: 0;
  color: ${({theme:n})=>n.color.lightPurple};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  background: transparent;
  border: none;

  &:hover {
    color: ${({theme:n})=>n.color.orange};
    transition: color 0.3s ease;
  }

  &:focus {
    color: ${({theme:n})=>n.color.orange};
    transition: color 0.3s ease;
  }
`,As=P.p`
  color: ${({theme:n})=>n.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,Hs=P.div`
  display: flex;
  gap: 12px;
`,Bs=P.img`
  position: absolute;
  top: 80px;
  left: 5px;
  z-index: -1;

  @media ${({theme:n})=>n.device.tablet} {
    top: 0;
    left: 90px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    top: -10px;
    left: -110px;
  }
`,Qs="/WaterTrackerFrontend/assets/bottle_tab-881bc7f1.png",zs="/WaterTrackerFrontend/assets/bottle_tab_2x-f93ca187.png",Ks="/WaterTrackerFrontend/assets/bottle_desk-1f4873df.png",Vs="/WaterTrackerFrontend/assets/bottle_desk_2x-dc99a824.png",qs=()=>{const{dailyWaterGoal:n}=Ye(ka),[r,t]=D.useState(!1),e=ct(),o=()=>{t(!0)},s=()=>{t(!1)},a=(n/1e3).toFixed(1)+" L";return D.useEffect(()=>{e(_o())},[e]),f.jsxs(Ls,{children:[f.jsxs(js,{children:[f.jsx(Fs,{children:"My daily norma: "}),f.jsxs(Hs,{children:[f.jsx(As,{children:a}),f.jsx(Ws,{onClick:o,children:"Edit"})]}),f.jsx($s,{isModalOpen:r,closeModal:s})]}),f.jsxs("picture",{className:"bottle",children:[f.jsx("source",{srcSet:`${Ks} 1x, ${Vs} 2x`,media:"(min-width: 1440px)",width:"738",height:"548",type:"image/png"}),f.jsx("source",{srcSet:`${Qs} 1x, ${zs} 2x`,media:"(min-width: 768px)",width:"518",height:"386",type:"image/png"}),f.jsx("source",{srcSet:`${Mr} 1x, ${Oa} 2x`,media:"(min-width: 320px)",width:"280",height:"210",type:"image/png"}),f.jsx(Bs,{className:"bottle",alt:"bottle of water",src:Mr})]})]})},Us=P.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 232px;
  margin-bottom: 40px;

  h3 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: ${({theme:n})=>n.color.blue};
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
  @media ${({theme:n})=>n.device.tablet} {
    margin-top: 326px;

    .box {
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }

  @media ${({theme:n})=>n.device.desktop} {
    margin-top: 466px;
    .box {
      gap: 23px;
    }
  }
`,Xs=P.div`
  padding-left: 12px;
  padding-right: 12px;

  */ .progress-bar-container {
    display: flex;
    flex-direction: column;
    width: 280px;
    margin-bottom: 16px;
  }

  .progress-bar {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 8px;
    background-color: ${({theme:n})=>n.color.paleBlue};
  }

  .progress {
    border-radius: 10px;
    height: 100%;
    background-color: ${({theme:n})=>n.color.skyBlue};
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    border-radius: 10px;
  }

  .progress-text {
    position: absolute;
    top: -65%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: ${({theme:n})=>n.color.blue};
  }

  .line-0,
  .line-50,
  .line-100 {
    position: absolute;
    bottom: -20px;

    color: ${({theme:n})=>n.color.blue};

    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }

  .line-0 {
    left: 0;
  }

  .line-50 {
    left: 50%;
    transform: translateX(-50%);
  }

  .line-100 {
    right: 0;
    transform: translateX(50%);
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -36px;

    color: ${({theme:n})=>n.color.blue};

    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }

  .marker-0 {
    left: 0;
    transform: translateX(-10%);
  }

  .marker-50 {
    left: 50%;
    transform: translateX(-30%);
  }

  .marker-100 {
    right: 0;
    transform: translateX(50%);
  }

  .indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${({theme:n})=>n.color.white};
    border: 1px solid ${({theme:n})=>n.color.blue};
    border-radius: 50%;
  }

  @media ${({theme:n})=>n.device.tablet} {
    h3 {
      margin-bottom: 16px;
    }
    .progress-bar-container {
      width: 336px;
    }
    .progress-text {
      font-size: 16px;
    }
  }

  @media ${({theme:n})=>n.device.desktop} {
    h3 {
      margin-bottom: 18px;
    }
    .progress-bar-container {
      width: 340px;
    }
  }
`,Gs=P.button`
  width: 280px;
  height: 36px;
  padding: 6px 76px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-color: ${({theme:n})=>n.color.blue};
  border: none;
  border-radius: 10px;
  box-shadow: ${({theme:n})=>n.boxShadow.normalButton};

  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: ${({theme:n})=>n.color.white};
  }

  &:hover {
    box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:n})=>n.boxShadow.activeButton};
  }

  @media ${({theme:n})=>n.device.tablet} {
    width: 336px;
    height: 44px;
    gap: 10px;
    padding: 10px 104px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }
`,Zs=P.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.color.white};
`;var fr={},Js=Po;Object.defineProperty(fr,"__esModule",{value:!0});var hr=fr.default=void 0,ei=Js(So()),ti=f;hr=fr.default=(0,ei.default)((0,ti.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var mr={},ni=Po;Object.defineProperty(mr,"__esModule",{value:!0});var gr=mr.default=void 0,ri=ni(So()),oi=f;gr=mr.default=(0,ri.default)((0,oi.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function st(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function S(n){const r=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&r==="[object Date]"?new n.constructor(+n):typeof n=="number"||r==="[object Number]"||typeof n=="string"||r==="[object String]"?new Date(n):new Date(NaN)}function Yt(n){if(!st(n)&&typeof n!="number")return!1;const r=S(n);return!isNaN(Number(r))}const ai={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},si=(n,r,t)=>{let e;const o=ai[n];return typeof o=="string"?e=o:r===1?e=o.one:e=o.other.replace("{{count}}",r.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+e:e+" ago":e};function In(n){return(r={})=>{const t=r.width?String(r.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const ii={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ci={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},li={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ui={date:In({formats:ii,defaultWidth:"full"}),time:In({formats:ci,defaultWidth:"full"}),dateTime:In({formats:li,defaultWidth:"full"})},di={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pi=(n,r,t,e)=>di[n];function _t(n){return(r,t)=>{const e=t!=null&&t.context?String(t.context):"standalone";let o;if(e==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,i=t!=null&&t.width?String(t.width):a;o=n.formattingValues[i]||n.formattingValues[a]}else{const a=n.defaultWidth,i=t!=null&&t.width?String(t.width):n.defaultWidth;o=n.values[i]||n.values[a]}const s=n.argumentCallback?n.argumentCallback(r):r;return o[s]}}const fi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},hi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vi=(n,r)=>{const t=Number(n),e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},bi={ordinalNumber:vi,era:_t({values:fi,defaultWidth:"wide"}),quarter:_t({values:hi,defaultWidth:"wide",argumentCallback:n=>n-1}),month:_t({values:mi,defaultWidth:"wide"}),day:_t({values:gi,defaultWidth:"wide"}),dayPeriod:_t({values:wi,defaultWidth:"wide",formattingValues:yi,defaultFormattingWidth:"wide"})};function St(n){return(r,t={})=>{const e=t.width,o=e&&n.matchPatterns[e]||n.matchPatterns[n.defaultMatchWidth],s=r.match(o);if(!s)return null;const a=s[0],i=e&&n.parsePatterns[e]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(i)?Di(i,p=>p.test(a)):xi(i,p=>p.test(a));let l;l=n.valueCallback?n.valueCallback(c):c,l=t.valueCallback?t.valueCallback(l):l;const u=r.slice(a.length);return{value:l,rest:u}}}function xi(n,r){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&r(n[t]))return t}function Di(n,r){for(let t=0;t<n.length;t++)if(r(n[t]))return t}function ki(n){return(r,t={})=>{const e=r.match(n.matchPattern);if(!e)return null;const o=e[0],s=r.match(n.parsePattern);if(!s)return null;let a=n.valueCallback?n.valueCallback(s[0]):s[0];a=t.valueCallback?t.valueCallback(a):a;const i=r.slice(o.length);return{value:a,rest:i}}}const Ci=/^(\d+)(th|st|nd|rd)?/i,Mi=/\d+/i,_i={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Si={any:[/^b/i,/^(a|c)/i]},Pi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ei={any:[/1/i,/2/i,/3/i,/4/i]},Ni={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Oi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ti={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ri={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ii={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$i={ordinalNumber:ki({matchPattern:Ci,parsePattern:Mi,valueCallback:n=>parseInt(n,10)}),era:St({matchPatterns:_i,defaultMatchWidth:"wide",parsePatterns:Si,defaultParseWidth:"any"}),quarter:St({matchPatterns:Pi,defaultMatchWidth:"wide",parsePatterns:Ei,defaultParseWidth:"any",valueCallback:n=>n+1}),month:St({matchPatterns:Ni,defaultMatchWidth:"wide",parsePatterns:Oi,defaultParseWidth:"any"}),day:St({matchPatterns:Ti,defaultMatchWidth:"wide",parsePatterns:Ri,defaultParseWidth:"any"}),dayPeriod:St({matchPatterns:Yi,defaultMatchWidth:"any",parsePatterns:Ii,defaultParseWidth:"any"})},Ho={code:"en-US",formatDistance:si,formatLong:ui,formatRelative:pi,localize:bi,match:$i,options:{weekStartsOn:0,firstWeekContainsDate:1}};let Li={};function lt(){return Li}const Bo=6048e5,ji=864e5,xn=6e4,Dn=36e5,Fi=1e3;function Me(n){const r=S(n);return r.setHours(0,0,0,0),r}function cn(n){const r=S(n),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+n-+t}function It(n,r){const t=Me(n),e=Me(r),o=+t-cn(t),s=+e-cn(e);return Math.round((o-s)/ji)}function A(n,r){return n instanceof Date?new n.constructor(r):new Date(r)}function wr(n){const r=S(n),t=A(n,0);return t.setFullYear(r.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Wi(n){const r=S(n);return It(r,wr(r))+1}function Le(n,r){var i,c,l,u;const t=lt(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((u=(l=t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?7:0)+s-e;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function bt(n){return Le(n,{weekStartsOn:1})}function Qo(n){const r=S(n),t=r.getFullYear(),e=A(n,0);e.setFullYear(t+1,0,4),e.setHours(0,0,0,0);const o=bt(e),s=A(n,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const a=bt(s);return r.getTime()>=o.getTime()?t+1:r.getTime()>=a.getTime()?t:t-1}function Ai(n){const r=Qo(n),t=A(n,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),bt(t)}function yr(n){const r=S(n),t=+bt(r)-+Ai(r);return Math.round(t/Bo)+1}function vr(n,r){var u,p,h,m;const t=S(n),e=t.getFullYear(),o=lt(),s=(r==null?void 0:r.firstWeekContainsDate)??((p=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((m=(h=o.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=A(n,0);a.setFullYear(e+1,0,s),a.setHours(0,0,0,0);const i=Le(a,r),c=A(n,0);c.setFullYear(e,0,s),c.setHours(0,0,0,0);const l=Le(c,r);return t.getTime()>=i.getTime()?e+1:t.getTime()>=l.getTime()?e:e-1}function Hi(n,r){var i,c,l,u;const t=lt(),e=(r==null?void 0:r.firstWeekContainsDate)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(l=t.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??1,o=vr(n,r),s=A(n,0);return s.setFullYear(o,0,e),s.setHours(0,0,0,0),Le(s,r)}function zo(n,r){const t=S(n),e=+Le(t,r)-+Hi(t,r);return Math.round(e/Bo)+1}function W(n,r){const t=n<0?"-":"",e=Math.abs(n).toString().padStart(r,"0");return t+e}const Ae={y(n,r){const t=n.getFullYear(),e=t>0?t:1-t;return W(r==="yy"?e%100:e,r.length)},M(n,r){const t=n.getMonth();return r==="M"?String(t+1):W(t+1,2)},d(n,r){return W(n.getDate(),r.length)},a(n,r){const t=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,r){return W(n.getHours()%12||12,r.length)},H(n,r){return W(n.getHours(),r.length)},m(n,r){return W(n.getMinutes(),r.length)},s(n,r){return W(n.getSeconds(),r.length)},S(n,r){const t=r.length,e=n.getMilliseconds(),o=Math.trunc(e*Math.pow(10,t-3));return W(o,r.length)}},dt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ar={G:function(n,r,t){const e=n.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})}},y:function(n,r,t){if(r==="yo"){const e=n.getFullYear(),o=e>0?e:1-e;return t.ordinalNumber(o,{unit:"year"})}return Ae.y(n,r)},Y:function(n,r,t,e){const o=vr(n,e),s=o>0?o:1-o;if(r==="YY"){const a=s%100;return W(a,2)}return r==="Yo"?t.ordinalNumber(s,{unit:"year"}):W(s,r.length)},R:function(n,r){const t=Qo(n);return W(t,r.length)},u:function(n,r){const t=n.getFullYear();return W(t,r.length)},Q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"Q":return String(e);case"QQ":return W(e,2);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})}},q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"q":return String(e);case"qq":return W(e,2);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})}},M:function(n,r,t){const e=n.getMonth();switch(r){case"M":case"MM":return Ae.M(n,r);case"Mo":return t.ordinalNumber(e+1,{unit:"month"});case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})}},L:function(n,r,t){const e=n.getMonth();switch(r){case"L":return String(e+1);case"LL":return W(e+1,2);case"Lo":return t.ordinalNumber(e+1,{unit:"month"});case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})}},w:function(n,r,t,e){const o=zo(n,e);return r==="wo"?t.ordinalNumber(o,{unit:"week"}):W(o,r.length)},I:function(n,r,t){const e=yr(n);return r==="Io"?t.ordinalNumber(e,{unit:"week"}):W(e,r.length)},d:function(n,r,t){return r==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):Ae.d(n,r)},D:function(n,r,t){const e=Wi(n);return r==="Do"?t.ordinalNumber(e,{unit:"dayOfYear"}):W(e,r.length)},E:function(n,r,t){const e=n.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})}},e:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return W(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return W(s,r.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(n,r,t){const e=n.getDay(),o=e===0?7:e;switch(r){case"i":return String(o);case"ii":return W(o,r.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(e,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(e,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(e,{width:"short",context:"formatting"});case"iiii":default:return t.day(e,{width:"wide",context:"formatting"})}},a:function(n,r,t){const o=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,r,t){const e=n.getHours();let o;switch(e===12?o=dt.noon:e===0?o=dt.midnight:o=e/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,r,t){const e=n.getHours();let o;switch(e>=17?o=dt.evening:e>=12?o=dt.afternoon:e>=4?o=dt.morning:o=dt.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,r,t){if(r==="ho"){let e=n.getHours()%12;return e===0&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return Ae.h(n,r)},H:function(n,r,t){return r==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):Ae.H(n,r)},K:function(n,r,t){const e=n.getHours()%12;return r==="Ko"?t.ordinalNumber(e,{unit:"hour"}):W(e,r.length)},k:function(n,r,t){let e=n.getHours();return e===0&&(e=24),r==="ko"?t.ordinalNumber(e,{unit:"hour"}):W(e,r.length)},m:function(n,r,t){return r==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):Ae.m(n,r)},s:function(n,r,t){return r==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):Ae.s(n,r)},S:function(n,r){return Ae.S(n,r)},X:function(n,r,t){const e=n.getTimezoneOffset();if(e===0)return"Z";switch(r){case"X":return Br(e);case"XXXX":case"XX":return tt(e);case"XXXXX":case"XXX":default:return tt(e,":")}},x:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"x":return Br(e);case"xxxx":case"xx":return tt(e);case"xxxxx":case"xxx":default:return tt(e,":")}},O:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Hr(e,":");case"OOOO":default:return"GMT"+tt(e,":")}},z:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Hr(e,":");case"zzzz":default:return"GMT"+tt(e,":")}},t:function(n,r,t){const e=Math.trunc(n.getTime()/1e3);return W(e,r.length)},T:function(n,r,t){const e=n.getTime();return W(e,r.length)}};function Hr(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=Math.trunc(e/60),s=e%60;return s===0?t+String(o):t+String(o)+r+W(s,2)}function Br(n,r){return n%60===0?(n>0?"-":"+")+W(Math.abs(n)/60,2):tt(n,r)}function tt(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=W(Math.trunc(e/60),2),s=W(e%60,2);return t+o+r+s}const Qr=(n,r)=>{switch(n){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},Ko=(n,r)=>{switch(n){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Bi=(n,r)=>{const t=n.match(/(P+)(p+)?/)||[],e=t[1],o=t[2];if(!o)return Qr(n,r);let s;switch(e){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",Qr(e,r)).replace("{{time}}",Ko(o,r))},ln={p:Ko,P:Bi},Qi=/^D+$/,zi=/^Y+$/,Ki=["D","DD","YY","YYYY"];function Vo(n){return Qi.test(n)}function qo(n){return zi.test(n)}function Vn(n,r,t){const e=Vi(n,r,t);if(console.warn(e),Ki.includes(n))throw new RangeError(e)}function Vi(n,r,t){const e=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qi=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ui=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Xi=/^'([^]*?)'?$/,Gi=/''/g,Zi=/[a-zA-Z]/;function zr(n,r,t){var u,p,h,m,g,w,v,x;const e=lt(),o=(t==null?void 0:t.locale)??e.locale??Ho,s=(t==null?void 0:t.firstWeekContainsDate)??((p=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??e.firstWeekContainsDate??((m=(h=e.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((w=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:w.weekStartsOn)??e.weekStartsOn??((x=(v=e.locale)==null?void 0:v.options)==null?void 0:x.weekStartsOn)??0,i=S(n);if(!Yt(i))throw new RangeError("Invalid time value");let c=r.match(Ui).map(b=>{const k=b[0];if(k==="p"||k==="P"){const N=ln[k];return N(b,o.formatLong)}return b}).join("").match(qi).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const k=b[0];if(k==="'")return{isToken:!1,value:Ji(b)};if(Ar[k])return{isToken:!0,value:b};if(k.match(Zi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:b}});o.localize.preprocessor&&(c=o.localize.preprocessor(i,c));const l={firstWeekContainsDate:s,weekStartsOn:a,locale:o};return c.map(b=>{if(!b.isToken)return b.value;const k=b.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&qo(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Vo(k))&&Vn(k,r,String(n));const N=Ar[k[0]];return N(i,k,o.localize,l)}).join("")}function Ji(n){const r=n.match(Xi);return r?r[1].replace(Gi,"'"):n}function Uo(n,r){const t=+S(n);return A(n,t+r)}function qn(n,r){return Uo(n,r*xn)}function ec(n,r){return Uo(n,r*Dn)}function Ge(n,r){const t=S(n);return isNaN(r)?A(n,NaN):(r&&t.setDate(t.getDate()+r),t)}function un(n,r){const t=r*7;return Ge(n,t)}function ye(n,r){const t=S(n);if(isNaN(r))return A(n,NaN);if(!r)return t;const e=t.getDate(),o=A(n,t.getTime());o.setMonth(t.getMonth()+r+1,0);const s=o.getDate();return e>=s?o:(t.setFullYear(o.getFullYear(),o.getMonth(),e),t)}function Xo(n,r){const t=r*3;return ye(n,t)}function Be(n,r){return ye(n,r*12)}function tc(n,r){return Ge(n,-r)}function Kr(n,r){return un(n,-r)}function xt(n,r){return ye(n,-r)}function nc(n,r){return Xo(n,-r)}function Wt(n,r){return Be(n,-r)}function Vr(n){return S(n).getSeconds()}function _e(n){return S(n).getMinutes()}function Se(n){return S(n).getHours()}function rc(n){return S(n).getDay()}function qr(n){return S(n).getDate()}function se(n){return S(n).getMonth()}function Tt(n){const r=S(n);return Math.trunc(r.getMonth()/3)+1}function R(n){return S(n).getFullYear()}function Un(n){return S(n).getTime()}function oc(n,r){const t=S(n);return t.setSeconds(r),t}function en(n,r){const t=S(n);return t.setMinutes(r),t}function tn(n,r){const t=S(n);return t.setHours(r),t}function ac(n){const r=S(n),t=r.getFullYear(),e=r.getMonth(),o=A(n,0);return o.setFullYear(t,e+1,0),o.setHours(0,0,0,0),o.getDate()}function ae(n,r){const t=S(n),e=t.getFullYear(),o=t.getDate(),s=A(n,0);s.setFullYear(e,r,15),s.setHours(0,0,0,0);const a=ac(s);return t.setMonth(r,Math.min(o,a)),t}function ft(n,r){const t=S(n),e=Math.trunc(t.getMonth()/3)+1,o=r-e;return ae(t,t.getMonth()+o*3)}function xe(n,r){const t=S(n);return isNaN(+t)?A(n,NaN):(t.setFullYear(r),t)}function Ur(n){let r;return n.forEach(t=>{const e=S(t);(!r||r>e||isNaN(+e))&&(r=e)}),r||new Date(NaN)}function Xr(n){let r;return n.forEach(function(t){const e=S(t);(r===void 0||r<e||isNaN(Number(e)))&&(r=e)}),r||new Date(NaN)}function dn(n,r){const t=S(n),e=S(r),o=t.getFullYear()-e.getFullYear(),s=t.getMonth()-e.getMonth();return o*12+s}function pn(n,r){const t=S(n),e=S(r);return t.getFullYear()-e.getFullYear()}function Go(n){const r=S(n);return r.setDate(1),r.setHours(0,0,0,0),r}function Xn(n){const r=S(n),t=r.getMonth(),e=t-t%3;return r.setMonth(e,1),r.setHours(0,0,0,0),r}function Gn(n){const r=S(n);return r.setHours(23,59,59,999),r}function sc(n,r){var i,c,l,u;const t=lt(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((u=(l=t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?-7:0)+6-(s-e);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}function ic(n){const r=S(n),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function cc(n){const r=S(n),t=r.getFullYear();return r.setFullYear(t+1,0,0),r.setHours(23,59,59,999),r}function lc(n,r){const t=S(n),e=S(r);return+t==+e}function uc(n,r){const t=Me(n),e=Me(r);return+t==+e}function dc(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function pc(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()}function fc(n,r){const t=Xn(n),e=Xn(r);return+t==+e}function Ue(n,r){const t=S(n),e=S(r);return t.getTime()>e.getTime()}function it(n,r){const t=S(n),e=S(r);return+t<+e}function $t(n,r){const t=+S(n),[e,o]=[+S(r.start),+S(r.end)].sort((s,a)=>s-a);return t>=e&&t<=o}function hc(){return Object.assign({},lt())}function mc(n,r){const t=r instanceof Date?A(r,0):new r(0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}const gc=10;class Zo{constructor(){_(this,"subPriority",0)}validate(r,t){return!0}}class wc extends Zo{constructor(r,t,e,o,s){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=o,s&&(this.subPriority=s)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}}class yc extends Zo{constructor(){super(...arguments);_(this,"priority",gc);_(this,"subPriority",-1)}set(t,e){return e.timestampIsSet?t:A(t,mc(t,Date))}}class L{run(r,t,e,o){const s=this.parse(r,t,e,o);return s?{setter:new wc(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(r,t,e){return!0}}class vc extends L{constructor(){super(...arguments);_(this,"priority",140);_(this,"incompatibleTokens",["R","u","t","T"])}parse(t,e,o){switch(e){case"G":case"GG":case"GGG":return o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"});case"GGGGG":return o.era(t,{width:"narrow"});case"GGGG":default:return o.era(t,{width:"wide"})||o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"})}}set(t,e,o){return e.era=o,t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}const X={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ke={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function G(n,r){return n&&{value:r(n.value),rest:n.rest}}function V(n,r){const t=r.match(n);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function Ce(n,r){const t=r.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};const e=t[1]==="+"?1:-1,o=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,a=t[5]?parseInt(t[5],10):0;return{value:e*(o*Dn+s*xn+a*Fi),rest:r.slice(t[0].length)}}function Jo(n){return V(X.anyDigitsSigned,n)}function U(n,r){switch(n){case 1:return V(X.singleDigit,r);case 2:return V(X.twoDigits,r);case 3:return V(X.threeDigits,r);case 4:return V(X.fourDigits,r);default:return V(new RegExp("^\\d{1,"+n+"}"),r)}}function fn(n,r){switch(n){case 1:return V(X.singleDigitSigned,r);case 2:return V(X.twoDigitsSigned,r);case 3:return V(X.threeDigitsSigned,r);case 4:return V(X.fourDigitsSigned,r);default:return V(new RegExp("^-?\\d{1,"+n+"}"),r)}}function br(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ea(n,r){const t=r>0,e=t?r:1-r;let o;if(e<=50)o=n||100;else{const s=e+50,a=Math.trunc(s/100)*100,i=n>=s%100;o=n+a-(i?100:0)}return t?o:1-o}function ta(n){return n%400===0||n%4===0&&n%100!==0}class bc extends L{constructor(){super(...arguments);_(this,"priority",130);_(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="yy"});switch(e){case"y":return G(U(4,t),s);case"yo":return G(o.ordinalNumber(t,{unit:"year"}),s);default:return G(U(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o){const s=t.getFullYear();if(o.isTwoDigitYear){const i=ea(o.year,s);return t.setFullYear(i,0,1),t.setHours(0,0,0,0),t}const a=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class xc extends L{constructor(){super(...arguments);_(this,"priority",130);_(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="YY"});switch(e){case"Y":return G(U(4,t),s);case"Yo":return G(o.ordinalNumber(t,{unit:"year"}),s);default:return G(U(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o,s){const a=vr(t,s);if(o.isTwoDigitYear){const c=ea(o.year,a);return t.setFullYear(c,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Le(t,s)}const i=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(i,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Le(t,s)}}class Dc extends L{constructor(){super(...arguments);_(this,"priority",130);_(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,e){return fn(e==="R"?4:e.length,t)}set(t,e,o){const s=A(t,0);return s.setFullYear(o,0,4),s.setHours(0,0,0,0),bt(s)}}class kc extends L{constructor(){super(...arguments);_(this,"priority",130);_(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,e){return fn(e==="u"?4:e.length,t)}set(t,e,o){return t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}class Cc extends L{constructor(){super(...arguments);_(this,"priority",120);_(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"Q":case"QQ":return U(e.length,t);case"Qo":return o.ordinalNumber(t,{unit:"quarter"});case"QQQ":return o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(t,{width:"wide",context:"formatting"})||o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class Mc extends L{constructor(){super(...arguments);_(this,"priority",120);_(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"q":case"qq":return U(e.length,t);case"qo":return o.ordinalNumber(t,{unit:"quarter"});case"qqq":return o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(t,{width:"wide",context:"standalone"})||o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class _c extends L{constructor(){super(...arguments);_(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);_(this,"priority",110)}parse(t,e,o){const s=a=>a-1;switch(e){case"M":return G(V(X.month,t),s);case"MM":return G(U(2,t),s);case"Mo":return G(o.ordinalNumber(t,{unit:"month"}),s);case"MMM":return o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(t,{width:"wide",context:"formatting"})||o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}class Sc extends L{constructor(){super(...arguments);_(this,"priority",110);_(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,e,o){const s=a=>a-1;switch(e){case"L":return G(V(X.month,t),s);case"LL":return G(U(2,t),s);case"Lo":return G(o.ordinalNumber(t,{unit:"month"}),s);case"LLL":return o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(t,{width:"wide",context:"standalone"})||o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}function Pc(n,r,t){const e=S(n),o=zo(e,t)-r;return e.setDate(e.getDate()-o*7),e}class Ec extends L{constructor(){super(...arguments);_(this,"priority",100);_(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,e,o){switch(e){case"w":return V(X.week,t);case"wo":return o.ordinalNumber(t,{unit:"week"});default:return U(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o,s){return Le(Pc(t,o,s),s)}}function Nc(n,r){const t=S(n),e=yr(t)-r;return t.setDate(t.getDate()-e*7),t}class Oc extends L{constructor(){super(...arguments);_(this,"priority",100);_(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,e,o){switch(e){case"I":return V(X.week,t);case"Io":return o.ordinalNumber(t,{unit:"week"});default:return U(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o){return bt(Nc(t,o))}}const Tc=[31,28,31,30,31,30,31,31,30,31,30,31],Rc=[31,29,31,30,31,30,31,31,30,31,30,31];class Yc extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"subPriority",1);_(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"d":return V(X.date,t);case"do":return o.ordinalNumber(t,{unit:"date"});default:return U(e.length,t)}}validate(t,e){const o=t.getFullYear(),s=ta(o),a=t.getMonth();return s?e>=1&&e<=Rc[a]:e>=1&&e<=Tc[a]}set(t,e,o){return t.setDate(o),t.setHours(0,0,0,0),t}}class Ic extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"subpriority",1);_(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,e,o){switch(e){case"D":case"DD":return V(X.dayOfYear,t);case"Do":return o.ordinalNumber(t,{unit:"date"});default:return U(e.length,t)}}validate(t,e){const o=t.getFullYear();return ta(o)?e>=1&&e<=366:e>=1&&e<=365}set(t,e,o){return t.setMonth(0,o),t.setHours(0,0,0,0),t}}function xr(n,r,t){var p,h,m,g;const e=lt(),o=(t==null?void 0:t.weekStartsOn)??((h=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:h.weekStartsOn)??e.weekStartsOn??((g=(m=e.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,s=S(n),a=s.getDay(),c=(r%7+7)%7,l=7-o,u=r<0||r>6?r-(a+l)%7:(c+l)%7-(a+l)%7;return Ge(s,u)}class $c extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"E":case"EE":case"EEE":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=xr(t,o,s),t.setHours(0,0,0,0),t}}class Lc extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"e":case"ee":return G(U(e.length,t),a);case"eo":return G(o.ordinalNumber(t,{unit:"day"}),a);case"eee":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeeee":return o.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=xr(t,o,s),t.setHours(0,0,0,0),t}}class jc extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"c":case"cc":return G(U(e.length,t),a);case"co":return G(o.ordinalNumber(t,{unit:"day"}),a);case"ccc":return o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"ccccc":return o.day(t,{width:"narrow",context:"standalone"});case"cccccc":return o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(t,{width:"wide",context:"standalone"})||o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=xr(t,o,s),t.setHours(0,0,0,0),t}}function Fc(n){let t=S(n).getDay();return t===0&&(t=7),t}function Wc(n,r){const t=S(n),e=Fc(t),o=r-e;return Ge(t,o)}class Ac extends L{constructor(){super(...arguments);_(this,"priority",90);_(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,e,o){const s=a=>a===0?7:a;switch(e){case"i":case"ii":return U(e.length,t);case"io":return o.ordinalNumber(t,{unit:"day"});case"iii":return G(o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiii":return G(o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiiii":return G(o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiii":default:return G(o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s)}}validate(t,e){return e>=1&&e<=7}set(t,e,o){return t=Wc(t,o),t.setHours(0,0,0,0),t}}class Hc extends L{constructor(){super(...arguments);_(this,"priority",80);_(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,e,o){switch(e){case"a":case"aa":case"aaa":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(br(o),0,0,0),t}}class Bc extends L{constructor(){super(...arguments);_(this,"priority",80);_(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,e,o){switch(e){case"b":case"bb":case"bbb":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(br(o),0,0,0),t}}class Qc extends L{constructor(){super(...arguments);_(this,"priority",80);_(this,"incompatibleTokens",["a","b","t","T"])}parse(t,e,o){switch(e){case"B":case"BB":case"BBB":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(br(o),0,0,0),t}}class zc extends L{constructor(){super(...arguments);_(this,"priority",70);_(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,e,o){switch(e){case"h":return V(X.hour12h,t);case"ho":return o.ordinalNumber(t,{unit:"hour"});default:return U(e.length,t)}}validate(t,e){return e>=1&&e<=12}set(t,e,o){const s=t.getHours()>=12;return s&&o<12?t.setHours(o+12,0,0,0):!s&&o===12?t.setHours(0,0,0,0):t.setHours(o,0,0,0),t}}class Kc extends L{constructor(){super(...arguments);_(this,"priority",70);_(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,e,o){switch(e){case"H":return V(X.hour23h,t);case"Ho":return o.ordinalNumber(t,{unit:"hour"});default:return U(e.length,t)}}validate(t,e){return e>=0&&e<=23}set(t,e,o){return t.setHours(o,0,0,0),t}}class Vc extends L{constructor(){super(...arguments);_(this,"priority",70);_(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,e,o){switch(e){case"K":return V(X.hour11h,t);case"Ko":return o.ordinalNumber(t,{unit:"hour"});default:return U(e.length,t)}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.getHours()>=12&&o<12?t.setHours(o+12,0,0,0):t.setHours(o,0,0,0),t}}class qc extends L{constructor(){super(...arguments);_(this,"priority",70);_(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,e,o){switch(e){case"k":return V(X.hour24h,t);case"ko":return o.ordinalNumber(t,{unit:"hour"});default:return U(e.length,t)}}validate(t,e){return e>=1&&e<=24}set(t,e,o){const s=o<=24?o%24:o;return t.setHours(s,0,0,0),t}}class Uc extends L{constructor(){super(...arguments);_(this,"priority",60);_(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"m":return V(X.minute,t);case"mo":return o.ordinalNumber(t,{unit:"minute"});default:return U(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setMinutes(o,0,0),t}}class Xc extends L{constructor(){super(...arguments);_(this,"priority",50);_(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"s":return V(X.second,t);case"so":return o.ordinalNumber(t,{unit:"second"});default:return U(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setSeconds(o,0),t}}class Gc extends L{constructor(){super(...arguments);_(this,"priority",30);_(this,"incompatibleTokens",["t","T"])}parse(t,e){const o=s=>Math.trunc(s*Math.pow(10,-e.length+3));return G(U(e.length,t),o)}set(t,e,o){return t.setMilliseconds(o),t}}class Zc extends L{constructor(){super(...arguments);_(this,"priority",10);_(this,"incompatibleTokens",["t","T","x"])}parse(t,e){switch(e){case"X":return Ce(ke.basicOptionalMinutes,t);case"XX":return Ce(ke.basic,t);case"XXXX":return Ce(ke.basicOptionalSeconds,t);case"XXXXX":return Ce(ke.extendedOptionalSeconds,t);case"XXX":default:return Ce(ke.extended,t)}}set(t,e,o){return e.timestampIsSet?t:A(t,t.getTime()-cn(t)-o)}}class Jc extends L{constructor(){super(...arguments);_(this,"priority",10);_(this,"incompatibleTokens",["t","T","X"])}parse(t,e){switch(e){case"x":return Ce(ke.basicOptionalMinutes,t);case"xx":return Ce(ke.basic,t);case"xxxx":return Ce(ke.basicOptionalSeconds,t);case"xxxxx":return Ce(ke.extendedOptionalSeconds,t);case"xxx":default:return Ce(ke.extended,t)}}set(t,e,o){return e.timestampIsSet?t:A(t,t.getTime()-cn(t)-o)}}class el extends L{constructor(){super(...arguments);_(this,"priority",40);_(this,"incompatibleTokens","*")}parse(t){return Jo(t)}set(t,e,o){return[A(t,o*1e3),{timestampIsSet:!0}]}}class tl extends L{constructor(){super(...arguments);_(this,"priority",20);_(this,"incompatibleTokens","*")}parse(t){return Jo(t)}set(t,e,o){return[A(t,o),{timestampIsSet:!0}]}}const nl={G:new vc,y:new bc,Y:new xc,R:new Dc,u:new kc,Q:new Cc,q:new Mc,M:new _c,L:new Sc,w:new Ec,I:new Oc,d:new Yc,D:new Ic,E:new $c,e:new Lc,c:new jc,i:new Ac,a:new Hc,b:new Bc,B:new Qc,h:new zc,H:new Kc,K:new Vc,k:new qc,m:new Uc,s:new Xc,S:new Gc,X:new Zc,x:new Jc,t:new el,T:new tl},rl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ol=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,al=/^'([^]*?)'?$/,sl=/''/g,il=/\S/,cl=/[a-zA-Z]/;function $n(n,r,t,e){var w,v,x,b,k,N,M,O;const o=hc(),s=(e==null?void 0:e.locale)??o.locale??Ho,a=(e==null?void 0:e.firstWeekContainsDate)??((v=(w=e==null?void 0:e.locale)==null?void 0:w.options)==null?void 0:v.firstWeekContainsDate)??o.firstWeekContainsDate??((b=(x=o.locale)==null?void 0:x.options)==null?void 0:b.firstWeekContainsDate)??1,i=(e==null?void 0:e.weekStartsOn)??((N=(k=e==null?void 0:e.locale)==null?void 0:k.options)==null?void 0:N.weekStartsOn)??o.weekStartsOn??((O=(M=o.locale)==null?void 0:M.options)==null?void 0:O.weekStartsOn)??0;if(r==="")return n===""?S(t):A(t,NaN);const c={firstWeekContainsDate:a,weekStartsOn:i,locale:s},l=[new yc],u=r.match(ol).map(C=>{const E=C[0];if(E in ln){const T=ln[E];return T(C,s.formatLong)}return C}).join("").match(rl),p=[];for(let C of u){!(e!=null&&e.useAdditionalWeekYearTokens)&&qo(C)&&Vn(C,r,n),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Vo(C)&&Vn(C,r,n);const E=C[0],T=nl[E];if(T){const{incompatibleTokens:H}=T;if(Array.isArray(H)){const j=p.find(Z=>H.includes(Z.token)||Z.token===E);if(j)throw new RangeError(`The format string mustn't contain \`${j.fullToken}\` and \`${C}\` at the same time`)}else if(T.incompatibleTokens==="*"&&p.length>0)throw new RangeError(`The format string mustn't contain \`${C}\` and any other token at the same time`);p.push({token:E,fullToken:C});const q=T.run(n,C,s.match,c);if(!q)return A(t,NaN);l.push(q.setter),n=q.rest}else{if(E.match(cl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");if(C==="''"?C="'":E==="'"&&(C=ll(C)),n.indexOf(C)===0)n=n.slice(C.length);else return A(t,NaN)}}if(n.length>0&&il.test(n))return A(t,NaN);const h=l.map(C=>C.priority).sort((C,E)=>E-C).filter((C,E,T)=>T.indexOf(C)===E).map(C=>l.filter(E=>E.priority===C).sort((E,T)=>T.subPriority-E.subPriority)).map(C=>C[0]);let m=S(t);if(isNaN(m.getTime()))return A(t,NaN);const g={};for(const C of h){if(!C.validate(m,c))return A(t,NaN);const E=C.set(m,g,c);Array.isArray(E)?(m=E[0],Object.assign(g,E[1])):m=E}return A(t,m)}function ll(n){return n.match(al)[1].replace(sl,"'")}function ul(n,r){const t=(r==null?void 0:r.additionalDigits)??2,e=hl(n);let o;if(e.date){const c=ml(e.date,t);o=gl(c.restDateString,c.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);const s=o.getTime();let a=0,i;if(e.time&&(a=wl(e.time),isNaN(a)))return new Date(NaN);if(e.timezone){if(i=yl(e.timezone),isNaN(i))return new Date(NaN)}else{const c=new Date(s+a),l=new Date(0);return l.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),l.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),l}return new Date(s+a+i)}const Vt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dl=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,pl=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,fl=/^([+-])(\d{2})(?::?(\d{2}))?$/;function hl(n){const r={},t=n.split(Vt.dateTimeDelimiter);let e;if(t.length>2)return r;if(/:/.test(t[0])?e=t[0]:(r.date=t[0],e=t[1],Vt.timeZoneDelimiter.test(r.date)&&(r.date=n.split(Vt.timeZoneDelimiter)[0],e=n.substr(r.date.length,n.length))),e){const o=Vt.timezone.exec(e);o?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e}return r}function ml(n,r){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+r)+"})|(\\d{2}|[+-]\\d{"+(2+r)+"})$)"),e=n.match(t);if(!e)return{year:NaN,restDateString:""};const o=e[1]?parseInt(e[1]):null,s=e[2]?parseInt(e[2]):null;return{year:s===null?o:s*100,restDateString:n.slice((e[1]||e[2]).length)}}function gl(n,r){if(r===null)return new Date(NaN);const t=n.match(dl);if(!t)return new Date(NaN);const e=!!t[4],o=Pt(t[1]),s=Pt(t[2])-1,a=Pt(t[3]),i=Pt(t[4]),c=Pt(t[5])-1;if(e)return kl(r,i,c)?vl(r,i,c):new Date(NaN);{const l=new Date(0);return!xl(r,s,a)||!Dl(r,o)?new Date(NaN):(l.setUTCFullYear(r,s,Math.max(o,a)),l)}}function Pt(n){return n?parseInt(n):1}function wl(n){const r=n.match(pl);if(!r)return NaN;const t=Ln(r[1]),e=Ln(r[2]),o=Ln(r[3]);return Cl(t,e,o)?t*Dn+e*xn+o*1e3:NaN}function Ln(n){return n&&parseFloat(n.replace(",","."))||0}function yl(n){if(n==="Z")return 0;const r=n.match(fl);if(!r)return 0;const t=r[1]==="+"?-1:1,e=parseInt(r[2]),o=r[3]&&parseInt(r[3])||0;return Ml(e,o)?t*(e*Dn+o*xn):NaN}function vl(n,r,t){const e=new Date(0);e.setUTCFullYear(n,0,4);const o=e.getUTCDay()||7,s=(r-1)*7+t+1-o;return e.setUTCDate(e.getUTCDate()+s),e}const bl=[31,null,31,30,31,30,31,31,30,31,30,31];function na(n){return n%400===0||n%4===0&&n%100!==0}function xl(n,r,t){return r>=0&&r<=11&&t>=1&&t<=(bl[r]||(na(n)?29:28))}function Dl(n,r){return r>=1&&r<=(na(n)?366:365)}function kl(n,r,t){return r>=1&&r<=53&&t>=0&&t<=6}function Cl(n,r,t){return n===24?r===0&&t===0:t>=0&&t<60&&r>=0&&r<60&&n>=0&&n<25}function Ml(n,r){return r>=0&&r<=59}function _l(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,Zn(n,r)}function Zn(n,r){return Zn=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},Zn(n,r)}function Sl(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,s;for(s=0;s<e.length;s++)o=e[s],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Gr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Pl(n,r,t){return n===r?!0:n.correspondingElement?n.correspondingElement.classList.contains(t):n.classList.contains(t)}function El(n,r,t){if(n===r)return!0;for(;n.parentNode||n.host;){if(n.parentNode&&Pl(n,r,t))return!0;n=n.parentNode||n.host}return n}function Nl(n){return document.documentElement.clientWidth<=n.clientX||document.documentElement.clientHeight<=n.clientY}var Ol=function(){if(!(typeof window>"u"||typeof window.addEventListener!="function")){var r=!1,t=Object.defineProperty({},"passive",{get:function(){r=!0}}),e=function(){};return window.addEventListener("testPassiveEventSupport",e,t),window.removeEventListener("testPassiveEventSupport",e,t),r}};function Tl(n){return n===void 0&&(n=0),function(){return++n}}var Rl=Tl(),Jn,qt={},jn={},Yl=["touchstart","touchmove"],Il="ignore-react-onclickoutside";function Zr(n,r){var t={},e=Yl.indexOf(r)!==-1;return e&&Jn&&(t.passive=!n.props.preventDefault),t}function kn(n,r){var t,e,o=n.displayName||n.name||"Component";return e=t=function(s){_l(a,s);function a(c){var l;return l=s.call(this,c)||this,l.__outsideClickHandler=function(u){if(typeof l.__clickOutsideHandlerProp=="function"){l.__clickOutsideHandlerProp(u);return}var p=l.getInstance();if(typeof p.props.handleClickOutside=="function"){p.props.handleClickOutside(u);return}if(typeof p.handleClickOutside=="function"){p.handleClickOutside(u);return}throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.")},l.__getComponentNode=function(){var u=l.getInstance();return r&&typeof r.setClickOutsideRef=="function"?r.setClickOutsideRef()(u):typeof u.setClickOutsideRef=="function"?u.setClickOutsideRef():ar.findDOMNode(u)},l.enableOnClickOutside=function(){if(!(typeof document>"u"||jn[l._uid])){typeof Jn>"u"&&(Jn=Ol()),jn[l._uid]=!0;var u=l.props.eventTypes;u.forEach||(u=[u]),qt[l._uid]=function(p){if(l.componentNode!==null&&(l.props.preventDefault&&p.preventDefault(),l.props.stopPropagation&&p.stopPropagation(),!(l.props.excludeScrollbar&&Nl(p)))){var h=p.composed&&p.composedPath&&p.composedPath().shift()||p.target;El(h,l.componentNode,l.props.outsideClickIgnoreClass)===document&&l.__outsideClickHandler(p)}},u.forEach(function(p){document.addEventListener(p,qt[l._uid],Zr(Gr(l),p))})}},l.disableOnClickOutside=function(){delete jn[l._uid];var u=qt[l._uid];if(u&&typeof document<"u"){var p=l.props.eventTypes;p.forEach||(p=[p]),p.forEach(function(h){return document.removeEventListener(h,u,Zr(Gr(l),h))}),delete qt[l._uid]}},l.getRef=function(u){return l.instanceRef=u},l._uid=Rl(),l}var i=a.prototype;return i.getInstance=function(){if(n.prototype&&!n.prototype.isReactComponent)return this;var l=this.instanceRef;return l.getInstance?l.getInstance():l},i.componentDidMount=function(){if(!(typeof document>"u"||!document.createElement)){var l=this.getInstance();if(r&&typeof r.handleClickOutside=="function"&&(this.__clickOutsideHandlerProp=r.handleClickOutside(l),typeof this.__clickOutsideHandlerProp!="function"))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),!this.props.disableOnClickOutside&&this.enableOnClickOutside()}},i.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},i.componentWillUnmount=function(){this.disableOnClickOutside()},i.render=function(){var l=this.props;l.excludeScrollbar;var u=Sl(l,["excludeScrollbar"]);return n.prototype&&n.prototype.isReactComponent?u.ref=this.getRef:u.wrappedRef=this.getRef,u.disableOnClickOutside=this.disableOnClickOutside,u.enableOnClickOutside=this.enableOnClickOutside,D.createElement(n,u)},a}(D.Component),t.displayName="OnClickOutside("+o+")",t.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:r&&r.excludeScrollbar||!1,outsideClickIgnoreClass:Il,preventDefault:!1,stopPropagation:!1},t.getClass=function(){return n.getClass?n.getClass():n},e}const $l=Eo["useInsertionEffect".toString()],Ll=$l||(n=>n());function jl(n){const r=D.useRef(()=>{});return Ll(()=>{r.current=n}),D.useCallback(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return r.current==null?void 0:r.current(...e)},[])}var ra=typeof document<"u"?D.useLayoutEffect:D.useEffect;function er(){return er=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},er.apply(this,arguments)}let Fn=!1,Fl=0;const Jr=()=>"floating-ui-"+Fl++;function Wl(){const[n,r]=D.useState(()=>Fn?Jr():void 0);return ra(()=>{n==null&&r(Jr())},[]),D.useEffect(()=>{Fn||(Fn=!0)},[]),n}const Al=Eo["useId".toString()],oa=Al||Wl,Hl=D.forwardRef(function(r,t){const{context:{placement:e,elements:{floating:o},middlewareData:{arrow:s}},width:a=14,height:i=7,tipRadius:c=0,strokeWidth:l=0,staticOffset:u,stroke:p,d:h,style:{transform:m,...g}={},...w}=r,v=oa();if(!o)return null;const x=l*2,b=x/2,k=a/2*(c/-8+1),N=i/2*c/4,[M,O]=e.split("-"),C=Fo.isRTL(o),E=!!h,T=M==="top"||M==="bottom",H=u&&O==="end"?"bottom":"top";let q=u&&O==="end"?"right":"left";u&&C&&(q=O==="end"?"left":"right");const j=(s==null?void 0:s.x)!=null?u||s.x:"",Z=(s==null?void 0:s.y)!=null?u||s.y:"",Y=h||"M0,0"+(" H"+a)+(" L"+(a-k)+","+(i-N))+(" Q"+a/2+","+i+" "+k+","+(i-N))+" Z",z={top:E?"rotate(180deg)":"",left:E?"rotate(90deg)":"rotate(-90deg)",bottom:E?"":"rotate(180deg)",right:E?"rotate(-90deg)":"rotate(90deg)"}[M];return D.createElement("svg",er({},w,{"aria-hidden":!0,ref:t,width:E?a:a+x,height:a,viewBox:"0 0 "+a+" "+(i>a?i:a),style:{position:"absolute",pointerEvents:"none",[q]:j,[H]:Z,[M]:T||E?"100%":"calc(100% - "+x/2+"px)",transform:""+z+(m??""),...g}}),x>0&&D.createElement("path",{clipPath:"url(#"+v+")",fill:"none",stroke:p,strokeWidth:x+(h?0:1),d:Y}),D.createElement("path",{stroke:x&&!h?w.fill:"none",d:Y}),D.createElement("clipPath",{id:v},D.createElement("rect",{x:-b,y:b*(E?-1:1),width:a+x,height:a})))});function Bl(){const n=new Map;return{emit(r,t){var e;(e=n.get(r))==null||e.forEach(o=>o(t))},on(r,t){n.set(r,[...n.get(r)||[],t])},off(r,t){var e;n.set(r,((e=n.get(r))==null?void 0:e.filter(o=>o!==t))||[])}}}const Ql=D.createContext(null),zl=D.createContext(null),Kl=()=>{var n;return((n=D.useContext(Ql))==null?void 0:n.id)||null},Vl=()=>D.useContext(zl);function ql(n){var r;n===void 0&&(n={});const{open:t=!1,onOpenChange:e,nodeId:o}=n,[s,a]=D.useState(null),i=((r=n.elements)==null?void 0:r.reference)||s,c=hs(n),l=Vl(),u=Kl()!=null,p=jl((M,O,C)=>{M&&(m.current.openEvent=O),g.emit("openchange",{open:M,event:O,reason:C,nested:u}),e==null||e(M,O,C)}),h=D.useRef(null),m=D.useRef({}),g=D.useState(()=>Bl())[0],w=oa(),v=D.useCallback(M=>{const O=ue(M)?{getBoundingClientRect:()=>M.getBoundingClientRect(),contextElement:M}:M;c.refs.setReference(O)},[c.refs]),x=D.useCallback(M=>{(ue(M)||M===null)&&(h.current=M,a(M)),(ue(c.refs.reference.current)||c.refs.reference.current===null||M!==null&&!ue(M))&&c.refs.setReference(M)},[c.refs]),b=D.useMemo(()=>({...c.refs,setReference:x,setPositionReference:v,domReference:h}),[c.refs,x,v]),k=D.useMemo(()=>({...c.elements,domReference:i}),[c.elements,i]),N=D.useMemo(()=>({...c,refs:b,elements:k,dataRef:m,nodeId:o,floatingId:w,events:g,open:t,onOpenChange:p}),[c,o,w,g,t,p,b,k]);return ra(()=>{const M=l==null?void 0:l.nodesRef.current.find(O=>O.id===o);M&&(M.context=N)}),D.useMemo(()=>({...c,context:N,refs:b,elements:k}),[c,b,k,N])}function Ul(n,r){let t=S(n);return isNaN(+t)?A(n,NaN):(r.year!=null&&t.setFullYear(r.year),r.month!=null&&(t=ae(t,r.month)),r.date!=null&&t.setDate(r.date),r.hours!=null&&t.setHours(r.hours),r.minutes!=null&&t.setMinutes(r.minutes),r.seconds!=null&&t.setSeconds(r.seconds),r.milliseconds!=null&&t.setMilliseconds(r.milliseconds),t)}/*!
  react-datepicker v6.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/function J(n,r,t){return r=hn(r),Zl(n,aa()?Reflect.construct(r,t||[],hn(n).constructor):r.apply(n,t))}function aa(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aa=function(){return!!n})()}function eo(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,e)}return t}function Re(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?eo(Object(t),!0).forEach(function(e){d(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):eo(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function Xl(n,r){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var e=t.call(n,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function sa(n){var r=Xl(n,"string");return typeof r=="symbol"?r:r+""}function tr(n){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},tr(n)}function ee(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function to(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,sa(e.key),e)}}function te(n,r,t){return r&&to(n.prototype,r),t&&to(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function d(n,r,t){return r=sa(r),r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function Lt(){return Lt=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},Lt.apply(this,arguments)}function ne(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&nr(n,r)}function hn(n){return hn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hn(n)}function nr(n,r){return nr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},nr(n,r)}function Gl(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Zl(n,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gl(n)}function Xe(n){return Jl(n)||eu(n)||tu(n)||nu()}function Jl(n){if(Array.isArray(n))return rr(n)}function eu(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function tu(n,r){if(n){if(typeof n=="string")return rr(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rr(n,r)}}function rr(n,r){(r==null||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function nu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var At=12,ru=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function Q(n){var r=n?typeof n=="string"||n instanceof String?ul(n):S(n):new Date;return He(r)?r:null}function ou(n,r,t,e,o){var s=null,a=$e(t)||$e(ot()),i=!0;return Array.isArray(r)?(r.forEach(function(c){var l=$n(n,c,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});e&&(i=He(l,o)&&n===K(l,c,t)),He(l,o)&&i&&(s=l)}),s):(s=$n(n,r,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0}),e?i=He(s)&&n===K(s,r,t):He(s)||(r=r.match(ru).map(function(c){var l=c[0];if(l==="p"||l==="P"){var u=ln[l];return a?u(c,a.formatLong):l}return c}).join(""),n.length>0&&(s=$n(n,r.slice(0,n.length),new Date,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})),He(s)||(s=new Date(n))),He(s)&&i?s:null)}function He(n,r){return r=r||new Date("1/1/1000"),Yt(n)&&!it(n,r)}function K(n,r,t){if(t==="en")return zr(n,r,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});var e=$e(t);return t&&!e&&console.warn('A locale object was not found for the provided string ["'.concat(t,'"].')),!e&&ot()&&$e(ot())&&(e=$e(ot())),zr(n,r,{locale:e||null,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})}function me(n,r){var t=r.dateFormat,e=r.locale;return n&&K(n,Array.isArray(t)?t[0]:t,e)||""}function au(n,r,t){if(!n)return"";var e=me(n,t),o=r?me(r,t):"";return"".concat(e," - ").concat(o)}function su(n,r){if(!(n!=null&&n.length))return"";var t=me(n[0],r);if(n.length===1)return t;if(n.length===2){var e=me(n[1],r);return"".concat(t,", ").concat(e)}var o=n.length-1;return"".concat(t," (+").concat(o,")")}function Wn(n,r){var t=r.hour,e=t===void 0?0:t,o=r.minute,s=o===void 0?0:o,a=r.second,i=a===void 0?0:a;return tn(en(oc(n,i),s),e)}function iu(n,r){return r&&$e(r)||ot()&&$e(ot()),yr(n)}function cu(n,r){return K(n,"ddd",r)}function lu(n){return Me(n)}function Qe(n,r,t){var e=$e(r||ot());return Le(n,{locale:e,weekStartsOn:t})}function ze(n){return Go(n)}function Et(n){return wr(n)}function no(n){return Xn(n)}function ro(){return Me(Q())}function uu(n){return sc(n)}function De(n,r){return n&&r?pc(n,r):!n&&!r}function le(n,r){return n&&r?dc(n,r):!n&&!r}function mn(n,r){return n&&r?fc(n,r):!n&&!r}function $(n,r){return n&&r?uc(n,r):!n&&!r}function nt(n,r){return n&&r?lc(n,r):!n&&!r}function Nt(n,r,t){var e,o=Me(r),s=Gn(t);try{e=$t(n,{start:o,end:s})}catch{e=!1}return e}function ot(){var n=typeof window<"u"?window:globalThis;return n.__localeId__}function $e(n){if(typeof n=="string"){var r=typeof window<"u"?window:globalThis;return r.__localeData__?r.__localeData__[n]:null}else return n}function du(n,r,t){return r(K(n,"EEEE",t))}function pu(n,r){return K(n,"EEEEEE",r)}function fu(n,r){return K(n,"EEE",r)}function Dr(n,r){return K(ae(Q(),n),"LLLL",r)}function ia(n,r){return K(ae(Q(),n),"LLL",r)}function hu(n,r){return K(ft(Q(),n),"QQQ",r)}function Cn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.excludeDateIntervals,a=r.includeDates,i=r.includeDateIntervals,c=r.filterDate;return Mn(n,{minDate:t,maxDate:e})||o&&o.some(function(l){return $(n,l.date?l.date:l)})||s&&s.some(function(l){var u=l.start,p=l.end;return $t(n,{start:u,end:p})})||a&&!a.some(function(l){return $(n,l)})||i&&!i.some(function(l){var u=l.start,p=l.end;return $t(n,{start:u,end:p})})||c&&!c(Q(n))||!1}function kr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeDates,e=r.excludeDateIntervals;return e&&e.length>0?e.some(function(o){var s=o.start,a=o.end;return $t(n,{start:s,end:a})}):t&&t.some(function(o){return $(n,o.date?o.date:o)})||!1}function nn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Mn(n,{minDate:Go(t),maxDate:ic(e)})||o&&o.some(function(i){return le(n,i)})||s&&!s.some(function(i){return le(n,i)})||a&&!a(Q(n))||!1}function Ut(n,r,t,e){var o=R(n),s=se(n),a=R(r),i=se(r),c=R(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function An(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Mn(n,{minDate:t,maxDate:e})||o&&o.some(function(i){return mn(n,i)})||s&&!s.some(function(i){return mn(n,i)})||a&&!a(Q(n))||!1}function Xt(n,r,t){if(!Yt(r)||!Yt(t))return!1;var e=R(r),o=R(t);return e<=n&&o>=n}function ca(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate,i=new Date(n,0,1);return Mn(i,{minDate:wr(t),maxDate:cc(e)})||o&&o.some(function(c){return De(i,c)})||s&&!s.some(function(c){return De(i,c)})||a&&!a(Q(i))||!1}function Gt(n,r,t,e){var o=R(n),s=Tt(n),a=R(r),i=Tt(r),c=R(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function Mn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate;return t&&It(n,t)<0||e&&It(n,e)>0}function oo(n,r){return r.some(function(t){return Se(t)===Se(n)&&_e(t)===_e(n)})}function ao(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeTimes,e=r.includeTimes,o=r.filterTime;return t&&oo(n,t)||e&&!oo(n,e)||o&&!o(n)||!1}function so(n,r){var t=r.minTime,e=r.maxTime;if(!t||!e)throw new Error("Both minTime and maxTime props required");var o=Q(),s=tn(en(o,_e(n)),Se(n)),a=tn(en(o,_e(t)),Se(t)),i=tn(en(o,_e(e)),Se(e)),c;try{c=!$t(s,{start:a,end:i})}catch{c=!1}return c}function io(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=xt(n,1);return t&&dn(t,o)>0||e&&e.every(function(s){return dn(s,o)>0})||!1}function co(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=ye(n,1);return t&&dn(o,t)>0||e&&e.every(function(s){return dn(o,s)>0})||!1}function lo(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=Wt(n,1);return t&&pn(t,o)>0||e&&e.every(function(s){return pn(s,o)>0})||!1}function mu(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.yearItemNumber,o=e===void 0?At:e,s=Et(Wt(n,o)),a=Dt(s,o),i=a.endPeriod,c=t&&R(t);return c&&c>i||!1}function uo(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=Be(n,1);return t&&pn(o,t)>0||e&&e.every(function(s){return pn(o,s)>0})||!1}function gu(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.yearItemNumber,o=e===void 0?At:e,s=Be(n,o),a=Dt(s,o),i=a.startPeriod,c=t&&R(t);return c&&c<i||!1}function la(n){var r=n.minDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return It(o,r)>=0});return Ur(e)}else return t?Ur(t):r}function ua(n){var r=n.maxDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return It(o,r)<=0});return Xr(e)}else return t?Xr(t):r}function po(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--highlighted",t=new Map,e=0,o=n.length;e<o;e++){var s=n[e];if(st(s)){var a=K(s,"MM.dd.yyyy"),i=t.get(a)||[];i.includes(r)||(i.push(r),t.set(a,i))}else if(tr(s)==="object"){var c=Object.keys(s),l=c[0],u=s[c[0]];if(typeof l=="string"&&u.constructor===Array)for(var p=0,h=u.length;p<h;p++){var m=K(u[p],"MM.dd.yyyy"),g=t.get(m)||[];g.includes(l)||(g.push(l),t.set(m,g))}}}return t}function wu(n,r){return n.length!==r.length?!1:n.every(function(t,e){return t===r[e]})}function yu(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--holidays",t=new Map;return n.forEach(function(e){var o=e.date,s=e.holidayName;if(st(o)){var a=K(o,"MM.dd.yyyy"),i=t.get(a)||{};if(!("className"in i&&i.className===r&&wu(i.holidayNames,[s]))){i.className=r;var c=i.holidayNames;i.holidayNames=c?[].concat(Xe(c),[s]):[s],t.set(a,i)}}}),t}function vu(n,r,t,e,o){for(var s=o.length,a=[],i=0;i<s;i++){var c=qn(ec(n,Se(o[i])),_e(o[i])),l=qn(n,(t+1)*e);Ue(c,r)&&it(c,l)&&a.push(o[i])}return a}function fo(n){return n<10?"0".concat(n):"".concat(n)}function Dt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At,t=Math.ceil(R(n)/r)*r,e=t-(r-1);return{startPeriod:e,endPeriod:t}}function bu(n){var r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),24);return Math.round((+t-+r)/36e5)}function ho(n){var r=n.getSeconds(),t=n.getMilliseconds();return S(n.getTime()-r*1e3-t)}function xu(n,r){return ho(n).getTime()===ho(r).getTime()}function mo(n){if(!st(n))throw new Error("Invalid date");var r=new Date(n);return r.setHours(0,0,0,0),r}function go(n,r){if(!st(n)||!st(r))throw new Error("Invalid date received");var t=mo(n),e=mo(r);return it(t,e)}function da(n){var r=" ";return n.key===r}function Du(n,r,t,e){for(var o=[],s=0;s<2*r+1;s++){var a=n+r-s,i=!0;t&&(i=R(t)<=a),e&&i&&(i=R(e)>=a),i&&o.push(a)}return o}var ku=function(n){function r(t){var e;ee(this,r),e=J(this,r,[t]),d(e,"renderOptions",function(){var i=e.props.year,c=e.state.yearsList.map(function(p){return y.createElement("div",{className:i===p?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:p,onClick:e.onChange.bind(e,p),"aria-selected":i===p?"true":void 0},i===p?y.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",p)}),l=e.props.minDate?R(e.props.minDate):null,u=e.props.maxDate?R(e.props.maxDate):null;return(!u||!e.state.yearsList.find(function(p){return p===u}))&&c.unshift(y.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:e.incrementYears},y.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),(!l||!e.state.yearsList.find(function(p){return p===l}))&&c.push(y.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:e.decrementYears},y.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),c}),d(e,"onChange",function(i){e.props.onChange(i)}),d(e,"handleClickOutside",function(){e.props.onCancel()}),d(e,"shiftYears",function(i){var c=e.state.yearsList.map(function(l){return l+i});e.setState({yearsList:c})}),d(e,"incrementYears",function(){return e.shiftYears(1)}),d(e,"decrementYears",function(){return e.shiftYears(-1)});var o=t.yearDropdownItemNumber,s=t.scrollableYearDropdown,a=o||(s?10:5);return e.state={yearsList:Du(e.props.year,a,e.props.minDate,e.props.maxDate)},e.dropdownRef=D.createRef(),e}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){var e=this.dropdownRef.current;if(e){var o=e.children?Array.from(e.children):null,s=o?o.find(function(a){return a.ariaSelected}):null;e.scrollTop=s?s.offsetTop+(s.clientHeight-e.clientHeight)/2:(e.scrollHeight-e.clientHeight)/2}}},{key:"render",value:function(){var e=re({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return y.createElement("div",{className:e,ref:this.dropdownRef},this.renderOptions())}}])}(y.Component),Cu=kn(ku),Mu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"state",{dropdownVisible:!1}),d(t,"renderSelectOptions",function(){for(var a=t.props.minDate?R(t.props.minDate):1900,i=t.props.maxDate?R(t.props.maxDate):2100,c=[],l=a;l<=i;l++)c.push(y.createElement("option",{key:l,value:l},l));return c}),d(t,"onSelectChange",function(a){t.onChange(a.target.value)}),d(t,"renderSelectMode",function(){return y.createElement("select",{value:t.props.year,className:"react-datepicker__year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),d(t,"renderReadView",function(a){return y.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(c){return t.toggleDropdown(c)}},y.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),y.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},t.props.year))}),d(t,"renderDropdown",function(){return y.createElement(Cu,{key:"dropdown",year:t.props.year,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableYearDropdown:t.props.scrollableYearDropdown,yearDropdownItemNumber:t.props.yearDropdownItemNumber})}),d(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),d(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.year&&t.props.onChange(a)}),d(t,"toggleDropdown",function(a){t.setState({dropdownVisible:!t.state.dropdownVisible},function(){t.props.adjustDateOnChange&&t.handleYearChange(t.props.date,a)})}),d(t,"handleYearChange",function(a,i){t.onSelect(a,i),t.setOpen()}),d(t,"onSelect",function(a,i){t.props.onSelect&&t.props.onSelect(a,i)}),d(t,"setOpen",function(){t.props.setOpen&&t.props.setOpen(!0)}),t}return ne(r,n),te(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return y.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(y.Component),_u=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"isSelectedMonth",function(a){return t.props.month===a}),d(t,"renderOptions",function(){return t.props.monthNames.map(function(a,i){return y.createElement("div",{className:t.isSelectedMonth(i)?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:a,onClick:t.onChange.bind(t,i),"aria-selected":t.isSelectedMonth(i)?"true":void 0},t.isSelectedMonth(i)?y.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",a)})}),d(t,"onChange",function(a){return t.props.onChange(a)}),d(t,"handleClickOutside",function(){return t.props.onCancel()}),t}return ne(r,n),te(r,[{key:"render",value:function(){return y.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}])}(y.Component),Su=kn(_u),Pu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"state",{dropdownVisible:!1}),d(t,"renderSelectOptions",function(a){return a.map(function(i,c){return y.createElement("option",{key:c,value:c},i)})}),d(t,"renderSelectMode",function(a){return y.createElement("select",{value:t.props.month,className:"react-datepicker__month-select",onChange:function(c){return t.onChange(c.target.value)}},t.renderSelectOptions(a))}),d(t,"renderReadView",function(a,i){return y.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:t.toggleDropdown},y.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),y.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},i[t.props.month]))}),d(t,"renderDropdown",function(a){return y.createElement(Su,{key:"dropdown",month:t.props.month,monthNames:a,onChange:t.onChange,onCancel:t.toggleDropdown})}),d(t,"renderScrollMode",function(a){var i=t.state.dropdownVisible,c=[t.renderReadView(!i,a)];return i&&c.unshift(t.renderDropdown(a)),c}),d(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.month&&t.props.onChange(a)}),d(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return ne(r,n),te(r,[{key:"render",value:function(){var e=this,o=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(a){return ia(a,e.props.locale)}:function(a){return Dr(a,e.props.locale)}),s;switch(this.props.dropdownMode){case"scroll":s=this.renderScrollMode(o);break;case"select":s=this.renderSelectMode(o);break}return y.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},s)}}])}(y.Component);function Eu(n,r){for(var t=[],e=ze(n),o=ze(r);!Ue(e,o);)t.push(Q(e)),e=ye(e,1);return t}var Nu=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"renderOptions",function(){return e.state.monthYearsList.map(function(o){var s=Un(o),a=De(e.props.date,o)&&le(e.props.date,o);return y.createElement("div",{className:a?"react-datepicker__month-year-option--selected_month-year":"react-datepicker__month-year-option",key:s,onClick:e.onChange.bind(e,s),"aria-selected":a?"true":void 0},a?y.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",K(o,e.props.dateFormat,e.props.locale))})}),d(e,"onChange",function(o){return e.props.onChange(o)}),d(e,"handleClickOutside",function(){e.props.onCancel()}),e.state={monthYearsList:Eu(e.props.minDate,e.props.maxDate)},e}return ne(r,n),te(r,[{key:"render",value:function(){var e=re({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return y.createElement("div",{className:e},this.renderOptions())}}])}(y.Component),Ou=kn(Nu),Tu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"state",{dropdownVisible:!1}),d(t,"renderSelectOptions",function(){for(var a=ze(t.props.minDate),i=ze(t.props.maxDate),c=[];!Ue(a,i);){var l=Un(a);c.push(y.createElement("option",{key:l,value:l},K(a,t.props.dateFormat,t.props.locale))),a=ye(a,1)}return c}),d(t,"onSelectChange",function(a){t.onChange(a.target.value)}),d(t,"renderSelectMode",function(){return y.createElement("select",{value:Un(ze(t.props.date)),className:"react-datepicker__month-year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),d(t,"renderReadView",function(a){var i=K(t.props.date,t.props.dateFormat,t.props.locale);return y.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(l){return t.toggleDropdown(l)}},y.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),y.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},i))}),d(t,"renderDropdown",function(){return y.createElement(Ou,{key:"dropdown",date:t.props.date,dateFormat:t.props.dateFormat,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableMonthYearDropdown:t.props.scrollableMonthYearDropdown,locale:t.props.locale})}),d(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),d(t,"onChange",function(a){t.toggleDropdown();var i=Q(parseInt(a));De(t.props.date,i)&&le(t.props.date,i)||t.props.onChange(i)}),d(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return ne(r,n),te(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return y.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(y.Component),Ru=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"dayEl",y.createRef()),d(t,"handleClick",function(a){!t.isDisabled()&&t.props.onClick&&t.props.onClick(a)}),d(t,"handleMouseEnter",function(a){!t.isDisabled()&&t.props.onMouseEnter&&t.props.onMouseEnter(a)}),d(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),d(t,"isSameDay",function(a){return $(t.props.day,a)}),d(t,"isKeyboardSelected",function(){var a;if(t.props.disabledKeyboardNavigation)return!1;var i=t.props.selectsMultiple?(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(c){return t.isSameDayOrWeek(c)}):t.isSameDayOrWeek(t.props.selected);return!i&&t.isSameDayOrWeek(t.props.preSelection)}),d(t,"isDisabled",function(){return Cn(t.props.day,t.props)}),d(t,"isExcluded",function(){return kr(t.props.day,t.props)}),d(t,"isStartOfWeek",function(){return $(t.props.day,Qe(t.props.day,t.props.locale,t.props.calendarStartDay))}),d(t,"isSameWeek",function(a){return t.props.showWeekPicker&&$(a,Qe(t.props.day,t.props.locale,t.props.calendarStartDay))}),d(t,"isSameDayOrWeek",function(a){return t.isSameDay(a)||t.isSameWeek(a)}),d(t,"getHighLightedClass",function(){var a=t.props,i=a.day,c=a.highlightDates;if(!c)return!1;var l=K(i,"MM.dd.yyyy");return c.get(l)}),d(t,"getHolidaysClass",function(){var a=t.props,i=a.day,c=a.holidays;if(!c)return!1;var l=K(i,"MM.dd.yyyy");if(c.has(l))return[c.get(l).className]}),d(t,"isInRange",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:Nt(i,c,l)}),d(t,"isInSelectingRange",function(){var a,i=t.props,c=i.day,l=i.selectsStart,u=i.selectsEnd,p=i.selectsRange,h=i.selectsDisabledDaysInRange,m=i.startDate,g=i.endDate,w=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return!(l||u||p)||!w||!h&&t.isDisabled()?!1:l&&g&&(it(w,g)||nt(w,g))?Nt(c,w,g):u&&m&&(Ue(w,m)||nt(w,m))||p&&m&&!g&&(Ue(w,m)||nt(w,m))?Nt(c,m,w):!1}),d(t,"isSelectingRangeStart",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.startDate,u=i.selectsStart,p=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return u?$(c,p):$(c,l)}),d(t,"isSelectingRangeEnd",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.endDate,u=i.selectsEnd,p=i.selectsRange,h=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return u||p?$(c,h):$(c,l)}),d(t,"isRangeStart",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:$(c,i)}),d(t,"isRangeEnd",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:$(l,i)}),d(t,"isWeekend",function(){var a=rc(t.props.day);return a===0||a===6}),d(t,"isAfterMonth",function(){return t.props.month!==void 0&&(t.props.month+1)%12===se(t.props.day)}),d(t,"isBeforeMonth",function(){return t.props.month!==void 0&&(se(t.props.day)+1)%12===t.props.month}),d(t,"isCurrentDay",function(){return t.isSameDay(Q())}),d(t,"isSelected",function(){if(t.props.selectsMultiple){var a;return(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(i){return t.isSameDayOrWeek(i)})}return t.isSameDayOrWeek(t.props.selected)}),d(t,"getClassNames",function(a){var i=t.props.dayClassName?t.props.dayClassName(a):void 0;return re("react-datepicker__day",i,"react-datepicker__day--"+cu(t.props.day),{"react-datepicker__day--disabled":t.isDisabled(),"react-datepicker__day--excluded":t.isExcluded(),"react-datepicker__day--selected":t.isSelected(),"react-datepicker__day--keyboard-selected":t.isKeyboardSelected(),"react-datepicker__day--range-start":t.isRangeStart(),"react-datepicker__day--range-end":t.isRangeEnd(),"react-datepicker__day--in-range":t.isInRange(),"react-datepicker__day--in-selecting-range":t.isInSelectingRange(),"react-datepicker__day--selecting-range-start":t.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":t.isSelectingRangeEnd(),"react-datepicker__day--today":t.isCurrentDay(),"react-datepicker__day--weekend":t.isWeekend(),"react-datepicker__day--outside-month":t.isAfterMonth()||t.isBeforeMonth()},t.getHighLightedClass("react-datepicker__day--highlighted"),t.getHolidaysClass())}),d(t,"getAriaLabel",function(){var a=t.props,i=a.day,c=a.ariaLabelPrefixWhenEnabled,l=c===void 0?"Choose":c,u=a.ariaLabelPrefixWhenDisabled,p=u===void 0?"Not available":u,h=t.isDisabled()||t.isExcluded()?p:l;return"".concat(h," ").concat(K(i,"PPPP",t.props.locale))}),d(t,"getTitle",function(){var a=t.props,i=a.day,c=a.holidays,l=c===void 0?new Map:c,u=a.excludeDates,p=K(i,"MM.dd.yyyy"),h=[];return l.has(p)&&h.push.apply(h,Xe(l.get(p).holidayNames)),t.isExcluded()&&h.push(u==null?void 0:u.filter(function(m){return $(m.date?m.date:m,i)}).map(function(m){return m.message})),h.join(", ")}),d(t,"getTabIndex",function(a,i){var c=a||t.props.selected,l=i||t.props.preSelection,u=!(t.props.showWeekPicker&&(t.props.showWeekNumber||!t.isStartOfWeek()))&&(t.isKeyboardSelected()||t.isSameDay(c)&&$(l,c))?0:-1;return u}),d(t,"handleFocusDay",function(){var a,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=!1;t.getTabIndex()===0&&!i.isInputFocused&&t.isSameDay(t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(c=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(c=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(c=!0),t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()&&(c=!1),t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()&&(c=!1)),c&&((a=t.dayEl.current)===null||a===void 0||a.focus({preventScroll:!0}))}),d(t,"renderDayContents",function(){return t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()||t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()?null:t.props.renderDayContents?t.props.renderDayContents(qr(t.props.day),t.props.day):qr(t.props.day)}),d(t,"render",function(){return y.createElement("div",{ref:t.dayEl,className:t.getClassNames(t.props.day),onKeyDown:t.handleOnKeyDown,onClick:t.handleClick,onMouseEnter:t.props.usePointerEvent?void 0:t.handleMouseEnter,onPointerEnter:t.props.usePointerEvent?t.handleMouseEnter:void 0,tabIndex:t.getTabIndex(),"aria-label":t.getAriaLabel(),role:"option",title:t.getTitle(),"aria-disabled":t.isDisabled(),"aria-current":t.isCurrentDay()?"date":void 0,"aria-selected":t.isSelected()||t.isInRange()},t.renderDayContents(),t.getTitle()!==""&&y.createElement("span",{className:"overlay"},t.getTitle()))}),t}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){this.handleFocusDay()}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e)}}])}(y.Component),Yu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"weekNumberEl",y.createRef()),d(t,"handleClick",function(a){t.props.onClick&&t.props.onClick(a)}),d(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),d(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!$(t.props.date,t.props.selected)&&$(t.props.date,t.props.preSelection)}),d(t,"getTabIndex",function(){return t.props.showWeekPicker&&t.props.showWeekNumber&&(t.isKeyboardSelected()||$(t.props.date,t.props.selected)&&$(t.props.preSelection,t.props.selected))?0:-1}),d(t,"handleFocusWeekNumber",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=!1;t.getTabIndex()===0&&!a.isInputFocused&&$(t.props.date,t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(i=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(i=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement&&document.activeElement.classList.contains("react-datepicker__week-number")&&(i=!0)),i&&t.weekNumberEl.current&&t.weekNumberEl.current.focus({preventScroll:!0})}),t}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){this.handleFocusWeekNumber()}},{key:"componentDidUpdate",value:function(e){this.handleFocusWeekNumber(e)}},{key:"render",value:function(){var e=this.props,o=e.weekNumber,s=e.ariaLabelPrefix,a=s===void 0?"week ":s,i=e.onClick,c={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!i,"react-datepicker__week-number--selected":!!i&&$(this.props.date,this.props.selected),"react-datepicker__week-number--keyboard-selected":this.isKeyboardSelected()};return y.createElement("div",{ref:this.weekNumberEl,className:re(c),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick,onKeyDown:this.handleOnKeyDown,tabIndex:this.getTabIndex()},o)}}],[{key:"defaultProps",get:function(){return{ariaLabelPrefix:"week "}}}])}(y.Component),Iu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i)}),d(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),d(t,"handleWeekClick",function(a,i,c){typeof t.props.onWeekSelect=="function"&&t.props.onWeekSelect(a,i,c),t.props.showWeekPicker&&t.handleDayClick(a,c),t.props.shouldCloseOnSelect&&t.props.setOpen(!1)}),d(t,"formatWeekNumber",function(a){return t.props.formatWeekNumber?t.props.formatWeekNumber(a):iu(a)}),d(t,"renderDays",function(){var a=t.startOfWeek(),i=[],c=t.formatWeekNumber(a);if(t.props.showWeekNumber){var l=t.props.onWeekSelect||t.props.showWeekPicker?t.handleWeekClick.bind(t,a,c):void 0;i.push(y.createElement(Yu,{key:"W",weekNumber:c,date:a,onClick:l,selected:t.props.selected,preSelection:t.props.preSelection,ariaLabelPrefix:t.props.ariaLabelPrefix,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef}))}return i.concat([0,1,2,3,4,5,6].map(function(u){var p=Ge(a,u);return y.createElement(Ru,{ariaLabelPrefixWhenEnabled:t.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:t.props.disabledDayAriaLabelPrefix,key:p.valueOf(),day:p,month:t.props.month,onClick:t.handleDayClick.bind(t,p),usePointerEvent:t.props.usePointerEvent,onMouseEnter:t.handleDayMouseEnter.bind(t,p),minDate:t.props.minDate,maxDate:t.props.maxDate,calendarStartDay:t.props.calendarStartDay,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,renderDayContents:t.props.renderDayContents,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart,locale:t.props.locale})}))}),d(t,"startOfWeek",function(){return Qe(t.props.day,t.props.locale,t.props.calendarStartDay)}),d(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!$(t.startOfWeek(),t.props.selected)&&$(t.startOfWeek(),t.props.preSelection)}),t}return ne(r,n),te(r,[{key:"render",value:function(){var e={"react-datepicker__week":!0,"react-datepicker__week--selected":$(this.startOfWeek(),this.props.selected),"react-datepicker__week--keyboard-selected":this.isKeyboardSelected()};return y.createElement("div",{className:re(e)},this.renderDays())}}],[{key:"defaultProps",get:function(){return{shouldCloseOnSelect:!0}}}])}(y.Component),$u=6,gt={TWO_COLUMNS:"two_columns",THREE_COLUMNS:"three_columns",FOUR_COLUMNS:"four_columns"},Hn=d(d(d({},gt.TWO_COLUMNS,{grid:[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],verticalNavigationOffset:2}),gt.THREE_COLUMNS,{grid:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]],verticalNavigationOffset:3}),gt.FOUR_COLUMNS,{grid:[[0,1,2,3],[4,5,6,7],[8,9,10,11]],verticalNavigationOffset:4}),Zt=1;function wo(n,r){return n?gt.FOUR_COLUMNS:r?gt.TWO_COLUMNS:gt.THREE_COLUMNS}var Lu=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"MONTH_REFS",Xe(Array(12)).map(function(){return y.createRef()})),d(t,"QUARTER_REFS",Xe(Array(4)).map(function(){return y.createRef()})),d(t,"isDisabled",function(a){return Cn(a,t.props)}),d(t,"isExcluded",function(a){return kr(a,t.props)}),d(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i,t.props.orderInDisplay)}),d(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),d(t,"handleMouseLeave",function(){t.props.onMouseLeave&&t.props.onMouseLeave()}),d(t,"isRangeStartMonth",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate;return!l||!u?!1:le(ae(c,a),l)}),d(t,"isRangeStartQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate;return!l||!u?!1:mn(ft(c,a),l)}),d(t,"isRangeEndMonth",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate;return!l||!u?!1:le(ae(c,a),u)}),d(t,"isRangeEndQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate;return!l||!u?!1:mn(ft(c,a),u)}),d(t,"isInSelectingRangeMonth",function(a){var i,c=t.props,l=c.day,u=c.selectsStart,p=c.selectsEnd,h=c.selectsRange,m=c.startDate,g=c.endDate,w=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(u||p||h)||!w?!1:u&&g?Ut(w,g,a,l):p&&m||h&&m&&!g?Ut(m,w,a,l):!1}),d(t,"isSelectingMonthRangeStart",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,u=c.startDate,p=c.selectsStart,h=ae(l,a),m=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return p?le(h,m):le(h,u)}),d(t,"isSelectingMonthRangeEnd",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,u=c.endDate,p=c.selectsEnd,h=c.selectsRange,m=ae(l,a),g=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return p||h?le(m,g):le(m,u)}),d(t,"isInSelectingRangeQuarter",function(a){var i,c=t.props,l=c.day,u=c.selectsStart,p=c.selectsEnd,h=c.selectsRange,m=c.startDate,g=c.endDate,w=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(u||p||h)||!w?!1:u&&g?Gt(w,g,a,l):p&&m||h&&m&&!g?Gt(m,w,a,l):!1}),d(t,"isWeekInMonth",function(a){var i=t.props.day,c=Ge(a,6);return le(a,i)||le(c,i)}),d(t,"isCurrentMonth",function(a,i){return R(a)===R(Q())&&i===se(Q())}),d(t,"isCurrentQuarter",function(a,i){return R(a)===R(Q())&&i===Tt(Q())}),d(t,"isSelectedMonth",function(a,i,c){return se(c)===i&&R(a)===R(c)}),d(t,"isSelectedQuarter",function(a,i,c){return Tt(a)===i&&R(a)===R(c)}),d(t,"renderWeeks",function(){for(var a=[],i=t.props.fixedHeight,c=0,l=!1,u=Qe(ze(t.props.day),t.props.locale,t.props.calendarStartDay),p=t.props.showWeekPicker?Qe(t.props.selected,t.props.locale,t.props.calendarStartDay):t.props.selected,h=t.props.showWeekPicker?Qe(t.props.preSelection,t.props.locale,t.props.calendarStartDay):t.props.preSelection;a.push(y.createElement(Iu,{ariaLabelPrefix:t.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:t.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:t.props.disabledDayAriaLabelPrefix,key:c,day:u,month:se(t.props.day),onDayClick:t.handleDayClick,usePointerEvent:t.props.usePointerEvent,onDayMouseEnter:t.handleDayMouseEnter,onWeekSelect:t.props.onWeekSelect,formatWeekNumber:t.props.formatWeekNumber,locale:t.props.locale,minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:h,selected:p,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,showWeekNumber:t.props.showWeekNumbers,showWeekPicker:t.props.showWeekPicker,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,setOpen:t.props.setOpen,shouldCloseOnSelect:t.props.shouldCloseOnSelect,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,renderDayContents:t.props.renderDayContents,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,calendarStartDay:t.props.calendarStartDay,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart})),!l;){c++,u=un(u,1);var m=i&&c>=$u,g=!i&&!t.isWeekInMonth(u);if(m||g)if(t.props.peekNextMonth)l=!0;else break}return a}),d(t,"onMonthClick",function(a,i){var c=ae(t.props.day,i);nn(c,t.props)||t.handleDayClick(ze(c),a)}),d(t,"onMonthMouseEnter",function(a){var i=ae(t.props.day,a);nn(i,t.props)||t.handleDayMouseEnter(ze(i))}),d(t,"handleMonthNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.MONTH_REFS[a].current&&t.MONTH_REFS[a].current.focus())}),d(t,"onMonthKeyDown",function(a,i){var c=t.props,l=c.selected,u=c.preSelection,p=c.disabledKeyboardNavigation,h=c.showTwoColumnMonthYearPicker,m=c.showFourColumnMonthYearPicker,g=c.setPreSelection,w=c.handleOnMonthKeyDown,v=a.key;if(v!=="Tab"&&a.preventDefault(),!p){var x=wo(m,h),b=Hn[x].verticalNavigationOffset,k=Hn[x].grid;switch(v){case"Enter":t.onMonthClick(a,i),g(l);break;case"ArrowRight":t.handleMonthNavigation(i===11?0:i+Zt,ye(u,Zt));break;case"ArrowLeft":t.handleMonthNavigation(i===0?11:i-Zt,xt(u,Zt));break;case"ArrowUp":t.handleMonthNavigation(k[0].includes(i)?i+12-b:i-b,xt(u,b));break;case"ArrowDown":t.handleMonthNavigation(k[k.length-1].includes(i)?i-12+b:i+b,ye(u,b));break}}w&&w(a)}),d(t,"onQuarterClick",function(a,i){var c=ft(t.props.day,i);An(c,t.props)||t.handleDayClick(no(c),a)}),d(t,"onQuarterMouseEnter",function(a){var i=ft(t.props.day,a);An(i,t.props)||t.handleDayMouseEnter(no(i))}),d(t,"handleQuarterNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.QUARTER_REFS[a-1].current&&t.QUARTER_REFS[a-1].current.focus())}),d(t,"onQuarterKeyDown",function(a,i){var c=a.key;if(!t.props.disabledKeyboardNavigation)switch(c){case"Enter":t.onQuarterClick(a,i),t.props.setPreSelection(t.props.selected);break;case"ArrowRight":t.handleQuarterNavigation(i===4?1:i+1,Xo(t.props.preSelection,1));break;case"ArrowLeft":t.handleQuarterNavigation(i===1?4:i-1,nc(t.props.preSelection,1));break}}),d(t,"getMonthClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate,p=i.selected,h=i.minDate,m=i.maxDate,g=i.preSelection,w=i.monthClassName,v=i.excludeDates,x=i.includeDates,b=w?w(ae(c,a)):void 0,k=ae(c,a);return re("react-datepicker__month-text","react-datepicker__month-".concat(a),b,{"react-datepicker__month-text--disabled":(h||m||v||x)&&nn(k,t.props),"react-datepicker__month-text--selected":t.isSelectedMonth(c,a,p),"react-datepicker__month-text--keyboard-selected":!t.props.disabledKeyboardNavigation&&t.isSelectedMonth(c,a,g),"react-datepicker__month-text--in-selecting-range":t.isInSelectingRangeMonth(a),"react-datepicker__month-text--in-range":Ut(l,u,a,c),"react-datepicker__month-text--range-start":t.isRangeStartMonth(a),"react-datepicker__month-text--range-end":t.isRangeEndMonth(a),"react-datepicker__month-text--selecting-range-start":t.isSelectingMonthRangeStart(a),"react-datepicker__month-text--selecting-range-end":t.isSelectingMonthRangeEnd(a),"react-datepicker__month-text--today":t.isCurrentMonth(c,a)})}),d(t,"getTabIndex",function(a){var i=se(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),d(t,"getQuarterTabIndex",function(a){var i=Tt(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),d(t,"getAriaLabel",function(a){var i=t.props,c=i.chooseDayAriaLabelPrefix,l=c===void 0?"Choose":c,u=i.disabledDayAriaLabelPrefix,p=u===void 0?"Not available":u,h=i.day,m=ae(h,a),g=t.isDisabled(m)||t.isExcluded(m)?p:l;return"".concat(g," ").concat(K(m,"MMMM yyyy"))}),d(t,"getQuarterClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,u=i.endDate,p=i.selected,h=i.minDate,m=i.maxDate,g=i.preSelection,w=i.disabledKeyboardNavigation;return re("react-datepicker__quarter-text","react-datepicker__quarter-".concat(a),{"react-datepicker__quarter-text--disabled":(h||m)&&An(ft(c,a),t.props),"react-datepicker__quarter-text--selected":t.isSelectedQuarter(c,a,p),"react-datepicker__quarter-text--keyboard-selected":!w&&t.isSelectedQuarter(c,a,g),"react-datepicker__quarter-text--in-selecting-range":t.isInSelectingRangeQuarter(a),"react-datepicker__quarter-text--in-range":Gt(l,u,a,c),"react-datepicker__quarter-text--range-start":t.isRangeStartQuarter(a),"react-datepicker__quarter-text--range-end":t.isRangeEndQuarter(a)})}),d(t,"getMonthContent",function(a){var i=t.props,c=i.showFullMonthYearPicker,l=i.renderMonthContent,u=i.locale,p=i.day,h=ia(a,u),m=Dr(a,u);return l?l(a,h,m,p):c?m:h}),d(t,"getQuarterContent",function(a){var i=t.props,c=i.renderQuarterContent,l=i.locale,u=hu(a,l);return c?c(a,u):u}),d(t,"renderMonths",function(){var a=t.props,i=a.showTwoColumnMonthYearPicker,c=a.showFourColumnMonthYearPicker,l=a.day,u=a.selected,p=Hn[wo(c,i)].grid;return p.map(function(h,m){return y.createElement("div",{className:"react-datepicker__month-wrapper",key:m},h.map(function(g,w){return y.createElement("div",{ref:t.MONTH_REFS[g],key:w,onClick:function(x){t.onMonthClick(x,g)},onKeyDown:function(x){da(x)&&(x.preventDefault(),x.key="Enter"),t.onMonthKeyDown(x,g)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onMonthMouseEnter(g)},onPointerEnter:t.props.usePointerEvent?function(){return t.onMonthMouseEnter(g)}:void 0,tabIndex:t.getTabIndex(g),className:t.getMonthClassNames(g),role:"option","aria-label":t.getAriaLabel(g),"aria-current":t.isCurrentMonth(l,g)?"date":void 0,"aria-selected":t.isSelectedMonth(l,g,u)},t.getMonthContent(g))}))})}),d(t,"renderQuarters",function(){var a=t.props,i=a.day,c=a.selected,l=[1,2,3,4];return y.createElement("div",{className:"react-datepicker__quarter-wrapper"},l.map(function(u,p){return y.createElement("div",{key:p,ref:t.QUARTER_REFS[p],role:"option",onClick:function(m){t.onQuarterClick(m,u)},onKeyDown:function(m){t.onQuarterKeyDown(m,u)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onQuarterMouseEnter(u)},onPointerEnter:t.props.usePointerEvent?function(){return t.onQuarterMouseEnter(u)}:void 0,className:t.getQuarterClassNames(u),"aria-selected":t.isSelectedQuarter(i,u,c),tabIndex:t.getQuarterTabIndex(u),"aria-current":t.isCurrentQuarter(i,u)?"date":void 0},t.getQuarterContent(u))}))}),d(t,"getClassNames",function(){var a=t.props,i=a.selectingDate,c=a.selectsStart,l=a.selectsEnd,u=a.showMonthYearPicker,p=a.showQuarterYearPicker,h=a.showWeekPicker;return re("react-datepicker__month",{"react-datepicker__month--selecting-range":i&&(c||l)},{"react-datepicker__monthPicker":u},{"react-datepicker__quarterPicker":p},{"react-datepicker__weekPicker":h})}),t}return ne(r,n),te(r,[{key:"render",value:function(){var e=this.props,o=e.showMonthYearPicker,s=e.showQuarterYearPicker,a=e.day,i=e.ariaLabelPrefix,c=i===void 0?"Month ":i,l=c?c.trim()+" ":"";return y.createElement("div",{className:this.getClassNames(),onMouseLeave:this.props.usePointerEvent?void 0:this.handleMouseLeave,onPointerLeave:this.props.usePointerEvent?this.handleMouseLeave:void 0,"aria-label":"".concat(l).concat(K(a,"MMMM, yyyy")),role:"listbox"},o?this.renderMonths():s?this.renderQuarters():this.renderWeeks())}}])}(y.Component),pa=function(n){function r(){var t;ee(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=J(this,r,[].concat(o)),d(t,"state",{height:null}),d(t,"scrollToTheSelectedTime",function(){requestAnimationFrame(function(){t.list&&(t.list.scrollTop=t.centerLi&&r.calcCenterPosition(t.props.monthRef?t.props.monthRef.clientHeight-t.header.clientHeight:t.list.clientHeight,t.centerLi))})}),d(t,"handleClick",function(a){(t.props.minTime||t.props.maxTime)&&so(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&ao(a,t.props)||t.props.onChange(a)}),d(t,"isSelectedTime",function(a){return t.props.selected&&xu(t.props.selected,a)}),d(t,"isDisabledTime",function(a){return(t.props.minTime||t.props.maxTime)&&so(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&ao(a,t.props)}),d(t,"liClasses",function(a){var i=["react-datepicker__time-list-item",t.props.timeClassName?t.props.timeClassName(a):void 0];return t.isSelectedTime(a)&&i.push("react-datepicker__time-list-item--selected"),t.isDisabledTime(a)&&i.push("react-datepicker__time-list-item--disabled"),t.props.injectTimes&&(Se(a)*60+_e(a))%t.props.intervals!==0&&i.push("react-datepicker__time-list-item--injected"),i.join(" ")}),d(t,"handleOnKeyDown",function(a,i){a.key===" "&&(a.preventDefault(),a.key="Enter"),(a.key==="ArrowUp"||a.key==="ArrowLeft")&&a.target.previousSibling&&(a.preventDefault(),a.target.previousSibling.focus()),(a.key==="ArrowDown"||a.key==="ArrowRight")&&a.target.nextSibling&&(a.preventDefault(),a.target.nextSibling.focus()),a.key==="Enter"&&t.handleClick(i),t.props.handleOnKeyDown(a)}),d(t,"renderTimes",function(){for(var a=[],i=t.props.format?t.props.format:"p",c=t.props.intervals,l=t.props.selected||t.props.openToDate||Q(),u=lu(l),p=t.props.injectTimes&&t.props.injectTimes.sort(function(b,k){return b-k}),h=60*bu(l),m=h/c,g=0;g<m;g++){var w=qn(u,g*c);if(a.push(w),p){var v=vu(u,w,g,c,p);a=a.concat(v)}}var x=a.reduce(function(b,k){return k.getTime()<=l.getTime()?k:b},a[0]);return a.map(function(b,k){return y.createElement("li",{key:k,onClick:t.handleClick.bind(t,b),className:t.liClasses(b),ref:function(M){b===x&&(t.centerLi=M)},onKeyDown:function(M){t.handleOnKeyDown(M,b)},tabIndex:b===x?0:-1,role:"option","aria-selected":t.isSelectedTime(b)?"true":void 0,"aria-disabled":t.isDisabledTime(b)?"true":void 0},K(b,i,t.props.locale))})}),t}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){this.scrollToTheSelectedTime(),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight})}},{key:"render",value:function(){var e=this,o=this.state.height;return y.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},y.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(a){e.header=a}},y.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),y.createElement("div",{className:"react-datepicker__time"},y.createElement("div",{className:"react-datepicker__time-box"},y.createElement("ul",{className:"react-datepicker__time-list",ref:function(a){e.list=a},style:o?{height:o}:{},role:"listbox","aria-label":this.props.timeCaption},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return{intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}])}(y.Component);d(pa,"calcCenterPosition",function(n,r){return r.offsetTop-(n/2-r.clientHeight/2)});var ju=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"YEAR_REFS",Xe(Array(e.props.yearItemNumber)).map(function(){return y.createRef()})),d(e,"isDisabled",function(o){return Cn(o,e.props)}),d(e,"isExcluded",function(o){return kr(o,e.props)}),d(e,"selectingDate",function(){var o;return(o=e.props.selectingDate)!==null&&o!==void 0?o:e.props.preSelection}),d(e,"updateFocusOnPaginate",function(o){var s=(function(){this.YEAR_REFS[o].current.focus()}).bind(e);window.requestAnimationFrame(s)}),d(e,"handleYearClick",function(o,s){e.props.onDayClick&&e.props.onDayClick(o,s)}),d(e,"handleYearNavigation",function(o,s){var a=e.props,i=a.date,c=a.yearItemNumber,l=Dt(i,c),u=l.startPeriod;e.isDisabled(s)||e.isExcluded(s)||(e.props.setPreSelection(s),o-u===-1?e.updateFocusOnPaginate(c-1):o-u===c?e.updateFocusOnPaginate(0):e.YEAR_REFS[o-u].current.focus())}),d(e,"isSameDay",function(o,s){return $(o,s)}),d(e,"isCurrentYear",function(o){return o===R(Q())}),d(e,"isRangeStart",function(o){return e.props.startDate&&e.props.endDate&&De(xe(Q(),o),e.props.startDate)}),d(e,"isRangeEnd",function(o){return e.props.startDate&&e.props.endDate&&De(xe(Q(),o),e.props.endDate)}),d(e,"isInRange",function(o){return Xt(o,e.props.startDate,e.props.endDate)}),d(e,"isInSelectingRange",function(o){var s=e.props,a=s.selectsStart,i=s.selectsEnd,c=s.selectsRange,l=s.startDate,u=s.endDate;return!(a||i||c)||!e.selectingDate()?!1:a&&u?Xt(o,e.selectingDate(),u):i&&l||c&&l&&!u?Xt(o,l,e.selectingDate()):!1}),d(e,"isSelectingRangeStart",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.startDate,i=s.selectsStart,c=xe(Q(),o);return i?De(c,e.selectingDate()):De(c,a)}),d(e,"isSelectingRangeEnd",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.endDate,i=s.selectsEnd,c=s.selectsRange,l=xe(Q(),o);return i||c?De(l,e.selectingDate()):De(l,a)}),d(e,"isKeyboardSelected",function(o){var s=Et(xe(e.props.date,o));return!e.props.disabledKeyboardNavigation&&!e.props.inline&&!$(s,Et(e.props.selected))&&$(s,Et(e.props.preSelection))}),d(e,"onYearClick",function(o,s){var a=e.props.date;e.handleYearClick(Et(xe(a,s)),o)}),d(e,"onYearKeyDown",function(o,s){var a=o.key,i=e.props.handleOnKeyDown;if(!e.props.disabledKeyboardNavigation)switch(a){case"Enter":e.onYearClick(o,s),e.props.setPreSelection(e.props.selected);break;case"ArrowRight":e.handleYearNavigation(s+1,Be(e.props.preSelection,1));break;case"ArrowLeft":e.handleYearNavigation(s-1,Wt(e.props.preSelection,1));break}i&&i(o)}),d(e,"getYearClassNames",function(o){var s=e.props,a=s.date,i=s.minDate,c=s.maxDate,l=s.selected,u=s.excludeDates,p=s.includeDates,h=s.filterDate,m=s.yearClassName;return re("react-datepicker__year-text","react-datepicker__year-".concat(o),m?m(xe(a,o)):void 0,{"react-datepicker__year-text--selected":o===R(l),"react-datepicker__year-text--disabled":(i||c||u||p||h)&&ca(o,e.props),"react-datepicker__year-text--keyboard-selected":e.isKeyboardSelected(o),"react-datepicker__year-text--range-start":e.isRangeStart(o),"react-datepicker__year-text--range-end":e.isRangeEnd(o),"react-datepicker__year-text--in-range":e.isInRange(o),"react-datepicker__year-text--in-selecting-range":e.isInSelectingRange(o),"react-datepicker__year-text--selecting-range-start":e.isSelectingRangeStart(o),"react-datepicker__year-text--selecting-range-end":e.isSelectingRangeEnd(o),"react-datepicker__year-text--today":e.isCurrentYear(o)})}),d(e,"getYearTabIndex",function(o){if(e.props.disabledKeyboardNavigation)return"-1";var s=R(e.props.preSelection);return o===s?"0":"-1"}),d(e,"getYearContainerClassNames",function(){var o=e.props,s=o.selectingDate,a=o.selectsStart,i=o.selectsEnd,c=o.selectsRange;return re("react-datepicker__year",{"react-datepicker__year--selecting-range":s&&(a||i||c)})}),d(e,"getYearContent",function(o){return e.props.renderYearContent?e.props.renderYearContent(o):o}),e}return ne(r,n),te(r,[{key:"render",value:function(){for(var e=this,o=[],s=this.props,a=s.date,i=s.yearItemNumber,c=s.onYearMouseEnter,l=s.onYearMouseLeave,u=Dt(a,i),p=u.startPeriod,h=u.endPeriod,m=function(v){o.push(y.createElement("div",{ref:e.YEAR_REFS[v-p],onClick:function(b){e.onYearClick(b,v)},onKeyDown:function(b){da(b)&&(b.preventDefault(),b.key="Enter"),e.onYearKeyDown(b,v)},tabIndex:e.getYearTabIndex(v),className:e.getYearClassNames(v),onMouseEnter:e.props.usePointerEvent?void 0:function(x){return c(x,v)},onPointerEnter:e.props.usePointerEvent?function(x){return c(x,v)}:void 0,onMouseLeave:e.props.usePointerEvent?void 0:function(x){return l(x,v)},onPointerLeave:e.props.usePointerEvent?function(x){return l(x,v)}:void 0,key:v,"aria-current":e.isCurrentYear(v)?"date":void 0},e.getYearContent(v)))},g=p;g<=h;g++)m(g);return y.createElement("div",{className:this.getYearContainerClassNames()},y.createElement("div",{className:"react-datepicker__year-wrapper",onMouseLeave:this.props.usePointerEvent?void 0:this.props.clearSelectingDate,onPointerLeave:this.props.usePointerEvent?this.props.clearSelectingDate:void 0},o))}}])}(y.Component),Fu=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"onTimeChange",function(o){e.setState({time:o});var s=e.props.date,a=s instanceof Date&&!isNaN(s),i=a?s:new Date;i.setHours(o.split(":")[0]),i.setMinutes(o.split(":")[1]),e.props.onChange(i)}),d(e,"renderTimeInput",function(){var o=e.state.time,s=e.props,a=s.date,i=s.timeString,c=s.customTimeInput;return c?y.cloneElement(c,{date:a,value:o,onChange:e.onTimeChange}):y.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:o,onChange:function(u){e.onTimeChange(u.target.value||i)}})}),e.state={time:e.props.timeString},e}return ne(r,n),te(r,[{key:"render",value:function(){return y.createElement("div",{className:"react-datepicker__input-time-container"},y.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),y.createElement("div",{className:"react-datepicker-time__input-container"},y.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,o){return e.timeString!==o.time?{time:e.timeString}:null}}])}(y.Component);function Wu(n){var r=n.showTimeSelectOnly,t=r===void 0?!1:r,e=n.showTime,o=e===void 0?!1:e,s=n.className,a=n.children,i=t?"Choose Time":"Choose Date".concat(o?" and Time":"");return y.createElement("div",{className:s,role:"dialog","aria-label":i,"aria-modal":"true"},a)}var Au=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],Hu=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(r.className||"").split(/\s+/);return Au.some(function(e){return t.indexOf(e)>=0})},Bu=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"handleClickOutside",function(o){e.props.onClickOutside(o)}),d(e,"setClickOutsideRef",function(){return e.containerRef.current}),d(e,"handleDropdownFocus",function(o){Hu(o.target)&&e.props.onDropdownFocus()}),d(e,"getDateInView",function(){var o=e.props,s=o.preSelection,a=o.selected,i=o.openToDate,c=la(e.props),l=ua(e.props),u=Q(),p=i||a||s;return p||(c&&it(u,c)?c:l&&Ue(u,l)?l:u)}),d(e,"increaseMonth",function(){e.setState(function(o){var s=o.date;return{date:ye(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),d(e,"decreaseMonth",function(){e.setState(function(o){var s=o.date;return{date:xt(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),d(e,"handleDayClick",function(o,s,a){e.props.onSelect(o,s,a),e.props.setPreSelection&&e.props.setPreSelection(o)}),d(e,"handleDayMouseEnter",function(o){e.setState({selectingDate:o}),e.props.onDayMouseEnter&&e.props.onDayMouseEnter(o)}),d(e,"handleMonthMouseLeave",function(){e.setState({selectingDate:null}),e.props.onMonthMouseLeave&&e.props.onMonthMouseLeave()}),d(e,"handleYearMouseEnter",function(o,s){e.setState({selectingDate:xe(Q(),s)}),e.props.onYearMouseEnter&&e.props.onYearMouseEnter(o,s)}),d(e,"handleYearMouseLeave",function(o,s){e.props.onYearMouseLeave&&e.props.onYearMouseLeave(o,s)}),d(e,"handleYearChange",function(o){e.props.onYearChange&&(e.props.onYearChange(o),e.setState({isRenderAriaLiveMessage:!0})),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),d(e,"handleMonthChange",function(o){e.handleCustomMonthChange(o),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),d(e,"handleCustomMonthChange",function(o){e.props.onMonthChange&&(e.props.onMonthChange(o),e.setState({isRenderAriaLiveMessage:!0}))}),d(e,"handleMonthYearChange",function(o){e.handleYearChange(o),e.handleMonthChange(o)}),d(e,"changeYear",function(o){e.setState(function(s){var a=s.date;return{date:xe(a,o)}},function(){return e.handleYearChange(e.state.date)})}),d(e,"changeMonth",function(o){e.setState(function(s){var a=s.date;return{date:ae(a,o)}},function(){return e.handleMonthChange(e.state.date)})}),d(e,"changeMonthYear",function(o){e.setState(function(s){var a=s.date;return{date:xe(ae(a,se(o)),R(o))}},function(){return e.handleMonthYearChange(e.state.date)})}),d(e,"header",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=Qe(o,e.props.locale,e.props.calendarStartDay),a=[];return e.props.showWeekNumbers&&a.push(y.createElement("div",{key:"W",className:"react-datepicker__day-name"},e.props.weekLabel||"#")),a.concat([0,1,2,3,4,5,6].map(function(i){var c=Ge(s,i),l=e.formatWeekday(c,e.props.locale),u=e.props.weekDayClassName?e.props.weekDayClassName(c):void 0;return y.createElement("div",{key:i,className:re("react-datepicker__day-name",u)},l)}))}),d(e,"formatWeekday",function(o,s){return e.props.formatWeekDay?du(o,e.props.formatWeekDay,s):e.props.useWeekdaysShort?fu(o,s):pu(o,s)}),d(e,"decreaseYear",function(){e.setState(function(o){var s=o.date;return{date:Wt(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),d(e,"clearSelectingDate",function(){e.setState({selectingDate:null})}),d(e,"renderPreviousButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=lo(e.state.date,e.props);break;case e.props.showYearPicker:o=mu(e.state.date,e.props);break;default:o=io(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"],a=["react-datepicker__navigation","react-datepicker__navigation--previous"],i=e.decreaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.decreaseYear),o&&e.props.showDisabledMonthNavigation&&(a.push("react-datepicker__navigation--previous--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,u=l.previousMonthButtonLabel,p=l.previousYearButtonLabel,h=e.props,m=h.previousMonthAriaLabel,g=m===void 0?typeof u=="string"?u:"Previous Month":m,w=h.previousYearAriaLabel,v=w===void 0?typeof p=="string"?p:"Previous Year":w;return y.createElement("button",{type:"button",className:a.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?v:g},y.createElement("span",{className:s.join(" ")},c?e.props.previousYearButtonLabel:e.props.previousMonthButtonLabel))}}}),d(e,"increaseYear",function(){e.setState(function(o){var s=o.date;return{date:Be(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),d(e,"renderNextButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=uo(e.state.date,e.props);break;case e.props.showYearPicker:o=gu(e.state.date,e.props);break;default:o=co(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation","react-datepicker__navigation--next"],a=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"];e.props.showTimeSelect&&s.push("react-datepicker__navigation--next--with-time"),e.props.todayButton&&s.push("react-datepicker__navigation--next--with-today-button");var i=e.increaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.increaseYear),o&&e.props.showDisabledMonthNavigation&&(s.push("react-datepicker__navigation--next--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,u=l.nextMonthButtonLabel,p=l.nextYearButtonLabel,h=e.props,m=h.nextMonthAriaLabel,g=m===void 0?typeof u=="string"?u:"Next Month":m,w=h.nextYearAriaLabel,v=w===void 0?typeof p=="string"?p:"Next Year":w;return y.createElement("button",{type:"button",className:s.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?v:g},y.createElement("span",{className:a.join(" ")},c?e.props.nextYearButtonLabel:e.props.nextMonthButtonLabel))}}}),d(e,"renderCurrentMonth",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=["react-datepicker__current-month"];return e.props.showYearDropdown&&s.push("react-datepicker__current-month--hasYearDropdown"),e.props.showMonthDropdown&&s.push("react-datepicker__current-month--hasMonthDropdown"),e.props.showMonthYearDropdown&&s.push("react-datepicker__current-month--hasMonthYearDropdown"),y.createElement("div",{className:s.join(" ")},K(o,e.props.dateFormat,e.props.locale))}),d(e,"renderYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showYearDropdown||o))return y.createElement(Mu,{adjustDateOnChange:e.props.adjustDateOnChange,date:e.state.date,onSelect:e.props.onSelect,setOpen:e.props.setOpen,dropdownMode:e.props.dropdownMode,onChange:e.changeYear,minDate:e.props.minDate,maxDate:e.props.maxDate,year:R(e.state.date),scrollableYearDropdown:e.props.scrollableYearDropdown,yearDropdownItemNumber:e.props.yearDropdownItemNumber})}),d(e,"renderMonthDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthDropdown||o))return y.createElement(Pu,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,onChange:e.changeMonth,month:se(e.state.date),useShortMonthInDropdown:e.props.useShortMonthInDropdown})}),d(e,"renderMonthYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthYearDropdown||o))return y.createElement(Tu,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,dateFormat:e.props.dateFormat,onChange:e.changeMonthYear,minDate:e.props.minDate,maxDate:e.props.maxDate,date:e.state.date,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown})}),d(e,"handleTodayButtonClick",function(o){e.props.onSelect(ro(),o),e.props.setPreSelection&&e.props.setPreSelection(ro())}),d(e,"renderTodayButton",function(){if(!(!e.props.todayButton||e.props.showTimeSelectOnly))return y.createElement("div",{className:"react-datepicker__today-button",onClick:function(s){return e.handleTodayButtonClick(s)}},e.props.todayButton)}),d(e,"renderDefaultHeader",function(o){var s=o.monthDate,a=o.i;return y.createElement("div",{className:"react-datepicker__header ".concat(e.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},e.renderCurrentMonth(s),y.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode),onFocus:e.handleDropdownFocus},e.renderMonthDropdown(a!==0),e.renderMonthYearDropdown(a!==0),e.renderYearDropdown(a!==0)),y.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),d(e,"renderCustomHeader",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=o.monthDate,a=o.i;if(e.props.showTimeSelect&&!e.state.monthContainer||e.props.showTimeSelectOnly)return null;var i=io(e.state.date,e.props),c=co(e.state.date,e.props),l=lo(e.state.date,e.props),u=uo(e.state.date,e.props),p=!e.props.showMonthYearPicker&&!e.props.showQuarterYearPicker&&!e.props.showYearPicker;return y.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:e.props.onDropdownFocus},e.props.renderCustomHeader(Re(Re({},e.state),{},{customHeaderCount:a,monthDate:s,changeMonth:e.changeMonth,changeYear:e.changeYear,decreaseMonth:e.decreaseMonth,increaseMonth:e.increaseMonth,decreaseYear:e.decreaseYear,increaseYear:e.increaseYear,prevMonthButtonDisabled:i,nextMonthButtonDisabled:c,prevYearButtonDisabled:l,nextYearButtonDisabled:u})),p&&y.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),d(e,"renderYearHeader",function(o){var s=o.monthDate,a=e.props,i=a.showYearPicker,c=a.yearItemNumber,l=Dt(s,c),u=l.startPeriod,p=l.endPeriod;return y.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},i?"".concat(u," - ").concat(p):R(s))}),d(e,"renderHeader",function(o){switch(!0){case e.props.renderCustomHeader!==void 0:return e.renderCustomHeader(o);case(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker):return e.renderYearHeader(o);default:return e.renderDefaultHeader(o)}}),d(e,"renderMonths",function(){var o;if(!(e.props.showTimeSelectOnly||e.props.showYearPicker)){for(var s=[],a=e.props.showPreviousMonths?e.props.monthsShown-1:0,i=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Be(e.state.date,a):xt(e.state.date,a),c=(o=e.props.monthSelectedIn)!==null&&o!==void 0?o:a,l=0;l<e.props.monthsShown;++l){var u=l-c+a,p=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Be(i,u):ye(i,u),h="month-".concat(l),m=l<e.props.monthsShown-1,g=l>0;s.push(y.createElement("div",{key:h,ref:function(v){e.monthContainer=v},className:"react-datepicker__month-container"},e.renderHeader({monthDate:p,i:l}),y.createElement(Lu,{chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,ariaLabelPrefix:e.props.monthAriaLabelPrefix,onChange:e.changeMonthYear,day:p,dayClassName:e.props.dayClassName,calendarStartDay:e.props.calendarStartDay,monthClassName:e.props.monthClassName,onDayClick:e.handleDayClick,handleOnKeyDown:e.props.handleOnDayKeyDown,handleOnMonthKeyDown:e.props.handleOnKeyDown,usePointerEvent:e.props.usePointerEvent,onDayMouseEnter:e.handleDayMouseEnter,onMouseLeave:e.handleMonthMouseLeave,onWeekSelect:e.props.onWeekSelect,orderInDisplay:l,formatWeekNumber:e.props.formatWeekNumber,locale:e.props.locale,minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,highlightDates:e.props.highlightDates,holidays:e.props.holidays,selectingDate:e.state.selectingDate,includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,fixedHeight:e.props.fixedHeight,filterDate:e.props.filterDate,preSelection:e.props.preSelection,setPreSelection:e.props.setPreSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,showWeekNumbers:e.props.showWeekNumbers,startDate:e.props.startDate,endDate:e.props.endDate,peekNextMonth:e.props.peekNextMonth,setOpen:e.props.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,isInputFocused:e.props.isInputFocused,containerRef:e.containerRef,monthShowsDuplicateDaysEnd:m,monthShowsDuplicateDaysStart:g})))}return s}}),d(e,"renderYears",function(){if(!e.props.showTimeSelectOnly&&e.props.showYearPicker)return y.createElement("div",{className:"react-datepicker__year--container"},e.renderHeader({monthDate:e.state.date}),y.createElement(ju,Lt({onDayClick:e.handleDayClick,selectingDate:e.state.selectingDate,clearSelectingDate:e.clearSelectingDate,date:e.state.date},e.props,{onYearMouseEnter:e.handleYearMouseEnter,onYearMouseLeave:e.handleYearMouseLeave})))}),d(e,"renderTimeSection",function(){if(e.props.showTimeSelect&&(e.state.monthContainer||e.props.showTimeSelectOnly))return y.createElement(pa,{selected:e.props.selected,openToDate:e.props.openToDate,onChange:e.props.onTimeChange,timeClassName:e.props.timeClassName,format:e.props.timeFormat,includeTimes:e.props.includeTimes,intervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,todayButton:e.props.todayButton,showMonthDropdown:e.props.showMonthDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,monthRef:e.state.monthContainer,injectTimes:e.props.injectTimes,locale:e.props.locale,handleOnKeyDown:e.props.handleOnKeyDown,showTimeSelectOnly:e.props.showTimeSelectOnly})}),d(e,"renderInputTimeSection",function(){var o=new Date(e.props.selected),s=He(o)&&!!e.props.selected,a=s?"".concat(fo(o.getHours()),":").concat(fo(o.getMinutes())):"";if(e.props.showTimeInput)return y.createElement(Fu,{date:o,timeString:a,timeInputLabel:e.props.timeInputLabel,onChange:e.props.onTimeChange,customTimeInput:e.props.customTimeInput})}),d(e,"renderAriaLiveRegion",function(){var o=Dt(e.state.date,e.props.yearItemNumber),s=o.startPeriod,a=o.endPeriod,i;return e.props.showYearPicker?i="".concat(s," - ").concat(a):e.props.showMonthYearPicker||e.props.showQuarterYearPicker?i=R(e.state.date):i="".concat(Dr(se(e.state.date),e.props.locale)," ").concat(R(e.state.date)),y.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},e.state.isRenderAriaLiveMessage&&i)}),d(e,"renderChildren",function(){if(e.props.children)return y.createElement("div",{className:"react-datepicker__children-container"},e.props.children)}),e.containerRef=y.createRef(),e.state={date:e.getDateInView(),selectingDate:null,monthContainer:null,isRenderAriaLiveMessage:!1},e}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=function(){e.setState({monthContainer:e.monthContainer})}())}},{key:"componentDidUpdate",value:function(e){var o=this;if(this.props.preSelection&&(!$(this.props.preSelection,e.preSelection)||this.props.monthSelectedIn!==e.monthSelectedIn)){var s=!le(this.state.date,this.props.preSelection);this.setState({date:this.props.preSelection},function(){return s&&o.handleCustomMonthChange(o.state.date)})}else this.props.openToDate&&!$(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate})}},{key:"render",value:function(){var e=this.props.container||Wu;return y.createElement("div",{style:{display:"contents"},ref:this.containerRef},y.createElement(e,{className:re("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showTime:this.props.showTimeSelect||this.props.showTimeInput,showTimeSelectOnly:this.props.showTimeSelectOnly},this.renderAriaLiveRegion(),this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.renderChildren()))}}],[{key:"defaultProps",get:function(){return{onDropdownFocus:function(){},monthsShown:1,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:At}}}])}(y.Component),Qu=function(r){var t=r.icon,e=r.className,o=e===void 0?"":e,s=r.onClick,a="react-datepicker__calendar-icon";return y.isValidElement(t)?y.cloneElement(t,{className:"".concat(t.props.className||""," ").concat(a," ").concat(o),onClick:function(c){typeof t.props.onClick=="function"&&t.props.onClick(c),typeof s=="function"&&s(c)}}):typeof t=="string"?y.createElement("i",{className:"".concat(a," ").concat(t," ").concat(o),"aria-hidden":"true",onClick:s}):y.createElement("svg",{className:"".concat(a," ").concat(o),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",onClick:s},y.createElement("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"}))},zu=Qu,fa=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),e.el=document.createElement("div"),e}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){this.portalRoot=(this.props.portalHost||document).getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),(this.props.portalHost||document.body).appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el)}},{key:"render",value:function(){return Ca.createPortal(this.props.children,this.el)}}])}(y.Component),Ku="[tabindex], a, button, input, select, textarea",Vu=function(r){return!r.disabled&&r.tabIndex!==-1},ha=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"getTabChildren",function(){return Array.prototype.slice.call(e.tabLoopRef.current.querySelectorAll(Ku),1,-1).filter(Vu)}),d(e,"handleFocusStart",function(){var o=e.getTabChildren();o&&o.length>1&&o[o.length-1].focus()}),d(e,"handleFocusEnd",function(){var o=e.getTabChildren();o&&o.length>1&&o[0].focus()}),e.tabLoopRef=y.createRef(),e}return ne(r,n),te(r,[{key:"render",value:function(){return this.props.enableTabLoop?y.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},y.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,y.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return{enableTabLoop:!0}}}])}(y.Component);function qu(n){var r=function(e){var o=Re(Re({},e),{},{popperModifiers:e.popperModifiers||[],popperProps:e.popperProps||{},hidePopper:typeof e.hidePopper=="boolean"?e.hidePopper:!0}),s=y.useRef(),a=ql(Re({open:!o.hidePopper,whileElementsMounted:us,placement:o.popperPlacement,middleware:[ds({padding:15}),Ka(10),fs({element:s})].concat(Xe(o.popperModifiers))},o.popperProps));return y.createElement(n,Lt({},o,{popperProps:Re(Re({},a),{},{arrowRef:s})}))};return r}var Uu=function(n){function r(){return ee(this,r),J(this,r,arguments)}return ne(r,n),te(r,[{key:"render",value:function(){var e=this.props,o=e.className,s=e.wrapperClassName,a=e.hidePopper,i=e.popperComponent,c=e.targetComponent,l=e.enableTabLoop,u=e.popperOnKeyDown,p=e.portalId,h=e.portalHost,m=e.popperProps,g=e.showArrow,w;if(!a){var v=re("react-datepicker-popper",o);w=y.createElement(ha,{enableTabLoop:l},y.createElement("div",{ref:m.refs.setFloating,style:m.floatingStyles,className:v,"data-placement":m.placement,onKeyDown:u},i,g&&y.createElement(Hl,{ref:m.arrowRef,context:m.context,fill:"currentColor",strokeWidth:1,height:8,width:16,style:{transform:"translateY(-1px)"},className:"react-datepicker__triangle"})))}this.props.popperContainer&&(w=y.createElement(this.props.popperContainer,{},w)),p&&!a&&(w=y.createElement(fa,{portalId:p,portalHost:h},w));var x=re("react-datepicker-wrapper",s);return y.createElement(y.Fragment,null,y.createElement("div",{ref:m.refs.setReference,className:x},c),w)}}],[{key:"defaultProps",get:function(){return{hidePopper:!0}}}])}(y.Component),Xu=qu(Uu),yo="react-datepicker-ignore-onclickoutside",Gu=kn(Bu);function Zu(n,r){return n&&r?se(n)!==se(r)||R(n)!==R(r):n!==r}var Bn="Date input not valid.",ma=function(n){function r(t){var e;return ee(this,r),e=J(this,r,[t]),d(e,"getPreSelection",function(){return e.props.openToDate?e.props.openToDate:e.props.selectsEnd&&e.props.startDate?e.props.startDate:e.props.selectsStart&&e.props.endDate?e.props.endDate:Q()}),d(e,"modifyHolidays",function(){var o;return(o=e.props.holidays)===null||o===void 0?void 0:o.reduce(function(s,a){var i=new Date(a.date);return Yt(i)?[].concat(Xe(s),[Re(Re({},a),{},{date:i})]):s},[])}),d(e,"calcInitialState",function(){var o,s=e.getPreSelection(),a=la(e.props),i=ua(e.props),c=a&&it(s,Me(a))?a:i&&Ue(s,Gn(i))?i:s;return{open:e.props.startOpen||!1,preventFocus:!1,preSelection:(o=e.props.selectsRange?e.props.startDate:e.props.selected)!==null&&o!==void 0?o:c,highlightDates:po(e.props.highlightDates),focused:!1,shouldFocusDayInline:!1,isRenderAriaLiveMessage:!1}}),d(e,"clearPreventFocusTimeout",function(){e.preventFocusTimeout&&clearTimeout(e.preventFocusTimeout)}),d(e,"setFocus",function(){e.input&&e.input.focus&&e.input.focus({preventScroll:!0})}),d(e,"setBlur",function(){e.input&&e.input.blur&&e.input.blur(),e.cancelFocusInput()}),d(e,"setOpen",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;e.setState({open:o,preSelection:o&&e.state.open?e.state.preSelection:e.calcInitialState().preSelection,lastPreSelectChange:Qn},function(){o||e.setState(function(a){return{focused:s?a.focused:!1}},function(){!s&&e.setBlur(),e.setState({inputValue:null})})})}),d(e,"inputOk",function(){return st(e.state.preSelection)}),d(e,"isCalendarOpen",function(){return e.props.open===void 0?e.state.open&&!e.props.disabled&&!e.props.readOnly:e.props.open}),d(e,"handleFocus",function(o){e.state.preventFocus||(e.props.onFocus(o),!e.props.preventOpenOnFocus&&!e.props.readOnly&&e.setOpen(!0)),e.setState({focused:!0})}),d(e,"sendFocusBackToInput",function(){e.preventFocusTimeout&&e.clearPreventFocusTimeout(),e.setState({preventFocus:!0},function(){e.preventFocusTimeout=setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})})}),d(e,"cancelFocusInput",function(){clearTimeout(e.inputFocusTimeout),e.inputFocusTimeout=null}),d(e,"deferFocusInput",function(){e.cancelFocusInput(),e.inputFocusTimeout=setTimeout(function(){return e.setFocus()},1)}),d(e,"handleDropdownFocus",function(){e.cancelFocusInput()}),d(e,"handleBlur",function(o){(!e.state.open||e.props.withPortal||e.props.showTimeInput)&&e.props.onBlur(o),e.setState({focused:!1})}),d(e,"handleCalendarClickOutside",function(o){e.props.inline||e.setOpen(!1),e.props.onClickOutside(o),e.props.withPortal&&o.preventDefault()}),d(e,"handleChange",function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];var i=s[0];if(!(e.props.onChangeRaw&&(e.props.onChangeRaw.apply(e,s),typeof i.isDefaultPrevented!="function"||i.isDefaultPrevented()))){e.setState({inputValue:i.target.value,lastPreSelectChange:Ju});var c=ou(i.target.value,e.props.dateFormat,e.props.locale,e.props.strictParsing,e.props.minDate);e.props.showTimeSelectOnly&&e.props.selected&&c&&!$(c,e.props.selected)&&(c=Ul(e.props.selected,{hours:Se(c),minutes:_e(c),seconds:Vr(c)})),(c||!i.target.value)&&e.setSelected(c,i,!0)}}),d(e,"handleSelect",function(o,s,a){if(e.props.shouldCloseOnSelect&&!e.props.showTimeSelect&&e.sendFocusBackToInput(),e.props.onChangeRaw&&e.props.onChangeRaw(s),e.setSelected(o,s,!1,a),e.props.showDateSelect&&e.setState({isRenderAriaLiveMessage:!0}),!e.props.shouldCloseOnSelect||e.props.showTimeSelect)e.setPreSelection(o);else if(!e.props.inline){e.props.selectsRange||e.setOpen(!1);var i=e.props,c=i.startDate,l=i.endDate;c&&!l&&!go(o,c)&&e.setOpen(!1)}}),d(e,"setSelected",function(o,s,a,i){var c=o;if(e.props.showYearPicker){if(c!==null&&ca(R(c),e.props))return}else if(e.props.showMonthYearPicker){if(c!==null&&nn(c,e.props))return}else if(c!==null&&Cn(c,e.props))return;var l=e.props,u=l.onChange,p=l.selectsRange,h=l.startDate,m=l.endDate,g=l.selectsMultiple,w=l.selectedDates,v=l.minTime;if(!nt(e.props.selected,c)||e.props.allowSameDay||p||g)if(c!==null&&(e.props.selected&&(!a||!e.props.showTimeSelect&&!e.props.showTimeSelectOnly&&!e.props.showTimeInput)&&(c=Wn(c,{hour:Se(e.props.selected),minute:_e(e.props.selected),second:Vr(e.props.selected)})),!a&&(e.props.showTimeSelect||e.props.showTimeSelectOnly)&&v&&(c=Wn(c,{hour:v.getHours(),minute:v.getMinutes(),second:v.getSeconds()})),e.props.inline||e.setState({preSelection:c}),e.props.focusSelectedMonth||e.setState({monthSelectedIn:i})),p){var x=!h&&!m,b=h&&!m,k=h&&m;x?u([c,null],s):b&&(c===null?u([null,null],s):go(c,h)?u([c,null],s):u([h,c],s)),k&&u([c,null],s)}else if(g)if(!(w!=null&&w.length))u([c],s);else{var N=w.some(function(O){return $(O,c)});if(N){var M=w.filter(function(O){return!$(O,c)});u(M,s)}else u([].concat(Xe(w),[c]),s)}else u(c,s);a||(e.props.onSelect(c,s),e.setState({inputValue:null}))}),d(e,"setPreSelection",function(o){var s=typeof e.props.minDate<"u",a=typeof e.props.maxDate<"u",i=!0;if(o){var c=Me(o);if(s&&a)i=Nt(o,e.props.minDate,e.props.maxDate);else if(s){var l=Me(e.props.minDate);i=Ue(o,l)||nt(c,l)}else if(a){var u=Gn(e.props.maxDate);i=it(o,u)||nt(c,u)}}i&&e.setState({preSelection:o})}),d(e,"toggleCalendar",function(){e.setOpen(!e.state.open)}),d(e,"handleTimeChange",function(o){var s=e.props.selected?e.props.selected:e.getPreSelection(),a=e.props.selected?o:Wn(s,{hour:Se(o),minute:_e(o)});e.setState({preSelection:a}),e.props.onChange(a),e.props.shouldCloseOnSelect&&(e.sendFocusBackToInput(),e.setOpen(!1)),e.props.showTimeInput&&e.setOpen(!0),(e.props.showTimeSelectOnly||e.props.showTimeSelect)&&e.setState({isRenderAriaLiveMessage:!0}),e.setState({inputValue:null})}),d(e,"onInputClick",function(){!e.props.disabled&&!e.props.readOnly&&e.setOpen(!0),e.props.onInputClick()}),d(e,"onInputKeyDown",function(o){e.props.onKeyDown(o);var s=o.key;if(!e.state.open&&!e.props.inline&&!e.props.preventOpenOnFocus){(s==="ArrowDown"||s==="ArrowUp"||s==="Enter")&&e.onInputClick();return}if(e.state.open){if(s==="ArrowDown"||s==="ArrowUp"){o.preventDefault();var a=e.props.showWeekPicker&&e.props.showWeekNumbers?'.react-datepicker__week-number[tabindex="0"]':'.react-datepicker__day[tabindex="0"]',i=e.calendar.componentNode&&e.calendar.componentNode.querySelector(a);i&&i.focus({preventScroll:!0});return}var c=Q(e.state.preSelection);s==="Enter"?(o.preventDefault(),e.inputOk()&&e.state.lastPreSelectChange===Qn?(e.handleSelect(c,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(c)):e.setOpen(!1)):s==="Escape"?(o.preventDefault(),e.sendFocusBackToInput(),e.setOpen(!1)):s==="Tab"&&e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:Bn})}}),d(e,"onPortalKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.setState({preventFocus:!0},function(){e.setOpen(!1),setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})}))}),d(e,"onDayKeyDown",function(o){e.props.onKeyDown(o);var s=o.key,a=o.shiftKey,i=Q(e.state.preSelection);if(s==="Enter")o.preventDefault(),e.handleSelect(i,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(i);else if(s==="Escape")o.preventDefault(),e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:Bn});else if(!e.props.disabledKeyboardNavigation){var c;switch(s){case"ArrowLeft":e.props.showWeekPicker?c=Kr(i,1):c=tc(i,1);break;case"ArrowRight":e.props.showWeekPicker?c=un(i,1):c=Ge(i,1);break;case"ArrowUp":c=Kr(i,1);break;case"ArrowDown":c=un(i,1);break;case"PageUp":c=a?Wt(i,1):xt(i,1);break;case"PageDown":c=a?Be(i,1):ye(i,1);break;case"Home":c=Qe(i,e.props.locale,e.props.calendarStartDay);break;case"End":c=uu(i);break;default:c=null;break}if(!c){e.props.onInputError&&e.props.onInputError({code:1,msg:Bn});return}if(o.preventDefault(),e.setState({lastPreSelectChange:Qn}),e.props.adjustDateOnChange&&e.setSelected(c),e.setPreSelection(c),e.props.inline){var l=se(i),u=se(c),p=R(i),h=R(c);l!==u||p!==h?e.setState({shouldFocusDayInline:!0}):e.setState({shouldFocusDayInline:!1})}}}),d(e,"onPopperKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.sendFocusBackToInput())}),d(e,"onClearClick",function(o){o&&o.preventDefault&&o.preventDefault(),e.sendFocusBackToInput(),e.props.selectsRange?e.props.onChange([null,null],o):e.props.onChange(null,o),e.setState({inputValue:null})}),d(e,"clear",function(){e.onClearClick()}),d(e,"onScroll",function(o){typeof e.props.closeOnScroll=="boolean"&&e.props.closeOnScroll?(o.target===document||o.target===document.documentElement||o.target===document.body)&&e.setOpen(!1):typeof e.props.closeOnScroll=="function"&&e.props.closeOnScroll(o)&&e.setOpen(!1)}),d(e,"renderCalendar",function(){return!e.props.inline&&!e.isCalendarOpen()?null:y.createElement(Gu,{ref:function(s){e.calendar=s},locale:e.props.locale,calendarStartDay:e.props.calendarStartDay,chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,monthAriaLabelPrefix:e.props.monthAriaLabelPrefix,adjustDateOnChange:e.props.adjustDateOnChange,setOpen:e.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,dateFormat:e.props.dateFormatCalendar,useWeekdaysShort:e.props.useWeekdaysShort,formatWeekDay:e.props.formatWeekDay,dropdownMode:e.props.dropdownMode,selected:e.props.selected,preSelection:e.state.preSelection,onSelect:e.handleSelect,onWeekSelect:e.props.onWeekSelect,openToDate:e.props.openToDate,minDate:e.props.minDate,maxDate:e.props.maxDate,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,startDate:e.props.startDate,endDate:e.props.endDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,filterDate:e.props.filterDate,onClickOutside:e.handleCalendarClickOutside,formatWeekNumber:e.props.formatWeekNumber,highlightDates:e.state.highlightDates,holidays:yu(e.modifyHolidays()),includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,includeTimes:e.props.includeTimes,injectTimes:e.props.injectTimes,inline:e.props.inline,shouldFocusDayInline:e.state.shouldFocusDayInline,peekNextMonth:e.props.peekNextMonth,showMonthDropdown:e.props.showMonthDropdown,showPreviousMonths:e.props.showPreviousMonths,useShortMonthInDropdown:e.props.useShortMonthInDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showWeekNumbers:e.props.showWeekNumbers,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,forceShowMonthNavigation:e.props.forceShowMonthNavigation,showDisabledMonthNavigation:e.props.showDisabledMonthNavigation,scrollableYearDropdown:e.props.scrollableYearDropdown,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown,todayButton:e.props.todayButton,weekLabel:e.props.weekLabel,outsideClickIgnoreClass:yo,fixedHeight:e.props.fixedHeight,monthsShown:e.props.monthsShown,monthSelectedIn:e.state.monthSelectedIn,onDropdownFocus:e.handleDropdownFocus,onMonthChange:e.props.onMonthChange,onYearChange:e.props.onYearChange,dayClassName:e.props.dayClassName,weekDayClassName:e.props.weekDayClassName,monthClassName:e.props.monthClassName,timeClassName:e.props.timeClassName,showDateSelect:e.props.showDateSelect,showTimeSelect:e.props.showTimeSelect,showTimeSelectOnly:e.props.showTimeSelectOnly,onTimeChange:e.handleTimeChange,timeFormat:e.props.timeFormat,timeIntervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,className:e.props.calendarClassName,container:e.props.calendarContainer,yearItemNumber:e.props.yearItemNumber,yearDropdownItemNumber:e.props.yearDropdownItemNumber,previousMonthAriaLabel:e.props.previousMonthAriaLabel,previousMonthButtonLabel:e.props.previousMonthButtonLabel,nextMonthAriaLabel:e.props.nextMonthAriaLabel,nextMonthButtonLabel:e.props.nextMonthButtonLabel,previousYearAriaLabel:e.props.previousYearAriaLabel,previousYearButtonLabel:e.props.previousYearButtonLabel,nextYearAriaLabel:e.props.nextYearAriaLabel,nextYearButtonLabel:e.props.nextYearButtonLabel,timeInputLabel:e.props.timeInputLabel,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,renderCustomHeader:e.props.renderCustomHeader,popperProps:e.props.popperProps,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,onDayMouseEnter:e.props.onDayMouseEnter,onMonthMouseLeave:e.props.onMonthMouseLeave,onYearMouseEnter:e.props.onYearMouseEnter,onYearMouseLeave:e.props.onYearMouseLeave,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,showTimeInput:e.props.showTimeInput,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,excludeScrollbar:e.props.excludeScrollbar,handleOnKeyDown:e.props.onKeyDown,handleOnDayKeyDown:e.onDayKeyDown,isInputFocused:e.state.focused,customTimeInput:e.props.customTimeInput,setPreSelection:e.setPreSelection,usePointerEvent:e.props.usePointerEvent,yearClassName:e.props.yearClassName},e.props.children)}),d(e,"renderAriaLiveRegion",function(){var o=e.props,s=o.dateFormat,a=o.locale,i=e.props.showTimeInput||e.props.showTimeSelect,c=i?"PPPPp":"PPPP",l;return e.props.selectsRange?l="Selected start date: ".concat(me(e.props.startDate,{dateFormat:c,locale:a}),". ").concat(e.props.endDate?"End date: "+me(e.props.endDate,{dateFormat:c,locale:a}):""):e.props.showTimeSelectOnly?l="Selected time: ".concat(me(e.props.selected,{dateFormat:s,locale:a})):e.props.showYearPicker?l="Selected year: ".concat(me(e.props.selected,{dateFormat:"yyyy",locale:a})):e.props.showMonthYearPicker?l="Selected month: ".concat(me(e.props.selected,{dateFormat:"MMMM yyyy",locale:a})):e.props.showQuarterYearPicker?l="Selected quarter: ".concat(me(e.props.selected,{dateFormat:"yyyy, QQQ",locale:a})):l="Selected date: ".concat(me(e.props.selected,{dateFormat:c,locale:a})),y.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},l)}),d(e,"renderDateInput",function(){var o,s=re(e.props.className,d({},yo,e.state.open)),a=e.props.customInput||y.createElement("input",{type:"text"}),i=e.props.customInputRef||"ref",c=typeof e.props.value=="string"?e.props.value:typeof e.state.inputValue=="string"?e.state.inputValue:e.props.selectsRange?au(e.props.startDate,e.props.endDate,e.props):e.props.selectsMultiple?su(e.props.selectedDates,e.props):me(e.props.selected,e.props);return y.cloneElement(a,(o={},d(d(d(d(d(d(d(d(d(d(o,i,function(l){e.input=l}),"value",c),"onBlur",e.handleBlur),"onChange",e.handleChange),"onClick",e.onInputClick),"onFocus",e.handleFocus),"onKeyDown",e.onInputKeyDown),"id",e.props.id),"name",e.props.name),"form",e.props.form),d(d(d(d(d(d(d(d(d(d(o,"autoFocus",e.props.autoFocus),"placeholder",e.props.placeholderText),"disabled",e.props.disabled),"autoComplete",e.props.autoComplete),"className",re(a.props.className,s)),"title",e.props.title),"readOnly",e.props.readOnly),"required",e.props.required),"tabIndex",e.props.tabIndex),"aria-describedby",e.props.ariaDescribedBy),d(d(d(o,"aria-invalid",e.props.ariaInvalid),"aria-labelledby",e.props.ariaLabelledBy),"aria-required",e.props.ariaRequired)))}),d(e,"renderClearButton",function(){var o=e.props,s=o.isClearable,a=o.disabled,i=o.selected,c=o.startDate,l=o.endDate,u=o.clearButtonTitle,p=o.clearButtonClassName,h=p===void 0?"":p,m=o.ariaLabelClose,g=m===void 0?"Close":m,w=o.selectedDates;return s&&(i!=null||c!=null||l!=null||w!=null&&w.length)?y.createElement("button",{type:"button",className:re("react-datepicker__close-icon",h,{"react-datepicker__close-icon--disabled":a}),disabled:a,"aria-label":g,onClick:e.onClearClick,title:u,tabIndex:-1}):null}),e.state=e.calcInitialState(),e.preventFocusTimeout=null,e}return ne(r,n),te(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0)}},{key:"componentDidUpdate",value:function(e,o){e.inline&&Zu(e.selected,this.props.selected)&&this.setPreSelection(this.props.selected),this.state.monthSelectedIn!==void 0&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:po(this.props.highlightDates)}),!o.focused&&!nt(e.selected,this.props.selected)&&this.setState({inputValue:null}),o.open!==this.state.open&&(o.open===!1&&this.state.open===!0&&this.props.onCalendarOpen(),o.open===!0&&this.state.open===!1&&this.props.onCalendarClose())}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0)}},{key:"renderInputContainer",value:function(){var e=this.props,o=e.showIcon,s=e.icon,a=e.calendarIconClassname,i=e.toggleCalendarOnIconClick,c=this.state.open;return y.createElement("div",{className:"react-datepicker__input-container".concat(o?" react-datepicker__view-calendar-icon":"")},o&&y.createElement(zu,Lt({icon:s,className:"".concat(a," ").concat(c&&"react-datepicker-ignore-onclickoutside")},i?{onClick:this.toggleCalendar}:null)),this.state.isRenderAriaLiveMessage&&this.renderAriaLiveRegion(),this.renderDateInput(),this.renderClearButton())}},{key:"render",value:function(){var e=this.renderCalendar();if(this.props.inline)return e;if(this.props.withPortal){var o=this.state.open?y.createElement(ha,{enableTabLoop:this.props.enableTabLoop},y.createElement("div",{className:"react-datepicker__portal",tabIndex:-1,onKeyDown:this.onPortalKeyDown},e)):null;return this.state.open&&this.props.portalId&&(o=y.createElement(fa,{portalId:this.props.portalId,portalHost:this.props.portalHost},o)),y.createElement("div",null,this.renderInputContainer(),o)}return y.createElement(Xu,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,portalHost:this.props.portalHost,popperModifiers:this.props.popperModifiers,targetComponent:this.renderInputContainer(),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop,showArrow:this.props.showPopperArrow})}}],[{key:"defaultProps",get:function(){return{allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,selectsDisabledDaysInRange:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,showWeekPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthAriaLabel:"Previous Month",previousMonthButtonLabel:"Previous Month",nextMonthAriaLabel:"Next Month",nextMonthButtonLabel:"Next Month",previousYearAriaLabel:"Previous Year",previousYearButtonLabel:"Previous Year",nextYearAriaLabel:"Next Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:At,focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:void 0,toggleCalendarOnIconClick:!1,usePointerEvent:!1}}}])}(y.Component),Ju="input",Qn="navigate";const ed=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  gap: 24px;
  border-radius: 10px;
  background-color: ${({theme:n})=>n.color.white};

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 16px;
  }
  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close {
    fill: ${({theme:n})=>n.color.blue};
    cursor: pointer;
  }

  .counter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .counterBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid ${({theme:n})=>n.color.skyBlue};
    border-radius: 50%;
    color: ${({theme:n})=>n.color.blue};
    background-color: transparent;
  }

  .waterAmount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 36px;
    padding: 6px, 10px;
    background-color: ${({theme:n})=>n.color.paleBlue};
    color: ${({theme:n})=>n.color.blue};
    border-radius: 40px;
    border: none;
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }

  .input {
    display: flex;
    width: 100%;
    height: 44px;
    padding: 12px 10px;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${({theme:n})=>n.color.paleBlue};
    color: ${({theme:n})=>n.color.blue};
    outline: none;
  }
  .amount {
    color: ${({theme:n})=>n.color.blue};
    font-family: 'Roboto-Bold';
    font-size: 18px;
    /* font-weight: 700; */
    line-height: 24px;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
  .confirm {
    width: 160px;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    background-color: ${({theme:n})=>n.color.blue};
    box-shadow: ${({theme:n})=>n.boxShadow.normalButton};
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    /* font-weight: 500; */
    line-height: 24px;
    text-align: center;
    color: ${({theme:n})=>n.color.white};
  }

  .confirm:hover {
    box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};
  }
  .confirm:active {
    box-shadow: ${({theme:n})=>n.boxShadow.activeButton};
  }

  @media ${({theme:n})=>n.device.mobile} {
    gap: 20px;
    .counter {
      margin-bottom: 24px;
    }
    .enterLabel {
      margin-top: 24px;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.11111;
    }
    .input {
      width: 120px;
      height: 44px;
    }
    .buttons {
      margin-top: 24px;
      justify-content: center;
      flex-direction: column;
      gap: 16px;
    }
    .confirm {
      width: 256px;
      height: 36px;
    }
  }
  @media ${({theme:n})=>n.device.tablet} {
    width: 704px;
    height: 504px;
    padding: 32px 24px;
    .input {
      width: 656px;
    }
    .buttons {
      margin-top: 24px;
      justify-content: end;
      flex-direction: row;
      gap: 36px;
    }
    .amount {
    }
    .confirm {
      width: 160px;
    }
  }

  @media ${({theme:n})=>n.device.desktop} {
    width: 592px;

    .input {
      width: 544px;
    }
  }
`,ga=({isModalOpen:n,closeModal:r})=>{const[t,e]=D.useState(50),[o,s]=D.useState(new Date),a=ct(),i=()=>{e(h=>h+50)},c=()=>{t>=50&&e(h=>h-50)},l=h=>{s(h)},u=h=>{h.preventDefault();const m=o.getTimezoneOffset();a(Ma({date:o,ml:t,timeZoneOffset:m})),r()},p=h=>{const m=parseInt(h.target.value);e(m)};return f.jsx(f.Fragment,{children:n&&f.jsx(wn,{onClose:r,children:f.jsxs(ed,{children:[f.jsxs("div",{className:"topline",children:[f.jsx("h2",{children:"Add water"}),f.jsx(gn,{className:"close",onClick:r})]}),f.jsx("p",{children:"Choose of water:"}),f.jsxs("form",{onSubmit:u,children:[f.jsx("label",{children:"Amount of water:"}),f.jsxs("div",{className:"counter",children:[f.jsx("button",{className:"counterBtn",type:"button",onClick:c,children:f.jsx(gr,{})}),f.jsxs("div",{className:"waterAmount",children:[t,"ml"]}),f.jsx("button",{className:"counterBtn",type:"button",onClick:i,children:f.jsx(hr,{})})]}),f.jsxs("label",{children:["Recording time:",f.jsx(ma,{className:"input",selected:o,onChange:h=>l(h),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),f.jsxs("label",{className:"enterLabel",children:["Enter the value of the water used:",f.jsx("input",{className:"input",type:"number",value:t,onChange:p})]}),f.jsxs("div",{className:"buttons",children:[f.jsxs("span",{className:"amount",children:[t,"ml"]}),f.jsx("button",{className:"confirm",type:"submit",onClick:u,children:"Save"})]})]})]})})})},td=()=>{const[n,r]=D.useState(!1),t=Ye(ks),e=ct(),o=()=>{r(!0)},s=()=>{r(!1)},a=t>100?100:t;return D.useEffect(()=>{e(_a())},[e]),f.jsx(f.Fragment,{children:f.jsxs(Us,{children:[f.jsx("h3",{children:"Today"}),f.jsxs("div",{className:"box",children:[f.jsx(Xs,{children:f.jsx("div",{className:"progress-bar-container",children:f.jsxs("div",{className:"progress-bar",children:[f.jsx("div",{className:"progress",style:{width:`${a}%`}}),f.jsx("div",{className:"line-0",children:"|"}),f.jsx("div",{className:"line-50",children:"|"}),f.jsx("div",{className:"line-100",children:"|"}),f.jsx("div",{className:"marker-0",children:"0%"}),f.jsx("div",{className:"marker-50",children:"50%"}),f.jsx("div",{className:"marker-100",children:"100%"}),f.jsx("div",{className:"indicator",style:{left:`${a}%`},children:f.jsx("p",{className:"progress-text",children:t>100?`${t}%`:`${a}%`})})]})})}),f.jsxs(Gs,{onClick:o,children:[f.jsx(Zs,{width:"20px",height:"20px",children:f.jsx("use",{xlinkHref:`${Ie}#plus-circle`})})," ",f.jsx("p",{children:"Add Water"})]})]}),n&&f.jsx(ga,{isModalOpen:n,closeModal:s})]})})},nd=P.div`
  *::-webkit-scrollbar {
    width: 4px;
  }
  *::-webkit-scrollbar-track {
    background: ${({theme:n})=>n.color.paleBlue};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({theme:n})=>n.color.blue};
    border-radius: 8px;
    border: 3px solid ${({theme:n})=>n.color.skyBlue};
  }
  .edit {
    stroke: ${({theme:n})=>n.color.skyBlue};
    cursor: pointer;
    fill: transparent;
  }
  .delete {
    stroke: ${({theme:n})=>n.color.red};
    cursor: pointer;
    fill: transparent;
  }

  @media screen and (min-width: 320px) {
    background-color: ${({theme:n})=>n.color.lavender};

    min-width: 254px;

    .title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 1.25;
      height: 40px;
    }
    .waterList {
      overflow-y: scroll;

      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: center;

      border-radius: 10px;
      padding: 6px 5px 8px 4px;
      width: 100%;
      height: 175px;
    }

    .waterItem {
      width: 100%;
      min-height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid ${({theme:n})=>n.color.paleBlue};
      align-items: center;
    }

    .volumeAdnDate {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .waterGlass {
      width: 26px;
      height: 26px;
      fill: transparent;
      stroke: ${({theme:n})=>n.color.skyBlue};
    }
    .waterVolume {
      display: flex;
      justify-content: end;
      min-width: 60px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
      color: ${({theme:n})=>n.color.blue};
    }
    .waterVolumeMl {
      display: flex;
      justify-content: end;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
      color: ${({theme:n})=>n.color.blue};
    }
    .waterTime {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 2;
    }
    .editDelete {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }
    .editIcon {
      cursor: pointer;
    }
    .deleteIcon {
      cursor: pointer;
    }
    .addWater {
      cursor: pointer;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      display: flex;
      align-items: end;
      color: ${({theme:n})=>n.color.blue};
    }
  }
  @media ${({theme:n})=>n.device.tablet} {
    .waterList {
      width: 100%;
      height: 169px;
    }
  }
  @media ${({theme:n})=>n.device.desktop} {
    .waterList {
      width: 100%;
      height: 169px;
    }
  }
`,rd=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  gap: 24px;
  border-radius: 10px;
  background-color: ${({theme:n})=>n.color.white};
  color: ${({theme:n})=>n.color.black};
  width: 280px;
  height: 648px;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 16px;
  }
  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close {
    fill: ${({theme:n})=>n.color.blue};
    cursor: pointer;
  }
  .counter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
  }
  .counterBtn {
    width: 44px;
    height: 44px;
    border: 1px solid ${({theme:n})=>n.color.skyBlue};
    border-radius: 50%;
    color: ${({theme:n})=>n.color.blue};
    background-color: transparent;
  }
  .waterAmount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 36px;
    padding: 6px, 10px;
    background-color: ${({theme:n})=>n.color.paleBlue};
    color: #${({theme:n})=>n.color.blue};
    border-radius: 40px;
    border: none;
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
  }
  .input {
    display: flex;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid ${({theme:n})=>n.color.palelue};
    color: ${({theme:n})=>n.color.blue};
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }

  @media ${({theme:n})=>n.device.mobile} {
    .close {
      position: absolute;
      right: 12px;
      top: 24px;
    }
    .currentDrink {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 12px;
      background-color: ${({theme:n})=>n.color.paleBlue};
      border-radius: 10px;
      padding: 8px 24px;
      height: 52px;
    }
    .amount {
      font-size: 18px;
      line-height: 1.33333;
      font-weight: 400;
      color: ${({theme:n})=>n.color.blue};
    }
    .currentTime {
      font-weight: 400;
      enterLabel   font-size: 12px;
      line-height: 2;
    }    
    .enterLabel {
      padding-top: 12px;
      font-weight: 500;
      font-size: 18px; 
      line-height: 1.11111;
      color: #2f2f2f;

    }
    .input {
      border: 1px solid ${({theme:n})=>n.color.paleBlue};
      border-radius: 6px;
      padding: 12px 10px;
      width: 256px;
      height: 44px;
    }
    .buttons {
      padding-top: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
    }
    .waterAmountConfirm {
      padding-top: 12px;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.33333;
      text-align: center;
      color: ${({theme:n})=>n.color.blue};
    }
    .confirm {
      border-radius: 10px;
      padding: 8px 30px;
      width: 256px;
      height: 36px;
      background-color: ${({theme:n})=>n.color.blue};
      border: none;
      box-shadow: ${({theme:n})=>n.boxShadow.normalButton};
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      color: ${({theme:n})=>n.color.white};
    }
    .confirm:hover {
      box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};
    }
    .confirm:active {
      box-shadow: ${({theme:n})=>n.boxShadow.activeButton};
    }
  }

  @media ${({theme:n})=>n.device.tablet} {
    width: 704px;
    height: 580px;
    padding: 32px 24px;

    .close {
      position: absolute;
      right: 30px;
      top: 36px;
    }
    .currentDrink {
      width: 254px;
    }
    .input {
      width: 544px;
    }
    .buttons {      
      display: flex;
      align-items: center;
      justify-content: end;
      flex-direction: row;
      gap: 18px;
    }
    .confirm {
      width: 160px;
      height: 44px;
    }
  }

  @media ${({theme:n})=>n.device.desktop} {
    width: 592px;
    height: 580px;
  }
  
`,od=n=>{const r=new Date(n),t=r.getTimezoneOffset(),e=Math.floor(Math.abs(t)/60),o=Math.abs(t)%60,s=e.toString().padStart(2,"0"),a=o.toString().padStart(2,"0"),i=`${t>=0?"-":"+"}${s}:${a}`;return`${new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds()).toISOString().split(".")[0]}${i}`},ad=(n,r)=>n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate(),sd=({isModalOpen:n,closeModal:r,currentIntakes:t})=>{const[e,o]=D.useState(t.ml),s=od(t.time),[a,i]=D.useState(new Date(s)),c=ct(),l=()=>{o(g=>g+50)},u=()=>{e>=50&&o(g=>g-50)},p=g=>{i(g)},h=g=>{g.preventDefault();const w=new Date(a).getTimezoneOffset(),v={date:a,ml:e,timeZoneOffset:w};c(Sa({id:t.id,body:v})),r()},m=g=>{const w=parseInt(g.target.value);o(w)};return f.jsx(f.Fragment,{children:n&&f.jsx(wn,{onClose:r,children:f.jsxs(rd,{children:[f.jsxs("div",{className:"topline",children:[f.jsx("h2",{children:"Edit the entered amount of water"}),f.jsx(gn,{className:"close",onClick:r})]}),f.jsxs("div",{className:"currentDrink",children:[f.jsx("svg",{className:"waterGlass",width:"36",height:"36",stroke:"#9ebbff",fill:"none",children:f.jsx("use",{href:Ie+"#water-glass"})}),f.jsxs("span",{className:"amount",children:[t.ml,"ml"]}),f.jsx("span",{className:"currentTime",children:t.time.slice(11,16)})]}),f.jsx("p",{children:"Correct entered data:"}),f.jsxs("form",{onSubmit:h,children:[f.jsx("label",{children:"Amount of water:"}),f.jsxs("div",{className:"counter",children:[f.jsx("button",{className:"counterBtn",type:"button",onClick:u,children:f.jsx(gr,{})}),f.jsxs("div",{className:"waterAmount",children:[e,"ml"]}),f.jsx("button",{className:"counterBtn",type:"button",onClick:l,children:f.jsx(hr,{})})]}),f.jsxs("label",{children:["Recording time:",f.jsx(ma,{className:"input",selected:a,onChange:g=>p(g),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),f.jsxs("label",{className:"enterLabel",children:["Enter the value of the water used:",f.jsx("input",{className:"input",type:"number",value:e,onChange:m})]}),f.jsxs("div",{className:"buttons",children:[f.jsxs("span",{className:"waterAmountConfirm",children:[e,"ml"]}),f.jsx("button",{className:"confirm",type:"submit",onClick:h,children:"Save"})]})]})]})})})},id=P.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 320px;
  padding: 32px 24px;
  background-color: ${({theme:n})=>n.color.white};
  border-radius: 10px;

  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin-bottom: 24px;
  }
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .close {
    fill: ${({theme:n})=>n.color.blue};
    cursor: pointer;
  }

  @media ${({theme:n})=>n.device.tablet} {
    width: 592px;
    height: 208px;
  }

  h2 {
    font-size: 26px;
  }

  p {
    font-size: 18px;
  }
`,cd=P.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  button {
    font-family: 'Roboto-Medium', sans-serif;
    font-weight: 500;
    width: 100%;
    height: 36px;
    padding: 8px 30px 8px 30px;
    border: none;
    border-radius: 10px;
    box-shadow: ${({theme:n})=>n.boxShadow.normalButton};
  }

  button:hover {
    box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};
  }

  button:active {
    box-shadow: ${({theme:n})=>n.boxShadow.activeButton};
  }

  .confirm {
    color: ${({theme:n})=>n.color.white};
    background-color: ${({theme:n})=>n.color.red};
  }

  .cancel {
    color: ${({theme:n})=>n.color.blue};
    background-color: ${({theme:n})=>n.color.paleBlue};
  }

  @media ${({theme:n})=>n.device.tablet} {
    width: 344px;
    margin-left: 200px;
    flex-direction: row-reverse;

    button {
      width: 160px;
      height: 44px px;
      padding: 10px 30px 10px 30px;
    }
  }
`,ld=({onModalClose:n,isModalOpen:r,currentIntakes:t})=>{const e=ct(),o=()=>{const s=t.id;e(Pa(s)),n()};return f.jsx(f.Fragment,{children:r&&f.jsx(wn,{onClose:n,children:f.jsxs(id,{children:[f.jsxs("div",{children:[f.jsxs("div",{className:"topline",children:[f.jsx("h2",{children:"Delete water intakes"}),f.jsx(gn,{className:"close",onClick:n})]}),f.jsx("p",{children:"Do you really want delete that water intakes?"})]}),f.jsxs(cd,{children:[f.jsx("button",{className:"confirm",onClick:o,children:"Delete"}),f.jsx("button",{className:"cancel",onClick:n,children:"Cancel"})]})]})})})},ud=()=>{const[n,r]=D.useState(!1),[t,e]=D.useState(!1),[o,s]=D.useState(!1),[a,i]=D.useState({}),c=Ye(Ao),l=w=>{const v={id:w.target.closest("LI").id,ml:Number(w.target.closest("LI").childNodes[0].childNodes[1].textContent),time:w.target.closest("LI").attributes.time.value};i(v),r(!0)},u=()=>{r(!1)},p=()=>{e(!0)},h=()=>{e(!1)},m=w=>{const v={id:w.target.closest("LI").id,time:w.target.closest("LI").attributes.time.value};i(v),s(!0)},g=()=>{s(!1)};return f.jsxs(f.Fragment,{children:[f.jsxs(nd,{children:[f.jsx("h3",{className:"title",children:"Today"}),f.jsx("ul",{className:"waterList",children:c.waterIntakes.length>0?c.waterIntakes.map(w=>f.jsxs("li",{className:"waterItem",id:w._id,time:w.consumedAt,children:[f.jsxs("div",{className:"volumeAdnDate",children:[f.jsx("svg",{className:"waterGlass",width:"26",height:"26",children:f.jsx("use",{href:Ie+"#water-glass"})}),f.jsxs("span",{className:"waterVolume",children:[w.ml," "]}),f.jsx("span",{className:"waterVolumeMl",children:"ml"}),f.jsx("span",{className:"waterTime",children:w.consumedAt.slice(11,16)})]}),f.jsxs("div",{className:"editDelete",children:[f.jsx("svg",{className:"edit",onClick:l,width:"16",height:"16",children:f.jsx("use",{href:Ie+"#pencil-square"})}),f.jsx("svg",{className:"delete",onClick:m,width:"16",height:"16",children:f.jsx("use",{href:Ie+"#trash"})})]})]},w._id)):f.jsx("p",{children:"Today you don't have records"})}),f.jsx("h2",{className:"addWater",onClick:p,children:"+ Add water"})]}),n&&f.jsx(sd,{isModalOpen:n,closeModal:u,currentIntakes:a}),t&&f.jsx(ga,{isModalOpen:t,closeModal:h}),o&&f.jsx(ld,{isModalOpen:o,onModalClose:g,currentIntakes:a})]})},dd="#4fa94d",pd={"aria-busy":!0,role:"progressbar"},fd=P.div`
  display: ${n=>n.$visible?"flex":"none"};
`,hd="http://www.w3.org/2000/svg",we=242.776657104492,md=1.6,gd=sr`
12.5% {
  stroke-dasharray: ${we*.14}px, ${we}px;
  stroke-dashoffset: -${we*.11}px;
}
43.75% {
  stroke-dasharray: ${we*.35}px, ${we}px;
  stroke-dashoffset: -${we*.35}px;
}
100% {
  stroke-dasharray: ${we*.01}px, ${we}px;
  stroke-dashoffset: -${we*.99}px;
}
`;P.path`
  stroke-dasharray: ${we*.01}px, ${we};
  stroke-dashoffset: 0;
  animation: ${gd} ${md}s linear infinite;
`;const wd=sr`
to {
   transform: rotate(360deg);
 }
`;P.svg`
  animation: ${wd} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;P.polyline`
  stroke-width: ${n=>n.width}px;
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
`;const yd=({height:n=80,width:r=80,radius:t=9,color:e=dd,ariaLabel:o="three-dots-loading",wrapperStyle:s,wrapperClass:a,visible:i=!0})=>f.jsx(fd,{style:s,$visible:i,className:a,"data-testid":"three-dots-loading","aria-label":o,...pd,children:f.jsxs("svg",{width:r,height:n,viewBox:"0 0 120 30",xmlns:hd,fill:e,"data-testid":"three-dots-svg",children:[f.jsxs("circle",{cx:"15",cy:"15",r:Number(t)+6,children:[f.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"60",cy:"15",r:t,attributeName:"fill-opacity",from:"1",to:"0.3",children:[f.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"105",cy:"15",r:Number(t)+6,children:[f.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),vd=sr`
to {
   stroke-dashoffset: 136;
 }
`;P.polygon`
  stroke-dasharray: 17;
  animation: ${vd} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;P.svg`
  transform-origin: 50% 65%;
`;var wa={},_n={};Object.defineProperty(_n,"__esModule",{value:!0});_n.PopoverPortal=void 0;var bd=D,xd=ar,Dd=function(n){var r=n.container,t=n.element,e=n.scoutElement,o=n.children;return(0,bd.useLayoutEffect)(function(){return r.appendChild(t),r.appendChild(e),function(){r.removeChild(t),r.removeChild(e)}},[r,t,e]),(0,xd.createPortal)(o,t)};_n.PopoverPortal=Dd;var Sn={};(function(n){var r=Ke&&Ke.__assign||function(){return r=Object.assign||function(c){for(var l,u=1,p=arguments.length;u<p;u++){l=arguments[u];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(c[h]=l[h])}return c},r.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.getNudgedPopoverRect=n.getNewPopoverRect=n.popoverRectForPosition=n.createContainer=n.rectsAreEqual=n.createRect=n.EMPTY_RECT=void 0,n.EMPTY_RECT={top:0,left:0,right:0,bottom:0,width:0,height:0};var t=function(c){var l=c.top,u=c.left,p=c.width,h=c.height;return{top:l,left:u,width:p,height:h,right:u+p,bottom:l+h}};n.createRect=t;var e=function(c,l){return c===l||(c==null?void 0:c.bottom)===(l==null?void 0:l.bottom)&&(c==null?void 0:c.height)===(l==null?void 0:l.height)&&(c==null?void 0:c.left)===(l==null?void 0:l.left)&&(c==null?void 0:c.right)===(l==null?void 0:l.right)&&(c==null?void 0:c.top)===(l==null?void 0:l.top)&&(c==null?void 0:c.width)===(l==null?void 0:l.width)};n.rectsAreEqual=e;var o=function(c){var l=c.containerStyle,u=c.containerClassName,p=c.id,h=window.document.createElement("div");return h.id=p,u&&(h.className=u),Object.assign(h.style,l),h};n.createContainer=o;var s=function(c,l,u,p,h){var m=l.left+l.width/2,g=l.top+l.height/2,w=u.width,v=u.height,x,b;switch(c){case"left":x=g-v/2,b=l.left-p-w,h==="start"&&(x=l.top),h==="end"&&(x=l.bottom-v);break;case"bottom":x=l.bottom+p,b=m-w/2,h==="start"&&(b=l.left),h==="end"&&(b=l.right-w);break;case"right":x=g-v/2,b=l.right+p,h==="start"&&(x=l.top),h==="end"&&(x=l.bottom-v);break;default:x=l.top-v-p,b=m-w/2,h==="start"&&(b=l.left),h==="end"&&(b=l.right-w);break}return(0,n.createRect)({left:b,top:x,width:w,height:v})};n.popoverRectForPosition=s;var a=function(c,l){var u=c.position,p=c.align,h=c.childRect,m=c.popoverRect,g=c.boundaryRect,w=c.padding,v=c.reposition,x=(0,n.popoverRectForPosition)(u,h,m,w,p),b=v&&(u==="top"&&x.top<g.top+l||u==="left"&&x.left<g.left+l||u==="right"&&x.right>g.right-l||u==="bottom"&&x.bottom>g.bottom-l);return{rect:x,boundaryViolation:b}};n.getNewPopoverRect=a;var i=function(c,l,u){var p=l.top+u,h=l.left+u,m=l.right-u,g=l.bottom-u,w=c.top<p?p:c.top;w=w+c.height>g?g-c.height:w;var v=c.left<h?h:c.left;return v=v+c.width>m?m-c.width:v,(0,n.createRect)(r(r({},c),{top:w,left:v}))};n.getNudgedPopoverRect=i})(Sn);var Pn={},En={};Object.defineProperty(En,"__esModule",{value:!0});En.useElementRef=void 0;var vo=D,kd=Sn,Cd=function(n){var r=n.containerClassName,t=n.containerStyle,e=n.id,o=(0,vo.useRef)(),s=(0,vo.useMemo)(function(){return(0,kd.createContainer)({containerStyle:t,containerClassName:r,id:e})},[r,t,e]);return o.current=s,o};En.useElementRef=Cd;Object.defineProperty(Pn,"__esModule",{value:!0});Pn.usePopover=void 0;var Md=D,pt=Sn,bo=En,_d={position:"fixed",overflow:"visible",top:"0px",left:"0px"},Sd={position:"fixed",top:"0px",left:"0px",width:"0px",height:"0px",visibility:"hidden"},Pd=function(n){var r=n.isOpen,t=n.childRef,e=n.positions,o=n.containerClassName,s=n.parentElement,a=n.transform,i=n.transformMode,c=n.align,l=n.padding,u=n.reposition,p=n.boundaryInset,h=n.boundaryElement,m=n.onPositionPopover,g=(0,bo.useElementRef)({id:"react-tiny-popover-scout",containerStyle:Sd}),w=(0,bo.useElementRef)({id:"react-tiny-popover-container",containerClassName:o,containerStyle:_d}),v=(0,Md.useCallback)(function(x){var b,k,N=x===void 0?{}:x,M=N.positionIndex,O=M===void 0?0:M,C=N.parentRect,E=C===void 0?s.getBoundingClientRect():C,T=N.childRect,H=T===void 0?(b=t==null?void 0:t.current)===null||b===void 0?void 0:b.getBoundingClientRect():T,q=N.scoutRect,j=q===void 0?(k=g==null?void 0:g.current)===null||k===void 0?void 0:k.getBoundingClientRect():q,Z=N.popoverRect,Y=Z===void 0?w.current.getBoundingClientRect():Z,z=N.boundaryRect,B=z===void 0?h===s?E:h.getBoundingClientRect():z;if(!(!H||!E||!r)){if(a&&i==="absolute"){var F=typeof a=="function"?a({childRect:H,popoverRect:Y,parentRect:E,boundaryRect:B,padding:l,align:c,nudgedTop:0,nudgedLeft:0,boundaryInset:p,violations:pt.EMPTY_RECT,hasViolations:!1}):a,pe=F.top,fe=F.left,Ze=Math.round(E.left+fe-j.left),kt=Math.round(E.top+pe-j.top);w.current.style.transform="translate(".concat(Ze,"px, ").concat(kt,"px)"),m({childRect:H,popoverRect:(0,pt.createRect)({left:Ze,top:kt,width:Y.width,height:Y.height}),parentRect:E,boundaryRect:B,padding:l,align:c,transform:{top:pe,left:fe},nudgedTop:0,nudgedLeft:0,boundaryInset:p,violations:pt.EMPTY_RECT,hasViolations:!1});return}var Ee=O===e.length,Ne=Ee?e[0]:e[O],Bt=(0,pt.getNewPopoverRect)({childRect:H,popoverRect:Y,boundaryRect:B,position:Ne,align:c,padding:l,reposition:u},p),Oe=Bt.rect,Ct=Bt.boundaryViolation;if(Ct&&u&&!Ee){v({positionIndex:O+1,childRect:H,popoverRect:Y,parentRect:E,boundaryRect:B});return}var ve=Oe.top,Mt=Oe.left,ie=Oe.width,Qt=Oe.height,Tn=u&&!Ee,ut=(0,pt.getNudgedPopoverRect)(Oe,B,p),Je=ut.left,he=ut.top,be=ve,ce=Mt;Tn&&(be=he,ce=Je),be=Math.round(be-j.top),ce=Math.round(ce-j.left),w.current.style.transform="translate(".concat(ce,"px, ").concat(be,"px)");var oe={top:B.top+p-be,left:B.left+p-ce,right:ce+ie-B.right+p,bottom:be+Qt-B.bottom+p},Fe={childRect:H,popoverRect:(0,pt.createRect)({left:ce,top:be,width:ie,height:Qt}),parentRect:E,boundaryRect:B,position:Ne,align:c,padding:l,nudgedTop:he-ve,nudgedLeft:Je-Mt,boundaryInset:p,violations:{top:oe.top<=0?0:oe.top,left:oe.left<=0?0:oe.left,right:oe.right<=0?0:oe.right,bottom:oe.bottom<=0?0:oe.bottom},hasViolations:oe.top>0||oe.left>0||oe.right>0||oe.bottom>0};if(a){m(Fe);var zt=typeof a=="function"?a(Fe):a,Te=zt.top,I=zt.left;w.current.style.transform="translate(".concat(Math.round(ce+(I??0)),"px, ").concat(Math.round(be+(Te??0)),"px)"),Fe.nudgedLeft+=I??0,Fe.nudgedTop+=Te??0,Fe.transform={top:Te,left:I}}m(Fe)}},[s,t,g,w,h,r,a,i,e,c,l,u,p,m]);return{positionPopover:v,popoverRef:w,scoutRef:g}};Pn.usePopover=Pd;var Nn={};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.useMemoizedArray=void 0;var xo=D,Ed=function(n){var r=(0,xo.useRef)(n),t=(0,xo.useMemo)(function(){if(r.current===n)return r.current;if(r.current.length!==n.length)return r.current=n,n;for(var e=0;e<n.length;e+=1)if(n[e]!==r.current[e])return r.current=n,n;return r.current},[n]);return t};Nn.useMemoizedArray=Ed;var Ht={},or=Ke&&Ke.__assign||function(){return or=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},or.apply(this,arguments)};Object.defineProperty(Ht,"__esModule",{value:!0});Ht.useArrowContainer=void 0;var Do=D,Nd=function(n){var r=n.childRect,t=n.popoverRect,e=n.position,o=n.arrowSize,s=n.arrowColor,a=(0,Do.useMemo)(function(){return{padding:o}},[o]),i=(0,Do.useMemo)(function(){return or({position:"absolute"},function(){var c=o*2,l=r.top-t.top+r.height/2-c/2,u=r.left-t.left+r.width/2-c/2,p=o,h=t.width-o,m=t.height-o;switch(u=u<p?p:u,u=u+c>h?h-c:u,l=l<p?p:l,l=l+c>m?m-c:l,l=Number.isNaN(l)?0:l,u=Number.isNaN(u)?0:u,e){case"right":return{borderTop:"".concat(o,"px solid transparent"),borderBottom:"".concat(o,"px solid transparent"),borderRight:"".concat(o,"px solid ").concat(s),left:0,top:l};case"left":return{borderTop:"".concat(o,"px solid transparent"),borderBottom:"".concat(o,"px solid transparent"),borderLeft:"".concat(o,"px solid ").concat(s),right:0,top:l};case"bottom":return{borderLeft:"".concat(o,"px solid transparent"),borderRight:"".concat(o,"px solid transparent"),borderBottom:"".concat(o,"px solid ").concat(s),top:0,left:u};case"top":return{borderLeft:"".concat(o,"px solid transparent"),borderRight:"".concat(o,"px solid transparent"),borderTop:"".concat(o,"px solid ").concat(s),bottom:0,left:u};default:return{display:"hidden"}}}())},[s,o,r.height,r.left,r.top,r.width,t.height,t.left,t.top,t.width,e]);return{arrowContainerStyle:a,arrowStyle:i}};Ht.useArrowContainer=Nd;var On={},ht=Ke&&Ke.__assign||function(){return ht=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},ht.apply(this,arguments)};Object.defineProperty(On,"__esModule",{value:!0});On.ArrowContainer=void 0;var ko=f,Co=D,Od=Ht,Td=function(n){var r=n.childRect,t=n.popoverRect,e=n.position,o=n.arrowColor,s=n.arrowSize,a=n.arrowClassName,i=n.arrowStyle,c=n.className,l=n.children,u=n.style,p=(0,Od.useArrowContainer)({childRect:r,popoverRect:t,position:e,arrowColor:o,arrowSize:s}),h=p.arrowContainerStyle,m=p.arrowStyle,g=(0,Co.useMemo)(function(){return ht(ht({},h),u)},[h,u]),w=(0,Co.useMemo)(function(){return ht(ht({},m),i)},[m,i]);return(0,ko.jsxs)("div",{className:c,style:g,children:[(0,ko.jsx)("div",{style:w,className:a}),l]})};On.ArrowContainer=Td;(function(n){var r=Ke&&Ke.__assign||function(){return r=Object.assign||function(h){for(var m,g=1,w=arguments.length;g<w;g++){m=arguments[g];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(h[v]=m[v])}return h},r.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.Popover=n.usePopover=n.ArrowContainer=n.useArrowContainer=void 0;var t=f,e=D,o=_n,s=Sn,a=Pn;Object.defineProperty(n,"usePopover",{enumerable:!0,get:function(){return a.usePopover}});var i=Nn,c=Ht;Object.defineProperty(n,"useArrowContainer",{enumerable:!0,get:function(){return c.useArrowContainer}});var l=On;Object.defineProperty(n,"ArrowContainer",{enumerable:!0,get:function(){return l.ArrowContainer}});var u=["top","left","right","bottom"],p=(0,e.forwardRef)(function(h,m){var g=h.isOpen,w=h.children,v=h.content,x=h.positions,b=x===void 0?u:x,k=h.align,N=k===void 0?"center":k,M=h.padding,O=M===void 0?0:M,C=h.reposition,E=C===void 0?!0:C,T=h.parentElement,H=T===void 0?window.document.body:T,q=h.boundaryElement,j=q===void 0?H:q,Z=h.containerClassName,Y=h.containerStyle,z=h.transform,B=h.transformMode,F=B===void 0?"absolute":B,pe=h.boundaryInset,fe=pe===void 0?0:pe,Ze=h.onClickOutside,kt=h.clickOutsideCapture,Ee=kt===void 0?!1:kt,Ne=(0,i.useMemoizedArray)(Array.isArray(b)?b:[b]),Bt=(0,e.useRef)(!1),Oe=(0,e.useRef)(),Ct=(0,e.useRef)(E),ve=(0,e.useRef)(),Mt=(0,e.useState)({align:N,nudgedLeft:0,nudgedTop:0,position:Ne[0],padding:O,childRect:s.EMPTY_RECT,popoverRect:s.EMPTY_RECT,parentRect:s.EMPTY_RECT,boundaryRect:s.EMPTY_RECT,boundaryInset:fe,violations:s.EMPTY_RECT,hasViolations:!1}),ie=Mt[0],Qt=Mt[1],Tn=(0,e.useCallback)(function(I){return Qt(I)},[]),ut=(0,a.usePopover)({isOpen:g,childRef:ve,containerClassName:Z,parentElement:H,boundaryElement:j,transform:z,transformMode:F,positions:Ne,align:N,padding:O,boundaryInset:fe,reposition:E,onPositionPopover:Tn}),Je=ut.positionPopover,he=ut.popoverRef,be=ut.scoutRef;(0,e.useLayoutEffect)(function(){var I=!0,We=function(){var et,Rn;if(g&&I){var Cr=(et=ve==null?void 0:ve.current)===null||et===void 0?void 0:et.getBoundingClientRect(),Yn=(Rn=he==null?void 0:he.current)===null||Rn===void 0?void 0:Rn.getBoundingClientRect();Cr!=null&&Yn!=null&&(!(0,s.rectsAreEqual)(Cr,ie.childRect)||Yn.width!==ie.popoverRect.width||Yn.height!==ie.popoverRect.height||ie.padding!==O||ie.align!==N||Ne!==Oe.current||E!==Ct.current)&&Je(),Ne!==Oe.current&&(Oe.current=Ne),E!==Ct.current&&(Ct.current=E),I&&window.requestAnimationFrame(We)}Bt.current=g};return window.requestAnimationFrame(We),function(){I=!1}},[N,g,O,he,ie.align,ie.childRect,ie.padding,ie.popoverRect.height,ie.popoverRect.width,Je,Ne,E]),(0,e.useEffect)(function(){var I=he.current;return Object.assign(I.style,Y),function(){Object.keys(Y??{}).forEach(function(We){return delete I.style[We]})}},[Y,g,he]);var ce=(0,e.useCallback)(function(I){var We,et;g&&!(!((We=he.current)===null||We===void 0)&&We.contains(I.target))&&!(!((et=ve.current)===null||et===void 0)&&et.contains(I.target))&&(Ze==null||Ze(I))},[g,Ze,he]),oe=(0,e.useCallback)(function(){ve.current&&window.requestAnimationFrame(function(){return Je()})},[Je]);(0,e.useEffect)(function(){var I=H.ownerDocument.body;return I.addEventListener("click",ce,Ee),I.addEventListener("contextmenu",ce,Ee),I.addEventListener("resize",oe),function(){I.removeEventListener("click",ce,Ee),I.removeEventListener("contextmenu",ce,Ee),I.removeEventListener("resize",oe)}},[Ee,ce,oe,H]);var Fe=(0,e.useCallback)(function(I){ve.current=I,m!=null&&(typeof m=="object"?m.current=I:typeof m=="function"&&m(I))},[m]),zt=function(){return(0,e.cloneElement)(w,{ref:Fe})},Te=function(){return g?(0,t.jsx)(o.PopoverPortal,{element:he.current,scoutElement:be.current,container:H,children:typeof v=="function"?v(ie):v}):null};return(0,t.jsxs)(t.Fragment,{children:[zt(),Te()]})});n.Popover=(0,e.forwardRef)(function(h,m){return typeof window>"u"?h.children:(0,t.jsx)(p,r({},h,{ref:m}))})})(wa);const Rd=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 294px;
  background-color: ${({theme:n})=>n.color.white};
  border-radius: 10px;
  box-shadow: ${({theme:n})=>n.boxShadow.popoverShadow};
  padding: 24px 13px;

  @media ${({theme:n})=>n.device.tablet} {
    padding: 24px 16px;
    width: 292px;
  }

  h3 {
    color: ${({theme:n})=>n.color.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${({theme:n})=>n.color.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${({theme:n})=>n.color.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,Yd=({calendarRef:n,refData:r,day:t,month:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=`${t}, ${e}`;return f.jsxs(Rd,{children:[f.jsx("h3",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:i}),f.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["Daily norma:"," ",f.jsxs("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:[o?o/1e3:0," L"]})]}),f.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["Fulfillment of the daily norm:"," ",f.jsxs("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:[s,"%"]})]}),f.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["How many servings of water:"," ",f.jsx("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:a})]})]})},Mo=P.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.color.blue};
  cursor: pointer;
`,Id=P.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  height: 380px;
`,$d=P.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Ld=P.h2`
  color: ${({theme:n})=>n.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({theme:n})=>n.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,jd=P.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  fill: ${({theme:n})=>n.color.blue};
  position: absolute;
  top: 0;
  left: 125px;

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${({theme:n})=>n.color.skyBlue};
    cursor: not-allowed;
  }
`,Fd=P.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  fill: ${({theme:n})=>n.color.blue};
  position: absolute;
  top: 0;
  left: -20px;

  & svg {
    width: 14px;
    height: 14px;
  }
`,Wd=P.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${n=>n.$isToday?`${n.theme.color.paleBlue}`:`${n.theme.color.white}`};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${n=>n.$isOutlineVisible?`1px solid ${n.theme.color.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover,
  &:focus {
    box-shadow: ${({theme:n})=>n.boxShadow.calendarDayShadow};
  }

  @media ${({theme:n})=>n.device.tablet} {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,Ad=P.div`
  color: ${({theme:n})=>n.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -8px;
  left: 20px;
  @media ${({theme:n})=>n.device.tablet} {
    left: 30px;
  }
  width: 168px;
`,Hd=P.span`
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  top: -2px;
  right: 45px;
`,Bd=P.span`
  color: ${({theme:n})=>n.color.skyBlue};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media ${({theme:n})=>n.device.tablet} {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media ${({theme:n})=>n.device.desktop} {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`,Qd=P.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media ${({theme:n})=>n.device.tablet} {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media ${({theme:n})=>n.device.desktop} {
    column-gap: 22px;
  }
`,zd=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Kd=({calendarRef:n,day:r,month:t,year:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=new Date(e,t.monthNumber,r),c=new Date>=i,l=ad(new Date,i),[u,p]=D.useState(!1),h=D.useRef(null),m=w=>{h.current&&!h.current.contains(w.target)&&p(!1)};D.useEffect(()=>(document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[]);const g=()=>{p(w=>!w)};return f.jsxs(zd,{children:[f.jsx("div",{ref:h,children:f.jsx(wa.Popover,{isOpen:u,positions:["top","center"],reposition:!0,content:f.jsx(Yd,{calendarRef:n,refData:h,waterDay:s,day:r,month:t.monthName,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a}),onClickOutside:m,children:f.jsx(Wd,{onClick:g,$isOutlineVisible:s<100&&c,$isToday:l,children:r})})}),f.jsx(Bd,{children:`${s}%`})]},r)},Vd=()=>{const[n,r]=D.useState(new Date),t=ct(),e=D.useRef(null),o=Ye(Ao),s=Ye(Ds),a=Ye(Ms);D.useEffect(()=>{const g=n.getTimezoneOffset(),w=new Date(n.getFullYear(),n.getMonth(),1);w.setMinutes(w.getMinutes()-g);const v=new Date(n.getFullYear(),n.getMonth()+1,0);v.setMinutes(v.getMinutes()-g);const x=w.toISOString().split("T")[0],b=v.toISOString().split("T")[0];t(Ea({startDate:x,endDate:b}))},[t,n,o]);const i=()=>{const g=new Date(n.getFullYear(),n.getMonth()+1,1);r(g)},c=()=>{const g=new Date(n.getFullYear(),n.getMonth()-1,1);r(g)},l=()=>{const g=new Date;return n.getMonth()===g.getMonth()&&n.getFullYear()===g.getFullYear()},u=()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),p=()=>{const g=new Date(n).getMonth(),w=new Date(n).toLocaleString("en-US",{month:"long"});return{monthNumber:g,monthName:w}},h=()=>new Date(n).getFullYear(),m=()=>{const g=u(),w=p(),v=h();return Array.from({length:g},(x,b)=>{if(!s)return;const k=b+1,N=s.find(({entryDate:E})=>k===new Date(E).getDate()),M=N?N.consumedWaterPercentage:0,O=N?N.dailyWaterGoal:0,C=N?N.consumedTimes:0;return f.jsx(Kd,{day:k,month:w,year:v,dailyWaterGoal:O,consumedWaterPercentage:M,consumedTimes:C},k)})};return f.jsxs(Id,{className:"calendar",ref:e,children:[f.jsxs($d,{children:[f.jsx(Ld,{children:"Month"}),a&&f.jsx(yd,{height:"60",width:"60",radius:"9",color:"#5082F2",ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),f.jsxs(Ad,{children:[f.jsx(Fd,{"aria-label":"Previous month",onClick:c,children:f.jsx(Mo,{className:"uploadIcon",width:"16px",height:"16px",children:f.jsx("use",{xlinkHref:`${Ie}#arrow-left`})})}),f.jsx(Hd,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}, ${n.getFullYear()}`}),f.jsx(jd,{"aria-label":"Next month",onClick:i,disabled:l(),hidden:l(),children:f.jsx(Mo,{className:"uploadIcon",width:"16px",height:"16px",children:f.jsx("use",{xlinkHref:`${Ie}#arrow-right`})})})]})]}),f.jsx(Qd,{children:m()})]})},qd=P.div`
  background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesMob};
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  z-index: -10;

  @media ${({theme:n})=>n.device.tablet} {
    background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesTab};
    padding-bottom: 44px;
    z-index: -10;
  }

  @media ${({theme:n})=>n.device.desktop} {
    background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesDesk};
    padding-top: 20px;
    padding-bottom: 40px;
  }
`,Ud=P.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${({theme:n})=>n.device.desktop} {
    flex-direction: row;
  }
`,Xd=P.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Gd=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({theme:n})=>n.device.tablet} {
    flex: 1;
  }
`,Zd=P.div`
  background-color: ${({theme:n})=>n.color.lavender};
  padding: 24px 8px;
  width: 280px;
  height: 836px;
  border-radius: 10px;
  box-shadow: ${({theme:n})=>n.boxShadow.hoverButton};

  @media ${({theme:n})=>n.device.tablet} {
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    width: 592px;
    height: 680px;
  }
`,np=()=>f.jsx(Na,{children:f.jsx(qd,{children:f.jsxs(Ud,{children:[f.jsxs(Xd,{children:[f.jsx(qs,{}),f.jsx(td,{})]}),f.jsx(Gd,{children:f.jsxs(Zd,{children:[f.jsx(ud,{}),f.jsx(Vd,{})]})})]})})});export{np as default};
