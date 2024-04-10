import{r as S,u as l,j as a,z as et,s as K,A as nt,W as it}from"./index-a01b33ec.js";import{i as at,f as ot,c as st,m as rt,a as lt,S as ct,H as ut,v as R,s as dt,b as pt,d as At,e as ht,g as ft,h as mt,r as gt,j as P,k as xt,l as bt,p as vt,n as yt,o as U,q as wt,u as Y,t as X}from"./motion-26d97af0.js";import{B as jt}from"./BubblesAnimation-636f0674.js";function It(t){return S.useEffect(()=>()=>t(),[])}function M(t,e,n){var i;if(typeof t=="string"){let o=document;e&&(at(!!e.current),o=e.current),n?((i=n[t])!==null&&i!==void 0||(n[t]=o.querySelectorAll(t)),t=n[t]):t=o.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function Bt(t,e){let n;const i=()=>{const{currentTime:o}=e,r=(o===null?0:o.value)/100;n!==r&&t(r),n=r};return ot.update(i,!0),()=>st(i)}const Et=rt(()=>window.ScrollTimeline!==void 0);class N{constructor(e){this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>{if(Et()&&i.attachTimeline)i.attachTimeline(e);else return i.pause(),Bt(o=>{i.time=i.duration*o},e)});return()=>{n.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Wt(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=lt(t)?new ct(e,{enableHardwareAcceleration:!1}):new ut(e,{enableHardwareAcceleration:!0});n.mount(t),R.set(t,n)}function Xt(t,e=100){const n=dt({keyframes:[0,e],...t}),i=Math.min(pt(n),At);return{type:"keyframes",ease:o=>n.next(i*o).value/e,duration:ht(i)}}function F(t,e,n,i){var o;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(o=i.get(e))!==null&&o!==void 0?o:t}const Ct=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function Kt(t,e){return ft(t)?t[Ct(0,t.length,e)]:t}function Rt(t,e,n){for(let i=0;i<t.length;i++){const o=t[i];o.at>e&&o.at<n&&(gt(t,o),i--)}}function St(t,e,n,i,o,s){Rt(t,o,s);for(let r=0;r<e.length;r++)t.push({value:e[r],at:mt(o,s,i[r]),easing:Kt(n,r)})}function Vt(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const zt="easeInOut";function Tt(t,{defaultTransition:e={},...n}={},i){const o=e.duration||.3,s=new Map,r=new Map,h={},u=new Map;let B=0,d=0,k=0;for(let w=0;w<t.length;w++){const f=t[w];if(typeof f=="string"){u.set(f,d);continue}else if(!Array.isArray(f)){u.set(f.name,F(d,f.at,B,u));continue}let[y,m,p={}]=f;p.at!==void 0&&(d=F(d,p.at,B,u));let A=0;const j=(g,x,v,E=0,W=0)=>{const c=Qt(g),{delay:C=0,times:I=xt(c),type:$="keyframes",..._}=x;let{ease:V=e.ease||"easeOut",duration:b}=x;const z=typeof C=="function"?C(E,W):C,T=c.length;if(T<=2&&$==="spring"){let q=100;if(T===2&&qt(c)){const tt=c[1]-c[0];q=Math.abs(tt)}const H={..._};b!==void 0&&(H.duration=yt(b));const L=Xt(H,q);V=L.ease,b=L.duration}b??(b=o);const Q=d+z,D=Q+b;I.length===1&&I[0]===0&&(I[1]=1);const O=I.length-c.length;O>0&&bt(I,O),c.length===1&&c.unshift(null),St(v,c,V,I,Q,D),A=Math.max(z+b,A),k=Math.max(D,k)};if(P(y)){const g=J(y,r);j(m,p,G("default",g))}else{const g=M(y,i,h),x=g.length;for(let v=0;v<x;v++){m=m,p=p;const E=g[v],W=J(E,r);for(const c in m)j(m[c],Dt(p,c),G(c,W),v,x)}}B=d,d+=A}return r.forEach((w,f)=>{for(const y in w){const m=w[y];m.sort(Vt);const p=[],A=[],j=[];for(let x=0;x<m.length;x++){const{at:v,value:E,easing:W}=m[x];p.push(E),A.push(vt(0,k,v)),j.push(W||"easeOut")}A[0]!==0&&(A.unshift(0),p.unshift(p[0]),j.unshift(zt)),A[A.length-1]!==1&&(A.push(1),p.push(null)),s.has(f)||s.set(f,{keyframes:{},transition:{}});const g=s.get(f);g.keyframes[y]=p,g.transition[y]={...e,duration:k,ease:j,times:A,...n}}}),s}function J(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function G(t,e){return e[t]||(e[t]=[]),e[t]}function Qt(t){return Array.isArray(t)?t:[t]}function Dt(t,e){return t[e]?{...t,...t[e]}:{...t}}const Ot=t=>typeof t=="number",qt=t=>t.every(Ot);function Z(t,e,n,i){const o=M(t,i),s=o.length,r=[];for(let h=0;h<s;h++){const u=o[h];R.has(u)||kt(u);const B=R.get(u),d={...n};typeof d.delay=="function"&&(d.delay=d.delay(h,s)),r.push(...wt(B,{...e,transition:d},{}))}return new N(r)}const Ht=t=>Array.isArray(t)&&Array.isArray(t[0]);function Lt(t,e,n){const i=[];return Tt(t,e,n).forEach(({keyframes:s,transition:r},h)=>{let u;P(h)?u=U(h,s.default,r.default):u=Z(h,s,r),i.push(u)}),new N(i)}const Yt=t=>{function e(n,i,o){let s;return Ht(n)?s=Lt(n,i,t):Wt(i)?s=Z(n,i,o,t):s=U(n,i,o),t&&t.animations.push(s),s}return e};function Ft(){const t=Y(()=>({current:null,animations:[]})),e=Y(()=>Yt(t));return It(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}const Jt=l.div`
  position: absolute;
  display: block;
  width: 374px;
  height: 100vh;
  bottom: 30px;
  right: 5%;
  z-index: -1;
  overflow: hidden;
`,Gt="/WaterTrackerFrontend/assets/bottle-146696e4.png",Pt="/WaterTrackerFrontend/assets/splash-b94fa0f6.png",Ut="data:image/png;base64,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",Mt="data:image/png;base64,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",Nt=()=>{const[t,e]=Ft();return S.useEffect(()=>{(async()=>{const i={duration:5,ease:"easeInOut"},o={bottle:{y:[-2e3,400,-20,15,0],rotateZ:[45,0,-45,15,-5,0]}};await e(t.current,o.bottle,i),e(t.current,{rotateZ:[0,5,0,-10,0],y:[0,-5,5,10,5,0,-5,-10,-4,0]},{duration:10,repeat:1/0,ease:"easeInOut"})})()}),a.jsx(a.Fragment,{children:a.jsxs(Jt,{children:[a.jsx(X.img,{initial:{y:-2e3,rotateZ:-90},ref:t,src:Gt,alt:"",height:"240px",width:"108px",style:{position:"absolute",bottom:"6px",right:"135.5px",zIndex:"3"}}),a.jsx(X.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.3,ease:"easeInOut"},src:Pt,width:"254.15px",height:"83.93px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),a.jsx(X.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.4,ease:"easeInOut"},src:Ut,width:"169.54px",height:"103.54px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),a.jsx(X.img,{initial:{width:"100px"},animate:{width:["100px","0px","254px","90px"]},transition:{duration:5,delay:0,ease:"easeInOut"},src:Mt,width:"254px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"2"}})]})})},Zt=l.h1`
  display: none;
`,$t=l.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 16px;

  @media ${({theme:t})=>t.device.tablet} {
    font-size: 36px;
    line-height: 42px;
  }
`,_t=l.p`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;

  @media ${({theme:t})=>t.device.tablet} {
    font-size: 26px;
    line-height: 32px;
  }
`,te=l.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 24px;

  @media ${({theme:t})=>t.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${({theme:t})=>t.device.desktop} {
    flex-direction: column;
    justify-content: center;
  }
`,ee=l.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,ne=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  @media ${({theme:t})=>t.device.tablet} {
    width: 100%;
    margin: 0;
  }

  @media ${({theme:t})=>t.device.desktop} {
    width: 439px;
  }
`,ie=l.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`,ae=l.button`
  width: 100%;
  padding: 8px 30px;
  color: ${({theme:t})=>t.color.white};
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  background-color: ${({theme:t})=>t.color.blue};
  box-shadow: ${({theme:t})=>t.boxShadow.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({theme:t})=>t.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:t})=>t.boxShadow.activeButton};
  }

  @media ${({theme:t})=>t.device.tablet} {
    width: 336px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media ${({theme:t})=>t.device.desktop} {
    width: 384px;
  }
`,oe=l.svg`
  stroke: ${({theme:t})=>t.color.blue};
  fill: none;
  width: 32px;
  height: 32px;

  @media ${({theme:t})=>t.device.tablet} {
    width: 40px;
    height: 40px;
  }
`,se=()=>{const t=et(),e=[{text:"Habit drive",id:`${K}#calendar`},{text:"View statistics",id:`${K}#presentation-chart-bar`},{text:"Personal rate setting",id:`${K}#wrench-screwdriver`}];function n(){t("/signup")}return a.jsxs(ne,{children:[a.jsx(Zt,{children:"Hidden"}),a.jsx($t,{children:"Water consumption tracker"}),a.jsx(_t,{children:"Record daily water intake and track"}),a.jsx(ie,{children:"Tracker Benefits"}),a.jsx(te,{children:e.map(({id:i,text:o},s)=>a.jsxs(ee,{children:[a.jsx(oe,{children:a.jsx("use",{href:i})}),o]},s))}),a.jsx(ae,{type:"button",onClick:n,children:"Try tracker"})]})},re=l.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`,le=l.li`
  font-size: 16px;
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
    background-color: ${({theme:t})=>t.color.blue};
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`,ce=l.div`
  display: block;
  margin: 0;
`,ue=l.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  padding: 24px 16px;
  background-color: ${({theme:t})=>t.color.lavender};
  box-shadow: ${({theme:t})=>t.boxShadow.hoverButton};
  border-radius: 10px;

  @media ${({theme:t})=>t.device.tablet} {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,de=l.ul`
  list-style-type: none;
  padding-left: 0;
`,pe=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return a.jsx(ce,{children:a.jsxs(ue,{children:[a.jsx(re,{children:"Why drink water"}),a.jsx(de,{children:t.map((e,n)=>a.jsx(le,{children:e},n))})]})})},Ae=l.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 24px;

  @media ${({theme:t})=>t.device.tablet} {
    gap: 60px;
    align-items: stretch;
    margin-top: 40px;
  }

  @media ${({theme:t})=>t.device.desktop} {
    height: 582px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
    gap: 81px;
  }
`,he=()=>a.jsxs(Ae,{children:[a.jsx(se,{}),a.jsx(pe,{})]}),fe=l.div`
  position: absolute;
  display: block;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;

  // мобіл
  background-image: ${({theme:t})=>t.backgroundImage.welcomeMob};

  // табл
  @media ${({theme:t})=>t.device.tablet} {
    background-image: ${({theme:t})=>t.backgroundImage.welcomeTab};
    min-height: 100vh;
  }

  // деск
  @media ${({theme:t})=>t.device.desktop} {
    background-image: ${({theme:t})=>t.backgroundImage.welcomeDesk};
    min-height: 100vh;
  }
`,me=l.div`
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
  min-height: calc(100vh - 40px);

  // табл
  @media ${({theme:t})=>t.device.tablet} {
    padding-top: 40px;
    min-height: calc(100vh - 50px);
  }

  // деск
  @media ${({theme:t})=>t.device.desktop} {
    padding-top: 49px;
    background-image: ${({theme:t})=>t.backgroundImage.bodyBubblesDesk};
    min-height: calc(100vh - 109px);
  }
`,ge=l.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 25px;
  bottom: 0;
  right: 4px;
  padding: 12px;
  margin: 0;
  background-color: ${({theme:t})=>t.color.skyBlue};
  color: ${({theme:t})=>t.color.blue};
  font-family: 'Roboto-Bold';
  font-size: 12px;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  &:hover {
    height: 100px;
  }
  @media ${({theme:t})=>t.device.tabletMax} {
    border-radius: 25px;
  }

  @media ${({theme:t})=>t.device.tablet} {
    width: 120px;
    height: 80px;
    font-size: 20px;

    &:hover {
      height: 120px;
    }
  }

  @media ${({theme:t})=>t.device.desktop} {
    width: 160px;
    height: 80px;
    font-size: 24px;
    border-radius: 25px 25px 0 0;
  }
`,ye=()=>{const[t,e]=S.useState(!1),n=()=>{e(!t)};return a.jsxs(a.Fragment,{children:[t?a.jsxs(a.Fragment,{children:[a.jsx(Nt,{}),a.jsx(nt,{}),a.jsx(jt,{})]}):a.jsx(fe,{children:a.jsx(me,{})}),a.jsxs(it,{children:[a.jsx(he,{}),a.jsx(ge,{onClick:n,children:t?"Turn off animation":"Turn on animation"})]})]})};export{ye as default};
