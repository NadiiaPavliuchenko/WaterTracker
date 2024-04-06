import{u as t,r as f,a as k,j as e,e as P,b as w,g as A,d as Y,M as W,c as H,f as M,i as C,h as V,k as F,l as q,W as G}from"./index-e0d08161.js";import{b as U}from"./bg_img_bubbles-c11f2eb9.js";const X=t.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  margin-bottom: 16px;
`,J=t.label`
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
`,$=t.input`
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
`,K=t.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Q=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`,Z=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,ee=t.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,te=t.button`
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
`,ne=({closeModal:o})=>{const i=30 .toFixed(1),[a,l]=f.useState(""),r=p=>{const{value:h}=p.target,g=/^(\d+([.,]\d{0,1})?)?$/;var b=h;h.match(/^[.,]/)?b="0"+h:b=h.replace(/^0+([^.])/,"$1"),g.test(b)&&l(b)},d=k(),c=async p=>{p.preventDefault();const h=p.target.elements.dailyNorm.value*1e3;try{const{payload:g}=await d(P(h));g.user&&o()}catch(g){console.log("🚀 ~ error:",g)}};return e.jsxs("form",{onSubmit:c,children:[e.jsxs(ee,{children:["Write down how much water you will drink:",e.jsx($,{type:"number",name:"dailyNorm",value:a,onChange:r,placeholder:i})]}),e.jsx(te,{className:"confirm",type:"submit",children:"Save"})]})},oe=()=>{const o=w(A),[n,i]=f.useState(o),[a,l]=f.useState(""),[r,d]=f.useState(""),c=g=>{const{name:b,value:s}=g.target,y=/^(\d+([.,]\d{0,1})?)?$/;var x=s;switch(b){case"gender":i(s);break;case"weight":s.match(/^[.,]/)?x="0"+s:x=s.replace(/^0+([^.])/,"$1"),y.test(x)&&l(x);break;case"activeHours":s.match(/^[.,]/)?x="0"+s:x=s.replace(/^0+([^.])/,"$1"),y.test(x)&&d(x);break}},p=n==="woman"?a*.03+r*.4:a*.04+r*.6,h=Math.round(p*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx(X,{children:"Calculate your rate:"}),e.jsxs(J,{children:[e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:n==="woman",onChange:c}),"For woman"]}),e.jsxs(R,{children:[e.jsx("input",{type:"radio",name:"gender",value:"man",checked:n==="man",onChange:c}),"For man"]})]}),e.jsxs(L,{children:["Your weight in kilograms:",e.jsx($,{type:"number",name:"weight",value:a,onChange:c,placeholder:"0"})]}),e.jsxs(L,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx($,{type:"number",name:"activeHours",value:r,onChange:c,placeholder:"0"})]}),e.jsxs(K,{children:[e.jsxs(Q,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(Z,{children:[h," L"]})]})]})})},ie=t.div`
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
`,re=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ae=t.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: #2f2f2f;
`,se=t(Y)`
  color: #407bff;
  cursor: pointer;
`,le=t.div`
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
`,de=t.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,ce=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,pe=t.span`
  color: #407bff;
`,he=({isModalOpen:o,closeModal:n})=>e.jsx(e.Fragment,{children:o&&e.jsx(W,{onClose:n,children:e.jsxs(ie,{children:[e.jsxs("div",{children:[e.jsxs(re,{className:"topline",children:[e.jsx(ae,{children:"My daily norm"}),e.jsx(se,{className:"close",onClick:n})]}),e.jsxs(le,{children:[e.jsxs(T,{children:["For woman: ",e.jsx(I,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs(T,{children:["For man: ",e.jsx(I,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(de,{children:e.jsxs(ce,{children:[e.jsx(pe,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(oe,{})}),e.jsx("div",{children:e.jsx(ne,{closeModal:n})})]})})}),xe=t.div`
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
`,fe=t.h2`
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,ge=t.button`
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
`,me=t.p`
 color:  #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,ue=t.div`
 display: flex;
  gap: 12px;
