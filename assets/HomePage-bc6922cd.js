import{u as o,a as $,r as c,b as k,j as t,e as Y,f as I,g as G,d as V,M as W,c as q,h as U,s as X,i as O,k as E,l as F,m as J,W as K}from"./index-136a0ee2.js";import{b as Q}from"./bg_img_bubbles-c11f2eb9.js";const Z=o.h3`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
`,ee=o.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,z=o.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`,R=o.label`
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
`,S=o.input`
  border: 1px solid ${({theme:e})=>e.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  background-color: transparent;
  color: ${({theme:e})=>e.color.blue};
  outline: none;

  &.activated {
    border: 1px solid ${({theme:e})=>e.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.blue};
  }

  &.error {
    border: 1px solid ${({theme:e})=>e.color.red};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.red};
  }

  &::placeholder {
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.skyBlue};
  }
`,te=o.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,oe=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  width: 190px;

  @media ${({theme:e})=>e.device.tablet} {
    width: auto;
  }
`,ie=o.p`
  font-family: 'Roboto-Bold', sans-serif;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:e})=>e.color.blue};
`,ne=o.label`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;
`,re=o.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({theme:e})=>e.boxShadow.normalButton};
  background: ${({theme:e})=>e.color.blue};
  font-family: 'Roboto-Medium', sans-serif;
  /* font-weight: 500; */
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${({theme:e})=>e.color.white};
  border: none;
  &:hover,
  &:focus {
    box-shadow: ${({theme:e})=>e.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadow.activeButton};
  }

  @media ${({theme:e})=>e.device.tablet} {
    padding: 10px 30px;
    margin-left: auto;
    display: block;

    width: 160px;
  }
`,C=o.p`
  color: ${({theme:e})=>e.color.red}; /* Set the text color to red */
  position: absolute; /* Position out of the document flow */
  bottom: -20px; /* Position below the input */
  left: 0; /* Align to the left of the input */
  font-size: 0.8rem; /* Smaller font size */
`,ae=e=>e.water.month,se=e=>{var i;return(i=e.water.dayInfo)==null?void 0:i.consumedWaterPercentage},le=e=>{var i;return(i=e.water.dayInfo)==null?void 0:i.dailyWaterGoal},ce=e=>e.water.dayDataLoading,de=({closeModal:e})=>{const n=($(le)/1e3).toFixed(1),[s,d]=c.useState(""),[r,l]=c.useState(!0),x=15,f=g=>{const{value:a}=g.target,b=/^(\d+([.,]\d{0,1})?)?$/;var h=a;a.match(/^[.,]/)?h="0"+a:h=a.replace(/^0+([^.])/,"$1"),l(h===""||parseFloat(h.replace(",","."))<=x),b.test(h)&&d(h)},y=k(),w=async g=>{g.preventDefault();const a=g.target.elements.dailyNorm.value*1e3;try{const{payload:b}=await y(Y(a));b.user&&(y(I()),e())}catch(b){console.log("🚀 ~ error:",b)}};return t.jsxs("form",{onSubmit:w,children:[t.jsxs(ne,{children:["Write down how much water you will drink:",t.jsx(S,{type:"number",name:"dailyNorm",value:s,onChange:f,placeholder:n}),!r&&t.jsx(C,{children:`The water rate cannot exceed ${x} liters`})]}),t.jsx(re,{className:"confirm",type:"submit",children:"Save"})]})},he=()=>{const e=$(G),[i,n]=c.useState(e),[s,d]=c.useState(""),[r,l]=c.useState(""),[x,f]=c.useState(!0),[y,w]=c.useState(!0),g=h=>{const{name:v,value:p}=h.target,j=/^(\d+([.,]\d{0,1})?)?$/;var u=p;const P=200,H=12;switch(v){case"gender":n(p);break;case"weight":p.match(/^[.,]/)?u="0"+p:u=p.replace(/^0+([^.])/,"$1"),f(u===""||parseFloat(u.replace(",","."))<=P),j.test(u)&&d(u);break;case"activeHours":p.match(/^[.,]/)?u="0"+p:u=p.replace(/^0+([^.])/,"$1"),w(u===""||parseFloat(u.replace(",","."))<=H),j.test(u)&&l(u);break}},a=i==="woman"?s*.03+r*.4:s*.04+r*.6,b=Math.round(a*10)/10;return t.jsx("div",{children:t.jsxs("form",{action:"",children:[t.jsx(Z,{children:"Calculate your rate:"}),t.jsxs(ee,{children:[t.jsxs(z,{children:[t.jsx("input",{type:"radio",name:"gender",value:"woman",checked:i==="woman",onChange:g}),"For woman"]}),t.jsxs(z,{children:[t.jsx("input",{type:"radio",name:"gender",value:"man",checked:i==="man",onChange:g}),"For man"]})]}),t.jsxs(R,{children:["Your weight in kilograms:",t.jsx(S,{type:"number",name:"weight",value:s,onChange:g,placeholder:"0"}),!x&&t.jsx(C,{children:"The water rate cannot exceed 15 liters"})]}),t.jsxs(R,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",t.jsx(S,{type:"number",name:"activeHours",value:r,onChange:g,placeholder:"0"}),!y&&t.jsx(C,{children:"The water rate cannot exceed 15 liters"})]}),t.jsxs(te,{children:[t.jsxs(oe,{children:["The required amount of water in liters per day:"," "]}),t.jsxs(ie,{children:[b," L"]})]})]})})},pe=o.div`
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

  background-color: ${({theme:e})=>e.color.white};
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
`,xe=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ue=o.h2`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 26px;
  line-height: 1.23077;
  /* color: #2f2f2f; */
