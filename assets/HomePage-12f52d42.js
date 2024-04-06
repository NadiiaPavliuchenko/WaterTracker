import{u as o,a as j,r as d,b as M,j as e,e as G,f as E,g as q,d as U,M as B,c as X,h as F,i as N,k as J,l as D,m as K,W as Q}from"./index-1e311379.js";import{b as Z}from"./bg_img_bubbles-c11f2eb9.js";const ee=o.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  margin-bottom: 16px;
`,te=o.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,T=o.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,I=o.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`,C=o.input`
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
`,oe=o.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ne=o.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`,ie=o.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,re=o.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;
`,ae=o.button`
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
`,S=o.p`
  color: red; /* Set the text color to red */
  position: absolute; /* Position out of the document flow */
  bottom: -20px; /* Position below the input */
  left: 0; /* Align to the left of the input */
  font-size: 0.8rem; /* Smaller font size */
`,se=t=>t.water.month,le=t=>{var n;return(n=t.water.dayInfo)==null?void 0:n.consumedWaterPercentage},de=t=>{var n;return(n=t.water.dayInfo)==null?void 0:n.dailyWaterGoal},ce=t=>t.water.dayDataLoading,pe=({closeModal:t})=>{const i=(j(de)/1e3).toFixed(1),[s,c]=d.useState(""),[r,l]=d.useState(!0),x=15,g=u=>{const{value:a}=u.target,y=/^(\d+([.,]\d{0,1})?)?$/;var p=a;a.match(/^[.,]/)?p="0"+a:p=a.replace(/^0+([^.])/,"$1"),l(p===""||parseFloat(p.replace(",","."))<=x),y.test(p)&&c(p)},w=M(),v=async u=>{u.preventDefault();const a=u.target.elements.dailyNorm.value*1e3;try{const{payload:y}=await w(G(a));y.user&&(w(E()),t())}catch(y){console.log("🚀 ~ error:",y)}};return e.jsxs("form",{onSubmit:v,children:[e.jsxs(re,{children:["Write down how much water you will drink:",e.jsx(C,{type:"number",name:"dailyNorm",value:s,onChange:g,placeholder:i}),!r&&e.jsx(S,{children:`The water rate cannot exceed ${x} liters`})]}),e.jsx(ae,{className:"confirm",type:"submit",children:"Save"})]})},he=()=>{const t=j(q),[n,i]=d.useState(t),[s,c]=d.useState(""),[r,l]=d.useState(""),[x,g]=d.useState(!0),[w,v]=d.useState(!0),u=p=>{const{name:$,value:h}=p.target,k=/^(\d+([.,]\d{0,1})?)?$/;var f=h;const Y=200,V=12;switch($){case"gender":i(h);break;case"weight":h.match(/^[.,]/)?f="0"+h:f=h.replace(/^0+([^.])/,"$1"),g(f===""||parseFloat(f.replace(",","."))<=Y),k.test(f)&&c(f);break;case"activeHours":h.match(/^[.,]/)?f="0"+h:f=h.replace(/^0+([^.])/,"$1"),v(f===""||parseFloat(f.replace(",","."))<=V),k.test(f)&&l(f);break}},a=n==="woman"?s*.03+r*.4:s*.04+r*.6,y=Math.round(a*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx(ee,{children:"Calculate your rate:"}),e.jsxs(te,{children:[e.jsxs(T,{children:[e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:n==="woman",onChange:u}),"For woman"]}),e.jsxs(T,{children:[e.jsx("input",{type:"radio",name:"gender",value:"man",checked:n==="man",onChange:u}),"For man"]})]}),e.jsxs(I,{children:["Your weight in kilograms:",e.jsx(C,{type:"number",name:"weight",value:s,onChange:u,placeholder:"0"}),!x&&e.jsx(S,{children:"The water rate cannot exceed 15 liters"})]}),e.jsxs(I,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx(C,{type:"number",name:"activeHours",value:r,onChange:u,placeholder:"0"}),!w&&e.jsx(S,{children:"The water rate cannot exceed 15 liters"})]}),e.jsxs(oe,{children:[e.jsxs(ne,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(ie,{children:[y," L"]})]})]})})},xe=o.div`
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
`,fe=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,me=o.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: #2f2f2f;
`,ge=o(U)`
  color: #407bff;
  cursor: pointer;
`,ue=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,_=o.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #2f2f2f;
`,W=o.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: #407bff;
`,be=o.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,ye=o.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,we=o.span`
  color: #407bff;