`,be=()=>{const{dailyWaterGoal:o}=w(H),[n,i]=f.useState(!1),a=()=>{i(!0)},l=()=>{i(!1)},r=(o/1e3).toFixed(1)+" L";return e.jsxs(xe,{children:[e.jsx(fe,{children:"My daily norma: "}),e.jsxs(ue,{children:[e.jsx(me,{children:r}),e.jsx(ge,{onClick:a,children:"Edit"})]}),e.jsx(he,{isModalOpen:n,closeModal:l})]})},ye=({isModalOpen:o,closeModal:n})=>e.jsx(e.Fragment,{children:o&&e.jsx(W,{onClose:n,children:e.jsx("div",{})})}),we=t.div`
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
`,ve=t.div`
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
`,je=t.button`
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
`;var S={},$e=C;Object.defineProperty(S,"__esModule",{value:!0});var O=S.default=void 0,ke=$e(M()),Me=e;O=S.default=(0,ke.default)((0,Me.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const Ce=o=>o.water.month,Fe=o=>{var n;return(n=o.water.dayInfo)==null?void 0:n.consumedWaterPercentage},Se=o=>o.water.dayDataLoading,De=()=>{const[o,n]=f.useState(!1),i=w(Fe),a=k(),l=()=>{n(!0)},r=()=>{n(!1)},d=i>100?100:i;return f.useEffect(()=>{a(V())},[a]),e.jsx(e.Fragment,{children:e.jsxs(we,{children:[e.jsx("h3",{children:"Today"}),e.jsxs("div",{className:"box",children:[e.jsx(ve,{children:e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${d}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${d}%`},children:[" ",e.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${d}%`})]})]})})}),e.jsxs(je,{onClick:l,children:[e.jsx(O,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]})]}),o&&e.jsx(ye,{isModalOpen:o,closeModal:r})]})})},Ne=()=>e.jsx("div",{children:"TodayWaterList"});var D={},ze=C;Object.defineProperty(D,"__esModule",{value:!0});var B=D.default=void 0,Re=ze(M()),Le=e;B=D.default=(0,Re.default)((0,Le.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var N={},Te=C;Object.defineProperty(N,"__esModule",{value:!0});var E=N.default=void 0,Ie=Te(M()),_e=e;E=N.default=(0,Ie.default)((0,_e.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},We=t.div`
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
`,Oe=({calendarRef:o,refData:n,waterData:i={}})=>{const{dayOfMonth:a,waterRate:l,percent:r,numberRecords:d}=i,c=n==null?void 0:n.current.getBoundingClientRect().left,p=o==null?void 0:o.current.getBoundingClientRect().left;let h=!0;const g=c-p;return g<200&&(h=!1),e.jsx(We,{$delta:h,$deltaNum:g,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:a}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[l/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:d})]})]}):e.jsx("h3",{children:"You dont have records on this day."})})},Be=t.div`
  display: flex;
  flex-direction: column;
`,Ee=t.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Pe=t.h2`
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
`,Ae=t.div`
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
`,Ye=t.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,He=t.span`
  font-size: 16px;
  line-height: 20px;
`,Ve=t.span`
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
`,qe=t.div`
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
`,Ge=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Ue=({calendarRef:o,day:n,waterPercentage:i})=>{const[a,l]=f.useState(null),r=f.useRef(null),d=p=>{r.current&&!r.current.contains(p.target)&&l(null)};f.useEffect(()=>(document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}),[]);const c=()=>{l(p=>p===n?null:n)};return e.jsxs(Ge,{children:[e.jsx("div",{children:a===n&&e.jsx(Oe,{calendarRef:o,refData:r,waterData:i},n)}),e.jsx(Ae,{ref:r,onClick:()=>c(),$isOutlineVisible:!i||i.percent<100,children:n}),e.jsx(Ve,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},n)},Xe="#4fa94d",Je={"aria-busy":!0,role:"progressbar"},Ke=t.div`
  display: ${o=>o.$visible?"flex":"none"};
`,Qe="http://www.w3.org/2000/svg",u=242.776657104492,Ze=1.6,et=F`
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
  animation: ${et} ${Ze}s linear infinite;
`;const tt=F`
to {
   transform: rotate(360deg);
 }
`;t.svg`
  animation: ${tt} 0.75s steps(12, end) infinite;
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
`;const nt=({height:o=80,width:n=80,radius:i=9,color:a=Xe,ariaLabel:l="three-dots-loading",wrapperStyle:r,wrapperClass:d,visible:c=!0})=>e.jsx(Ke,{style:r,$visible:c,className:d,"data-testid":"three-dots-loading","aria-label":l,...Je,children:e.jsxs("svg",{width:n,height:o,viewBox:"0 0 120 30",xmlns:Qe,fill:a,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),ot=F`
to {
   stroke-dashoffset: 136;
 }
`;t.polygon`
  stroke-dasharray: 17;
  animation: ${ot} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;t.svg`
  transform-origin: 50% 65%;
`;const it=o=>{const[n,i]=f.useState(new Date),a=k(),l=f.useRef(null),r=w(Ce),d=w(Se);f.useEffect(()=>{const s=new Date(n.getFullYear(),n.getMonth(),2),y=new Date(n.getFullYear(),n.getMonth()+1,1),x=s.toISOString().split("T")[0],v=y.toISOString().split("T")[0],j={startDate:x,endDate:v};a(q(j)),console.log(j)},[a,n,o]);const c=()=>{const s=new Date(n.getFullYear(),n.getMonth()+1,1);i(s)},p=()=>{const s=new Date(n.getFullYear(),n.getMonth()-1,1);i(s)},h=()=>{const s=new Date;return n.getMonth()===s.getMonth()&&n.getFullYear()===s.getFullYear()},g=()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),b=()=>{const s=g();return Array.from({length:s},(y,x)=>{var z;const v=x+1,j=r&&((z=r[x])==null?void 0:z.consumedWaterPercentage);return e.jsx(Ue,{calendarRef:l,day:v,consumedWaterPercentage:j},v)})};return e.jsxs(Be,{className:"calendar",ref:l,children:[e.jsxs(Ee,{children:[e.jsx(Pe,{children:"Month"}),d&&e.jsx(nt,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(Ye,{children:[e.jsx(_,{"aria-label":"Previous month",onClick:p,children:e.jsx(E,{sx:{color:m.colors.blue}})}),e.jsx(He,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}, ${n.getFullYear()}`}),e.jsx(_,{"aria-label":"Next month",onClick:c,disabled:h(),children:e.jsx(B,{sx:{color:m.colors.blue}})})]})]}),e.jsx(qe,{children:b()})]})},rt=t.div`
  background-image: url(${U});
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
`,at=t.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,st=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`,ct=()=>e.jsx(G,{children:e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(be,{}),e.jsx(De,{})]}),e.jsxs(st,{children:[e.jsx(Ne,{}),e.jsx(it,{})]})]})});export{ct as default};