`,fe=o(V)`
  color: ${({theme:e})=>e.color.blue};
  cursor: pointer;
`,ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,L=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`,T=o.span`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:e})=>e.color.blue};
`,me=o.div`
  border: 1px solid ${({theme:e})=>e.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,be=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,ye=o.span`
  color: ${({theme:e})=>e.color.blue};
`,we=({isModalOpen:e,closeModal:i})=>t.jsx(t.Fragment,{children:e&&t.jsx(W,{onClose:i,children:t.jsxs(pe,{children:[t.jsxs("div",{children:[t.jsxs(xe,{className:"topline",children:[t.jsx(ue,{children:"My daily norm"}),t.jsx(fe,{className:"close",onClick:i})]}),t.jsxs(ge,{children:[t.jsxs(L,{children:["For woman: ",t.jsx(T,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs(L,{children:["For man: ",t.jsx(T,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(me,{children:t.jsxs(be,{children:[t.jsx(ye,{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),t.jsx("div",{children:t.jsx(he,{})}),t.jsx("div",{children:t.jsx(de,{closeModal:i})})]})})}),$e=o.div`
  display: inline-flex;
  padding: 8px 20px;
  height: 74px;
  width: 150px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.color.lavender};
  background: ${({theme:e})=>e.color.white};
  box-shadow: ${({theme:e})=>e.boxShadow.normalButton};

  /* margin-bottom: 232px; */
`,ve=o.h2`
  /* color: #2f2f2f; */
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,je=o.button`
  display: block;
  padding: 0;
  color: ${({theme:e})=>e.color.lightPurple};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  background: transparent;
  border: none;

  &:hover {
    color: ${({theme:e})=>e.color.orange};
    transition: color 0.3s ease;
  }

  &:focus {
    color: ${({theme:e})=>e.color.orange};
    transition: color 0.3s ease;
  }
`,ke=o.p`
  color: ${({theme:e})=>e.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,Me=o.div`
  display: flex;
  gap: 12px;
`,Se=()=>{const{dailyWaterGoal:e}=$(q),[i,n]=c.useState(!1),s=k(),d=()=>{n(!0)},r=()=>{n(!1)},l=(e/1e3).toFixed(1)+" L";return c.useEffect(()=>{s(I())},[s]),t.jsxs($e,{children:[t.jsx(ve,{children:"My daily norma: "}),t.jsxs(Me,{children:[t.jsx(ke,{children:l}),t.jsx(je,{onClick:d,children:"Edit"})]}),t.jsx(we,{isModalOpen:i,closeModal:r})]})},Ce=({isModalOpen:e,closeModal:i})=>t.jsx(t.Fragment,{children:e&&t.jsx(W,{onClose:i,children:t.jsx("div",{})})}),Fe=o.div`
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
    color: ${({theme:e})=>e.color.blue};
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
  @media ${({theme:e})=>e.device.tablet} {
    margin-top: 326px;

    .box {
      flex-direction: row;
      align-items: center;
    }
  }

  @media ${({theme:e})=>e.device.desktop} {
    margin-top: 466px;
  }
`,Ne=o.div`
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
    background-color: ${({theme:e})=>e.color.paleBlue};
  }

  .progress {
    height: 100%;
    background-color: ${({theme:e})=>e.color.skyBlue};
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
    color: ${({theme:e})=>e.color.blue};
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -20px;

    color: ${({theme:e})=>e.color.blue};

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
    background-color: ${({theme:e})=>e.color.white}; /* Цвет бегунка */
    border: 1px solid ${({theme:e})=>e.color.blue};
    border-radius: 50%;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); */
  }

  @media ${({theme:e})=>e.device.tablet} {
    h3 {
      margin-bottom: 16px;
    }
    .progress-bar-container {
      width: 336px;
    }
  }

  @media ${({theme:e})=>e.device.desktop} {
    h3 {
      margin-bottom: 18px;
    }
    .progress-bar-container {
      width: 340px;
    }
  }
