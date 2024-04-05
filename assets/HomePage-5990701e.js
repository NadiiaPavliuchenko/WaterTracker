import{u as n,r as x,a as k,j as e,e as A,b as v,g as Y,d as H,M as B,c as V,f as M,i as C,h as q,k as S,l as G,W as U}from"./index-af210d11.js";import{b as X}from"./bg_img_bubbles-c11f2eb9.js";const J=n.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  margin-bottom: 16px;
`,K=n.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,I=n.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,L=n.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=n.input`
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
`,Q=n.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Z=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`,ee=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,te=n.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,ne=n.button`
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
`,oe=({closeModal:o})=>{const i=30 .toFixed(1),[a,l]=x.useState(""),r=p=>{const{value:h}=p.target,f=/^(\d+([.,]\d{0,1})?)?$/;var b=h;h.match(/^[.,]/)?b="0"+h:b=h.replace(/^0+([^.])/,"$1"),f.test(b)&&l(b)},d=k(),c=async p=>{p.preventDefault();const h=p.target.elements.dailyNorm.value*1e3;try{const{payload:f}=await d(A(h));f.user&&o()}catch(f){console.log("🚀 ~ error:",f)}};return e.jsxs("form",{onSubmit:c,children:[e.jsxs(te,{children:["Write down how much water you will drink:",e.jsx($,{type:"number",name:"dailyNorm",value:a,onChange:r,placeholder:i})]}),e.jsx(ne,{className:"confirm",type:"submit",children:"Save"})]})},ie=()=>{const o=v(Y),[t,i]=x.useState(o),[a,l]=x.useState(""),[r,d]=x.useState(""),c=f=>{const{name:b,value:s}=f.target,y=/^(\d+([.,]\d{0,1})?)?$/;var m=s;switch(b){case"gender":i(s);break;case"weight":s.match(/^[.,]/)?m="0"+s:m=s.replace(/^0+([^.])/,"$1"),y.test(m)&&l(m);break;case"activeHours":s.match(/^[.,]/)?m="0"+s:m=s.replace(/^0+([^.])/,"$1"),y.test(m)&&d(m);break}},p=t==="woman"?a*.03+r*.4:a*.04+r*.6,h=Math.round(p*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx(J,{children:"Calculate your rate:"}),e.jsxs(K,{children:[e.jsxs(I,{children:[e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:t==="woman",onChange:c}),"For woman"]}),e.jsxs(I,{children:[e.jsx("input",{type:"radio",name:"gender",value:"man",checked:t==="man",onChange:c}),"For man"]})]}),e.jsxs(L,{children:["Your weight in kilograms:",e.jsx($,{type:"number",name:"weight",value:a,onChange:c,placeholder:"0"})]}),e.jsxs(L,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx($,{type:"number",name:"activeHours",value:r,onChange:c,placeholder:"0"})]}),e.jsxs(Q,{children:[e.jsxs(Z,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(ee,{children:[h," L"]})]})]})})},re=n.div`
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
`,ae=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,se=n.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: #2f2f2f;
`,le=n(H)`
  color: #407bff;
  cursor: pointer;
`,de=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,T=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,_=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,ce=n.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,pe=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,he=n.span`
  color: #407bff;