`,ve=({isModalOpen:t,closeModal:n})=>e.jsx(e.Fragment,{children:t&&e.jsx(B,{onClose:n,children:e.jsxs(xe,{children:[e.jsxs("div",{children:[e.jsxs(fe,{className:"topline",children:[e.jsx(me,{children:"My daily norm"}),e.jsx(ge,{className:"close",onClick:n})]}),e.jsxs(ue,{children:[e.jsxs(_,{children:["For woman: ",e.jsx(W,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs(_,{children:["For man: ",e.jsx(W,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(be,{children:e.jsxs(ye,{children:[e.jsx(we,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(he,{})}),e.jsx("div",{children:e.jsx(pe,{closeModal:n})})]})})}),je=o.div`
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
`,$e=o.h2`
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,ke=o.button`
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
`,Me=o.p`
 color:  #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,Ce=o.div`
 display: flex;
  gap: 12px;
`,Se=()=>{const{dailyWaterGoal:t}=j(X),[n,i]=d.useState(!1),s=M(),c=()=>{i(!0)},r=()=>{i(!1)},l=(t/1e3).toFixed(1)+" L";return d.useEffect(()=>{s(E())},[s]),e.jsxs(je,{children:[e.jsx($e,{children:"My daily norma: "}),e.jsxs(Ce,{children:[e.jsx(Me,{children:l}),e.jsx(ke,{onClick:c,children:"Edit"})]}),e.jsx(ve,{isModalOpen:n,closeModal:r})]})},Fe=({isModalOpen:t,closeModal:n})=>e.jsx(e.Fragment,{children:t&&e.jsx(B,{onClose:n,children:e.jsx("div",{})})}),Ne=o.div`
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
`,De=o.div`
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
`,ze=o.button`
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
`;var z={},Le=N;Object.defineProperty(z,"__esModule",{value:!0});var P=z.default=void 0,Re=Le(F()),Te=e;P=z.default=(0,Re.default)((0,Te.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"ControlPointRounded");const Ie=()=>{const[t,n]=d.useState(!1),i=j(le),s=M(),c=()=>{n(!0)},r=()=>{n(!1)},l=i>100?100:i;return d.useEffect(()=>{s(J())},[s]),e.jsx(e.Fragment,{children:e.jsxs(Ne,{children:[e.jsx("h3",{children:"Today"}),e.jsxs("div",{className:"box",children:[e.jsx(De,{children:e.jsx("div",{className:"progress-bar-container",children:e.jsxs("div",{className:"progress-bar",children:[e.jsx("div",{className:"progress",style:{width:`${l}%`}}),e.jsx("div",{className:"marker-0",children:"0%"}),e.jsx("div",{className:"marker-50",children:"50%"}),e.jsx("div",{className:"marker-100",children:"100%"}),e.jsxs("div",{className:"indicator",style:{left:`${l}%`},children:[" ",e.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${l}%`})]})]})})}),e.jsxs(ze,{onClick:c,children:[e.jsx(P,{sx:{fill:"var(--primary-white)",width:"24px",height:"24px"}})," ",e.jsx("p",{children:"Add Water"})]})]}),t&&e.jsx(Fe,{isModalOpen:t,closeModal:r})]})})},_e=()=>e.jsx("div",{children:"TodayWaterList"});var L={},We=N;Object.defineProperty(L,"__esModule",{value:!0});var A=L.default=void 0,Oe=We(F()),Ee=e;A=L.default=(0,Oe.default)((0,Ee.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var R={},Be=N;Object.defineProperty(R,"__esModule",{value:!0});var H=R.default=void 0,Pe=Be(F()),Ae=e;H=R.default=(0,Pe.default)((0,Ae.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},He=o.div`
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
    left: ${t=>-7-t.$deltaNum}px;
  }

  @media screen and (min-width: 768px) {
    right: ${t=>t.$delta?"17px":""};
    left: ${t=>t.$delta?"":"17px"};
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
`,Ye=({calendarRef:t,refData:n,waterData:i={}})=>{const{dayOfMonth:s,waterRate:c,percent:r,numberRecords:l}=i,x=n==null?void 0:n.current.getBoundingClientRect().left,g=t==null?void 0:t.current.getBoundingClientRect().left;let w=!0;const v=x-g;return v<200&&(w=!1),e.jsx(He,{$delta:w,$deltaNum:v,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:s}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[c/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:l})]})]}):e.jsx("h3",{children:"You dont have records on this day."})})},Ve=o.div`
  display: flex;
  flex-direction: column;
`,Ge=o.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,qe=o.h2`
  color: ${m.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,O=o.button`
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
`,Ue=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${t=>t.$isOutlineVisible?`1px solid ${m.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,Xe=o.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,Je=o.span`
  font-size: 16px;
  line-height: 20px;
`,Ke=o.span`
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
`,Qe=o.div`
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
`,Ze=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,et=({calendarRef:t,day:n,consumedWaterPercentage:i})=>{const[s,c]=d.useState(null),r=d.useRef(null),l=g=>{r.current&&!r.current.contains(g.target)&&c(null)};d.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const x=()=>{c(g=>g===n?null:n)};return e.jsxs(Ze,{children:[e.jsx("div",{children:s===n&&e.jsx(Ye,{calendarRef:t,refData:r,waterDay:i},n)}),e.jsx(Ue,{ref:r,onClick:()=>x(),$isOutlineVisible:!i||i.percent<100,children:n}),e.jsx(Ke,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},n)},tt="#4fa94d",ot={"aria-busy":!0,role:"progressbar"},nt=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,it="http://www.w3.org/2000/svg",b=242.776657104492,rt=1.6,at=D`
12.5% {
  stroke-dasharray: ${b*.14}px, ${b}px;
  stroke-dashoffset: -${b*.11}px;
}
43.75% {
  stroke-dasharray: ${b*.35}px, ${b}px;
  stroke-dashoffset: -${b*.35}px;
}
100% {
  stroke-dasharray: ${b*.01}px, ${b}px;
  stroke-dashoffset: -${b*.99}px;
}
`;o.path`
  stroke-dasharray: ${b*.01}px, ${b};
  stroke-dashoffset: 0;
  animation: ${at} ${rt}s linear infinite;
`;const st=D`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${st} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;o.polyline`
  stroke-width: ${t=>t.width}px;
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
`;const lt=({height:t=80,width:n=80,radius:i=9,color:s=tt,ariaLabel:c="three-dots-loading",wrapperStyle:r,wrapperClass:l,visible:x=!0})=>e.jsx(nt,{style:r,$visible:x,className:l,"data-testid":"three-dots-loading","aria-label":c,...ot,children:e.jsxs("svg",{width:n,height:t,viewBox:"0 0 120 30",xmlns:it,fill:s,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),dt=D`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${dt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const ct=()=>{const[t,n]=d.useState(new Date),i=M(),s=d.useRef(null),c=j(a=>a.getCurrentNorm),r=j(se),l=j(ce);d.useEffect(()=>{const a=new Date(t.getFullYear(),t.getMonth(),2),y=new Date(t.getFullYear(),t.getMonth()+1,1),p=a.toISOString().split("T")[0],$=y.toISOString().split("T")[0],h={startDate:p,endDate:$};i(K(h)),console.log(h)},[i,t,c]);const x=()=>{const a=new Date(t.getFullYear(),t.getMonth()+1,1);n(a)},g=()=>{const a=new Date(t.getFullYear(),t.getMonth()-1,1);n(a)},w=()=>{const a=new Date;return t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},v=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),u=()=>{const a=v();return Array.from({length:a},(y,p)=>{var k;const $=p+1,h=r&&((k=r[p])==null?void 0:k.consumedWaterPercentage);return e.jsx(et,{dailyWaterGoal:s,day:$,consumedWaterPercentage:h},$)})};return e.jsxs(Ve,{className:"calendar",ref:s,children:[e.jsxs(Ge,{children:[e.jsx(qe,{children:"Month"}),l&&e.jsx(lt,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(Xe,{children:[e.jsx(O,{"aria-label":"Previous month",onClick:g,children:e.jsx(H,{sx:{color:m.colors.blue}})}),e.jsx(Je,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(O,{"aria-label":"Next month",onClick:x,disabled:w(),children:e.jsx(A,{sx:{color:m.colors.blue}})})]})]}),e.jsx(Qe,{children:u()})]})},pt=o.div`
  background-image: url(${Z});
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
`,ht=o.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,xt=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`,gt=()=>e.jsx(Q,{children:e.jsxs(pt,{children:[e.jsxs(ht,{children:[e.jsx(Se,{}),e.jsx(Ie,{})]}),e.jsxs(xt,{children:[e.jsx(_e,{}),e.jsx(ct,{})]})]})});export{gt as default};