`,De=o.button`
  width: 280px;
  height: 36px;
  padding: 6px 76px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-color: ${({theme:e})=>e.color.blue};
  border: none;
  border-radius: 10px;
  box-shadow: ${({theme:e})=>e.boxShadow.normalButton};

  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: ${({theme:e})=>e.color.white};
  }

  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadow.activeButton};
  }

  @media ${({theme:e})=>e.device.tablet} {
    width: 336px;
    height: 44px;
    gap: 10px;
    padding: 10px 104px;
  }

  @media ${({theme:e})=>e.device.desktop} {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }
`,ze=o.svg`
  fill: transparent;
  stroke: ${({theme:e})=>e.color.white};
`,Re=()=>{const[e,i]=c.useState(!1),n=$(se),s=k(),d=()=>{i(!0)},r=()=>{i(!1)},l=n>100?100:n;return c.useEffect(()=>{s(U())},[s]),t.jsx(t.Fragment,{children:t.jsxs(Fe,{children:[t.jsx("h3",{children:"Today"}),t.jsxs("div",{className:"box",children:[t.jsx(Ne,{children:t.jsx("div",{className:"progress-bar-container",children:t.jsxs("div",{className:"progress-bar",children:[t.jsx("div",{className:"progress",style:{width:`${l}%`}}),t.jsx("div",{className:"marker-0",children:"0%"}),t.jsx("div",{className:"marker-50",children:"50%"}),t.jsx("div",{className:"marker-100",children:"100%"}),t.jsxs("div",{className:"indicator",style:{left:`${l}%`},children:[" ",t.jsx("p",{className:"progress-text",children:n>100?`${n}%`:`${l}%`})]})]})})}),t.jsxs(De,{onClick:d,children:[t.jsx(ze,{width:"20px",height:"20px",children:t.jsx("use",{xlinkHref:`${X}#plus-circle`})})," ",t.jsx("p",{children:"Add Water"})]})]}),e&&t.jsx(Ce,{isModalOpen:e,closeModal:r})]})})},Le=()=>t.jsx("div",{children:"TodayWaterList"});var N={},Te=E;Object.defineProperty(N,"__esModule",{value:!0});var _=N.default=void 0,Be=Te(O()),Ie=t;_=N.default=(0,Be.default)((0,Ie.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var D={},We=E;Object.defineProperty(D,"__esModule",{value:!0});var A=D.default=void 0,Oe=We(O()),Ee=t;A=D.default=(0,Oe.default)((0,Ee.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const _e=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  box-shadow: ${({theme:e})=>e.boxShadow.popoverShadow};
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media ${({theme:e})=>e.device.tabletMax} {
    left: ${e=>-7-e.$deltaNum}px;
  }

  @media ${({theme:e})=>e.device.tablet} {
    right: ${e=>e.$delta?"17px":""};
    left: ${e=>e.$delta?"":"17px"};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media ${({theme:e})=>e.device.desktop} {
    bottom: 56px;
  }

  h3 {
    color: ${({theme:e})=>e.color.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${({theme:e})=>e.color.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${({theme:e})=>e.color.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,Ae=({calendarRef:e,refData:i,waterData:n={}})=>{const{dayOfMonth:s,waterRate:d,percent:r,numberRecords:l}=n,x=i==null?void 0:i.current.getBoundingClientRect().left,f=e==null?void 0:e.current.getBoundingClientRect().left;let y=!0;const w=x-f;return w<200&&(y=!1),t.jsx(_e,{$delta:y,$deltaNum:w,children:Object.values(n).length?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:s}),t.jsxs("p",{children:["Daily norma: ",t.jsxs("span",{children:[d/1e3," L"]})]}),t.jsxs("p",{children:["Fulfillment of the daily norm:"," ",t.jsxs("span",{children:[r>100?100:r,"%"]})]}),t.jsxs("p",{children:["How many servings of water: ",t.jsx("span",{children:l})]})]}):t.jsx("h3",{children:"You don't have records on this day."})})},Pe=o.div`
  display: flex;
  flex-direction: column;
`,He=o.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Ye=o.h2`
  color: ${({theme:e})=>e.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({theme:e})=>e.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,B=o.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${({theme:e})=>e.color.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${({theme:e})=>e.color.skyBlue};
    cursor: not-allowed;
  }
`,Ge=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${e=>e.$isOutlineVisible?`1px solid ${e.theme.color.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover,
  &:focus {
    box-shadow: ${({theme:e})=>e.boxShadow.calendarDayShadow};
  }

  @media ${({theme:e})=>e.device.tablet} {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,Ve=o.div`
  color: ${({theme:e})=>e.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,qe=o.span`
  font-size: 16px;
  line-height: 20px;
`,Ue=o.span`
  color: ${({theme:e})=>e.color.skyBlue};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media ${({theme:e})=>e.device.tablet} {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media ${({theme:e})=>e.device.desktop} {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`,Xe=o.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media ${({theme:e})=>e.device.tablet} {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media ${({theme:e})=>e.device.desktop} {
    column-gap: 22px;
  }
`,Je=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Ke=({calendarRef:e,day:i,consumedWaterPercentage:n})=>{const[s,d]=c.useState(null),r=c.useRef(null),l=f=>{r.current&&!r.current.contains(f.target)&&d(null)};c.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const x=()=>{d(f=>f===i?null:i)};return t.jsxs(Je,{children:[t.jsx("div",{children:s===i&&t.jsx(Ae,{calendarRef:e,refData:r,waterDay:n},i)}),t.jsx(Ge,{ref:r,onClick:()=>x(),$isOutlineVisible:!n||n.percent<100,children:i}),t.jsx(Ue,{children:n?`${Math.min(n.percent,100)}%`:"0%"})]},i)},Qe="#4fa94d",Ze={"aria-busy":!0,role:"progressbar"},et=o.div`
  display: ${e=>e.$visible?"flex":"none"};
`,tt="http://www.w3.org/2000/svg",m=242.776657104492,ot=1.6,it=F`
12.5% {
  stroke-dasharray: ${m*.14}px, ${m}px;
  stroke-dashoffset: -${m*.11}px;
}
43.75% {
  stroke-dasharray: ${m*.35}px, ${m}px;
  stroke-dashoffset: -${m*.35}px;
}
100% {
  stroke-dasharray: ${m*.01}px, ${m}px;
  stroke-dashoffset: -${m*.99}px;
}
`;o.path`
  stroke-dasharray: ${m*.01}px, ${m};
  stroke-dashoffset: 0;
  animation: ${it} ${ot}s linear infinite;
`;const nt=F`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${nt} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;o.polyline`
  stroke-width: ${e=>e.width}px;
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
`;const rt=({height:e=80,width:i=80,radius:n=9,color:s=Qe,ariaLabel:d="three-dots-loading",wrapperStyle:r,wrapperClass:l,visible:x=!0})=>t.jsx(et,{style:r,$visible:x,className:l,"data-testid":"three-dots-loading","aria-label":d,...Ze,children:t.jsxs("svg",{width:i,height:e,viewBox:"0 0 120 30",xmlns:tt,fill:s,"data-testid":"three-dots-svg",children:[t.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[t.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),at=F`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${at} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const M={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},st=()=>{const[e,i]=c.useState(new Date),n=k(),s=c.useRef(null),d=$(a=>a.getCurrentNorm),r=$(ae),l=$(ce);c.useEffect(()=>{const a=new Date(e.getFullYear(),e.getMonth(),2),b=new Date(e.getFullYear(),e.getMonth()+1,1),h=a.toISOString().split("T")[0],v=b.toISOString().split("T")[0],p={startDate:h,endDate:v};n(J(p)),console.log(p)},[n,e,d]);const x=()=>{const a=new Date(e.getFullYear(),e.getMonth()+1,1);i(a)},f=()=>{const a=new Date(e.getFullYear(),e.getMonth()-1,1);i(a)},y=()=>{const a=new Date;return e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()},w=()=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),g=()=>{const a=w();return Array.from({length:a},(b,h)=>{var j;const v=h+1,p=r&&((j=r[h])==null?void 0:j.consumedWaterPercentage);return t.jsx(Ke,{dailyWaterGoal:s,day:v,consumedWaterPercentage:p},v)})};return t.jsxs(Pe,{className:"calendar",ref:s,children:[t.jsxs(He,{children:[t.jsx(Ye,{children:"Month"}),l&&t.jsx(rt,{height:"60",width:"60",radius:"9",color:M.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),t.jsxs(Ve,{children:[t.jsx(B,{"aria-label":"Previous month",onClick:f,children:t.jsx(A,{sx:{color:M.colors.blue}})}),t.jsx(qe,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(e)}, ${e.getFullYear()}`}),t.jsx(B,{"aria-label":"Next month",onClick:x,disabled:y(),children:t.jsx(_,{sx:{color:M.colors.blue}})})]})]}),t.jsx(Xe,{children:g()})]})},lt=o.div`
  background-image: url(${Q});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${({theme:e})=>e.device.desktop} {
    flex-direction: row;
  }
`,ct=o.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,dt=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({theme:e})=>e.device.tablet} {
    flex: 1;
  }
`,xt=()=>t.jsx(K,{children:t.jsxs(lt,{children:[t.jsxs(ct,{children:[t.jsx(Se,{}),t.jsx(Re,{})]}),t.jsxs(dt,{children:[t.jsx(Le,{}),t.jsx(st,{})]})]})});export{xt as default};