`,xe=({isModalOpen:o,closeModal:t})=>e.jsx(e.Fragment,{children:o&&e.jsx(B,{onClose:t,children:e.jsxs(re,{children:[e.jsxs("div",{children:[e.jsxs(ae,{className:"topline",children:[e.jsx(se,{children:"My daily norm"}),e.jsx(le,{className:"close",onClick:t})]}),e.jsxs(de,{children:[e.jsxs(T,{children:["For woman: ",e.jsx(_,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs(T,{children:["For man: ",e.jsx(_,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(ce,{children:e.jsxs(pe,{children:[e.jsx(he,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(ie,{})}),e.jsx("div",{children:e.jsx(oe,{closeModal:t})})]})})}),fe=()=>{const{waterRate:o}=v(V),[t,i]=x.useState(!1),a=()=>{i(!0)},l=()=>{i(!1)},r=(o/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:r}),e.jsx("button",{onClick:a,children:"Edit"})]}),e.jsx(xe,{isModalOpen:t,closeModal:l})]})})},me=({isModalOpen:o,closeModal:t})=>e.jsx(e.Fragment,{children:o&&e.jsx(B,{onClose:t,children:e.jsx("div",{})})}),ge=n.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 232px;
  margin-bottom: 40px;

  h3 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: var(--primary-blue);
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 326px;

    .box {
      flex-direction: row;
      align-items: center;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 466px;
  }
`,ue=n.div`
  */ .progress-bar-container {
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
    font-size: 12px;
    color: var(--primary-blue);
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -20px;

    color: var(--primary-blue);

    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
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
`,be=n.button`
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
`;var F={},ye=C;Object.defineProperty(F,"__esModule",{value:!0});var W=F.default=void 0,we=ye(M()),ve=e;W=F.default=(0,we.default)((0,ve.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const je=o=>o.water.month,$e=o=>{var t;return(t=o.water.dayInfo)==null?void 0:t.consumedWaterPercentage},ke=o=>o.water.dayDataLoading,Me=()=>{const[o,t]=x.useState(!1),i=v($e),a=k(),l=()=>{t(!0)},r=()=>{t(!1)},d=i>100?100:i;return x.useEffect(()=>{a(q())},[a]),e.jsx(e.Fragment,{children:e.jsxs(ge,{children:[e.jsx("h3",{children:"Today"}),e.jsxs("div",{className:"box",children:[e.jsx(ue,{children:e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${d}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${d}%`},children:[" ",e.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${d}%`})]})]})})}),e.jsxs(be,{onClick:l,children:[e.jsx(W,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]})]}),o&&e.jsx(me,{isModalOpen:o,closeModal:r})]})})},Ce=()=>e.jsx("div",{children:"TodayWaterList"});var N={},Se=C;Object.defineProperty(N,"__esModule",{value:!0});var E=N.default=void 0,Fe=Se(M()),Ne=e;E=N.default=(0,Fe.default)((0,Ne.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var D={},De=C;Object.defineProperty(D,"__esModule",{value:!0});var P=D.default=void 0,ze=De(M()),Re=e;P=D.default=(0,ze.default)((0,Re.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const g={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},Ie=n.div`
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
    color: ${g.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${g.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${g.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,Le=({calendarRef:o,refData:t,waterData:i={}})=>{const{dayOfMonth:a,waterRate:l,percent:r,numberRecords:d}=i,c=t==null?void 0:t.current.getBoundingClientRect().left,p=o==null?void 0:o.current.getBoundingClientRect().left;let h=!0;const f=c-p;return f<200&&(h=!1),e.jsx(Ie,{$delta:h,$deltaNum:f,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:a}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[l/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:d})]})]}):e.jsx("h3",{children:"You dont have records on this day."})})},Te=n.div`
  display: flex;
  flex-direction: column;
`,_e=n.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Oe=n.h2`
  color: ${g.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,O=n.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${g.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${g.colors.violet};
    cursor: not-allowed;
  }
`,Be=n.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${o=>o.$isOutlineVisible?`1px solid ${g.colors.orange}`:"none"};
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
  color: ${g.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ee=n.span`
  font-size: 16px;
  line-height: 20px;
`,Pe=n.span`
  color: ${g.colors.violet};

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
`,Ae=n.div`
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
`,Ye=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,He=({calendarRef:o,day:t,consumedWaterPercentag:i})=>{const[a,l]=x.useState(null),r=x.useRef(null),d=p=>{r.current&&!r.current.contains(p.target)&&l(null)};x.useEffect(()=>(document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}),[]);const c=()=>{l(p=>p===t?null:t)};return e.jsxs(Ye,{children:[e.jsx("div",{children:a===t&&e.jsx(Le,{calendarRef:o,refData:r,waterData:i},t)}),e.jsx(Be,{ref:r,onClick:()=>c(),$isOutlineVisible:!i||i.percent<100,children:t}),e.jsx(Pe,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},t)},Ve="#4fa94d",qe={"aria-busy":!0,role:"progressbar"},Ge=n.div`
  display: ${o=>o.$visible?"flex":"none"};
`,Ue="http://www.w3.org/2000/svg",u=242.776657104492,Xe=1.6,Je=S`
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
  animation: ${Je} ${Xe}s linear infinite;
`;const Ke=S`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${Ke} 0.75s steps(12, end) infinite;
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
`;const Qe=({height:o=80,width:t=80,radius:i=9,color:a=Ve,ariaLabel:l="three-dots-loading",wrapperStyle:r,wrapperClass:d,visible:c=!0})=>e.jsx(Ge,{style:r,$visible:c,className:d,"data-testid":"three-dots-loading","aria-label":l,...qe,children:e.jsxs("svg",{width:t,height:o,viewBox:"0 0 120 30",xmlns:Ue,fill:a,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),Ze=S`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${Ze} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const et=o=>{const[t,i]=x.useState(new Date),a=k(),l=x.useRef(null),r=v(je),d=v(ke);x.useEffect(()=>{const s=new Date(t.getFullYear(),t.getMonth(),1),y=new Date(t.getFullYear(),t.getMonth()+1,0),m=s.toISOString().split("T")[0],w=y.toISOString().split("T")[0],j={startDate:m,endDate:w};a(G(j)),console.log(j)},[a,t,o]);const c=()=>{const s=new Date(t.getFullYear(),t.getMonth()+1,1);i(s)},p=()=>{const s=new Date(t.getFullYear(),t.getMonth()-1,1);i(s)},h=()=>{const s=new Date;return t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear()},f=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),b=()=>{const s=f();return Array.from({length:s},(y,m)=>{var z;const w=m+1,j=((z=r==null?void 0:r.find(R=>R.dayOfMonth&&Number(R.dayOfMonth.split(",")[0])===w))==null?void 0:z.consumedWaterPercentage)||0;return e.jsx(He,{calendarRef:l,day:w,consumedWaterPercentag:j},w)})};return e.jsxs(Te,{className:"calendar",ref:l,children:[e.jsxs(_e,{children:[e.jsx(Oe,{children:"Month"}),d&&e.jsx(Qe,{height:"60",width:"60",radius:"9",color:g.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(We,{children:[e.jsx(O,{"aria-label":"Previous month",onClick:p,children:e.jsx(P,{sx:{color:g.colors.blue}})}),e.jsx(Ee,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(O,{"aria-label":"Next month",onClick:c,disabled:h(),children:e.jsx(E,{sx:{color:g.colors.blue}})})]})]}),e.jsx(Ae,{children:b()})]})},tt=n.div`
  background-image: url(${X});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,nt=n.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,ot=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`,at=()=>e.jsx(U,{children:e.jsxs(tt,{children:[e.jsxs(nt,{children:[e.jsx(fe,{}),e.jsx(Me,{})]}),e.jsxs(ot,{children:[e.jsx(Ce,{}),e.jsx(et,{})]})]})});export{at as default};
