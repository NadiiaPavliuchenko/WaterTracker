import{r as x,u as S,j as e,e as O,a as v,g as B,b as a,M as z,d as T,c as W,f as w,i as $,h as k,k as E,W as P}from"./index-6027f88a.js";import{b as A}from"./bg_img_bubbles-c11f2eb9.js";const H=({closeModal:n})=>{const r=30 .toFixed(1),[s,l]=x.useState(""),i=h=>{const{value:p}=h.target,u=/^(\d+([.,]\d{0,1})?)?$/;var b=p;p.match(/^[.,]/)?b="0"+p:b=p.replace(/^0+([^.])/,"$1"),u.test(b)&&l(b)},c=S(),d=async h=>{h.preventDefault();const p=h.target.elements.dailyNorm.value*1e3;try{const{payload:u}=await c(O(p));u.user&&n()}catch(u){console.log("🚀 ~ error:",u)}};return e.jsxs("form",{onSubmit:d,children:[e.jsxs("label",{children:["Write down how much water you will drink:",e.jsx("input",{type:"number",name:"dailyNorm",value:s,onChange:i,placeholder:r})]}),e.jsx("button",{className:"confirm",type:"submit",children:"Save"})]})},Y=()=>{const n=v(B),[t,r]=x.useState(n),[s,l]=x.useState(""),[i,c]=x.useState(""),d=u=>{const{name:b,value:o}=u.target,j=/^(\d+([.,]\d{0,1})?)?$/;var g=o;switch(b){case"gender":r(o);break;case"weight":o.match(/^[.,]/)?g="0"+o:g=o.replace(/^0+([^.])/,"$1"),j.test(g)&&l(g);break;case"activeHours":o.match(/^[.,]/)?g="0"+o:g=o.replace(/^0+([^.])/,"$1"),j.test(g)&&c(g);break}},h=t==="woman"?s*.03+i*.4:s*.04+i*.6,p=Math.round(h*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx("h3",{children:"Calculate your rate:"}),e.jsxs("label",{children:["Gender",e.jsxs("label",{children:["For woman",e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:t==="woman",onChange:d})]}),e.jsxs("label",{children:["For man",e.jsx("input",{type:"radio",name:"gender",value:"man",checked:t==="man",onChange:d})]})]}),e.jsxs("label",{htmlFor:"",children:["Your weight in kilograms:",e.jsx("input",{type:"number",name:"weight",value:s,onChange:d,placeholder:"0"})]}),e.jsxs("label",{htmlFor:"",children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx("input",{type:"number",name:"activeHours",value:i,onChange:d,placeholder:"0"})]}),e.jsxs("p",{children:["The required amount of water in liters per day:"," ",e.jsxs("span",{children:[p," L"]})]})]})})},V=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  height: 816px;
  padding: 24px 12px;

  background-color: #fff;
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
`,q=({isModalOpen:n,closeModal:t})=>e.jsx(e.Fragment,{children:n&&e.jsx(z,{onClose:t,children:e.jsxs(V,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"topline",children:[e.jsx("h2",{children:"My daily norm"}),e.jsx(T,{className:"close",onClick:t})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["For woman: ",e.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man: ",e.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx("div",{children:e.jsxs("p",{children:[e.jsx("span",{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(Y,{})}),e.jsx("div",{children:e.jsx(H,{closeModal:t})})]})})}),G=()=>{const{waterRate:n}=v(W),[t,r]=x.useState(!1),s=()=>{r(!0)},l=()=>{r(!1)},i=(n/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:i}),e.jsx("button",{onClick:s,children:"Edit"})]}),e.jsx(q,{isModalOpen:t,closeModal:l})]})})},U=({isModalOpen:n,closeModal:t})=>e.jsx(e.Fragment,{children:n&&e.jsx(z,{onClose:t,children:e.jsx("div",{})})}),X=a.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: center;
  gap: 23px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,J=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  height: 100%;

  h3 {
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 8px;
    color: var(--primary-blue);
  }

  .progress-bar-container {
    display: flex;
    flex-direction: column;
    width: 280px;
    margin-bottom: 16px;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 8px;
    background-color: rgba(215, 227, 255, 1);
  }

  .progress {
    height: 100%;
    background-color: rgba(158, 187, 255, 1);
    text-align: center;
    line-height: 20px;
    font-size: 12px;
  }

  .progress-text {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: var(--primary-blue);
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -20px;
    font-size: 12px;
    color: #666666;
  }
  .marker-100 {
    right: -50px;
  }

  .marker-0 {
    left: 0;
  }

  .marker-50 {
    left: 50%;
    transform: translateX(-50%);
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
    background-color: rgba(255, 255, 255, 1); /* Цвет бегунка */
    border: 1px solid rgba(64, 123, 255, 1);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 768px) {
    h3 {
      margin-bottom: 16px;
    }
    .progress-bar-container {
      width: 336px;
    }
  }

  @media screen and (min-width: 1440px) {
    h3 {
      margin-bottom: 18px;
    }
    .progress-bar-container {
      width: 340px;
    }
  }
`,K=a.button`
  width: 280px;
  height: 36px;
  padding: 6px 76px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-color: var(--primary-blue);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: var(--primary-white);
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    gap: 10px;
    padding: 10px 104px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }
`;var C={},Q=$;Object.defineProperty(C,"__esModule",{value:!0});var _=C.default=void 0,Z=Q(w()),ee=e;_=C.default=(0,Z.default)((0,ee.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const te=n=>n.water.month,ne=n=>{var t;return(t=n.water.dayInfo)==null?void 0:t.consumedWaterPercentage},re=()=>{const[n,t]=x.useState(!1),r=v(ne);console.log("progressPercentage :>> ",r);const s=()=>{t(!0)},l=()=>{t(!1)},i=r>100?100:r;return e.jsxs(X,{children:[e.jsxs(J,{children:[e.jsx("h3",{children:"Today"}),e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${i}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${i}%`},children:[" ",e.jsx("p",{className:"progress-text",children:r>100?`${r}%`:`${i}%`})]})]})})]}),e.jsxs(K,{onClick:s,children:[e.jsx(_,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]}),n&&e.jsx(U,{isModalOpen:n,closeModal:l})]})},ie=()=>e.jsx("div",{children:"TodayWaterList"});var M={},ae=$;Object.defineProperty(M,"__esModule",{value:!0});var R=M.default=void 0,oe=ae(w()),se=e;R=M.default=(0,oe.default)((0,se.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var F={},le=$;Object.defineProperty(F,"__esModule",{value:!0});var L=F.default=void 0,ce=le(w()),de=e;L=F.default=(0,ce.default)((0,de.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},he=a.div`
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
    left: ${n=>-7-n.$deltaNum}px;
  }

  @media screen and (min-width: 768px) {
    right: ${n=>n.$delta?"17px":""};
    left: ${n=>n.$delta?"":"17px"};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 56px;
  }

  h3 {
    color: ${m.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${m.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${m.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,pe=({calendarRef:n,refData:t,waterData:r={}})=>{const{dayOfMonth:s,waterRate:l,percent:i,numberRecords:c}=r,d=t==null?void 0:t.current.getBoundingClientRect().left,h=n==null?void 0:n.current.getBoundingClientRect().left;let p=!0;const u=d-h;return u<250&&(p=!1),e.jsx(he,{$delta:p,$deltaNum:u,children:Object.values(r).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:s}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[l/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[i>100?100:i,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:c})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},xe=a.div`
  display: flex;
  flex-direction: column;
`,ue=a.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,me=a.h2`
  color: ${m.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,D=a.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${m.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${m.colors.violet};
    cursor: not-allowed;
  }
`,fe=a.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${n=>n.$isOutlineVisible?`1px solid ${m.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,ge=a.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,be=a.span`
  font-size: 16px;
  line-height: 20px;
`,ve=a.span`
  color: ${m.colors.violet};

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
`,je=a.div`
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
`,ye=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,we=({calendarRef:n,day:t,waterPercentage:r})=>{const[s,l]=x.useState(null),i=x.useRef(null),c=h=>{i.current&&!i.current.contains(h.target)&&l(null)};x.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const d=()=>{l(h=>h===t?null:t)};return e.jsxs(ye,{children:[e.jsx("div",{children:s===t&&e.jsx(pe,{calendarRef:n,refData:i,waterData:r},t)}),e.jsx(fe,{ref:i,onClick:()=>d(),$isOutlineVisible:!r||r.percent<100,children:t}),e.jsx(ve,{children:r?`${Math.min(r.percent,100)}%`:"0%"})]},t)},$e="#4fa94d",ke={"aria-busy":!0,role:"progressbar"},Ce=a.div`
  display: ${n=>n.$visible?"flex":"none"};
`,Me="http://www.w3.org/2000/svg",f=242.776657104492,Fe=1.6,Ne=k`
12.5% {
  stroke-dasharray: ${f*.14}px, ${f}px;
  stroke-dashoffset: -${f*.11}px;
}
43.75% {
  stroke-dasharray: ${f*.35}px, ${f}px;
  stroke-dashoffset: -${f*.35}px;
}
100% {
  stroke-dasharray: ${f*.01}px, ${f}px;
  stroke-dashoffset: -${f*.99}px;
}
`;a.path`
  stroke-dasharray: ${f*.01}px, ${f};
  stroke-dashoffset: 0;
  animation: ${Ne} ${Fe}s linear infinite;
`;const De=k`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${De} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
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
`;const Se=({height:n=80,width:t=80,radius:r=9,color:s=$e,ariaLabel:l="three-dots-loading",wrapperStyle:i,wrapperClass:c,visible:d=!0})=>e.jsx(Ce,{style:i,$visible:d,className:c,"data-testid":"three-dots-loading","aria-label":l,...ke,children:e.jsxs("svg",{width:t,height:n,viewBox:"0 0 120 30",xmlns:Me,fill:s,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(r)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(r)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),ze=k`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${ze} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const _e=n=>{const[t,r]=x.useState(new Date),[s]=x.useState(),l=S(),i=x.useRef(null),c=v(te);x.useEffect(()=>{const o=`${t.getMonth()+1} - ${t.getFullYear()}`;l(E(o))},[l,t,n]);const d=()=>{const o=new Date(t.getFullYear(),t.getMonth()+1,1);r(o)},h=()=>{const o=new Date(t.getFullYear(),t.getMonth()-1,1);r(o)},p=()=>{const o=new Date;return t.getMonth()===o.getMonth()&&t.getFullYear()===o.getFullYear()},u=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),b=()=>{const o=u();return Array.from({length:o},(j,g)=>{const y=g+1,I=c==null?void 0:c.find(N=>N.dayOfMonth&&Number(N.dayOfMonth.split(",")[0])===y);return e.jsx(we,{calendarRef:i,day:y,waterPercentage:I},y)})};return e.jsxs(xe,{className:"calendar",ref:i,children:[e.jsxs(ue,{children:[e.jsx(me,{children:"Month"}),s&&e.jsx(Se,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(ge,{children:[e.jsx(D,{"aria-label":"Previous month",onClick:h,children:e.jsx(L,{sx:{color:m.colors.blue}})}),e.jsx(be,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(D,{"aria-label":"Next month",onClick:d,disabled:p(),children:e.jsx(R,{sx:{color:m.colors.blue}})})]})]}),e.jsx(je,{children:b()})]})},Re=a.div`
  background-image: url(${A}); 
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex-direction: row;
  }
`,Le=a.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Ie=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex: 1;
  }
`,Te=()=>e.jsx(P,{children:e.jsxs(Re,{children:[e.jsxs(Le,{children:[e.jsx(G,{}),e.jsx(re,{})]}),e.jsxs(Ie,{children:[e.jsx(ie,{}),e.jsx(_e,{})]})]})});export{Te as default};
