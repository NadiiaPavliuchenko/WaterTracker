var Eo=Object.defineProperty;var Yo=(n,r,t)=>r in n?Eo(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t;var M=(n,r,t)=>(Yo(n,typeof r!="symbol"?r+"":r,t),t);import{r as k,a as jr,u as P,b as ve,c as Be,j as p,e as Ro,f as Wr,g as Io,d as $o,s as Le,h as Ht,M as Bt,i as Lo,k as Qt,l as Kt,R as Ar,m as w,n as Z,o as Fo,p as jo,q as Wo,t as Ao,v as Ho,w as Cn,x as Bo,W as Qo}from"./index-973f6912.js";import{b as Kn,a as Ko}from"./bottle_mob_2x-8d352aa4.js";const Ge=Math.min,Fe=Math.max,Nt=Math.round,xt=Math.floor,Ne=n=>({x:n,y:n}),zo={left:"right",right:"left",bottom:"top",top:"bottom"},Vo={start:"end",end:"start"};function qo(n,r,t){return Fe(n,Ge(r,t))}function zt(n,r){return typeof n=="function"?n(r):n}function Ze(n){return n.split("-")[0]}function mt(n){return n.split("-")[1]}function Uo(n){return n==="x"?"y":"x"}function _n(n){return n==="y"?"height":"width"}function Sn(n){return["top","bottom"].includes(Ze(n))?"y":"x"}function Pn(n){return Uo(Sn(n))}function Xo(n,r,t){t===void 0&&(t=!1);const e=mt(n),o=Pn(n),s=_n(o);let a=o==="x"?e===(t?"end":"start")?"right":"left":e==="start"?"bottom":"top";return r.reference[s]>r.floating[s]&&(a=Ot(a)),[a,Ot(a)]}function Go(n){const r=Ot(n);return[pn(n),r,pn(r)]}function pn(n){return n.replace(/start|end/g,r=>Vo[r])}function Zo(n,r,t){const e=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(n){case"top":case"bottom":return t?r?o:e:r?e:o;case"left":case"right":return r?s:a;default:return[]}}function Jo(n,r,t,e){const o=mt(n);let s=Zo(Ze(n),t==="start",e);return o&&(s=s.map(a=>a+"-"+o),r&&(s=s.concat(s.map(pn)))),s}function Ot(n){return n.replace(/left|right|bottom|top/g,r=>zo[r])}function ea(n){return{top:0,right:0,bottom:0,left:0,...n}}function Hr(n){return typeof n!="number"?ea(n):{top:n,right:n,bottom:n,left:n}}function Et(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function zn(n,r,t){let{reference:e,floating:o}=n;const s=Sn(r),a=Pn(r),i=_n(a),c=Ze(r),l=s==="y",d=e.x+e.width/2-o.width/2,f=e.y+e.height/2-o.height/2,m=e[i]/2-o[i]/2;let h;switch(c){case"top":h={x:d,y:e.y-o.height};break;case"bottom":h={x:d,y:e.y+e.height};break;case"right":h={x:e.x+e.width,y:f};break;case"left":h={x:e.x-o.width,y:f};break;default:h={x:e.x,y:e.y}}switch(mt(r)){case"start":h[a]-=m*(t&&l?-1:1);break;case"end":h[a]+=m*(t&&l?-1:1);break}return h}const ta=async(n,r,t)=>{const{placement:e="bottom",strategy:o="absolute",middleware:s=[],platform:a}=t,i=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(r));let l=await a.getElementRects({reference:n,floating:r,strategy:o}),{x:d,y:f}=zn(l,e,c),m=e,h={},g=0;for(let y=0;y<i.length;y++){const{name:x,fn:v}=i[y],{x:b,y:D,data:T,reset:_}=await v({x:d,y:f,initialPlacement:e,placement:m,strategy:o,middlewareData:h,rects:l,platform:a,elements:{reference:n,floating:r}});d=b??d,f=D??f,h={...h,[x]:{...h[x],...T}},_&&g<=50&&(g++,typeof _=="object"&&(_.placement&&(m=_.placement),_.rects&&(l=_.rects===!0?await a.getElementRects({reference:n,floating:r,strategy:o}):_.rects),{x:d,y:f}=zn(l,m,c)),y=-1)}return{x:d,y:f,placement:m,strategy:o,middlewareData:h}};async function na(n,r){var t;r===void 0&&(r={});const{x:e,y:o,platform:s,rects:a,elements:i,strategy:c}=n,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:m=!1,padding:h=0}=zt(r,n),g=Hr(h),x=i[m?f==="floating"?"reference":"floating":f],v=Et(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(x)))==null||t?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:l,rootBoundary:d,strategy:c})),b=f==="floating"?{...a.floating,x:e,y:o}:a.reference,D=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),T=await(s.isElement==null?void 0:s.isElement(D))?await(s.getScale==null?void 0:s.getScale(D))||{x:1,y:1}:{x:1,y:1},_=Et(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:b,offsetParent:D,strategy:c}):b);return{top:(v.top-_.top+g.top)/T.y,bottom:(_.bottom-v.bottom+g.bottom)/T.y,left:(v.left-_.left+g.left)/T.x,right:(_.right-v.right+g.right)/T.x}}const ra=n=>({name:"arrow",options:n,async fn(r){const{x:t,y:e,placement:o,rects:s,platform:a,elements:i,middlewareData:c}=r,{element:l,padding:d=0}=zt(n,r)||{};if(l==null)return{};const f=Hr(d),m={x:t,y:e},h=Pn(o),g=_n(h),y=await a.getDimensions(l),x=h==="y",v=x?"top":"left",b=x?"bottom":"right",D=x?"clientHeight":"clientWidth",T=s.reference[g]+s.reference[h]-m[h]-s.floating[g],_=m[h]-s.reference[h],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let C=O?O[D]:0;(!C||!await(a.isElement==null?void 0:a.isElement(O)))&&(C=i.floating[D]||s.floating[g]);const N=T/2-_/2,Y=C/2-y[g]/2-1,ne=Ge(f[v],Y),J=Ge(f[b],Y),A=ne,re=C-y[g]-J,V=C/2-y[g]/2+N,z=qo(A,V,re),oe=!c.arrow&&mt(o)!=null&&V!==z&&s.reference[g]/2-(V<A?ne:J)-y[g]/2<0,j=oe?V<A?V-A:V-re:0;return{[h]:m[h]+j,data:{[h]:z,centerOffset:V-z-j,...oe&&{alignmentOffset:j}},reset:oe}}}),oa=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var t,e;const{placement:o,middlewareData:s,rects:a,initialPlacement:i,platform:c,elements:l}=r,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...x}=zt(n,r);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const v=Ze(o),b=Ze(i)===i,D=await(c.isRTL==null?void 0:c.isRTL(l.floating)),T=m||(b||!y?[Ot(i)]:Go(i));!m&&g!=="none"&&T.push(...Jo(i,y,g,D));const _=[i,...T],O=await na(r,x),C=[];let N=((e=s.flip)==null?void 0:e.overflows)||[];if(d&&C.push(O[v]),f){const A=Xo(o,a,D);C.push(O[A[0]],O[A[1]])}if(N=[...N,{placement:o,overflows:C}],!C.every(A=>A<=0)){var Y,ne;const A=(((Y=s.flip)==null?void 0:Y.index)||0)+1,re=_[A];if(re)return{data:{index:A,overflows:N},reset:{placement:re}};let V=(ne=N.filter(z=>z.overflows[0]<=0).sort((z,oe)=>z.overflows[1]-oe.overflows[1])[0])==null?void 0:ne.placement;if(!V)switch(h){case"bestFit":{var J;const z=(J=N.map(oe=>[oe.placement,oe.overflows.filter(j=>j>0).reduce((j,Ke)=>j+Ke,0)]).sort((oe,j)=>oe[1]-j[1])[0])==null?void 0:J[0];z&&(V=z);break}case"initialPlacement":V=i;break}if(o!==V)return{reset:{placement:V}}}return{}}}};async function aa(n,r){const{placement:t,platform:e,elements:o}=n,s=await(e.isRTL==null?void 0:e.isRTL(o.floating)),a=Ze(t),i=mt(t),c=Sn(t)==="y",l=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,f=zt(r,n);let{mainAxis:m,crossAxis:h,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return i&&typeof g=="number"&&(h=i==="end"?g*-1:g),c?{x:h*d,y:m*l}:{x:m*l,y:h*d}}const sa=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var t,e;const{x:o,y:s,placement:a,middlewareData:i}=r,c=await aa(r,n);return a===((t=i.offset)==null?void 0:t.placement)&&(e=i.arrow)!=null&&e.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:a}}}}};function Oe(n){return Br(n)?(n.nodeName||"").toLowerCase():"#document"}function ie(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Me(n){var r;return(r=(Br(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Br(n){return n instanceof Node||n instanceof ie(n).Node}function se(n){return n instanceof Element||n instanceof ie(n).Element}function xe(n){return n instanceof HTMLElement||n instanceof ie(n).HTMLElement}function Vn(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ie(n).ShadowRoot}function gt(n){const{overflow:r,overflowX:t,overflowY:e,display:o}=le(n);return/auto|scroll|overlay|hidden|clip/.test(r+e+t)&&!["inline","contents"].includes(o)}function ia(n){return["table","td","th"].includes(Oe(n))}function Tn(n){const r=Nn(),t=le(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(e=>(t.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(t.contain||"").includes(e))}function ca(n){let r=Je(n);for(;xe(r)&&!Vt(r);){if(Tn(r))return r;r=Je(r)}return null}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vt(n){return["html","body","#document"].includes(Oe(n))}function le(n){return ie(n).getComputedStyle(n)}function qt(n){return se(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function Je(n){if(Oe(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Vn(n)&&n.host||Me(n);return Vn(r)?r.host:r}function Qr(n){const r=Je(n);return Vt(r)?n.ownerDocument?n.ownerDocument.body:n.body:xe(r)&&gt(r)?r:Qr(r)}function ut(n,r,t){var e;r===void 0&&(r=[]),t===void 0&&(t=!0);const o=Qr(n),s=o===((e=n.ownerDocument)==null?void 0:e.body),a=ie(o);return s?r.concat(a,a.visualViewport||[],gt(o)?o:[],a.frameElement&&t?ut(a.frameElement):[]):r.concat(o,ut(o,[],t))}function Kr(n){const r=le(n);let t=parseFloat(r.width)||0,e=parseFloat(r.height)||0;const o=xe(n),s=o?n.offsetWidth:t,a=o?n.offsetHeight:e,i=Nt(t)!==s||Nt(e)!==a;return i&&(t=s,e=a),{width:t,height:e,$:i}}function On(n){return se(n)?n:n.contextElement}function Ue(n){const r=On(n);if(!xe(r))return Ne(1);const t=r.getBoundingClientRect(),{width:e,height:o,$:s}=Kr(r);let a=(s?Nt(t.width):t.width)/e,i=(s?Nt(t.height):t.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const la=Ne(0);function zr(n){const r=ie(n);return!Nn()||!r.visualViewport?la:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function ua(n,r,t){return r===void 0&&(r=!1),!t||r&&t!==ie(n)?!1:r}function We(n,r,t,e){r===void 0&&(r=!1),t===void 0&&(t=!1);const o=n.getBoundingClientRect(),s=On(n);let a=Ne(1);r&&(e?se(e)&&(a=Ue(e)):a=Ue(n));const i=ua(s,t,e)?zr(s):Ne(0);let c=(o.left+i.x)/a.x,l=(o.top+i.y)/a.y,d=o.width/a.x,f=o.height/a.y;if(s){const m=ie(s),h=e&&se(e)?ie(e):e;let g=m,y=g.frameElement;for(;y&&e&&h!==g;){const x=Ue(y),v=y.getBoundingClientRect(),b=le(y),D=v.left+(y.clientLeft+parseFloat(b.paddingLeft))*x.x,T=v.top+(y.clientTop+parseFloat(b.paddingTop))*x.y;c*=x.x,l*=x.y,d*=x.x,f*=x.y,c+=D,l+=T,g=ie(y),y=g.frameElement}}return Et({width:d,height:f,x:c,y:l})}const da=[":popover-open",":modal"];function Vr(n){return da.some(r=>{try{return n.matches(r)}catch{return!1}})}function pa(n){let{elements:r,rect:t,offsetParent:e,strategy:o}=n;const s=o==="fixed",a=Me(e),i=r?Vr(r.floating):!1;if(e===a||i&&s)return t;let c={scrollLeft:0,scrollTop:0},l=Ne(1);const d=Ne(0),f=xe(e);if((f||!f&&!s)&&((Oe(e)!=="body"||gt(a))&&(c=qt(e)),xe(e))){const m=We(e);l=Ue(e),d.x=m.x+e.clientLeft,d.y=m.y+e.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+d.x,y:t.y*l.y-c.scrollTop*l.y+d.y}}function fa(n){return Array.from(n.getClientRects())}function qr(n){return We(Me(n)).left+qt(n).scrollLeft}function ha(n){const r=Me(n),t=qt(n),e=n.ownerDocument.body,o=Fe(r.scrollWidth,r.clientWidth,e.scrollWidth,e.clientWidth),s=Fe(r.scrollHeight,r.clientHeight,e.scrollHeight,e.clientHeight);let a=-t.scrollLeft+qr(n);const i=-t.scrollTop;return le(e).direction==="rtl"&&(a+=Fe(r.clientWidth,e.clientWidth)-o),{width:o,height:s,x:a,y:i}}function ma(n,r){const t=ie(n),e=Me(n),o=t.visualViewport;let s=e.clientWidth,a=e.clientHeight,i=0,c=0;if(o){s=o.width,a=o.height;const l=Nn();(!l||l&&r==="fixed")&&(i=o.offsetLeft,c=o.offsetTop)}return{width:s,height:a,x:i,y:c}}function ga(n,r){const t=We(n,!0,r==="fixed"),e=t.top+n.clientTop,o=t.left+n.clientLeft,s=xe(n)?Ue(n):Ne(1),a=n.clientWidth*s.x,i=n.clientHeight*s.y,c=o*s.x,l=e*s.y;return{width:a,height:i,x:c,y:l}}function qn(n,r,t){let e;if(r==="viewport")e=ma(n,t);else if(r==="document")e=ha(Me(n));else if(se(r))e=ga(r,t);else{const o=zr(n);e={...r,x:r.x-o.x,y:r.y-o.y}}return Et(e)}function Ur(n,r){const t=Je(n);return t===r||!se(t)||Vt(t)?!1:le(t).position==="fixed"||Ur(t,r)}function wa(n,r){const t=r.get(n);if(t)return t;let e=ut(n,[],!1).filter(i=>se(i)&&Oe(i)!=="body"),o=null;const s=le(n).position==="fixed";let a=s?Je(n):n;for(;se(a)&&!Vt(a);){const i=le(a),c=Tn(a);!c&&i.position==="fixed"&&(o=null),(s?!c&&!o:!c&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||gt(a)&&!c&&Ur(n,a))?e=e.filter(d=>d!==a):o=i,a=Je(a)}return r.set(n,e),e}function ya(n){let{element:r,boundary:t,rootBoundary:e,strategy:o}=n;const a=[...t==="clippingAncestors"?wa(r,this._c):[].concat(t),e],i=a[0],c=a.reduce((l,d)=>{const f=qn(r,d,o);return l.top=Fe(f.top,l.top),l.right=Ge(f.right,l.right),l.bottom=Ge(f.bottom,l.bottom),l.left=Fe(f.left,l.left),l},qn(r,i,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xa(n){const{width:r,height:t}=Kr(n);return{width:r,height:t}}function ba(n,r,t){const e=xe(r),o=Me(r),s=t==="fixed",a=We(n,!0,s,r);let i={scrollLeft:0,scrollTop:0};const c=Ne(0);if(e||!e&&!s)if((Oe(r)!=="body"||gt(o))&&(i=qt(r)),e){const f=We(r,!0,s,r);c.x=f.x+r.clientLeft,c.y=f.y+r.clientTop}else o&&(c.x=qr(o));const l=a.left+i.scrollLeft-c.x,d=a.top+i.scrollTop-c.y;return{x:l,y:d,width:a.width,height:a.height}}function Un(n,r){return!xe(n)||le(n).position==="fixed"?null:r?r(n):n.offsetParent}function Xr(n,r){const t=ie(n);if(!xe(n)||Vr(n))return t;let e=Un(n,r);for(;e&&ia(e)&&le(e).position==="static";)e=Un(e,r);return e&&(Oe(e)==="html"||Oe(e)==="body"&&le(e).position==="static"&&!Tn(e))?t:e||ca(n)||t}const va=async function(n){const r=this.getOffsetParent||Xr,t=this.getDimensions;return{reference:ba(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,...await t(n.floating)}}};function Da(n){return le(n).direction==="rtl"}const Gr={convertOffsetParentRelativeRectToViewportRelativeRect:pa,getDocumentElement:Me,getClippingRect:ya,getOffsetParent:Xr,getElementRects:va,getClientRects:fa,getDimensions:xa,getScale:Ue,isElement:se,isRTL:Da};function ka(n,r){let t=null,e;const o=Me(n);function s(){var i;clearTimeout(e),(i=t)==null||i.disconnect(),t=null}function a(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),s();const{left:l,top:d,width:f,height:m}=n.getBoundingClientRect();if(i||r(),!f||!m)return;const h=xt(d),g=xt(o.clientWidth-(l+f)),y=xt(o.clientHeight-(d+m)),x=xt(l),b={rootMargin:-h+"px "+-g+"px "+-y+"px "+-x+"px",threshold:Fe(0,Ge(1,c))||1};let D=!0;function T(_){const O=_[0].intersectionRatio;if(O!==c){if(!D)return a();O?a(!1,O):e=setTimeout(()=>{a(!1,1e-7)},100)}D=!1}try{t=new IntersectionObserver(T,{...b,root:o.ownerDocument})}catch{t=new IntersectionObserver(T,b)}t.observe(n)}return a(!0),s}function Ma(n,r,t,e){e===void 0&&(e={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=e,l=On(n),d=o||s?[...l?ut(l):[],...ut(r)]:[];d.forEach(v=>{o&&v.addEventListener("scroll",t,{passive:!0}),s&&v.addEventListener("resize",t)});const f=l&&i?ka(l,t):null;let m=-1,h=null;a&&(h=new ResizeObserver(v=>{let[b]=v;b&&b.target===l&&h&&(h.unobserve(r),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var D;(D=h)==null||D.observe(r)})),t()}),l&&!c&&h.observe(l),h.observe(r));let g,y=c?We(n):null;c&&x();function x(){const v=We(n);y&&(v.x!==y.x||v.y!==y.y||v.width!==y.width||v.height!==y.height)&&t(),y=v,g=requestAnimationFrame(x)}return t(),()=>{var v;d.forEach(b=>{o&&b.removeEventListener("scroll",t),s&&b.removeEventListener("resize",t)}),f==null||f(),(v=h)==null||v.disconnect(),h=null,c&&cancelAnimationFrame(g)}}const Ca=oa,Xn=ra,_a=(n,r,t)=>{const e=new Map,o={platform:Gr,...t},s={...o.platform,_c:e};return ta(n,r,{...o,platform:s})},Sa=n=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:e,padding:o}=typeof n=="function"?n(t):n;return e&&r(e)?e.current!=null?Xn({element:e.current,padding:o}).fn(t):{}:e?Xn({element:e,padding:o}).fn(t):{}}}};var _t=typeof document<"u"?k.useLayoutEffect:k.useEffect;function Yt(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let t,e,o;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==r.length)return!1;for(e=t;e--!==0;)if(!Yt(n[e],r[e]))return!1;return!0}if(o=Object.keys(n),t=o.length,t!==Object.keys(r).length)return!1;for(e=t;e--!==0;)if(!{}.hasOwnProperty.call(r,o[e]))return!1;for(e=t;e--!==0;){const s=o[e];if(!(s==="_owner"&&n.$$typeof)&&!Yt(n[s],r[s]))return!1}return!0}return n!==n&&r!==r}function Zr(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Gn(n,r){const t=Zr(n);return Math.round(r*t)/t}function Zn(n){const r=k.useRef(n);return _t(()=>{r.current=n}),r}function Pa(n){n===void 0&&(n={});const{placement:r="bottom",strategy:t="absolute",middleware:e=[],platform:o,elements:{reference:s,floating:a}={},transform:i=!0,whileElementsMounted:c,open:l}=n,[d,f]=k.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[m,h]=k.useState(e);Yt(m,e)||h(e);const[g,y]=k.useState(null),[x,v]=k.useState(null),b=k.useCallback(j=>{j!==O.current&&(O.current=j,y(j))},[]),D=k.useCallback(j=>{j!==C.current&&(C.current=j,v(j))},[]),T=s||g,_=a||x,O=k.useRef(null),C=k.useRef(null),N=k.useRef(d),Y=c!=null,ne=Zn(c),J=Zn(o),A=k.useCallback(()=>{if(!O.current||!C.current)return;const j={placement:r,strategy:t,middleware:m};J.current&&(j.platform=J.current),_a(O.current,C.current,j).then(Ke=>{const ze={...Ke,isPositioned:!0};re.current&&!Yt(N.current,ze)&&(N.current=ze,jr.flushSync(()=>{f(ze)}))})},[m,r,t,J]);_t(()=>{l===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,f(j=>({...j,isPositioned:!1})))},[l]);const re=k.useRef(!1);_t(()=>(re.current=!0,()=>{re.current=!1}),[]),_t(()=>{if(T&&(O.current=T),_&&(C.current=_),T&&_){if(ne.current)return ne.current(T,_,A);A()}},[T,_,A,ne,Y]);const V=k.useMemo(()=>({reference:O,floating:C,setReference:b,setFloating:D}),[b,D]),z=k.useMemo(()=>({reference:T,floating:_}),[T,_]),oe=k.useMemo(()=>{const j={position:t,left:0,top:0};if(!z.floating)return j;const Ke=Gn(z.floating,d.x),ze=Gn(z.floating,d.y);return i?{...j,transform:"translate("+Ke+"px, "+ze+"px)",...Zr(z.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:Ke,top:ze}},[t,i,z.floating,d.x,d.y]);return k.useMemo(()=>({...d,update:A,refs:V,elements:z,floatingStyles:oe}),[d,A,V,z,oe])}const Ta=P.h3`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
`,Na=P.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Jn=P.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,er=P.input`
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
`,tr=P.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,nr=P.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,rr=P.svg`
  width: 12px;
  height: 12px;
`,or=P.label`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,fn=P.input`
  background-color: transparent;
  border: 1px solid ${({theme:n})=>n.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
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
    /* font-weight: 400; */
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
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:n})=>n.color.skyBlue};
  }
`,Oa=P.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 24px;
`,Ea=P.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  width: 190px;

  @media ${({theme:n})=>n.device.tablet} {
    width: auto;
  }
`,Ya=P.p`
  font-family: 'Roboto-Bold', sans-serif;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,Ra=P.label`
  font-family: 'Roboto-Medium';
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
`,Ia=P.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({theme:n})=>n.boxShadow.normalButton};
  background: ${({theme:n})=>n.color.blue};
  font-family: 'Roboto-Medium', sans-serif;
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
`,ct=P.p`
  position: absolute;
  bottom: -20px;
  left: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({theme:n})=>n.color.red};
`,$a=n=>n.water.month,Jr=n=>n.water.dayInfo,La=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.consumedWaterPercentage},Fa=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.dailyWaterGoal},ja=n=>n.water.dayDataLoading,Wa=({closeModal:n})=>{const t=(ve(Fa)/1e3).toFixed(1),[e,o]=k.useState(""),[s,a]=k.useState(!0),i=15,c=f=>{const{value:m}=f.target,h=/^(\d+([.,]\d{0,1})?)?$/;var g=m;m.match(/^[.,]/)?g="0"+m:g=m.replace(/^0+([^.])/,"$1"),a(g===""||parseFloat(g.replace(",","."))<=i),h.test(g)&&o(g)},l=Be(),d=async f=>{if(f.preventDefault(),!s||e<=0)return;const m=f.target.elements.dailyNorm.value*1e3;try{const{payload:h}=await l(Ro(m));h.user&&(l(Wr()),n())}catch(h){console.log("🚀 ~ error:",h)}};return p.jsxs("form",{onSubmit:d,children:[p.jsxs(Ra,{children:["Write down how much water you will drink:",p.jsx(fn,{className:!s&&e<=0?"error":"",type:"number",name:"dailyNorm",value:e,onChange:c,placeholder:t}),!s&&p.jsx(ct,{children:`The water rate cannot exceed ${i} liters`}),e<0&&p.jsx(ct,{children:"The water rate cannot be negative"}),parseFloat(e)===0&&p.jsx(ct,{children:"The water rate cannot be 0"})]}),p.jsx(Ia,{className:"confirm",type:"submit",children:"Save"})]})},Aa=()=>{const n=ve(Io),[r,t]=k.useState(n),[e,o]=k.useState(""),[s,a]=k.useState(""),[i,c]=k.useState(!0),[l,d]=k.useState(!0),f=ve($o)?"dark":"light",h=`radio-${r==="woman"?"active":"inactive"}-${f}`,y=`radio-${r==="man"?"active":"inactive"}-${f}`,x=300,v=12,b=_=>{const{name:O,value:C}=_.target,N=/^(\d+([.,]\d{0,1})?)?$/;var Y=C;switch(O){case"gender":t(C);break;case"weight":C.match(/^[.,]/)?Y="0"+C:Y=C.replace(/^0+([^.])/,"$1"),c(Y===""||parseFloat(Y.replace(",","."))<=x),N.test(Y)&&o(Y);break;case"activeHours":C.match(/^[.,]/)?Y="0"+C:Y=C.replace(/^0+([^.])/,"$1"),d(Y===""||parseFloat(Y.replace(",","."))<=v),N.test(Y)&&a(Y);break}},D=r==="woman"?e*.03+s*.4:e*.04+s*.6,T=Math.round(D*10)/10;return p.jsx("div",{children:p.jsxs("form",{action:"",children:[p.jsx(Ta,{children:"Calculate your rate:"}),p.jsxs(Na,{children:[p.jsxs(Jn,{children:[p.jsx(er,{id:"woman",type:"radio",name:"gender",value:"woman",checked:r==="woman",onChange:b}),p.jsxs(tr,{htmlFor:"woman",children:[p.jsx(nr,{children:p.jsx(rr,{children:p.jsx("use",{href:`${Le}#${h}`})})}),"For woman"]})]}),p.jsxs(Jn,{children:[p.jsx(er,{id:"man",type:"radio",name:"gender",value:"man",checked:r==="man",onChange:b}),p.jsxs(tr,{htmlFor:"man",children:[p.jsx(nr,{children:p.jsx(rr,{children:p.jsx("use",{href:`${Le}#${y}`})})}),"For man"]})]})]}),p.jsxs(or,{children:["Your weight in kilograms:",p.jsx(fn,{className:i?"":"error",type:"number",name:"weight",value:e,onChange:b,placeholder:"0"}),!i&&p.jsx(ct,{children:`Weight cannot exceed ${x} kg`})]}),p.jsxs(or,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",p.jsx(fn,{className:l?"":"error",type:"number",name:"activeHours",value:s,onChange:b,placeholder:"0"}),!l&&p.jsx(ct,{children:`Active hours cannot exceed ${v} hours`})]}),p.jsxs(Oa,{children:[p.jsxs(Ea,{children:["The required amount of water in liters per day:"," "]}),i&&l&&p.jsxs(Ya,{children:[T," L"]})]})]})})},Ha=P.div`
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
`,Ba=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Qa=P.h2`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 26px;
  line-height: 1.23077;
  /* color: #2f2f2f; */
`,Ka=P(Ht)`
  color: ${({theme:n})=>n.color.blue};
  cursor: pointer;
`,za=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,ar=P.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`,sr=P.span`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,Va=P.div`
  border: 1px solid ${({theme:n})=>n.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,qa=P.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,Ua=P.span`
  color: ${({theme:n})=>n.color.blue};
`,Xa=({isModalOpen:n,closeModal:r})=>p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(Ha,{children:[p.jsxs("div",{children:[p.jsxs(Ba,{className:"topline",children:[p.jsx(Qa,{children:"My daily norm"}),p.jsx(Ka,{className:"close",onClick:r})]}),p.jsxs(za,{children:[p.jsxs(ar,{children:["For woman: ",p.jsx(sr,{children:"V=(M*0,03) + (T*0,4)"})]}),p.jsxs(ar,{children:["For man: ",p.jsx(sr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),p.jsx(Va,{children:p.jsxs(qa,{children:[p.jsx(Ua,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),p.jsx("div",{children:p.jsx(Aa,{})}),p.jsx("div",{children:p.jsx(Wa,{closeModal:r})})]})})}),Ga=P.div`
  position: relative;
  /* z-index: -1; */
`,Za=P.div`
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
`,Ja=P.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,es=P.button`
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
`,ts=P.p`
  color: ${({theme:n})=>n.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,ns=P.div`
  display: flex;
  gap: 12px;
`,rs=P.img`
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
`,os="/WaterTrackerFrontend/assets/bottle_tab-881bc7f1.png",as="/WaterTrackerFrontend/assets/bottle_tab_2x-f93ca187.png",ss="/WaterTrackerFrontend/assets/bottle_desk-1f4873df.png",is="/WaterTrackerFrontend/assets/bottle_desk_2x-dc99a824.png",cs=()=>{const{dailyWaterGoal:n}=ve(Lo),[r,t]=k.useState(!1),e=Be(),o=()=>{t(!0)},s=()=>{t(!1)},a=(n/1e3).toFixed(1)+" L";return k.useEffect(()=>{e(Wr())},[e]),p.jsxs(Ga,{children:[p.jsxs(Za,{children:[p.jsx(Ja,{children:"My daily norma: "}),p.jsxs(ns,{children:[p.jsx(ts,{children:a}),p.jsx(es,{onClick:o,children:"Edit"})]}),p.jsx(Xa,{isModalOpen:r,closeModal:s})]}),p.jsxs("picture",{className:"bottle",children:[p.jsx("source",{srcSet:`${ss} 1x, ${is} 2x`,media:"(min-width: 1440px)",type:"image/png"}),p.jsx("source",{srcSet:`${os} 1x, ${as} 2x`,media:"(min-width: 768px)",type:"image/png"}),p.jsx("source",{srcSet:`${Kn} 1x, ${Ko} 2x`,media:"(min-width: 320px)",type:"image/png"}),p.jsx(rs,{className:"bottle",alt:"bottle of water",src:Kn})]})]})},ls=P.div`
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
    }
  }

  @media ${({theme:n})=>n.device.desktop} {
    margin-top: 466px;
  }
`,us=P.div`
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
`,ds=P.button`
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
`,ps=P.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.color.white};
`;var En={},fs=Kt;Object.defineProperty(En,"__esModule",{value:!0});var Yn=En.default=void 0,hs=fs(Qt()),ms=p;Yn=En.default=(0,hs.default)((0,ms.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var Rn={},gs=Kt;Object.defineProperty(Rn,"__esModule",{value:!0});var In=Rn.default=void 0,ws=gs(Qt()),ys=p;In=Rn.default=(0,ws.default)((0,ys.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function Ae(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function S(n){const r=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&r==="[object Date]"?new n.constructor(+n):typeof n=="number"||r==="[object Number]"||typeof n=="string"||r==="[object String]"?new Date(n):new Date(NaN)}function dt(n){if(!Ae(n)&&typeof n!="number")return!1;const r=S(n);return!isNaN(Number(r))}const xs={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bs=(n,r,t)=>{let e;const o=xs[n];return typeof o=="string"?e=o:r===1?e=o.one:e=o.other.replace("{{count}}",r.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+e:e+" ago":e};function en(n){return(r={})=>{const t=r.width?String(r.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const vs={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ds={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ks={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ms={date:en({formats:vs,defaultWidth:"full"}),time:en({formats:Ds,defaultWidth:"full"}),dateTime:en({formats:ks,defaultWidth:"full"})},Cs={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_s=(n,r,t,e)=>Cs[n];function rt(n){return(r,t)=>{const e=t!=null&&t.context?String(t.context):"standalone";let o;if(e==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,i=t!=null&&t.width?String(t.width):a;o=n.formattingValues[i]||n.formattingValues[a]}else{const a=n.defaultWidth,i=t!=null&&t.width?String(t.width):n.defaultWidth;o=n.values[i]||n.values[a]}const s=n.argumentCallback?n.argumentCallback(r):r;return o[s]}}const Ss={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ps={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ts={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ns={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Os={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Es={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ys=(n,r)=>{const t=Number(n),e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Rs={ordinalNumber:Ys,era:rt({values:Ss,defaultWidth:"wide"}),quarter:rt({values:Ps,defaultWidth:"wide",argumentCallback:n=>n-1}),month:rt({values:Ts,defaultWidth:"wide"}),day:rt({values:Ns,defaultWidth:"wide"}),dayPeriod:rt({values:Os,defaultWidth:"wide",formattingValues:Es,defaultFormattingWidth:"wide"})};function ot(n){return(r,t={})=>{const e=t.width,o=e&&n.matchPatterns[e]||n.matchPatterns[n.defaultMatchWidth],s=r.match(o);if(!s)return null;const a=s[0],i=e&&n.parsePatterns[e]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(i)?$s(i,f=>f.test(a)):Is(i,f=>f.test(a));let l;l=n.valueCallback?n.valueCallback(c):c,l=t.valueCallback?t.valueCallback(l):l;const d=r.slice(a.length);return{value:l,rest:d}}}function Is(n,r){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&r(n[t]))return t}function $s(n,r){for(let t=0;t<n.length;t++)if(r(n[t]))return t}function Ls(n){return(r,t={})=>{const e=r.match(n.matchPattern);if(!e)return null;const o=e[0],s=r.match(n.parsePattern);if(!s)return null;let a=n.valueCallback?n.valueCallback(s[0]):s[0];a=t.valueCallback?t.valueCallback(a):a;const i=r.slice(o.length);return{value:a,rest:i}}}const Fs=/^(\d+)(th|st|nd|rd)?/i,js=/\d+/i,Ws={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},As={any:[/^b/i,/^(a|c)/i]},Hs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Bs={any:[/1/i,/2/i,/3/i,/4/i]},Qs={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ks={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zs={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Vs={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qs={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Us={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xs={ordinalNumber:Ls({matchPattern:Fs,parsePattern:js,valueCallback:n=>parseInt(n,10)}),era:ot({matchPatterns:Ws,defaultMatchWidth:"wide",parsePatterns:As,defaultParseWidth:"any"}),quarter:ot({matchPatterns:Hs,defaultMatchWidth:"wide",parsePatterns:Bs,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ot({matchPatterns:Qs,defaultMatchWidth:"wide",parsePatterns:Ks,defaultParseWidth:"any"}),day:ot({matchPatterns:zs,defaultMatchWidth:"wide",parsePatterns:Vs,defaultParseWidth:"any"}),dayPeriod:ot({matchPatterns:qs,defaultMatchWidth:"any",parsePatterns:Us,defaultParseWidth:"any"})},eo={code:"en-US",formatDistance:bs,formatLong:Ms,formatRelative:_s,localize:Rs,match:Xs,options:{weekStartsOn:0,firstWeekContainsDate:1}};let Gs={};function Qe(){return Gs}const to=6048e5,Zs=864e5,Ut=6e4,Xt=36e5,Js=1e3;function ge(n){const r=S(n);return r.setHours(0,0,0,0),r}function Rt(n){const r=S(n),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+n-+t}function pt(n,r){const t=ge(n),e=ge(r),o=+t-Rt(t),s=+e-Rt(e);return Math.round((o-s)/Zs)}function L(n,r){return n instanceof Date?new n.constructor(r):new Date(r)}function $n(n){const r=S(n),t=L(n,0);return t.setFullYear(r.getFullYear(),0,1),t.setHours(0,0,0,0),t}function ei(n){const r=S(n);return pt(r,$n(r))+1}function ke(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?7:0)+s-e;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function et(n){return ke(n,{weekStartsOn:1})}function no(n){const r=S(n),t=r.getFullYear(),e=L(n,0);e.setFullYear(t+1,0,4),e.setHours(0,0,0,0);const o=et(e),s=L(n,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const a=et(s);return r.getTime()>=o.getTime()?t+1:r.getTime()>=a.getTime()?t:t-1}function ti(n){const r=no(n),t=L(n,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),et(t)}function Ln(n){const r=S(n),t=+et(r)-+ti(r);return Math.round(t/to)+1}function Fn(n,r){var d,f,m,h;const t=S(n),e=t.getFullYear(),o=Qe(),s=(r==null?void 0:r.firstWeekContainsDate)??((f=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??o.firstWeekContainsDate??((h=(m=o.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??1,a=L(n,0);a.setFullYear(e+1,0,s),a.setHours(0,0,0,0);const i=ke(a,r),c=L(n,0);c.setFullYear(e,0,s),c.setHours(0,0,0,0);const l=ke(c,r);return t.getTime()>=i.getTime()?e+1:t.getTime()>=l.getTime()?e:e-1}function ni(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.firstWeekContainsDate)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,o=Fn(n,r),s=L(n,0);return s.setFullYear(o,0,e),s.setHours(0,0,0,0),ke(s,r)}function ro(n,r){const t=S(n),e=+ke(t,r)-+ni(t,r);return Math.round(e/to)+1}function $(n,r){const t=n<0?"-":"",e=Math.abs(n).toString().padStart(r,"0");return t+e}const Ce={y(n,r){const t=n.getFullYear(),e=t>0?t:1-t;return $(r==="yy"?e%100:e,r.length)},M(n,r){const t=n.getMonth();return r==="M"?String(t+1):$(t+1,2)},d(n,r){return $(n.getDate(),r.length)},a(n,r){const t=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,r){return $(n.getHours()%12||12,r.length)},H(n,r){return $(n.getHours(),r.length)},m(n,r){return $(n.getMinutes(),r.length)},s(n,r){return $(n.getSeconds(),r.length)},S(n,r){const t=r.length,e=n.getMilliseconds(),o=Math.trunc(e*Math.pow(10,t-3));return $(o,r.length)}},Ve={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ir={G:function(n,r,t){const e=n.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})}},y:function(n,r,t){if(r==="yo"){const e=n.getFullYear(),o=e>0?e:1-e;return t.ordinalNumber(o,{unit:"year"})}return Ce.y(n,r)},Y:function(n,r,t,e){const o=Fn(n,e),s=o>0?o:1-o;if(r==="YY"){const a=s%100;return $(a,2)}return r==="Yo"?t.ordinalNumber(s,{unit:"year"}):$(s,r.length)},R:function(n,r){const t=no(n);return $(t,r.length)},u:function(n,r){const t=n.getFullYear();return $(t,r.length)},Q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"Q":return String(e);case"QQ":return $(e,2);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})}},q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"q":return String(e);case"qq":return $(e,2);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})}},M:function(n,r,t){const e=n.getMonth();switch(r){case"M":case"MM":return Ce.M(n,r);case"Mo":return t.ordinalNumber(e+1,{unit:"month"});case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})}},L:function(n,r,t){const e=n.getMonth();switch(r){case"L":return String(e+1);case"LL":return $(e+1,2);case"Lo":return t.ordinalNumber(e+1,{unit:"month"});case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})}},w:function(n,r,t,e){const o=ro(n,e);return r==="wo"?t.ordinalNumber(o,{unit:"week"}):$(o,r.length)},I:function(n,r,t){const e=Ln(n);return r==="Io"?t.ordinalNumber(e,{unit:"week"}):$(e,r.length)},d:function(n,r,t){return r==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):Ce.d(n,r)},D:function(n,r,t){const e=ei(n);return r==="Do"?t.ordinalNumber(e,{unit:"dayOfYear"}):$(e,r.length)},E:function(n,r,t){const e=n.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})}},e:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return $(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return $(s,r.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(n,r,t){const e=n.getDay(),o=e===0?7:e;switch(r){case"i":return String(o);case"ii":return $(o,r.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(e,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(e,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(e,{width:"short",context:"formatting"});case"iiii":default:return t.day(e,{width:"wide",context:"formatting"})}},a:function(n,r,t){const o=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,r,t){const e=n.getHours();let o;switch(e===12?o=Ve.noon:e===0?o=Ve.midnight:o=e/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,r,t){const e=n.getHours();let o;switch(e>=17?o=Ve.evening:e>=12?o=Ve.afternoon:e>=4?o=Ve.morning:o=Ve.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,r,t){if(r==="ho"){let e=n.getHours()%12;return e===0&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return Ce.h(n,r)},H:function(n,r,t){return r==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):Ce.H(n,r)},K:function(n,r,t){const e=n.getHours()%12;return r==="Ko"?t.ordinalNumber(e,{unit:"hour"}):$(e,r.length)},k:function(n,r,t){let e=n.getHours();return e===0&&(e=24),r==="ko"?t.ordinalNumber(e,{unit:"hour"}):$(e,r.length)},m:function(n,r,t){return r==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):Ce.m(n,r)},s:function(n,r,t){return r==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):Ce.s(n,r)},S:function(n,r){return Ce.S(n,r)},X:function(n,r,t){const e=n.getTimezoneOffset();if(e===0)return"Z";switch(r){case"X":return lr(e);case"XXXX":case"XX":return Ie(e);case"XXXXX":case"XXX":default:return Ie(e,":")}},x:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"x":return lr(e);case"xxxx":case"xx":return Ie(e);case"xxxxx":case"xxx":default:return Ie(e,":")}},O:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+cr(e,":");case"OOOO":default:return"GMT"+Ie(e,":")}},z:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+cr(e,":");case"zzzz":default:return"GMT"+Ie(e,":")}},t:function(n,r,t){const e=Math.trunc(n.getTime()/1e3);return $(e,r.length)},T:function(n,r,t){const e=n.getTime();return $(e,r.length)}};function cr(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=Math.trunc(e/60),s=e%60;return s===0?t+String(o):t+String(o)+r+$(s,2)}function lr(n,r){return n%60===0?(n>0?"-":"+")+$(Math.abs(n)/60,2):Ie(n,r)}function Ie(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=$(Math.trunc(e/60),2),s=$(e%60,2);return t+o+r+s}const ur=(n,r)=>{switch(n){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},oo=(n,r)=>{switch(n){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},ri=(n,r)=>{const t=n.match(/(P+)(p+)?/)||[],e=t[1],o=t[2];if(!o)return ur(n,r);let s;switch(e){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",ur(e,r)).replace("{{time}}",oo(o,r))},It={p:oo,P:ri},oi=/^D+$/,ai=/^Y+$/,si=["D","DD","YY","YYYY"];function ao(n){return oi.test(n)}function so(n){return ai.test(n)}function hn(n,r,t){const e=ii(n,r,t);if(console.warn(e),si.includes(n))throw new RangeError(e)}function ii(n,r,t){const e=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ci=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,li=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ui=/^'([^]*?)'?$/,di=/''/g,pi=/[a-zA-Z]/;function dr(n,r,t){var d,f,m,h,g,y,x,v;const e=Qe(),o=(t==null?void 0:t.locale)??e.locale??eo,s=(t==null?void 0:t.firstWeekContainsDate)??((f=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??e.firstWeekContainsDate??((h=(m=e.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((y=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:y.weekStartsOn)??e.weekStartsOn??((v=(x=e.locale)==null?void 0:x.options)==null?void 0:v.weekStartsOn)??0,i=S(n);if(!dt(i))throw new RangeError("Invalid time value");let c=r.match(li).map(b=>{const D=b[0];if(D==="p"||D==="P"){const T=It[D];return T(b,o.formatLong)}return b}).join("").match(ci).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const D=b[0];if(D==="'")return{isToken:!1,value:fi(b)};if(ir[D])return{isToken:!0,value:b};if(D.match(pi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:b}});o.localize.preprocessor&&(c=o.localize.preprocessor(i,c));const l={firstWeekContainsDate:s,weekStartsOn:a,locale:o};return c.map(b=>{if(!b.isToken)return b.value;const D=b.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&so(D)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&ao(D))&&hn(D,r,String(n));const T=ir[D[0]];return T(i,D,o.localize,l)}).join("")}function fi(n){const r=n.match(ui);return r?r[1].replace(di,"'"):n}function io(n,r){const t=+S(n);return L(n,t+r)}function mn(n,r){return io(n,r*Ut)}function hi(n,r){return io(n,r*Xt)}function Re(n,r){const t=S(n);return isNaN(r)?L(n,NaN):(r&&t.setDate(t.getDate()+r),t)}function $t(n,r){const t=r*7;return Re(n,t)}function de(n,r){const t=S(n);if(isNaN(r))return L(n,NaN);if(!r)return t;const e=t.getDate(),o=L(n,t.getTime());o.setMonth(t.getMonth()+r+1,0);const s=o.getDate();return e>=s?o:(t.setFullYear(o.getFullYear(),o.getMonth(),e),t)}function co(n,r){const t=r*3;return de(n,t)}function Se(n,r){return de(n,r*12)}function mi(n,r){return Re(n,-r)}function pr(n,r){return $t(n,-r)}function tt(n,r){return de(n,-r)}function gi(n,r){return co(n,-r)}function wt(n,r){return Se(n,-r)}function fr(n){return S(n).getSeconds()}function we(n){return S(n).getMinutes()}function ye(n){return S(n).getHours()}function wi(n){return S(n).getDay()}function hr(n){return S(n).getDate()}function te(n){return S(n).getMonth()}function lt(n){const r=S(n);return Math.trunc(r.getMonth()/3)+1}function E(n){return S(n).getFullYear()}function gn(n){return S(n).getTime()}function yi(n,r){const t=S(n);return t.setSeconds(r),t}function St(n,r){const t=S(n);return t.setMinutes(r),t}function Pt(n,r){const t=S(n);return t.setHours(r),t}function xi(n){const r=S(n),t=r.getFullYear(),e=r.getMonth(),o=L(n,0);return o.setFullYear(t,e+1,0),o.setHours(0,0,0,0),o.getDate()}function ee(n,r){const t=S(n),e=t.getFullYear(),o=t.getDate(),s=L(n,0);s.setFullYear(e,r,15),s.setHours(0,0,0,0);const a=xi(s);return t.setMonth(r,Math.min(o,a)),t}function qe(n,r){const t=S(n),e=Math.trunc(t.getMonth()/3)+1,o=r-e;return ee(t,t.getMonth()+o*3)}function pe(n,r){const t=S(n);return isNaN(+t)?L(n,NaN):(t.setFullYear(r),t)}function mr(n){let r;return n.forEach(t=>{const e=S(t);(!r||r>e||isNaN(+e))&&(r=e)}),r||new Date(NaN)}function gr(n){let r;return n.forEach(function(t){const e=S(t);(r===void 0||r<e||isNaN(Number(e)))&&(r=e)}),r||new Date(NaN)}function Lt(n,r){const t=S(n),e=S(r),o=t.getFullYear()-e.getFullYear(),s=t.getMonth()-e.getMonth();return o*12+s}function Ft(n,r){const t=S(n),e=S(r);return t.getFullYear()-e.getFullYear()}function lo(n){const r=S(n);return r.setDate(1),r.setHours(0,0,0,0),r}function wn(n){const r=S(n),t=r.getMonth(),e=t-t%3;return r.setMonth(e,1),r.setHours(0,0,0,0),r}function yn(n){const r=S(n);return r.setHours(23,59,59,999),r}function bi(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?-7:0)+6-(s-e);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}function vi(n){const r=S(n),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function Di(n){const r=S(n),t=r.getFullYear();return r.setFullYear(t+1,0,0),r.setHours(23,59,59,999),r}function ki(n,r){const t=S(n),e=S(r);return+t==+e}function Mi(n,r){const t=ge(n),e=ge(r);return+t==+e}function Ci(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function _i(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()}function Si(n,r){const t=wn(n),e=wn(r);return+t==+e}function Ee(n,r){const t=S(n),e=S(r);return t.getTime()>e.getTime()}function He(n,r){const t=S(n),e=S(r);return+t<+e}function ft(n,r){const t=+S(n),[e,o]=[+S(r.start),+S(r.end)].sort((s,a)=>s-a);return t>=e&&t<=o}function Pi(){return Object.assign({},Qe())}function Ti(n,r){const t=r instanceof Date?L(r,0):new r(0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}const Ni=10;class uo{constructor(){M(this,"subPriority",0)}validate(r,t){return!0}}class Oi extends uo{constructor(r,t,e,o,s){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=o,s&&(this.subPriority=s)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}}class Ei extends uo{constructor(){super(...arguments);M(this,"priority",Ni);M(this,"subPriority",-1)}set(t,e){return e.timestampIsSet?t:L(t,Ti(t,Date))}}class I{run(r,t,e,o){const s=this.parse(r,t,e,o);return s?{setter:new Oi(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(r,t,e){return!0}}class Yi extends I{constructor(){super(...arguments);M(this,"priority",140);M(this,"incompatibleTokens",["R","u","t","T"])}parse(t,e,o){switch(e){case"G":case"GG":case"GGG":return o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"});case"GGGGG":return o.era(t,{width:"narrow"});case"GGGG":default:return o.era(t,{width:"wide"})||o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"})}}set(t,e,o){return e.era=o,t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}const Q={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},he={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function K(n,r){return n&&{value:r(n.value),rest:n.rest}}function H(n,r){const t=r.match(n);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function me(n,r){const t=r.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};const e=t[1]==="+"?1:-1,o=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,a=t[5]?parseInt(t[5],10):0;return{value:e*(o*Xt+s*Ut+a*Js),rest:r.slice(t[0].length)}}function po(n){return H(Q.anyDigitsSigned,n)}function B(n,r){switch(n){case 1:return H(Q.singleDigit,r);case 2:return H(Q.twoDigits,r);case 3:return H(Q.threeDigits,r);case 4:return H(Q.fourDigits,r);default:return H(new RegExp("^\\d{1,"+n+"}"),r)}}function jt(n,r){switch(n){case 1:return H(Q.singleDigitSigned,r);case 2:return H(Q.twoDigitsSigned,r);case 3:return H(Q.threeDigitsSigned,r);case 4:return H(Q.fourDigitsSigned,r);default:return H(new RegExp("^-?\\d{1,"+n+"}"),r)}}function jn(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function fo(n,r){const t=r>0,e=t?r:1-r;let o;if(e<=50)o=n||100;else{const s=e+50,a=Math.trunc(s/100)*100,i=n>=s%100;o=n+a-(i?100:0)}return t?o:1-o}function ho(n){return n%400===0||n%4===0&&n%100!==0}class Ri extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="yy"});switch(e){case"y":return K(B(4,t),s);case"yo":return K(o.ordinalNumber(t,{unit:"year"}),s);default:return K(B(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o){const s=t.getFullYear();if(o.isTwoDigitYear){const i=fo(o.year,s);return t.setFullYear(i,0,1),t.setHours(0,0,0,0),t}const a=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class Ii extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="YY"});switch(e){case"Y":return K(B(4,t),s);case"Yo":return K(o.ordinalNumber(t,{unit:"year"}),s);default:return K(B(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o,s){const a=Fn(t,s);if(o.isTwoDigitYear){const c=fo(o.year,a);return t.setFullYear(c,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),ke(t,s)}const i=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(i,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),ke(t,s)}}class $i extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,e){return jt(e==="R"?4:e.length,t)}set(t,e,o){const s=L(t,0);return s.setFullYear(o,0,4),s.setHours(0,0,0,0),et(s)}}class Li extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,e){return jt(e==="u"?4:e.length,t)}set(t,e,o){return t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}class Fi extends I{constructor(){super(...arguments);M(this,"priority",120);M(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"Q":case"QQ":return B(e.length,t);case"Qo":return o.ordinalNumber(t,{unit:"quarter"});case"QQQ":return o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(t,{width:"wide",context:"formatting"})||o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class ji extends I{constructor(){super(...arguments);M(this,"priority",120);M(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"q":case"qq":return B(e.length,t);case"qo":return o.ordinalNumber(t,{unit:"quarter"});case"qqq":return o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(t,{width:"wide",context:"standalone"})||o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class Wi extends I{constructor(){super(...arguments);M(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);M(this,"priority",110)}parse(t,e,o){const s=a=>a-1;switch(e){case"M":return K(H(Q.month,t),s);case"MM":return K(B(2,t),s);case"Mo":return K(o.ordinalNumber(t,{unit:"month"}),s);case"MMM":return o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(t,{width:"wide",context:"formatting"})||o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}class Ai extends I{constructor(){super(...arguments);M(this,"priority",110);M(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,e,o){const s=a=>a-1;switch(e){case"L":return K(H(Q.month,t),s);case"LL":return K(B(2,t),s);case"Lo":return K(o.ordinalNumber(t,{unit:"month"}),s);case"LLL":return o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(t,{width:"wide",context:"standalone"})||o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}function Hi(n,r,t){const e=S(n),o=ro(e,t)-r;return e.setDate(e.getDate()-o*7),e}class Bi extends I{constructor(){super(...arguments);M(this,"priority",100);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,e,o){switch(e){case"w":return H(Q.week,t);case"wo":return o.ordinalNumber(t,{unit:"week"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o,s){return ke(Hi(t,o,s),s)}}function Qi(n,r){const t=S(n),e=Ln(t)-r;return t.setDate(t.getDate()-e*7),t}class Ki extends I{constructor(){super(...arguments);M(this,"priority",100);M(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,e,o){switch(e){case"I":return H(Q.week,t);case"Io":return o.ordinalNumber(t,{unit:"week"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o){return et(Qi(t,o))}}const zi=[31,28,31,30,31,30,31,31,30,31,30,31],Vi=[31,29,31,30,31,30,31,31,30,31,30,31];class qi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"subPriority",1);M(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"d":return H(Q.date,t);case"do":return o.ordinalNumber(t,{unit:"date"});default:return B(e.length,t)}}validate(t,e){const o=t.getFullYear(),s=ho(o),a=t.getMonth();return s?e>=1&&e<=Vi[a]:e>=1&&e<=zi[a]}set(t,e,o){return t.setDate(o),t.setHours(0,0,0,0),t}}class Ui extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"subpriority",1);M(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,e,o){switch(e){case"D":case"DD":return H(Q.dayOfYear,t);case"Do":return o.ordinalNumber(t,{unit:"date"});default:return B(e.length,t)}}validate(t,e){const o=t.getFullYear();return ho(o)?e>=1&&e<=366:e>=1&&e<=365}set(t,e,o){return t.setMonth(0,o),t.setHours(0,0,0,0),t}}function Wn(n,r,t){var f,m,h,g;const e=Qe(),o=(t==null?void 0:t.weekStartsOn)??((m=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??e.weekStartsOn??((g=(h=e.locale)==null?void 0:h.options)==null?void 0:g.weekStartsOn)??0,s=S(n),a=s.getDay(),c=(r%7+7)%7,l=7-o,d=r<0||r>6?r-(a+l)%7:(c+l)%7-(a+l)%7;return Re(s,d)}class Xi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"E":case"EE":case"EEE":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Wn(t,o,s),t.setHours(0,0,0,0),t}}class Gi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"e":case"ee":return K(B(e.length,t),a);case"eo":return K(o.ordinalNumber(t,{unit:"day"}),a);case"eee":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeeee":return o.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Wn(t,o,s),t.setHours(0,0,0,0),t}}class Zi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"c":case"cc":return K(B(e.length,t),a);case"co":return K(o.ordinalNumber(t,{unit:"day"}),a);case"ccc":return o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"ccccc":return o.day(t,{width:"narrow",context:"standalone"});case"cccccc":return o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(t,{width:"wide",context:"standalone"})||o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Wn(t,o,s),t.setHours(0,0,0,0),t}}function Ji(n){let t=S(n).getDay();return t===0&&(t=7),t}function ec(n,r){const t=S(n),e=Ji(t),o=r-e;return Re(t,o)}class tc extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,e,o){const s=a=>a===0?7:a;switch(e){case"i":case"ii":return B(e.length,t);case"io":return o.ordinalNumber(t,{unit:"day"});case"iii":return K(o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiii":return K(o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiiii":return K(o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiii":default:return K(o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s)}}validate(t,e){return e>=1&&e<=7}set(t,e,o){return t=ec(t,o),t.setHours(0,0,0,0),t}}class nc extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,e,o){switch(e){case"a":case"aa":case"aaa":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(jn(o),0,0,0),t}}class rc extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,e,o){switch(e){case"b":case"bb":case"bbb":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(jn(o),0,0,0),t}}class oc extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["a","b","t","T"])}parse(t,e,o){switch(e){case"B":case"BB":case"BBB":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours(jn(o),0,0,0),t}}class ac extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,e,o){switch(e){case"h":return H(Q.hour12h,t);case"ho":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=12}set(t,e,o){const s=t.getHours()>=12;return s&&o<12?t.setHours(o+12,0,0,0):!s&&o===12?t.setHours(0,0,0,0):t.setHours(o,0,0,0),t}}class sc extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,e,o){switch(e){case"H":return H(Q.hour23h,t);case"Ho":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=23}set(t,e,o){return t.setHours(o,0,0,0),t}}class ic extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,e,o){switch(e){case"K":return H(Q.hour11h,t);case"Ko":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.getHours()>=12&&o<12?t.setHours(o+12,0,0,0):t.setHours(o,0,0,0),t}}class cc extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,e,o){switch(e){case"k":return H(Q.hour24h,t);case"ko":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=24}set(t,e,o){const s=o<=24?o%24:o;return t.setHours(s,0,0,0),t}}class lc extends I{constructor(){super(...arguments);M(this,"priority",60);M(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"m":return H(Q.minute,t);case"mo":return o.ordinalNumber(t,{unit:"minute"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setMinutes(o,0,0),t}}class uc extends I{constructor(){super(...arguments);M(this,"priority",50);M(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"s":return H(Q.second,t);case"so":return o.ordinalNumber(t,{unit:"second"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setSeconds(o,0),t}}class dc extends I{constructor(){super(...arguments);M(this,"priority",30);M(this,"incompatibleTokens",["t","T"])}parse(t,e){const o=s=>Math.trunc(s*Math.pow(10,-e.length+3));return K(B(e.length,t),o)}set(t,e,o){return t.setMilliseconds(o),t}}class pc extends I{constructor(){super(...arguments);M(this,"priority",10);M(this,"incompatibleTokens",["t","T","x"])}parse(t,e){switch(e){case"X":return me(he.basicOptionalMinutes,t);case"XX":return me(he.basic,t);case"XXXX":return me(he.basicOptionalSeconds,t);case"XXXXX":return me(he.extendedOptionalSeconds,t);case"XXX":default:return me(he.extended,t)}}set(t,e,o){return e.timestampIsSet?t:L(t,t.getTime()-Rt(t)-o)}}class fc extends I{constructor(){super(...arguments);M(this,"priority",10);M(this,"incompatibleTokens",["t","T","X"])}parse(t,e){switch(e){case"x":return me(he.basicOptionalMinutes,t);case"xx":return me(he.basic,t);case"xxxx":return me(he.basicOptionalSeconds,t);case"xxxxx":return me(he.extendedOptionalSeconds,t);case"xxx":default:return me(he.extended,t)}}set(t,e,o){return e.timestampIsSet?t:L(t,t.getTime()-Rt(t)-o)}}class hc extends I{constructor(){super(...arguments);M(this,"priority",40);M(this,"incompatibleTokens","*")}parse(t){return po(t)}set(t,e,o){return[L(t,o*1e3),{timestampIsSet:!0}]}}class mc extends I{constructor(){super(...arguments);M(this,"priority",20);M(this,"incompatibleTokens","*")}parse(t){return po(t)}set(t,e,o){return[L(t,o),{timestampIsSet:!0}]}}const gc={G:new Yi,y:new Ri,Y:new Ii,R:new $i,u:new Li,Q:new Fi,q:new ji,M:new Wi,L:new Ai,w:new Bi,I:new Ki,d:new qi,D:new Ui,E:new Xi,e:new Gi,c:new Zi,i:new tc,a:new nc,b:new rc,B:new oc,h:new ac,H:new sc,K:new ic,k:new cc,m:new lc,s:new uc,S:new dc,X:new pc,x:new fc,t:new hc,T:new mc},wc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xc=/^'([^]*?)'?$/,bc=/''/g,vc=/\S/,Dc=/[a-zA-Z]/;function tn(n,r,t,e){var y,x,v,b,D,T,_,O;const o=Pi(),s=(e==null?void 0:e.locale)??o.locale??eo,a=(e==null?void 0:e.firstWeekContainsDate)??((x=(y=e==null?void 0:e.locale)==null?void 0:y.options)==null?void 0:x.firstWeekContainsDate)??o.firstWeekContainsDate??((b=(v=o.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,i=(e==null?void 0:e.weekStartsOn)??((T=(D=e==null?void 0:e.locale)==null?void 0:D.options)==null?void 0:T.weekStartsOn)??o.weekStartsOn??((O=(_=o.locale)==null?void 0:_.options)==null?void 0:O.weekStartsOn)??0;if(r==="")return n===""?S(t):L(t,NaN);const c={firstWeekContainsDate:a,weekStartsOn:i,locale:s},l=[new Ei],d=r.match(yc).map(C=>{const N=C[0];if(N in It){const Y=It[N];return Y(C,s.formatLong)}return C}).join("").match(wc),f=[];for(let C of d){!(e!=null&&e.useAdditionalWeekYearTokens)&&so(C)&&hn(C,r,n),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ao(C)&&hn(C,r,n);const N=C[0],Y=gc[N];if(Y){const{incompatibleTokens:ne}=Y;if(Array.isArray(ne)){const A=f.find(re=>ne.includes(re.token)||re.token===N);if(A)throw new RangeError(`The format string mustn't contain \`${A.fullToken}\` and \`${C}\` at the same time`)}else if(Y.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${C}\` and any other token at the same time`);f.push({token:N,fullToken:C});const J=Y.run(n,C,s.match,c);if(!J)return L(t,NaN);l.push(J.setter),n=J.rest}else{if(N.match(Dc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");if(C==="''"?C="'":N==="'"&&(C=kc(C)),n.indexOf(C)===0)n=n.slice(C.length);else return L(t,NaN)}}if(n.length>0&&vc.test(n))return L(t,NaN);const m=l.map(C=>C.priority).sort((C,N)=>N-C).filter((C,N,Y)=>Y.indexOf(C)===N).map(C=>l.filter(N=>N.priority===C).sort((N,Y)=>Y.subPriority-N.subPriority)).map(C=>C[0]);let h=S(t);if(isNaN(h.getTime()))return L(t,NaN);const g={};for(const C of m){if(!C.validate(h,c))return L(t,NaN);const N=C.set(h,g,c);Array.isArray(N)?(h=N[0],Object.assign(g,N[1])):h=N}return L(t,h)}function kc(n){return n.match(xc)[1].replace(bc,"'")}function Mc(n,r){const t=(r==null?void 0:r.additionalDigits)??2,e=Pc(n);let o;if(e.date){const c=Tc(e.date,t);o=Nc(c.restDateString,c.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);const s=o.getTime();let a=0,i;if(e.time&&(a=Oc(e.time),isNaN(a)))return new Date(NaN);if(e.timezone){if(i=Ec(e.timezone),isNaN(i))return new Date(NaN)}else{const c=new Date(s+a),l=new Date(0);return l.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),l.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),l}return new Date(s+a+i)}const bt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Cc=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,_c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Sc=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Pc(n){const r={},t=n.split(bt.dateTimeDelimiter);let e;if(t.length>2)return r;if(/:/.test(t[0])?e=t[0]:(r.date=t[0],e=t[1],bt.timeZoneDelimiter.test(r.date)&&(r.date=n.split(bt.timeZoneDelimiter)[0],e=n.substr(r.date.length,n.length))),e){const o=bt.timezone.exec(e);o?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e}return r}function Tc(n,r){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+r)+"})|(\\d{2}|[+-]\\d{"+(2+r)+"})$)"),e=n.match(t);if(!e)return{year:NaN,restDateString:""};const o=e[1]?parseInt(e[1]):null,s=e[2]?parseInt(e[2]):null;return{year:s===null?o:s*100,restDateString:n.slice((e[1]||e[2]).length)}}function Nc(n,r){if(r===null)return new Date(NaN);const t=n.match(Cc);if(!t)return new Date(NaN);const e=!!t[4],o=at(t[1]),s=at(t[2])-1,a=at(t[3]),i=at(t[4]),c=at(t[5])-1;if(e)return Lc(r,i,c)?Yc(r,i,c):new Date(NaN);{const l=new Date(0);return!Ic(r,s,a)||!$c(r,o)?new Date(NaN):(l.setUTCFullYear(r,s,Math.max(o,a)),l)}}function at(n){return n?parseInt(n):1}function Oc(n){const r=n.match(_c);if(!r)return NaN;const t=nn(r[1]),e=nn(r[2]),o=nn(r[3]);return Fc(t,e,o)?t*Xt+e*Ut+o*1e3:NaN}function nn(n){return n&&parseFloat(n.replace(",","."))||0}function Ec(n){if(n==="Z")return 0;const r=n.match(Sc);if(!r)return 0;const t=r[1]==="+"?-1:1,e=parseInt(r[2]),o=r[3]&&parseInt(r[3])||0;return jc(e,o)?t*(e*Xt+o*Ut):NaN}function Yc(n,r,t){const e=new Date(0);e.setUTCFullYear(n,0,4);const o=e.getUTCDay()||7,s=(r-1)*7+t+1-o;return e.setUTCDate(e.getUTCDate()+s),e}const Rc=[31,null,31,30,31,30,31,31,30,31,30,31];function mo(n){return n%400===0||n%4===0&&n%100!==0}function Ic(n,r,t){return r>=0&&r<=11&&t>=1&&t<=(Rc[r]||(mo(n)?29:28))}function $c(n,r){return r>=1&&r<=(mo(n)?366:365)}function Lc(n,r,t){return r>=1&&r<=53&&t>=0&&t<=6}function Fc(n,r,t){return n===24?r===0&&t===0:t>=0&&t<60&&r>=0&&r<60&&n>=0&&n<25}function jc(n,r){return r>=0&&r<=59}function Wc(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,xn(n,r)}function xn(n,r){return xn=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},xn(n,r)}function Ac(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,s;for(s=0;s<e.length;s++)o=e[s],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}function wr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Hc(n,r,t){return n===r?!0:n.correspondingElement?n.correspondingElement.classList.contains(t):n.classList.contains(t)}function Bc(n,r,t){if(n===r)return!0;for(;n.parentNode||n.host;){if(n.parentNode&&Hc(n,r,t))return!0;n=n.parentNode||n.host}return n}function Qc(n){return document.documentElement.clientWidth<=n.clientX||document.documentElement.clientHeight<=n.clientY}var Kc=function(){if(!(typeof window>"u"||typeof window.addEventListener!="function")){var r=!1,t=Object.defineProperty({},"passive",{get:function(){r=!0}}),e=function(){};return window.addEventListener("testPassiveEventSupport",e,t),window.removeEventListener("testPassiveEventSupport",e,t),r}};function zc(n){return n===void 0&&(n=0),function(){return++n}}var Vc=zc(),bn,vt={},rn={},qc=["touchstart","touchmove"],Uc="ignore-react-onclickoutside";function yr(n,r){var t={},e=qc.indexOf(r)!==-1;return e&&bn&&(t.passive=!n.props.preventDefault),t}function Gt(n,r){var t,e,o=n.displayName||n.name||"Component";return e=t=function(s){Wc(a,s);function a(c){var l;return l=s.call(this,c)||this,l.__outsideClickHandler=function(d){if(typeof l.__clickOutsideHandlerProp=="function"){l.__clickOutsideHandlerProp(d);return}var f=l.getInstance();if(typeof f.props.handleClickOutside=="function"){f.props.handleClickOutside(d);return}if(typeof f.handleClickOutside=="function"){f.handleClickOutside(d);return}throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.")},l.__getComponentNode=function(){var d=l.getInstance();return r&&typeof r.setClickOutsideRef=="function"?r.setClickOutsideRef()(d):typeof d.setClickOutsideRef=="function"?d.setClickOutsideRef():jr.findDOMNode(d)},l.enableOnClickOutside=function(){if(!(typeof document>"u"||rn[l._uid])){typeof bn>"u"&&(bn=Kc()),rn[l._uid]=!0;var d=l.props.eventTypes;d.forEach||(d=[d]),vt[l._uid]=function(f){if(l.componentNode!==null&&(l.props.preventDefault&&f.preventDefault(),l.props.stopPropagation&&f.stopPropagation(),!(l.props.excludeScrollbar&&Qc(f)))){var m=f.composed&&f.composedPath&&f.composedPath().shift()||f.target;Bc(m,l.componentNode,l.props.outsideClickIgnoreClass)===document&&l.__outsideClickHandler(f)}},d.forEach(function(f){document.addEventListener(f,vt[l._uid],yr(wr(l),f))})}},l.disableOnClickOutside=function(){delete rn[l._uid];var d=vt[l._uid];if(d&&typeof document<"u"){var f=l.props.eventTypes;f.forEach||(f=[f]),f.forEach(function(m){return document.removeEventListener(m,d,yr(wr(l),m))}),delete vt[l._uid]}},l.getRef=function(d){return l.instanceRef=d},l._uid=Vc(),l}var i=a.prototype;return i.getInstance=function(){if(n.prototype&&!n.prototype.isReactComponent)return this;var l=this.instanceRef;return l.getInstance?l.getInstance():l},i.componentDidMount=function(){if(!(typeof document>"u"||!document.createElement)){var l=this.getInstance();if(r&&typeof r.handleClickOutside=="function"&&(this.__clickOutsideHandlerProp=r.handleClickOutside(l),typeof this.__clickOutsideHandlerProp!="function"))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),!this.props.disableOnClickOutside&&this.enableOnClickOutside()}},i.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},i.componentWillUnmount=function(){this.disableOnClickOutside()},i.render=function(){var l=this.props;l.excludeScrollbar;var d=Ac(l,["excludeScrollbar"]);return n.prototype&&n.prototype.isReactComponent?d.ref=this.getRef:d.wrappedRef=this.getRef,d.disableOnClickOutside=this.disableOnClickOutside,d.enableOnClickOutside=this.enableOnClickOutside,k.createElement(n,d)},a}(k.Component),t.displayName="OnClickOutside("+o+")",t.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:r&&r.excludeScrollbar||!1,outsideClickIgnoreClass:Uc,preventDefault:!1,stopPropagation:!1},t.getClass=function(){return n.getClass?n.getClass():n},e}const Xc=Ar["useInsertionEffect".toString()],Gc=Xc||(n=>n());function Zc(n){const r=k.useRef(()=>{});return Gc(()=>{r.current=n}),k.useCallback(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return r.current==null?void 0:r.current(...e)},[])}var go=typeof document<"u"?k.useLayoutEffect:k.useEffect;function vn(){return vn=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},vn.apply(this,arguments)}let on=!1,Jc=0;const xr=()=>"floating-ui-"+Jc++;function el(){const[n,r]=k.useState(()=>on?xr():void 0);return go(()=>{n==null&&r(xr())},[]),k.useEffect(()=>{on||(on=!0)},[]),n}const tl=Ar["useId".toString()],wo=tl||el,nl=k.forwardRef(function(r,t){const{context:{placement:e,elements:{floating:o},middlewareData:{arrow:s}},width:a=14,height:i=7,tipRadius:c=0,strokeWidth:l=0,staticOffset:d,stroke:f,d:m,style:{transform:h,...g}={},...y}=r,x=wo();if(!o)return null;const v=l*2,b=v/2,D=a/2*(c/-8+1),T=i/2*c/4,[_,O]=e.split("-"),C=Gr.isRTL(o),N=!!m,Y=_==="top"||_==="bottom",ne=d&&O==="end"?"bottom":"top";let J=d&&O==="end"?"right":"left";d&&C&&(J=O==="end"?"left":"right");const A=(s==null?void 0:s.x)!=null?d||s.x:"",re=(s==null?void 0:s.y)!=null?d||s.y:"",V=m||"M0,0"+(" H"+a)+(" L"+(a-D)+","+(i-T))+(" Q"+a/2+","+i+" "+D+","+(i-T))+" Z",z={top:N?"rotate(180deg)":"",left:N?"rotate(90deg)":"rotate(-90deg)",bottom:N?"":"rotate(180deg)",right:N?"rotate(-90deg)":"rotate(90deg)"}[_];return k.createElement("svg",vn({},y,{"aria-hidden":!0,ref:t,width:N?a:a+v,height:a,viewBox:"0 0 "+a+" "+(i>a?i:a),style:{position:"absolute",pointerEvents:"none",[J]:A,[ne]:re,[_]:Y||N?"100%":"calc(100% - "+v/2+"px)",transform:""+z+(h??""),...g}}),v>0&&k.createElement("path",{clipPath:"url(#"+x+")",fill:"none",stroke:f,strokeWidth:v+(m?0:1),d:V}),k.createElement("path",{stroke:v&&!m?y.fill:"none",d:V}),k.createElement("clipPath",{id:x},k.createElement("rect",{x:-b,y:b*(N?-1:1),width:a+v,height:a})))});function rl(){const n=new Map;return{emit(r,t){var e;(e=n.get(r))==null||e.forEach(o=>o(t))},on(r,t){n.set(r,[...n.get(r)||[],t])},off(r,t){var e;n.set(r,((e=n.get(r))==null?void 0:e.filter(o=>o!==t))||[])}}}const ol=k.createContext(null),al=k.createContext(null),sl=()=>{var n;return((n=k.useContext(ol))==null?void 0:n.id)||null},il=()=>k.useContext(al);function cl(n){var r;n===void 0&&(n={});const{open:t=!1,onOpenChange:e,nodeId:o}=n,[s,a]=k.useState(null),i=((r=n.elements)==null?void 0:r.reference)||s,c=Pa(n),l=il(),d=sl()!=null,f=Zc((_,O,C)=>{_&&(h.current.openEvent=O),g.emit("openchange",{open:_,event:O,reason:C,nested:d}),e==null||e(_,O,C)}),m=k.useRef(null),h=k.useRef({}),g=k.useState(()=>rl())[0],y=wo(),x=k.useCallback(_=>{const O=se(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(O)},[c.refs]),v=k.useCallback(_=>{(se(_)||_===null)&&(m.current=_,a(_)),(se(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!se(_))&&c.refs.setReference(_)},[c.refs]),b=k.useMemo(()=>({...c.refs,setReference:v,setPositionReference:x,domReference:m}),[c.refs,v,x]),D=k.useMemo(()=>({...c.elements,domReference:i}),[c.elements,i]),T=k.useMemo(()=>({...c,refs:b,elements:D,dataRef:h,nodeId:o,floatingId:y,events:g,open:t,onOpenChange:f}),[c,o,y,g,t,f,b,D]);return go(()=>{const _=l==null?void 0:l.nodesRef.current.find(O=>O.id===o);_&&(_.context=T)}),k.useMemo(()=>({...c,context:T,refs:b,elements:D}),[c,b,D,T])}function ll(n,r){let t=S(n);return isNaN(+t)?L(n,NaN):(r.year!=null&&t.setFullYear(r.year),r.month!=null&&(t=ee(t,r.month)),r.date!=null&&t.setDate(r.date),r.hours!=null&&t.setHours(r.hours),r.minutes!=null&&t.setMinutes(r.minutes),r.seconds!=null&&t.setSeconds(r.seconds),r.milliseconds!=null&&t.setMilliseconds(r.milliseconds),t)}/*!
  react-datepicker v6.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/function q(n,r,t){return r=Wt(r),pl(n,yo()?Reflect.construct(r,t||[],Wt(n).constructor):r.apply(n,t))}function yo(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yo=function(){return!!n})()}function br(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,e)}return t}function be(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?br(Object(t),!0).forEach(function(e){u(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):br(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function ul(n,r){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var e=t.call(n,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function xo(n){var r=ul(n,"string");return typeof r=="symbol"?r:r+""}function Dn(n){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Dn(n)}function U(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function vr(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,xo(e.key),e)}}function X(n,r,t){return r&&vr(n.prototype,r),t&&vr(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function u(n,r,t){return r=xo(r),r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function ht(){return ht=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},ht.apply(this,arguments)}function G(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&kn(n,r)}function Wt(n){return Wt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wt(n)}function kn(n,r){return kn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},kn(n,r)}function dl(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pl(n,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dl(n)}function Ye(n){return fl(n)||hl(n)||ml(n)||gl()}function fl(n){if(Array.isArray(n))return Mn(n)}function hl(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ml(n,r){if(n){if(typeof n=="string")return Mn(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mn(n,r)}}function Mn(n,r){(r==null||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function gl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yt=12,wl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function F(n){var r=n?typeof n=="string"||n instanceof String?Mc(n):S(n):new Date;return _e(r)?r:null}function yl(n,r,t,e,o){var s=null,a=De(t)||De(je()),i=!0;return Array.isArray(r)?(r.forEach(function(c){var l=tn(n,c,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});e&&(i=_e(l,o)&&n===W(l,c,t)),_e(l,o)&&i&&(s=l)}),s):(s=tn(n,r,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0}),e?i=_e(s)&&n===W(s,r,t):_e(s)||(r=r.match(wl).map(function(c){var l=c[0];if(l==="p"||l==="P"){var d=It[l];return a?d(c,a.formatLong):l}return c}).join(""),n.length>0&&(s=tn(n,r.slice(0,n.length),new Date,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})),_e(s)||(s=new Date(n))),_e(s)&&i?s:null)}function _e(n,r){return r=r||new Date("1/1/1000"),dt(n)&&!He(n,r)}function W(n,r,t){if(t==="en")return dr(n,r,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});var e=De(t);return t&&!e&&console.warn('A locale object was not found for the provided string ["'.concat(t,'"].')),!e&&je()&&De(je())&&(e=De(je())),dr(n,r,{locale:e||null,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})}function ce(n,r){var t=r.dateFormat,e=r.locale;return n&&W(n,Array.isArray(t)?t[0]:t,e)||""}function xl(n,r,t){if(!n)return"";var e=ce(n,t),o=r?ce(r,t):"";return"".concat(e," - ").concat(o)}function bl(n,r){if(!(n!=null&&n.length))return"";var t=ce(n[0],r);if(n.length===1)return t;if(n.length===2){var e=ce(n[1],r);return"".concat(t,", ").concat(e)}var o=n.length-1;return"".concat(t," (+").concat(o,")")}function an(n,r){var t=r.hour,e=t===void 0?0:t,o=r.minute,s=o===void 0?0:o,a=r.second,i=a===void 0?0:a;return Pt(St(yi(n,i),s),e)}function vl(n,r){return r&&De(r)||je()&&De(je()),Ln(n)}function Dl(n,r){return W(n,"ddd",r)}function kl(n){return ge(n)}function Pe(n,r,t){var e=De(r||je());return ke(n,{locale:e,weekStartsOn:t})}function Te(n){return lo(n)}function st(n){return $n(n)}function Dr(n){return wn(n)}function kr(){return ge(F())}function Ml(n){return bi(n)}function fe(n,r){return n&&r?_i(n,r):!n&&!r}function ae(n,r){return n&&r?Ci(n,r):!n&&!r}function At(n,r){return n&&r?Si(n,r):!n&&!r}function R(n,r){return n&&r?Mi(n,r):!n&&!r}function $e(n,r){return n&&r?ki(n,r):!n&&!r}function it(n,r,t){var e,o=ge(r),s=yn(t);try{e=ft(n,{start:o,end:s})}catch{e=!1}return e}function je(){var n=typeof window<"u"?window:globalThis;return n.__localeId__}function De(n){if(typeof n=="string"){var r=typeof window<"u"?window:globalThis;return r.__localeData__?r.__localeData__[n]:null}else return n}function Cl(n,r,t){return r(W(n,"EEEE",t))}function _l(n,r){return W(n,"EEEEEE",r)}function Sl(n,r){return W(n,"EEE",r)}function An(n,r){return W(ee(F(),n),"LLLL",r)}function bo(n,r){return W(ee(F(),n),"LLL",r)}function Pl(n,r){return W(qe(F(),n),"QQQ",r)}function Zt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.excludeDateIntervals,a=r.includeDates,i=r.includeDateIntervals,c=r.filterDate;return Jt(n,{minDate:t,maxDate:e})||o&&o.some(function(l){return R(n,l.date?l.date:l)})||s&&s.some(function(l){var d=l.start,f=l.end;return ft(n,{start:d,end:f})})||a&&!a.some(function(l){return R(n,l)})||i&&!i.some(function(l){var d=l.start,f=l.end;return ft(n,{start:d,end:f})})||c&&!c(F(n))||!1}function Hn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeDates,e=r.excludeDateIntervals;return e&&e.length>0?e.some(function(o){var s=o.start,a=o.end;return ft(n,{start:s,end:a})}):t&&t.some(function(o){return R(n,o.date?o.date:o)})||!1}function Tt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Jt(n,{minDate:lo(t),maxDate:vi(e)})||o&&o.some(function(i){return ae(n,i)})||s&&!s.some(function(i){return ae(n,i)})||a&&!a(F(n))||!1}function Dt(n,r,t,e){var o=E(n),s=te(n),a=E(r),i=te(r),c=E(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function sn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Jt(n,{minDate:t,maxDate:e})||o&&o.some(function(i){return At(n,i)})||s&&!s.some(function(i){return At(n,i)})||a&&!a(F(n))||!1}function kt(n,r,t){if(!dt(r)||!dt(t))return!1;var e=E(r),o=E(t);return e<=n&&o>=n}function vo(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate,i=new Date(n,0,1);return Jt(i,{minDate:$n(t),maxDate:Di(e)})||o&&o.some(function(c){return fe(i,c)})||s&&!s.some(function(c){return fe(i,c)})||a&&!a(F(i))||!1}function Mt(n,r,t,e){var o=E(n),s=lt(n),a=E(r),i=lt(r),c=E(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function Jt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate;return t&&pt(n,t)<0||e&&pt(n,e)>0}function Mr(n,r){return r.some(function(t){return ye(t)===ye(n)&&we(t)===we(n)})}function Cr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeTimes,e=r.includeTimes,o=r.filterTime;return t&&Mr(n,t)||e&&!Mr(n,e)||o&&!o(n)||!1}function _r(n,r){var t=r.minTime,e=r.maxTime;if(!t||!e)throw new Error("Both minTime and maxTime props required");var o=F(),s=Pt(St(o,we(n)),ye(n)),a=Pt(St(o,we(t)),ye(t)),i=Pt(St(o,we(e)),ye(e)),c;try{c=!ft(s,{start:a,end:i})}catch{c=!1}return c}function Sr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=tt(n,1);return t&&Lt(t,o)>0||e&&e.every(function(s){return Lt(s,o)>0})||!1}function Pr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=de(n,1);return t&&Lt(o,t)>0||e&&e.every(function(s){return Lt(o,s)>0})||!1}function Tr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=wt(n,1);return t&&Ft(t,o)>0||e&&e.every(function(s){return Ft(s,o)>0})||!1}function Tl(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.yearItemNumber,o=e===void 0?yt:e,s=st(wt(n,o)),a=nt(s,o),i=a.endPeriod,c=t&&E(t);return c&&c>i||!1}function Nr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=Se(n,1);return t&&Ft(o,t)>0||e&&e.every(function(s){return Ft(o,s)>0})||!1}function Nl(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.yearItemNumber,o=e===void 0?yt:e,s=Se(n,o),a=nt(s,o),i=a.startPeriod,c=t&&E(t);return c&&c<i||!1}function Do(n){var r=n.minDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return pt(o,r)>=0});return mr(e)}else return t?mr(t):r}function ko(n){var r=n.maxDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return pt(o,r)<=0});return gr(e)}else return t?gr(t):r}function Or(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--highlighted",t=new Map,e=0,o=n.length;e<o;e++){var s=n[e];if(Ae(s)){var a=W(s,"MM.dd.yyyy"),i=t.get(a)||[];i.includes(r)||(i.push(r),t.set(a,i))}else if(Dn(s)==="object"){var c=Object.keys(s),l=c[0],d=s[c[0]];if(typeof l=="string"&&d.constructor===Array)for(var f=0,m=d.length;f<m;f++){var h=W(d[f],"MM.dd.yyyy"),g=t.get(h)||[];g.includes(l)||(g.push(l),t.set(h,g))}}}return t}function Ol(n,r){return n.length!==r.length?!1:n.every(function(t,e){return t===r[e]})}function El(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--holidays",t=new Map;return n.forEach(function(e){var o=e.date,s=e.holidayName;if(Ae(o)){var a=W(o,"MM.dd.yyyy"),i=t.get(a)||{};if(!("className"in i&&i.className===r&&Ol(i.holidayNames,[s]))){i.className=r;var c=i.holidayNames;i.holidayNames=c?[].concat(Ye(c),[s]):[s],t.set(a,i)}}}),t}function Yl(n,r,t,e,o){for(var s=o.length,a=[],i=0;i<s;i++){var c=mn(hi(n,ye(o[i])),we(o[i])),l=mn(n,(t+1)*e);Ee(c,r)&&He(c,l)&&a.push(o[i])}return a}function Er(n){return n<10?"0".concat(n):"".concat(n)}function nt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yt,t=Math.ceil(E(n)/r)*r,e=t-(r-1);return{startPeriod:e,endPeriod:t}}function Rl(n){var r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),24);return Math.round((+t-+r)/36e5)}function Yr(n){var r=n.getSeconds(),t=n.getMilliseconds();return S(n.getTime()-r*1e3-t)}function Il(n,r){return Yr(n).getTime()===Yr(r).getTime()}function Rr(n){if(!Ae(n))throw new Error("Invalid date");var r=new Date(n);return r.setHours(0,0,0,0),r}function Ir(n,r){if(!Ae(n)||!Ae(r))throw new Error("Invalid date received");var t=Rr(n),e=Rr(r);return He(t,e)}function Mo(n){var r=" ";return n.key===r}function $l(n,r,t,e){for(var o=[],s=0;s<2*r+1;s++){var a=n+r-s,i=!0;t&&(i=E(t)<=a),e&&i&&(i=E(e)>=a),i&&o.push(a)}return o}var Ll=function(n){function r(t){var e;U(this,r),e=q(this,r,[t]),u(e,"renderOptions",function(){var i=e.props.year,c=e.state.yearsList.map(function(f){return w.createElement("div",{className:i===f?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:f,onClick:e.onChange.bind(e,f),"aria-selected":i===f?"true":void 0},i===f?w.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",f)}),l=e.props.minDate?E(e.props.minDate):null,d=e.props.maxDate?E(e.props.maxDate):null;return(!d||!e.state.yearsList.find(function(f){return f===d}))&&c.unshift(w.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:e.incrementYears},w.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),(!l||!e.state.yearsList.find(function(f){return f===l}))&&c.push(w.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:e.decrementYears},w.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),c}),u(e,"onChange",function(i){e.props.onChange(i)}),u(e,"handleClickOutside",function(){e.props.onCancel()}),u(e,"shiftYears",function(i){var c=e.state.yearsList.map(function(l){return l+i});e.setState({yearsList:c})}),u(e,"incrementYears",function(){return e.shiftYears(1)}),u(e,"decrementYears",function(){return e.shiftYears(-1)});var o=t.yearDropdownItemNumber,s=t.scrollableYearDropdown,a=o||(s?10:5);return e.state={yearsList:$l(e.props.year,a,e.props.minDate,e.props.maxDate)},e.dropdownRef=k.createRef(),e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){var e=this.dropdownRef.current;if(e){var o=e.children?Array.from(e.children):null,s=o?o.find(function(a){return a.ariaSelected}):null;e.scrollTop=s?s.offsetTop+(s.clientHeight-e.clientHeight)/2:(e.scrollHeight-e.clientHeight)/2}}},{key:"render",value:function(){var e=Z({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return w.createElement("div",{className:e,ref:this.dropdownRef},this.renderOptions())}}])}(w.Component),Fl=Gt(Ll),jl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(){for(var a=t.props.minDate?E(t.props.minDate):1900,i=t.props.maxDate?E(t.props.maxDate):2100,c=[],l=a;l<=i;l++)c.push(w.createElement("option",{key:l,value:l},l));return c}),u(t,"onSelectChange",function(a){t.onChange(a.target.value)}),u(t,"renderSelectMode",function(){return w.createElement("select",{value:t.props.year,className:"react-datepicker__year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),u(t,"renderReadView",function(a){return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(c){return t.toggleDropdown(c)}},w.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},t.props.year))}),u(t,"renderDropdown",function(){return w.createElement(Fl,{key:"dropdown",year:t.props.year,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableYearDropdown:t.props.scrollableYearDropdown,yearDropdownItemNumber:t.props.yearDropdownItemNumber})}),u(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),u(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.year&&t.props.onChange(a)}),u(t,"toggleDropdown",function(a){t.setState({dropdownVisible:!t.state.dropdownVisible},function(){t.props.adjustDateOnChange&&t.handleYearChange(t.props.date,a)})}),u(t,"handleYearChange",function(a,i){t.onSelect(a,i),t.setOpen()}),u(t,"onSelect",function(a,i){t.props.onSelect&&t.props.onSelect(a,i)}),u(t,"setOpen",function(){t.props.setOpen&&t.props.setOpen(!0)}),t}return G(r,n),X(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return w.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(w.Component),Wl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"isSelectedMonth",function(a){return t.props.month===a}),u(t,"renderOptions",function(){return t.props.monthNames.map(function(a,i){return w.createElement("div",{className:t.isSelectedMonth(i)?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:a,onClick:t.onChange.bind(t,i),"aria-selected":t.isSelectedMonth(i)?"true":void 0},t.isSelectedMonth(i)?w.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",a)})}),u(t,"onChange",function(a){return t.props.onChange(a)}),u(t,"handleClickOutside",function(){return t.props.onCancel()}),t}return G(r,n),X(r,[{key:"render",value:function(){return w.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}])}(w.Component),Al=Gt(Wl),Hl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(a){return a.map(function(i,c){return w.createElement("option",{key:c,value:c},i)})}),u(t,"renderSelectMode",function(a){return w.createElement("select",{value:t.props.month,className:"react-datepicker__month-select",onChange:function(c){return t.onChange(c.target.value)}},t.renderSelectOptions(a))}),u(t,"renderReadView",function(a,i){return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:t.toggleDropdown},w.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},i[t.props.month]))}),u(t,"renderDropdown",function(a){return w.createElement(Al,{key:"dropdown",month:t.props.month,monthNames:a,onChange:t.onChange,onCancel:t.toggleDropdown})}),u(t,"renderScrollMode",function(a){var i=t.state.dropdownVisible,c=[t.renderReadView(!i,a)];return i&&c.unshift(t.renderDropdown(a)),c}),u(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.month&&t.props.onChange(a)}),u(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e=this,o=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(a){return bo(a,e.props.locale)}:function(a){return An(a,e.props.locale)}),s;switch(this.props.dropdownMode){case"scroll":s=this.renderScrollMode(o);break;case"select":s=this.renderSelectMode(o);break}return w.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},s)}}])}(w.Component);function Bl(n,r){for(var t=[],e=Te(n),o=Te(r);!Ee(e,o);)t.push(F(e)),e=de(e,1);return t}var Ql=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"renderOptions",function(){return e.state.monthYearsList.map(function(o){var s=gn(o),a=fe(e.props.date,o)&&ae(e.props.date,o);return w.createElement("div",{className:a?"react-datepicker__month-year-option--selected_month-year":"react-datepicker__month-year-option",key:s,onClick:e.onChange.bind(e,s),"aria-selected":a?"true":void 0},a?w.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",W(o,e.props.dateFormat,e.props.locale))})}),u(e,"onChange",function(o){return e.props.onChange(o)}),u(e,"handleClickOutside",function(){e.props.onCancel()}),e.state={monthYearsList:Bl(e.props.minDate,e.props.maxDate)},e}return G(r,n),X(r,[{key:"render",value:function(){var e=Z({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return w.createElement("div",{className:e},this.renderOptions())}}])}(w.Component),Kl=Gt(Ql),zl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(){for(var a=Te(t.props.minDate),i=Te(t.props.maxDate),c=[];!Ee(a,i);){var l=gn(a);c.push(w.createElement("option",{key:l,value:l},W(a,t.props.dateFormat,t.props.locale))),a=de(a,1)}return c}),u(t,"onSelectChange",function(a){t.onChange(a.target.value)}),u(t,"renderSelectMode",function(){return w.createElement("select",{value:gn(Te(t.props.date)),className:"react-datepicker__month-year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),u(t,"renderReadView",function(a){var i=W(t.props.date,t.props.dateFormat,t.props.locale);return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(l){return t.toggleDropdown(l)}},w.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},i))}),u(t,"renderDropdown",function(){return w.createElement(Kl,{key:"dropdown",date:t.props.date,dateFormat:t.props.dateFormat,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableMonthYearDropdown:t.props.scrollableMonthYearDropdown,locale:t.props.locale})}),u(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),u(t,"onChange",function(a){t.toggleDropdown();var i=F(parseInt(a));fe(t.props.date,i)&&ae(t.props.date,i)||t.props.onChange(i)}),u(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return w.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(w.Component),Vl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"dayEl",w.createRef()),u(t,"handleClick",function(a){!t.isDisabled()&&t.props.onClick&&t.props.onClick(a)}),u(t,"handleMouseEnter",function(a){!t.isDisabled()&&t.props.onMouseEnter&&t.props.onMouseEnter(a)}),u(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),u(t,"isSameDay",function(a){return R(t.props.day,a)}),u(t,"isKeyboardSelected",function(){var a;if(t.props.disabledKeyboardNavigation)return!1;var i=t.props.selectsMultiple?(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(c){return t.isSameDayOrWeek(c)}):t.isSameDayOrWeek(t.props.selected);return!i&&t.isSameDayOrWeek(t.props.preSelection)}),u(t,"isDisabled",function(){return Zt(t.props.day,t.props)}),u(t,"isExcluded",function(){return Hn(t.props.day,t.props)}),u(t,"isStartOfWeek",function(){return R(t.props.day,Pe(t.props.day,t.props.locale,t.props.calendarStartDay))}),u(t,"isSameWeek",function(a){return t.props.showWeekPicker&&R(a,Pe(t.props.day,t.props.locale,t.props.calendarStartDay))}),u(t,"isSameDayOrWeek",function(a){return t.isSameDay(a)||t.isSameWeek(a)}),u(t,"getHighLightedClass",function(){var a=t.props,i=a.day,c=a.highlightDates;if(!c)return!1;var l=W(i,"MM.dd.yyyy");return c.get(l)}),u(t,"getHolidaysClass",function(){var a=t.props,i=a.day,c=a.holidays;if(!c)return!1;var l=W(i,"MM.dd.yyyy");if(c.has(l))return[c.get(l).className]}),u(t,"isInRange",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:it(i,c,l)}),u(t,"isInSelectingRange",function(){var a,i=t.props,c=i.day,l=i.selectsStart,d=i.selectsEnd,f=i.selectsRange,m=i.selectsDisabledDaysInRange,h=i.startDate,g=i.endDate,y=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return!(l||d||f)||!y||!m&&t.isDisabled()?!1:l&&g&&(He(y,g)||$e(y,g))?it(c,y,g):d&&h&&(Ee(y,h)||$e(y,h))||f&&h&&!g&&(Ee(y,h)||$e(y,h))?it(c,h,y):!1}),u(t,"isSelectingRangeStart",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.startDate,d=i.selectsStart,f=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return d?R(c,f):R(c,l)}),u(t,"isSelectingRangeEnd",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.endDate,d=i.selectsEnd,f=i.selectsRange,m=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return d||f?R(c,m):R(c,l)}),u(t,"isRangeStart",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:R(c,i)}),u(t,"isRangeEnd",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:R(l,i)}),u(t,"isWeekend",function(){var a=wi(t.props.day);return a===0||a===6}),u(t,"isAfterMonth",function(){return t.props.month!==void 0&&(t.props.month+1)%12===te(t.props.day)}),u(t,"isBeforeMonth",function(){return t.props.month!==void 0&&(te(t.props.day)+1)%12===t.props.month}),u(t,"isCurrentDay",function(){return t.isSameDay(F())}),u(t,"isSelected",function(){if(t.props.selectsMultiple){var a;return(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(i){return t.isSameDayOrWeek(i)})}return t.isSameDayOrWeek(t.props.selected)}),u(t,"getClassNames",function(a){var i=t.props.dayClassName?t.props.dayClassName(a):void 0;return Z("react-datepicker__day",i,"react-datepicker__day--"+Dl(t.props.day),{"react-datepicker__day--disabled":t.isDisabled(),"react-datepicker__day--excluded":t.isExcluded(),"react-datepicker__day--selected":t.isSelected(),"react-datepicker__day--keyboard-selected":t.isKeyboardSelected(),"react-datepicker__day--range-start":t.isRangeStart(),"react-datepicker__day--range-end":t.isRangeEnd(),"react-datepicker__day--in-range":t.isInRange(),"react-datepicker__day--in-selecting-range":t.isInSelectingRange(),"react-datepicker__day--selecting-range-start":t.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":t.isSelectingRangeEnd(),"react-datepicker__day--today":t.isCurrentDay(),"react-datepicker__day--weekend":t.isWeekend(),"react-datepicker__day--outside-month":t.isAfterMonth()||t.isBeforeMonth()},t.getHighLightedClass("react-datepicker__day--highlighted"),t.getHolidaysClass())}),u(t,"getAriaLabel",function(){var a=t.props,i=a.day,c=a.ariaLabelPrefixWhenEnabled,l=c===void 0?"Choose":c,d=a.ariaLabelPrefixWhenDisabled,f=d===void 0?"Not available":d,m=t.isDisabled()||t.isExcluded()?f:l;return"".concat(m," ").concat(W(i,"PPPP",t.props.locale))}),u(t,"getTitle",function(){var a=t.props,i=a.day,c=a.holidays,l=c===void 0?new Map:c,d=a.excludeDates,f=W(i,"MM.dd.yyyy"),m=[];return l.has(f)&&m.push.apply(m,Ye(l.get(f).holidayNames)),t.isExcluded()&&m.push(d==null?void 0:d.filter(function(h){return R(h.date?h.date:h,i)}).map(function(h){return h.message})),m.join(", ")}),u(t,"getTabIndex",function(a,i){var c=a||t.props.selected,l=i||t.props.preSelection,d=!(t.props.showWeekPicker&&(t.props.showWeekNumber||!t.isStartOfWeek()))&&(t.isKeyboardSelected()||t.isSameDay(c)&&R(l,c))?0:-1;return d}),u(t,"handleFocusDay",function(){var a,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=!1;t.getTabIndex()===0&&!i.isInputFocused&&t.isSameDay(t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(c=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(c=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(c=!0),t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()&&(c=!1),t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()&&(c=!1)),c&&((a=t.dayEl.current)===null||a===void 0||a.focus({preventScroll:!0}))}),u(t,"renderDayContents",function(){return t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()||t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()?null:t.props.renderDayContents?t.props.renderDayContents(hr(t.props.day),t.props.day):hr(t.props.day)}),u(t,"render",function(){return w.createElement("div",{ref:t.dayEl,className:t.getClassNames(t.props.day),onKeyDown:t.handleOnKeyDown,onClick:t.handleClick,onMouseEnter:t.props.usePointerEvent?void 0:t.handleMouseEnter,onPointerEnter:t.props.usePointerEvent?t.handleMouseEnter:void 0,tabIndex:t.getTabIndex(),"aria-label":t.getAriaLabel(),role:"option",title:t.getTitle(),"aria-disabled":t.isDisabled(),"aria-current":t.isCurrentDay()?"date":void 0,"aria-selected":t.isSelected()||t.isInRange()},t.renderDayContents(),t.getTitle()!==""&&w.createElement("span",{className:"overlay"},t.getTitle()))}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.handleFocusDay()}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e)}}])}(w.Component),ql=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"weekNumberEl",w.createRef()),u(t,"handleClick",function(a){t.props.onClick&&t.props.onClick(a)}),u(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),u(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!R(t.props.date,t.props.selected)&&R(t.props.date,t.props.preSelection)}),u(t,"getTabIndex",function(){return t.props.showWeekPicker&&t.props.showWeekNumber&&(t.isKeyboardSelected()||R(t.props.date,t.props.selected)&&R(t.props.preSelection,t.props.selected))?0:-1}),u(t,"handleFocusWeekNumber",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=!1;t.getTabIndex()===0&&!a.isInputFocused&&R(t.props.date,t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(i=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(i=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement&&document.activeElement.classList.contains("react-datepicker__week-number")&&(i=!0)),i&&t.weekNumberEl.current&&t.weekNumberEl.current.focus({preventScroll:!0})}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.handleFocusWeekNumber()}},{key:"componentDidUpdate",value:function(e){this.handleFocusWeekNumber(e)}},{key:"render",value:function(){var e=this.props,o=e.weekNumber,s=e.ariaLabelPrefix,a=s===void 0?"week ":s,i=e.onClick,c={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!i,"react-datepicker__week-number--selected":!!i&&R(this.props.date,this.props.selected),"react-datepicker__week-number--keyboard-selected":this.isKeyboardSelected()};return w.createElement("div",{ref:this.weekNumberEl,className:Z(c),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick,onKeyDown:this.handleOnKeyDown,tabIndex:this.getTabIndex()},o)}}],[{key:"defaultProps",get:function(){return{ariaLabelPrefix:"week "}}}])}(w.Component),Ul=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i)}),u(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),u(t,"handleWeekClick",function(a,i,c){typeof t.props.onWeekSelect=="function"&&t.props.onWeekSelect(a,i,c),t.props.showWeekPicker&&t.handleDayClick(a,c),t.props.shouldCloseOnSelect&&t.props.setOpen(!1)}),u(t,"formatWeekNumber",function(a){return t.props.formatWeekNumber?t.props.formatWeekNumber(a):vl(a)}),u(t,"renderDays",function(){var a=t.startOfWeek(),i=[],c=t.formatWeekNumber(a);if(t.props.showWeekNumber){var l=t.props.onWeekSelect||t.props.showWeekPicker?t.handleWeekClick.bind(t,a,c):void 0;i.push(w.createElement(ql,{key:"W",weekNumber:c,date:a,onClick:l,selected:t.props.selected,preSelection:t.props.preSelection,ariaLabelPrefix:t.props.ariaLabelPrefix,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef}))}return i.concat([0,1,2,3,4,5,6].map(function(d){var f=Re(a,d);return w.createElement(Vl,{ariaLabelPrefixWhenEnabled:t.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:t.props.disabledDayAriaLabelPrefix,key:f.valueOf(),day:f,month:t.props.month,onClick:t.handleDayClick.bind(t,f),usePointerEvent:t.props.usePointerEvent,onMouseEnter:t.handleDayMouseEnter.bind(t,f),minDate:t.props.minDate,maxDate:t.props.maxDate,calendarStartDay:t.props.calendarStartDay,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,renderDayContents:t.props.renderDayContents,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart,locale:t.props.locale})}))}),u(t,"startOfWeek",function(){return Pe(t.props.day,t.props.locale,t.props.calendarStartDay)}),u(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!R(t.startOfWeek(),t.props.selected)&&R(t.startOfWeek(),t.props.preSelection)}),t}return G(r,n),X(r,[{key:"render",value:function(){var e={"react-datepicker__week":!0,"react-datepicker__week--selected":R(this.startOfWeek(),this.props.selected),"react-datepicker__week--keyboard-selected":this.isKeyboardSelected()};return w.createElement("div",{className:Z(e)},this.renderDays())}}],[{key:"defaultProps",get:function(){return{shouldCloseOnSelect:!0}}}])}(w.Component),Xl=6,Xe={TWO_COLUMNS:"two_columns",THREE_COLUMNS:"three_columns",FOUR_COLUMNS:"four_columns"},cn=u(u(u({},Xe.TWO_COLUMNS,{grid:[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],verticalNavigationOffset:2}),Xe.THREE_COLUMNS,{grid:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]],verticalNavigationOffset:3}),Xe.FOUR_COLUMNS,{grid:[[0,1,2,3],[4,5,6,7],[8,9,10,11]],verticalNavigationOffset:4}),Ct=1;function $r(n,r){return n?Xe.FOUR_COLUMNS:r?Xe.TWO_COLUMNS:Xe.THREE_COLUMNS}var Gl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"MONTH_REFS",Ye(Array(12)).map(function(){return w.createRef()})),u(t,"QUARTER_REFS",Ye(Array(4)).map(function(){return w.createRef()})),u(t,"isDisabled",function(a){return Zt(a,t.props)}),u(t,"isExcluded",function(a){return Hn(a,t.props)}),u(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i,t.props.orderInDisplay)}),u(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),u(t,"handleMouseLeave",function(){t.props.onMouseLeave&&t.props.onMouseLeave()}),u(t,"isRangeStartMonth",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:ae(ee(c,a),l)}),u(t,"isRangeStartQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:At(qe(c,a),l)}),u(t,"isRangeEndMonth",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:ae(ee(c,a),d)}),u(t,"isRangeEndQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:At(qe(c,a),d)}),u(t,"isInSelectingRangeMonth",function(a){var i,c=t.props,l=c.day,d=c.selectsStart,f=c.selectsEnd,m=c.selectsRange,h=c.startDate,g=c.endDate,y=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(d||f||m)||!y?!1:d&&g?Dt(y,g,a,l):f&&h||m&&h&&!g?Dt(h,y,a,l):!1}),u(t,"isSelectingMonthRangeStart",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,d=c.startDate,f=c.selectsStart,m=ee(l,a),h=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return f?ae(m,h):ae(m,d)}),u(t,"isSelectingMonthRangeEnd",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,d=c.endDate,f=c.selectsEnd,m=c.selectsRange,h=ee(l,a),g=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return f||m?ae(h,g):ae(h,d)}),u(t,"isInSelectingRangeQuarter",function(a){var i,c=t.props,l=c.day,d=c.selectsStart,f=c.selectsEnd,m=c.selectsRange,h=c.startDate,g=c.endDate,y=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(d||f||m)||!y?!1:d&&g?Mt(y,g,a,l):f&&h||m&&h&&!g?Mt(h,y,a,l):!1}),u(t,"isWeekInMonth",function(a){var i=t.props.day,c=Re(a,6);return ae(a,i)||ae(c,i)}),u(t,"isCurrentMonth",function(a,i){return E(a)===E(F())&&i===te(F())}),u(t,"isCurrentQuarter",function(a,i){return E(a)===E(F())&&i===lt(F())}),u(t,"isSelectedMonth",function(a,i,c){return te(c)===i&&E(a)===E(c)}),u(t,"isSelectedQuarter",function(a,i,c){return lt(a)===i&&E(a)===E(c)}),u(t,"renderWeeks",function(){for(var a=[],i=t.props.fixedHeight,c=0,l=!1,d=Pe(Te(t.props.day),t.props.locale,t.props.calendarStartDay),f=t.props.showWeekPicker?Pe(t.props.selected,t.props.locale,t.props.calendarStartDay):t.props.selected,m=t.props.showWeekPicker?Pe(t.props.preSelection,t.props.locale,t.props.calendarStartDay):t.props.preSelection;a.push(w.createElement(Ul,{ariaLabelPrefix:t.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:t.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:t.props.disabledDayAriaLabelPrefix,key:c,day:d,month:te(t.props.day),onDayClick:t.handleDayClick,usePointerEvent:t.props.usePointerEvent,onDayMouseEnter:t.handleDayMouseEnter,onWeekSelect:t.props.onWeekSelect,formatWeekNumber:t.props.formatWeekNumber,locale:t.props.locale,minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:m,selected:f,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,showWeekNumber:t.props.showWeekNumbers,showWeekPicker:t.props.showWeekPicker,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,setOpen:t.props.setOpen,shouldCloseOnSelect:t.props.shouldCloseOnSelect,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,renderDayContents:t.props.renderDayContents,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,calendarStartDay:t.props.calendarStartDay,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart})),!l;){c++,d=$t(d,1);var h=i&&c>=Xl,g=!i&&!t.isWeekInMonth(d);if(h||g)if(t.props.peekNextMonth)l=!0;else break}return a}),u(t,"onMonthClick",function(a,i){var c=ee(t.props.day,i);Tt(c,t.props)||t.handleDayClick(Te(c),a)}),u(t,"onMonthMouseEnter",function(a){var i=ee(t.props.day,a);Tt(i,t.props)||t.handleDayMouseEnter(Te(i))}),u(t,"handleMonthNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.MONTH_REFS[a].current&&t.MONTH_REFS[a].current.focus())}),u(t,"onMonthKeyDown",function(a,i){var c=t.props,l=c.selected,d=c.preSelection,f=c.disabledKeyboardNavigation,m=c.showTwoColumnMonthYearPicker,h=c.showFourColumnMonthYearPicker,g=c.setPreSelection,y=c.handleOnMonthKeyDown,x=a.key;if(x!=="Tab"&&a.preventDefault(),!f){var v=$r(h,m),b=cn[v].verticalNavigationOffset,D=cn[v].grid;switch(x){case"Enter":t.onMonthClick(a,i),g(l);break;case"ArrowRight":t.handleMonthNavigation(i===11?0:i+Ct,de(d,Ct));break;case"ArrowLeft":t.handleMonthNavigation(i===0?11:i-Ct,tt(d,Ct));break;case"ArrowUp":t.handleMonthNavigation(D[0].includes(i)?i+12-b:i-b,tt(d,b));break;case"ArrowDown":t.handleMonthNavigation(D[D.length-1].includes(i)?i-12+b:i+b,de(d,b));break}}y&&y(a)}),u(t,"onQuarterClick",function(a,i){var c=qe(t.props.day,i);sn(c,t.props)||t.handleDayClick(Dr(c),a)}),u(t,"onQuarterMouseEnter",function(a){var i=qe(t.props.day,a);sn(i,t.props)||t.handleDayMouseEnter(Dr(i))}),u(t,"handleQuarterNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.QUARTER_REFS[a-1].current&&t.QUARTER_REFS[a-1].current.focus())}),u(t,"onQuarterKeyDown",function(a,i){var c=a.key;if(!t.props.disabledKeyboardNavigation)switch(c){case"Enter":t.onQuarterClick(a,i),t.props.setPreSelection(t.props.selected);break;case"ArrowRight":t.handleQuarterNavigation(i===4?1:i+1,co(t.props.preSelection,1));break;case"ArrowLeft":t.handleQuarterNavigation(i===1?4:i-1,gi(t.props.preSelection,1));break}}),u(t,"getMonthClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate,f=i.selected,m=i.minDate,h=i.maxDate,g=i.preSelection,y=i.monthClassName,x=i.excludeDates,v=i.includeDates,b=y?y(ee(c,a)):void 0,D=ee(c,a);return Z("react-datepicker__month-text","react-datepicker__month-".concat(a),b,{"react-datepicker__month-text--disabled":(m||h||x||v)&&Tt(D,t.props),"react-datepicker__month-text--selected":t.isSelectedMonth(c,a,f),"react-datepicker__month-text--keyboard-selected":!t.props.disabledKeyboardNavigation&&t.isSelectedMonth(c,a,g),"react-datepicker__month-text--in-selecting-range":t.isInSelectingRangeMonth(a),"react-datepicker__month-text--in-range":Dt(l,d,a,c),"react-datepicker__month-text--range-start":t.isRangeStartMonth(a),"react-datepicker__month-text--range-end":t.isRangeEndMonth(a),"react-datepicker__month-text--selecting-range-start":t.isSelectingMonthRangeStart(a),"react-datepicker__month-text--selecting-range-end":t.isSelectingMonthRangeEnd(a),"react-datepicker__month-text--today":t.isCurrentMonth(c,a)})}),u(t,"getTabIndex",function(a){var i=te(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),u(t,"getQuarterTabIndex",function(a){var i=lt(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),u(t,"getAriaLabel",function(a){var i=t.props,c=i.chooseDayAriaLabelPrefix,l=c===void 0?"Choose":c,d=i.disabledDayAriaLabelPrefix,f=d===void 0?"Not available":d,m=i.day,h=ee(m,a),g=t.isDisabled(h)||t.isExcluded(h)?f:l;return"".concat(g," ").concat(W(h,"MMMM yyyy"))}),u(t,"getQuarterClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate,f=i.selected,m=i.minDate,h=i.maxDate,g=i.preSelection,y=i.disabledKeyboardNavigation;return Z("react-datepicker__quarter-text","react-datepicker__quarter-".concat(a),{"react-datepicker__quarter-text--disabled":(m||h)&&sn(qe(c,a),t.props),"react-datepicker__quarter-text--selected":t.isSelectedQuarter(c,a,f),"react-datepicker__quarter-text--keyboard-selected":!y&&t.isSelectedQuarter(c,a,g),"react-datepicker__quarter-text--in-selecting-range":t.isInSelectingRangeQuarter(a),"react-datepicker__quarter-text--in-range":Mt(l,d,a,c),"react-datepicker__quarter-text--range-start":t.isRangeStartQuarter(a),"react-datepicker__quarter-text--range-end":t.isRangeEndQuarter(a)})}),u(t,"getMonthContent",function(a){var i=t.props,c=i.showFullMonthYearPicker,l=i.renderMonthContent,d=i.locale,f=i.day,m=bo(a,d),h=An(a,d);return l?l(a,m,h,f):c?h:m}),u(t,"getQuarterContent",function(a){var i=t.props,c=i.renderQuarterContent,l=i.locale,d=Pl(a,l);return c?c(a,d):d}),u(t,"renderMonths",function(){var a=t.props,i=a.showTwoColumnMonthYearPicker,c=a.showFourColumnMonthYearPicker,l=a.day,d=a.selected,f=cn[$r(c,i)].grid;return f.map(function(m,h){return w.createElement("div",{className:"react-datepicker__month-wrapper",key:h},m.map(function(g,y){return w.createElement("div",{ref:t.MONTH_REFS[g],key:y,onClick:function(v){t.onMonthClick(v,g)},onKeyDown:function(v){Mo(v)&&(v.preventDefault(),v.key="Enter"),t.onMonthKeyDown(v,g)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onMonthMouseEnter(g)},onPointerEnter:t.props.usePointerEvent?function(){return t.onMonthMouseEnter(g)}:void 0,tabIndex:t.getTabIndex(g),className:t.getMonthClassNames(g),role:"option","aria-label":t.getAriaLabel(g),"aria-current":t.isCurrentMonth(l,g)?"date":void 0,"aria-selected":t.isSelectedMonth(l,g,d)},t.getMonthContent(g))}))})}),u(t,"renderQuarters",function(){var a=t.props,i=a.day,c=a.selected,l=[1,2,3,4];return w.createElement("div",{className:"react-datepicker__quarter-wrapper"},l.map(function(d,f){return w.createElement("div",{key:f,ref:t.QUARTER_REFS[f],role:"option",onClick:function(h){t.onQuarterClick(h,d)},onKeyDown:function(h){t.onQuarterKeyDown(h,d)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onQuarterMouseEnter(d)},onPointerEnter:t.props.usePointerEvent?function(){return t.onQuarterMouseEnter(d)}:void 0,className:t.getQuarterClassNames(d),"aria-selected":t.isSelectedQuarter(i,d,c),tabIndex:t.getQuarterTabIndex(d),"aria-current":t.isCurrentQuarter(i,d)?"date":void 0},t.getQuarterContent(d))}))}),u(t,"getClassNames",function(){var a=t.props,i=a.selectingDate,c=a.selectsStart,l=a.selectsEnd,d=a.showMonthYearPicker,f=a.showQuarterYearPicker,m=a.showWeekPicker;return Z("react-datepicker__month",{"react-datepicker__month--selecting-range":i&&(c||l)},{"react-datepicker__monthPicker":d},{"react-datepicker__quarterPicker":f},{"react-datepicker__weekPicker":m})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e=this.props,o=e.showMonthYearPicker,s=e.showQuarterYearPicker,a=e.day,i=e.ariaLabelPrefix,c=i===void 0?"Month ":i,l=c?c.trim()+" ":"";return w.createElement("div",{className:this.getClassNames(),onMouseLeave:this.props.usePointerEvent?void 0:this.handleMouseLeave,onPointerLeave:this.props.usePointerEvent?this.handleMouseLeave:void 0,"aria-label":"".concat(l).concat(W(a,"MMMM, yyyy")),role:"listbox"},o?this.renderMonths():s?this.renderQuarters():this.renderWeeks())}}])}(w.Component),Co=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{height:null}),u(t,"scrollToTheSelectedTime",function(){requestAnimationFrame(function(){t.list&&(t.list.scrollTop=t.centerLi&&r.calcCenterPosition(t.props.monthRef?t.props.monthRef.clientHeight-t.header.clientHeight:t.list.clientHeight,t.centerLi))})}),u(t,"handleClick",function(a){(t.props.minTime||t.props.maxTime)&&_r(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&Cr(a,t.props)||t.props.onChange(a)}),u(t,"isSelectedTime",function(a){return t.props.selected&&Il(t.props.selected,a)}),u(t,"isDisabledTime",function(a){return(t.props.minTime||t.props.maxTime)&&_r(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&Cr(a,t.props)}),u(t,"liClasses",function(a){var i=["react-datepicker__time-list-item",t.props.timeClassName?t.props.timeClassName(a):void 0];return t.isSelectedTime(a)&&i.push("react-datepicker__time-list-item--selected"),t.isDisabledTime(a)&&i.push("react-datepicker__time-list-item--disabled"),t.props.injectTimes&&(ye(a)*60+we(a))%t.props.intervals!==0&&i.push("react-datepicker__time-list-item--injected"),i.join(" ")}),u(t,"handleOnKeyDown",function(a,i){a.key===" "&&(a.preventDefault(),a.key="Enter"),(a.key==="ArrowUp"||a.key==="ArrowLeft")&&a.target.previousSibling&&(a.preventDefault(),a.target.previousSibling.focus()),(a.key==="ArrowDown"||a.key==="ArrowRight")&&a.target.nextSibling&&(a.preventDefault(),a.target.nextSibling.focus()),a.key==="Enter"&&t.handleClick(i),t.props.handleOnKeyDown(a)}),u(t,"renderTimes",function(){for(var a=[],i=t.props.format?t.props.format:"p",c=t.props.intervals,l=t.props.selected||t.props.openToDate||F(),d=kl(l),f=t.props.injectTimes&&t.props.injectTimes.sort(function(b,D){return b-D}),m=60*Rl(l),h=m/c,g=0;g<h;g++){var y=mn(d,g*c);if(a.push(y),f){var x=Yl(d,y,g,c,f);a=a.concat(x)}}var v=a.reduce(function(b,D){return D.getTime()<=l.getTime()?D:b},a[0]);return a.map(function(b,D){return w.createElement("li",{key:D,onClick:t.handleClick.bind(t,b),className:t.liClasses(b),ref:function(_){b===v&&(t.centerLi=_)},onKeyDown:function(_){t.handleOnKeyDown(_,b)},tabIndex:b===v?0:-1,role:"option","aria-selected":t.isSelectedTime(b)?"true":void 0,"aria-disabled":t.isDisabledTime(b)?"true":void 0},W(b,i,t.props.locale))})}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.scrollToTheSelectedTime(),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight})}},{key:"render",value:function(){var e=this,o=this.state.height;return w.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},w.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(a){e.header=a}},w.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),w.createElement("div",{className:"react-datepicker__time"},w.createElement("div",{className:"react-datepicker__time-box"},w.createElement("ul",{className:"react-datepicker__time-list",ref:function(a){e.list=a},style:o?{height:o}:{},role:"listbox","aria-label":this.props.timeCaption},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return{intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}])}(w.Component);u(Co,"calcCenterPosition",function(n,r){return r.offsetTop-(n/2-r.clientHeight/2)});var Zl=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"YEAR_REFS",Ye(Array(e.props.yearItemNumber)).map(function(){return w.createRef()})),u(e,"isDisabled",function(o){return Zt(o,e.props)}),u(e,"isExcluded",function(o){return Hn(o,e.props)}),u(e,"selectingDate",function(){var o;return(o=e.props.selectingDate)!==null&&o!==void 0?o:e.props.preSelection}),u(e,"updateFocusOnPaginate",function(o){var s=(function(){this.YEAR_REFS[o].current.focus()}).bind(e);window.requestAnimationFrame(s)}),u(e,"handleYearClick",function(o,s){e.props.onDayClick&&e.props.onDayClick(o,s)}),u(e,"handleYearNavigation",function(o,s){var a=e.props,i=a.date,c=a.yearItemNumber,l=nt(i,c),d=l.startPeriod;e.isDisabled(s)||e.isExcluded(s)||(e.props.setPreSelection(s),o-d===-1?e.updateFocusOnPaginate(c-1):o-d===c?e.updateFocusOnPaginate(0):e.YEAR_REFS[o-d].current.focus())}),u(e,"isSameDay",function(o,s){return R(o,s)}),u(e,"isCurrentYear",function(o){return o===E(F())}),u(e,"isRangeStart",function(o){return e.props.startDate&&e.props.endDate&&fe(pe(F(),o),e.props.startDate)}),u(e,"isRangeEnd",function(o){return e.props.startDate&&e.props.endDate&&fe(pe(F(),o),e.props.endDate)}),u(e,"isInRange",function(o){return kt(o,e.props.startDate,e.props.endDate)}),u(e,"isInSelectingRange",function(o){var s=e.props,a=s.selectsStart,i=s.selectsEnd,c=s.selectsRange,l=s.startDate,d=s.endDate;return!(a||i||c)||!e.selectingDate()?!1:a&&d?kt(o,e.selectingDate(),d):i&&l||c&&l&&!d?kt(o,l,e.selectingDate()):!1}),u(e,"isSelectingRangeStart",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.startDate,i=s.selectsStart,c=pe(F(),o);return i?fe(c,e.selectingDate()):fe(c,a)}),u(e,"isSelectingRangeEnd",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.endDate,i=s.selectsEnd,c=s.selectsRange,l=pe(F(),o);return i||c?fe(l,e.selectingDate()):fe(l,a)}),u(e,"isKeyboardSelected",function(o){var s=st(pe(e.props.date,o));return!e.props.disabledKeyboardNavigation&&!e.props.inline&&!R(s,st(e.props.selected))&&R(s,st(e.props.preSelection))}),u(e,"onYearClick",function(o,s){var a=e.props.date;e.handleYearClick(st(pe(a,s)),o)}),u(e,"onYearKeyDown",function(o,s){var a=o.key,i=e.props.handleOnKeyDown;if(!e.props.disabledKeyboardNavigation)switch(a){case"Enter":e.onYearClick(o,s),e.props.setPreSelection(e.props.selected);break;case"ArrowRight":e.handleYearNavigation(s+1,Se(e.props.preSelection,1));break;case"ArrowLeft":e.handleYearNavigation(s-1,wt(e.props.preSelection,1));break}i&&i(o)}),u(e,"getYearClassNames",function(o){var s=e.props,a=s.date,i=s.minDate,c=s.maxDate,l=s.selected,d=s.excludeDates,f=s.includeDates,m=s.filterDate,h=s.yearClassName;return Z("react-datepicker__year-text","react-datepicker__year-".concat(o),h?h(pe(a,o)):void 0,{"react-datepicker__year-text--selected":o===E(l),"react-datepicker__year-text--disabled":(i||c||d||f||m)&&vo(o,e.props),"react-datepicker__year-text--keyboard-selected":e.isKeyboardSelected(o),"react-datepicker__year-text--range-start":e.isRangeStart(o),"react-datepicker__year-text--range-end":e.isRangeEnd(o),"react-datepicker__year-text--in-range":e.isInRange(o),"react-datepicker__year-text--in-selecting-range":e.isInSelectingRange(o),"react-datepicker__year-text--selecting-range-start":e.isSelectingRangeStart(o),"react-datepicker__year-text--selecting-range-end":e.isSelectingRangeEnd(o),"react-datepicker__year-text--today":e.isCurrentYear(o)})}),u(e,"getYearTabIndex",function(o){if(e.props.disabledKeyboardNavigation)return"-1";var s=E(e.props.preSelection);return o===s?"0":"-1"}),u(e,"getYearContainerClassNames",function(){var o=e.props,s=o.selectingDate,a=o.selectsStart,i=o.selectsEnd,c=o.selectsRange;return Z("react-datepicker__year",{"react-datepicker__year--selecting-range":s&&(a||i||c)})}),u(e,"getYearContent",function(o){return e.props.renderYearContent?e.props.renderYearContent(o):o}),e}return G(r,n),X(r,[{key:"render",value:function(){for(var e=this,o=[],s=this.props,a=s.date,i=s.yearItemNumber,c=s.onYearMouseEnter,l=s.onYearMouseLeave,d=nt(a,i),f=d.startPeriod,m=d.endPeriod,h=function(x){o.push(w.createElement("div",{ref:e.YEAR_REFS[x-f],onClick:function(b){e.onYearClick(b,x)},onKeyDown:function(b){Mo(b)&&(b.preventDefault(),b.key="Enter"),e.onYearKeyDown(b,x)},tabIndex:e.getYearTabIndex(x),className:e.getYearClassNames(x),onMouseEnter:e.props.usePointerEvent?void 0:function(v){return c(v,x)},onPointerEnter:e.props.usePointerEvent?function(v){return c(v,x)}:void 0,onMouseLeave:e.props.usePointerEvent?void 0:function(v){return l(v,x)},onPointerLeave:e.props.usePointerEvent?function(v){return l(v,x)}:void 0,key:x,"aria-current":e.isCurrentYear(x)?"date":void 0},e.getYearContent(x)))},g=f;g<=m;g++)h(g);return w.createElement("div",{className:this.getYearContainerClassNames()},w.createElement("div",{className:"react-datepicker__year-wrapper",onMouseLeave:this.props.usePointerEvent?void 0:this.props.clearSelectingDate,onPointerLeave:this.props.usePointerEvent?this.props.clearSelectingDate:void 0},o))}}])}(w.Component),Jl=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"onTimeChange",function(o){e.setState({time:o});var s=e.props.date,a=s instanceof Date&&!isNaN(s),i=a?s:new Date;i.setHours(o.split(":")[0]),i.setMinutes(o.split(":")[1]),e.props.onChange(i)}),u(e,"renderTimeInput",function(){var o=e.state.time,s=e.props,a=s.date,i=s.timeString,c=s.customTimeInput;return c?w.cloneElement(c,{date:a,value:o,onChange:e.onTimeChange}):w.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:o,onChange:function(d){e.onTimeChange(d.target.value||i)}})}),e.state={time:e.props.timeString},e}return G(r,n),X(r,[{key:"render",value:function(){return w.createElement("div",{className:"react-datepicker__input-time-container"},w.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),w.createElement("div",{className:"react-datepicker-time__input-container"},w.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,o){return e.timeString!==o.time?{time:e.timeString}:null}}])}(w.Component);function eu(n){var r=n.showTimeSelectOnly,t=r===void 0?!1:r,e=n.showTime,o=e===void 0?!1:e,s=n.className,a=n.children,i=t?"Choose Time":"Choose Date".concat(o?" and Time":"");return w.createElement("div",{className:s,role:"dialog","aria-label":i,"aria-modal":"true"},a)}var tu=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],nu=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(r.className||"").split(/\s+/);return tu.some(function(e){return t.indexOf(e)>=0})},ru=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"handleClickOutside",function(o){e.props.onClickOutside(o)}),u(e,"setClickOutsideRef",function(){return e.containerRef.current}),u(e,"handleDropdownFocus",function(o){nu(o.target)&&e.props.onDropdownFocus()}),u(e,"getDateInView",function(){var o=e.props,s=o.preSelection,a=o.selected,i=o.openToDate,c=Do(e.props),l=ko(e.props),d=F(),f=i||a||s;return f||(c&&He(d,c)?c:l&&Ee(d,l)?l:d)}),u(e,"increaseMonth",function(){e.setState(function(o){var s=o.date;return{date:de(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"decreaseMonth",function(){e.setState(function(o){var s=o.date;return{date:tt(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"handleDayClick",function(o,s,a){e.props.onSelect(o,s,a),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleDayMouseEnter",function(o){e.setState({selectingDate:o}),e.props.onDayMouseEnter&&e.props.onDayMouseEnter(o)}),u(e,"handleMonthMouseLeave",function(){e.setState({selectingDate:null}),e.props.onMonthMouseLeave&&e.props.onMonthMouseLeave()}),u(e,"handleYearMouseEnter",function(o,s){e.setState({selectingDate:pe(F(),s)}),e.props.onYearMouseEnter&&e.props.onYearMouseEnter(o,s)}),u(e,"handleYearMouseLeave",function(o,s){e.props.onYearMouseLeave&&e.props.onYearMouseLeave(o,s)}),u(e,"handleYearChange",function(o){e.props.onYearChange&&(e.props.onYearChange(o),e.setState({isRenderAriaLiveMessage:!0})),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleMonthChange",function(o){e.handleCustomMonthChange(o),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleCustomMonthChange",function(o){e.props.onMonthChange&&(e.props.onMonthChange(o),e.setState({isRenderAriaLiveMessage:!0}))}),u(e,"handleMonthYearChange",function(o){e.handleYearChange(o),e.handleMonthChange(o)}),u(e,"changeYear",function(o){e.setState(function(s){var a=s.date;return{date:pe(a,o)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"changeMonth",function(o){e.setState(function(s){var a=s.date;return{date:ee(a,o)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"changeMonthYear",function(o){e.setState(function(s){var a=s.date;return{date:pe(ee(a,te(o)),E(o))}},function(){return e.handleMonthYearChange(e.state.date)})}),u(e,"header",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=Pe(o,e.props.locale,e.props.calendarStartDay),a=[];return e.props.showWeekNumbers&&a.push(w.createElement("div",{key:"W",className:"react-datepicker__day-name"},e.props.weekLabel||"#")),a.concat([0,1,2,3,4,5,6].map(function(i){var c=Re(s,i),l=e.formatWeekday(c,e.props.locale),d=e.props.weekDayClassName?e.props.weekDayClassName(c):void 0;return w.createElement("div",{key:i,className:Z("react-datepicker__day-name",d)},l)}))}),u(e,"formatWeekday",function(o,s){return e.props.formatWeekDay?Cl(o,e.props.formatWeekDay,s):e.props.useWeekdaysShort?Sl(o,s):_l(o,s)}),u(e,"decreaseYear",function(){e.setState(function(o){var s=o.date;return{date:wt(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"clearSelectingDate",function(){e.setState({selectingDate:null})}),u(e,"renderPreviousButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=Tr(e.state.date,e.props);break;case e.props.showYearPicker:o=Tl(e.state.date,e.props);break;default:o=Sr(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"],a=["react-datepicker__navigation","react-datepicker__navigation--previous"],i=e.decreaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.decreaseYear),o&&e.props.showDisabledMonthNavigation&&(a.push("react-datepicker__navigation--previous--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,d=l.previousMonthButtonLabel,f=l.previousYearButtonLabel,m=e.props,h=m.previousMonthAriaLabel,g=h===void 0?typeof d=="string"?d:"Previous Month":h,y=m.previousYearAriaLabel,x=y===void 0?typeof f=="string"?f:"Previous Year":y;return w.createElement("button",{type:"button",className:a.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?x:g},w.createElement("span",{className:s.join(" ")},c?e.props.previousYearButtonLabel:e.props.previousMonthButtonLabel))}}}),u(e,"increaseYear",function(){e.setState(function(o){var s=o.date;return{date:Se(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"renderNextButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=Nr(e.state.date,e.props);break;case e.props.showYearPicker:o=Nl(e.state.date,e.props);break;default:o=Pr(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation","react-datepicker__navigation--next"],a=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"];e.props.showTimeSelect&&s.push("react-datepicker__navigation--next--with-time"),e.props.todayButton&&s.push("react-datepicker__navigation--next--with-today-button");var i=e.increaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.increaseYear),o&&e.props.showDisabledMonthNavigation&&(s.push("react-datepicker__navigation--next--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,d=l.nextMonthButtonLabel,f=l.nextYearButtonLabel,m=e.props,h=m.nextMonthAriaLabel,g=h===void 0?typeof d=="string"?d:"Next Month":h,y=m.nextYearAriaLabel,x=y===void 0?typeof f=="string"?f:"Next Year":y;return w.createElement("button",{type:"button",className:s.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?x:g},w.createElement("span",{className:a.join(" ")},c?e.props.nextYearButtonLabel:e.props.nextMonthButtonLabel))}}}),u(e,"renderCurrentMonth",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=["react-datepicker__current-month"];return e.props.showYearDropdown&&s.push("react-datepicker__current-month--hasYearDropdown"),e.props.showMonthDropdown&&s.push("react-datepicker__current-month--hasMonthDropdown"),e.props.showMonthYearDropdown&&s.push("react-datepicker__current-month--hasMonthYearDropdown"),w.createElement("div",{className:s.join(" ")},W(o,e.props.dateFormat,e.props.locale))}),u(e,"renderYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showYearDropdown||o))return w.createElement(jl,{adjustDateOnChange:e.props.adjustDateOnChange,date:e.state.date,onSelect:e.props.onSelect,setOpen:e.props.setOpen,dropdownMode:e.props.dropdownMode,onChange:e.changeYear,minDate:e.props.minDate,maxDate:e.props.maxDate,year:E(e.state.date),scrollableYearDropdown:e.props.scrollableYearDropdown,yearDropdownItemNumber:e.props.yearDropdownItemNumber})}),u(e,"renderMonthDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthDropdown||o))return w.createElement(Hl,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,onChange:e.changeMonth,month:te(e.state.date),useShortMonthInDropdown:e.props.useShortMonthInDropdown})}),u(e,"renderMonthYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthYearDropdown||o))return w.createElement(zl,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,dateFormat:e.props.dateFormat,onChange:e.changeMonthYear,minDate:e.props.minDate,maxDate:e.props.maxDate,date:e.state.date,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown})}),u(e,"handleTodayButtonClick",function(o){e.props.onSelect(kr(),o),e.props.setPreSelection&&e.props.setPreSelection(kr())}),u(e,"renderTodayButton",function(){if(!(!e.props.todayButton||e.props.showTimeSelectOnly))return w.createElement("div",{className:"react-datepicker__today-button",onClick:function(s){return e.handleTodayButtonClick(s)}},e.props.todayButton)}),u(e,"renderDefaultHeader",function(o){var s=o.monthDate,a=o.i;return w.createElement("div",{className:"react-datepicker__header ".concat(e.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},e.renderCurrentMonth(s),w.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode),onFocus:e.handleDropdownFocus},e.renderMonthDropdown(a!==0),e.renderMonthYearDropdown(a!==0),e.renderYearDropdown(a!==0)),w.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),u(e,"renderCustomHeader",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=o.monthDate,a=o.i;if(e.props.showTimeSelect&&!e.state.monthContainer||e.props.showTimeSelectOnly)return null;var i=Sr(e.state.date,e.props),c=Pr(e.state.date,e.props),l=Tr(e.state.date,e.props),d=Nr(e.state.date,e.props),f=!e.props.showMonthYearPicker&&!e.props.showQuarterYearPicker&&!e.props.showYearPicker;return w.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:e.props.onDropdownFocus},e.props.renderCustomHeader(be(be({},e.state),{},{customHeaderCount:a,monthDate:s,changeMonth:e.changeMonth,changeYear:e.changeYear,decreaseMonth:e.decreaseMonth,increaseMonth:e.increaseMonth,decreaseYear:e.decreaseYear,increaseYear:e.increaseYear,prevMonthButtonDisabled:i,nextMonthButtonDisabled:c,prevYearButtonDisabled:l,nextYearButtonDisabled:d})),f&&w.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),u(e,"renderYearHeader",function(o){var s=o.monthDate,a=e.props,i=a.showYearPicker,c=a.yearItemNumber,l=nt(s,c),d=l.startPeriod,f=l.endPeriod;return w.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},i?"".concat(d," - ").concat(f):E(s))}),u(e,"renderHeader",function(o){switch(!0){case e.props.renderCustomHeader!==void 0:return e.renderCustomHeader(o);case(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker):return e.renderYearHeader(o);default:return e.renderDefaultHeader(o)}}),u(e,"renderMonths",function(){var o;if(!(e.props.showTimeSelectOnly||e.props.showYearPicker)){for(var s=[],a=e.props.showPreviousMonths?e.props.monthsShown-1:0,i=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Se(e.state.date,a):tt(e.state.date,a),c=(o=e.props.monthSelectedIn)!==null&&o!==void 0?o:a,l=0;l<e.props.monthsShown;++l){var d=l-c+a,f=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Se(i,d):de(i,d),m="month-".concat(l),h=l<e.props.monthsShown-1,g=l>0;s.push(w.createElement("div",{key:m,ref:function(x){e.monthContainer=x},className:"react-datepicker__month-container"},e.renderHeader({monthDate:f,i:l}),w.createElement(Gl,{chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,ariaLabelPrefix:e.props.monthAriaLabelPrefix,onChange:e.changeMonthYear,day:f,dayClassName:e.props.dayClassName,calendarStartDay:e.props.calendarStartDay,monthClassName:e.props.monthClassName,onDayClick:e.handleDayClick,handleOnKeyDown:e.props.handleOnDayKeyDown,handleOnMonthKeyDown:e.props.handleOnKeyDown,usePointerEvent:e.props.usePointerEvent,onDayMouseEnter:e.handleDayMouseEnter,onMouseLeave:e.handleMonthMouseLeave,onWeekSelect:e.props.onWeekSelect,orderInDisplay:l,formatWeekNumber:e.props.formatWeekNumber,locale:e.props.locale,minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,highlightDates:e.props.highlightDates,holidays:e.props.holidays,selectingDate:e.state.selectingDate,includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,fixedHeight:e.props.fixedHeight,filterDate:e.props.filterDate,preSelection:e.props.preSelection,setPreSelection:e.props.setPreSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,showWeekNumbers:e.props.showWeekNumbers,startDate:e.props.startDate,endDate:e.props.endDate,peekNextMonth:e.props.peekNextMonth,setOpen:e.props.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,isInputFocused:e.props.isInputFocused,containerRef:e.containerRef,monthShowsDuplicateDaysEnd:h,monthShowsDuplicateDaysStart:g})))}return s}}),u(e,"renderYears",function(){if(!e.props.showTimeSelectOnly&&e.props.showYearPicker)return w.createElement("div",{className:"react-datepicker__year--container"},e.renderHeader({monthDate:e.state.date}),w.createElement(Zl,ht({onDayClick:e.handleDayClick,selectingDate:e.state.selectingDate,clearSelectingDate:e.clearSelectingDate,date:e.state.date},e.props,{onYearMouseEnter:e.handleYearMouseEnter,onYearMouseLeave:e.handleYearMouseLeave})))}),u(e,"renderTimeSection",function(){if(e.props.showTimeSelect&&(e.state.monthContainer||e.props.showTimeSelectOnly))return w.createElement(Co,{selected:e.props.selected,openToDate:e.props.openToDate,onChange:e.props.onTimeChange,timeClassName:e.props.timeClassName,format:e.props.timeFormat,includeTimes:e.props.includeTimes,intervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,todayButton:e.props.todayButton,showMonthDropdown:e.props.showMonthDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,monthRef:e.state.monthContainer,injectTimes:e.props.injectTimes,locale:e.props.locale,handleOnKeyDown:e.props.handleOnKeyDown,showTimeSelectOnly:e.props.showTimeSelectOnly})}),u(e,"renderInputTimeSection",function(){var o=new Date(e.props.selected),s=_e(o)&&!!e.props.selected,a=s?"".concat(Er(o.getHours()),":").concat(Er(o.getMinutes())):"";if(e.props.showTimeInput)return w.createElement(Jl,{date:o,timeString:a,timeInputLabel:e.props.timeInputLabel,onChange:e.props.onTimeChange,customTimeInput:e.props.customTimeInput})}),u(e,"renderAriaLiveRegion",function(){var o=nt(e.state.date,e.props.yearItemNumber),s=o.startPeriod,a=o.endPeriod,i;return e.props.showYearPicker?i="".concat(s," - ").concat(a):e.props.showMonthYearPicker||e.props.showQuarterYearPicker?i=E(e.state.date):i="".concat(An(te(e.state.date),e.props.locale)," ").concat(E(e.state.date)),w.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},e.state.isRenderAriaLiveMessage&&i)}),u(e,"renderChildren",function(){if(e.props.children)return w.createElement("div",{className:"react-datepicker__children-container"},e.props.children)}),e.containerRef=w.createRef(),e.state={date:e.getDateInView(),selectingDate:null,monthContainer:null,isRenderAriaLiveMessage:!1},e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=function(){e.setState({monthContainer:e.monthContainer})}())}},{key:"componentDidUpdate",value:function(e){var o=this;if(this.props.preSelection&&(!R(this.props.preSelection,e.preSelection)||this.props.monthSelectedIn!==e.monthSelectedIn)){var s=!ae(this.state.date,this.props.preSelection);this.setState({date:this.props.preSelection},function(){return s&&o.handleCustomMonthChange(o.state.date)})}else this.props.openToDate&&!R(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate})}},{key:"render",value:function(){var e=this.props.container||eu;return w.createElement("div",{style:{display:"contents"},ref:this.containerRef},w.createElement(e,{className:Z("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showTime:this.props.showTimeSelect||this.props.showTimeInput,showTimeSelectOnly:this.props.showTimeSelectOnly},this.renderAriaLiveRegion(),this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.renderChildren()))}}],[{key:"defaultProps",get:function(){return{onDropdownFocus:function(){},monthsShown:1,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:yt}}}])}(w.Component),ou=function(r){var t=r.icon,e=r.className,o=e===void 0?"":e,s=r.onClick,a="react-datepicker__calendar-icon";return w.isValidElement(t)?w.cloneElement(t,{className:"".concat(t.props.className||""," ").concat(a," ").concat(o),onClick:function(c){typeof t.props.onClick=="function"&&t.props.onClick(c),typeof s=="function"&&s(c)}}):typeof t=="string"?w.createElement("i",{className:"".concat(a," ").concat(t," ").concat(o),"aria-hidden":"true",onClick:s}):w.createElement("svg",{className:"".concat(a," ").concat(o),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",onClick:s},w.createElement("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"}))},au=ou,_o=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),e.el=document.createElement("div"),e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.portalRoot=(this.props.portalHost||document).getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),(this.props.portalHost||document.body).appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el)}},{key:"render",value:function(){return Fo.createPortal(this.props.children,this.el)}}])}(w.Component),su="[tabindex], a, button, input, select, textarea",iu=function(r){return!r.disabled&&r.tabIndex!==-1},So=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"getTabChildren",function(){return Array.prototype.slice.call(e.tabLoopRef.current.querySelectorAll(su),1,-1).filter(iu)}),u(e,"handleFocusStart",function(){var o=e.getTabChildren();o&&o.length>1&&o[o.length-1].focus()}),u(e,"handleFocusEnd",function(){var o=e.getTabChildren();o&&o.length>1&&o[0].focus()}),e.tabLoopRef=w.createRef(),e}return G(r,n),X(r,[{key:"render",value:function(){return this.props.enableTabLoop?w.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},w.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,w.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return{enableTabLoop:!0}}}])}(w.Component);function cu(n){var r=function(e){var o=be(be({},e),{},{popperModifiers:e.popperModifiers||[],popperProps:e.popperProps||{},hidePopper:typeof e.hidePopper=="boolean"?e.hidePopper:!0}),s=w.useRef(),a=cl(be({open:!o.hidePopper,whileElementsMounted:Ma,placement:o.popperPlacement,middleware:[Ca({padding:15}),sa(10),Sa({element:s})].concat(Ye(o.popperModifiers))},o.popperProps));return w.createElement(n,ht({},o,{popperProps:be(be({},a),{},{arrowRef:s})}))};return r}var lu=function(n){function r(){return U(this,r),q(this,r,arguments)}return G(r,n),X(r,[{key:"render",value:function(){var e=this.props,o=e.className,s=e.wrapperClassName,a=e.hidePopper,i=e.popperComponent,c=e.targetComponent,l=e.enableTabLoop,d=e.popperOnKeyDown,f=e.portalId,m=e.portalHost,h=e.popperProps,g=e.showArrow,y;if(!a){var x=Z("react-datepicker-popper",o);y=w.createElement(So,{enableTabLoop:l},w.createElement("div",{ref:h.refs.setFloating,style:h.floatingStyles,className:x,"data-placement":h.placement,onKeyDown:d},i,g&&w.createElement(nl,{ref:h.arrowRef,context:h.context,fill:"currentColor",strokeWidth:1,height:8,width:16,style:{transform:"translateY(-1px)"},className:"react-datepicker__triangle"})))}this.props.popperContainer&&(y=w.createElement(this.props.popperContainer,{},y)),f&&!a&&(y=w.createElement(_o,{portalId:f,portalHost:m},y));var v=Z("react-datepicker-wrapper",s);return w.createElement(w.Fragment,null,w.createElement("div",{ref:h.refs.setReference,className:v},c),y)}}],[{key:"defaultProps",get:function(){return{hidePopper:!0}}}])}(w.Component),uu=cu(lu),Lr="react-datepicker-ignore-onclickoutside",du=Gt(ru);function pu(n,r){return n&&r?te(n)!==te(r)||E(n)!==E(r):n!==r}var ln="Date input not valid.",Po=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"getPreSelection",function(){return e.props.openToDate?e.props.openToDate:e.props.selectsEnd&&e.props.startDate?e.props.startDate:e.props.selectsStart&&e.props.endDate?e.props.endDate:F()}),u(e,"modifyHolidays",function(){var o;return(o=e.props.holidays)===null||o===void 0?void 0:o.reduce(function(s,a){var i=new Date(a.date);return dt(i)?[].concat(Ye(s),[be(be({},a),{},{date:i})]):s},[])}),u(e,"calcInitialState",function(){var o,s=e.getPreSelection(),a=Do(e.props),i=ko(e.props),c=a&&He(s,ge(a))?a:i&&Ee(s,yn(i))?i:s;return{open:e.props.startOpen||!1,preventFocus:!1,preSelection:(o=e.props.selectsRange?e.props.startDate:e.props.selected)!==null&&o!==void 0?o:c,highlightDates:Or(e.props.highlightDates),focused:!1,shouldFocusDayInline:!1,isRenderAriaLiveMessage:!1}}),u(e,"clearPreventFocusTimeout",function(){e.preventFocusTimeout&&clearTimeout(e.preventFocusTimeout)}),u(e,"setFocus",function(){e.input&&e.input.focus&&e.input.focus({preventScroll:!0})}),u(e,"setBlur",function(){e.input&&e.input.blur&&e.input.blur(),e.cancelFocusInput()}),u(e,"setOpen",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;e.setState({open:o,preSelection:o&&e.state.open?e.state.preSelection:e.calcInitialState().preSelection,lastPreSelectChange:un},function(){o||e.setState(function(a){return{focused:s?a.focused:!1}},function(){!s&&e.setBlur(),e.setState({inputValue:null})})})}),u(e,"inputOk",function(){return Ae(e.state.preSelection)}),u(e,"isCalendarOpen",function(){return e.props.open===void 0?e.state.open&&!e.props.disabled&&!e.props.readOnly:e.props.open}),u(e,"handleFocus",function(o){e.state.preventFocus||(e.props.onFocus(o),!e.props.preventOpenOnFocus&&!e.props.readOnly&&e.setOpen(!0)),e.setState({focused:!0})}),u(e,"sendFocusBackToInput",function(){e.preventFocusTimeout&&e.clearPreventFocusTimeout(),e.setState({preventFocus:!0},function(){e.preventFocusTimeout=setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})})}),u(e,"cancelFocusInput",function(){clearTimeout(e.inputFocusTimeout),e.inputFocusTimeout=null}),u(e,"deferFocusInput",function(){e.cancelFocusInput(),e.inputFocusTimeout=setTimeout(function(){return e.setFocus()},1)}),u(e,"handleDropdownFocus",function(){e.cancelFocusInput()}),u(e,"handleBlur",function(o){(!e.state.open||e.props.withPortal||e.props.showTimeInput)&&e.props.onBlur(o),e.setState({focused:!1})}),u(e,"handleCalendarClickOutside",function(o){e.props.inline||e.setOpen(!1),e.props.onClickOutside(o),e.props.withPortal&&o.preventDefault()}),u(e,"handleChange",function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];var i=s[0];if(!(e.props.onChangeRaw&&(e.props.onChangeRaw.apply(e,s),typeof i.isDefaultPrevented!="function"||i.isDefaultPrevented()))){e.setState({inputValue:i.target.value,lastPreSelectChange:fu});var c=yl(i.target.value,e.props.dateFormat,e.props.locale,e.props.strictParsing,e.props.minDate);e.props.showTimeSelectOnly&&e.props.selected&&c&&!R(c,e.props.selected)&&(c=ll(e.props.selected,{hours:ye(c),minutes:we(c),seconds:fr(c)})),(c||!i.target.value)&&e.setSelected(c,i,!0)}}),u(e,"handleSelect",function(o,s,a){if(e.props.shouldCloseOnSelect&&!e.props.showTimeSelect&&e.sendFocusBackToInput(),e.props.onChangeRaw&&e.props.onChangeRaw(s),e.setSelected(o,s,!1,a),e.props.showDateSelect&&e.setState({isRenderAriaLiveMessage:!0}),!e.props.shouldCloseOnSelect||e.props.showTimeSelect)e.setPreSelection(o);else if(!e.props.inline){e.props.selectsRange||e.setOpen(!1);var i=e.props,c=i.startDate,l=i.endDate;c&&!l&&!Ir(o,c)&&e.setOpen(!1)}}),u(e,"setSelected",function(o,s,a,i){var c=o;if(e.props.showYearPicker){if(c!==null&&vo(E(c),e.props))return}else if(e.props.showMonthYearPicker){if(c!==null&&Tt(c,e.props))return}else if(c!==null&&Zt(c,e.props))return;var l=e.props,d=l.onChange,f=l.selectsRange,m=l.startDate,h=l.endDate,g=l.selectsMultiple,y=l.selectedDates,x=l.minTime;if(!$e(e.props.selected,c)||e.props.allowSameDay||f||g)if(c!==null&&(e.props.selected&&(!a||!e.props.showTimeSelect&&!e.props.showTimeSelectOnly&&!e.props.showTimeInput)&&(c=an(c,{hour:ye(e.props.selected),minute:we(e.props.selected),second:fr(e.props.selected)})),!a&&(e.props.showTimeSelect||e.props.showTimeSelectOnly)&&x&&(c=an(c,{hour:x.getHours(),minute:x.getMinutes(),second:x.getSeconds()})),e.props.inline||e.setState({preSelection:c}),e.props.focusSelectedMonth||e.setState({monthSelectedIn:i})),f){var v=!m&&!h,b=m&&!h,D=m&&h;v?d([c,null],s):b&&(c===null?d([null,null],s):Ir(c,m)?d([c,null],s):d([m,c],s)),D&&d([c,null],s)}else if(g)if(!(y!=null&&y.length))d([c],s);else{var T=y.some(function(O){return R(O,c)});if(T){var _=y.filter(function(O){return!R(O,c)});d(_,s)}else d([].concat(Ye(y),[c]),s)}else d(c,s);a||(e.props.onSelect(c,s),e.setState({inputValue:null}))}),u(e,"setPreSelection",function(o){var s=typeof e.props.minDate<"u",a=typeof e.props.maxDate<"u",i=!0;if(o){var c=ge(o);if(s&&a)i=it(o,e.props.minDate,e.props.maxDate);else if(s){var l=ge(e.props.minDate);i=Ee(o,l)||$e(c,l)}else if(a){var d=yn(e.props.maxDate);i=He(o,d)||$e(c,d)}}i&&e.setState({preSelection:o})}),u(e,"toggleCalendar",function(){e.setOpen(!e.state.open)}),u(e,"handleTimeChange",function(o){var s=e.props.selected?e.props.selected:e.getPreSelection(),a=e.props.selected?o:an(s,{hour:ye(o),minute:we(o)});e.setState({preSelection:a}),e.props.onChange(a),e.props.shouldCloseOnSelect&&(e.sendFocusBackToInput(),e.setOpen(!1)),e.props.showTimeInput&&e.setOpen(!0),(e.props.showTimeSelectOnly||e.props.showTimeSelect)&&e.setState({isRenderAriaLiveMessage:!0}),e.setState({inputValue:null})}),u(e,"onInputClick",function(){!e.props.disabled&&!e.props.readOnly&&e.setOpen(!0),e.props.onInputClick()}),u(e,"onInputKeyDown",function(o){e.props.onKeyDown(o);var s=o.key;if(!e.state.open&&!e.props.inline&&!e.props.preventOpenOnFocus){(s==="ArrowDown"||s==="ArrowUp"||s==="Enter")&&e.onInputClick();return}if(e.state.open){if(s==="ArrowDown"||s==="ArrowUp"){o.preventDefault();var a=e.props.showWeekPicker&&e.props.showWeekNumbers?'.react-datepicker__week-number[tabindex="0"]':'.react-datepicker__day[tabindex="0"]',i=e.calendar.componentNode&&e.calendar.componentNode.querySelector(a);i&&i.focus({preventScroll:!0});return}var c=F(e.state.preSelection);s==="Enter"?(o.preventDefault(),e.inputOk()&&e.state.lastPreSelectChange===un?(e.handleSelect(c,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(c)):e.setOpen(!1)):s==="Escape"?(o.preventDefault(),e.sendFocusBackToInput(),e.setOpen(!1)):s==="Tab"&&e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:ln})}}),u(e,"onPortalKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.setState({preventFocus:!0},function(){e.setOpen(!1),setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})}))}),u(e,"onDayKeyDown",function(o){e.props.onKeyDown(o);var s=o.key,a=o.shiftKey,i=F(e.state.preSelection);if(s==="Enter")o.preventDefault(),e.handleSelect(i,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(i);else if(s==="Escape")o.preventDefault(),e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:ln});else if(!e.props.disabledKeyboardNavigation){var c;switch(s){case"ArrowLeft":e.props.showWeekPicker?c=pr(i,1):c=mi(i,1);break;case"ArrowRight":e.props.showWeekPicker?c=$t(i,1):c=Re(i,1);break;case"ArrowUp":c=pr(i,1);break;case"ArrowDown":c=$t(i,1);break;case"PageUp":c=a?wt(i,1):tt(i,1);break;case"PageDown":c=a?Se(i,1):de(i,1);break;case"Home":c=Pe(i,e.props.locale,e.props.calendarStartDay);break;case"End":c=Ml(i);break;default:c=null;break}if(!c){e.props.onInputError&&e.props.onInputError({code:1,msg:ln});return}if(o.preventDefault(),e.setState({lastPreSelectChange:un}),e.props.adjustDateOnChange&&e.setSelected(c),e.setPreSelection(c),e.props.inline){var l=te(i),d=te(c),f=E(i),m=E(c);l!==d||f!==m?e.setState({shouldFocusDayInline:!0}):e.setState({shouldFocusDayInline:!1})}}}),u(e,"onPopperKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.sendFocusBackToInput())}),u(e,"onClearClick",function(o){o&&o.preventDefault&&o.preventDefault(),e.sendFocusBackToInput(),e.props.selectsRange?e.props.onChange([null,null],o):e.props.onChange(null,o),e.setState({inputValue:null})}),u(e,"clear",function(){e.onClearClick()}),u(e,"onScroll",function(o){typeof e.props.closeOnScroll=="boolean"&&e.props.closeOnScroll?(o.target===document||o.target===document.documentElement||o.target===document.body)&&e.setOpen(!1):typeof e.props.closeOnScroll=="function"&&e.props.closeOnScroll(o)&&e.setOpen(!1)}),u(e,"renderCalendar",function(){return!e.props.inline&&!e.isCalendarOpen()?null:w.createElement(du,{ref:function(s){e.calendar=s},locale:e.props.locale,calendarStartDay:e.props.calendarStartDay,chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,monthAriaLabelPrefix:e.props.monthAriaLabelPrefix,adjustDateOnChange:e.props.adjustDateOnChange,setOpen:e.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,dateFormat:e.props.dateFormatCalendar,useWeekdaysShort:e.props.useWeekdaysShort,formatWeekDay:e.props.formatWeekDay,dropdownMode:e.props.dropdownMode,selected:e.props.selected,preSelection:e.state.preSelection,onSelect:e.handleSelect,onWeekSelect:e.props.onWeekSelect,openToDate:e.props.openToDate,minDate:e.props.minDate,maxDate:e.props.maxDate,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,startDate:e.props.startDate,endDate:e.props.endDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,filterDate:e.props.filterDate,onClickOutside:e.handleCalendarClickOutside,formatWeekNumber:e.props.formatWeekNumber,highlightDates:e.state.highlightDates,holidays:El(e.modifyHolidays()),includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,includeTimes:e.props.includeTimes,injectTimes:e.props.injectTimes,inline:e.props.inline,shouldFocusDayInline:e.state.shouldFocusDayInline,peekNextMonth:e.props.peekNextMonth,showMonthDropdown:e.props.showMonthDropdown,showPreviousMonths:e.props.showPreviousMonths,useShortMonthInDropdown:e.props.useShortMonthInDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showWeekNumbers:e.props.showWeekNumbers,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,forceShowMonthNavigation:e.props.forceShowMonthNavigation,showDisabledMonthNavigation:e.props.showDisabledMonthNavigation,scrollableYearDropdown:e.props.scrollableYearDropdown,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown,todayButton:e.props.todayButton,weekLabel:e.props.weekLabel,outsideClickIgnoreClass:Lr,fixedHeight:e.props.fixedHeight,monthsShown:e.props.monthsShown,monthSelectedIn:e.state.monthSelectedIn,onDropdownFocus:e.handleDropdownFocus,onMonthChange:e.props.onMonthChange,onYearChange:e.props.onYearChange,dayClassName:e.props.dayClassName,weekDayClassName:e.props.weekDayClassName,monthClassName:e.props.monthClassName,timeClassName:e.props.timeClassName,showDateSelect:e.props.showDateSelect,showTimeSelect:e.props.showTimeSelect,showTimeSelectOnly:e.props.showTimeSelectOnly,onTimeChange:e.handleTimeChange,timeFormat:e.props.timeFormat,timeIntervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,className:e.props.calendarClassName,container:e.props.calendarContainer,yearItemNumber:e.props.yearItemNumber,yearDropdownItemNumber:e.props.yearDropdownItemNumber,previousMonthAriaLabel:e.props.previousMonthAriaLabel,previousMonthButtonLabel:e.props.previousMonthButtonLabel,nextMonthAriaLabel:e.props.nextMonthAriaLabel,nextMonthButtonLabel:e.props.nextMonthButtonLabel,previousYearAriaLabel:e.props.previousYearAriaLabel,previousYearButtonLabel:e.props.previousYearButtonLabel,nextYearAriaLabel:e.props.nextYearAriaLabel,nextYearButtonLabel:e.props.nextYearButtonLabel,timeInputLabel:e.props.timeInputLabel,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,renderCustomHeader:e.props.renderCustomHeader,popperProps:e.props.popperProps,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,onDayMouseEnter:e.props.onDayMouseEnter,onMonthMouseLeave:e.props.onMonthMouseLeave,onYearMouseEnter:e.props.onYearMouseEnter,onYearMouseLeave:e.props.onYearMouseLeave,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,showTimeInput:e.props.showTimeInput,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,excludeScrollbar:e.props.excludeScrollbar,handleOnKeyDown:e.props.onKeyDown,handleOnDayKeyDown:e.onDayKeyDown,isInputFocused:e.state.focused,customTimeInput:e.props.customTimeInput,setPreSelection:e.setPreSelection,usePointerEvent:e.props.usePointerEvent,yearClassName:e.props.yearClassName},e.props.children)}),u(e,"renderAriaLiveRegion",function(){var o=e.props,s=o.dateFormat,a=o.locale,i=e.props.showTimeInput||e.props.showTimeSelect,c=i?"PPPPp":"PPPP",l;return e.props.selectsRange?l="Selected start date: ".concat(ce(e.props.startDate,{dateFormat:c,locale:a}),". ").concat(e.props.endDate?"End date: "+ce(e.props.endDate,{dateFormat:c,locale:a}):""):e.props.showTimeSelectOnly?l="Selected time: ".concat(ce(e.props.selected,{dateFormat:s,locale:a})):e.props.showYearPicker?l="Selected year: ".concat(ce(e.props.selected,{dateFormat:"yyyy",locale:a})):e.props.showMonthYearPicker?l="Selected month: ".concat(ce(e.props.selected,{dateFormat:"MMMM yyyy",locale:a})):e.props.showQuarterYearPicker?l="Selected quarter: ".concat(ce(e.props.selected,{dateFormat:"yyyy, QQQ",locale:a})):l="Selected date: ".concat(ce(e.props.selected,{dateFormat:c,locale:a})),w.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},l)}),u(e,"renderDateInput",function(){var o,s=Z(e.props.className,u({},Lr,e.state.open)),a=e.props.customInput||w.createElement("input",{type:"text"}),i=e.props.customInputRef||"ref",c=typeof e.props.value=="string"?e.props.value:typeof e.state.inputValue=="string"?e.state.inputValue:e.props.selectsRange?xl(e.props.startDate,e.props.endDate,e.props):e.props.selectsMultiple?bl(e.props.selectedDates,e.props):ce(e.props.selected,e.props);return w.cloneElement(a,(o={},u(u(u(u(u(u(u(u(u(u(o,i,function(l){e.input=l}),"value",c),"onBlur",e.handleBlur),"onChange",e.handleChange),"onClick",e.onInputClick),"onFocus",e.handleFocus),"onKeyDown",e.onInputKeyDown),"id",e.props.id),"name",e.props.name),"form",e.props.form),u(u(u(u(u(u(u(u(u(u(o,"autoFocus",e.props.autoFocus),"placeholder",e.props.placeholderText),"disabled",e.props.disabled),"autoComplete",e.props.autoComplete),"className",Z(a.props.className,s)),"title",e.props.title),"readOnly",e.props.readOnly),"required",e.props.required),"tabIndex",e.props.tabIndex),"aria-describedby",e.props.ariaDescribedBy),u(u(u(o,"aria-invalid",e.props.ariaInvalid),"aria-labelledby",e.props.ariaLabelledBy),"aria-required",e.props.ariaRequired)))}),u(e,"renderClearButton",function(){var o=e.props,s=o.isClearable,a=o.disabled,i=o.selected,c=o.startDate,l=o.endDate,d=o.clearButtonTitle,f=o.clearButtonClassName,m=f===void 0?"":f,h=o.ariaLabelClose,g=h===void 0?"Close":h,y=o.selectedDates;return s&&(i!=null||c!=null||l!=null||y!=null&&y.length)?w.createElement("button",{type:"button",className:Z("react-datepicker__close-icon",m,{"react-datepicker__close-icon--disabled":a}),disabled:a,"aria-label":g,onClick:e.onClearClick,title:d,tabIndex:-1}):null}),e.state=e.calcInitialState(),e.preventFocusTimeout=null,e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0)}},{key:"componentDidUpdate",value:function(e,o){e.inline&&pu(e.selected,this.props.selected)&&this.setPreSelection(this.props.selected),this.state.monthSelectedIn!==void 0&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:Or(this.props.highlightDates)}),!o.focused&&!$e(e.selected,this.props.selected)&&this.setState({inputValue:null}),o.open!==this.state.open&&(o.open===!1&&this.state.open===!0&&this.props.onCalendarOpen(),o.open===!0&&this.state.open===!1&&this.props.onCalendarClose())}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0)}},{key:"renderInputContainer",value:function(){var e=this.props,o=e.showIcon,s=e.icon,a=e.calendarIconClassname,i=e.toggleCalendarOnIconClick,c=this.state.open;return w.createElement("div",{className:"react-datepicker__input-container".concat(o?" react-datepicker__view-calendar-icon":"")},o&&w.createElement(au,ht({icon:s,className:"".concat(a," ").concat(c&&"react-datepicker-ignore-onclickoutside")},i?{onClick:this.toggleCalendar}:null)),this.state.isRenderAriaLiveMessage&&this.renderAriaLiveRegion(),this.renderDateInput(),this.renderClearButton())}},{key:"render",value:function(){var e=this.renderCalendar();if(this.props.inline)return e;if(this.props.withPortal){var o=this.state.open?w.createElement(So,{enableTabLoop:this.props.enableTabLoop},w.createElement("div",{className:"react-datepicker__portal",tabIndex:-1,onKeyDown:this.onPortalKeyDown},e)):null;return this.state.open&&this.props.portalId&&(o=w.createElement(_o,{portalId:this.props.portalId,portalHost:this.props.portalHost},o)),w.createElement("div",null,this.renderInputContainer(),o)}return w.createElement(uu,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,portalHost:this.props.portalHost,popperModifiers:this.props.popperModifiers,targetComponent:this.renderInputContainer(),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop,showArrow:this.props.showPopperArrow})}}],[{key:"defaultProps",get:function(){return{allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,selectsDisabledDaysInRange:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,showWeekPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthAriaLabel:"Previous Month",previousMonthButtonLabel:"Previous Month",nextMonthAriaLabel:"Next Month",nextMonthButtonLabel:"Next Month",previousYearAriaLabel:"Previous Year",previousYearButtonLabel:"Previous Year",nextYearAriaLabel:"Next Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:yt,focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:void 0,toggleCalendarOnIconClick:!1,usePointerEvent:!1}}}])}(w.Component),fu="input",un="navigate";const hu=P.div`
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

  @media ${({theme:n})=>n.device.tablet} {
    width: 704px;
    height: 504px;
    padding: 32px 24px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    width: 592px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
    font-size: 16px;
  }
  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    /* font-weight: 500; */
    line-height: 32px;
    text-align: left;
  }

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    /* font-weight: 500; */
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
    /* font-weight: 700; */
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
`,To=({isModalOpen:n,closeModal:r})=>{const[t,e]=k.useState(50),[o,s]=k.useState(new Date),a=Be(),i=()=>{e(m=>m+50)},c=()=>{t>=50&&e(m=>m-50)},l=m=>{s(m)},d=m=>{m.preventDefault();const h=o.getTimezoneOffset();a(jo({date:o,ml:t,timeZoneOffset:h})),r()},f=m=>{const h=parseInt(m.target.value);e(h)};return p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(hu,{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Add water"}),p.jsx(Ht,{className:"close",onClick:r})]}),p.jsx("p",{children:"Choose of water:"}),p.jsxs("form",{onSubmit:d,children:[p.jsxs("label",{children:["Amount of water:",p.jsxs("div",{className:"counter",children:[p.jsx("button",{className:"counterBtn",type:"button",onClick:c,children:p.jsx(In,{})}),p.jsxs("span",{className:"waterAmount",children:[t,"ml"]}),p.jsx("button",{className:"counterBtn",type:"button",onClick:i,children:p.jsx(Yn,{})})]})]}),p.jsxs("label",{children:["Recording time:",p.jsx(Po,{className:"input",selected:o,onChange:m=>l(m),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),p.jsxs("label",{children:["Enter the value of the water used:",p.jsx("input",{className:"input",type:"number",value:t,onChange:f})]}),p.jsxs("div",{className:"buttons",children:[p.jsxs("span",{className:"amount",children:[t,"ml"]}),p.jsx("button",{className:"confirm",type:"submit",onClick:d,children:"Save"})]})]})]})})})},mu=()=>{const[n,r]=k.useState(!1),t=ve(La),e=Be(),o=()=>{r(!0)},s=()=>{r(!1)},a=t>100?100:t;return k.useEffect(()=>{e(Wo())},[e]),p.jsx(p.Fragment,{children:p.jsxs(ls,{children:[p.jsx("h3",{children:"Today"}),p.jsxs("div",{className:"box",children:[p.jsx(us,{children:p.jsx("div",{className:"progress-bar-container",children:p.jsxs("div",{className:"progress-bar",children:[p.jsx("div",{className:"progress",style:{width:`${a}%`}}),p.jsx("div",{className:"line-0",children:"|"}),p.jsx("div",{className:"line-50",children:"|"}),p.jsx("div",{className:"line-100",children:"|"}),p.jsx("div",{className:"marker-0",children:"0%"}),p.jsx("div",{className:"marker-50",children:"50%"}),p.jsx("div",{className:"marker-100",children:"100%"}),p.jsx("div",{className:"indicator",style:{left:`${a}%`},children:p.jsx("p",{className:"progress-text",children:t>100?`${t}%`:`${a}%`})})]})})}),p.jsxs(ds,{onClick:o,children:[p.jsx(ps,{width:"20px",height:"20px",children:p.jsx("use",{xlinkHref:`${Le}#plus-circle`})})," ",p.jsx("p",{children:"Add Water"})]})]}),n&&p.jsx(To,{isModalOpen:n,closeModal:s})]})})},gu=P.div`
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
      justify-content: space-between;
      flex-direction: column;
      gap: 2px;
      align-items: center;

      border-radius: 10px;
      padding: 6px 5px 8px 4px;
      width: 100%;
      max-height: 175px;
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
      max-height: 169px;
    }
  }
  @media ${({theme:n})=>n.device.desktop} {
    .waterList {
      width: 100%;
      max-height: 169px;
    }
  }
`,wu=P.div`
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
  background-color: white;
  color: black;

  width: 280px;
  height: 648px;


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
      font-size: 12px;
      line-height: 2;
    }
    .input {
      border: 1px solid #d7e3ff;
      border-radius: 6px;
      padding: 12px 10px;
      width: 256px;
      height: 44px;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 16px;
    }
    .waterAmountConfirm {
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
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);    
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      color: white;
    }
    .confirm:hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
    }
  }

  @media ${({theme:n})=>n.device.tablet} {    
    width: 704px;
    height: 648px;    
    padding: 32px 24px;
    .currentDrink {
      width: 254px;
    }
    .input {
      width: 544px;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 24px;
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
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
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
  }
  .counterBtn {
    width: 44px;
    height: 44px;
    border: 1px solid #9ebbff;
    border-radius: 50%;
    color: #407bff;
    background-color: transparent;
  }

  .waterAmount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 36px;
    padding: 6px, 10px;
    background-color: #d7e3ff;
    color: #407bff;
    border-radius: 40px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
  }

  .input {
    display: flex;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    color: #407bff;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
  
`,yu=n=>{console.log("🚀 ~ isoDateString:",n);const r=new Date(n),t=r.getTimezoneOffset();console.log("🚀 ~ timeZoneOffset:",t);const e=Math.floor(Math.abs(t)/60);console.log("🚀 ~ offsetHours:",e);const o=Math.abs(t)%60;console.log("🚀 ~ offsetMinutes:",o);const s=e.toString().padStart(2,"0");console.log("🚀 ~ offsetHoursFormatted:",s);const a=o.toString().padStart(2,"0");console.log("🚀 ~ offsetMinutesFormatted:",a);const i=`${t>=0?"-":"+"}${s}:${a}`;console.log("🚀 ~ timeZoneOffsetString:",i);const c=new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds());console.log("🚀 ~ dateWithoutMilliseconds:",c);const l=`${c.toISOString().split(".")[0]}${i}`;return console.log("🚀 ~ isoDateWithTimeZone:",l),l},xu=(n,r)=>n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate(),bu=({isModalOpen:n,closeModal:r,currentIntakes:t})=>{const[e,o]=k.useState(t.ml);console.log("🚀 ~ waterAmount:",e);const s=yu(t.time),[a,i]=k.useState(new Date(s));console.log("🚀 ~ selectedTime:",a);const c=Be(),l=()=>{o(g=>g+50)},d=()=>{e>=50&&o(g=>g-50)},f=g=>{i(g)},m=g=>{g.preventDefault();const y=new Date(a).getTimezoneOffset();console.log("🚀 ~ selectedTime:",a);const x={date:a,ml:e,timeZoneOffset:y};console.log("🚀 ~ edit intake body:",x),c(Ao({id:t.id,body:x})),r()},h=g=>{const y=parseInt(g.target.value);o(y)};return p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(wu,{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Edit the entered amount of water"}),p.jsx(Ht,{className:"close",onClick:r})]}),p.jsxs("div",{className:"currentDrink",children:[p.jsx("svg",{className:"waterGlass",width:"36",height:"36",stroke:"#9ebbff",fill:"none",children:p.jsx("use",{href:Le+"#water-glass"})}),p.jsxs("span",{className:"amount",children:[t.ml,"ml"]}),p.jsx("span",{className:"currentTime",children:t.time.slice(11,16)})]}),p.jsx("p",{children:"Correct entered data:"}),p.jsxs("form",{onSubmit:m,children:[p.jsxs("label",{children:["Amount of water:",p.jsxs("div",{className:"counter",children:[p.jsx("button",{className:"counterBtn",type:"button",onClick:l,children:p.jsx(Yn,{})}),p.jsxs("span",{className:"waterAmount",children:[e,"ml"]}),p.jsx("button",{className:"counterBtn",type:"button",onClick:d,children:p.jsx(In,{})})]})]}),p.jsxs("label",{children:["Recording time:",p.jsx(Po,{className:"input",selected:a,onChange:g=>f(g),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),p.jsxs("label",{children:["Enter the value of the water used:",p.jsx("input",{className:"input",type:"number",value:e,onChange:h})]}),p.jsxs("div",{className:"buttons",children:[p.jsxs("span",{className:"waterAmountConfirm",children:[e,"ml"]}),p.jsx("button",{className:"confirm",type:"submit",onClick:m,children:"Save"})]})]})]})})})},vu=P.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 260px;
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
`,Du=P.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  button {
    font-family: 'Roboto-Medium', sans-serif;
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
`,ku=({onModalClose:n,isModalOpen:r,currentIntakes:t})=>{const e=Be(),o=()=>{const s=t.id;e(Ho(s)),n()};return p.jsx(p.Fragment,{children:r&&p.jsx(Bt,{onClose:n,children:p.jsxs(vu,{children:[p.jsxs("div",{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Delete water intakes"}),p.jsx(Ht,{className:"close",onClick:n})]}),p.jsx("p",{children:"Do you really want delete that water intakes?"})]}),p.jsxs(Du,{children:[p.jsx("button",{className:"confirm",onClick:o,children:"Delete"}),p.jsx("button",{className:"cancel",onClick:n,children:"Cancel"})]})]})})})},Mu=()=>{const[n,r]=k.useState(!1),[t,e]=k.useState(!1),[o,s]=k.useState(!1),[a,i]=k.useState({}),c=ve(Jr),l=y=>{const x={id:y.target.closest("LI").id,ml:Number(y.target.closest("LI").childNodes[0].childNodes[1].textContent),time:y.target.closest("LI").attributes.time.value};i(x),r(!0)},d=()=>{r(!1)},f=()=>{e(!0)},m=()=>{e(!1)},h=y=>{const x={id:y.target.closest("LI").id,time:y.target.closest("LI").attributes.time.value};i(x),s(!0)},g=()=>{s(!1)};return console.log("dayInfoTrunks.waterIntakes :>> ",c.waterIntakes),p.jsxs(p.Fragment,{children:[p.jsxs(gu,{children:[p.jsx("h3",{className:"title",children:"Today"}),p.jsx("ul",{className:"waterList",children:c.waterIntakes.length>0?c.waterIntakes.map(y=>p.jsxs("li",{className:"waterItem",id:y._id,time:y.consumedAt,children:[p.jsxs("div",{className:"volumeAdnDate",children:[p.jsx("svg",{className:"waterGlass",width:"26",height:"26",stroke:"#9ebbff",fill:"none",children:p.jsx("use",{href:Le+"#water-glass"})}),p.jsxs("span",{className:"waterVolume",children:[y.ml," "]}),p.jsx("span",{className:"waterVolumeMl",children:"ml"}),p.jsx("span",{className:"waterTime",children:y.consumedAt.slice(11,16)})]}),p.jsxs("div",{className:"editDelete",children:[p.jsx("svg",{onClick:l,width:"16",height:"13",stroke:"#9ebbff",fill:"none",children:p.jsx("use",{href:Le+"#pencil-square"})}),p.jsx("svg",{onClick:h,width:"16",height:"16",stroke:"#ef5050",fill:"none",children:p.jsx("use",{href:Le+"#trash"})})]})]},y._id)):p.jsx("p",{children:"Today you don't have records"})}),p.jsx("h2",{className:"addWater",onClick:f,children:"+ Add water"})]}),n&&p.jsx(bu,{isModalOpen:n,closeModal:d,currentIntakes:a}),t&&p.jsx(To,{isModalOpen:t,closeModal:m}),o&&p.jsx(ku,{isModalOpen:o,onModalClose:g,currentIntakes:a})]})};var Bn={},Cu=Kt;Object.defineProperty(Bn,"__esModule",{value:!0});var No=Bn.default=void 0,_u=Cu(Qt()),Su=p;No=Bn.default=(0,_u.default)((0,Su.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var Qn={},Pu=Kt;Object.defineProperty(Qn,"__esModule",{value:!0});var Oo=Qn.default=void 0,Tu=Pu(Qt()),Nu=p;Oo=Qn.default=(0,Tu.default)((0,Nu.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Ou=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: ${({theme:n})=>n.color.white};
  border-radius: 10px;
  box-shadow: ${({theme:n})=>n.boxShadow.popoverShadow};
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media ${({theme:n})=>n.device.tabletMax} {
    left: ${n=>-7-n.$deltaNum}px;
  }

  @media ${({theme:n})=>n.device.tablet} {
    right: ${n=>n.$delta?"17px":""};
    left: ${n=>n.$delta?"":"17px"};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    bottom: 56px;
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
`,Eu=({calendarRef:n,refData:r,day:t,month:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=`${t}, ${e}`,c=r==null?void 0:r.current.getBoundingClientRect().left,l=n==null?void 0:n.current.getBoundingClientRect().left;let d=!0;const f=c-l;return f<200&&(d=!1),p.jsx(Ou,{$delta:d,$deltaNum:f,children:p.jsxs(p.Fragment,{children:[p.jsx("h3",{children:i}),p.jsxs("p",{children:["Daily norma: ",p.jsxs("span",{children:[o/1e3," L"]})]}),p.jsxs("p",{children:["Fulfillment of the daily norm: ",p.jsxs("span",{children:[s,"%"]})]}),p.jsxs("p",{children:["How many servings of water: ",p.jsx("span",{children:a})]})]})})},Yu=P.div`
  display: flex;
  flex-direction: column;
`,Ru=P.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Iu=P.h2`
  color: ${({theme:n})=>n.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({theme:n})=>n.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,Fr=P.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${({theme:n})=>n.color.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${({theme:n})=>n.color.skyBlue};
    cursor: not-allowed;
  }
`,$u=P.div`
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
`,Lu=P.div`
  color: ${({theme:n})=>n.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Fu=P.span`
  font-size: 16px;
  line-height: 20px;
`,ju=P.span`
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
`,Wu=P.div`
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
`,Au=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Hu=({calendarRef:n,day:r,month:t,year:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=new Date(e,t.monthNumber,r),c=new Date>=i,l=xu(new Date,i),[d,f]=k.useState(null),m=k.useRef(null),h=y=>{m.current&&!m.current.contains(y.target)&&f(null)};k.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]);const g=()=>{f(y=>y===r?null:r)};return p.jsxs(Au,{children:[p.jsx("div",{children:d===r&&p.jsx(Eu,{calendarRef:n,refData:m,waterDay:s,day:r,month:t.monthName,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a},r)}),p.jsx($u,{ref:m,onClick:()=>g(),$isOutlineVisible:s<100&&c,$isToday:l,children:r}),p.jsx(ju,{children:`${s}%`})]},r)},Bu="#4fa94d",Qu={"aria-busy":!0,role:"progressbar"},Ku=P.div`
  display: ${n=>n.$visible?"flex":"none"};
`,zu="http://www.w3.org/2000/svg",ue=242.776657104492,Vu=1.6,qu=Cn`
12.5% {
  stroke-dasharray: ${ue*.14}px, ${ue}px;
  stroke-dashoffset: -${ue*.11}px;
}
43.75% {
  stroke-dasharray: ${ue*.35}px, ${ue}px;
  stroke-dashoffset: -${ue*.35}px;
}
100% {
  stroke-dasharray: ${ue*.01}px, ${ue}px;
  stroke-dashoffset: -${ue*.99}px;
}
`;P.path`
  stroke-dasharray: ${ue*.01}px, ${ue};
  stroke-dashoffset: 0;
  animation: ${qu} ${Vu}s linear infinite;
`;const Uu=Cn`
to {
   transform: rotate(360deg);
 }
`;P.svg`
  animation: ${Uu} 0.75s steps(12, end) infinite;
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
`;const Xu=({height:n=80,width:r=80,radius:t=9,color:e=Bu,ariaLabel:o="three-dots-loading",wrapperStyle:s,wrapperClass:a,visible:i=!0})=>p.jsx(Ku,{style:s,$visible:i,className:a,"data-testid":"three-dots-loading","aria-label":o,...Qu,children:p.jsxs("svg",{width:r,height:n,viewBox:"0 0 120 30",xmlns:zu,fill:e,"data-testid":"three-dots-svg",children:[p.jsxs("circle",{cx:"15",cy:"15",r:Number(t)+6,children:[p.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),p.jsxs("circle",{cx:"60",cy:"15",r:t,attributeName:"fill-opacity",from:"1",to:"0.3",children:[p.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),p.jsxs("circle",{cx:"105",cy:"15",r:Number(t)+6,children:[p.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),Gu=Cn`
to {
   stroke-dashoffset: 136;
 }
`;P.polygon`
  stroke-dasharray: 17;
  animation: ${Gu} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;P.svg`
  transform-origin: 50% 65%;
`;const dn={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},Zu=()=>{const[n,r]=k.useState(new Date),t=Be(),e=k.useRef(null),o=ve(Jr),s=ve($a),a=ve(ja);k.useEffect(()=>{const g=n.getTimezoneOffset(),y=new Date(n.getFullYear(),n.getMonth(),1);y.setMinutes(y.getMinutes()-g);const x=new Date(n.getFullYear(),n.getMonth()+1,0);x.setMinutes(x.getMinutes()-g);const v=y.toISOString().split("T")[0],b=x.toISOString().split("T")[0],D={startDate:v,endDate:b};t(Bo(D)),console.log(D)},[t,n,o]);const i=()=>{const g=new Date(n.getFullYear(),n.getMonth()+1,1);r(g)},c=()=>{const g=new Date(n.getFullYear(),n.getMonth()-1,1);r(g)},l=()=>{const g=new Date;return n.getMonth()===g.getMonth()&&n.getFullYear()===g.getFullYear()},d=()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),f=()=>{const g=new Date(n).getMonth(),y=new Date(n).toLocaleString("en-US",{month:"long"});return{monthNumber:g,monthName:y}},m=()=>new Date(n).getFullYear(),h=()=>{const g=d(),y=f(),x=m();return Array.from({length:g},(v,b)=>{if(!s)return;const D=b+1,T=s.find(({entryDate:N})=>D===new Date(N).getDate()),_=T?T.consumedWaterPercentage:0,O=T?T.dailyWaterGoal:0,C=T?T.consumedTimes:0;return p.jsx(Hu,{day:D,month:y,year:x,dailyWaterGoal:O,consumedWaterPercentage:_,consumedTimes:C},D)})};return p.jsxs(Yu,{className:"calendar",ref:e,children:[p.jsxs(Ru,{children:[p.jsx(Iu,{children:"Month"}),a&&p.jsx(Xu,{height:"60",width:"60",radius:"9",color:dn.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),p.jsxs(Lu,{children:[p.jsx(Fr,{"aria-label":"Previous month",onClick:c,children:p.jsx(Oo,{sx:{color:dn.colors.blue}})}),p.jsx(Fu,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}, ${n.getFullYear()}`}),p.jsx(Fr,{"aria-label":"Next month",onClick:i,disabled:l(),children:p.jsx(No,{sx:{color:dn.colors.blue}})})]})]}),p.jsx(Wu,{children:h()})]})},Ju=P.div`
  background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesMob};
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  margin: auto;
  z-index: -10;

  @media ${({theme:n})=>n.device.tablet} {
    background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesTab};
    padding-bottom: 44px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesDesk};
    padding-top: 20px;
    padding-bottom: 40px;
    width: 1404px;
    height: 582px;
  }
`,ed=P.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${({theme:n})=>n.device.desktop} {
    flex-direction: row;
  }
`,td=P.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,nd=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({theme:n})=>n.device.tablet} {
    flex: 1;
  }
`,rd=P.div`
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
`,id=()=>p.jsx(Ju,{children:p.jsx(Qo,{children:p.jsxs(ed,{children:[p.jsxs(td,{children:[p.jsx(cs,{}),p.jsx(mu,{})]}),p.jsx(nd,{children:p.jsxs(rd,{children:[p.jsx(Mu,{}),p.jsx(Zu,{})]})})]})})});export{id as default};
