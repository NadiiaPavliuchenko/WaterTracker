import{u as t,r as h,a as $,j as e,e as A,f as W,b as w,g as Y,d as H,M as O,c as V,h as M,i as C,k as q,l as F,m as G,W as U}from"./index-c25b9bb8.js";import{b as X}from"./bg_img_bubbles-c11f2eb9.js";const J=t.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  margin-bottom: 16px;
`,K=t.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,R=t.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,L=t.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,k=t.input`
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
`,Q=t.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Z=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`,ee=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,te=t.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,ne=t.button`
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
`,oe=({closeModal:o})=>{const i=30 .toFixed(1),[a,d]=h.useState(""),r=p=>{const{value:x}=p.target,g=/^(\d+([.,]\d{0,1})?)?$/;var b=x;x.match(/^[.,]/)?b="0"+x:b=x.replace(/^0+([^.])/,"$1"),g.test(b)&&d(b)},s=$(),c=async p=>{p.preventDefault();const x=p.target.elements.dailyNorm.value*1e3;try{const{payload:g}=await s(A(x));g.user&&(s(W()),o())}catch(g){console.log("🚀 ~ error:",g)}};return e.jsxs("form",{onSubmit:c,children:[e.jsxs(te,{children:["Write down how much water you will drink:",e.jsx(k,{type:"number",name:"dailyNorm",value:a,onChange:r,placeholder:i})]}),e.jsx(ne,{className:"confirm",type:"submit",children:"Save"})]})},ie=()=>{const o=w(Y),[n,i]=h.useState(o),[a,d]=h.useState(""),[r,s]=h.useState(""),c=g=>{const{name:b,value:l}=g.target,y=/^(\d+([.,]\d{0,1})?)?$/;var f=l;switch(b){case"gender":i(l);break;case"weight":l.match(/^[.,]/)?f="0"+l:f=l.replace(/^0+([^.])/,"$1"),y.test(f)&&d(f);break;case"activeHours":l.match(/^[.,]/)?f="0"+l:f=l.replace(/^0+([^.])/,"$1"),y.test(f)&&s(f);break}},p=n==="woman"?a*.03+r*.4:a*.04+r*.6,x=Math.round(p*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx(J,{children:"Calculate your rate:"}),e.jsxs(K,{children:[e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:n==="woman",onChange:c}),"For woman"]}),e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"man",checked:n==="man",onChange:c}),"For man"]})]}),e.jsxs(L,{children:["Your weight in kilograms:",e.jsx(k,{type:"number",name:"weight",value:a,onChange:c,placeholder:"0"})]}),e.jsxs(L,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx(k,{type:"number",name:"activeHours",value:r,onChange:c,placeholder:"0"})]}),e.jsxs(Q,{children:[e.jsxs(Z,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(ee,{children:[x," L"]})]})]})})},re=t.div`
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
`,ae=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,se=t.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: #2f2f2f;
`,le=t(H)`
  color: #407bff;
  cursor: pointer;
`,de=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,T=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,I=t.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,ce=t.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,pe=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,he=t.span`
  color: #407bff;
