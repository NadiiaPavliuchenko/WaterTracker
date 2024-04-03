import{r as A,l as Zs,P as Re,m as bi,n as Js,o as Ti,L as wi,p as me,q as L,s as O,t as j,v as q,R as Pi,w as ee,x as Qs,b as M,j as v,y as to,z as ne,A as eo}from"./index-b66e8a51.js";import{b as hn}from"./bg_img_bubbles-c11f2eb9.js";const Yt=A.createContext({}),Si=A.createContext({strict:!1}),Ee=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),no="framerAppearId",Ai="data-"+Ee(no),io={skipAnimations:!1,useManualTiming:!1},{schedule:Le,cancel:Qc}=Zs(queueMicrotask,!1);function so(t,e,n,i){const{visualElement:s}=A.useContext(Yt),r=A.useContext(Si),o=A.useContext(Re),a=A.useContext(bi).reducedMotion,l=A.useRef();i=i||r.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;A.useInsertionEffect(()=>{c&&c.update(n,o)});const u=A.useRef(!!(n[Ai]&&!window.HandoffComplete));return Js(()=>{c&&(Le.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),A.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function dt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function oo(t,e,n){return A.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):dt(n)&&(n.current=i))},[e])}function At(t){return typeof t=="string"||Array.isArray(t)}function Xt(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const je=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Be=["initial",...je];function qt(t){return Xt(t.animate)||Be.some(e=>At(t[e]))}function Vi(t){return!!(qt(t)||t.variants)}function ro(t,e){if(qt(t)){const{initial:n,animate:i}=t;return{initial:n===!1||At(n)?n:void 0,animate:At(i)?i:void 0}}return t.inherit!==!1?e:{}}function ao(t){const{initial:e,animate:n}=ro(t,A.useContext(Yt));return A.useMemo(()=>({initial:e,animate:n}),[dn(e),dn(n)])}function dn(t){return Array.isArray(t)?t.join(" "):t}const fn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vt={};for(const t in fn)Vt[t]={isEnabled:e=>fn[t].some(n=>!!e[n])};function lo(t){for(const e in t)Vt[e]={...Vt[e],...t[e]}}const Ci=A.createContext({}),co=Symbol.for("motionComponentSymbol");function uo({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&lo(t);function r(a,l){let c;const u={...A.useContext(bi),...a,layoutId:ho(a)},{isStatic:h}=u,d=ao(a),f=i(a,h);if(!h&&Ti){d.visualElement=so(s,f,u,e);const m=A.useContext(Ci),p=A.useContext(Si).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,p,t,m))}return A.createElement(Yt.Provider,{value:d},c&&d.visualElement?A.createElement(c,{visualElement:d.visualElement,...u}):null,n(s,a,oo(f,d.visualElement,l),f,h,d.visualElement))}const o=A.forwardRef(r);return o[co]=s,o}function ho({layoutId:t}){const e=A.useContext(wi).id;return e&&t!==void 0?e+"-"+t:t}function fo(t){function e(i,s={}){return uo(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const po=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fe(t){return typeof t!="string"||t.includes("-")?!1:!!(po.indexOf(t)>-1||/[A-Z]/u.test(t))}const zt={};function mo(t){Object.assign(zt,t)}const Mt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ct=new Set(Mt);function Di(t,{layout:e,layoutId:n}){return ct.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!zt[t]||t==="opacity")}const E=t=>!!(t&&t.getVelocity),go={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yo=Mt.length;function xo(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let r="";for(let o=0;o<yo;o++){const a=Mt[o];if(t[a]!==void 0){const l=go[a]||a;r+=`${l}(${t[a]}) `}}return e&&!t.z&&(r+="translateZ(0)"),r=r.trim(),s?r=s(t,i?"":r):n&&i&&(r="none"),r}const Mi=t=>e=>typeof e=="string"&&e.startsWith(t),ki=Mi("--"),vo=Mi("var(--"),Oe=t=>vo(t)?bo.test(t.split("/*")[0].trim()):!1,bo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,To=(t,e)=>e&&typeof t=="number"?e.transform(t):t,et=(t,e,n)=>n>e?e:n<t?t:n,xt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tt={...xt,transform:t=>et(0,1,t)},Bt={...xt,default:1},wt=t=>Math.round(t*1e5)/1e5,Ie=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,wo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Po=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function kt(t){return typeof t=="string"}const Rt=t=>({test:e=>kt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),J=Rt("deg"),$=Rt("%"),T=Rt("px"),So=Rt("vh"),Ao=Rt("vw"),pn={...$,parse:t=>$.parse(t)/100,transform:t=>$.transform(t*100)},mn={...xt,transform:Math.round},Ri={borderWidth:T,borderTopWidth:T,borderRightWidth:T,borderBottomWidth:T,borderLeftWidth:T,borderRadius:T,radius:T,borderTopLeftRadius:T,borderTopRightRadius:T,borderBottomRightRadius:T,borderBottomLeftRadius:T,width:T,maxWidth:T,height:T,maxHeight:T,size:T,top:T,right:T,bottom:T,left:T,padding:T,paddingTop:T,paddingRight:T,paddingBottom:T,paddingLeft:T,margin:T,marginTop:T,marginRight:T,marginBottom:T,marginLeft:T,rotate:J,rotateX:J,rotateY:J,rotateZ:J,scale:Bt,scaleX:Bt,scaleY:Bt,scaleZ:Bt,skew:J,skewX:J,skewY:J,distance:T,translateX:T,translateY:T,translateZ:T,x:T,y:T,z:T,perspective:T,transformPerspective:T,opacity:Tt,originX:pn,originY:pn,originZ:T,zIndex:mn,backgroundPositionX:T,backgroundPositionY:T,fillOpacity:Tt,strokeOpacity:Tt,numOctaves:mn};function Ne(t,e,n,i){const{style:s,vars:r,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const h in e){const d=e[h];if(ki(h)){r[h]=d;continue}const f=Ri[h],m=To(d,f);if(ct.has(h)){if(l=!0,o[h]=m,!u)continue;d!==(f.default||0)&&(u=!1)}else h.startsWith("origin")?(c=!0,a[h]=m):s[h]=m}if(e.transform||(l||i?s.transform=xo(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:h="50%",originY:d="50%",originZ:f=0}=a;s.transformOrigin=`${h} ${d} ${f}`}}const Ue=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ei(t,e,n){for(const i in e)!E(e[i])&&!Di(i,n)&&(t[i]=e[i])}function Vo({transformTemplate:t},e,n){return A.useMemo(()=>{const i=Ue();return Ne(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function Co(t,e,n){const i=t.style||{},s={};return Ei(s,i,t),Object.assign(s,Vo(t,e,n)),s}function Do(t,e,n){const i={},s=Co(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const Mo=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kt(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Mo.has(t)}let Li=t=>!Kt(t);function ko(t){t&&(Li=e=>e.startsWith("on")?!Kt(e):t(e))}try{ko(require("@emotion/is-prop-valid").default)}catch{}function Ro(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(Li(s)||n===!0&&Kt(s)||!e&&!Kt(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function gn(t,e,n){return typeof t=="string"?t:T.transform(e+n*t)}function Eo(t,e,n){const i=gn(e,t.x,t.width),s=gn(n,t.y,t.height);return`${i} ${s}`}const Lo={offset:"stroke-dashoffset",array:"stroke-dasharray"},jo={offset:"strokeDashoffset",array:"strokeDasharray"};function Bo(t,e,n=1,i=0,s=!0){t.pathLength=1;const r=s?Lo:jo;t[r.offset]=T.transform(-i);const o=T.transform(e),a=T.transform(n);t[r.array]=`${o} ${a}`}function ze(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h,d){if(Ne(t,c,u,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m,dimensions:p}=t;f.transform&&(p&&(m.transform=f.transform),delete f.transform),p&&(s!==void 0||r!==void 0||m.transform)&&(m.transformOrigin=Eo(p,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&Bo(f,o,a,l,!1)}const ji=()=>({...Ue(),attrs:{}}),Ke=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Fo(t,e,n,i){const s=A.useMemo(()=>{const r=ji();return ze(r,e,{enableHardwareAcceleration:!1},Ke(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};Ei(r,t.style,t),s.style={...r,...s.style}}return s}function Oo(t=!1){return(n,i,s,{latestValues:r},o)=>{const l=(Fe(n)?Fo:Do)(i,r,o,n),c=Ro(i,typeof n=="string",t),u=n!==A.Fragment?{...c,...l,ref:s}:{},{children:h}=i,d=A.useMemo(()=>E(h)?h.get():h,[h]);return A.createElement(n,{...u,children:d})}}function Bi(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const r in n)t.style.setProperty(r,n[r])}const Fi=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Oi(t,e,n,i){Bi(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(Fi.has(s)?s:Ee(s),e.attrs[s])}function We(t,e,n){var i;const{style:s}=t,r={};for(const o in s)(E(s[o])||e.style&&E(e.style[o])||Di(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function Ii(t,e,n){const i=We(t,e,n);for(const s in t)if(E(t[s])||E(e[s])){const r=Mt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=t[s]}return i}function $e(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}const ge=t=>Array.isArray(t),Io=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),No=t=>ge(t)?t[t.length-1]||0:t;function It(t){const e=E(t)?t.get():t;return Io(e)?e.toValue():e}function Uo({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,r){const o={latestValues:zo(i,s,r,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Ni=t=>(e,n)=>{const i=A.useContext(Yt),s=A.useContext(Re),r=()=>Uo(t,e,i,s);return n?r():me(r)};function zo(t,e,n,i){const s={},r=i(t,{});for(const d in r)s[d]=It(r[d]);let{initial:o,animate:a}=t;const l=qt(t),c=Vi(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;return h&&typeof h!="boolean"&&!Xt(h)&&(Array.isArray(h)?h:[h]).forEach(f=>{const m=$e(t,f);if(!m)return;const{transitionEnd:p,transition:y,...x}=m;for(const b in x){let g=x[b];if(Array.isArray(g)){const P=u?g.length-1:0;g=g[P]}g!==null&&(s[b]=g)}for(const b in p)s[b]=p[b]}),s}const Ko={useVisualState:Ni({scrapeMotionValuesFromProps:Ii,createRenderState:ji,onMount:(t,e,{renderState:n,latestValues:i})=>{L.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),L.render(()=>{ze(n,i,{enableHardwareAcceleration:!1},Ke(e.tagName),t.transformTemplate),Oi(e,n)})}})},Wo={useVisualState:Ni({scrapeMotionValuesFromProps:We,createRenderState:Ue})};function $o(t,{forwardMotionProps:e=!1},n,i){return{...Fe(t)?Ko:Wo,preloadedFeatures:n,useRender:Oo(e),createVisualElement:i,Component:t}}function H(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ui=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Zt(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Go=t=>e=>Ui(e)&&t(e,Zt(e));function Y(t,e,n,i){return H(t,e,Go(n),i)}const _o=(t,e)=>n=>e(t(n)),X=(...t)=>t.reduce(_o);function zi(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const yn=zi("dragHorizontal"),xn=zi("dragVertical");function Ki(t){let e=!1;if(t==="y")e=xn();else if(t==="x")e=yn();else{const n=yn(),i=xn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Wi(){const t=Ki(!0);return t?(t(),!1):!0}class it{constructor(e){this.isMounted=!1,this.node=e}update(){}}function vn(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(r,o)=>{if(r.pointerType==="touch"||Wi())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&a[i](r,o)};return Y(t.current,n,s,{passive:!t.getProps()[i]})}class Ho extends it{mount(){this.unmount=X(vn(this.node,!0),vn(this.node,!1))}unmount(){}}class Yo extends it{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=X(H(this.node.current,"focus",()=>this.onFocus()),H(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const $i=(t,e)=>e?t===e?!0:$i(t,e.parentElement):!1;function ie(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Zt(n))}class Xo extends it{constructor(){super(...arguments),this.removeStartListeners=O,this.removeEndListeners=O,this.removeAccessibleListeners=O,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=Y(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps();!h&&!$i(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)},{passive:!(i.onTap||i.onPointerUp)}),o=Y(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=X(r,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||ie("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&u(l,c)})};this.removeEndListeners(),this.removeEndListeners=H(this.node.current,"keyup",o),ie("down",(a,l)=>{this.startPress(a,l)})},n=H(this.node.current,"keydown",e),i=()=>{this.isPressing&&ie("cancel",(r,o)=>this.cancelPress(r,o))},s=H(this.node.current,"blur",i);this.removeAccessibleListeners=X(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&i(e,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Wi()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&i(e,n)}mount(){const e=this.node.getProps(),n=Y(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=H(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=X(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ye=new WeakMap,se=new WeakMap,qo=t=>{const e=ye.get(t.target);e&&e(t)},Zo=t=>{t.forEach(qo)};function Jo({root:t,...e}){const n=t||document;se.has(n)||se.set(n,{});const i=se.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Zo,{root:t,...e})),i[s]}function Qo(t,e,n){const i=Jo(e);return ye.set(t,n),i.observe(t),()=>{ye.delete(t),i.unobserve(t)}}const tr={some:0,all:1};class er extends it{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:tr[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return Qo(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(nr(e,n))&&this.startObserver()}unmount(){}}function nr({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const ir={inView:{Feature:er},tap:{Feature:Xo},focus:{Feature:Yo},hover:{Feature:Ho}};function Gi(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function sr(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function or(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Jt(t,e,n){const i=t.getProps();return $e(i,e,n!==void 0?n:i.custom,sr(t),or(t))}const G=t=>t*1e3,_=t=>t/1e3,rr={type:"spring",stiffness:500,damping:25,restSpeed:10},ar=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),lr={type:"keyframes",duration:.8},cr={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ur=(t,{keyframes:e})=>e.length>2?lr:ct.has(t)?t.startsWith("scale")?ar(e[1]):rr:cr;function hr({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Ge(t,e){return t[e]||t.default||t}const dr=t=>t!==null;function Qt(t,{repeat:e,repeatType:n="loop"},i){const s=t.filter(dr),r=e&&n!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}let Nt;function fr(){Nt=void 0}const tt={now:()=>(Nt===void 0&&tt.set(j.isProcessing||io.useManualTiming?j.timestamp:performance.now()),Nt),set:t=>{Nt=t,queueMicrotask(fr)}},_i=t=>/^0[^.\s]+$/u.test(t);function pr(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_i(t):!0}let mr=O,_e=O;const Hi=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),gr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yr(t){const e=gr.exec(t);if(!e)return[,];const[,n,i,s]=e;return[`--${n??i}`,s]}function Yi(t,e,n=1){const[i,s]=yr(t);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return Hi(o)?parseFloat(o):o}return Oe(s)?Yi(s,e,n+1):s}const xr=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bn=t=>t===xt||t===T,Tn=(t,e)=>parseFloat(t.split(", ")[e]),wn=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return Tn(s[1],e);{const r=i.match(/^matrix\((.+)\)$/u);return r?Tn(r[1],t):0}},vr=new Set(["x","y","z"]),br=Mt.filter(t=>!vr.has(t));function Pn(t){const e=[];return br.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const gt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:wn(4,13),y:wn(5,14)};gt.translateX=gt.x;gt.translateY=gt.y;const Xi=t=>e=>e.test(t),Tr={test:t=>t==="auto",parse:t=>t},qi=[xt,T,$,J,Ao,So,Tr],Sn=t=>qi.find(Xi(t)),lt=new Set;let xe=!1,ve=!1;function Zi(){if(ve){const t=Array.from(lt).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{Pn(i).length&&(n.set(i,Pn(i)),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render()}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ve=!1,xe=!1,lt.forEach(t=>t.complete()),lt.clear()}function Ji(){lt.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ve=!0)})}function wr(){Ji(),Zi()}class He{constructor(e,n,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(lt.add(this),xe||(xe=!0,L.read(Ji),L.resolveKeyframes(Zi))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&o===void 0&&s.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),lt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,lt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ye=(t,e)=>n=>!!(kt(n)&&Po.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Qi=(t,e,n)=>i=>{if(!kt(i))return i;const[s,r,o,a]=i.match(Ie);return{[t]:parseFloat(s),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Pr=t=>et(0,255,t),oe={...xt,transform:t=>Math.round(Pr(t))},at={test:Ye("rgb","red"),parse:Qi("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+oe.transform(t)+", "+oe.transform(e)+", "+oe.transform(n)+", "+wt(Tt.transform(i))+")"};function Sr(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const be={test:Ye("#"),parse:Sr,transform:at.transform},ft={test:Ye("hsl","hue"),parse:Qi("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+$.transform(wt(e))+", "+$.transform(wt(n))+", "+wt(Tt.transform(i))+")"},F={test:t=>at.test(t)||be.test(t)||ft.test(t),parse:t=>at.test(t)?at.parse(t):ft.test(t)?ft.parse(t):be.parse(t),transform:t=>kt(t)?t:t.hasOwnProperty("red")?at.transform(t):ft.transform(t)};function Ar(t){var e,n;return isNaN(t)&&kt(t)&&(((e=t.match(Ie))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(wo))===null||n===void 0?void 0:n.length)||0)>0}const ts="number",es="color",Vr="var",Cr="var(",An="${}",Dr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wt(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(Dr,l=>(F.test(l)?(i.color.push(r),s.push(es),n.push(F.parse(l))):l.startsWith(Cr)?(i.var.push(r),s.push(Vr),n.push(l)):(i.number.push(r),s.push(ts),n.push(parseFloat(l))),++r,An)).split(An);return{values:n,split:a,indexes:i,types:s}}function ns(t){return Wt(t).values}function is(t){const{split:e,types:n}=Wt(t),i=e.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],s[o]!==void 0){const a=n[o];a===ts?r+=wt(s[o]):a===es?r+=F.transform(s[o]):r+=s[o]}return r}}const Mr=t=>typeof t=="number"?0:t;function kr(t){const e=ns(t);return is(t)(e.map(Mr))}const nt={test:Ar,parse:ns,createTransformer:is,getAnimatableNone:kr},Rr=new Set(["brightness","contrast","saturate","opacity"]);function Er(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Ie)||[];if(!i)return t;const s=n.replace(i,"");let r=Rr.has(e)?1:0;return i!==n&&(r*=100),e+"("+r+s+")"}const Lr=/\b([a-z-]*)\(.*?\)/gu,Te={...nt,getAnimatableNone:t=>{const e=t.match(Lr);return e?e.map(Er).join(" "):t}},jr={...Ri,color:F,backgroundColor:F,outlineColor:F,fill:F,stroke:F,borderColor:F,borderTopColor:F,borderRightColor:F,borderBottomColor:F,borderLeftColor:F,filter:Te,WebkitFilter:Te},Xe=t=>jr[t];function ss(t,e){let n=Xe(t);return n!==Te&&(n=nt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}function Br(t,e,n){let i=0,s;for(;i<t.length&&!s;)typeof t[i]=="string"&&t[i]!=="none"&&t[i]!=="0"&&(s=t[i]),i++;if(s&&n)for(const r of e)t[r]=ss(n,s)}class os extends He{constructor(e,n,i,s){super(e,n,i,s,s==null?void 0:s.owner,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){const c=e[l];if(typeof c=="string"&&Oe(c)){const u=Yi(c,n.current);u!==void 0&&(e[l]=u)}}if(!xr.has(i)||e.length!==2)return this.resolveNoneKeyframes();const[s,r]=e,o=Sn(s),a=Sn(r);if(o!==a)if(bn(o)&&bn(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let s=0;s<e.length;s++)pr(e[s])&&i.push(s);i.length&&Br(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gt[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n.current)return;const r=n.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=gt[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function rs(t){let e;return()=>(e===void 0&&(e=t()),e)}const Vn=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(nt.test(t)||t==="0")&&!t.startsWith("url("));function Fr(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Or(t,e,n,i){const s=t[0];if(s===null)return!1;const r=t[t.length-1],o=Vn(s,e),a=Vn(r,e);return!o||!a?!1:Fr(t)||n==="spring"&&i}class as{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:n,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&wr(),this._resolved}onKeyframesResolved(e,n){this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Or(e,i,s,r))if(o)this.options.duration=0;else{l==null||l(Qt(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function ls(t,e){return e?t*(1e3/e):0}const Ir=5;function cs(t,e,n){const i=Math.max(e-Ir,0);return ls(n-t(i),e-i)}const re=.001,Nr=.01,Cn=10,Ur=.05,zr=1;function Kr({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,r;mr(t<=G(Cn));let o=1-e;o=et(Ur,zr,o),t=et(Nr,Cn,_(t)),o<1?(s=c=>{const u=c*o,h=u*t,d=u-n,f=we(c,o),m=Math.exp(-h);return re-d/f*m},r=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-h),p=we(Math.pow(c,2),o);return(-s(c)+re>0?-1:1)*((d-f)*m)/p}):(s=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-re+u*h},r=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=$r(s,r,a);if(t=G(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Wr=12;function $r(t,e,n){let i=n;for(let s=1;s<Wr;s++)i=i-t(i)/e(i);return i}function we(t,e){return t*Math.sqrt(1-e*e)}const Gr=["duration","bounce"],_r=["stiffness","damping","mass"];function Dn(t,e){return e.some(n=>t[n]!==void 0)}function Hr(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Dn(t,_r)&&Dn(t,Gr)){const n=Kr(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function qe({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],r=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=Hr({...i,velocity:-_(i.velocity||0)}),f=h||0,m=l/(2*Math.sqrt(a*c)),p=r-s,y=_(Math.sqrt(a/c)),x=Math.abs(p)<5;n||(n=x?.01:2),e||(e=x?.005:.5);let b;if(m<1){const g=we(y,m);b=P=>{const S=Math.exp(-m*y*P);return r-S*((f+m*y*p)/g*Math.sin(g*P)+p*Math.cos(g*P))}}else if(m===1)b=g=>r-Math.exp(-y*g)*(p+(f+y*p)*g);else{const g=y*Math.sqrt(m*m-1);b=P=>{const S=Math.exp(-m*y*P),C=Math.min(g*P,300);return r-S*((f+m*y*p)*Math.sinh(C)+g*p*Math.cosh(C))/g}}return{calculatedDuration:d&&u||null,next:g=>{const P=b(g);if(d)o.done=g>=u;else{let S=f;g!==0&&(m<1?S=cs(b,g,P):S=0);const C=Math.abs(S)<=n,I=Math.abs(r-P)<=e;o.done=C&&I}return o.value=o.done?r:P,o}}}function Mn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=w=>a!==void 0&&w<a||l!==void 0&&w>l,m=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let p=n*e;const y=h+p,x=o===void 0?y:o(y);x!==y&&(p=x-h);const b=w=>-p*Math.exp(-w/i),g=w=>x+b(w),P=w=>{const B=b(w),k=g(w);d.done=Math.abs(B)<=c,d.value=d.done?x:k};let S,C;const I=w=>{f(d.value)&&(S=w,C=qe({keyframes:[d.value,m(d.value)],velocity:cs(g,w,d.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return I(0),{calculatedDuration:null,next:w=>{let B=!1;return!C&&S===void 0&&(B=!0,P(w),I(w)),S!==void 0&&w>=S?C.next(w-S):(!B&&P(w),d)}}}const us=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Yr=1e-7,Xr=12;function qr(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=us(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Yr&&++a<Xr);return o}function Et(t,e,n,i){if(t===e&&n===i)return O;const s=r=>qr(r,0,1,t,n);return r=>r===0||r===1?r:us(s(r),e,i)}const Zr=Et(.42,0,1,1),Jr=Et(0,0,.58,1),hs=Et(.42,0,.58,1),ds=t=>Array.isArray(t)&&typeof t[0]!="number",fs=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ps=t=>e=>1-t(1-e),Ze=t=>1-Math.sin(Math.acos(t)),ms=ps(Ze),Qr=fs(Ze),gs=Et(.33,1.53,.69,.99),Je=ps(gs),ta=fs(Je),ea=t=>(t*=2)<1?.5*Je(t):.5*(2-Math.pow(2,-10*(t-1))),na={linear:O,easeIn:Zr,easeInOut:hs,easeOut:Jr,circIn:Ze,circInOut:Qr,circOut:ms,backIn:Je,backInOut:ta,backOut:gs,anticipate:ea},kn=t=>{if(Array.isArray(t)){_e(t.length===4);const[e,n,i,s]=t;return Et(e,n,i,s)}else if(typeof t=="string")return na[t];return t},yt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},V=(t,e,n)=>t+(e-t)*n;function ae(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ia({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,r=0,o=0;if(!e)s=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=ae(l,a,t+1/3),r=ae(l,a,t),o=ae(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}const le=(t,e,n)=>{const i=t*t,s=n*(e*e-i)+i;return s<0?0:Math.sqrt(s)},sa=[be,at,ft],oa=t=>sa.find(e=>e.test(t));function Rn(t){const e=oa(t);let n=e.parse(t);return e===ft&&(n=ia(n)),n}const En=(t,e)=>{const n=Rn(t),i=Rn(e),s={...n};return r=>(s.red=le(n.red,i.red,r),s.green=le(n.green,i.green,r),s.blue=le(n.blue,i.blue,r),s.alpha=V(n.alpha,i.alpha,r),at.transform(s))};function Pe(t,e){return n=>n>0?e:t}function ra(t,e){return n=>V(t,e,n)}function Qe(t){return typeof t=="number"?ra:typeof t=="string"?Oe(t)?Pe:F.test(t)?En:ca:Array.isArray(t)?ys:typeof t=="object"?F.test(t)?En:aa:Pe}function ys(t,e){const n=[...t],i=n.length,s=t.map((r,o)=>Qe(r)(r,e[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}}function aa(t,e){const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=Qe(t[s])(t[s],e[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}}function la(t,e){var n;const i=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=t.indexes[o][s[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[r]=l,s[o]++}return i}const ca=(t,e)=>{const n=nt.createTransformer(e),i=Wt(t),s=Wt(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?X(ys(la(i,s),s.values),n):Pe(t,e)};function xs(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?V(t,e,n):Qe(t)(t,e)}function ua(t,e,n){const i=[],s=n||xs,r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||O:e;a=X(l,a)}i.push(a)}return i}function ha(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const r=t.length;if(_e(r===e.length),r===1)return()=>e[0];if(r===2&&t[0]===t[1])return()=>e[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=ua(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const h=yt(t[u],t[u+1],c);return o[u](h)};return n?c=>l(et(t[0],t[r-1],c)):l}function vs(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=yt(0,e,i);t.push(V(n,1,s))}}function bs(t){const e=[0];return vs(e,t.length-1),e}function da(t,e){return t.map(n=>n*e)}function fa(t,e){return t.map(()=>e||hs).splice(0,t.length-1)}function $t({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=ds(i)?i.map(kn):kn(i),r={done:!1,value:e[0]},o=da(n&&n.length===e.length?n:bs(e),t),a=ha(o,e,{ease:Array.isArray(s)?s:fa(e,s)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const Se=2e4;function Ts(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Se;)e+=n,i=t.next(e);return e>=Se?1/0:e}const pa=t=>{const e=({timestamp:n})=>t(n);return{start:()=>L.update(e,!0),stop:()=>q(e),now:()=>j.isProcessing?j.timestamp:tt.now()}},ma={decay:Mn,inertia:Mn,tween:$t,keyframes:$t,spring:qe},ga=t=>t/100;class tn extends as{constructor({KeyframeResolver:e=He,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle";const{name:i,motionValue:s,keyframes:r}=this.options,o=(a,l)=>this.onKeyframesResolved(a,l);i&&s&&s.owner?this.resolver=s.owner.resolveKeyframes(r,o,i,s):this.resolver=new e(r,o,i,s),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=ma[n]||$t;let l,c;a!==$t&&typeof e[0]!="number"&&(l=X(ga,xs(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});r==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Ts(u));const{calculatedDuration:h}=u,d=h+s,f=d*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:f}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:w}=this.options;return{done:!0,value:w[w.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return r.next(0);const{delay:d,repeat:f,repeatType:m,repeatDelay:p,onUpdate:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-d*(this.speed>=0?1:-1),b=this.speed>=0?x<0:x>u;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,P=r;if(f){const w=Math.min(this.currentTime,u)/h;let B=Math.floor(w),k=w%1;!k&&w>=1&&(k=1),k===1&&B--,B=Math.min(B,f+1),!!(B%2)&&(m==="reverse"?(k=1-k,p&&(k-=p/h)):m==="mirror"&&(P=o)),g=et(0,1,k)*h}const S=b?{done:!1,value:l[0]}:P.next(g);a&&(S.value=a(S.value));let{done:C}=S;!b&&c!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return I&&s!==void 0&&(S.value=Qt(l,this.options,s)),y&&y(S.value),I&&this.finish(),S}get duration(){const{resolved:e}=this;return e?_(e.calculatedDuration):0}get time(){return _(this.currentTime)}set time(e){e=G(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=_(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=pa,onPlay:n}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=i),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:e}=this.options;e&&e()}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const ws=t=>Array.isArray(t)&&typeof t[0]=="number";function Ps(t){return!!(!t||typeof t=="string"&&Ss[t]||ws(t)||Array.isArray(t)&&t.every(Ps))}const bt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ss={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bt([0,.65,.55,1]),circOut:bt([.55,0,1,.45]),backIn:bt([.31,.01,.66,-.59]),backOut:bt([.33,1.53,.69,.99])};function As(t){if(t)return ws(t)?bt(t):Array.isArray(t)?t.map(As):Ss[t]}function ya(t,e,n,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=As(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const xa=rs(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),va=new Set(["opacity","clipPath","filter","transform"]),Gt=10,ba=2e4;function Ta(t){return t.type==="spring"||t.name==="backgroundColor"||!Ps(t.ease)}function wa(t,e){const n=new tn({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const s=[];let r=0;for(;!i.done&&r<ba;)i=n.sample(r),s.push(i.value),r+=Gt;return{times:void 0,keyframes:s,duration:r-Gt,ease:"linear"}}class Ln extends as{constructor(e){super(e);const{name:n,motionValue:i,keyframes:s}=this.options;this.resolver=new os(s,(r,o)=>this.onKeyframesResolved(r,o),n,i),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:s=300,times:r,ease:o,type:a,motionValue:l,name:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(Ta(this.options)){const{onComplete:h,onUpdate:d,motionValue:f,...m}=this.options,p=wa(e,m);e=p.keyframes,e.length===1&&(e[1]=e[0]),s=p.duration,r=p.times,o=p.ease,a="keyframes"}const u=ya(l.owner.current,c,e,{...this.options,duration:s,times:r,ease:o});return u.startTime=tt.now(),this.pendingTimeline?(u.timeline=this.pendingTimeline,this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;l.set(Qt(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:s,times:r,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return _(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return _(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=G(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return O;const{animation:i}=n;i.timeline=e,i.onfinish=null}return O}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:s,type:r,ease:o,times:a}=e;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:c,onComplete:u,...h}=this.options,d=new tn({...h,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),f=G(this.time);l.setWithVelocity(d.sample(f-Gt).value,d.sample(f).value,Gt)}this.cancel()}}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=e;return xa()&&i&&va.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const en=(t,e,n,i={},s,r)=>o=>{const a=Ge(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-G(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:s};hr(a)||(u={...u,...ur(t,u)}),u.duration&&(u.duration=G(u.duration)),u.repeatDelay&&(u.repeatDelay=G(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if(u.type===!1&&(u.duration=0,u.delay===0&&(h=!0)),h&&!r&&e.get()!==void 0){const d=Qt(u.keyframes,a);if(d!==void 0){L.update(()=>{u.onUpdate(d),u.onComplete()});return}}return!r&&Ln.supports(u)?new Ln(u):new tn(u)};function _t(t){return!!(E(t)&&t.add)}function nn(t,e){t.indexOf(e)===-1&&t.push(e)}function te(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class sn{constructor(){this.subscriptions=[]}add(e){return nn(this.subscriptions,e),()=>te(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=30,Pa=t=>!isNaN(parseFloat(t));class Sa{constructor(e,n={}){this.version="11.0.24",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=tt.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=Pa(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=tt.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new sn);const i=this.events[e].add(n);return e==="change"?()=>{i(),L.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>jn)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,jn);return ls(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ct(t,e){return new Sa(t,e)}function Aa(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ct(n))}function Va(t,e){const n=Jt(t,e);let{transitionEnd:i={},transition:s={},...r}=n||{};r={...r,...i};for(const o in r){const a=No(r[o]);Aa(t,o,a)}}function Ca({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function on(t,e,{delay:n=0,transitionOverride:i,type:s}={}){var r;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;const c=t.getValue("willChange");i&&(o=i);const u=[],h=s&&t.animationState&&t.animationState.getState()[s];for(const d in l){const f=t.getValue(d,(r=t.latestValues[d])!==null&&r!==void 0?r:null),m=l[d];if(m===void 0||h&&Ca(h,d))continue;const p={delay:n,elapsed:0,...Ge(o||{},d)};let y=!1;if(window.HandoffAppearAnimations){const b=t.getProps()[Ai];if(b){const g=window.HandoffAppearAnimations(b,d);g!==null&&(p.elapsed=g,y=!0)}}f.start(en(d,f,m,t.shouldReduceMotion&&ct.has(d)?{type:!1}:p,t,y));const x=f.animation;x&&(_t(c)&&(c.add(d),x.then(()=>c.remove(d))),u.push(x))}return a&&Promise.all(u).then(()=>{L.update(()=>{a&&Va(t,a)})}),u}function Ae(t,e,n={}){var i;const s=Jt(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(r=n.transitionOverride);const o=s?()=>Promise.all(on(t,s,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=r;return Da(t,e,u+c,h,d,n)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function Da(t,e,n=0,i=0,s=1,r){const o=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(Ma).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Ae(c,e,{...r,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function Ma(t,e){return t.sortNodePosition(e)}function ka(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>Ae(t,r,n));i=Promise.all(s)}else if(typeof e=="string")i=Ae(t,e,n);else{const s=typeof e=="function"?Jt(t,e,n.custom):e;i=Promise.all(on(t,s,n))}return i.then(()=>{L.postRender(()=>{t.notify("AnimationComplete",e)})})}const Ra=[...je].reverse(),Ea=je.length;function La(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ka(t,n,i)))}function ja(t){let e=La(t);const n=Fa();let i=!0;const s=l=>(c,u)=>{var h;const d=Jt(t,u,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:f,transitionEnd:m,...p}=d;c={...c,...p,...m}}return c};function r(l){e=l(t)}function o(l){const c=t.getProps(),u=t.getVariantContext(!0)||{},h=[],d=new Set;let f={},m=1/0;for(let y=0;y<Ea;y++){const x=Ra[y],b=n[x],g=c[x]!==void 0?c[x]:u[x],P=At(g),S=x===l?b.isActive:null;S===!1&&(m=y);let C=g===u[x]&&g!==c[x]&&P;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),b.protectedKeys={...f},!b.isActive&&S===null||!g&&!b.prevProp||Xt(g)||typeof g=="boolean")continue;let w=Ba(b.prevProp,g)||x===l&&b.isActive&&!C&&P||y>m&&P,B=!1;const k=Array.isArray(g)?g:[g];let Z=k.reduce(s(x),{});S===!1&&(Z={});const{prevResolvedValues:Lt={}}=b,jt={...Lt,...Z},U=R=>{w=!0,d.has(R)&&(B=!0,d.delete(R)),b.needsAnimating[R]=!0;const z=t.getValue(R);z&&(z.liveStyle=!1)};for(const R in jt){const z=Z[R],ut=Lt[R];if(f.hasOwnProperty(R))continue;let ht=!1;ge(z)&&ge(ut)?ht=!Gi(z,ut):ht=z!==ut,ht?z!=null?U(R):d.add(R):z!==void 0&&d.has(R)?U(R):b.protectedKeys[R]=!0}b.prevProp=g,b.prevResolvedValues=Z,b.isActive&&(f={...f,...Z}),i&&t.blockInitialAnimation&&(w=!1),w&&(!C||B)&&h.push(...k.map(R=>({animation:R,options:{type:x}})))}if(d.size){const y={};d.forEach(x=>{const b=t.getBaseTarget(x),g=t.getValue(x);g&&(g.liveStyle=!0),y[x]=b===void 0?null:b}),h.push({animation:y})}let p=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(p=!1),i=!1,p?e(h):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var f;return(f=d.animationState)===null||f===void 0?void 0:f.setActive(l,c)}),n[l].isActive=c;const h=o(l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n}}function Ba(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Gi(e,t):!1}function st(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fa(){return{animate:st(!0),whileInView:st(),whileHover:st(),whileTap:st(),whileDrag:st(),whileFocus:st(),exit:st()}}class Oa extends it{constructor(e){super(e),e.animationState||(e.animationState=ja(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Xt(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Ia=0;class Na extends it{constructor(){super(...arguments),this.id=Ia++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Ua={animation:{Feature:Oa},exit:{Feature:Na}},Bn=(t,e)=>Math.abs(t-e);function za(t,e){const n=Bn(t.x,e.x),i=Bn(t.y,e.y);return Math.sqrt(n**2+i**2)}class Vs{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ue(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,f=za(h.offset,{x:0,y:0})>=3;if(!d&&!f)return;const{point:m}=h,{timestamp:p}=j;this.history.push({...m,timestamp:p});const{onStart:y,onMove:x}=this.handlers;d||(y&&y(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=ce(d,this.transformPagePoint),L.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:f,onSessionEnd:m,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=ue(h.type==="pointercancel"?this.lastMoveEventInfo:ce(d,this.transformPagePoint),this.history);this.startEvent&&f&&f(h,y),m&&m(h,y)},!Ui(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=Zt(e),a=ce(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=j;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,ue(a,this.history)),this.removeListeners=X(Y(this.contextWindow,"pointermove",this.handlePointerMove),Y(this.contextWindow,"pointerup",this.handlePointerUp),Y(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),q(this.updatePoint)}}function ce(t,e){return e?{point:e(t.point)}:t}function Fn(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ue({point:t},e){return{point:t,delta:Fn(t,Cs(e)),offset:Fn(t,Ka(e)),velocity:Wa(e,.1)}}function Ka(t){return t[0]}function Cs(t){return t[t.length-1]}function Wa(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=Cs(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>G(e)));)n--;if(!i)return{x:0,y:0};const r=_(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function N(t){return t.max-t.min}function Ve(t,e=0,n=.01){return Math.abs(t-e)<=n}function On(t,e,n,i=.5){t.origin=i,t.originPoint=V(e.min,e.max,t.origin),t.scale=N(n)/N(e),(Ve(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=V(n.min,n.max,t.origin)-t.originPoint,(Ve(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Pt(t,e,n,i){On(t.x,e.x,n.x,i?i.originX:void 0),On(t.y,e.y,n.y,i?i.originY:void 0)}function In(t,e,n){t.min=n.min+e.min,t.max=t.min+N(e)}function $a(t,e,n){In(t.x,e.x,n.x),In(t.y,e.y,n.y)}function Nn(t,e,n){t.min=e.min-n.min,t.max=t.min+N(e)}function St(t,e,n){Nn(t.x,e.x,n.x),Nn(t.y,e.y,n.y)}function Ga(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?V(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?V(n,t,i.max):Math.min(t,n)),t}function Un(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function _a(t,{top:e,left:n,bottom:i,right:s}){return{x:Un(t.x,n,s),y:Un(t.y,e,i)}}function zn(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Ha(t,e){return{x:zn(t.x,e.x),y:zn(t.y,e.y)}}function Ya(t,e){let n=.5;const i=N(t),s=N(e);return s>i?n=yt(e.min,e.max-i,t.min):i>s&&(n=yt(t.min,t.max-s,e.min)),et(0,1,n)}function Xa(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ce=.35;function qa(t=Ce){return t===!1?t=0:t===!0&&(t=Ce),{x:Kn(t,"left","right"),y:Kn(t,"top","bottom")}}function Kn(t,e,n){return{min:Wn(t,e),max:Wn(t,n)}}function Wn(t,e){return typeof t=="number"?t:t[e]||0}const $n=()=>({translate:0,scale:1,origin:0,originPoint:0}),pt=()=>({x:$n(),y:$n()}),Gn=()=>({min:0,max:0}),D=()=>({x:Gn(),y:Gn()});function W(t){return[t("x"),t("y")]}function Ds({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Za({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Ja(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function he(t){return t===void 0||t===1}function De({scale:t,scaleX:e,scaleY:n}){return!he(t)||!he(e)||!he(n)}function ot(t){return De(t)||Ms(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ms(t){return _n(t.x)||_n(t.y)}function _n(t){return t&&t!=="0%"}function Ht(t,e,n){const i=t-n,s=e*i;return n+s}function Hn(t,e,n,i,s){return s!==void 0&&(t=Ht(t,s,i)),Ht(t,n,i)+e}function Me(t,e=0,n=1,i,s){t.min=Hn(t.min,e,n,i,s),t.max=Hn(t.max,e,n,i,s)}function ks(t,{x:e,y:n}){Me(t.x,e.translate,e.scale,e.originPoint),Me(t.y,n.translate,n.scale,n.originPoint)}function Qa(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const l=r.instance;l&&l.style&&l.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&mt(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,ks(t,o)),i&&ot(r.latestValues)&&mt(t,r.latestValues))}e.x=Yn(e.x),e.y=Yn(e.y)}function Yn(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Q(t,e){t.min=t.min+e,t.max=t.max+e}function Xn(t,e,[n,i,s]){const r=e[s]!==void 0?e[s]:.5,o=V(t.min,t.max,r);Me(t,e[n],e[i],o,e.scale)}const tl=["x","scaleX","originX"],el=["y","scaleY","originY"];function mt(t,e){Xn(t.x,e,tl),Xn(t.y,e,el)}function Rs(t,e){return Ds(Ja(t.getBoundingClientRect(),e))}function nl(t,e,n){const i=Rs(t,n),{scroll:s}=e;return s&&(Q(i.x,s.offset.x),Q(i.y,s.offset.y)),i}const Es=({current:t})=>t?t.ownerDocument.defaultView:null,il=new WeakMap;class sl{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=D(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Zt(u,"page").point)},r=(u,h)=>{const{drag:d,dragPropagation:f,onDragStart:m}=this.getProps();if(d&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ki(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),W(y=>{let x=this.getAxisMotionValue(y).get()||0;if($.test(x)){const{projection:b}=this.visualElement;if(b&&b.layout){const g=b.layout.layoutBox[y];g&&(x=N(g)*(parseFloat(x)/100))}}this.originPoint[y]=x}),m&&m(u,h);const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:m,onDrag:p}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:y}=h;if(f&&this.currentDirection===null){this.currentDirection=ol(y),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,y),this.updateAxis("y",h.point,y),this.visualElement.render(),p&&p(u,h)},a=(u,h)=>this.stop(u,h),l=()=>W(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Vs(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Es(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&r(e,n)}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Ft(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Ga(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;n&&dt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=_a(s.layoutBox,n):this.constraints=!1,this.elastic=qa(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&W(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Xa(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!dt(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=nl(i,s.root,this.visualElement.getTransformPagePoint());let o=Ha(s.layout.layoutBox,r);if(n){const a=n(Za(o));this.hasMutatedConstraints=!!a,a&&(o=Ds(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=W(u=>{if(!Ft(u,n,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,f=s?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(en(e,i,0,n,this.visualElement))}stopAnimation(){W(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){W(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){W(n=>{const{drag:i}=this.getProps();if(!Ft(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(e[n]-V(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!dt(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};W(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();s[o]=Ya({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),W(o=>{if(!Ft(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(V(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;il.set(this.visualElement,this);const e=this.visualElement.current,n=Y(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();dt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const o=H(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(W(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Ce,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Ft(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function ol(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class rl extends it{constructor(e){super(e),this.removeGroupControls=O,this.removeListeners=O,this.controls=new sl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||O}unmount(){this.removeGroupControls(),this.removeListeners()}}const qn=t=>(e,n)=>{t&&t(e,n)};class al extends it{constructor(){super(...arguments),this.removePointerDownListener=O}onPointerDown(e){this.session=new Vs(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Es(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:qn(e),onStart:qn(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&s(r,o)}}}mount(){this.removePointerDownListener=Y(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function ll(){const t=A.useContext(Re);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=A.useId();return A.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const Ut={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zn(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const vt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(T.test(t))t=parseFloat(t);else return t;const n=Zn(t,e.target.x),i=Zn(t,e.target.y);return`${n}% ${i}%`}},cl={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=nt.parse(t);if(s.length>5)return i;const r=nt.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=V(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class ul extends Pi.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;mo(hl),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Ut.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||L.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Le.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ls(t){const[e,n]=ll(),i=A.useContext(wi);return Pi.createElement(ul,{...t,layoutGroup:i,switchLayoutGroup:A.useContext(Ci),isPresent:e,safeToRemove:n})}const hl={borderRadius:{...vt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vt,borderTopRightRadius:vt,borderBottomLeftRadius:vt,borderBottomRightRadius:vt,boxShadow:cl},js=["TopLeft","TopRight","BottomLeft","BottomRight"],dl=js.length,Jn=t=>typeof t=="string"?parseFloat(t):t,Qn=t=>typeof t=="number"||T.test(t);function fl(t,e,n,i,s,r){s?(t.opacity=V(0,n.opacity!==void 0?n.opacity:1,pl(i)),t.opacityExit=V(e.opacity!==void 0?e.opacity:1,0,ml(i))):r&&(t.opacity=V(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<dl;o++){const a=`border${js[o]}Radius`;let l=ti(e,a),c=ti(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Qn(l)===Qn(c)?(t[a]=Math.max(V(Jn(l),Jn(c),i),0),($.test(c)||$.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=V(e.rotate||0,n.rotate||0,i))}function ti(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const pl=Bs(0,.5,ms),ml=Bs(.5,.95,O);function Bs(t,e,n){return i=>i<t?0:i>e?1:n(yt(t,e,i))}function ei(t,e){t.min=e.min,t.max=e.max}function K(t,e){ei(t.x,e.x),ei(t.y,e.y)}function ni(t,e,n,i,s){return t-=e,t=Ht(t,1/n,i),s!==void 0&&(t=Ht(t,1/s,i)),t}function gl(t,e=0,n=1,i=.5,s,r=t,o=t){if($.test(e)&&(e=parseFloat(e),e=V(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=V(r.min,r.max,i);t===r&&(a-=e),t.min=ni(t.min,e,n,a,s),t.max=ni(t.max,e,n,a,s)}function ii(t,e,[n,i,s],r,o){gl(t,e[n],e[i],e[s],e.scale,r,o)}const yl=["x","scaleX","originX"],xl=["y","scaleY","originY"];function si(t,e,n,i){ii(t.x,e,yl,n?n.x:void 0,i?i.x:void 0),ii(t.y,e,xl,n?n.y:void 0,i?i.y:void 0)}function oi(t){return t.translate===0&&t.scale===1}function Fs(t){return oi(t.x)&&oi(t.y)}function vl(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Os(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function ri(t){return N(t.x)/N(t.y)}class bl{constructor(){this.members=[]}add(e){nn(this.members,e),e.scheduleRender()}remove(e){if(te(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ai(t,e,n){let i="";const s=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:c,rotateX:u,rotateY:h,skewX:d,skewY:f}=n;c&&(i+=`rotate(${c}deg) `),u&&(i+=`rotateX(${u}deg) `),h&&(i+=`rotateY(${h}deg) `),d&&(i+=`skewX(${d}deg) `),f&&(i+=`skewY(${f}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Tl=(t,e)=>t.depth-e.depth;class wl{constructor(){this.children=[],this.isDirty=!1}add(e){nn(this.children,e),this.isDirty=!0}remove(e){te(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Tl),this.isDirty=!1,this.children.forEach(e)}}function Pl(t,e){const n=tt.now(),i=({timestamp:s})=>{const r=s-n;r>=e&&(q(i),t(r-e))};return L.read(i,!0),()=>q(i)}function Sl(t){window.MotionDebug&&window.MotionDebug.record(t)}function Is(t){return t instanceof SVGElement&&t.tagName!=="svg"}function rn(t,e,n){const i=E(t)?t:Ct(t);return i.start(en("",i,e,n)),i.animation}const de=["","X","Y","Z"],Al={visibility:"hidden"},li=1e3;let Vl=0;const rt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function fe(t,e,n,i){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Ns({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=Vl++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,rt.totalNodes=rt.resolvedTargetDeltas=rt.recalculatedProjection=0,this.nodes.forEach(Ml),this.nodes.forEach(jl),this.nodes.forEach(Bl),this.nodes.forEach(kl),Sl(rt)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new wl)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new sn),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Is(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=Pl(d,250),Ut.hasAnimatedSinceResize&&(Ut.hasAnimatedSinceResize=!1,this.nodes.forEach(ui))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||u.getDefaultTransition()||Ul,{onLayoutAnimationStart:y,onLayoutAnimationComplete:x}=u.getProps(),b=!this.targetLayout||!Os(this.targetLayout,m)||f,g=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||d&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,g);const P={...Ge(p,"layout"),onPlay:y,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else d||ui(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,q(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fl),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ci);return}this.isUpdating||this.nodes.forEach(El),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(Ll),this.nodes.forEach(Cl),this.nodes.forEach(Dl),this.clearAllSnapshots();const a=tt.now();j.delta=et(0,1e3/60,a-j.timestamp),j.timestamp=a,j.isProcessing=!0,ee.update.process(j),ee.preRender.process(j),ee.render.process(j),j.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Le.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Rl),this.sharedNodes.forEach(Ol)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,L.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){L.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=D(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Fs(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ot(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),zl(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return D();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Q(a.x,l.offset.x),Q(a.y,l.offset.y)),a}removeElementScroll(o){const a=D();K(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;if(c!==this.root&&u&&h.layoutScroll){if(u.isRoot){K(a,o);const{scroll:d}=this.root;d&&(Q(a.x,-d.offset.x),Q(a.y,-d.offset.y))}Q(a.x,u.offset.x),Q(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=D();K(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&mt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ot(u.latestValues)&&mt(l,u.latestValues)}return ot(this.latestValues)&&mt(l,this.latestValues),l}removeTransform(o){const a=D();K(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ot(c.latestValues))continue;De(c.latestValues)&&c.updateSnapshot();const u=D(),h=c.measurePageBox();K(u,h),si(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ot(this.latestValues)&&si(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==j.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=j.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),St(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),K(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=D(),this.targetWithTransforms=D()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$a(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):K(this.target,this.layout.layoutBox),ks(this.target,this.targetDelta)):K(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),St(this.relativeTargetOrigin,this.target,f.target),K(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}rt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||De(this.parent.latestValues)||Ms(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===j.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;K(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;Qa(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=D());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=pt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=pt(),this.projectionDeltaWithTransform=pt());const p=this.projectionTransform;Pt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=ai(this.projectionDelta,this.treeScale),(this.projectionTransform!==p||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),rt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=pt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=D(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,p=f!==m,y=this.getStack(),x=!y||y.members.length<=1,b=!!(p&&!x&&this.options.crossfade===!0&&!this.path.some(Nl));this.animationProgress=0;let g;this.mixTargetDelta=P=>{const S=P/1e3;hi(h.x,o.x,S),hi(h.y,o.y,S),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(St(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Il(this.relativeTarget,this.relativeTargetOrigin,d,S),g&&vl(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=D()),K(g,this.relativeTarget)),p&&(this.animationValues=u,fl(u,c,this.latestValues,S,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(q(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=L.update(()=>{Ut.hasAnimatedSinceResize=!0,this.currentAnimation=rn(0,li,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(li),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Us(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||D();const h=N(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=N(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}K(a,l),mt(a,u),Pt(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new bl),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&fe("z",o,c,this.animationValues);for(let u=0;u<de.length;u++)fe(`rotate${de[u]}`,o,c,this.animationValues),fe(`skew${de[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Al;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=It(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=It(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ot(this.latestValues)&&(p.transform=u?u({},""):"none",this.hasProjected=!1),p}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=ai(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:f,y:m}=this.projectionDelta;c.transformOrigin=`${f.origin*100}% ${m.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const p in zt){if(d[p]===void 0)continue;const{correct:y,applyTo:x}=zt[p],b=c.transform==="none"?d[p]:y(d[p],h);if(x){const g=x.length;for(let P=0;P<g;P++)c[x[P]]=b}else c[p]=b}return this.options.layoutId&&(c.pointerEvents=h===this?It(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ci),this.root.sharedNodes.clear()}}}function Cl(t){t.updateLayout()}function Dl(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:r}=t.options,o=n.source!==t.layout.source;r==="size"?W(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=N(d);d.min=i[h].min,d.max=d.min+f}):Us(r,n.layoutBox,i)&&W(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=N(i[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=pt();Pt(a,i,n.layoutBox);const l=pt();o?Pt(l,t.applyTransform(s,!0),n.measuredBox):Pt(l,i,n.layoutBox);const c=!Fs(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const m=D();St(m,n.layoutBox,d.layoutBox);const p=D();St(p,i,f.layoutBox),Os(m,p)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=m,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Ml(t){rt.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function kl(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Rl(t){t.clearSnapshot()}function ci(t){t.clearMeasurements()}function El(t){t.isLayoutDirty=!1}function Ll(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ui(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function jl(t){t.resolveTargetDelta()}function Bl(t){t.calcProjection()}function Fl(t){t.resetSkewAndRotation()}function Ol(t){t.removeLeadSnapshot()}function hi(t,e,n){t.translate=V(e.translate,0,n),t.scale=V(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function di(t,e,n,i){t.min=V(e.min,n.min,i),t.max=V(e.max,n.max,i)}function Il(t,e,n,i){di(t.x,e.x,n.x,i),di(t.y,e.y,n.y,i)}function Nl(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ul={duration:.45,ease:[.4,0,.1,1]},fi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),pi=fi("applewebkit/")&&!fi("chrome/")?Math.round:O;function mi(t){t.min=pi(t.min),t.max=pi(t.max)}function zl(t){mi(t.x),mi(t.y)}function Us(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ve(ri(e),ri(n),.2)}const Kl=Ns({attachResizeListener:(t,e)=>H(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pe={current:void 0},zs=Ns({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!pe.current){const t=new Kl({});t.mount(window),t.setOptions({layoutScroll:!0}),pe.current=t}return pe.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Wl={pan:{Feature:al},drag:{Feature:rl,ProjectionNode:zs,MeasureLayout:Ls}},ke={current:null},Ks={current:!1};function $l(){if(Ks.current=!0,!!Ti)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ke.current=t.matches;t.addListener(e),e()}else ke.current=!1}function Gl(t,e,n){const{willChange:i}=e;for(const s in e){const r=e[s],o=n[s];if(E(r))t.addValue(s,r),_t(i)&&i.add(s);else if(E(o))t.addValue(s,Ct(r,{owner:t})),_t(i)&&i.remove(s);else if(o!==r)if(t.hasValue(s)){const a=t.getValue(s);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(s);t.addValue(s,Ct(a!==void 0?a:r,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Dt=new WeakMap,_l=[...qi,F,nt],Hl=t=>_l.find(Xi(t)),Ws=Object.keys(Vt),Yl=Ws.length,gi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Xl=Be.length;class ql{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.resolveKeyframes=(d,f,m,p)=>new this.KeyframeResolver(d,f,m,p,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=He,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>L.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=qt(n),this.isVariantNode=Vi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in h){const f=h[d];l[d]!==void 0&&E(f)&&(f.set(l[d],!1),_t(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,n,i){return{}}mount(e){this.current=e,Dt.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Ks.current||$l(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ke.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dt.delete(this.current),this.projection&&this.projection.unmount(),q(this.notifyUpdate),q(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ct.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&L.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,r){let o,a;for(let l=0;l<Yl;l++){const c=Ws[l],{isEnabled:u,Feature:h,ProjectionNode:d,MeasureLayout:f}=Vt[c];d&&(o=d),u(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),f&&(a=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:d,layoutRoot:f}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&dt(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:f})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):D()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<gi.length;i++){const s=gi[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r=e["on"+s];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=Gl(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Xl;i++){const s=Be[i],r=this.props[s];(At(r)||r===!1)&&(n[s]=r)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ct(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Hi(s)||_i(s))?s=parseFloat(s):!Hl(s)&&nt.test(n)&&(s=ss(e,n)),this.setBaseTarget(e,E(s)?s.get():s)),E(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n,i;const{initial:s}=this.props,r=typeof s=="string"||typeof s=="object"?(i=$e(this.props,s,(n=this.presenceContext)===null||n===void 0?void 0:n.custom))===null||i===void 0?void 0:i[e]:void 0;if(s&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!E(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new sn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class $s extends ql{constructor(){super(...arguments),this.KeyframeResolver=os}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}}function Zl(t){return window.getComputedStyle(t)}class Gs extends $s{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ct.has(n)){const i=Xe(n);return i&&i.default||0}else{const i=Zl(e),s=(ki(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Rs(e,n)}build(e,n,i,s){Ne(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return We(e,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;E(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){Bi(e,n,i,s)}}class _s extends $s{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ct.has(n)){const i=Xe(n);return i&&i.default||0}return n=Fi.has(n)?n:Ee(n),e.getAttribute(n)}measureInstanceViewportBox(){return D()}scrapeMotionValuesFromProps(e,n){return Ii(e,n,this)}build(e,n,i,s){ze(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){Oi(e,n,i,s)}mount(e){this.isSVGTag=Ke(e.tagName),super.mount(e)}}const Jl=(t,e)=>Fe(t)?new _s(e,{enableHardwareAcceleration:!1}):new Gs(e,{enableHardwareAcceleration:!0}),Ql={layout:{ProjectionNode:zs,MeasureLayout:Ls}},tc={...Ua,...ir,...Wl,...Ql},Ot=fo((t,e)=>$o(t,e,tc,Jl));function Hs(t,e,n){var i;if(typeof t=="string"){let s=document;e&&(_e(!!e.current),s=e.current),n?((i=n[t])!==null&&i!==void 0||(n[t]=s.querySelectorAll(t)),t=n[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function ec(t,e){let n;const i=()=>{const{currentTime:s}=e,o=(s===null?0:s.value)/100;n!==o&&t(o),n=o};return L.update(i,!0),()=>q(i)}const nc=rs(()=>window.ScrollTimeline!==void 0);class Ys{constructor(e){this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>{if(nc()&&i.attachTimeline)i.attachTimeline(e);else return i.pause(),ec(s=>{i.time=i.duration*s},e)});return()=>{n.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ic(t){return typeof t=="object"&&!Array.isArray(t)}function sc(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Is(t)?new _s(e,{enableHardwareAcceleration:!1}):new Gs(e,{enableHardwareAcceleration:!0});n.mount(t),Dt.set(t,n)}function oc(t,e=100){const n=qe({keyframes:[0,e],...t}),i=Math.min(Ts(n),Se);return{type:"keyframes",ease:s=>n.next(i*s).value/e,duration:_(i)}}function yi(t,e,n,i){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=i.get(e))!==null&&s!==void 0?s:t}const rc=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function ac(t,e){return ds(t)?t[rc(0,t.length,e)]:t}function lc(t,e,n){for(let i=0;i<t.length;i++){const s=t[i];s.at>e&&s.at<n&&(te(t,s),i--)}}function cc(t,e,n,i,s,r){lc(t,s,r);for(let o=0;o<e.length;o++)t.push({value:e[o],at:V(s,r,i[o]),easing:ac(n,o)})}function uc(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const hc="easeInOut";function dc(t,{defaultTransition:e={},...n}={},i){const s=e.duration||.3,r=new Map,o=new Map,a={},l=new Map;let c=0,u=0,h=0;for(let d=0;d<t.length;d++){const f=t[d];if(typeof f=="string"){l.set(f,u);continue}else if(!Array.isArray(f)){l.set(f.name,yi(u,f.at,c,l));continue}let[m,p,y={}]=f;y.at!==void 0&&(u=yi(u,y.at,c,l));let x=0;const b=(g,P,S,C=0,I=0)=>{const w=fc(g),{delay:B=0,times:k=bs(w),type:Z="keyframes",...Lt}=P;let{ease:jt=e.ease||"easeOut",duration:U}=P;const R=typeof B=="function"?B(C,I):B,z=w.length;if(z<=2&&Z==="spring"){let ln=100;if(z===2&&gc(w)){const qs=w[1]-w[0];ln=Math.abs(qs)}const cn={...Lt};U!==void 0&&(cn.duration=G(U));const un=oc(cn,ln);jt=un.ease,U=un.duration}U??(U=s);const ut=u+R,ht=ut+U;k.length===1&&k[0]===0&&(k[1]=1);const an=k.length-w.length;an>0&&vs(k,an),w.length===1&&w.unshift(null),cc(S,w,jt,k,ut,ht),x=Math.max(R+U,x),h=Math.max(ht,h)};if(E(m)){const g=xi(m,o);b(p,y,vi("default",g))}else{const g=Hs(m,i,a),P=g.length;for(let S=0;S<P;S++){p=p,y=y;const C=g[S],I=xi(C,o);for(const w in p)b(p[w],pc(y,w),vi(w,I),S,P)}}c=u,u+=x}return o.forEach((d,f)=>{for(const m in d){const p=d[m];p.sort(uc);const y=[],x=[],b=[];for(let P=0;P<p.length;P++){const{at:S,value:C,easing:I}=p[P];y.push(C),x.push(yt(0,h,S)),b.push(I||"easeOut")}x[0]!==0&&(x.unshift(0),y.unshift(y[0]),b.unshift(hc)),x[x.length-1]!==1&&(x.push(1),y.push(null)),r.has(f)||r.set(f,{keyframes:{},transition:{}});const g=r.get(f);g.keyframes[m]=y,g.transition[m]={...e,duration:h,ease:b,times:x,...n}}}),r}function xi(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function vi(t,e){return e[t]||(e[t]=[]),e[t]}function fc(t){return Array.isArray(t)?t:[t]}function pc(t,e){return t[e]?{...t,...t[e]}:{...t}}const mc=t=>typeof t=="number",gc=t=>t.every(mc);function Xs(t,e,n,i){const s=Hs(t,i),r=s.length,o=[];for(let a=0;a<r;a++){const l=s[a];Dt.has(l)||sc(l);const c=Dt.get(l),u={...n};typeof u.delay=="function"&&(u.delay=u.delay(a,r)),o.push(...on(c,{...e,transition:u},{}))}return new Ys(o)}const yc=t=>Array.isArray(t)&&Array.isArray(t[0]);function xc(t,e,n){const i=[];return dc(t,e,n).forEach(({keyframes:r,transition:o},a)=>{let l;E(a)?l=rn(a,r.default,o.default):l=Xs(a,r,o),i.push(l)}),new Ys(i)}const vc=t=>{function e(n,i,s){let r;return yc(n)?r=xc(n,i,t):ic(i)?r=Xs(n,i,s,t):r=rn(n,i,s),t&&t.animations.push(r),r}return e};function bc(){const t=me(()=>({current:null,animations:[]})),e=me(()=>vc(t));return Qs(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}const Tc=M.div`
  position: absolute;
  display: block;
  width: 374px;
  /* height: 278px; */
  height: 100vh;
  bottom: 30px;
  right: 5%;
  z-index: -1;
  overflow: hidden;
`,wc=()=>{const[t,e]=bc();return A.useEffect(()=>{(async()=>{const i={duration:5,ease:"easeInOut"},s={bottle:{y:[-2e3,400,-20,15,0],rotateZ:[45,0,-45,15,-5,0]}};await e(t.current,s.bottle,i),e(t.current,{rotateZ:[0,5,0,-10,0],y:[0,-5,5,10,5,0,-5,-10,-4,0]},{duration:10,repeat:1/0,ease:"easeInOut"})})()}),v.jsx(v.Fragment,{children:v.jsxs(Tc,{children:[v.jsx(Ot.img,{initial:{y:-2e3,rotateZ:-90},ref:t,src:"/images/animation/bottle.png",alt:"",height:"240px",width:"108px",style:{position:"absolute",bottom:"6px",right:"135.5px",zIndex:"3"}}),v.jsx(Ot.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.3,ease:"easeInOut"},src:"/images/animation/splash.png",width:"254.15px",height:"83.93px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),v.jsx(Ot.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.4,ease:"easeInOut"},src:"/images/animation/splash2.png",width:"169.54px",height:"103.54px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),v.jsx(Ot.img,{initial:{width:"100px"},animate:{width:["100px","0px","254px","90px"]},transition:{duration:5,delay:0,ease:"easeInOut"},src:"/images/animation/shadow.png",width:"254px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"2"}})]})})},Pc=M.h1`
  display: none;
`,Sc=M.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2f2f2f;
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`,Ac=M.p`
  font-size: 24px;
  color: #2f2f2f;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Vc=M.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,Cc=M.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,Dc=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`,Mc=M.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 12px;
`,kc=M.button`
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: #407bff;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`,Rc=M.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and(min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,Ec=()=>{const t=to(),e=[{text:"Habit drive",id:`${ne}#calendar`},{text:"View statistics",id:`${ne}#presentation-chart-bar`},{text:"Personal rate setting",id:`${ne}#wrench-screwdriver`}];function n(){t("/signup")}return v.jsxs(Dc,{children:[v.jsx(Pc,{children:"Hidden"}),v.jsx(Sc,{children:"Water consumption tracker"}),v.jsx(Ac,{children:"Record daily water intake and track"}),v.jsx(Mc,{children:"Tracker Benefits"}),v.jsx(Vc,{children:e.map(({id:i,text:s},r)=>v.jsxs(Cc,{children:[v.jsx(Rc,{children:v.jsx("use",{href:i})}),s]},r))}),v.jsx(kc,{type:"button",onClick:n,children:"Try tracker"})]})},Lc=M.h2`
  font-weight: 600;
  font-size: 18px;
  color: #2f2f2f;
  margin-bottom: 12px;
`,jc=M.li`
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #407bff;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`,Bc=M.div`
  display: block;

  margin: 0;
`,Fc=M.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 280px;

  padding: 24px 16px;
  background-color: #ecf2ff;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,Oc=M.ul`
  list-style-type: none;
  padding-left: 0;
`,Ic=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return v.jsx(Bc,{children:v.jsxs(Fc,{children:[v.jsx(Lc,{children:"Why drink water"}),v.jsx(Oc,{children:t.map((e,n)=>v.jsx(jc,{children:e},n))})]})})},Nc=M.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    align-items: stretch;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    margin-top: 80px;
    gap: 81px;
  }
`,Uc=()=>v.jsxs(Nc,{children:[v.jsx(Ec,{}),v.jsx(Ic,{})]}),zc="/WaterTrackerFrontend/assets/bg_mob-45e67b01.png",Kc="/WaterTrackerFrontend/assets/bg_tab-1f797613.png",Wc="/WaterTrackerFrontend/assets/bg_img-f981bb04.png",$c=M.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;

  // мобіл
  background-image: url(${zc});

  // табл
  @media screen and (min-width: 768px) {
    background-image: url(${Kc});
    min-height: 100vh;
  }

  // деск
  @media screen and (min-width: 1440px) {
    background-image: url(${Wc});
    min-height: 100vh;
  }
`,Gc=M.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  // padding-bottom: 40px;
  min-height: calc(100vh - 40px);

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    // padding-bottom: 50px;
    min-height: calc(100vh - 50px);

    background-image: url(${hn});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    // padding-bottom: 109px;

    background-image: url(${hn});
    min-height: calc(100vh - 109px);
  }
`,_c=M.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  border-radius: 25px 25px 0 0;
  bottom: 0;
  right: 4px;
  padding: 12px;
  margin: 0;
  background-color: var(--secondary-sky-blue);
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
  font-family: 'Roboto-Bold';
  font-size: 18px;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  &:hover {
    height: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 80px;
    font-size: 20px;

    &:hover {
      height: 120px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
    height: 80px;
    font-size: 24px;
  }
`,Hc=M.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 288px;
  z-index: -5;

  .parallax > use {
    -webkit-animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
      infinite;
    animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
    -webkit-animation-duration: 7s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(2) {
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
    -webkit-animation-duration: 10s;
    animation-duration: 15s;
  }

  @-webkit-keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @media screen and (min-width: 768px) {
    height: 464px;
  }

  @media screen and (min-width: 1440px) {
    height: 288px;
  }
`,Yc=()=>v.jsxs(v.Fragment,{children:[" ",v.jsxs(Hc,{viewBox:"0 24 150 28",children:[v.jsx("defs",{children:v.jsx("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),v.jsxs("g",{className:"parallax",children:[v.jsx("use",{href:"#gentle-wave",x:"50",y:"0",fill:"rgba(158, 187, 255,1)"}),v.jsx("use",{href:"#gentle-wave",x:"50",y:"5",fill:"rgba(236,242,255,0.5)"})]})]})]}),Xc=M.div`
  position: fixed;
  display: block;
  width: 327.22px;
  height: 841.7px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  .bubble {
    position: absolute;
    border-radius: 50%;
  }

  .bubble:nth-child(1) {
    width: 32px;
    height: 32px;
    top: 782.34px;
    left: 260.96px;
    background: transparent;
    border: 2px solid rgba(158, 187, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(2) {
    width: 26px;
    height: 26px;
    top: 815.7px;
    left: 137.75px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(3) {
    width: 38px;
    height: 38px;
    top: 672.17px;
    left: 0;
    gap: 0px;
    opacity: 0.7px;
    background: transparent;
    border: 2px solid rgba(158, 187, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(4) {
    width: 24px;
    height: 24px;
    top: 572.1px;
    left: 286.63px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(5) {
    width: 32px;
    height: 32px;
    top: 388.14px;
    left: 36.79px;
    gap: 0px;
    opacity: 0.7px;
    background: rgba(198, 215, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(6) {
    width: 16px;
    height: 16px;
    top: 121.29px;
    left: 212.19px;
    gap: 0px;
    opacity: 0px;
    background: transparent;
    border: 2px solid rgba(236, 242, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(7) {
    width: 24px;
    height: 24px;
    top: 39.42px;
    left: 12.83px;
    gap: 0px;
    opacity: 0px;
    background: transparent;
    border: 2px solid rgba(236, 242, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(8) {
    width: 24px;
    height: 24px;
    top: 251.68px;
    left: 265.24px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(9) {
    width: 50px;
    height: 50px;
    left: 277.22px;
    gap: 0px;
    opacity: 0.7px;
    background: transparent;
    border: 2px solid rgba(198, 215, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(10) {
    display: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(11) {
    display: none;
    animation: moveUp 15s linear 0s infinite;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 680px;

    .bubble:nth-child(1) {
      width: 44px;
      height: 44px;
      top: 231px;
      left: 740px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(2) {
      width: 28px;
      height: 28px;
      top: 335px;
      left: 585px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(3) {
      width: 50px;
      height: 50px;
      top: 90px;
      left: 563px;

      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(4) {
      width: 28px;
      height: 28px;
      top: 216px;
      left: 350px;

      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(5) {
      width: 30px;
      height: 30px;
      top: 369px;
      left: 12px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(6) {
      width: 18px;
      height: 18px;
      top: 235px;
      left: -6px;
      gap: 0px;
      opacity: 0px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(7) {
      width: 28px;
      height: 28px;
      top: 539px;
      left: -20px;
      gap: 0px;
      opacity: 0px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(8) {
      display: none;
    }

    .bubble:nth-child(9) {
      display: none;
    }

    .bubble:nth-child(10) {
      display: none;
    }

    .bubble:nth-child(11) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1404px;
    height: 582px;

    .bubble:nth-child(1) {
      width: 44px;
      height: 44px;
      top: 305px;
      left: 1360px;
      background-color: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(2) {
      width: 50px;
      height: 50px;
      top: 303px;
      left: 645px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(3) {
      width: 38px;
      height: 38px;
      top: 544px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(4) {
      width: 30px;
      height: 30px;
      top: 137px;
      left: 195px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(5) {
      width: 38px;
      height: 38px;
      top: 83px;
      left: 695px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(6) {
      width: 28px;
      height: 28px;
      top: 494px;
      left: 1341px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(7) {
      width: 28px;
      height: 28px;
      top: 507px;
      left: 712px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(8) {
      width: 28px;
      height: 28px;
      top: 319px;
      left: 75px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(9) {
      width: 18px;
      height: 18px;
      top: 119px;
      left: 48px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(10) {
      width: 28px;
      height: 28px;
      top: 19px;
      left: 574px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(11) {
      width: 28px;
      height: 28px;
      left: 1313px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }
  }

  @keyframes moveUp {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(-1500%);
    }
  }
`,qc=()=>v.jsxs(Xc,{children:[v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"})]}),eu=()=>{const[t,e]=A.useState(!0),n=()=>{e(!t)};return v.jsxs(v.Fragment,{children:[t?v.jsxs(v.Fragment,{children:[v.jsx(wc,{}),v.jsx(Yc,{}),v.jsx(qc,{})]}):v.jsx($c,{children:v.jsx(Gc,{})}),v.jsxs(eo,{children:[v.jsx(Uc,{}),v.jsx(_c,{onClick:n,children:t?"Turn off animation":"Turn on animation"})]})]})};export{eu as default};
