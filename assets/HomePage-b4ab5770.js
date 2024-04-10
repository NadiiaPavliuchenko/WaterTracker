var So=Object.defineProperty;var Po=(n,r,t)=>r in n?So(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t;var M=(n,r,t)=>(Po(n,typeof r!="symbol"?r+"":r,t),t);import{r as D,a as Rr,u as P,b as ve,c as Be,j as p,e as No,f as Ir,g as To,d as Oo,s as De,h as Ht,M as Bt,i as Eo,k as $r,l as Lr,R as Fr,m as w,n as Z,o as Yo,p as Ro,q as Io,t as $o,v as Lo,w as Dn,x as Fo,W as jo}from"./index-671212eb.js";import{b as Wn,a as Wo}from"./bottle_mob_2x-8d352aa4.js";const Ge=Math.min,Fe=Math.max,Tt=Math.round,xt=Math.floor,Oe=n=>({x:n,y:n}),Ao={left:"right",right:"left",bottom:"top",top:"bottom"},Ho={start:"end",end:"start"};function Bo(n,r,t){return Fe(n,Ge(r,t))}function Qt(n,r){return typeof n=="function"?n(r):n}function Ze(n){return n.split("-")[0]}function mt(n){return n.split("-")[1]}function Qo(n){return n==="x"?"y":"x"}function kn(n){return n==="y"?"height":"width"}function Mn(n){return["top","bottom"].includes(Ze(n))?"y":"x"}function Cn(n){return Qo(Mn(n))}function Ko(n,r,t){t===void 0&&(t=!1);const e=mt(n),o=Cn(n),s=kn(o);let a=o==="x"?e===(t?"end":"start")?"right":"left":e==="start"?"bottom":"top";return r.reference[s]>r.floating[s]&&(a=Ot(a)),[a,Ot(a)]}function zo(n){const r=Ot(n);return[ln(n),r,ln(r)]}function ln(n){return n.replace(/start|end/g,r=>Ho[r])}function Vo(n,r,t){const e=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(n){case"top":case"bottom":return t?r?o:e:r?e:o;case"left":case"right":return r?s:a;default:return[]}}function qo(n,r,t,e){const o=mt(n);let s=Vo(Ze(n),t==="start",e);return o&&(s=s.map(a=>a+"-"+o),r&&(s=s.concat(s.map(ln)))),s}function Ot(n){return n.replace(/left|right|bottom|top/g,r=>Ao[r])}function Uo(n){return{top:0,right:0,bottom:0,left:0,...n}}function jr(n){return typeof n!="number"?Uo(n):{top:n,right:n,bottom:n,left:n}}function Et(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function An(n,r,t){let{reference:e,floating:o}=n;const s=Mn(r),a=Cn(r),i=kn(a),c=Ze(r),l=s==="y",d=e.x+e.width/2-o.width/2,f=e.y+e.height/2-o.height/2,m=e[i]/2-o[i]/2;let h;switch(c){case"top":h={x:d,y:e.y-o.height};break;case"bottom":h={x:d,y:e.y+e.height};break;case"right":h={x:e.x+e.width,y:f};break;case"left":h={x:e.x-o.width,y:f};break;default:h={x:e.x,y:e.y}}switch(mt(r)){case"start":h[a]-=m*(t&&l?-1:1);break;case"end":h[a]+=m*(t&&l?-1:1);break}return h}const Xo=async(n,r,t)=>{const{placement:e="bottom",strategy:o="absolute",middleware:s=[],platform:a}=t,i=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(r));let l=await a.getElementRects({reference:n,floating:r,strategy:o}),{x:d,y:f}=An(l,e,c),m=e,h={},g=0;for(let y=0;y<i.length;y++){const{name:b,fn:v}=i[y],{x,y:k,data:N,reset:_}=await v({x:d,y:f,initialPlacement:e,placement:m,strategy:o,middlewareData:h,rects:l,platform:a,elements:{reference:n,floating:r}});d=x??d,f=k??f,h={...h,[b]:{...h[b],...N}},_&&g<=50&&(g++,typeof _=="object"&&(_.placement&&(m=_.placement),_.rects&&(l=_.rects===!0?await a.getElementRects({reference:n,floating:r,strategy:o}):_.rects),{x:d,y:f}=An(l,m,c)),y=-1)}return{x:d,y:f,placement:m,strategy:o,middlewareData:h}};async function Go(n,r){var t;r===void 0&&(r={});const{x:e,y:o,platform:s,rects:a,elements:i,strategy:c}=n,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:m=!1,padding:h=0}=Qt(r,n),g=jr(h),b=i[m?f==="floating"?"reference":"floating":f],v=Et(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(b)))==null||t?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:l,rootBoundary:d,strategy:c})),x=f==="floating"?{...a.floating,x:e,y:o}:a.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),N=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},_=Et(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:x,offsetParent:k,strategy:c}):x);return{top:(v.top-_.top+g.top)/N.y,bottom:(_.bottom-v.bottom+g.bottom)/N.y,left:(v.left-_.left+g.left)/N.x,right:(_.right-v.right+g.right)/N.x}}const Zo=n=>({name:"arrow",options:n,async fn(r){const{x:t,y:e,placement:o,rects:s,platform:a,elements:i,middlewareData:c}=r,{element:l,padding:d=0}=Qt(n,r)||{};if(l==null)return{};const f=jr(d),m={x:t,y:e},h=Cn(o),g=kn(h),y=await a.getDimensions(l),b=h==="y",v=b?"top":"left",x=b?"bottom":"right",k=b?"clientHeight":"clientWidth",N=s.reference[g]+s.reference[h]-m[h]-s.floating[g],_=m[h]-s.reference[h],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let C=O?O[k]:0;(!C||!await(a.isElement==null?void 0:a.isElement(O)))&&(C=i.floating[k]||s.floating[g]);const T=N/2-_/2,Y=C/2-y[g]/2-1,ne=Ge(f[v],Y),J=Ge(f[x],Y),A=ne,re=C-y[g]-J,V=C/2-y[g]/2+T,z=Bo(A,V,re),oe=!c.arrow&&mt(o)!=null&&V!==z&&s.reference[g]/2-(V<A?ne:J)-y[g]/2<0,j=oe?V<A?V-A:V-re:0;return{[h]:m[h]+j,data:{[h]:z,centerOffset:V-z-j,...oe&&{alignmentOffset:j}},reset:oe}}}),Jo=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var t,e;const{placement:o,middlewareData:s,rects:a,initialPlacement:i,platform:c,elements:l}=r,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...b}=Qt(n,r);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const v=Ze(o),x=Ze(i)===i,k=await(c.isRTL==null?void 0:c.isRTL(l.floating)),N=m||(x||!y?[Ot(i)]:zo(i));!m&&g!=="none"&&N.push(...qo(i,y,g,k));const _=[i,...N],O=await Go(r,b),C=[];let T=((e=s.flip)==null?void 0:e.overflows)||[];if(d&&C.push(O[v]),f){const A=Ko(o,a,k);C.push(O[A[0]],O[A[1]])}if(T=[...T,{placement:o,overflows:C}],!C.every(A=>A<=0)){var Y,ne;const A=(((Y=s.flip)==null?void 0:Y.index)||0)+1,re=_[A];if(re)return{data:{index:A,overflows:T},reset:{placement:re}};let V=(ne=T.filter(z=>z.overflows[0]<=0).sort((z,oe)=>z.overflows[1]-oe.overflows[1])[0])==null?void 0:ne.placement;if(!V)switch(h){case"bestFit":{var J;const z=(J=T.map(oe=>[oe.placement,oe.overflows.filter(j=>j>0).reduce((j,Ke)=>j+Ke,0)]).sort((oe,j)=>oe[1]-j[1])[0])==null?void 0:J[0];z&&(V=z);break}case"initialPlacement":V=i;break}if(o!==V)return{reset:{placement:V}}}return{}}}};async function ea(n,r){const{placement:t,platform:e,elements:o}=n,s=await(e.isRTL==null?void 0:e.isRTL(o.floating)),a=Ze(t),i=mt(t),c=Mn(t)==="y",l=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,f=Qt(r,n);let{mainAxis:m,crossAxis:h,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return i&&typeof g=="number"&&(h=i==="end"?g*-1:g),c?{x:h*d,y:m*l}:{x:m*l,y:h*d}}const ta=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var t,e;const{x:o,y:s,placement:a,middlewareData:i}=r,c=await ea(r,n);return a===((t=i.offset)==null?void 0:t.placement)&&(e=i.arrow)!=null&&e.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:a}}}}};function Ee(n){return Wr(n)?(n.nodeName||"").toLowerCase():"#document"}function ie(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Ce(n){var r;return(r=(Wr(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Wr(n){return n instanceof Node||n instanceof ie(n).Node}function se(n){return n instanceof Element||n instanceof ie(n).Element}function xe(n){return n instanceof HTMLElement||n instanceof ie(n).HTMLElement}function Hn(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ie(n).ShadowRoot}function gt(n){const{overflow:r,overflowX:t,overflowY:e,display:o}=le(n);return/auto|scroll|overlay|hidden|clip/.test(r+e+t)&&!["inline","contents"].includes(o)}function na(n){return["table","td","th"].includes(Ee(n))}function _n(n){const r=Sn(),t=le(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(e=>(t.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(t.contain||"").includes(e))}function ra(n){let r=Je(n);for(;xe(r)&&!Kt(r);){if(_n(r))return r;r=Je(r)}return null}function Sn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Kt(n){return["html","body","#document"].includes(Ee(n))}function le(n){return ie(n).getComputedStyle(n)}function zt(n){return se(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function Je(n){if(Ee(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Hn(n)&&n.host||Ce(n);return Hn(r)?r.host:r}function Ar(n){const r=Je(n);return Kt(r)?n.ownerDocument?n.ownerDocument.body:n.body:xe(r)&&gt(r)?r:Ar(r)}function ut(n,r,t){var e;r===void 0&&(r=[]),t===void 0&&(t=!0);const o=Ar(n),s=o===((e=n.ownerDocument)==null?void 0:e.body),a=ie(o);return s?r.concat(a,a.visualViewport||[],gt(o)?o:[],a.frameElement&&t?ut(a.frameElement):[]):r.concat(o,ut(o,[],t))}function Hr(n){const r=le(n);let t=parseFloat(r.width)||0,e=parseFloat(r.height)||0;const o=xe(n),s=o?n.offsetWidth:t,a=o?n.offsetHeight:e,i=Tt(t)!==s||Tt(e)!==a;return i&&(t=s,e=a),{width:t,height:e,$:i}}function Pn(n){return se(n)?n:n.contextElement}function Ue(n){const r=Pn(n);if(!xe(r))return Oe(1);const t=r.getBoundingClientRect(),{width:e,height:o,$:s}=Hr(r);let a=(s?Tt(t.width):t.width)/e,i=(s?Tt(t.height):t.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const oa=Oe(0);function Br(n){const r=ie(n);return!Sn()||!r.visualViewport?oa:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function aa(n,r,t){return r===void 0&&(r=!1),!t||r&&t!==ie(n)?!1:r}function We(n,r,t,e){r===void 0&&(r=!1),t===void 0&&(t=!1);const o=n.getBoundingClientRect(),s=Pn(n);let a=Oe(1);r&&(e?se(e)&&(a=Ue(e)):a=Ue(n));const i=aa(s,t,e)?Br(s):Oe(0);let c=(o.left+i.x)/a.x,l=(o.top+i.y)/a.y,d=o.width/a.x,f=o.height/a.y;if(s){const m=ie(s),h=e&&se(e)?ie(e):e;let g=m,y=g.frameElement;for(;y&&e&&h!==g;){const b=Ue(y),v=y.getBoundingClientRect(),x=le(y),k=v.left+(y.clientLeft+parseFloat(x.paddingLeft))*b.x,N=v.top+(y.clientTop+parseFloat(x.paddingTop))*b.y;c*=b.x,l*=b.y,d*=b.x,f*=b.y,c+=k,l+=N,g=ie(y),y=g.frameElement}}return Et({width:d,height:f,x:c,y:l})}const sa=[":popover-open",":modal"];function Qr(n){return sa.some(r=>{try{return n.matches(r)}catch{return!1}})}function ia(n){let{elements:r,rect:t,offsetParent:e,strategy:o}=n;const s=o==="fixed",a=Ce(e),i=r?Qr(r.floating):!1;if(e===a||i&&s)return t;let c={scrollLeft:0,scrollTop:0},l=Oe(1);const d=Oe(0),f=xe(e);if((f||!f&&!s)&&((Ee(e)!=="body"||gt(a))&&(c=zt(e)),xe(e))){const m=We(e);l=Ue(e),d.x=m.x+e.clientLeft,d.y=m.y+e.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+d.x,y:t.y*l.y-c.scrollTop*l.y+d.y}}function ca(n){return Array.from(n.getClientRects())}function Kr(n){return We(Ce(n)).left+zt(n).scrollLeft}function la(n){const r=Ce(n),t=zt(n),e=n.ownerDocument.body,o=Fe(r.scrollWidth,r.clientWidth,e.scrollWidth,e.clientWidth),s=Fe(r.scrollHeight,r.clientHeight,e.scrollHeight,e.clientHeight);let a=-t.scrollLeft+Kr(n);const i=-t.scrollTop;return le(e).direction==="rtl"&&(a+=Fe(r.clientWidth,e.clientWidth)-o),{width:o,height:s,x:a,y:i}}function ua(n,r){const t=ie(n),e=Ce(n),o=t.visualViewport;let s=e.clientWidth,a=e.clientHeight,i=0,c=0;if(o){s=o.width,a=o.height;const l=Sn();(!l||l&&r==="fixed")&&(i=o.offsetLeft,c=o.offsetTop)}return{width:s,height:a,x:i,y:c}}function da(n,r){const t=We(n,!0,r==="fixed"),e=t.top+n.clientTop,o=t.left+n.clientLeft,s=xe(n)?Ue(n):Oe(1),a=n.clientWidth*s.x,i=n.clientHeight*s.y,c=o*s.x,l=e*s.y;return{width:a,height:i,x:c,y:l}}function Bn(n,r,t){let e;if(r==="viewport")e=ua(n,t);else if(r==="document")e=la(Ce(n));else if(se(r))e=da(r,t);else{const o=Br(n);e={...r,x:r.x-o.x,y:r.y-o.y}}return Et(e)}function zr(n,r){const t=Je(n);return t===r||!se(t)||Kt(t)?!1:le(t).position==="fixed"||zr(t,r)}function pa(n,r){const t=r.get(n);if(t)return t;let e=ut(n,[],!1).filter(i=>se(i)&&Ee(i)!=="body"),o=null;const s=le(n).position==="fixed";let a=s?Je(n):n;for(;se(a)&&!Kt(a);){const i=le(a),c=_n(a);!c&&i.position==="fixed"&&(o=null),(s?!c&&!o:!c&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||gt(a)&&!c&&zr(n,a))?e=e.filter(d=>d!==a):o=i,a=Je(a)}return r.set(n,e),e}function fa(n){let{element:r,boundary:t,rootBoundary:e,strategy:o}=n;const a=[...t==="clippingAncestors"?pa(r,this._c):[].concat(t),e],i=a[0],c=a.reduce((l,d)=>{const f=Bn(r,d,o);return l.top=Fe(f.top,l.top),l.right=Ge(f.right,l.right),l.bottom=Ge(f.bottom,l.bottom),l.left=Fe(f.left,l.left),l},Bn(r,i,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ha(n){const{width:r,height:t}=Hr(n);return{width:r,height:t}}function ma(n,r,t){const e=xe(r),o=Ce(r),s=t==="fixed",a=We(n,!0,s,r);let i={scrollLeft:0,scrollTop:0};const c=Oe(0);if(e||!e&&!s)if((Ee(r)!=="body"||gt(o))&&(i=zt(r)),e){const f=We(r,!0,s,r);c.x=f.x+r.clientLeft,c.y=f.y+r.clientTop}else o&&(c.x=Kr(o));const l=a.left+i.scrollLeft-c.x,d=a.top+i.scrollTop-c.y;return{x:l,y:d,width:a.width,height:a.height}}function Qn(n,r){return!xe(n)||le(n).position==="fixed"?null:r?r(n):n.offsetParent}function Vr(n,r){const t=ie(n);if(!xe(n)||Qr(n))return t;let e=Qn(n,r);for(;e&&na(e)&&le(e).position==="static";)e=Qn(e,r);return e&&(Ee(e)==="html"||Ee(e)==="body"&&le(e).position==="static"&&!_n(e))?t:e||ra(n)||t}const ga=async function(n){const r=this.getOffsetParent||Vr,t=this.getDimensions;return{reference:ma(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,...await t(n.floating)}}};function wa(n){return le(n).direction==="rtl"}const qr={convertOffsetParentRelativeRectToViewportRelativeRect:ia,getDocumentElement:Ce,getClippingRect:fa,getOffsetParent:Vr,getElementRects:ga,getClientRects:ca,getDimensions:ha,getScale:Ue,isElement:se,isRTL:wa};function ya(n,r){let t=null,e;const o=Ce(n);function s(){var i;clearTimeout(e),(i=t)==null||i.disconnect(),t=null}function a(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),s();const{left:l,top:d,width:f,height:m}=n.getBoundingClientRect();if(i||r(),!f||!m)return;const h=xt(d),g=xt(o.clientWidth-(l+f)),y=xt(o.clientHeight-(d+m)),b=xt(l),x={rootMargin:-h+"px "+-g+"px "+-y+"px "+-b+"px",threshold:Fe(0,Ge(1,c))||1};let k=!0;function N(_){const O=_[0].intersectionRatio;if(O!==c){if(!k)return a();O?a(!1,O):e=setTimeout(()=>{a(!1,1e-7)},100)}k=!1}try{t=new IntersectionObserver(N,{...x,root:o.ownerDocument})}catch{t=new IntersectionObserver(N,x)}t.observe(n)}return a(!0),s}function xa(n,r,t,e){e===void 0&&(e={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=e,l=Pn(n),d=o||s?[...l?ut(l):[],...ut(r)]:[];d.forEach(v=>{o&&v.addEventListener("scroll",t,{passive:!0}),s&&v.addEventListener("resize",t)});const f=l&&i?ya(l,t):null;let m=-1,h=null;a&&(h=new ResizeObserver(v=>{let[x]=v;x&&x.target===l&&h&&(h.unobserve(r),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var k;(k=h)==null||k.observe(r)})),t()}),l&&!c&&h.observe(l),h.observe(r));let g,y=c?We(n):null;c&&b();function b(){const v=We(n);y&&(v.x!==y.x||v.y!==y.y||v.width!==y.width||v.height!==y.height)&&t(),y=v,g=requestAnimationFrame(b)}return t(),()=>{var v;d.forEach(x=>{o&&x.removeEventListener("scroll",t),s&&x.removeEventListener("resize",t)}),f==null||f(),(v=h)==null||v.disconnect(),h=null,c&&cancelAnimationFrame(g)}}const ba=Jo,Kn=Zo,va=(n,r,t)=>{const e=new Map,o={platform:qr,...t},s={...o.platform,_c:e};return Xo(n,r,{...o,platform:s})},Da=n=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:e,padding:o}=typeof n=="function"?n(t):n;return e&&r(e)?e.current!=null?Kn({element:e.current,padding:o}).fn(t):{}:e?Kn({element:e,padding:o}).fn(t):{}}}};var _t=typeof document<"u"?D.useLayoutEffect:D.useEffect;function Yt(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let t,e,o;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==r.length)return!1;for(e=t;e--!==0;)if(!Yt(n[e],r[e]))return!1;return!0}if(o=Object.keys(n),t=o.length,t!==Object.keys(r).length)return!1;for(e=t;e--!==0;)if(!{}.hasOwnProperty.call(r,o[e]))return!1;for(e=t;e--!==0;){const s=o[e];if(!(s==="_owner"&&n.$$typeof)&&!Yt(n[s],r[s]))return!1}return!0}return n!==n&&r!==r}function Ur(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function zn(n,r){const t=Ur(n);return Math.round(r*t)/t}function Vn(n){const r=D.useRef(n);return _t(()=>{r.current=n}),r}function ka(n){n===void 0&&(n={});const{placement:r="bottom",strategy:t="absolute",middleware:e=[],platform:o,elements:{reference:s,floating:a}={},transform:i=!0,whileElementsMounted:c,open:l}=n,[d,f]=D.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[m,h]=D.useState(e);Yt(m,e)||h(e);const[g,y]=D.useState(null),[b,v]=D.useState(null),x=D.useCallback(j=>{j!==O.current&&(O.current=j,y(j))},[]),k=D.useCallback(j=>{j!==C.current&&(C.current=j,v(j))},[]),N=s||g,_=a||b,O=D.useRef(null),C=D.useRef(null),T=D.useRef(d),Y=c!=null,ne=Vn(c),J=Vn(o),A=D.useCallback(()=>{if(!O.current||!C.current)return;const j={placement:r,strategy:t,middleware:m};J.current&&(j.platform=J.current),va(O.current,C.current,j).then(Ke=>{const ze={...Ke,isPositioned:!0};re.current&&!Yt(T.current,ze)&&(T.current=ze,Rr.flushSync(()=>{f(ze)}))})},[m,r,t,J]);_t(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,f(j=>({...j,isPositioned:!1})))},[l]);const re=D.useRef(!1);_t(()=>(re.current=!0,()=>{re.current=!1}),[]),_t(()=>{if(N&&(O.current=N),_&&(C.current=_),N&&_){if(ne.current)return ne.current(N,_,A);A()}},[N,_,A,ne,Y]);const V=D.useMemo(()=>({reference:O,floating:C,setReference:x,setFloating:k}),[x,k]),z=D.useMemo(()=>({reference:N,floating:_}),[N,_]),oe=D.useMemo(()=>{const j={position:t,left:0,top:0};if(!z.floating)return j;const Ke=zn(z.floating,d.x),ze=zn(z.floating,d.y);return i?{...j,transform:"translate("+Ke+"px, "+ze+"px)",...Ur(z.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:Ke,top:ze}},[t,i,z.floating,d.x,d.y]);return D.useMemo(()=>({...d,update:A,refs:V,elements:z,floatingStyles:oe}),[d,A,V,z,oe])}const Ma=P.h3`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  margin-bottom: 16px;
`,Ca=P.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,qn=P.label`
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
`,Un=P.input`
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
`,Xn=P.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Gn=P.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,Zn=P.svg`
  width: 12px;
  height: 12px;
`,Jn=P.label`
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
`,un=P.input`
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
`,_a=P.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 24px;
`,Sa=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  width: 190px;

  @media ${({theme:n})=>n.device.tablet} {
    width: auto;
  }
`,Pa=P.p`
  font-family: 'Roboto-Bold', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,Na=P.label`
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
`,Ta=P.button`
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
`,ct=P.p`
  position: absolute;
  bottom: -20px;
  left: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({theme:n})=>n.color.red};
`,Oa=n=>n.water.month,Xr=n=>n.water.dayInfo,Ea=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.consumedWaterPercentage},Ya=n=>{var r;return(r=n.water.dayInfo)==null?void 0:r.dailyWaterGoal},Ra=n=>n.water.dayDataLoading,Ia=({closeModal:n})=>{const t=(ve(Ya)/1e3).toFixed(1),[e,o]=D.useState(""),[s,a]=D.useState(!0),i=15,c=f=>{const{value:m}=f.target,h=/^(\d+([.,]\d{0,1})?)?$/;var g=m;m.match(/^[.,]/)?g="0"+m:g=m.replace(/^0+([^.])/,"$1"),a(g===""||parseFloat(g.replace(",","."))<=i),h.test(g)&&o(g)},l=Be(),d=async f=>{if(f.preventDefault(),!s||e<=0)return;const m=f.target.elements.dailyNorm.value*1e3;try{const{payload:h}=await l(No(m));h.user&&(l(Ir()),n())}catch(h){console.log("🚀 ~ error:",h)}};return p.jsxs("form",{onSubmit:d,children:[p.jsxs(Na,{children:["Write down how much water you will drink:",p.jsx(un,{className:!s&&e<=0?"error":"",type:"number",name:"dailyNorm",value:e,onChange:c,placeholder:t}),!s&&p.jsx(ct,{children:`The water rate cannot exceed ${i} liters`}),e<0&&p.jsx(ct,{children:"The water rate cannot be negative"}),parseFloat(e)===0&&p.jsx(ct,{children:"The water rate cannot be 0"})]}),p.jsx(Ta,{className:"confirm",type:"submit",children:"Save"})]})},$a=()=>{const n=ve(To),[r,t]=D.useState(n),[e,o]=D.useState(""),[s,a]=D.useState(""),[i,c]=D.useState(!0),[l,d]=D.useState(!0),f=ve(Oo)?"dark":"light",h=`radio-${r==="woman"?"active":"inactive"}-${f}`,y=`radio-${r==="man"?"active":"inactive"}-${f}`,b=300,v=12,x=_=>{const{name:O,value:C}=_.target,T=/^(\d+([.,]\d{0,1})?)?$/;var Y=C;switch(O){case"gender":t(C);break;case"weight":C.match(/^[.,]/)?Y="0"+C:Y=C.replace(/^0+([^.])/,"$1"),c(Y===""||parseFloat(Y.replace(",","."))<=b),T.test(Y)&&o(Y);break;case"activeHours":C.match(/^[.,]/)?Y="0"+C:Y=C.replace(/^0+([^.])/,"$1"),d(Y===""||parseFloat(Y.replace(",","."))<=v),T.test(Y)&&a(Y);break}},k=r==="woman"?e*.03+s*.4:e*.04+s*.6,N=Math.round(k*10)/10;return p.jsx("div",{children:p.jsxs("form",{action:"",children:[p.jsx(Ma,{children:"Calculate your rate:"}),p.jsxs(Ca,{children:[p.jsxs(qn,{children:[p.jsx(Un,{id:"woman",type:"radio",name:"gender",value:"woman",checked:r==="woman",onChange:x}),p.jsxs(Xn,{htmlFor:"woman",children:[p.jsx(Gn,{children:p.jsx(Zn,{children:p.jsx("use",{href:`${De}#${h}`})})}),"For woman"]})]}),p.jsxs(qn,{children:[p.jsx(Un,{id:"man",type:"radio",name:"gender",value:"man",checked:r==="man",onChange:x}),p.jsxs(Xn,{htmlFor:"man",children:[p.jsx(Gn,{children:p.jsx(Zn,{children:p.jsx("use",{href:`${De}#${y}`})})}),"For man"]})]})]}),p.jsxs(Jn,{children:["Your weight in kilograms:",p.jsx(un,{className:i?"":"error",type:"number",name:"weight",value:e,onChange:x,placeholder:"0"}),!i&&p.jsx(ct,{children:`Weight cannot exceed ${b} kg`})]}),p.jsxs(Jn,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",p.jsx(un,{className:l?"":"error",type:"number",name:"activeHours",value:s,onChange:x,placeholder:"0"}),!l&&p.jsx(ct,{children:`Active hours cannot exceed ${v} hours`})]}),p.jsxs(_a,{children:[p.jsxs(Sa,{children:["The required amount of water in liters per day:"," "]}),i&&l&&p.jsxs(Pa,{children:[N," L"]})]})]})})},La=P.div`
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
`,Fa=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ja=P.h2`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
`,Wa=P(Ht)`
  color: ${({theme:n})=>n.color.blue};
  cursor: pointer;
`,Aa=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,er=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`,tr=P.span`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:n})=>n.color.blue};
`,Ha=P.div`
  border: 1px solid ${({theme:n})=>n.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,Ba=P.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,Qa=P.span`
  color: ${({theme:n})=>n.color.blue};
`,Ka=({isModalOpen:n,closeModal:r})=>p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(La,{children:[p.jsxs("div",{children:[p.jsxs(Fa,{className:"topline",children:[p.jsx(ja,{children:"My daily norm"}),p.jsx(Wa,{className:"close",onClick:r})]}),p.jsxs(Aa,{children:[p.jsxs(er,{children:["For woman: ",p.jsx(tr,{children:"V=(M*0,03) + (T*0,4)"})]}),p.jsxs(er,{children:["For man: ",p.jsx(tr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),p.jsx(Ha,{children:p.jsxs(Ba,{children:[p.jsx(Qa,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),p.jsx("div",{children:p.jsx($a,{})}),p.jsx("div",{children:p.jsx(Ia,{closeModal:r})})]})})}),za=P.div`
  position: relative;
`,Va=P.div`
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
`,qa=P.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,Ua=P.button`
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
`,Xa=P.p`
  color: ${({theme:n})=>n.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,Ga=P.div`
  display: flex;
  gap: 12px;
`,Za=P.img`
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
`,Ja="/WaterTrackerFrontend/assets/bottle_tab-881bc7f1.png",es="/WaterTrackerFrontend/assets/bottle_tab_2x-f93ca187.png",ts="/WaterTrackerFrontend/assets/bottle_desk-1f4873df.png",ns="/WaterTrackerFrontend/assets/bottle_desk_2x-dc99a824.png",rs=()=>{const{dailyWaterGoal:n}=ve(Eo),[r,t]=D.useState(!1),e=Be(),o=()=>{t(!0)},s=()=>{t(!1)},a=(n/1e3).toFixed(1)+" L";return D.useEffect(()=>{e(Ir())},[e]),p.jsxs(za,{children:[p.jsxs(Va,{children:[p.jsx(qa,{children:"My daily norma: "}),p.jsxs(Ga,{children:[p.jsx(Xa,{children:a}),p.jsx(Ua,{onClick:o,children:"Edit"})]}),p.jsx(Ka,{isModalOpen:r,closeModal:s})]}),p.jsxs("picture",{className:"bottle",children:[p.jsx("source",{srcSet:`${ts} 1x, ${ns} 2x`,media:"(min-width: 1440px)",width:"738",height:"548",type:"image/png"}),p.jsx("source",{srcSet:`${Ja} 1x, ${es} 2x`,media:"(min-width: 768px)",width:"518",height:"386",type:"image/png"}),p.jsx("source",{srcSet:`${Wn} 1x, ${Wo} 2x`,media:"(min-width: 320px)",width:"280",height:"210",type:"image/png"}),p.jsx(Za,{className:"bottle",alt:"bottle of water",src:Wn})]})]})},os=P.div`
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
`,as=P.div`
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
`,ss=P.button`
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
`,is=P.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.color.white};
`;var Nn={},cs=Lr;Object.defineProperty(Nn,"__esModule",{value:!0});var Tn=Nn.default=void 0,ls=cs($r()),us=p;Tn=Nn.default=(0,ls.default)((0,us.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var On={},ds=Lr;Object.defineProperty(On,"__esModule",{value:!0});var En=On.default=void 0,ps=ds($r()),fs=p;En=On.default=(0,ps.default)((0,fs.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function Ae(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function S(n){const r=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&r==="[object Date]"?new n.constructor(+n):typeof n=="number"||r==="[object Number]"||typeof n=="string"||r==="[object String]"?new Date(n):new Date(NaN)}function dt(n){if(!Ae(n)&&typeof n!="number")return!1;const r=S(n);return!isNaN(Number(r))}const hs={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ms=(n,r,t)=>{let e;const o=hs[n];return typeof o=="string"?e=o:r===1?e=o.one:e=o.other.replace("{{count}}",r.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+e:e+" ago":e};function Zt(n){return(r={})=>{const t=r.width?String(r.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const gs={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ws={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ys={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xs={date:Zt({formats:gs,defaultWidth:"full"}),time:Zt({formats:ws,defaultWidth:"full"}),dateTime:Zt({formats:ys,defaultWidth:"full"})},bs={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},vs=(n,r,t,e)=>bs[n];function rt(n){return(r,t)=>{const e=t!=null&&t.context?String(t.context):"standalone";let o;if(e==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,i=t!=null&&t.width?String(t.width):a;o=n.formattingValues[i]||n.formattingValues[a]}else{const a=n.defaultWidth,i=t!=null&&t.width?String(t.width):n.defaultWidth;o=n.values[i]||n.values[a]}const s=n.argumentCallback?n.argumentCallback(r):r;return o[s]}}const Ds={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ks={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ms={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Cs={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},_s={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ss={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ps=(n,r)=>{const t=Number(n),e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Ns={ordinalNumber:Ps,era:rt({values:Ds,defaultWidth:"wide"}),quarter:rt({values:ks,defaultWidth:"wide",argumentCallback:n=>n-1}),month:rt({values:Ms,defaultWidth:"wide"}),day:rt({values:Cs,defaultWidth:"wide"}),dayPeriod:rt({values:_s,defaultWidth:"wide",formattingValues:Ss,defaultFormattingWidth:"wide"})};function ot(n){return(r,t={})=>{const e=t.width,o=e&&n.matchPatterns[e]||n.matchPatterns[n.defaultMatchWidth],s=r.match(o);if(!s)return null;const a=s[0],i=e&&n.parsePatterns[e]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(i)?Os(i,f=>f.test(a)):Ts(i,f=>f.test(a));let l;l=n.valueCallback?n.valueCallback(c):c,l=t.valueCallback?t.valueCallback(l):l;const d=r.slice(a.length);return{value:l,rest:d}}}function Ts(n,r){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&r(n[t]))return t}function Os(n,r){for(let t=0;t<n.length;t++)if(r(n[t]))return t}function Es(n){return(r,t={})=>{const e=r.match(n.matchPattern);if(!e)return null;const o=e[0],s=r.match(n.parsePattern);if(!s)return null;let a=n.valueCallback?n.valueCallback(s[0]):s[0];a=t.valueCallback?t.valueCallback(a):a;const i=r.slice(o.length);return{value:a,rest:i}}}const Ys=/^(\d+)(th|st|nd|rd)?/i,Rs=/\d+/i,Is={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$s={any:[/^b/i,/^(a|c)/i]},Ls={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fs={any:[/1/i,/2/i,/3/i,/4/i]},js={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ws={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},As={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Hs={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bs={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Qs={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ks={ordinalNumber:Es({matchPattern:Ys,parsePattern:Rs,valueCallback:n=>parseInt(n,10)}),era:ot({matchPatterns:Is,defaultMatchWidth:"wide",parsePatterns:$s,defaultParseWidth:"any"}),quarter:ot({matchPatterns:Ls,defaultMatchWidth:"wide",parsePatterns:Fs,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ot({matchPatterns:js,defaultMatchWidth:"wide",parsePatterns:Ws,defaultParseWidth:"any"}),day:ot({matchPatterns:As,defaultMatchWidth:"wide",parsePatterns:Hs,defaultParseWidth:"any"}),dayPeriod:ot({matchPatterns:Bs,defaultMatchWidth:"any",parsePatterns:Qs,defaultParseWidth:"any"})},Gr={code:"en-US",formatDistance:ms,formatLong:xs,formatRelative:vs,localize:Ns,match:Ks,options:{weekStartsOn:0,firstWeekContainsDate:1}};let zs={};function Qe(){return zs}const Zr=6048e5,Vs=864e5,Vt=6e4,qt=36e5,qs=1e3;function ge(n){const r=S(n);return r.setHours(0,0,0,0),r}function Rt(n){const r=S(n),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+n-+t}function pt(n,r){const t=ge(n),e=ge(r),o=+t-Rt(t),s=+e-Rt(e);return Math.round((o-s)/Vs)}function L(n,r){return n instanceof Date?new n.constructor(r):new Date(r)}function Yn(n){const r=S(n),t=L(n,0);return t.setFullYear(r.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Us(n){const r=S(n);return pt(r,Yn(r))+1}function Me(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?7:0)+s-e;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function et(n){return Me(n,{weekStartsOn:1})}function Jr(n){const r=S(n),t=r.getFullYear(),e=L(n,0);e.setFullYear(t+1,0,4),e.setHours(0,0,0,0);const o=et(e),s=L(n,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const a=et(s);return r.getTime()>=o.getTime()?t+1:r.getTime()>=a.getTime()?t:t-1}function Xs(n){const r=Jr(n),t=L(n,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),et(t)}function Rn(n){const r=S(n),t=+et(r)-+Xs(r);return Math.round(t/Zr)+1}function In(n,r){var d,f,m,h;const t=S(n),e=t.getFullYear(),o=Qe(),s=(r==null?void 0:r.firstWeekContainsDate)??((f=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??o.firstWeekContainsDate??((h=(m=o.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??1,a=L(n,0);a.setFullYear(e+1,0,s),a.setHours(0,0,0,0);const i=Me(a,r),c=L(n,0);c.setFullYear(e,0,s),c.setHours(0,0,0,0);const l=Me(c,r);return t.getTime()>=i.getTime()?e+1:t.getTime()>=l.getTime()?e:e-1}function Gs(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.firstWeekContainsDate)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,o=In(n,r),s=L(n,0);return s.setFullYear(o,0,e),s.setHours(0,0,0,0),Me(s,r)}function eo(n,r){const t=S(n),e=+Me(t,r)-+Gs(t,r);return Math.round(e/Zr)+1}function $(n,r){const t=n<0?"-":"",e=Math.abs(n).toString().padStart(r,"0");return t+e}const _e={y(n,r){const t=n.getFullYear(),e=t>0?t:1-t;return $(r==="yy"?e%100:e,r.length)},M(n,r){const t=n.getMonth();return r==="M"?String(t+1):$(t+1,2)},d(n,r){return $(n.getDate(),r.length)},a(n,r){const t=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,r){return $(n.getHours()%12||12,r.length)},H(n,r){return $(n.getHours(),r.length)},m(n,r){return $(n.getMinutes(),r.length)},s(n,r){return $(n.getSeconds(),r.length)},S(n,r){const t=r.length,e=n.getMilliseconds(),o=Math.trunc(e*Math.pow(10,t-3));return $(o,r.length)}},Ve={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},nr={G:function(n,r,t){const e=n.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})}},y:function(n,r,t){if(r==="yo"){const e=n.getFullYear(),o=e>0?e:1-e;return t.ordinalNumber(o,{unit:"year"})}return _e.y(n,r)},Y:function(n,r,t,e){const o=In(n,e),s=o>0?o:1-o;if(r==="YY"){const a=s%100;return $(a,2)}return r==="Yo"?t.ordinalNumber(s,{unit:"year"}):$(s,r.length)},R:function(n,r){const t=Jr(n);return $(t,r.length)},u:function(n,r){const t=n.getFullYear();return $(t,r.length)},Q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"Q":return String(e);case"QQ":return $(e,2);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})}},q:function(n,r,t){const e=Math.ceil((n.getMonth()+1)/3);switch(r){case"q":return String(e);case"qq":return $(e,2);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})}},M:function(n,r,t){const e=n.getMonth();switch(r){case"M":case"MM":return _e.M(n,r);case"Mo":return t.ordinalNumber(e+1,{unit:"month"});case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})}},L:function(n,r,t){const e=n.getMonth();switch(r){case"L":return String(e+1);case"LL":return $(e+1,2);case"Lo":return t.ordinalNumber(e+1,{unit:"month"});case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})}},w:function(n,r,t,e){const o=eo(n,e);return r==="wo"?t.ordinalNumber(o,{unit:"week"}):$(o,r.length)},I:function(n,r,t){const e=Rn(n);return r==="Io"?t.ordinalNumber(e,{unit:"week"}):$(e,r.length)},d:function(n,r,t){return r==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):_e.d(n,r)},D:function(n,r,t){const e=Us(n);return r==="Do"?t.ordinalNumber(e,{unit:"dayOfYear"}):$(e,r.length)},E:function(n,r,t){const e=n.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})}},e:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return $(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(n,r,t,e){const o=n.getDay(),s=(o-e.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return $(s,r.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(n,r,t){const e=n.getDay(),o=e===0?7:e;switch(r){case"i":return String(o);case"ii":return $(o,r.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(e,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(e,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(e,{width:"short",context:"formatting"});case"iiii":default:return t.day(e,{width:"wide",context:"formatting"})}},a:function(n,r,t){const o=n.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,r,t){const e=n.getHours();let o;switch(e===12?o=Ve.noon:e===0?o=Ve.midnight:o=e/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,r,t){const e=n.getHours();let o;switch(e>=17?o=Ve.evening:e>=12?o=Ve.afternoon:e>=4?o=Ve.morning:o=Ve.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,r,t){if(r==="ho"){let e=n.getHours()%12;return e===0&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return _e.h(n,r)},H:function(n,r,t){return r==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):_e.H(n,r)},K:function(n,r,t){const e=n.getHours()%12;return r==="Ko"?t.ordinalNumber(e,{unit:"hour"}):$(e,r.length)},k:function(n,r,t){let e=n.getHours();return e===0&&(e=24),r==="ko"?t.ordinalNumber(e,{unit:"hour"}):$(e,r.length)},m:function(n,r,t){return r==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):_e.m(n,r)},s:function(n,r,t){return r==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):_e.s(n,r)},S:function(n,r){return _e.S(n,r)},X:function(n,r,t){const e=n.getTimezoneOffset();if(e===0)return"Z";switch(r){case"X":return or(e);case"XXXX":case"XX":return $e(e);case"XXXXX":case"XXX":default:return $e(e,":")}},x:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"x":return or(e);case"xxxx":case"xx":return $e(e);case"xxxxx":case"xxx":default:return $e(e,":")}},O:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+rr(e,":");case"OOOO":default:return"GMT"+$e(e,":")}},z:function(n,r,t){const e=n.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+rr(e,":");case"zzzz":default:return"GMT"+$e(e,":")}},t:function(n,r,t){const e=Math.trunc(n.getTime()/1e3);return $(e,r.length)},T:function(n,r,t){const e=n.getTime();return $(e,r.length)}};function rr(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=Math.trunc(e/60),s=e%60;return s===0?t+String(o):t+String(o)+r+$(s,2)}function or(n,r){return n%60===0?(n>0?"-":"+")+$(Math.abs(n)/60,2):$e(n,r)}function $e(n,r=""){const t=n>0?"-":"+",e=Math.abs(n),o=$(Math.trunc(e/60),2),s=$(e%60,2);return t+o+r+s}const ar=(n,r)=>{switch(n){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},to=(n,r)=>{switch(n){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Zs=(n,r)=>{const t=n.match(/(P+)(p+)?/)||[],e=t[1],o=t[2];if(!o)return ar(n,r);let s;switch(e){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",ar(e,r)).replace("{{time}}",to(o,r))},It={p:to,P:Zs},Js=/^D+$/,ei=/^Y+$/,ti=["D","DD","YY","YYYY"];function no(n){return Js.test(n)}function ro(n){return ei.test(n)}function dn(n,r,t){const e=ni(n,r,t);if(console.warn(e),ti.includes(n))throw new RangeError(e)}function ni(n,r,t){const e=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ri=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ai=/^'([^]*?)'?$/,si=/''/g,ii=/[a-zA-Z]/;function sr(n,r,t){var d,f,m,h,g,y,b,v;const e=Qe(),o=(t==null?void 0:t.locale)??e.locale??Gr,s=(t==null?void 0:t.firstWeekContainsDate)??((f=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??e.firstWeekContainsDate??((h=(m=e.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((y=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:y.weekStartsOn)??e.weekStartsOn??((v=(b=e.locale)==null?void 0:b.options)==null?void 0:v.weekStartsOn)??0,i=S(n);if(!dt(i))throw new RangeError("Invalid time value");let c=r.match(oi).map(x=>{const k=x[0];if(k==="p"||k==="P"){const N=It[k];return N(x,o.formatLong)}return x}).join("").match(ri).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const k=x[0];if(k==="'")return{isToken:!1,value:ci(x)};if(nr[k])return{isToken:!0,value:x};if(k.match(ii))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:x}});o.localize.preprocessor&&(c=o.localize.preprocessor(i,c));const l={firstWeekContainsDate:s,weekStartsOn:a,locale:o};return c.map(x=>{if(!x.isToken)return x.value;const k=x.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&ro(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&no(k))&&dn(k,r,String(n));const N=nr[k[0]];return N(i,k,o.localize,l)}).join("")}function ci(n){const r=n.match(ai);return r?r[1].replace(si,"'"):n}function oo(n,r){const t=+S(n);return L(n,t+r)}function pn(n,r){return oo(n,r*Vt)}function li(n,r){return oo(n,r*qt)}function Ie(n,r){const t=S(n);return isNaN(r)?L(n,NaN):(r&&t.setDate(t.getDate()+r),t)}function $t(n,r){const t=r*7;return Ie(n,t)}function de(n,r){const t=S(n);if(isNaN(r))return L(n,NaN);if(!r)return t;const e=t.getDate(),o=L(n,t.getTime());o.setMonth(t.getMonth()+r+1,0);const s=o.getDate();return e>=s?o:(t.setFullYear(o.getFullYear(),o.getMonth(),e),t)}function ao(n,r){const t=r*3;return de(n,t)}function Pe(n,r){return de(n,r*12)}function ui(n,r){return Ie(n,-r)}function ir(n,r){return $t(n,-r)}function tt(n,r){return de(n,-r)}function di(n,r){return ao(n,-r)}function wt(n,r){return Pe(n,-r)}function cr(n){return S(n).getSeconds()}function we(n){return S(n).getMinutes()}function ye(n){return S(n).getHours()}function pi(n){return S(n).getDay()}function lr(n){return S(n).getDate()}function te(n){return S(n).getMonth()}function lt(n){const r=S(n);return Math.trunc(r.getMonth()/3)+1}function E(n){return S(n).getFullYear()}function fn(n){return S(n).getTime()}function fi(n,r){const t=S(n);return t.setSeconds(r),t}function St(n,r){const t=S(n);return t.setMinutes(r),t}function Pt(n,r){const t=S(n);return t.setHours(r),t}function hi(n){const r=S(n),t=r.getFullYear(),e=r.getMonth(),o=L(n,0);return o.setFullYear(t,e+1,0),o.setHours(0,0,0,0),o.getDate()}function ee(n,r){const t=S(n),e=t.getFullYear(),o=t.getDate(),s=L(n,0);s.setFullYear(e,r,15),s.setHours(0,0,0,0);const a=hi(s);return t.setMonth(r,Math.min(o,a)),t}function qe(n,r){const t=S(n),e=Math.trunc(t.getMonth()/3)+1,o=r-e;return ee(t,t.getMonth()+o*3)}function pe(n,r){const t=S(n);return isNaN(+t)?L(n,NaN):(t.setFullYear(r),t)}function ur(n){let r;return n.forEach(t=>{const e=S(t);(!r||r>e||isNaN(+e))&&(r=e)}),r||new Date(NaN)}function dr(n){let r;return n.forEach(function(t){const e=S(t);(r===void 0||r<e||isNaN(Number(e)))&&(r=e)}),r||new Date(NaN)}function Lt(n,r){const t=S(n),e=S(r),o=t.getFullYear()-e.getFullYear(),s=t.getMonth()-e.getMonth();return o*12+s}function Ft(n,r){const t=S(n),e=S(r);return t.getFullYear()-e.getFullYear()}function so(n){const r=S(n);return r.setDate(1),r.setHours(0,0,0,0),r}function hn(n){const r=S(n),t=r.getMonth(),e=t-t%3;return r.setMonth(e,1),r.setHours(0,0,0,0),r}function mn(n){const r=S(n);return r.setHours(23,59,59,999),r}function mi(n,r){var i,c,l,d;const t=Qe(),e=(r==null?void 0:r.weekStartsOn)??((c=(i=r==null?void 0:r.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((d=(l=t.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,o=S(n),s=o.getDay(),a=(s<e?-7:0)+6-(s-e);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}function gi(n){const r=S(n),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function wi(n){const r=S(n),t=r.getFullYear();return r.setFullYear(t+1,0,0),r.setHours(23,59,59,999),r}function yi(n,r){const t=S(n),e=S(r);return+t==+e}function xi(n,r){const t=ge(n),e=ge(r);return+t==+e}function bi(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function vi(n,r){const t=S(n),e=S(r);return t.getFullYear()===e.getFullYear()}function Di(n,r){const t=hn(n),e=hn(r);return+t==+e}function Ye(n,r){const t=S(n),e=S(r);return t.getTime()>e.getTime()}function He(n,r){const t=S(n),e=S(r);return+t<+e}function ft(n,r){const t=+S(n),[e,o]=[+S(r.start),+S(r.end)].sort((s,a)=>s-a);return t>=e&&t<=o}function ki(){return Object.assign({},Qe())}function Mi(n,r){const t=r instanceof Date?L(r,0):new r(0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}const Ci=10;class io{constructor(){M(this,"subPriority",0)}validate(r,t){return!0}}class _i extends io{constructor(r,t,e,o,s){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=o,s&&(this.subPriority=s)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}}class Si extends io{constructor(){super(...arguments);M(this,"priority",Ci);M(this,"subPriority",-1)}set(t,e){return e.timestampIsSet?t:L(t,Mi(t,Date))}}class I{run(r,t,e,o){const s=this.parse(r,t,e,o);return s?{setter:new _i(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(r,t,e){return!0}}class Pi extends I{constructor(){super(...arguments);M(this,"priority",140);M(this,"incompatibleTokens",["R","u","t","T"])}parse(t,e,o){switch(e){case"G":case"GG":case"GGG":return o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"});case"GGGGG":return o.era(t,{width:"narrow"});case"GGGG":default:return o.era(t,{width:"wide"})||o.era(t,{width:"abbreviated"})||o.era(t,{width:"narrow"})}}set(t,e,o){return e.era=o,t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}const Q={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},he={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function K(n,r){return n&&{value:r(n.value),rest:n.rest}}function H(n,r){const t=r.match(n);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function me(n,r){const t=r.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};const e=t[1]==="+"?1:-1,o=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,a=t[5]?parseInt(t[5],10):0;return{value:e*(o*qt+s*Vt+a*qs),rest:r.slice(t[0].length)}}function co(n){return H(Q.anyDigitsSigned,n)}function B(n,r){switch(n){case 1:return H(Q.singleDigit,r);case 2:return H(Q.twoDigits,r);case 3:return H(Q.threeDigits,r);case 4:return H(Q.fourDigits,r);default:return H(new RegExp("^\\d{1,"+n+"}"),r)}}function jt(n,r){switch(n){case 1:return H(Q.singleDigitSigned,r);case 2:return H(Q.twoDigitsSigned,r);case 3:return H(Q.threeDigitsSigned,r);case 4:return H(Q.fourDigitsSigned,r);default:return H(new RegExp("^-?\\d{1,"+n+"}"),r)}}function $n(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function lo(n,r){const t=r>0,e=t?r:1-r;let o;if(e<=50)o=n||100;else{const s=e+50,a=Math.trunc(s/100)*100,i=n>=s%100;o=n+a-(i?100:0)}return t?o:1-o}function uo(n){return n%400===0||n%4===0&&n%100!==0}class Ni extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="yy"});switch(e){case"y":return K(B(4,t),s);case"yo":return K(o.ordinalNumber(t,{unit:"year"}),s);default:return K(B(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o){const s=t.getFullYear();if(o.isTwoDigitYear){const i=lo(o.year,s);return t.setFullYear(i,0,1),t.setHours(0,0,0,0),t}const a=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class Ti extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,e,o){const s=a=>({year:a,isTwoDigitYear:e==="YY"});switch(e){case"Y":return K(B(4,t),s);case"Yo":return K(o.ordinalNumber(t,{unit:"year"}),s);default:return K(B(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,o,s){const a=In(t,s);if(o.isTwoDigitYear){const c=lo(o.year,a);return t.setFullYear(c,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Me(t,s)}const i=!("era"in e)||e.era===1?o.year:1-o.year;return t.setFullYear(i,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Me(t,s)}}class Oi extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,e){return jt(e==="R"?4:e.length,t)}set(t,e,o){const s=L(t,0);return s.setFullYear(o,0,4),s.setHours(0,0,0,0),et(s)}}class Ei extends I{constructor(){super(...arguments);M(this,"priority",130);M(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,e){return jt(e==="u"?4:e.length,t)}set(t,e,o){return t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}}class Yi extends I{constructor(){super(...arguments);M(this,"priority",120);M(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"Q":case"QQ":return B(e.length,t);case"Qo":return o.ordinalNumber(t,{unit:"quarter"});case"QQQ":return o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(t,{width:"wide",context:"formatting"})||o.quarter(t,{width:"abbreviated",context:"formatting"})||o.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class Ri extends I{constructor(){super(...arguments);M(this,"priority",120);M(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"q":case"qq":return B(e.length,t);case"qo":return o.ordinalNumber(t,{unit:"quarter"});case"qqq":return o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(t,{width:"wide",context:"standalone"})||o.quarter(t,{width:"abbreviated",context:"standalone"})||o.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=1&&e<=4}set(t,e,o){return t.setMonth((o-1)*3,1),t.setHours(0,0,0,0),t}}class Ii extends I{constructor(){super(...arguments);M(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);M(this,"priority",110)}parse(t,e,o){const s=a=>a-1;switch(e){case"M":return K(H(Q.month,t),s);case"MM":return K(B(2,t),s);case"Mo":return K(o.ordinalNumber(t,{unit:"month"}),s);case"MMM":return o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(t,{width:"wide",context:"formatting"})||o.month(t,{width:"abbreviated",context:"formatting"})||o.month(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}class $i extends I{constructor(){super(...arguments);M(this,"priority",110);M(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,e,o){const s=a=>a-1;switch(e){case"L":return K(H(Q.month,t),s);case"LL":return K(B(2,t),s);case"Lo":return K(o.ordinalNumber(t,{unit:"month"}),s);case"LLL":return o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(t,{width:"wide",context:"standalone"})||o.month(t,{width:"abbreviated",context:"standalone"})||o.month(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.setMonth(o,1),t.setHours(0,0,0,0),t}}function Li(n,r,t){const e=S(n),o=eo(e,t)-r;return e.setDate(e.getDate()-o*7),e}class Fi extends I{constructor(){super(...arguments);M(this,"priority",100);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,e,o){switch(e){case"w":return H(Q.week,t);case"wo":return o.ordinalNumber(t,{unit:"week"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o,s){return Me(Li(t,o,s),s)}}function ji(n,r){const t=S(n),e=Rn(t)-r;return t.setDate(t.getDate()-e*7),t}class Wi extends I{constructor(){super(...arguments);M(this,"priority",100);M(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,e,o){switch(e){case"I":return H(Q.week,t);case"Io":return o.ordinalNumber(t,{unit:"week"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,o){return et(ji(t,o))}}const Ai=[31,28,31,30,31,30,31,31,30,31,30,31],Hi=[31,29,31,30,31,30,31,31,30,31,30,31];class Bi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"subPriority",1);M(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"d":return H(Q.date,t);case"do":return o.ordinalNumber(t,{unit:"date"});default:return B(e.length,t)}}validate(t,e){const o=t.getFullYear(),s=uo(o),a=t.getMonth();return s?e>=1&&e<=Hi[a]:e>=1&&e<=Ai[a]}set(t,e,o){return t.setDate(o),t.setHours(0,0,0,0),t}}class Qi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"subpriority",1);M(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,e,o){switch(e){case"D":case"DD":return H(Q.dayOfYear,t);case"Do":return o.ordinalNumber(t,{unit:"date"});default:return B(e.length,t)}}validate(t,e){const o=t.getFullYear();return uo(o)?e>=1&&e<=366:e>=1&&e<=365}set(t,e,o){return t.setMonth(0,o),t.setHours(0,0,0,0),t}}function Ln(n,r,t){var f,m,h,g;const e=Qe(),o=(t==null?void 0:t.weekStartsOn)??((m=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??e.weekStartsOn??((g=(h=e.locale)==null?void 0:h.options)==null?void 0:g.weekStartsOn)??0,s=S(n),a=s.getDay(),c=(r%7+7)%7,l=7-o,d=r<0||r>6?r-(a+l)%7:(c+l)%7-(a+l)%7;return Ie(s,d)}class Ki extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,e,o){switch(e){case"E":case"EE":case"EEE":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Ln(t,o,s),t.setHours(0,0,0,0),t}}class zi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"e":case"ee":return K(B(e.length,t),a);case"eo":return K(o.ordinalNumber(t,{unit:"day"}),a);case"eee":return o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeeee":return o.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Ln(t,o,s),t.setHours(0,0,0,0),t}}class Vi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,e,o,s){const a=i=>{const c=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+c};switch(e){case"c":case"cc":return K(B(e.length,t),a);case"co":return K(o.ordinalNumber(t,{unit:"day"}),a);case"ccc":return o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"ccccc":return o.day(t,{width:"narrow",context:"standalone"});case"cccccc":return o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(t,{width:"wide",context:"standalone"})||o.day(t,{width:"abbreviated",context:"standalone"})||o.day(t,{width:"short",context:"standalone"})||o.day(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=6}set(t,e,o,s){return t=Ln(t,o,s),t.setHours(0,0,0,0),t}}function qi(n){let t=S(n).getDay();return t===0&&(t=7),t}function Ui(n,r){const t=S(n),e=qi(t),o=r-e;return Ie(t,o)}class Xi extends I{constructor(){super(...arguments);M(this,"priority",90);M(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,e,o){const s=a=>a===0?7:a;switch(e){case"i":case"ii":return B(e.length,t);case"io":return o.ordinalNumber(t,{unit:"day"});case"iii":return K(o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiii":return K(o.day(t,{width:"narrow",context:"formatting"}),s);case"iiiiii":return K(o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s);case"iiii":default:return K(o.day(t,{width:"wide",context:"formatting"})||o.day(t,{width:"abbreviated",context:"formatting"})||o.day(t,{width:"short",context:"formatting"})||o.day(t,{width:"narrow",context:"formatting"}),s)}}validate(t,e){return e>=1&&e<=7}set(t,e,o){return t=Ui(t,o),t.setHours(0,0,0,0),t}}class Gi extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,e,o){switch(e){case"a":case"aa":case"aaa":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours($n(o),0,0,0),t}}class Zi extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,e,o){switch(e){case"b":case"bb":case"bbb":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours($n(o),0,0,0),t}}class Ji extends I{constructor(){super(...arguments);M(this,"priority",80);M(this,"incompatibleTokens",["a","b","t","T"])}parse(t,e,o){switch(e){case"B":case"BB":case"BBB":return o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(t,{width:"wide",context:"formatting"})||o.dayPeriod(t,{width:"abbreviated",context:"formatting"})||o.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,o){return t.setHours($n(o),0,0,0),t}}class ec extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,e,o){switch(e){case"h":return H(Q.hour12h,t);case"ho":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=12}set(t,e,o){const s=t.getHours()>=12;return s&&o<12?t.setHours(o+12,0,0,0):!s&&o===12?t.setHours(0,0,0,0):t.setHours(o,0,0,0),t}}class tc extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,e,o){switch(e){case"H":return H(Q.hour23h,t);case"Ho":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=23}set(t,e,o){return t.setHours(o,0,0,0),t}}class nc extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,e,o){switch(e){case"K":return H(Q.hour11h,t);case"Ko":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=11}set(t,e,o){return t.getHours()>=12&&o<12?t.setHours(o+12,0,0,0):t.setHours(o,0,0,0),t}}class rc extends I{constructor(){super(...arguments);M(this,"priority",70);M(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,e,o){switch(e){case"k":return H(Q.hour24h,t);case"ko":return o.ordinalNumber(t,{unit:"hour"});default:return B(e.length,t)}}validate(t,e){return e>=1&&e<=24}set(t,e,o){const s=o<=24?o%24:o;return t.setHours(s,0,0,0),t}}class oc extends I{constructor(){super(...arguments);M(this,"priority",60);M(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"m":return H(Q.minute,t);case"mo":return o.ordinalNumber(t,{unit:"minute"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setMinutes(o,0,0),t}}class ac extends I{constructor(){super(...arguments);M(this,"priority",50);M(this,"incompatibleTokens",["t","T"])}parse(t,e,o){switch(e){case"s":return H(Q.second,t);case"so":return o.ordinalNumber(t,{unit:"second"});default:return B(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,o){return t.setSeconds(o,0),t}}class sc extends I{constructor(){super(...arguments);M(this,"priority",30);M(this,"incompatibleTokens",["t","T"])}parse(t,e){const o=s=>Math.trunc(s*Math.pow(10,-e.length+3));return K(B(e.length,t),o)}set(t,e,o){return t.setMilliseconds(o),t}}class ic extends I{constructor(){super(...arguments);M(this,"priority",10);M(this,"incompatibleTokens",["t","T","x"])}parse(t,e){switch(e){case"X":return me(he.basicOptionalMinutes,t);case"XX":return me(he.basic,t);case"XXXX":return me(he.basicOptionalSeconds,t);case"XXXXX":return me(he.extendedOptionalSeconds,t);case"XXX":default:return me(he.extended,t)}}set(t,e,o){return e.timestampIsSet?t:L(t,t.getTime()-Rt(t)-o)}}class cc extends I{constructor(){super(...arguments);M(this,"priority",10);M(this,"incompatibleTokens",["t","T","X"])}parse(t,e){switch(e){case"x":return me(he.basicOptionalMinutes,t);case"xx":return me(he.basic,t);case"xxxx":return me(he.basicOptionalSeconds,t);case"xxxxx":return me(he.extendedOptionalSeconds,t);case"xxx":default:return me(he.extended,t)}}set(t,e,o){return e.timestampIsSet?t:L(t,t.getTime()-Rt(t)-o)}}class lc extends I{constructor(){super(...arguments);M(this,"priority",40);M(this,"incompatibleTokens","*")}parse(t){return co(t)}set(t,e,o){return[L(t,o*1e3),{timestampIsSet:!0}]}}class uc extends I{constructor(){super(...arguments);M(this,"priority",20);M(this,"incompatibleTokens","*")}parse(t){return co(t)}set(t,e,o){return[L(t,o),{timestampIsSet:!0}]}}const dc={G:new Pi,y:new Ni,Y:new Ti,R:new Oi,u:new Ei,Q:new Yi,q:new Ri,M:new Ii,L:new $i,w:new Fi,I:new Wi,d:new Bi,D:new Qi,E:new Ki,e:new zi,c:new Vi,i:new Xi,a:new Gi,b:new Zi,B:new Ji,h:new ec,H:new tc,K:new nc,k:new rc,m:new oc,s:new ac,S:new sc,X:new ic,x:new cc,t:new lc,T:new uc},pc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hc=/^'([^]*?)'?$/,mc=/''/g,gc=/\S/,wc=/[a-zA-Z]/;function Jt(n,r,t,e){var y,b,v,x,k,N,_,O;const o=ki(),s=(e==null?void 0:e.locale)??o.locale??Gr,a=(e==null?void 0:e.firstWeekContainsDate)??((b=(y=e==null?void 0:e.locale)==null?void 0:y.options)==null?void 0:b.firstWeekContainsDate)??o.firstWeekContainsDate??((x=(v=o.locale)==null?void 0:v.options)==null?void 0:x.firstWeekContainsDate)??1,i=(e==null?void 0:e.weekStartsOn)??((N=(k=e==null?void 0:e.locale)==null?void 0:k.options)==null?void 0:N.weekStartsOn)??o.weekStartsOn??((O=(_=o.locale)==null?void 0:_.options)==null?void 0:O.weekStartsOn)??0;if(r==="")return n===""?S(t):L(t,NaN);const c={firstWeekContainsDate:a,weekStartsOn:i,locale:s},l=[new Si],d=r.match(fc).map(C=>{const T=C[0];if(T in It){const Y=It[T];return Y(C,s.formatLong)}return C}).join("").match(pc),f=[];for(let C of d){!(e!=null&&e.useAdditionalWeekYearTokens)&&ro(C)&&dn(C,r,n),!(e!=null&&e.useAdditionalDayOfYearTokens)&&no(C)&&dn(C,r,n);const T=C[0],Y=dc[T];if(Y){const{incompatibleTokens:ne}=Y;if(Array.isArray(ne)){const A=f.find(re=>ne.includes(re.token)||re.token===T);if(A)throw new RangeError(`The format string mustn't contain \`${A.fullToken}\` and \`${C}\` at the same time`)}else if(Y.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${C}\` and any other token at the same time`);f.push({token:T,fullToken:C});const J=Y.run(n,C,s.match,c);if(!J)return L(t,NaN);l.push(J.setter),n=J.rest}else{if(T.match(wc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");if(C==="''"?C="'":T==="'"&&(C=yc(C)),n.indexOf(C)===0)n=n.slice(C.length);else return L(t,NaN)}}if(n.length>0&&gc.test(n))return L(t,NaN);const m=l.map(C=>C.priority).sort((C,T)=>T-C).filter((C,T,Y)=>Y.indexOf(C)===T).map(C=>l.filter(T=>T.priority===C).sort((T,Y)=>Y.subPriority-T.subPriority)).map(C=>C[0]);let h=S(t);if(isNaN(h.getTime()))return L(t,NaN);const g={};for(const C of m){if(!C.validate(h,c))return L(t,NaN);const T=C.set(h,g,c);Array.isArray(T)?(h=T[0],Object.assign(g,T[1])):h=T}return L(t,h)}function yc(n){return n.match(hc)[1].replace(mc,"'")}function xc(n,r){const t=(r==null?void 0:r.additionalDigits)??2,e=kc(n);let o;if(e.date){const c=Mc(e.date,t);o=Cc(c.restDateString,c.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);const s=o.getTime();let a=0,i;if(e.time&&(a=_c(e.time),isNaN(a)))return new Date(NaN);if(e.timezone){if(i=Sc(e.timezone),isNaN(i))return new Date(NaN)}else{const c=new Date(s+a),l=new Date(0);return l.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),l.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),l}return new Date(s+a+i)}const bt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},bc=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,vc=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Dc=/^([+-])(\d{2})(?::?(\d{2}))?$/;function kc(n){const r={},t=n.split(bt.dateTimeDelimiter);let e;if(t.length>2)return r;if(/:/.test(t[0])?e=t[0]:(r.date=t[0],e=t[1],bt.timeZoneDelimiter.test(r.date)&&(r.date=n.split(bt.timeZoneDelimiter)[0],e=n.substr(r.date.length,n.length))),e){const o=bt.timezone.exec(e);o?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e}return r}function Mc(n,r){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+r)+"})|(\\d{2}|[+-]\\d{"+(2+r)+"})$)"),e=n.match(t);if(!e)return{year:NaN,restDateString:""};const o=e[1]?parseInt(e[1]):null,s=e[2]?parseInt(e[2]):null;return{year:s===null?o:s*100,restDateString:n.slice((e[1]||e[2]).length)}}function Cc(n,r){if(r===null)return new Date(NaN);const t=n.match(bc);if(!t)return new Date(NaN);const e=!!t[4],o=at(t[1]),s=at(t[2])-1,a=at(t[3]),i=at(t[4]),c=at(t[5])-1;if(e)return Ec(r,i,c)?Pc(r,i,c):new Date(NaN);{const l=new Date(0);return!Tc(r,s,a)||!Oc(r,o)?new Date(NaN):(l.setUTCFullYear(r,s,Math.max(o,a)),l)}}function at(n){return n?parseInt(n):1}function _c(n){const r=n.match(vc);if(!r)return NaN;const t=en(r[1]),e=en(r[2]),o=en(r[3]);return Yc(t,e,o)?t*qt+e*Vt+o*1e3:NaN}function en(n){return n&&parseFloat(n.replace(",","."))||0}function Sc(n){if(n==="Z")return 0;const r=n.match(Dc);if(!r)return 0;const t=r[1]==="+"?-1:1,e=parseInt(r[2]),o=r[3]&&parseInt(r[3])||0;return Rc(e,o)?t*(e*qt+o*Vt):NaN}function Pc(n,r,t){const e=new Date(0);e.setUTCFullYear(n,0,4);const o=e.getUTCDay()||7,s=(r-1)*7+t+1-o;return e.setUTCDate(e.getUTCDate()+s),e}const Nc=[31,null,31,30,31,30,31,31,30,31,30,31];function po(n){return n%400===0||n%4===0&&n%100!==0}function Tc(n,r,t){return r>=0&&r<=11&&t>=1&&t<=(Nc[r]||(po(n)?29:28))}function Oc(n,r){return r>=1&&r<=(po(n)?366:365)}function Ec(n,r,t){return r>=1&&r<=53&&t>=0&&t<=6}function Yc(n,r,t){return n===24?r===0&&t===0:t>=0&&t<60&&r>=0&&r<60&&n>=0&&n<25}function Rc(n,r){return r>=0&&r<=59}function Ic(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,gn(n,r)}function gn(n,r){return gn=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},gn(n,r)}function $c(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,s;for(s=0;s<e.length;s++)o=e[s],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}function pr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Lc(n,r,t){return n===r?!0:n.correspondingElement?n.correspondingElement.classList.contains(t):n.classList.contains(t)}function Fc(n,r,t){if(n===r)return!0;for(;n.parentNode||n.host;){if(n.parentNode&&Lc(n,r,t))return!0;n=n.parentNode||n.host}return n}function jc(n){return document.documentElement.clientWidth<=n.clientX||document.documentElement.clientHeight<=n.clientY}var Wc=function(){if(!(typeof window>"u"||typeof window.addEventListener!="function")){var r=!1,t=Object.defineProperty({},"passive",{get:function(){r=!0}}),e=function(){};return window.addEventListener("testPassiveEventSupport",e,t),window.removeEventListener("testPassiveEventSupport",e,t),r}};function Ac(n){return n===void 0&&(n=0),function(){return++n}}var Hc=Ac(),wn,vt={},tn={},Bc=["touchstart","touchmove"],Qc="ignore-react-onclickoutside";function fr(n,r){var t={},e=Bc.indexOf(r)!==-1;return e&&wn&&(t.passive=!n.props.preventDefault),t}function Ut(n,r){var t,e,o=n.displayName||n.name||"Component";return e=t=function(s){Ic(a,s);function a(c){var l;return l=s.call(this,c)||this,l.__outsideClickHandler=function(d){if(typeof l.__clickOutsideHandlerProp=="function"){l.__clickOutsideHandlerProp(d);return}var f=l.getInstance();if(typeof f.props.handleClickOutside=="function"){f.props.handleClickOutside(d);return}if(typeof f.handleClickOutside=="function"){f.handleClickOutside(d);return}throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.")},l.__getComponentNode=function(){var d=l.getInstance();return r&&typeof r.setClickOutsideRef=="function"?r.setClickOutsideRef()(d):typeof d.setClickOutsideRef=="function"?d.setClickOutsideRef():Rr.findDOMNode(d)},l.enableOnClickOutside=function(){if(!(typeof document>"u"||tn[l._uid])){typeof wn>"u"&&(wn=Wc()),tn[l._uid]=!0;var d=l.props.eventTypes;d.forEach||(d=[d]),vt[l._uid]=function(f){if(l.componentNode!==null&&(l.props.preventDefault&&f.preventDefault(),l.props.stopPropagation&&f.stopPropagation(),!(l.props.excludeScrollbar&&jc(f)))){var m=f.composed&&f.composedPath&&f.composedPath().shift()||f.target;Fc(m,l.componentNode,l.props.outsideClickIgnoreClass)===document&&l.__outsideClickHandler(f)}},d.forEach(function(f){document.addEventListener(f,vt[l._uid],fr(pr(l),f))})}},l.disableOnClickOutside=function(){delete tn[l._uid];var d=vt[l._uid];if(d&&typeof document<"u"){var f=l.props.eventTypes;f.forEach||(f=[f]),f.forEach(function(m){return document.removeEventListener(m,d,fr(pr(l),m))}),delete vt[l._uid]}},l.getRef=function(d){return l.instanceRef=d},l._uid=Hc(),l}var i=a.prototype;return i.getInstance=function(){if(n.prototype&&!n.prototype.isReactComponent)return this;var l=this.instanceRef;return l.getInstance?l.getInstance():l},i.componentDidMount=function(){if(!(typeof document>"u"||!document.createElement)){var l=this.getInstance();if(r&&typeof r.handleClickOutside=="function"&&(this.__clickOutsideHandlerProp=r.handleClickOutside(l),typeof this.__clickOutsideHandlerProp!="function"))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),!this.props.disableOnClickOutside&&this.enableOnClickOutside()}},i.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},i.componentWillUnmount=function(){this.disableOnClickOutside()},i.render=function(){var l=this.props;l.excludeScrollbar;var d=$c(l,["excludeScrollbar"]);return n.prototype&&n.prototype.isReactComponent?d.ref=this.getRef:d.wrappedRef=this.getRef,d.disableOnClickOutside=this.disableOnClickOutside,d.enableOnClickOutside=this.enableOnClickOutside,D.createElement(n,d)},a}(D.Component),t.displayName="OnClickOutside("+o+")",t.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:r&&r.excludeScrollbar||!1,outsideClickIgnoreClass:Qc,preventDefault:!1,stopPropagation:!1},t.getClass=function(){return n.getClass?n.getClass():n},e}const Kc=Fr["useInsertionEffect".toString()],zc=Kc||(n=>n());function Vc(n){const r=D.useRef(()=>{});return zc(()=>{r.current=n}),D.useCallback(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return r.current==null?void 0:r.current(...e)},[])}var fo=typeof document<"u"?D.useLayoutEffect:D.useEffect;function yn(){return yn=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},yn.apply(this,arguments)}let nn=!1,qc=0;const hr=()=>"floating-ui-"+qc++;function Uc(){const[n,r]=D.useState(()=>nn?hr():void 0);return fo(()=>{n==null&&r(hr())},[]),D.useEffect(()=>{nn||(nn=!0)},[]),n}const Xc=Fr["useId".toString()],ho=Xc||Uc,Gc=D.forwardRef(function(r,t){const{context:{placement:e,elements:{floating:o},middlewareData:{arrow:s}},width:a=14,height:i=7,tipRadius:c=0,strokeWidth:l=0,staticOffset:d,stroke:f,d:m,style:{transform:h,...g}={},...y}=r,b=ho();if(!o)return null;const v=l*2,x=v/2,k=a/2*(c/-8+1),N=i/2*c/4,[_,O]=e.split("-"),C=qr.isRTL(o),T=!!m,Y=_==="top"||_==="bottom",ne=d&&O==="end"?"bottom":"top";let J=d&&O==="end"?"right":"left";d&&C&&(J=O==="end"?"left":"right");const A=(s==null?void 0:s.x)!=null?d||s.x:"",re=(s==null?void 0:s.y)!=null?d||s.y:"",V=m||"M0,0"+(" H"+a)+(" L"+(a-k)+","+(i-N))+(" Q"+a/2+","+i+" "+k+","+(i-N))+" Z",z={top:T?"rotate(180deg)":"",left:T?"rotate(90deg)":"rotate(-90deg)",bottom:T?"":"rotate(180deg)",right:T?"rotate(-90deg)":"rotate(90deg)"}[_];return D.createElement("svg",yn({},y,{"aria-hidden":!0,ref:t,width:T?a:a+v,height:a,viewBox:"0 0 "+a+" "+(i>a?i:a),style:{position:"absolute",pointerEvents:"none",[J]:A,[ne]:re,[_]:Y||T?"100%":"calc(100% - "+v/2+"px)",transform:""+z+(h??""),...g}}),v>0&&D.createElement("path",{clipPath:"url(#"+b+")",fill:"none",stroke:f,strokeWidth:v+(m?0:1),d:V}),D.createElement("path",{stroke:v&&!m?y.fill:"none",d:V}),D.createElement("clipPath",{id:b},D.createElement("rect",{x:-x,y:x*(T?-1:1),width:a+v,height:a})))});function Zc(){const n=new Map;return{emit(r,t){var e;(e=n.get(r))==null||e.forEach(o=>o(t))},on(r,t){n.set(r,[...n.get(r)||[],t])},off(r,t){var e;n.set(r,((e=n.get(r))==null?void 0:e.filter(o=>o!==t))||[])}}}const Jc=D.createContext(null),el=D.createContext(null),tl=()=>{var n;return((n=D.useContext(Jc))==null?void 0:n.id)||null},nl=()=>D.useContext(el);function rl(n){var r;n===void 0&&(n={});const{open:t=!1,onOpenChange:e,nodeId:o}=n,[s,a]=D.useState(null),i=((r=n.elements)==null?void 0:r.reference)||s,c=ka(n),l=nl(),d=tl()!=null,f=Vc((_,O,C)=>{_&&(h.current.openEvent=O),g.emit("openchange",{open:_,event:O,reason:C,nested:d}),e==null||e(_,O,C)}),m=D.useRef(null),h=D.useRef({}),g=D.useState(()=>Zc())[0],y=ho(),b=D.useCallback(_=>{const O=se(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(O)},[c.refs]),v=D.useCallback(_=>{(se(_)||_===null)&&(m.current=_,a(_)),(se(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!se(_))&&c.refs.setReference(_)},[c.refs]),x=D.useMemo(()=>({...c.refs,setReference:v,setPositionReference:b,domReference:m}),[c.refs,v,b]),k=D.useMemo(()=>({...c.elements,domReference:i}),[c.elements,i]),N=D.useMemo(()=>({...c,refs:x,elements:k,dataRef:h,nodeId:o,floatingId:y,events:g,open:t,onOpenChange:f}),[c,o,y,g,t,f,x,k]);return fo(()=>{const _=l==null?void 0:l.nodesRef.current.find(O=>O.id===o);_&&(_.context=N)}),D.useMemo(()=>({...c,context:N,refs:x,elements:k}),[c,x,k,N])}function ol(n,r){let t=S(n);return isNaN(+t)?L(n,NaN):(r.year!=null&&t.setFullYear(r.year),r.month!=null&&(t=ee(t,r.month)),r.date!=null&&t.setDate(r.date),r.hours!=null&&t.setHours(r.hours),r.minutes!=null&&t.setMinutes(r.minutes),r.seconds!=null&&t.setSeconds(r.seconds),r.milliseconds!=null&&t.setMilliseconds(r.milliseconds),t)}/*!
  react-datepicker v6.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/function q(n,r,t){return r=Wt(r),il(n,mo()?Reflect.construct(r,t||[],Wt(n).constructor):r.apply(n,t))}function mo(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mo=function(){return!!n})()}function mr(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,e)}return t}function be(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?mr(Object(t),!0).forEach(function(e){u(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mr(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function al(n,r){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var e=t.call(n,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function go(n){var r=al(n,"string");return typeof r=="symbol"?r:r+""}function xn(n){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},xn(n)}function U(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function gr(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,go(e.key),e)}}function X(n,r,t){return r&&gr(n.prototype,r),t&&gr(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function u(n,r,t){return r=go(r),r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function ht(){return ht=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},ht.apply(this,arguments)}function G(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&bn(n,r)}function Wt(n){return Wt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wt(n)}function bn(n,r){return bn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},bn(n,r)}function sl(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function il(n,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sl(n)}function Re(n){return cl(n)||ll(n)||ul(n)||dl()}function cl(n){if(Array.isArray(n))return vn(n)}function ll(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ul(n,r){if(n){if(typeof n=="string")return vn(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vn(n,r)}}function vn(n,r){(r==null||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function dl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yt=12,pl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function F(n){var r=n?typeof n=="string"||n instanceof String?xc(n):S(n):new Date;return Se(r)?r:null}function fl(n,r,t,e,o){var s=null,a=ke(t)||ke(je()),i=!0;return Array.isArray(r)?(r.forEach(function(c){var l=Jt(n,c,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});e&&(i=Se(l,o)&&n===W(l,c,t)),Se(l,o)&&i&&(s=l)}),s):(s=Jt(n,r,new Date,{locale:a,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0}),e?i=Se(s)&&n===W(s,r,t):Se(s)||(r=r.match(pl).map(function(c){var l=c[0];if(l==="p"||l==="P"){var d=It[l];return a?d(c,a.formatLong):l}return c}).join(""),n.length>0&&(s=Jt(n,r.slice(0,n.length),new Date,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})),Se(s)||(s=new Date(n))),Se(s)&&i?s:null)}function Se(n,r){return r=r||new Date("1/1/1000"),dt(n)&&!He(n,r)}function W(n,r,t){if(t==="en")return sr(n,r,{useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0});var e=ke(t);return t&&!e&&console.warn('A locale object was not found for the provided string ["'.concat(t,'"].')),!e&&je()&&ke(je())&&(e=ke(je())),sr(n,r,{locale:e||null,useAdditionalWeekYearTokens:!0,useAdditionalDayOfYearTokens:!0})}function ce(n,r){var t=r.dateFormat,e=r.locale;return n&&W(n,Array.isArray(t)?t[0]:t,e)||""}function hl(n,r,t){if(!n)return"";var e=ce(n,t),o=r?ce(r,t):"";return"".concat(e," - ").concat(o)}function ml(n,r){if(!(n!=null&&n.length))return"";var t=ce(n[0],r);if(n.length===1)return t;if(n.length===2){var e=ce(n[1],r);return"".concat(t,", ").concat(e)}var o=n.length-1;return"".concat(t," (+").concat(o,")")}function rn(n,r){var t=r.hour,e=t===void 0?0:t,o=r.minute,s=o===void 0?0:o,a=r.second,i=a===void 0?0:a;return Pt(St(fi(n,i),s),e)}function gl(n,r){return r&&ke(r)||je()&&ke(je()),Rn(n)}function wl(n,r){return W(n,"ddd",r)}function yl(n){return ge(n)}function Ne(n,r,t){var e=ke(r||je());return Me(n,{locale:e,weekStartsOn:t})}function Te(n){return so(n)}function st(n){return Yn(n)}function wr(n){return hn(n)}function yr(){return ge(F())}function xl(n){return mi(n)}function fe(n,r){return n&&r?vi(n,r):!n&&!r}function ae(n,r){return n&&r?bi(n,r):!n&&!r}function At(n,r){return n&&r?Di(n,r):!n&&!r}function R(n,r){return n&&r?xi(n,r):!n&&!r}function Le(n,r){return n&&r?yi(n,r):!n&&!r}function it(n,r,t){var e,o=ge(r),s=mn(t);try{e=ft(n,{start:o,end:s})}catch{e=!1}return e}function je(){var n=typeof window<"u"?window:globalThis;return n.__localeId__}function ke(n){if(typeof n=="string"){var r=typeof window<"u"?window:globalThis;return r.__localeData__?r.__localeData__[n]:null}else return n}function bl(n,r,t){return r(W(n,"EEEE",t))}function vl(n,r){return W(n,"EEEEEE",r)}function Dl(n,r){return W(n,"EEE",r)}function Fn(n,r){return W(ee(F(),n),"LLLL",r)}function wo(n,r){return W(ee(F(),n),"LLL",r)}function kl(n,r){return W(qe(F(),n),"QQQ",r)}function Xt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.excludeDateIntervals,a=r.includeDates,i=r.includeDateIntervals,c=r.filterDate;return Gt(n,{minDate:t,maxDate:e})||o&&o.some(function(l){return R(n,l.date?l.date:l)})||s&&s.some(function(l){var d=l.start,f=l.end;return ft(n,{start:d,end:f})})||a&&!a.some(function(l){return R(n,l)})||i&&!i.some(function(l){var d=l.start,f=l.end;return ft(n,{start:d,end:f})})||c&&!c(F(n))||!1}function jn(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeDates,e=r.excludeDateIntervals;return e&&e.length>0?e.some(function(o){var s=o.start,a=o.end;return ft(n,{start:s,end:a})}):t&&t.some(function(o){return R(n,o.date?o.date:o)})||!1}function Nt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Gt(n,{minDate:so(t),maxDate:gi(e)})||o&&o.some(function(i){return ae(n,i)})||s&&!s.some(function(i){return ae(n,i)})||a&&!a(F(n))||!1}function Dt(n,r,t,e){var o=E(n),s=te(n),a=E(r),i=te(r),c=E(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function on(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate;return Gt(n,{minDate:t,maxDate:e})||o&&o.some(function(i){return At(n,i)})||s&&!s.some(function(i){return At(n,i)})||a&&!a(F(n))||!1}function kt(n,r,t){if(!dt(r)||!dt(t))return!1;var e=E(r),o=E(t);return e<=n&&o>=n}function yo(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate,o=r.excludeDates,s=r.includeDates,a=r.filterDate,i=new Date(n,0,1);return Gt(i,{minDate:Yn(t),maxDate:wi(e)})||o&&o.some(function(c){return fe(i,c)})||s&&!s.some(function(c){return fe(i,c)})||a&&!a(F(i))||!1}function Mt(n,r,t,e){var o=E(n),s=lt(n),a=E(r),i=lt(r),c=E(e);if(o===a&&o===c)return s<=t&&t<=i;if(o<a)return c===o&&s<=t||c===a&&i>=t||c<a&&c>o}function Gt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.maxDate;return t&&pt(n,t)<0||e&&pt(n,e)>0}function xr(n,r){return r.some(function(t){return ye(t)===ye(n)&&we(t)===we(n)})}function br(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.excludeTimes,e=r.includeTimes,o=r.filterTime;return t&&xr(n,t)||e&&!xr(n,e)||o&&!o(n)||!1}function vr(n,r){var t=r.minTime,e=r.maxTime;if(!t||!e)throw new Error("Both minTime and maxTime props required");var o=F(),s=Pt(St(o,we(n)),ye(n)),a=Pt(St(o,we(t)),ye(t)),i=Pt(St(o,we(e)),ye(e)),c;try{c=!ft(s,{start:a,end:i})}catch{c=!1}return c}function Dr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=tt(n,1);return t&&Lt(t,o)>0||e&&e.every(function(s){return Lt(s,o)>0})||!1}function kr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=de(n,1);return t&&Lt(o,t)>0||e&&e.every(function(s){return Lt(o,s)>0})||!1}function Mr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.includeDates,o=wt(n,1);return t&&Ft(t,o)>0||e&&e.every(function(s){return Ft(s,o)>0})||!1}function Ml(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.minDate,e=r.yearItemNumber,o=e===void 0?yt:e,s=st(wt(n,o)),a=nt(s,o),i=a.endPeriod,c=t&&E(t);return c&&c>i||!1}function Cr(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.includeDates,o=Pe(n,1);return t&&Ft(o,t)>0||e&&e.every(function(s){return Ft(o,s)>0})||!1}function Cl(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.maxDate,e=r.yearItemNumber,o=e===void 0?yt:e,s=Pe(n,o),a=nt(s,o),i=a.startPeriod,c=t&&E(t);return c&&c<i||!1}function xo(n){var r=n.minDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return pt(o,r)>=0});return ur(e)}else return t?ur(t):r}function bo(n){var r=n.maxDate,t=n.includeDates;if(t&&r){var e=t.filter(function(o){return pt(o,r)<=0});return dr(e)}else return t?dr(t):r}function _r(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--highlighted",t=new Map,e=0,o=n.length;e<o;e++){var s=n[e];if(Ae(s)){var a=W(s,"MM.dd.yyyy"),i=t.get(a)||[];i.includes(r)||(i.push(r),t.set(a,i))}else if(xn(s)==="object"){var c=Object.keys(s),l=c[0],d=s[c[0]];if(typeof l=="string"&&d.constructor===Array)for(var f=0,m=d.length;f<m;f++){var h=W(d[f],"MM.dd.yyyy"),g=t.get(h)||[];g.includes(l)||(g.push(l),t.set(h,g))}}}return t}function _l(n,r){return n.length!==r.length?!1:n.every(function(t,e){return t===r[e]})}function Sl(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"react-datepicker__day--holidays",t=new Map;return n.forEach(function(e){var o=e.date,s=e.holidayName;if(Ae(o)){var a=W(o,"MM.dd.yyyy"),i=t.get(a)||{};if(!("className"in i&&i.className===r&&_l(i.holidayNames,[s]))){i.className=r;var c=i.holidayNames;i.holidayNames=c?[].concat(Re(c),[s]):[s],t.set(a,i)}}}),t}function Pl(n,r,t,e,o){for(var s=o.length,a=[],i=0;i<s;i++){var c=pn(li(n,ye(o[i])),we(o[i])),l=pn(n,(t+1)*e);Ye(c,r)&&He(c,l)&&a.push(o[i])}return a}function Sr(n){return n<10?"0".concat(n):"".concat(n)}function nt(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yt,t=Math.ceil(E(n)/r)*r,e=t-(r-1);return{startPeriod:e,endPeriod:t}}function Nl(n){var r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),24);return Math.round((+t-+r)/36e5)}function Pr(n){var r=n.getSeconds(),t=n.getMilliseconds();return S(n.getTime()-r*1e3-t)}function Tl(n,r){return Pr(n).getTime()===Pr(r).getTime()}function Nr(n){if(!Ae(n))throw new Error("Invalid date");var r=new Date(n);return r.setHours(0,0,0,0),r}function Tr(n,r){if(!Ae(n)||!Ae(r))throw new Error("Invalid date received");var t=Nr(n),e=Nr(r);return He(t,e)}function vo(n){var r=" ";return n.key===r}function Ol(n,r,t,e){for(var o=[],s=0;s<2*r+1;s++){var a=n+r-s,i=!0;t&&(i=E(t)<=a),e&&i&&(i=E(e)>=a),i&&o.push(a)}return o}var El=function(n){function r(t){var e;U(this,r),e=q(this,r,[t]),u(e,"renderOptions",function(){var i=e.props.year,c=e.state.yearsList.map(function(f){return w.createElement("div",{className:i===f?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:f,onClick:e.onChange.bind(e,f),"aria-selected":i===f?"true":void 0},i===f?w.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",f)}),l=e.props.minDate?E(e.props.minDate):null,d=e.props.maxDate?E(e.props.maxDate):null;return(!d||!e.state.yearsList.find(function(f){return f===d}))&&c.unshift(w.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:e.incrementYears},w.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),(!l||!e.state.yearsList.find(function(f){return f===l}))&&c.push(w.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:e.decrementYears},w.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),c}),u(e,"onChange",function(i){e.props.onChange(i)}),u(e,"handleClickOutside",function(){e.props.onCancel()}),u(e,"shiftYears",function(i){var c=e.state.yearsList.map(function(l){return l+i});e.setState({yearsList:c})}),u(e,"incrementYears",function(){return e.shiftYears(1)}),u(e,"decrementYears",function(){return e.shiftYears(-1)});var o=t.yearDropdownItemNumber,s=t.scrollableYearDropdown,a=o||(s?10:5);return e.state={yearsList:Ol(e.props.year,a,e.props.minDate,e.props.maxDate)},e.dropdownRef=D.createRef(),e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){var e=this.dropdownRef.current;if(e){var o=e.children?Array.from(e.children):null,s=o?o.find(function(a){return a.ariaSelected}):null;e.scrollTop=s?s.offsetTop+(s.clientHeight-e.clientHeight)/2:(e.scrollHeight-e.clientHeight)/2}}},{key:"render",value:function(){var e=Z({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return w.createElement("div",{className:e,ref:this.dropdownRef},this.renderOptions())}}])}(w.Component),Yl=Ut(El),Rl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(){for(var a=t.props.minDate?E(t.props.minDate):1900,i=t.props.maxDate?E(t.props.maxDate):2100,c=[],l=a;l<=i;l++)c.push(w.createElement("option",{key:l,value:l},l));return c}),u(t,"onSelectChange",function(a){t.onChange(a.target.value)}),u(t,"renderSelectMode",function(){return w.createElement("select",{value:t.props.year,className:"react-datepicker__year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),u(t,"renderReadView",function(a){return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(c){return t.toggleDropdown(c)}},w.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},t.props.year))}),u(t,"renderDropdown",function(){return w.createElement(Yl,{key:"dropdown",year:t.props.year,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableYearDropdown:t.props.scrollableYearDropdown,yearDropdownItemNumber:t.props.yearDropdownItemNumber})}),u(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),u(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.year&&t.props.onChange(a)}),u(t,"toggleDropdown",function(a){t.setState({dropdownVisible:!t.state.dropdownVisible},function(){t.props.adjustDateOnChange&&t.handleYearChange(t.props.date,a)})}),u(t,"handleYearChange",function(a,i){t.onSelect(a,i),t.setOpen()}),u(t,"onSelect",function(a,i){t.props.onSelect&&t.props.onSelect(a,i)}),u(t,"setOpen",function(){t.props.setOpen&&t.props.setOpen(!0)}),t}return G(r,n),X(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return w.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(w.Component),Il=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"isSelectedMonth",function(a){return t.props.month===a}),u(t,"renderOptions",function(){return t.props.monthNames.map(function(a,i){return w.createElement("div",{className:t.isSelectedMonth(i)?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:a,onClick:t.onChange.bind(t,i),"aria-selected":t.isSelectedMonth(i)?"true":void 0},t.isSelectedMonth(i)?w.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",a)})}),u(t,"onChange",function(a){return t.props.onChange(a)}),u(t,"handleClickOutside",function(){return t.props.onCancel()}),t}return G(r,n),X(r,[{key:"render",value:function(){return w.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}])}(w.Component),$l=Ut(Il),Ll=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(a){return a.map(function(i,c){return w.createElement("option",{key:c,value:c},i)})}),u(t,"renderSelectMode",function(a){return w.createElement("select",{value:t.props.month,className:"react-datepicker__month-select",onChange:function(c){return t.onChange(c.target.value)}},t.renderSelectOptions(a))}),u(t,"renderReadView",function(a,i){return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:t.toggleDropdown},w.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},i[t.props.month]))}),u(t,"renderDropdown",function(a){return w.createElement($l,{key:"dropdown",month:t.props.month,monthNames:a,onChange:t.onChange,onCancel:t.toggleDropdown})}),u(t,"renderScrollMode",function(a){var i=t.state.dropdownVisible,c=[t.renderReadView(!i,a)];return i&&c.unshift(t.renderDropdown(a)),c}),u(t,"onChange",function(a){t.toggleDropdown(),a!==t.props.month&&t.props.onChange(a)}),u(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e=this,o=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(a){return wo(a,e.props.locale)}:function(a){return Fn(a,e.props.locale)}),s;switch(this.props.dropdownMode){case"scroll":s=this.renderScrollMode(o);break;case"select":s=this.renderSelectMode(o);break}return w.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},s)}}])}(w.Component);function Fl(n,r){for(var t=[],e=Te(n),o=Te(r);!Ye(e,o);)t.push(F(e)),e=de(e,1);return t}var jl=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"renderOptions",function(){return e.state.monthYearsList.map(function(o){var s=fn(o),a=fe(e.props.date,o)&&ae(e.props.date,o);return w.createElement("div",{className:a?"react-datepicker__month-year-option--selected_month-year":"react-datepicker__month-year-option",key:s,onClick:e.onChange.bind(e,s),"aria-selected":a?"true":void 0},a?w.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",W(o,e.props.dateFormat,e.props.locale))})}),u(e,"onChange",function(o){return e.props.onChange(o)}),u(e,"handleClickOutside",function(){e.props.onCancel()}),e.state={monthYearsList:Fl(e.props.minDate,e.props.maxDate)},e}return G(r,n),X(r,[{key:"render",value:function(){var e=Z({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return w.createElement("div",{className:e},this.renderOptions())}}])}(w.Component),Wl=Ut(jl),Al=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{dropdownVisible:!1}),u(t,"renderSelectOptions",function(){for(var a=Te(t.props.minDate),i=Te(t.props.maxDate),c=[];!Ye(a,i);){var l=fn(a);c.push(w.createElement("option",{key:l,value:l},W(a,t.props.dateFormat,t.props.locale))),a=de(a,1)}return c}),u(t,"onSelectChange",function(a){t.onChange(a.target.value)}),u(t,"renderSelectMode",function(){return w.createElement("select",{value:fn(Te(t.props.date)),className:"react-datepicker__month-year-select",onChange:t.onSelectChange},t.renderSelectOptions())}),u(t,"renderReadView",function(a){var i=W(t.props.date,t.props.dateFormat,t.props.locale);return w.createElement("div",{key:"read",style:{visibility:a?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(l){return t.toggleDropdown(l)}},w.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),w.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},i))}),u(t,"renderDropdown",function(){return w.createElement(Wl,{key:"dropdown",date:t.props.date,dateFormat:t.props.dateFormat,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableMonthYearDropdown:t.props.scrollableMonthYearDropdown,locale:t.props.locale})}),u(t,"renderScrollMode",function(){var a=t.state.dropdownVisible,i=[t.renderReadView(!a)];return a&&i.unshift(t.renderDropdown()),i}),u(t,"onChange",function(a){t.toggleDropdown();var i=F(parseInt(a));fe(t.props.date,i)&&ae(t.props.date,i)||t.props.onChange(i)}),u(t,"toggleDropdown",function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();break}return w.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},e)}}])}(w.Component),Hl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"dayEl",w.createRef()),u(t,"handleClick",function(a){!t.isDisabled()&&t.props.onClick&&t.props.onClick(a)}),u(t,"handleMouseEnter",function(a){!t.isDisabled()&&t.props.onMouseEnter&&t.props.onMouseEnter(a)}),u(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),u(t,"isSameDay",function(a){return R(t.props.day,a)}),u(t,"isKeyboardSelected",function(){var a;if(t.props.disabledKeyboardNavigation)return!1;var i=t.props.selectsMultiple?(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(c){return t.isSameDayOrWeek(c)}):t.isSameDayOrWeek(t.props.selected);return!i&&t.isSameDayOrWeek(t.props.preSelection)}),u(t,"isDisabled",function(){return Xt(t.props.day,t.props)}),u(t,"isExcluded",function(){return jn(t.props.day,t.props)}),u(t,"isStartOfWeek",function(){return R(t.props.day,Ne(t.props.day,t.props.locale,t.props.calendarStartDay))}),u(t,"isSameWeek",function(a){return t.props.showWeekPicker&&R(a,Ne(t.props.day,t.props.locale,t.props.calendarStartDay))}),u(t,"isSameDayOrWeek",function(a){return t.isSameDay(a)||t.isSameWeek(a)}),u(t,"getHighLightedClass",function(){var a=t.props,i=a.day,c=a.highlightDates;if(!c)return!1;var l=W(i,"MM.dd.yyyy");return c.get(l)}),u(t,"getHolidaysClass",function(){var a=t.props,i=a.day,c=a.holidays;if(!c)return!1;var l=W(i,"MM.dd.yyyy");if(c.has(l))return[c.get(l).className]}),u(t,"isInRange",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:it(i,c,l)}),u(t,"isInSelectingRange",function(){var a,i=t.props,c=i.day,l=i.selectsStart,d=i.selectsEnd,f=i.selectsRange,m=i.selectsDisabledDaysInRange,h=i.startDate,g=i.endDate,y=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return!(l||d||f)||!y||!m&&t.isDisabled()?!1:l&&g&&(He(y,g)||Le(y,g))?it(c,y,g):d&&h&&(Ye(y,h)||Le(y,h))||f&&h&&!g&&(Ye(y,h)||Le(y,h))?it(c,h,y):!1}),u(t,"isSelectingRangeStart",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.startDate,d=i.selectsStart,f=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return d?R(c,f):R(c,l)}),u(t,"isSelectingRangeEnd",function(){var a;if(!t.isInSelectingRange())return!1;var i=t.props,c=i.day,l=i.endDate,d=i.selectsEnd,f=i.selectsRange,m=(a=t.props.selectingDate)!==null&&a!==void 0?a:t.props.preSelection;return d||f?R(c,m):R(c,l)}),u(t,"isRangeStart",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:R(c,i)}),u(t,"isRangeEnd",function(){var a=t.props,i=a.day,c=a.startDate,l=a.endDate;return!c||!l?!1:R(l,i)}),u(t,"isWeekend",function(){var a=pi(t.props.day);return a===0||a===6}),u(t,"isAfterMonth",function(){return t.props.month!==void 0&&(t.props.month+1)%12===te(t.props.day)}),u(t,"isBeforeMonth",function(){return t.props.month!==void 0&&(te(t.props.day)+1)%12===t.props.month}),u(t,"isCurrentDay",function(){return t.isSameDay(F())}),u(t,"isSelected",function(){if(t.props.selectsMultiple){var a;return(a=t.props.selectedDates)===null||a===void 0?void 0:a.some(function(i){return t.isSameDayOrWeek(i)})}return t.isSameDayOrWeek(t.props.selected)}),u(t,"getClassNames",function(a){var i=t.props.dayClassName?t.props.dayClassName(a):void 0;return Z("react-datepicker__day",i,"react-datepicker__day--"+wl(t.props.day),{"react-datepicker__day--disabled":t.isDisabled(),"react-datepicker__day--excluded":t.isExcluded(),"react-datepicker__day--selected":t.isSelected(),"react-datepicker__day--keyboard-selected":t.isKeyboardSelected(),"react-datepicker__day--range-start":t.isRangeStart(),"react-datepicker__day--range-end":t.isRangeEnd(),"react-datepicker__day--in-range":t.isInRange(),"react-datepicker__day--in-selecting-range":t.isInSelectingRange(),"react-datepicker__day--selecting-range-start":t.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":t.isSelectingRangeEnd(),"react-datepicker__day--today":t.isCurrentDay(),"react-datepicker__day--weekend":t.isWeekend(),"react-datepicker__day--outside-month":t.isAfterMonth()||t.isBeforeMonth()},t.getHighLightedClass("react-datepicker__day--highlighted"),t.getHolidaysClass())}),u(t,"getAriaLabel",function(){var a=t.props,i=a.day,c=a.ariaLabelPrefixWhenEnabled,l=c===void 0?"Choose":c,d=a.ariaLabelPrefixWhenDisabled,f=d===void 0?"Not available":d,m=t.isDisabled()||t.isExcluded()?f:l;return"".concat(m," ").concat(W(i,"PPPP",t.props.locale))}),u(t,"getTitle",function(){var a=t.props,i=a.day,c=a.holidays,l=c===void 0?new Map:c,d=a.excludeDates,f=W(i,"MM.dd.yyyy"),m=[];return l.has(f)&&m.push.apply(m,Re(l.get(f).holidayNames)),t.isExcluded()&&m.push(d==null?void 0:d.filter(function(h){return R(h.date?h.date:h,i)}).map(function(h){return h.message})),m.join(", ")}),u(t,"getTabIndex",function(a,i){var c=a||t.props.selected,l=i||t.props.preSelection,d=!(t.props.showWeekPicker&&(t.props.showWeekNumber||!t.isStartOfWeek()))&&(t.isKeyboardSelected()||t.isSameDay(c)&&R(l,c))?0:-1;return d}),u(t,"handleFocusDay",function(){var a,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=!1;t.getTabIndex()===0&&!i.isInputFocused&&t.isSameDay(t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(c=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(c=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(c=!0),t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()&&(c=!1),t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()&&(c=!1)),c&&((a=t.dayEl.current)===null||a===void 0||a.focus({preventScroll:!0}))}),u(t,"renderDayContents",function(){return t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()||t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()?null:t.props.renderDayContents?t.props.renderDayContents(lr(t.props.day),t.props.day):lr(t.props.day)}),u(t,"render",function(){return w.createElement("div",{ref:t.dayEl,className:t.getClassNames(t.props.day),onKeyDown:t.handleOnKeyDown,onClick:t.handleClick,onMouseEnter:t.props.usePointerEvent?void 0:t.handleMouseEnter,onPointerEnter:t.props.usePointerEvent?t.handleMouseEnter:void 0,tabIndex:t.getTabIndex(),"aria-label":t.getAriaLabel(),role:"option",title:t.getTitle(),"aria-disabled":t.isDisabled(),"aria-current":t.isCurrentDay()?"date":void 0,"aria-selected":t.isSelected()||t.isInRange()},t.renderDayContents(),t.getTitle()!==""&&w.createElement("span",{className:"overlay"},t.getTitle()))}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.handleFocusDay()}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e)}}])}(w.Component),Bl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"weekNumberEl",w.createRef()),u(t,"handleClick",function(a){t.props.onClick&&t.props.onClick(a)}),u(t,"handleOnKeyDown",function(a){var i=a.key;i===" "&&(a.preventDefault(),a.key="Enter"),t.props.handleOnKeyDown(a)}),u(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!R(t.props.date,t.props.selected)&&R(t.props.date,t.props.preSelection)}),u(t,"getTabIndex",function(){return t.props.showWeekPicker&&t.props.showWeekNumber&&(t.isKeyboardSelected()||R(t.props.date,t.props.selected)&&R(t.props.preSelection,t.props.selected))?0:-1}),u(t,"handleFocusWeekNumber",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=!1;t.getTabIndex()===0&&!a.isInputFocused&&R(t.props.date,t.props.preSelection)&&((!document.activeElement||document.activeElement===document.body)&&(i=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(i=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement&&document.activeElement.classList.contains("react-datepicker__week-number")&&(i=!0)),i&&t.weekNumberEl.current&&t.weekNumberEl.current.focus({preventScroll:!0})}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.handleFocusWeekNumber()}},{key:"componentDidUpdate",value:function(e){this.handleFocusWeekNumber(e)}},{key:"render",value:function(){var e=this.props,o=e.weekNumber,s=e.ariaLabelPrefix,a=s===void 0?"week ":s,i=e.onClick,c={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!i,"react-datepicker__week-number--selected":!!i&&R(this.props.date,this.props.selected),"react-datepicker__week-number--keyboard-selected":this.isKeyboardSelected()};return w.createElement("div",{ref:this.weekNumberEl,className:Z(c),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick,onKeyDown:this.handleOnKeyDown,tabIndex:this.getTabIndex()},o)}}],[{key:"defaultProps",get:function(){return{ariaLabelPrefix:"week "}}}])}(w.Component),Ql=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i)}),u(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),u(t,"handleWeekClick",function(a,i,c){typeof t.props.onWeekSelect=="function"&&t.props.onWeekSelect(a,i,c),t.props.showWeekPicker&&t.handleDayClick(a,c),t.props.shouldCloseOnSelect&&t.props.setOpen(!1)}),u(t,"formatWeekNumber",function(a){return t.props.formatWeekNumber?t.props.formatWeekNumber(a):gl(a)}),u(t,"renderDays",function(){var a=t.startOfWeek(),i=[],c=t.formatWeekNumber(a);if(t.props.showWeekNumber){var l=t.props.onWeekSelect||t.props.showWeekPicker?t.handleWeekClick.bind(t,a,c):void 0;i.push(w.createElement(Bl,{key:"W",weekNumber:c,date:a,onClick:l,selected:t.props.selected,preSelection:t.props.preSelection,ariaLabelPrefix:t.props.ariaLabelPrefix,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef}))}return i.concat([0,1,2,3,4,5,6].map(function(d){var f=Ie(a,d);return w.createElement(Hl,{ariaLabelPrefixWhenEnabled:t.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:t.props.disabledDayAriaLabelPrefix,key:f.valueOf(),day:f,month:t.props.month,onClick:t.handleDayClick.bind(t,f),usePointerEvent:t.props.usePointerEvent,onMouseEnter:t.handleDayMouseEnter.bind(t,f),minDate:t.props.minDate,maxDate:t.props.maxDate,calendarStartDay:t.props.calendarStartDay,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,showWeekPicker:t.props.showWeekPicker,showWeekNumber:t.props.showWeekNumber,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,renderDayContents:t.props.renderDayContents,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart,locale:t.props.locale})}))}),u(t,"startOfWeek",function(){return Ne(t.props.day,t.props.locale,t.props.calendarStartDay)}),u(t,"isKeyboardSelected",function(){return!t.props.disabledKeyboardNavigation&&!R(t.startOfWeek(),t.props.selected)&&R(t.startOfWeek(),t.props.preSelection)}),t}return G(r,n),X(r,[{key:"render",value:function(){var e={"react-datepicker__week":!0,"react-datepicker__week--selected":R(this.startOfWeek(),this.props.selected),"react-datepicker__week--keyboard-selected":this.isKeyboardSelected()};return w.createElement("div",{className:Z(e)},this.renderDays())}}],[{key:"defaultProps",get:function(){return{shouldCloseOnSelect:!0}}}])}(w.Component),Kl=6,Xe={TWO_COLUMNS:"two_columns",THREE_COLUMNS:"three_columns",FOUR_COLUMNS:"four_columns"},an=u(u(u({},Xe.TWO_COLUMNS,{grid:[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],verticalNavigationOffset:2}),Xe.THREE_COLUMNS,{grid:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]],verticalNavigationOffset:3}),Xe.FOUR_COLUMNS,{grid:[[0,1,2,3],[4,5,6,7],[8,9,10,11]],verticalNavigationOffset:4}),Ct=1;function Or(n,r){return n?Xe.FOUR_COLUMNS:r?Xe.TWO_COLUMNS:Xe.THREE_COLUMNS}var zl=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"MONTH_REFS",Re(Array(12)).map(function(){return w.createRef()})),u(t,"QUARTER_REFS",Re(Array(4)).map(function(){return w.createRef()})),u(t,"isDisabled",function(a){return Xt(a,t.props)}),u(t,"isExcluded",function(a){return jn(a,t.props)}),u(t,"handleDayClick",function(a,i){t.props.onDayClick&&t.props.onDayClick(a,i,t.props.orderInDisplay)}),u(t,"handleDayMouseEnter",function(a){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(a)}),u(t,"handleMouseLeave",function(){t.props.onMouseLeave&&t.props.onMouseLeave()}),u(t,"isRangeStartMonth",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:ae(ee(c,a),l)}),u(t,"isRangeStartQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:At(qe(c,a),l)}),u(t,"isRangeEndMonth",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:ae(ee(c,a),d)}),u(t,"isRangeEndQuarter",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate;return!l||!d?!1:At(qe(c,a),d)}),u(t,"isInSelectingRangeMonth",function(a){var i,c=t.props,l=c.day,d=c.selectsStart,f=c.selectsEnd,m=c.selectsRange,h=c.startDate,g=c.endDate,y=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(d||f||m)||!y?!1:d&&g?Dt(y,g,a,l):f&&h||m&&h&&!g?Dt(h,y,a,l):!1}),u(t,"isSelectingMonthRangeStart",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,d=c.startDate,f=c.selectsStart,m=ee(l,a),h=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return f?ae(m,h):ae(m,d)}),u(t,"isSelectingMonthRangeEnd",function(a){var i;if(!t.isInSelectingRangeMonth(a))return!1;var c=t.props,l=c.day,d=c.endDate,f=c.selectsEnd,m=c.selectsRange,h=ee(l,a),g=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return f||m?ae(h,g):ae(h,d)}),u(t,"isInSelectingRangeQuarter",function(a){var i,c=t.props,l=c.day,d=c.selectsStart,f=c.selectsEnd,m=c.selectsRange,h=c.startDate,g=c.endDate,y=(i=t.props.selectingDate)!==null&&i!==void 0?i:t.props.preSelection;return!(d||f||m)||!y?!1:d&&g?Mt(y,g,a,l):f&&h||m&&h&&!g?Mt(h,y,a,l):!1}),u(t,"isWeekInMonth",function(a){var i=t.props.day,c=Ie(a,6);return ae(a,i)||ae(c,i)}),u(t,"isCurrentMonth",function(a,i){return E(a)===E(F())&&i===te(F())}),u(t,"isCurrentQuarter",function(a,i){return E(a)===E(F())&&i===lt(F())}),u(t,"isSelectedMonth",function(a,i,c){return te(c)===i&&E(a)===E(c)}),u(t,"isSelectedQuarter",function(a,i,c){return lt(a)===i&&E(a)===E(c)}),u(t,"renderWeeks",function(){for(var a=[],i=t.props.fixedHeight,c=0,l=!1,d=Ne(Te(t.props.day),t.props.locale,t.props.calendarStartDay),f=t.props.showWeekPicker?Ne(t.props.selected,t.props.locale,t.props.calendarStartDay):t.props.selected,m=t.props.showWeekPicker?Ne(t.props.preSelection,t.props.locale,t.props.calendarStartDay):t.props.preSelection;a.push(w.createElement(Ql,{ariaLabelPrefix:t.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:t.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:t.props.disabledDayAriaLabelPrefix,key:c,day:d,month:te(t.props.day),onDayClick:t.handleDayClick,usePointerEvent:t.props.usePointerEvent,onDayMouseEnter:t.handleDayMouseEnter,onWeekSelect:t.props.onWeekSelect,formatWeekNumber:t.props.formatWeekNumber,locale:t.props.locale,minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:m,selected:f,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,selectsMultiple:t.props.selectsMultiple,selectedDates:t.props.selectedDates,showWeekNumber:t.props.showWeekNumbers,showWeekPicker:t.props.showWeekPicker,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,setOpen:t.props.setOpen,shouldCloseOnSelect:t.props.shouldCloseOnSelect,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,renderDayContents:t.props.renderDayContents,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,calendarStartDay:t.props.calendarStartDay,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart})),!l;){c++,d=$t(d,1);var h=i&&c>=Kl,g=!i&&!t.isWeekInMonth(d);if(h||g)if(t.props.peekNextMonth)l=!0;else break}return a}),u(t,"onMonthClick",function(a,i){var c=ee(t.props.day,i);Nt(c,t.props)||t.handleDayClick(Te(c),a)}),u(t,"onMonthMouseEnter",function(a){var i=ee(t.props.day,a);Nt(i,t.props)||t.handleDayMouseEnter(Te(i))}),u(t,"handleMonthNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.MONTH_REFS[a].current&&t.MONTH_REFS[a].current.focus())}),u(t,"onMonthKeyDown",function(a,i){var c=t.props,l=c.selected,d=c.preSelection,f=c.disabledKeyboardNavigation,m=c.showTwoColumnMonthYearPicker,h=c.showFourColumnMonthYearPicker,g=c.setPreSelection,y=c.handleOnMonthKeyDown,b=a.key;if(b!=="Tab"&&a.preventDefault(),!f){var v=Or(h,m),x=an[v].verticalNavigationOffset,k=an[v].grid;switch(b){case"Enter":t.onMonthClick(a,i),g(l);break;case"ArrowRight":t.handleMonthNavigation(i===11?0:i+Ct,de(d,Ct));break;case"ArrowLeft":t.handleMonthNavigation(i===0?11:i-Ct,tt(d,Ct));break;case"ArrowUp":t.handleMonthNavigation(k[0].includes(i)?i+12-x:i-x,tt(d,x));break;case"ArrowDown":t.handleMonthNavigation(k[k.length-1].includes(i)?i-12+x:i+x,de(d,x));break}}y&&y(a)}),u(t,"onQuarterClick",function(a,i){var c=qe(t.props.day,i);on(c,t.props)||t.handleDayClick(wr(c),a)}),u(t,"onQuarterMouseEnter",function(a){var i=qe(t.props.day,a);on(i,t.props)||t.handleDayMouseEnter(wr(i))}),u(t,"handleQuarterNavigation",function(a,i){t.isDisabled(i)||t.isExcluded(i)||(t.props.setPreSelection(i),t.QUARTER_REFS[a-1].current&&t.QUARTER_REFS[a-1].current.focus())}),u(t,"onQuarterKeyDown",function(a,i){var c=a.key;if(!t.props.disabledKeyboardNavigation)switch(c){case"Enter":t.onQuarterClick(a,i),t.props.setPreSelection(t.props.selected);break;case"ArrowRight":t.handleQuarterNavigation(i===4?1:i+1,ao(t.props.preSelection,1));break;case"ArrowLeft":t.handleQuarterNavigation(i===1?4:i-1,di(t.props.preSelection,1));break}}),u(t,"getMonthClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate,f=i.selected,m=i.minDate,h=i.maxDate,g=i.preSelection,y=i.monthClassName,b=i.excludeDates,v=i.includeDates,x=y?y(ee(c,a)):void 0,k=ee(c,a);return Z("react-datepicker__month-text","react-datepicker__month-".concat(a),x,{"react-datepicker__month-text--disabled":(m||h||b||v)&&Nt(k,t.props),"react-datepicker__month-text--selected":t.isSelectedMonth(c,a,f),"react-datepicker__month-text--keyboard-selected":!t.props.disabledKeyboardNavigation&&t.isSelectedMonth(c,a,g),"react-datepicker__month-text--in-selecting-range":t.isInSelectingRangeMonth(a),"react-datepicker__month-text--in-range":Dt(l,d,a,c),"react-datepicker__month-text--range-start":t.isRangeStartMonth(a),"react-datepicker__month-text--range-end":t.isRangeEndMonth(a),"react-datepicker__month-text--selecting-range-start":t.isSelectingMonthRangeStart(a),"react-datepicker__month-text--selecting-range-end":t.isSelectingMonthRangeEnd(a),"react-datepicker__month-text--today":t.isCurrentMonth(c,a)})}),u(t,"getTabIndex",function(a){var i=te(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),u(t,"getQuarterTabIndex",function(a){var i=lt(t.props.preSelection),c=!t.props.disabledKeyboardNavigation&&a===i?"0":"-1";return c}),u(t,"getAriaLabel",function(a){var i=t.props,c=i.chooseDayAriaLabelPrefix,l=c===void 0?"Choose":c,d=i.disabledDayAriaLabelPrefix,f=d===void 0?"Not available":d,m=i.day,h=ee(m,a),g=t.isDisabled(h)||t.isExcluded(h)?f:l;return"".concat(g," ").concat(W(h,"MMMM yyyy"))}),u(t,"getQuarterClassNames",function(a){var i=t.props,c=i.day,l=i.startDate,d=i.endDate,f=i.selected,m=i.minDate,h=i.maxDate,g=i.preSelection,y=i.disabledKeyboardNavigation;return Z("react-datepicker__quarter-text","react-datepicker__quarter-".concat(a),{"react-datepicker__quarter-text--disabled":(m||h)&&on(qe(c,a),t.props),"react-datepicker__quarter-text--selected":t.isSelectedQuarter(c,a,f),"react-datepicker__quarter-text--keyboard-selected":!y&&t.isSelectedQuarter(c,a,g),"react-datepicker__quarter-text--in-selecting-range":t.isInSelectingRangeQuarter(a),"react-datepicker__quarter-text--in-range":Mt(l,d,a,c),"react-datepicker__quarter-text--range-start":t.isRangeStartQuarter(a),"react-datepicker__quarter-text--range-end":t.isRangeEndQuarter(a)})}),u(t,"getMonthContent",function(a){var i=t.props,c=i.showFullMonthYearPicker,l=i.renderMonthContent,d=i.locale,f=i.day,m=wo(a,d),h=Fn(a,d);return l?l(a,m,h,f):c?h:m}),u(t,"getQuarterContent",function(a){var i=t.props,c=i.renderQuarterContent,l=i.locale,d=kl(a,l);return c?c(a,d):d}),u(t,"renderMonths",function(){var a=t.props,i=a.showTwoColumnMonthYearPicker,c=a.showFourColumnMonthYearPicker,l=a.day,d=a.selected,f=an[Or(c,i)].grid;return f.map(function(m,h){return w.createElement("div",{className:"react-datepicker__month-wrapper",key:h},m.map(function(g,y){return w.createElement("div",{ref:t.MONTH_REFS[g],key:y,onClick:function(v){t.onMonthClick(v,g)},onKeyDown:function(v){vo(v)&&(v.preventDefault(),v.key="Enter"),t.onMonthKeyDown(v,g)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onMonthMouseEnter(g)},onPointerEnter:t.props.usePointerEvent?function(){return t.onMonthMouseEnter(g)}:void 0,tabIndex:t.getTabIndex(g),className:t.getMonthClassNames(g),role:"option","aria-label":t.getAriaLabel(g),"aria-current":t.isCurrentMonth(l,g)?"date":void 0,"aria-selected":t.isSelectedMonth(l,g,d)},t.getMonthContent(g))}))})}),u(t,"renderQuarters",function(){var a=t.props,i=a.day,c=a.selected,l=[1,2,3,4];return w.createElement("div",{className:"react-datepicker__quarter-wrapper"},l.map(function(d,f){return w.createElement("div",{key:f,ref:t.QUARTER_REFS[f],role:"option",onClick:function(h){t.onQuarterClick(h,d)},onKeyDown:function(h){t.onQuarterKeyDown(h,d)},onMouseEnter:t.props.usePointerEvent?void 0:function(){return t.onQuarterMouseEnter(d)},onPointerEnter:t.props.usePointerEvent?function(){return t.onQuarterMouseEnter(d)}:void 0,className:t.getQuarterClassNames(d),"aria-selected":t.isSelectedQuarter(i,d,c),tabIndex:t.getQuarterTabIndex(d),"aria-current":t.isCurrentQuarter(i,d)?"date":void 0},t.getQuarterContent(d))}))}),u(t,"getClassNames",function(){var a=t.props,i=a.selectingDate,c=a.selectsStart,l=a.selectsEnd,d=a.showMonthYearPicker,f=a.showQuarterYearPicker,m=a.showWeekPicker;return Z("react-datepicker__month",{"react-datepicker__month--selecting-range":i&&(c||l)},{"react-datepicker__monthPicker":d},{"react-datepicker__quarterPicker":f},{"react-datepicker__weekPicker":m})}),t}return G(r,n),X(r,[{key:"render",value:function(){var e=this.props,o=e.showMonthYearPicker,s=e.showQuarterYearPicker,a=e.day,i=e.ariaLabelPrefix,c=i===void 0?"Month ":i,l=c?c.trim()+" ":"";return w.createElement("div",{className:this.getClassNames(),onMouseLeave:this.props.usePointerEvent?void 0:this.handleMouseLeave,onPointerLeave:this.props.usePointerEvent?this.handleMouseLeave:void 0,"aria-label":"".concat(l).concat(W(a,"MMMM, yyyy")),role:"listbox"},o?this.renderMonths():s?this.renderQuarters():this.renderWeeks())}}])}(w.Component),Do=function(n){function r(){var t;U(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=q(this,r,[].concat(o)),u(t,"state",{height:null}),u(t,"scrollToTheSelectedTime",function(){requestAnimationFrame(function(){t.list&&(t.list.scrollTop=t.centerLi&&r.calcCenterPosition(t.props.monthRef?t.props.monthRef.clientHeight-t.header.clientHeight:t.list.clientHeight,t.centerLi))})}),u(t,"handleClick",function(a){(t.props.minTime||t.props.maxTime)&&vr(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&br(a,t.props)||t.props.onChange(a)}),u(t,"isSelectedTime",function(a){return t.props.selected&&Tl(t.props.selected,a)}),u(t,"isDisabledTime",function(a){return(t.props.minTime||t.props.maxTime)&&vr(a,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&br(a,t.props)}),u(t,"liClasses",function(a){var i=["react-datepicker__time-list-item",t.props.timeClassName?t.props.timeClassName(a):void 0];return t.isSelectedTime(a)&&i.push("react-datepicker__time-list-item--selected"),t.isDisabledTime(a)&&i.push("react-datepicker__time-list-item--disabled"),t.props.injectTimes&&(ye(a)*60+we(a))%t.props.intervals!==0&&i.push("react-datepicker__time-list-item--injected"),i.join(" ")}),u(t,"handleOnKeyDown",function(a,i){a.key===" "&&(a.preventDefault(),a.key="Enter"),(a.key==="ArrowUp"||a.key==="ArrowLeft")&&a.target.previousSibling&&(a.preventDefault(),a.target.previousSibling.focus()),(a.key==="ArrowDown"||a.key==="ArrowRight")&&a.target.nextSibling&&(a.preventDefault(),a.target.nextSibling.focus()),a.key==="Enter"&&t.handleClick(i),t.props.handleOnKeyDown(a)}),u(t,"renderTimes",function(){for(var a=[],i=t.props.format?t.props.format:"p",c=t.props.intervals,l=t.props.selected||t.props.openToDate||F(),d=yl(l),f=t.props.injectTimes&&t.props.injectTimes.sort(function(x,k){return x-k}),m=60*Nl(l),h=m/c,g=0;g<h;g++){var y=pn(d,g*c);if(a.push(y),f){var b=Pl(d,y,g,c,f);a=a.concat(b)}}var v=a.reduce(function(x,k){return k.getTime()<=l.getTime()?k:x},a[0]);return a.map(function(x,k){return w.createElement("li",{key:k,onClick:t.handleClick.bind(t,x),className:t.liClasses(x),ref:function(_){x===v&&(t.centerLi=_)},onKeyDown:function(_){t.handleOnKeyDown(_,x)},tabIndex:x===v?0:-1,role:"option","aria-selected":t.isSelectedTime(x)?"true":void 0,"aria-disabled":t.isDisabledTime(x)?"true":void 0},W(x,i,t.props.locale))})}),t}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.scrollToTheSelectedTime(),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight})}},{key:"render",value:function(){var e=this,o=this.state.height;return w.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},w.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(a){e.header=a}},w.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),w.createElement("div",{className:"react-datepicker__time"},w.createElement("div",{className:"react-datepicker__time-box"},w.createElement("ul",{className:"react-datepicker__time-list",ref:function(a){e.list=a},style:o?{height:o}:{},role:"listbox","aria-label":this.props.timeCaption},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return{intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}])}(w.Component);u(Do,"calcCenterPosition",function(n,r){return r.offsetTop-(n/2-r.clientHeight/2)});var Vl=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"YEAR_REFS",Re(Array(e.props.yearItemNumber)).map(function(){return w.createRef()})),u(e,"isDisabled",function(o){return Xt(o,e.props)}),u(e,"isExcluded",function(o){return jn(o,e.props)}),u(e,"selectingDate",function(){var o;return(o=e.props.selectingDate)!==null&&o!==void 0?o:e.props.preSelection}),u(e,"updateFocusOnPaginate",function(o){var s=(function(){this.YEAR_REFS[o].current.focus()}).bind(e);window.requestAnimationFrame(s)}),u(e,"handleYearClick",function(o,s){e.props.onDayClick&&e.props.onDayClick(o,s)}),u(e,"handleYearNavigation",function(o,s){var a=e.props,i=a.date,c=a.yearItemNumber,l=nt(i,c),d=l.startPeriod;e.isDisabled(s)||e.isExcluded(s)||(e.props.setPreSelection(s),o-d===-1?e.updateFocusOnPaginate(c-1):o-d===c?e.updateFocusOnPaginate(0):e.YEAR_REFS[o-d].current.focus())}),u(e,"isSameDay",function(o,s){return R(o,s)}),u(e,"isCurrentYear",function(o){return o===E(F())}),u(e,"isRangeStart",function(o){return e.props.startDate&&e.props.endDate&&fe(pe(F(),o),e.props.startDate)}),u(e,"isRangeEnd",function(o){return e.props.startDate&&e.props.endDate&&fe(pe(F(),o),e.props.endDate)}),u(e,"isInRange",function(o){return kt(o,e.props.startDate,e.props.endDate)}),u(e,"isInSelectingRange",function(o){var s=e.props,a=s.selectsStart,i=s.selectsEnd,c=s.selectsRange,l=s.startDate,d=s.endDate;return!(a||i||c)||!e.selectingDate()?!1:a&&d?kt(o,e.selectingDate(),d):i&&l||c&&l&&!d?kt(o,l,e.selectingDate()):!1}),u(e,"isSelectingRangeStart",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.startDate,i=s.selectsStart,c=pe(F(),o);return i?fe(c,e.selectingDate()):fe(c,a)}),u(e,"isSelectingRangeEnd",function(o){if(!e.isInSelectingRange(o))return!1;var s=e.props,a=s.endDate,i=s.selectsEnd,c=s.selectsRange,l=pe(F(),o);return i||c?fe(l,e.selectingDate()):fe(l,a)}),u(e,"isKeyboardSelected",function(o){var s=st(pe(e.props.date,o));return!e.props.disabledKeyboardNavigation&&!e.props.inline&&!R(s,st(e.props.selected))&&R(s,st(e.props.preSelection))}),u(e,"onYearClick",function(o,s){var a=e.props.date;e.handleYearClick(st(pe(a,s)),o)}),u(e,"onYearKeyDown",function(o,s){var a=o.key,i=e.props.handleOnKeyDown;if(!e.props.disabledKeyboardNavigation)switch(a){case"Enter":e.onYearClick(o,s),e.props.setPreSelection(e.props.selected);break;case"ArrowRight":e.handleYearNavigation(s+1,Pe(e.props.preSelection,1));break;case"ArrowLeft":e.handleYearNavigation(s-1,wt(e.props.preSelection,1));break}i&&i(o)}),u(e,"getYearClassNames",function(o){var s=e.props,a=s.date,i=s.minDate,c=s.maxDate,l=s.selected,d=s.excludeDates,f=s.includeDates,m=s.filterDate,h=s.yearClassName;return Z("react-datepicker__year-text","react-datepicker__year-".concat(o),h?h(pe(a,o)):void 0,{"react-datepicker__year-text--selected":o===E(l),"react-datepicker__year-text--disabled":(i||c||d||f||m)&&yo(o,e.props),"react-datepicker__year-text--keyboard-selected":e.isKeyboardSelected(o),"react-datepicker__year-text--range-start":e.isRangeStart(o),"react-datepicker__year-text--range-end":e.isRangeEnd(o),"react-datepicker__year-text--in-range":e.isInRange(o),"react-datepicker__year-text--in-selecting-range":e.isInSelectingRange(o),"react-datepicker__year-text--selecting-range-start":e.isSelectingRangeStart(o),"react-datepicker__year-text--selecting-range-end":e.isSelectingRangeEnd(o),"react-datepicker__year-text--today":e.isCurrentYear(o)})}),u(e,"getYearTabIndex",function(o){if(e.props.disabledKeyboardNavigation)return"-1";var s=E(e.props.preSelection);return o===s?"0":"-1"}),u(e,"getYearContainerClassNames",function(){var o=e.props,s=o.selectingDate,a=o.selectsStart,i=o.selectsEnd,c=o.selectsRange;return Z("react-datepicker__year",{"react-datepicker__year--selecting-range":s&&(a||i||c)})}),u(e,"getYearContent",function(o){return e.props.renderYearContent?e.props.renderYearContent(o):o}),e}return G(r,n),X(r,[{key:"render",value:function(){for(var e=this,o=[],s=this.props,a=s.date,i=s.yearItemNumber,c=s.onYearMouseEnter,l=s.onYearMouseLeave,d=nt(a,i),f=d.startPeriod,m=d.endPeriod,h=function(b){o.push(w.createElement("div",{ref:e.YEAR_REFS[b-f],onClick:function(x){e.onYearClick(x,b)},onKeyDown:function(x){vo(x)&&(x.preventDefault(),x.key="Enter"),e.onYearKeyDown(x,b)},tabIndex:e.getYearTabIndex(b),className:e.getYearClassNames(b),onMouseEnter:e.props.usePointerEvent?void 0:function(v){return c(v,b)},onPointerEnter:e.props.usePointerEvent?function(v){return c(v,b)}:void 0,onMouseLeave:e.props.usePointerEvent?void 0:function(v){return l(v,b)},onPointerLeave:e.props.usePointerEvent?function(v){return l(v,b)}:void 0,key:b,"aria-current":e.isCurrentYear(b)?"date":void 0},e.getYearContent(b)))},g=f;g<=m;g++)h(g);return w.createElement("div",{className:this.getYearContainerClassNames()},w.createElement("div",{className:"react-datepicker__year-wrapper",onMouseLeave:this.props.usePointerEvent?void 0:this.props.clearSelectingDate,onPointerLeave:this.props.usePointerEvent?this.props.clearSelectingDate:void 0},o))}}])}(w.Component),ql=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"onTimeChange",function(o){e.setState({time:o});var s=e.props.date,a=s instanceof Date&&!isNaN(s),i=a?s:new Date;i.setHours(o.split(":")[0]),i.setMinutes(o.split(":")[1]),e.props.onChange(i)}),u(e,"renderTimeInput",function(){var o=e.state.time,s=e.props,a=s.date,i=s.timeString,c=s.customTimeInput;return c?w.cloneElement(c,{date:a,value:o,onChange:e.onTimeChange}):w.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:o,onChange:function(d){e.onTimeChange(d.target.value||i)}})}),e.state={time:e.props.timeString},e}return G(r,n),X(r,[{key:"render",value:function(){return w.createElement("div",{className:"react-datepicker__input-time-container"},w.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),w.createElement("div",{className:"react-datepicker-time__input-container"},w.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,o){return e.timeString!==o.time?{time:e.timeString}:null}}])}(w.Component);function Ul(n){var r=n.showTimeSelectOnly,t=r===void 0?!1:r,e=n.showTime,o=e===void 0?!1:e,s=n.className,a=n.children,i=t?"Choose Time":"Choose Date".concat(o?" and Time":"");return w.createElement("div",{className:s,role:"dialog","aria-label":i,"aria-modal":"true"},a)}var Xl=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],Gl=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(r.className||"").split(/\s+/);return Xl.some(function(e){return t.indexOf(e)>=0})},Zl=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"handleClickOutside",function(o){e.props.onClickOutside(o)}),u(e,"setClickOutsideRef",function(){return e.containerRef.current}),u(e,"handleDropdownFocus",function(o){Gl(o.target)&&e.props.onDropdownFocus()}),u(e,"getDateInView",function(){var o=e.props,s=o.preSelection,a=o.selected,i=o.openToDate,c=xo(e.props),l=bo(e.props),d=F(),f=i||a||s;return f||(c&&He(d,c)?c:l&&Ye(d,l)?l:d)}),u(e,"increaseMonth",function(){e.setState(function(o){var s=o.date;return{date:de(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"decreaseMonth",function(){e.setState(function(o){var s=o.date;return{date:tt(s,1)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"handleDayClick",function(o,s,a){e.props.onSelect(o,s,a),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleDayMouseEnter",function(o){e.setState({selectingDate:o}),e.props.onDayMouseEnter&&e.props.onDayMouseEnter(o)}),u(e,"handleMonthMouseLeave",function(){e.setState({selectingDate:null}),e.props.onMonthMouseLeave&&e.props.onMonthMouseLeave()}),u(e,"handleYearMouseEnter",function(o,s){e.setState({selectingDate:pe(F(),s)}),e.props.onYearMouseEnter&&e.props.onYearMouseEnter(o,s)}),u(e,"handleYearMouseLeave",function(o,s){e.props.onYearMouseLeave&&e.props.onYearMouseLeave(o,s)}),u(e,"handleYearChange",function(o){e.props.onYearChange&&(e.props.onYearChange(o),e.setState({isRenderAriaLiveMessage:!0})),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleMonthChange",function(o){e.handleCustomMonthChange(o),e.props.adjustDateOnChange&&(e.props.onSelect&&e.props.onSelect(o),e.props.setOpen&&e.props.setOpen(!0)),e.props.setPreSelection&&e.props.setPreSelection(o)}),u(e,"handleCustomMonthChange",function(o){e.props.onMonthChange&&(e.props.onMonthChange(o),e.setState({isRenderAriaLiveMessage:!0}))}),u(e,"handleMonthYearChange",function(o){e.handleYearChange(o),e.handleMonthChange(o)}),u(e,"changeYear",function(o){e.setState(function(s){var a=s.date;return{date:pe(a,o)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"changeMonth",function(o){e.setState(function(s){var a=s.date;return{date:ee(a,o)}},function(){return e.handleMonthChange(e.state.date)})}),u(e,"changeMonthYear",function(o){e.setState(function(s){var a=s.date;return{date:pe(ee(a,te(o)),E(o))}},function(){return e.handleMonthYearChange(e.state.date)})}),u(e,"header",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=Ne(o,e.props.locale,e.props.calendarStartDay),a=[];return e.props.showWeekNumbers&&a.push(w.createElement("div",{key:"W",className:"react-datepicker__day-name"},e.props.weekLabel||"#")),a.concat([0,1,2,3,4,5,6].map(function(i){var c=Ie(s,i),l=e.formatWeekday(c,e.props.locale),d=e.props.weekDayClassName?e.props.weekDayClassName(c):void 0;return w.createElement("div",{key:i,className:Z("react-datepicker__day-name",d)},l)}))}),u(e,"formatWeekday",function(o,s){return e.props.formatWeekDay?bl(o,e.props.formatWeekDay,s):e.props.useWeekdaysShort?Dl(o,s):vl(o,s)}),u(e,"decreaseYear",function(){e.setState(function(o){var s=o.date;return{date:wt(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"clearSelectingDate",function(){e.setState({selectingDate:null})}),u(e,"renderPreviousButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=Mr(e.state.date,e.props);break;case e.props.showYearPicker:o=Ml(e.state.date,e.props);break;default:o=Dr(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"],a=["react-datepicker__navigation","react-datepicker__navigation--previous"],i=e.decreaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.decreaseYear),o&&e.props.showDisabledMonthNavigation&&(a.push("react-datepicker__navigation--previous--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,d=l.previousMonthButtonLabel,f=l.previousYearButtonLabel,m=e.props,h=m.previousMonthAriaLabel,g=h===void 0?typeof d=="string"?d:"Previous Month":h,y=m.previousYearAriaLabel,b=y===void 0?typeof f=="string"?f:"Previous Year":y;return w.createElement("button",{type:"button",className:a.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?b:g},w.createElement("span",{className:s.join(" ")},c?e.props.previousYearButtonLabel:e.props.previousMonthButtonLabel))}}}),u(e,"increaseYear",function(){e.setState(function(o){var s=o.date;return{date:Pe(s,e.props.showYearPicker?e.props.yearItemNumber:1)}},function(){return e.handleYearChange(e.state.date)})}),u(e,"renderNextButton",function(){if(!e.props.renderCustomHeader){var o;switch(!0){case e.props.showMonthYearPicker:o=Cr(e.state.date,e.props);break;case e.props.showYearPicker:o=Cl(e.state.date,e.props);break;default:o=kr(e.state.date,e.props);break}if(!(!e.props.forceShowMonthNavigation&&!e.props.showDisabledMonthNavigation&&o||e.props.showTimeSelectOnly)){var s=["react-datepicker__navigation","react-datepicker__navigation--next"],a=["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"];e.props.showTimeSelect&&s.push("react-datepicker__navigation--next--with-time"),e.props.todayButton&&s.push("react-datepicker__navigation--next--with-today-button");var i=e.increaseMonth;(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker)&&(i=e.increaseYear),o&&e.props.showDisabledMonthNavigation&&(s.push("react-datepicker__navigation--next--disabled"),i=null);var c=e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker,l=e.props,d=l.nextMonthButtonLabel,f=l.nextYearButtonLabel,m=e.props,h=m.nextMonthAriaLabel,g=h===void 0?typeof d=="string"?d:"Next Month":h,y=m.nextYearAriaLabel,b=y===void 0?typeof f=="string"?f:"Next Year":y;return w.createElement("button",{type:"button",className:s.join(" "),onClick:i,onKeyDown:e.props.handleOnKeyDown,"aria-label":c?b:g},w.createElement("span",{className:a.join(" ")},c?e.props.nextYearButtonLabel:e.props.nextMonthButtonLabel))}}}),u(e,"renderCurrentMonth",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.state.date,s=["react-datepicker__current-month"];return e.props.showYearDropdown&&s.push("react-datepicker__current-month--hasYearDropdown"),e.props.showMonthDropdown&&s.push("react-datepicker__current-month--hasMonthDropdown"),e.props.showMonthYearDropdown&&s.push("react-datepicker__current-month--hasMonthYearDropdown"),w.createElement("div",{className:s.join(" ")},W(o,e.props.dateFormat,e.props.locale))}),u(e,"renderYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showYearDropdown||o))return w.createElement(Rl,{adjustDateOnChange:e.props.adjustDateOnChange,date:e.state.date,onSelect:e.props.onSelect,setOpen:e.props.setOpen,dropdownMode:e.props.dropdownMode,onChange:e.changeYear,minDate:e.props.minDate,maxDate:e.props.maxDate,year:E(e.state.date),scrollableYearDropdown:e.props.scrollableYearDropdown,yearDropdownItemNumber:e.props.yearDropdownItemNumber})}),u(e,"renderMonthDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthDropdown||o))return w.createElement(Ll,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,onChange:e.changeMonth,month:te(e.state.date),useShortMonthInDropdown:e.props.useShortMonthInDropdown})}),u(e,"renderMonthYearDropdown",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!(!e.props.showMonthYearDropdown||o))return w.createElement(Al,{dropdownMode:e.props.dropdownMode,locale:e.props.locale,dateFormat:e.props.dateFormat,onChange:e.changeMonthYear,minDate:e.props.minDate,maxDate:e.props.maxDate,date:e.state.date,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown})}),u(e,"handleTodayButtonClick",function(o){e.props.onSelect(yr(),o),e.props.setPreSelection&&e.props.setPreSelection(yr())}),u(e,"renderTodayButton",function(){if(!(!e.props.todayButton||e.props.showTimeSelectOnly))return w.createElement("div",{className:"react-datepicker__today-button",onClick:function(s){return e.handleTodayButtonClick(s)}},e.props.todayButton)}),u(e,"renderDefaultHeader",function(o){var s=o.monthDate,a=o.i;return w.createElement("div",{className:"react-datepicker__header ".concat(e.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},e.renderCurrentMonth(s),w.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode),onFocus:e.handleDropdownFocus},e.renderMonthDropdown(a!==0),e.renderMonthYearDropdown(a!==0),e.renderYearDropdown(a!==0)),w.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),u(e,"renderCustomHeader",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=o.monthDate,a=o.i;if(e.props.showTimeSelect&&!e.state.monthContainer||e.props.showTimeSelectOnly)return null;var i=Dr(e.state.date,e.props),c=kr(e.state.date,e.props),l=Mr(e.state.date,e.props),d=Cr(e.state.date,e.props),f=!e.props.showMonthYearPicker&&!e.props.showQuarterYearPicker&&!e.props.showYearPicker;return w.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:e.props.onDropdownFocus},e.props.renderCustomHeader(be(be({},e.state),{},{customHeaderCount:a,monthDate:s,changeMonth:e.changeMonth,changeYear:e.changeYear,decreaseMonth:e.decreaseMonth,increaseMonth:e.increaseMonth,decreaseYear:e.decreaseYear,increaseYear:e.increaseYear,prevMonthButtonDisabled:i,nextMonthButtonDisabled:c,prevYearButtonDisabled:l,nextYearButtonDisabled:d})),f&&w.createElement("div",{className:"react-datepicker__day-names"},e.header(s)))}),u(e,"renderYearHeader",function(o){var s=o.monthDate,a=e.props,i=a.showYearPicker,c=a.yearItemNumber,l=nt(s,c),d=l.startPeriod,f=l.endPeriod;return w.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},i?"".concat(d," - ").concat(f):E(s))}),u(e,"renderHeader",function(o){switch(!0){case e.props.renderCustomHeader!==void 0:return e.renderCustomHeader(o);case(e.props.showMonthYearPicker||e.props.showQuarterYearPicker||e.props.showYearPicker):return e.renderYearHeader(o);default:return e.renderDefaultHeader(o)}}),u(e,"renderMonths",function(){var o;if(!(e.props.showTimeSelectOnly||e.props.showYearPicker)){for(var s=[],a=e.props.showPreviousMonths?e.props.monthsShown-1:0,i=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Pe(e.state.date,a):tt(e.state.date,a),c=(o=e.props.monthSelectedIn)!==null&&o!==void 0?o:a,l=0;l<e.props.monthsShown;++l){var d=l-c+a,f=e.props.showMonthYearPicker||e.props.showQuarterYearPicker?Pe(i,d):de(i,d),m="month-".concat(l),h=l<e.props.monthsShown-1,g=l>0;s.push(w.createElement("div",{key:m,ref:function(b){e.monthContainer=b},className:"react-datepicker__month-container"},e.renderHeader({monthDate:f,i:l}),w.createElement(zl,{chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,ariaLabelPrefix:e.props.monthAriaLabelPrefix,onChange:e.changeMonthYear,day:f,dayClassName:e.props.dayClassName,calendarStartDay:e.props.calendarStartDay,monthClassName:e.props.monthClassName,onDayClick:e.handleDayClick,handleOnKeyDown:e.props.handleOnDayKeyDown,handleOnMonthKeyDown:e.props.handleOnKeyDown,usePointerEvent:e.props.usePointerEvent,onDayMouseEnter:e.handleDayMouseEnter,onMouseLeave:e.handleMonthMouseLeave,onWeekSelect:e.props.onWeekSelect,orderInDisplay:l,formatWeekNumber:e.props.formatWeekNumber,locale:e.props.locale,minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,highlightDates:e.props.highlightDates,holidays:e.props.holidays,selectingDate:e.state.selectingDate,includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,fixedHeight:e.props.fixedHeight,filterDate:e.props.filterDate,preSelection:e.props.preSelection,setPreSelection:e.props.setPreSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,showWeekNumbers:e.props.showWeekNumbers,startDate:e.props.startDate,endDate:e.props.endDate,peekNextMonth:e.props.peekNextMonth,setOpen:e.props.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,isInputFocused:e.props.isInputFocused,containerRef:e.containerRef,monthShowsDuplicateDaysEnd:h,monthShowsDuplicateDaysStart:g})))}return s}}),u(e,"renderYears",function(){if(!e.props.showTimeSelectOnly&&e.props.showYearPicker)return w.createElement("div",{className:"react-datepicker__year--container"},e.renderHeader({monthDate:e.state.date}),w.createElement(Vl,ht({onDayClick:e.handleDayClick,selectingDate:e.state.selectingDate,clearSelectingDate:e.clearSelectingDate,date:e.state.date},e.props,{onYearMouseEnter:e.handleYearMouseEnter,onYearMouseLeave:e.handleYearMouseLeave})))}),u(e,"renderTimeSection",function(){if(e.props.showTimeSelect&&(e.state.monthContainer||e.props.showTimeSelectOnly))return w.createElement(Do,{selected:e.props.selected,openToDate:e.props.openToDate,onChange:e.props.onTimeChange,timeClassName:e.props.timeClassName,format:e.props.timeFormat,includeTimes:e.props.includeTimes,intervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,todayButton:e.props.todayButton,showMonthDropdown:e.props.showMonthDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,monthRef:e.state.monthContainer,injectTimes:e.props.injectTimes,locale:e.props.locale,handleOnKeyDown:e.props.handleOnKeyDown,showTimeSelectOnly:e.props.showTimeSelectOnly})}),u(e,"renderInputTimeSection",function(){var o=new Date(e.props.selected),s=Se(o)&&!!e.props.selected,a=s?"".concat(Sr(o.getHours()),":").concat(Sr(o.getMinutes())):"";if(e.props.showTimeInput)return w.createElement(ql,{date:o,timeString:a,timeInputLabel:e.props.timeInputLabel,onChange:e.props.onTimeChange,customTimeInput:e.props.customTimeInput})}),u(e,"renderAriaLiveRegion",function(){var o=nt(e.state.date,e.props.yearItemNumber),s=o.startPeriod,a=o.endPeriod,i;return e.props.showYearPicker?i="".concat(s," - ").concat(a):e.props.showMonthYearPicker||e.props.showQuarterYearPicker?i=E(e.state.date):i="".concat(Fn(te(e.state.date),e.props.locale)," ").concat(E(e.state.date)),w.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},e.state.isRenderAriaLiveMessage&&i)}),u(e,"renderChildren",function(){if(e.props.children)return w.createElement("div",{className:"react-datepicker__children-container"},e.props.children)}),e.containerRef=w.createRef(),e.state={date:e.getDateInView(),selectingDate:null,monthContainer:null,isRenderAriaLiveMessage:!1},e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=function(){e.setState({monthContainer:e.monthContainer})}())}},{key:"componentDidUpdate",value:function(e){var o=this;if(this.props.preSelection&&(!R(this.props.preSelection,e.preSelection)||this.props.monthSelectedIn!==e.monthSelectedIn)){var s=!ae(this.state.date,this.props.preSelection);this.setState({date:this.props.preSelection},function(){return s&&o.handleCustomMonthChange(o.state.date)})}else this.props.openToDate&&!R(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate})}},{key:"render",value:function(){var e=this.props.container||Ul;return w.createElement("div",{style:{display:"contents"},ref:this.containerRef},w.createElement(e,{className:Z("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showTime:this.props.showTimeSelect||this.props.showTimeInput,showTimeSelectOnly:this.props.showTimeSelectOnly},this.renderAriaLiveRegion(),this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.renderChildren()))}}],[{key:"defaultProps",get:function(){return{onDropdownFocus:function(){},monthsShown:1,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:yt}}}])}(w.Component),Jl=function(r){var t=r.icon,e=r.className,o=e===void 0?"":e,s=r.onClick,a="react-datepicker__calendar-icon";return w.isValidElement(t)?w.cloneElement(t,{className:"".concat(t.props.className||""," ").concat(a," ").concat(o),onClick:function(c){typeof t.props.onClick=="function"&&t.props.onClick(c),typeof s=="function"&&s(c)}}):typeof t=="string"?w.createElement("i",{className:"".concat(a," ").concat(t," ").concat(o),"aria-hidden":"true",onClick:s}):w.createElement("svg",{className:"".concat(a," ").concat(o),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",onClick:s},w.createElement("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"}))},eu=Jl,ko=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),e.el=document.createElement("div"),e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){this.portalRoot=(this.props.portalHost||document).getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),(this.props.portalHost||document.body).appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el)}},{key:"render",value:function(){return Yo.createPortal(this.props.children,this.el)}}])}(w.Component),tu="[tabindex], a, button, input, select, textarea",nu=function(r){return!r.disabled&&r.tabIndex!==-1},Mo=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"getTabChildren",function(){return Array.prototype.slice.call(e.tabLoopRef.current.querySelectorAll(tu),1,-1).filter(nu)}),u(e,"handleFocusStart",function(){var o=e.getTabChildren();o&&o.length>1&&o[o.length-1].focus()}),u(e,"handleFocusEnd",function(){var o=e.getTabChildren();o&&o.length>1&&o[0].focus()}),e.tabLoopRef=w.createRef(),e}return G(r,n),X(r,[{key:"render",value:function(){return this.props.enableTabLoop?w.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},w.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,w.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return{enableTabLoop:!0}}}])}(w.Component);function ru(n){var r=function(e){var o=be(be({},e),{},{popperModifiers:e.popperModifiers||[],popperProps:e.popperProps||{},hidePopper:typeof e.hidePopper=="boolean"?e.hidePopper:!0}),s=w.useRef(),a=rl(be({open:!o.hidePopper,whileElementsMounted:xa,placement:o.popperPlacement,middleware:[ba({padding:15}),ta(10),Da({element:s})].concat(Re(o.popperModifiers))},o.popperProps));return w.createElement(n,ht({},o,{popperProps:be(be({},a),{},{arrowRef:s})}))};return r}var ou=function(n){function r(){return U(this,r),q(this,r,arguments)}return G(r,n),X(r,[{key:"render",value:function(){var e=this.props,o=e.className,s=e.wrapperClassName,a=e.hidePopper,i=e.popperComponent,c=e.targetComponent,l=e.enableTabLoop,d=e.popperOnKeyDown,f=e.portalId,m=e.portalHost,h=e.popperProps,g=e.showArrow,y;if(!a){var b=Z("react-datepicker-popper",o);y=w.createElement(Mo,{enableTabLoop:l},w.createElement("div",{ref:h.refs.setFloating,style:h.floatingStyles,className:b,"data-placement":h.placement,onKeyDown:d},i,g&&w.createElement(Gc,{ref:h.arrowRef,context:h.context,fill:"currentColor",strokeWidth:1,height:8,width:16,style:{transform:"translateY(-1px)"},className:"react-datepicker__triangle"})))}this.props.popperContainer&&(y=w.createElement(this.props.popperContainer,{},y)),f&&!a&&(y=w.createElement(ko,{portalId:f,portalHost:m},y));var v=Z("react-datepicker-wrapper",s);return w.createElement(w.Fragment,null,w.createElement("div",{ref:h.refs.setReference,className:v},c),y)}}],[{key:"defaultProps",get:function(){return{hidePopper:!0}}}])}(w.Component),au=ru(ou),Er="react-datepicker-ignore-onclickoutside",su=Ut(Zl);function iu(n,r){return n&&r?te(n)!==te(r)||E(n)!==E(r):n!==r}var sn="Date input not valid.",Co=function(n){function r(t){var e;return U(this,r),e=q(this,r,[t]),u(e,"getPreSelection",function(){return e.props.openToDate?e.props.openToDate:e.props.selectsEnd&&e.props.startDate?e.props.startDate:e.props.selectsStart&&e.props.endDate?e.props.endDate:F()}),u(e,"modifyHolidays",function(){var o;return(o=e.props.holidays)===null||o===void 0?void 0:o.reduce(function(s,a){var i=new Date(a.date);return dt(i)?[].concat(Re(s),[be(be({},a),{},{date:i})]):s},[])}),u(e,"calcInitialState",function(){var o,s=e.getPreSelection(),a=xo(e.props),i=bo(e.props),c=a&&He(s,ge(a))?a:i&&Ye(s,mn(i))?i:s;return{open:e.props.startOpen||!1,preventFocus:!1,preSelection:(o=e.props.selectsRange?e.props.startDate:e.props.selected)!==null&&o!==void 0?o:c,highlightDates:_r(e.props.highlightDates),focused:!1,shouldFocusDayInline:!1,isRenderAriaLiveMessage:!1}}),u(e,"clearPreventFocusTimeout",function(){e.preventFocusTimeout&&clearTimeout(e.preventFocusTimeout)}),u(e,"setFocus",function(){e.input&&e.input.focus&&e.input.focus({preventScroll:!0})}),u(e,"setBlur",function(){e.input&&e.input.blur&&e.input.blur(),e.cancelFocusInput()}),u(e,"setOpen",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;e.setState({open:o,preSelection:o&&e.state.open?e.state.preSelection:e.calcInitialState().preSelection,lastPreSelectChange:cn},function(){o||e.setState(function(a){return{focused:s?a.focused:!1}},function(){!s&&e.setBlur(),e.setState({inputValue:null})})})}),u(e,"inputOk",function(){return Ae(e.state.preSelection)}),u(e,"isCalendarOpen",function(){return e.props.open===void 0?e.state.open&&!e.props.disabled&&!e.props.readOnly:e.props.open}),u(e,"handleFocus",function(o){e.state.preventFocus||(e.props.onFocus(o),!e.props.preventOpenOnFocus&&!e.props.readOnly&&e.setOpen(!0)),e.setState({focused:!0})}),u(e,"sendFocusBackToInput",function(){e.preventFocusTimeout&&e.clearPreventFocusTimeout(),e.setState({preventFocus:!0},function(){e.preventFocusTimeout=setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})})}),u(e,"cancelFocusInput",function(){clearTimeout(e.inputFocusTimeout),e.inputFocusTimeout=null}),u(e,"deferFocusInput",function(){e.cancelFocusInput(),e.inputFocusTimeout=setTimeout(function(){return e.setFocus()},1)}),u(e,"handleDropdownFocus",function(){e.cancelFocusInput()}),u(e,"handleBlur",function(o){(!e.state.open||e.props.withPortal||e.props.showTimeInput)&&e.props.onBlur(o),e.setState({focused:!1})}),u(e,"handleCalendarClickOutside",function(o){e.props.inline||e.setOpen(!1),e.props.onClickOutside(o),e.props.withPortal&&o.preventDefault()}),u(e,"handleChange",function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];var i=s[0];if(!(e.props.onChangeRaw&&(e.props.onChangeRaw.apply(e,s),typeof i.isDefaultPrevented!="function"||i.isDefaultPrevented()))){e.setState({inputValue:i.target.value,lastPreSelectChange:cu});var c=fl(i.target.value,e.props.dateFormat,e.props.locale,e.props.strictParsing,e.props.minDate);e.props.showTimeSelectOnly&&e.props.selected&&c&&!R(c,e.props.selected)&&(c=ol(e.props.selected,{hours:ye(c),minutes:we(c),seconds:cr(c)})),(c||!i.target.value)&&e.setSelected(c,i,!0)}}),u(e,"handleSelect",function(o,s,a){if(e.props.shouldCloseOnSelect&&!e.props.showTimeSelect&&e.sendFocusBackToInput(),e.props.onChangeRaw&&e.props.onChangeRaw(s),e.setSelected(o,s,!1,a),e.props.showDateSelect&&e.setState({isRenderAriaLiveMessage:!0}),!e.props.shouldCloseOnSelect||e.props.showTimeSelect)e.setPreSelection(o);else if(!e.props.inline){e.props.selectsRange||e.setOpen(!1);var i=e.props,c=i.startDate,l=i.endDate;c&&!l&&!Tr(o,c)&&e.setOpen(!1)}}),u(e,"setSelected",function(o,s,a,i){var c=o;if(e.props.showYearPicker){if(c!==null&&yo(E(c),e.props))return}else if(e.props.showMonthYearPicker){if(c!==null&&Nt(c,e.props))return}else if(c!==null&&Xt(c,e.props))return;var l=e.props,d=l.onChange,f=l.selectsRange,m=l.startDate,h=l.endDate,g=l.selectsMultiple,y=l.selectedDates,b=l.minTime;if(!Le(e.props.selected,c)||e.props.allowSameDay||f||g)if(c!==null&&(e.props.selected&&(!a||!e.props.showTimeSelect&&!e.props.showTimeSelectOnly&&!e.props.showTimeInput)&&(c=rn(c,{hour:ye(e.props.selected),minute:we(e.props.selected),second:cr(e.props.selected)})),!a&&(e.props.showTimeSelect||e.props.showTimeSelectOnly)&&b&&(c=rn(c,{hour:b.getHours(),minute:b.getMinutes(),second:b.getSeconds()})),e.props.inline||e.setState({preSelection:c}),e.props.focusSelectedMonth||e.setState({monthSelectedIn:i})),f){var v=!m&&!h,x=m&&!h,k=m&&h;v?d([c,null],s):x&&(c===null?d([null,null],s):Tr(c,m)?d([c,null],s):d([m,c],s)),k&&d([c,null],s)}else if(g)if(!(y!=null&&y.length))d([c],s);else{var N=y.some(function(O){return R(O,c)});if(N){var _=y.filter(function(O){return!R(O,c)});d(_,s)}else d([].concat(Re(y),[c]),s)}else d(c,s);a||(e.props.onSelect(c,s),e.setState({inputValue:null}))}),u(e,"setPreSelection",function(o){var s=typeof e.props.minDate<"u",a=typeof e.props.maxDate<"u",i=!0;if(o){var c=ge(o);if(s&&a)i=it(o,e.props.minDate,e.props.maxDate);else if(s){var l=ge(e.props.minDate);i=Ye(o,l)||Le(c,l)}else if(a){var d=mn(e.props.maxDate);i=He(o,d)||Le(c,d)}}i&&e.setState({preSelection:o})}),u(e,"toggleCalendar",function(){e.setOpen(!e.state.open)}),u(e,"handleTimeChange",function(o){var s=e.props.selected?e.props.selected:e.getPreSelection(),a=e.props.selected?o:rn(s,{hour:ye(o),minute:we(o)});e.setState({preSelection:a}),e.props.onChange(a),e.props.shouldCloseOnSelect&&(e.sendFocusBackToInput(),e.setOpen(!1)),e.props.showTimeInput&&e.setOpen(!0),(e.props.showTimeSelectOnly||e.props.showTimeSelect)&&e.setState({isRenderAriaLiveMessage:!0}),e.setState({inputValue:null})}),u(e,"onInputClick",function(){!e.props.disabled&&!e.props.readOnly&&e.setOpen(!0),e.props.onInputClick()}),u(e,"onInputKeyDown",function(o){e.props.onKeyDown(o);var s=o.key;if(!e.state.open&&!e.props.inline&&!e.props.preventOpenOnFocus){(s==="ArrowDown"||s==="ArrowUp"||s==="Enter")&&e.onInputClick();return}if(e.state.open){if(s==="ArrowDown"||s==="ArrowUp"){o.preventDefault();var a=e.props.showWeekPicker&&e.props.showWeekNumbers?'.react-datepicker__week-number[tabindex="0"]':'.react-datepicker__day[tabindex="0"]',i=e.calendar.componentNode&&e.calendar.componentNode.querySelector(a);i&&i.focus({preventScroll:!0});return}var c=F(e.state.preSelection);s==="Enter"?(o.preventDefault(),e.inputOk()&&e.state.lastPreSelectChange===cn?(e.handleSelect(c,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(c)):e.setOpen(!1)):s==="Escape"?(o.preventDefault(),e.sendFocusBackToInput(),e.setOpen(!1)):s==="Tab"&&e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:sn})}}),u(e,"onPortalKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.setState({preventFocus:!0},function(){e.setOpen(!1),setTimeout(function(){e.setFocus(),e.setState({preventFocus:!1})})}))}),u(e,"onDayKeyDown",function(o){e.props.onKeyDown(o);var s=o.key,a=o.shiftKey,i=F(e.state.preSelection);if(s==="Enter")o.preventDefault(),e.handleSelect(i,o),!e.props.shouldCloseOnSelect&&e.setPreSelection(i);else if(s==="Escape")o.preventDefault(),e.setOpen(!1),e.inputOk()||e.props.onInputError({code:1,msg:sn});else if(!e.props.disabledKeyboardNavigation){var c;switch(s){case"ArrowLeft":e.props.showWeekPicker?c=ir(i,1):c=ui(i,1);break;case"ArrowRight":e.props.showWeekPicker?c=$t(i,1):c=Ie(i,1);break;case"ArrowUp":c=ir(i,1);break;case"ArrowDown":c=$t(i,1);break;case"PageUp":c=a?wt(i,1):tt(i,1);break;case"PageDown":c=a?Pe(i,1):de(i,1);break;case"Home":c=Ne(i,e.props.locale,e.props.calendarStartDay);break;case"End":c=xl(i);break;default:c=null;break}if(!c){e.props.onInputError&&e.props.onInputError({code:1,msg:sn});return}if(o.preventDefault(),e.setState({lastPreSelectChange:cn}),e.props.adjustDateOnChange&&e.setSelected(c),e.setPreSelection(c),e.props.inline){var l=te(i),d=te(c),f=E(i),m=E(c);l!==d||f!==m?e.setState({shouldFocusDayInline:!0}):e.setState({shouldFocusDayInline:!1})}}}),u(e,"onPopperKeyDown",function(o){var s=o.key;s==="Escape"&&(o.preventDefault(),e.sendFocusBackToInput())}),u(e,"onClearClick",function(o){o&&o.preventDefault&&o.preventDefault(),e.sendFocusBackToInput(),e.props.selectsRange?e.props.onChange([null,null],o):e.props.onChange(null,o),e.setState({inputValue:null})}),u(e,"clear",function(){e.onClearClick()}),u(e,"onScroll",function(o){typeof e.props.closeOnScroll=="boolean"&&e.props.closeOnScroll?(o.target===document||o.target===document.documentElement||o.target===document.body)&&e.setOpen(!1):typeof e.props.closeOnScroll=="function"&&e.props.closeOnScroll(o)&&e.setOpen(!1)}),u(e,"renderCalendar",function(){return!e.props.inline&&!e.isCalendarOpen()?null:w.createElement(su,{ref:function(s){e.calendar=s},locale:e.props.locale,calendarStartDay:e.props.calendarStartDay,chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:e.props.weekAriaLabelPrefix,monthAriaLabelPrefix:e.props.monthAriaLabelPrefix,adjustDateOnChange:e.props.adjustDateOnChange,setOpen:e.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,dateFormat:e.props.dateFormatCalendar,useWeekdaysShort:e.props.useWeekdaysShort,formatWeekDay:e.props.formatWeekDay,dropdownMode:e.props.dropdownMode,selected:e.props.selected,preSelection:e.state.preSelection,onSelect:e.handleSelect,onWeekSelect:e.props.onWeekSelect,openToDate:e.props.openToDate,minDate:e.props.minDate,maxDate:e.props.maxDate,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsMultiple:e.props.selectsMultiple,selectedDates:e.props.selectedDates,startDate:e.props.startDate,endDate:e.props.endDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,filterDate:e.props.filterDate,onClickOutside:e.handleCalendarClickOutside,formatWeekNumber:e.props.formatWeekNumber,highlightDates:e.state.highlightDates,holidays:Sl(e.modifyHolidays()),includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,includeTimes:e.props.includeTimes,injectTimes:e.props.injectTimes,inline:e.props.inline,shouldFocusDayInline:e.state.shouldFocusDayInline,peekNextMonth:e.props.peekNextMonth,showMonthDropdown:e.props.showMonthDropdown,showPreviousMonths:e.props.showPreviousMonths,useShortMonthInDropdown:e.props.useShortMonthInDropdown,showMonthYearDropdown:e.props.showMonthYearDropdown,showWeekNumbers:e.props.showWeekNumbers,showYearDropdown:e.props.showYearDropdown,withPortal:e.props.withPortal,forceShowMonthNavigation:e.props.forceShowMonthNavigation,showDisabledMonthNavigation:e.props.showDisabledMonthNavigation,scrollableYearDropdown:e.props.scrollableYearDropdown,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown,todayButton:e.props.todayButton,weekLabel:e.props.weekLabel,outsideClickIgnoreClass:Er,fixedHeight:e.props.fixedHeight,monthsShown:e.props.monthsShown,monthSelectedIn:e.state.monthSelectedIn,onDropdownFocus:e.handleDropdownFocus,onMonthChange:e.props.onMonthChange,onYearChange:e.props.onYearChange,dayClassName:e.props.dayClassName,weekDayClassName:e.props.weekDayClassName,monthClassName:e.props.monthClassName,timeClassName:e.props.timeClassName,showDateSelect:e.props.showDateSelect,showTimeSelect:e.props.showTimeSelect,showTimeSelectOnly:e.props.showTimeSelectOnly,onTimeChange:e.handleTimeChange,timeFormat:e.props.timeFormat,timeIntervals:e.props.timeIntervals,minTime:e.props.minTime,maxTime:e.props.maxTime,excludeTimes:e.props.excludeTimes,filterTime:e.props.filterTime,timeCaption:e.props.timeCaption,className:e.props.calendarClassName,container:e.props.calendarContainer,yearItemNumber:e.props.yearItemNumber,yearDropdownItemNumber:e.props.yearDropdownItemNumber,previousMonthAriaLabel:e.props.previousMonthAriaLabel,previousMonthButtonLabel:e.props.previousMonthButtonLabel,nextMonthAriaLabel:e.props.nextMonthAriaLabel,nextMonthButtonLabel:e.props.nextMonthButtonLabel,previousYearAriaLabel:e.props.previousYearAriaLabel,previousYearButtonLabel:e.props.previousYearButtonLabel,nextYearAriaLabel:e.props.nextYearAriaLabel,nextYearButtonLabel:e.props.nextYearButtonLabel,timeInputLabel:e.props.timeInputLabel,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,renderCustomHeader:e.props.renderCustomHeader,popperProps:e.props.popperProps,renderDayContents:e.props.renderDayContents,renderMonthContent:e.props.renderMonthContent,renderQuarterContent:e.props.renderQuarterContent,renderYearContent:e.props.renderYearContent,onDayMouseEnter:e.props.onDayMouseEnter,onMonthMouseLeave:e.props.onMonthMouseLeave,onYearMouseEnter:e.props.onYearMouseEnter,onYearMouseLeave:e.props.onYearMouseLeave,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,showTimeInput:e.props.showTimeInput,showMonthYearPicker:e.props.showMonthYearPicker,showFullMonthYearPicker:e.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:e.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:e.props.showFourColumnMonthYearPicker,showYearPicker:e.props.showYearPicker,showQuarterYearPicker:e.props.showQuarterYearPicker,showWeekPicker:e.props.showWeekPicker,excludeScrollbar:e.props.excludeScrollbar,handleOnKeyDown:e.props.onKeyDown,handleOnDayKeyDown:e.onDayKeyDown,isInputFocused:e.state.focused,customTimeInput:e.props.customTimeInput,setPreSelection:e.setPreSelection,usePointerEvent:e.props.usePointerEvent,yearClassName:e.props.yearClassName},e.props.children)}),u(e,"renderAriaLiveRegion",function(){var o=e.props,s=o.dateFormat,a=o.locale,i=e.props.showTimeInput||e.props.showTimeSelect,c=i?"PPPPp":"PPPP",l;return e.props.selectsRange?l="Selected start date: ".concat(ce(e.props.startDate,{dateFormat:c,locale:a}),". ").concat(e.props.endDate?"End date: "+ce(e.props.endDate,{dateFormat:c,locale:a}):""):e.props.showTimeSelectOnly?l="Selected time: ".concat(ce(e.props.selected,{dateFormat:s,locale:a})):e.props.showYearPicker?l="Selected year: ".concat(ce(e.props.selected,{dateFormat:"yyyy",locale:a})):e.props.showMonthYearPicker?l="Selected month: ".concat(ce(e.props.selected,{dateFormat:"MMMM yyyy",locale:a})):e.props.showQuarterYearPicker?l="Selected quarter: ".concat(ce(e.props.selected,{dateFormat:"yyyy, QQQ",locale:a})):l="Selected date: ".concat(ce(e.props.selected,{dateFormat:c,locale:a})),w.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},l)}),u(e,"renderDateInput",function(){var o,s=Z(e.props.className,u({},Er,e.state.open)),a=e.props.customInput||w.createElement("input",{type:"text"}),i=e.props.customInputRef||"ref",c=typeof e.props.value=="string"?e.props.value:typeof e.state.inputValue=="string"?e.state.inputValue:e.props.selectsRange?hl(e.props.startDate,e.props.endDate,e.props):e.props.selectsMultiple?ml(e.props.selectedDates,e.props):ce(e.props.selected,e.props);return w.cloneElement(a,(o={},u(u(u(u(u(u(u(u(u(u(o,i,function(l){e.input=l}),"value",c),"onBlur",e.handleBlur),"onChange",e.handleChange),"onClick",e.onInputClick),"onFocus",e.handleFocus),"onKeyDown",e.onInputKeyDown),"id",e.props.id),"name",e.props.name),"form",e.props.form),u(u(u(u(u(u(u(u(u(u(o,"autoFocus",e.props.autoFocus),"placeholder",e.props.placeholderText),"disabled",e.props.disabled),"autoComplete",e.props.autoComplete),"className",Z(a.props.className,s)),"title",e.props.title),"readOnly",e.props.readOnly),"required",e.props.required),"tabIndex",e.props.tabIndex),"aria-describedby",e.props.ariaDescribedBy),u(u(u(o,"aria-invalid",e.props.ariaInvalid),"aria-labelledby",e.props.ariaLabelledBy),"aria-required",e.props.ariaRequired)))}),u(e,"renderClearButton",function(){var o=e.props,s=o.isClearable,a=o.disabled,i=o.selected,c=o.startDate,l=o.endDate,d=o.clearButtonTitle,f=o.clearButtonClassName,m=f===void 0?"":f,h=o.ariaLabelClose,g=h===void 0?"Close":h,y=o.selectedDates;return s&&(i!=null||c!=null||l!=null||y!=null&&y.length)?w.createElement("button",{type:"button",className:Z("react-datepicker__close-icon",m,{"react-datepicker__close-icon--disabled":a}),disabled:a,"aria-label":g,onClick:e.onClearClick,title:d,tabIndex:-1}):null}),e.state=e.calcInitialState(),e.preventFocusTimeout=null,e}return G(r,n),X(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0)}},{key:"componentDidUpdate",value:function(e,o){e.inline&&iu(e.selected,this.props.selected)&&this.setPreSelection(this.props.selected),this.state.monthSelectedIn!==void 0&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:_r(this.props.highlightDates)}),!o.focused&&!Le(e.selected,this.props.selected)&&this.setState({inputValue:null}),o.open!==this.state.open&&(o.open===!1&&this.state.open===!0&&this.props.onCalendarOpen(),o.open===!0&&this.state.open===!1&&this.props.onCalendarClose())}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0)}},{key:"renderInputContainer",value:function(){var e=this.props,o=e.showIcon,s=e.icon,a=e.calendarIconClassname,i=e.toggleCalendarOnIconClick,c=this.state.open;return w.createElement("div",{className:"react-datepicker__input-container".concat(o?" react-datepicker__view-calendar-icon":"")},o&&w.createElement(eu,ht({icon:s,className:"".concat(a," ").concat(c&&"react-datepicker-ignore-onclickoutside")},i?{onClick:this.toggleCalendar}:null)),this.state.isRenderAriaLiveMessage&&this.renderAriaLiveRegion(),this.renderDateInput(),this.renderClearButton())}},{key:"render",value:function(){var e=this.renderCalendar();if(this.props.inline)return e;if(this.props.withPortal){var o=this.state.open?w.createElement(Mo,{enableTabLoop:this.props.enableTabLoop},w.createElement("div",{className:"react-datepicker__portal",tabIndex:-1,onKeyDown:this.onPortalKeyDown},e)):null;return this.state.open&&this.props.portalId&&(o=w.createElement(ko,{portalId:this.props.portalId,portalHost:this.props.portalHost},o)),w.createElement("div",null,this.renderInputContainer(),o)}return w.createElement(au,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,portalHost:this.props.portalHost,popperModifiers:this.props.popperModifiers,targetComponent:this.renderInputContainer(),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop,showArrow:this.props.showPopperArrow})}}],[{key:"defaultProps",get:function(){return{allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,selectsDisabledDaysInRange:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,showWeekPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthAriaLabel:"Previous Month",previousMonthButtonLabel:"Previous Month",nextMonthAriaLabel:"Next Month",nextMonthButtonLabel:"Next Month",previousYearAriaLabel:"Previous Year",previousYearButtonLabel:"Previous Year",nextYearAriaLabel:"Next Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:yt,focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:void 0,toggleCalendarOnIconClick:!1,usePointerEvent:!1}}}])}(w.Component),cu="input",cn="navigate";const lu=P.div`
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
`,_o=({isModalOpen:n,closeModal:r})=>{const[t,e]=D.useState(50),[o,s]=D.useState(new Date),a=Be(),i=()=>{e(m=>m+50)},c=()=>{t>=50&&e(m=>m-50)},l=m=>{s(m)},d=m=>{m.preventDefault();const h=o.getTimezoneOffset();a(Ro({date:o,ml:t,timeZoneOffset:h})),r()},f=m=>{const h=parseInt(m.target.value);e(h)};return p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(lu,{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Add water"}),p.jsx(Ht,{className:"close",onClick:r})]}),p.jsx("p",{children:"Choose of water:"}),p.jsxs("form",{onSubmit:d,children:[p.jsx("label",{children:"Amount of water:"}),p.jsxs("div",{className:"counter",children:[p.jsx("button",{className:"counterBtn",type:"button",onClick:c,children:p.jsx(En,{})}),p.jsxs("div",{className:"waterAmount",children:[t,"ml"]}),p.jsx("button",{className:"counterBtn",type:"button",onClick:i,children:p.jsx(Tn,{})})]}),p.jsxs("label",{children:["Recording time:",p.jsx(Co,{className:"input",selected:o,onChange:m=>l(m),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),p.jsxs("label",{children:["Enter the value of the water used:",p.jsx("input",{className:"input",type:"number",value:t,onChange:f})]}),p.jsxs("div",{className:"buttons",children:[p.jsxs("span",{className:"amount",children:[t,"ml"]}),p.jsx("button",{className:"confirm",type:"submit",onClick:d,children:"Save"})]})]})]})})})},uu=()=>{const[n,r]=D.useState(!1),t=ve(Ea),e=Be(),o=()=>{r(!0)},s=()=>{r(!1)},a=t>100?100:t;return D.useEffect(()=>{e(Io())},[e]),p.jsx(p.Fragment,{children:p.jsxs(os,{children:[p.jsx("h3",{children:"Today"}),p.jsxs("div",{className:"box",children:[p.jsx(as,{children:p.jsx("div",{className:"progress-bar-container",children:p.jsxs("div",{className:"progress-bar",children:[p.jsx("div",{className:"progress",style:{width:`${a}%`}}),p.jsx("div",{className:"line-0",children:"|"}),p.jsx("div",{className:"line-50",children:"|"}),p.jsx("div",{className:"line-100",children:"|"}),p.jsx("div",{className:"marker-0",children:"0%"}),p.jsx("div",{className:"marker-50",children:"50%"}),p.jsx("div",{className:"marker-100",children:"100%"}),p.jsx("div",{className:"indicator",style:{left:`${a}%`},children:p.jsx("p",{className:"progress-text",children:t>100?`${t}%`:`${a}%`})})]})})}),p.jsxs(ss,{onClick:o,children:[p.jsx(is,{width:"20px",height:"20px",children:p.jsx("use",{xlinkHref:`${De}#plus-circle`})})," ",p.jsx("p",{children:"Add Water"})]})]}),n&&p.jsx(_o,{isModalOpen:n,closeModal:s})]})})},du=P.div`
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
      justify-content: space-between;
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
`,pu=P.div`
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
      border: 1px solid ${({theme:n})=>n.color.paleBlue};
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
`,fu=n=>{const r=new Date(n),t=r.getTimezoneOffset(),e=Math.floor(Math.abs(t)/60),o=Math.abs(t)%60,s=e.toString().padStart(2,"0"),a=o.toString().padStart(2,"0"),i=`${t>=0?"-":"+"}${s}:${a}`;return`${new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds()).toISOString().split(".")[0]}${i}`},hu=(n,r)=>n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate(),mu=({isModalOpen:n,closeModal:r,currentIntakes:t})=>{const[e,o]=D.useState(t.ml),s=fu(t.time),[a,i]=D.useState(new Date(s)),c=Be(),l=()=>{o(g=>g+50)},d=()=>{e>=50&&o(g=>g-50)},f=g=>{i(g)},m=g=>{g.preventDefault();const y=new Date(a).getTimezoneOffset(),b={date:a,ml:e,timeZoneOffset:y};c($o({id:t.id,body:b})),r()},h=g=>{const y=parseInt(g.target.value);o(y)};return p.jsx(p.Fragment,{children:n&&p.jsx(Bt,{onClose:r,children:p.jsxs(pu,{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Edit the entered amount of water"}),p.jsx(Ht,{className:"close",onClick:r})]}),p.jsxs("div",{className:"currentDrink",children:[p.jsx("svg",{className:"waterGlass",width:"36",height:"36",stroke:"#9ebbff",fill:"none",children:p.jsx("use",{href:De+"#water-glass"})}),p.jsxs("span",{className:"amount",children:[t.ml,"ml"]}),p.jsx("span",{className:"currentTime",children:t.time.slice(11,16)})]}),p.jsx("p",{children:"Correct entered data:"}),p.jsxs("form",{onSubmit:m,children:[p.jsx("label",{children:"Amount of water:"}),p.jsxs("div",{className:"counter",children:[p.jsx("button",{className:"counterBtn",type:"button",onClick:d,children:p.jsx(En,{})}),p.jsxs("div",{className:"waterAmount",children:[e,"ml"]}),p.jsx("button",{className:"counterBtn",type:"button",onClick:l,children:p.jsx(Tn,{})})]}),p.jsxs("label",{children:["Recording time:",p.jsx(Co,{className:"input",selected:a,onChange:g=>f(g),showTimeSelect:!0,showTimeSelectOnly:!0,timeFormat:"HH:mm",dateFormat:"HH:mm"})]}),p.jsxs("label",{children:["Enter the value of the water used:",p.jsx("input",{className:"input",type:"number",value:e,onChange:h})]}),p.jsxs("div",{className:"buttons",children:[p.jsxs("span",{className:"waterAmountConfirm",children:[e,"ml"]}),p.jsx("button",{className:"confirm",type:"submit",onClick:m,children:"Save"})]})]})]})})})},gu=P.div`
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
`,wu=P.div`
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
`,yu=({onModalClose:n,isModalOpen:r,currentIntakes:t})=>{const e=Be(),o=()=>{const s=t.id;e(Lo(s)),n()};return p.jsx(p.Fragment,{children:r&&p.jsx(Bt,{onClose:n,children:p.jsxs(gu,{children:[p.jsxs("div",{children:[p.jsxs("div",{className:"topline",children:[p.jsx("h2",{children:"Delete water intakes"}),p.jsx(Ht,{className:"close",onClick:n})]}),p.jsx("p",{children:"Do you really want delete that water intakes?"})]}),p.jsxs(wu,{children:[p.jsx("button",{className:"confirm",onClick:o,children:"Delete"}),p.jsx("button",{className:"cancel",onClick:n,children:"Cancel"})]})]})})})},xu=()=>{const[n,r]=D.useState(!1),[t,e]=D.useState(!1),[o,s]=D.useState(!1),[a,i]=D.useState({}),c=ve(Xr),l=y=>{const b={id:y.target.closest("LI").id,ml:Number(y.target.closest("LI").childNodes[0].childNodes[1].textContent),time:y.target.closest("LI").attributes.time.value};i(b),r(!0)},d=()=>{r(!1)},f=()=>{e(!0)},m=()=>{e(!1)},h=y=>{const b={id:y.target.closest("LI").id,time:y.target.closest("LI").attributes.time.value};i(b),s(!0)},g=()=>{s(!1)};return p.jsxs(p.Fragment,{children:[p.jsxs(du,{children:[p.jsx("h3",{className:"title",children:"Today"}),p.jsx("ul",{className:"waterList",children:c.waterIntakes.length>0?c.waterIntakes.map(y=>p.jsxs("li",{className:"waterItem",id:y._id,time:y.consumedAt,children:[p.jsxs("div",{className:"volumeAdnDate",children:[p.jsx("svg",{className:"waterGlass",width:"26",height:"26",children:p.jsx("use",{href:De+"#water-glass"})}),p.jsxs("span",{className:"waterVolume",children:[y.ml," "]}),p.jsx("span",{className:"waterVolumeMl",children:"ml"}),p.jsx("span",{className:"waterTime",children:y.consumedAt.slice(11,16)})]}),p.jsxs("div",{className:"editDelete",children:[p.jsx("svg",{className:"edit",onClick:l,width:"16",height:"16",children:p.jsx("use",{href:De+"#pencil-square"})}),p.jsx("svg",{className:"delete",onClick:h,width:"16",height:"16",children:p.jsx("use",{href:De+"#trash"})})]})]},y._id)):p.jsx("p",{children:"Today you don't have records"})}),p.jsx("h2",{className:"addWater",onClick:f,children:"+ Add water"})]}),n&&p.jsx(mu,{isModalOpen:n,closeModal:d,currentIntakes:a}),t&&p.jsx(_o,{isModalOpen:t,closeModal:m}),o&&p.jsx(yu,{isModalOpen:o,onModalClose:g,currentIntakes:a})]})},bu="#4fa94d",vu={"aria-busy":!0,role:"progressbar"},Du=P.div`
  display: ${n=>n.$visible?"flex":"none"};
`,ku="http://www.w3.org/2000/svg",ue=242.776657104492,Mu=1.6,Cu=Dn`
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
  animation: ${Cu} ${Mu}s linear infinite;
`;const _u=Dn`
to {
   transform: rotate(360deg);
 }
`;P.svg`
  animation: ${_u} 0.75s steps(12, end) infinite;
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
`;const Su=({height:n=80,width:r=80,radius:t=9,color:e=bu,ariaLabel:o="three-dots-loading",wrapperStyle:s,wrapperClass:a,visible:i=!0})=>p.jsx(Du,{style:s,$visible:i,className:a,"data-testid":"three-dots-loading","aria-label":o,...vu,children:p.jsxs("svg",{width:r,height:n,viewBox:"0 0 120 30",xmlns:ku,fill:e,"data-testid":"three-dots-svg",children:[p.jsxs("circle",{cx:"15",cy:"15",r:Number(t)+6,children:[p.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),p.jsxs("circle",{cx:"60",cy:"15",r:t,attributeName:"fill-opacity",from:"1",to:"0.3",children:[p.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),p.jsxs("circle",{cx:"105",cy:"15",r:Number(t)+6,children:[p.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),Pu=Dn`
to {
   stroke-dashoffset: 136;
 }
`;P.polygon`
  stroke-dasharray: 17;
  animation: ${Pu} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;P.svg`
  transform-origin: 50% 65%;
`;const Nu=P.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 294px;
  bottom: 54px;
  transform: translate(50%, -50%);
  left: -15em;
  right: 1em;

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
    left: -12em;
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media ${({theme:n})=>n.device.desktop} {
    bottom: 56px;
    transform: none;
    left: -5em;
    bottom: 70px;
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
`,Tu=({calendarRef:n,refData:r,day:t,month:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=`${t}, ${e}`,c=r==null?void 0:r.current.getBoundingClientRect().left,l=n==null?void 0:n.current.getBoundingClientRect().left;let d=!0;const f=c-l;return f<250&&(d=!1),p.jsx(Nu,{$delta:d,$deltaNum:f,children:p.jsxs(p.Fragment,{children:[p.jsx("h3",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:i}),p.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["Daily norma:"," ",p.jsxs("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:[o?o/1e3:0," L"]})]}),p.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["Fulfillment of the daily norm:"," ",p.jsxs("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:[s,"%"]})]}),p.jsxs("p",{style:{fontSize:"16px",lineHeight:"calc(20 / 16)"},children:["How many servings of water:"," ",p.jsx("span",{style:{fontSize:"18px",lineHeight:"calc(24 / 18)",fontWeight:"600"},children:a})]})]})})},Yr=P.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.color.blue};
  cursor: pointer;
`,Ou=P.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  height: 380px;
`,Eu=P.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Yu=P.h2`
  color: ${({theme:n})=>n.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({theme:n})=>n.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,Ru=P.button`
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
`,Iu=P.button`
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
  position: relative;
  top: -8px;
  left: 20px;
  @media ${({theme:n})=>n.device.tablet} {
    left: 30px;
  }
  width: 168px;
`,Fu=P.span`
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  top: -2px;
  right: 45px;
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
`,Hu=({calendarRef:n,day:r,month:t,year:e,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a})=>{const i=new Date(e,t.monthNumber,r),c=new Date>=i,l=hu(new Date,i),[d,f]=D.useState(null),m=D.useRef(null),h=y=>{m.current&&!m.current.contains(y.target)&&f(null)};D.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]);const g=()=>{f(y=>y===r?null:r)};return p.jsxs(Au,{children:[p.jsx("div",{children:d===r&&p.jsx(Tu,{calendarRef:n,refData:m,waterDay:s,day:r,month:t.monthName,dailyWaterGoal:o,consumedWaterPercentage:s,consumedTimes:a},r)}),p.jsx($u,{ref:m,onClick:()=>g(),$isOutlineVisible:s<100&&c,$isToday:l,children:r}),p.jsx(ju,{children:`${s}%`})]},r)},Bu=()=>{const[n,r]=D.useState(new Date),t=Be(),e=D.useRef(null),o=ve(Xr),s=ve(Oa),a=ve(Ra);D.useEffect(()=>{const g=n.getTimezoneOffset(),y=new Date(n.getFullYear(),n.getMonth(),1);y.setMinutes(y.getMinutes()-g);const b=new Date(n.getFullYear(),n.getMonth()+1,0);b.setMinutes(b.getMinutes()-g);const v=y.toISOString().split("T")[0],x=b.toISOString().split("T")[0];t(Fo({startDate:v,endDate:x}))},[t,n,o]);const i=()=>{const g=new Date(n.getFullYear(),n.getMonth()+1,1);r(g)},c=()=>{const g=new Date(n.getFullYear(),n.getMonth()-1,1);r(g)},l=()=>{const g=new Date;return n.getMonth()===g.getMonth()&&n.getFullYear()===g.getFullYear()},d=()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),f=()=>{const g=new Date(n).getMonth(),y=new Date(n).toLocaleString("en-US",{month:"long"});return{monthNumber:g,monthName:y}},m=()=>new Date(n).getFullYear(),h=()=>{const g=d(),y=f(),b=m();return Array.from({length:g},(v,x)=>{if(!s)return;const k=x+1,N=s.find(({entryDate:T})=>k===new Date(T).getDate()),_=N?N.consumedWaterPercentage:0,O=N?N.dailyWaterGoal:0,C=N?N.consumedTimes:0;return p.jsx(Hu,{day:k,month:y,year:b,dailyWaterGoal:O,consumedWaterPercentage:_,consumedTimes:C},k)})};return p.jsxs(Ou,{className:"calendar",ref:e,children:[p.jsxs(Eu,{children:[p.jsx(Yu,{children:"Month"}),a&&p.jsx(Su,{height:"60",width:"60",radius:"9",color:"#5082F2",ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),p.jsxs(Lu,{children:[p.jsx(Iu,{"aria-label":"Previous month",onClick:c,children:p.jsx(Yr,{className:"uploadIcon",width:"16px",height:"16px",children:p.jsx("use",{xlinkHref:`${De}#arrow-left`})})}),p.jsx(Fu,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}, ${n.getFullYear()}`}),p.jsx(Ru,{"aria-label":"Next month",onClick:i,disabled:l(),hidden:l(),children:p.jsx(Yr,{className:"uploadIcon",width:"16px",height:"16px",children:p.jsx("use",{xlinkHref:`${De}#arrow-right`})})})]})]}),p.jsx(Wu,{children:h()})]})},Qu=P.div`
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
    z-index: -10;
  }

  @media ${({theme:n})=>n.device.desktop} {
    background-image: ${({theme:n})=>n.backgroundImage.bodyBubblesDesk};
    padding-top: 20px;
    padding-bottom: 40px;
    width: 1404px;
    height: 730px;
  }
`,Ku=P.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${({theme:n})=>n.device.desktop} {
    flex-direction: row;
  }
`,zu=P.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Vu=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({theme:n})=>n.device.tablet} {
    flex: 1;
  }
`,qu=P.div`
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
`,Zu=()=>p.jsx(Qu,{children:p.jsx(jo,{children:p.jsxs(Ku,{children:[p.jsxs(zu,{children:[p.jsx(rs,{}),p.jsx(uu,{})]}),p.jsx(Vu,{children:p.jsxs(qu,{children:[p.jsx(xu,{}),p.jsx(Bu,{})]})})]})})});export{Zu as default};
