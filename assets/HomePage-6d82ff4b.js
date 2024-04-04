import{u as n,r as h,a as $,j as e,e as P,b as y,g as A,d as H,M as I,c as Y,f as k,i as C,h as V,k as M,l as q,W as G}from"./index-341be3ca.js";import{b as U}from"./bg_img_bubbles-c11f2eb9.js";const X=n.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  margin-bottom: 16px;
`,J=n.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,R=n.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,D=n.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=n.input`
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #407bff;
  outline: none;

  &.activated {
    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #407bff;
  }

  &.error {
    border: 1px solid #ef5050;
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #ef5050;
  }

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #9ebbff;
  }
`,K=n.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Q=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`,Z=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,ee=n.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,te=n.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #fff;
  border: none;

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    margin-left: auto;
    display: block;

    width: 160px;
  }
`,ne=({closeModal:o})=>{const i=30 .toFixed(1),[s,d]=h.useState(""),r=p=>{const{value:x}=p.target,f=/^(\d+([.,]\d{0,1})?)?$/;var b=x;x.match(/^[.,]/)?b="0"+x:b=x.replace(/^0+([^.])/,"$1"),f.test(b)&&d(b)},l=$(),c=async p=>{p.preventDefault();const x=p.target.elements.dailyNorm.value*1e3;try{const{payload:f}=await l(P(x));f.user&&o()}catch(f){console.log("🚀 ~ error:",f)}};return e.jsxs("form",{onSubmit:c,children:[e.jsxs(ee,{children:["Write down how much water you will drink:",e.jsx(j,{type:"number",name:"dailyNorm",value:s,onChange:r,placeholder:i})]}),e.jsx(te,{className:"confirm",type:"submit",children:"Save"})]})},oe=()=>{const o=y(A),[t,i]=h.useState(o),[s,d]=h.useState(""),[r,l]=h.useState(""),c=f=>{const{name:b,value:a}=f.target,w=/^(\d+([.,]\d{0,1})?)?$/;var g=a;switch(b){case"gender":i(a);break;case"weight":a.match(/^[.,]/)?g="0"+a:g=a.replace(/^0+([^.])/,"$1"),w.test(g)&&d(g);break;case"activeHours":a.match(/^[.,]/)?g="0"+a:g=a.replace(/^0+([^.])/,"$1"),w.test(g)&&l(g);break}},p=t==="woman"?s*.03+r*.4:s*.04+r*.6,x=Math.round(p*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx(X,{children:"Calculate your rate:"}),e.jsxs(J,{children:[e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:t==="woman",onChange:c}),"For woman"]}),e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"man",checked:t==="man",onChange:c}),"For man"]})]}),e.jsxs(D,{children:["Your weight in kilograms:",e.jsx(j,{type:"number",name:"weight",value:s,onChange:c,placeholder:"0"})]}),e.jsxs(D,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx(j,{type:"number",name:"activeHours",value:r,onChange:c,placeholder:"0"})]}),e.jsxs(K,{children:[e.jsxs(Q,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(Z,{children:[x," L"]})]})]})})},ie=n.div`
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

  background-color: #ffffff;
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
`,re=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ae=n.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: #2f2f2f;
`,se=n(H)`
  color: #407bff;
  cursor: pointer;
`,le=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,_=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,L=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,de=n.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,ce=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,pe=n.span`
  color: #407bff;
`,he=({isModalOpen:o,closeModal:t})=>e.jsx(e.Fragment,{children:o&&e.jsx(I,{onClose:t,children:e.jsxs(ie,{children:[e.jsxs("div",{children:[e.jsxs(re,{className:"topline",children:[e.jsx(ae,{children:"My daily norm"}),e.jsx(se,{className:"close",onClick:t})]}),e.jsxs(le,{children:[e.jsxs(_,{children:["For woman: ",e.jsx(L,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs(_,{children:["For man: ",e.jsx(L,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(de,{children:e.jsxs(ce,{children:[e.jsx(pe,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(oe,{})}),e.jsx("div",{children:e.jsx(ne,{closeModal:t})})]})})}),xe=()=>{const{waterRate:o}=y(Y),[t,i]=h.useState(!1),s=()=>{i(!0)},d=()=>{i(!1)},r=(o/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:r}),e.jsx("button",{onClick:s,children:"Edit"})]}),e.jsx(he,{isModalOpen:t,closeModal:d})]})})},fe=({isModalOpen:o,closeModal:t})=>e.jsx(e.Fragment,{children:o&&e.jsx(I,{onClose:t,children:e.jsx("div",{})})}),me=n.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: center;
  gap: 23px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ue=n.div`
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
`,ge=n.button`
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
`;var F={},be=C;Object.defineProperty(F,"__esModule",{value:!0});var W=F.default=void 0,ye=be(k()),we=e;W=F.default=(0,ye.default)((0,we.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const ve=o=>o.water.month,je=o=>{var t;return(t=o.water.dayInfo)==null?void 0:t.consumedWaterPercentage},$e=()=>{const[o,t]=h.useState(!1),i=y(je),s=$(),d=()=>{t(!0)},r=()=>{t(!1)},l=i>100?100:i;return h.useEffect(()=>{s(V())},[s]),e.jsxs(me,{children:[e.jsxs(ue,{children:[e.jsx("h3",{children:"Today"}),e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${l}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${l}%`},children:[" ",e.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${l}%`})]})]})})]}),e.jsxs(ge,{onClick:d,children:[e.jsx(W,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]}),o&&e.jsx(fe,{isModalOpen:o,closeModal:r})]})},ke=()=>e.jsx("div",{children:"TodayWaterList"});var N={},Ce=C;Object.defineProperty(N,"__esModule",{value:!0});var O=N.default=void 0,Me=Ce(k()),Fe=e;O=N.default=(0,Me.default)((0,Fe.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var S={},Ne=C;Object.defineProperty(S,"__esModule",{value:!0});var B=S.default=void 0,Se=Ne(k()),ze=e;B=S.default=(0,Se.default)((0,ze.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},Re=n.div`
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
    left: ${o=>-7-o.$deltaNum}px;
  }

  @media screen and (min-width: 768px) {
    right: ${o=>o.$delta?"17px":""};
    left: ${o=>o.$delta?"":"17px"};
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
`,De=({calendarRef:o,refData:t,waterData:i={}})=>{const{dayOfMonth:s,waterRate:d,percent:r,numberRecords:l}=i,c=t==null?void 0:t.current.getBoundingClientRect().left,p=o==null?void 0:o.current.getBoundingClientRect().left;let x=!0;const f=c-p;return f<250&&(x=!1),e.jsx(Re,{$delta:x,$deltaNum:f,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:s}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[d/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:l})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},_e=n.div`
  display: flex;
  flex-direction: column;
`,Le=n.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Te=n.h2`
  color: ${m.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,T=n.button`
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
`,Ie=n.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${o=>o.$isOutlineVisible?`1px solid ${m.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,We=n.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Oe=n.span`
  font-size: 16px;
  line-height: 20px;
`,Be=n.span`
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
`,Ee=n.div`
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
`,Pe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Ae=({calendarRef:o,day:t,waterPercentage:i})=>{const[s,d]=h.useState(null),r=h.useRef(null),l=p=>{r.current&&!r.current.contains(p.target)&&d(null)};h.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const c=()=>{d(p=>p===t?null:t)};return e.jsxs(Pe,{children:[e.jsx("div",{children:s===t&&e.jsx(De,{calendarRef:o,refData:r,waterData:i},t)}),e.jsx(Ie,{ref:r,onClick:()=>c(),$isOutlineVisible:!i||i.percent<100,children:t}),e.jsx(Be,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},t)},He="#4fa94d",Ye={"aria-busy":!0,role:"progressbar"},Ve=n.div`
  display: ${o=>o.$visible?"flex":"none"};
`,qe="http://www.w3.org/2000/svg",u=242.776657104492,Ge=1.6,Ue=M`
12.5% {
  stroke-dasharray: ${u*.14}px, ${u}px;
  stroke-dashoffset: -${u*.11}px;
}
43.75% {
  stroke-dasharray: ${u*.35}px, ${u}px;
  stroke-dashoffset: -${u*.35}px;
}
100% {
  stroke-dasharray: ${u*.01}px, ${u}px;
  stroke-dashoffset: -${u*.99}px;
}
`;n.path`
  stroke-dasharray: ${u*.01}px, ${u};
  stroke-dashoffset: 0;
  animation: ${Ue} ${Ge}s linear infinite;
`;const Xe=M`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${Xe} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;n.polyline`
  stroke-width: ${o=>o.width}px;
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
`;const Je=({height:o=80,width:t=80,radius:i=9,color:s=He,ariaLabel:d="three-dots-loading",wrapperStyle:r,wrapperClass:l,visible:c=!0})=>e.jsx(Ve,{style:r,$visible:c,className:l,"data-testid":"three-dots-loading","aria-label":d,...Ye,children:e.jsxs("svg",{width:t,height:o,viewBox:"0 0 120 30",xmlns:qe,fill:s,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),Ke=M`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${Ke} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const Qe=o=>{const[t,i]=h.useState(new Date),[s]=h.useState(),d=$(),r=h.useRef(null),l=y(ve);h.useEffect(()=>{const a=`${t.getMonth()+1} - ${t.getFullYear()}`;d(q(a))},[d,t,o]);const c=()=>{const a=new Date(t.getFullYear(),t.getMonth()+1,1);i(a)},p=()=>{const a=new Date(t.getFullYear(),t.getMonth()-1,1);i(a)},x=()=>{const a=new Date;return t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},f=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),b=()=>{const a=f();return Array.from({length:a},(w,g)=>{const v=g+1,E=l==null?void 0:l.find(z=>z.dayOfMonth&&Number(z.dayOfMonth.split(",")[0])===v);return e.jsx(Ae,{calendarRef:r,day:v,waterPercentage:E},v)})};return e.jsxs(_e,{className:"calendar",ref:r,children:[e.jsxs(Le,{children:[e.jsx(Te,{children:"Month"}),s&&e.jsx(Je,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(We,{children:[e.jsx(T,{"aria-label":"Previous month",onClick:p,children:e.jsx(B,{sx:{color:m.colors.blue}})}),e.jsx(Oe,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(T,{"aria-label":"Next month",onClick:c,disabled:x(),children:e.jsx(O,{sx:{color:m.colors.blue}})})]})]}),e.jsx(Ee,{children:b()})]})},Ze=n.div`
  background-image: url(${U}); 
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
`,et=n.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,tt=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex: 1;
  }
`,it=()=>e.jsx(G,{children:e.jsxs(Ze,{children:[e.jsxs(et,{children:[e.jsx(xe,{}),e.jsx($e,{})]}),e.jsxs(tt,{children:[e.jsx(ke,{}),e.jsx(Qe,{})]})]})});export{it as default};