`,xe=({isModalOpen:o,closeModal:n})=>e.jsx(e.Fragment,{children:o&&e.jsx(O,{onClose:n,children:e.jsxs(re,{children:[e.jsxs("div",{children:[e.jsxs(ae,{className:"topline",children:[e.jsx(se,{children:"My daily norm"}),e.jsx(le,{className:"close",onClick:n})]}),e.jsxs(de,{children:[e.jsxs(T,{children:["For woman: ",e.jsx(I,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs(T,{children:["For man: ",e.jsx(I,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(ce,{children:e.jsxs(pe,{children:[e.jsx(he,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(ie,{})}),e.jsx("div",{children:e.jsx(oe,{closeModal:n})})]})})}),fe=t.div`
  display: inline-flex;
  padding: 8px 20px;
  height: 74px;
  width: 150px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 12px;
  border-radius: 10px;
  border: 1px solid var(--Secondary-color-2, #ecf2ff);
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  /* margin-bottom: 232px; */
`,ge=t.h2`
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,me=t.button`
  display: block;
  padding: 0;
  color: #8baeff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  background: transparent;
  border: none;

  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }

  &:focus {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`,ue=t.p`
 color:  #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,be=t.div`
 display: flex;
  gap: 12px;
`,ye=()=>{const{dailyWaterGoal:o}=w(V),[n,i]=h.useState(!1),a=$(),d=()=>{i(!0)},r=()=>{i(!1)},s=(o/1e3).toFixed(1)+" L";return h.useEffect(()=>{a(W())},[a]),e.jsxs(fe,{children:[e.jsx(ge,{children:"My daily norma: "}),e.jsxs(be,{children:[e.jsx(ue,{children:s}),e.jsx(me,{onClick:d,children:"Edit"})]}),e.jsx(xe,{isModalOpen:n,closeModal:r})]})},we=({isModalOpen:o,closeModal:n})=>e.jsx(e.Fragment,{children:o&&e.jsx(O,{onClose:n,children:e.jsx("div",{})})}),ve=t.div`
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
`,je=t.div`
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
`,$e=t.button`
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
`;var S={},ke=C;Object.defineProperty(S,"__esModule",{value:!0});var B=S.default=void 0,Me=ke(M()),Ce=e;B=S.default=(0,Me.default)((0,Ce.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const Fe=o=>o.water.month,Se=o=>{var n;return(n=o.water.dayInfo)==null?void 0:n.consumedWaterPercentage},De=o=>o.water.dayDataLoading,Ne=()=>{const[o,n]=h.useState(!1),i=w(Se),a=$(),d=()=>{n(!0)},r=()=>{n(!1)},s=i>100?100:i;return h.useEffect(()=>{a(q())},[a]),e.jsx(e.Fragment,{children:e.jsxs(ve,{children:[e.jsx("h3",{children:"Today"}),e.jsxs("div",{className:"box",children:[e.jsx(je,{children:e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${s}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${s}%`},children:[" ",e.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${s}%`})]})]})})}),e.jsxs($e,{onClick:d,children:[e.jsx(B,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]})]}),o&&e.jsx(we,{isModalOpen:o,closeModal:r})]})})},ze=()=>e.jsx("div",{children:"TodayWaterList"});var D={},Re=C;Object.defineProperty(D,"__esModule",{value:!0});var E=D.default=void 0,Le=Re(M()),Te=e;E=D.default=(0,Le.default)((0,Te.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var N={},Ie=C;Object.defineProperty(N,"__esModule",{value:!0});var P=N.default=void 0,_e=Ie(M()),We=e;P=N.default=(0,_e.default)((0,We.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},Oe=t.div`
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
`,Be=({calendarRef:o,refData:n,waterData:i={}})=>{const{dayOfMonth:a,waterRate:d,percent:r,numberRecords:s}=i,c=n==null?void 0:n.current.getBoundingClientRect().left,p=o==null?void 0:o.current.getBoundingClientRect().left;let x=!0;const g=c-p;return g<200&&(x=!1),e.jsx(Oe,{$delta:x,$deltaNum:g,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:a}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[d/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:s})]})]}):e.jsx("h3",{children:"You dont have records on this day."})})},Ee=t.div`
  display: flex;
  flex-direction: column;
`,Pe=t.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Ae=t.h2`
  color: ${m.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,_=t.button`
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
`,Ye=t.div`
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
`,He=t.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ve=t.span`
  font-size: 16px;
  line-height: 20px;
`,qe=t.span`
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
`,Ge=t.div`
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
`,Ue=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Xe=({calendarRef:o,day:n,waterPercentage:i})=>{const[a,d]=h.useState(null),r=h.useRef(null),s=p=>{r.current&&!r.current.contains(p.target)&&d(null)};h.useEffect(()=>(document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[]);const c=()=>{d(p=>p===n?null:n)};return e.jsxs(Ue,{children:[e.jsx("div",{children:a===n&&e.jsx(Be,{calendarRef:o,refData:r,waterData:i},n)}),e.jsx(Ye,{ref:r,onClick:()=>c(),$isOutlineVisible:!i||i.percent<100,children:n}),e.jsx(qe,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},n)},Je="#4fa94d",Ke={"aria-busy":!0,role:"progressbar"},Qe=t.div`
  display: ${o=>o.$visible?"flex":"none"};
`,Ze="http://www.w3.org/2000/svg",u=242.776657104492,et=1.6,tt=F`
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
`;t.path`
  stroke-dasharray: ${u*.01}px, ${u};
  stroke-dashoffset: 0;
  animation: ${tt} ${et}s linear infinite;
`;const nt=F`
to {
   transform: rotate(360deg);
 }
`;t.svg`
  animation: ${nt} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;t.polyline`
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
`;const ot=({height:o=80,width:n=80,radius:i=9,color:a=Je,ariaLabel:d="three-dots-loading",wrapperStyle:r,wrapperClass:s,visible:c=!0})=>e.jsx(Qe,{style:r,$visible:c,className:s,"data-testid":"three-dots-loading","aria-label":d,...Ke,children:e.jsxs("svg",{width:n,height:o,viewBox:"0 0 120 30",xmlns:Ze,fill:a,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),it=F`
to {
   stroke-dashoffset: 136;
 }
`;t.polygon`
  stroke-dasharray: 17;
  animation: ${it} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;t.svg`
  transform-origin: 50% 65%;
`;const rt=o=>{const[n,i]=h.useState(new Date),a=$(),d=h.useRef(null),r=w(Fe),s=w(De);h.useEffect(()=>{const l=new Date(n.getFullYear(),n.getMonth(),2),y=new Date(n.getFullYear(),n.getMonth()+1,1),f=l.toISOString().split("T")[0],v=y.toISOString().split("T")[0],j={startDate:f,endDate:v};a(G(j)),console.log(j)},[a,n,o]);const c=()=>{const l=new Date(n.getFullYear(),n.getMonth()+1,1);i(l)},p=()=>{const l=new Date(n.getFullYear(),n.getMonth()-1,1);i(l)},x=()=>{const l=new Date;return n.getMonth()===l.getMonth()&&n.getFullYear()===l.getFullYear()},g=()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),b=()=>{const l=g();return Array.from({length:l},(y,f)=>{var z;const v=f+1,j=r&&((z=r[f])==null?void 0:z.consumedWaterPercentage);return e.jsx(Xe,{calendarRef:d,day:v,consumedWaterPercentage:j},v)})};return e.jsxs(Ee,{className:"calendar",ref:d,children:[e.jsxs(Pe,{children:[e.jsx(Ae,{children:"Month"}),s&&e.jsx(ot,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(He,{children:[e.jsx(_,{"aria-label":"Previous month",onClick:p,children:e.jsx(P,{sx:{color:m.colors.blue}})}),e.jsx(Ve,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}, ${n.getFullYear()}`}),e.jsx(_,{"aria-label":"Next month",onClick:c,disabled:x(),children:e.jsx(E,{sx:{color:m.colors.blue}})})]})]}),e.jsx(Ge,{children:b()})]})},at=t.div`
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
`,st=t.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,lt=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`,pt=()=>e.jsx(U,{children:e.jsxs(at,{children:[e.jsxs(st,{children:[e.jsx(ye,{}),e.jsx(Ne,{})]}),e.jsxs(lt,{children:[e.jsx(ze,{}),e.jsx(rt,{})]})]})});export{pt as default};
