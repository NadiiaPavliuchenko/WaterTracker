import{u as o,a as $,r as c,b as F,j as t,e as ee,f as Y,g as te,c as oe,s as N,d as ne,M as G,h as ie,i as re,k as V,l as q,m as D,n as ae,W as se}from"./index-561b3964.js";import{b as le}from"./bg_img_bubbles-c11f2eb9.js";const ce=o.h3`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
`,de=o.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,T=o.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,B=o.input`
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
`,E=o.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,W=o.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,O=o.svg`
  width: 12px;
  height: 12px;
`,_=o.label`
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

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,z=o.input`
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  color: ${({theme:e})=>e.color.blue};
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
    border-color: ${({theme:e})=>e.color.red};
    color: ${({theme:e})=>e.color.red};
  }

  &::placeholder {
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.skyBlue};
  }
`,he=o.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 24px;
`,pe=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  width: 190px;

  @media ${({theme:e})=>e.device.tablet} {
    width: auto;
  }
`,xe=o.p`
  font-family: 'Roboto-Bold', sans-serif;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:e})=>e.color.blue};
`,ue=o.label`
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

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`,fe=o.button`
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
  transition: box-shadow 0.3s ease;

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
    font-size: 18px;

    width: 160px;
  }
`,S=o.p`
  position: absolute;
  bottom: -20px;
  left: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({theme:e})=>e.color.red};
`,ge=e=>e.water.month,me=e=>{var n;return(n=e.water.dayInfo)==null?void 0:n.consumedWaterPercentage},be=e=>{var n;return(n=e.water.dayInfo)==null?void 0:n.dailyWaterGoal},ye=e=>e.water.dayDataLoading,we=({closeModal:e})=>{const i=($(be)/1e3).toFixed(1),[r,d]=c.useState("");console.log("🚀 ~ dailyWaterNorm:",r);const[a,l]=c.useState(!0),h=15,u=b=>{const{value:s}=b.target,m=/^(\d+([.,]\d{0,1})?)?$/;var p=s;s.match(/^[.,]/)?p="0"+s:p=s.replace(/^0+([^.])/,"$1"),l(p===""||parseFloat(p.replace(",","."))<=h),m.test(p)&&d(p)},f=F(),y=async b=>{if(b.preventDefault(),!a||r<=0)return;const s=b.target.elements.dailyNorm.value*1e3;try{const{payload:m}=await f(ee(s));m.user&&(f(Y()),e())}catch(m){console.log("🚀 ~ error:",m)}};return t.jsxs("form",{onSubmit:y,children:[t.jsxs(ue,{children:["Write down how much water you will drink:",t.jsx(z,{className:!a&&r<=0?"error":"",type:"number",name:"dailyNorm",value:r,onChange:u,placeholder:i}),!a&&t.jsx(S,{children:`The water rate cannot exceed ${h} liters`}),r<0&&t.jsx(S,{children:"The water rate cannot be negative"}),parseFloat(r)===0&&t.jsx(S,{children:"The water rate cannot be 0"})]}),t.jsx(fe,{className:"confirm",type:"submit",children:"Save"})]})},$e=()=>{const e=$(te),[n,i]=c.useState(e),[r,d]=c.useState(""),[a,l]=c.useState(""),[h,u]=c.useState(!0),[f,y]=c.useState(!0),b=$(oe)?"dark":"light",m=`radio-${n==="woman"?"active":"inactive"}-${b}`,j=`radio-${n==="man"?"active":"inactive"}-${b}`,v=300,k=12,M=Q=>{const{name:Z,value:w}=Q.target,I=/^(\d+([.,]\d{0,1})?)?$/;var x=w;switch(Z){case"gender":i(w);break;case"weight":w.match(/^[.,]/)?x="0"+w:x=w.replace(/^0+([^.])/,"$1"),u(x===""||parseFloat(x.replace(",","."))<=v),I.test(x)&&d(x);break;case"activeHours":w.match(/^[.,]/)?x="0"+w:x=w.replace(/^0+([^.])/,"$1"),y(x===""||parseFloat(x.replace(",","."))<=k),I.test(x)&&l(x);break}},J=n==="woman"?r*.03+a*.4:r*.04+a*.6,K=Math.round(J*10)/10;return t.jsx("div",{children:t.jsxs("form",{action:"",children:[t.jsx(ce,{children:"Calculate your rate:"}),t.jsxs(de,{children:[t.jsxs(T,{children:[t.jsx(B,{id:"woman",type:"radio",name:"gender",value:"woman",checked:n==="woman",onChange:M}),t.jsxs(E,{htmlFor:"woman",children:[t.jsx(W,{children:t.jsx(O,{children:t.jsx("use",{href:`${N}#${m}`})})}),"For woman"]})]}),t.jsxs(T,{children:[t.jsx(B,{id:"man",type:"radio",name:"gender",value:"man",checked:n==="man",onChange:M}),t.jsxs(E,{htmlFor:"man",children:[t.jsx(W,{children:t.jsx(O,{children:t.jsx("use",{href:`${N}#${j}`})})}),"For man"]})]})]}),t.jsxs(_,{children:["Your weight in kilograms:",t.jsx(z,{className:h?"":"error",type:"number",name:"weight",value:r,onChange:M,placeholder:"0"}),!h&&t.jsx(S,{children:`Weight cannot exceed ${v} kg`})]}),t.jsxs(_,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",t.jsx(z,{className:f?"":"error",type:"number",name:"activeHours",value:a,onChange:M,placeholder:"0"}),!f&&t.jsx(S,{children:`Active hours cannot exceed ${k} hours`})]}),t.jsxs(he,{children:[t.jsxs(pe,{children:["The required amount of water in liters per day:"," "]}),h&&f&&t.jsxs(xe,{children:[K," L"]})]})]})})},ve=o.div`
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
`,je=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ke=o.h2`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 26px;
  line-height: 1.23077;
  /* color: #2f2f2f; */
`,Se=o(ne)`
  color: ${({theme:e})=>e.color.blue};
  cursor: pointer;
`,Me=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,A=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`,H=o.span`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({theme:e})=>e.color.blue};
`,Fe=o.div`
  border: 1px solid ${({theme:e})=>e.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`,Ce=o.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`,Ne=o.span`
  color: ${({theme:e})=>e.color.blue};
`,ze=({isModalOpen:e,closeModal:n})=>t.jsx(t.Fragment,{children:e&&t.jsx(G,{onClose:n,children:t.jsxs(ve,{children:[t.jsxs("div",{children:[t.jsxs(je,{className:"topline",children:[t.jsx(ke,{children:"My daily norm"}),t.jsx(Se,{className:"close",onClick:n})]}),t.jsxs(Me,{children:[t.jsxs(A,{children:["For woman: ",t.jsx(H,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs(A,{children:["For man: ",t.jsx(H,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Fe,{children:t.jsxs(Ce,{children:[t.jsx(Ne,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),t.jsx("div",{children:t.jsx($e,{})}),t.jsx("div",{children:t.jsx(we,{closeModal:n})})]})})}),De=o.div`
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
`,Re=o.h2`
  /* color: #2f2f2f; */
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`,Le=o.button`
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
`,Ie=o.p`
  color: ${({theme:e})=>e.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`,Te=o.div`
  display: flex;
  gap: 12px;
`,Be=()=>{const{dailyWaterGoal:e}=$(ie),[n,i]=c.useState(!1),r=F(),d=()=>{i(!0)},a=()=>{i(!1)},l=(e/1e3).toFixed(1)+" L";return c.useEffect(()=>{r(Y())},[r]),t.jsxs(De,{children:[t.jsx(Re,{children:"My daily norma: "}),t.jsxs(Te,{children:[t.jsx(Ie,{children:l}),t.jsx(Le,{onClick:d,children:"Edit"})]}),t.jsx(ze,{isModalOpen:n,closeModal:a})]})},Ee=({isModalOpen:e,closeModal:n})=>t.jsx(t.Fragment,{children:e&&t.jsx(G,{onClose:n,children:t.jsx("div",{})})}),We=o.div`
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
`,Oe=o.div`
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
`,_e=o.button`
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
`,Ae=o.svg`
  fill: transparent;
  stroke: ${({theme:e})=>e.color.white};
`,He=()=>{const[e,n]=c.useState(!1),i=$(me),r=F(),d=()=>{n(!0)},a=()=>{n(!1)},l=i>100?100:i;return c.useEffect(()=>{r(re())},[r]),t.jsx(t.Fragment,{children:t.jsxs(We,{children:[t.jsx("h3",{children:"Today"}),t.jsxs("div",{className:"box",children:[t.jsx(Oe,{children:t.jsx("div",{className:"progress-bar-container",children:t.jsxs("div",{className:"progress-bar",children:[t.jsx("div",{className:"progress",style:{width:`${l}%`}}),t.jsx("div",{className:"marker-0",children:"0%"}),t.jsx("div",{className:"marker-50",children:"50%"}),t.jsx("div",{className:"marker-100",children:"100%"}),t.jsxs("div",{className:"indicator",style:{left:`${l}%`},children:[" ",t.jsx("p",{className:"progress-text",children:i>100?`${i}%`:`${l}%`})]})]})})}),t.jsxs(_e,{onClick:d,children:[t.jsx(Ae,{width:"20px",height:"20px",children:t.jsx("use",{xlinkHref:`${N}#plus-circle`})})," ",t.jsx("p",{children:"Add Water"})]})]}),e&&t.jsx(Ee,{isModalOpen:e,closeModal:a})]})})},Pe=()=>t.jsx("div",{children:"TodayWaterList"});var R={},Ye=q;Object.defineProperty(R,"__esModule",{value:!0});var U=R.default=void 0,Ge=Ye(V()),Ve=t;U=R.default=(0,Ge.default)((0,Ve.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var L={},qe=q;Object.defineProperty(L,"__esModule",{value:!0});var X=L.default=void 0,Ue=qe(V()),Xe=t;X=L.default=(0,Ue.default)((0,Xe.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Je=o.div`
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
`,Ke=({calendarRef:e,refData:n,waterData:i={}})=>{const{dayOfMonth:r,waterRate:d,percent:a,numberRecords:l}=i,h=n==null?void 0:n.current.getBoundingClientRect().left,u=e==null?void 0:e.current.getBoundingClientRect().left;let f=!0;const y=h-u;return y<200&&(f=!1),t.jsx(Je,{$delta:f,$deltaNum:y,children:Object.values(i).length?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:r}),t.jsxs("p",{children:["Daily norma: ",t.jsxs("span",{children:[d/1e3," L"]})]}),t.jsxs("p",{children:["Fulfillment of the daily norm:"," ",t.jsxs("span",{children:[a>100?100:a,"%"]})]}),t.jsxs("p",{children:["How many servings of water: ",t.jsx("span",{children:l})]})]}):t.jsx("h3",{children:"You don't have records on this day."})})},Qe=o.div`
  display: flex;
  flex-direction: column;
`,Ze=o.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,et=o.h2`
  color: ${({theme:e})=>e.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({theme:e})=>e.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,P=o.button`
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
`,tt=o.div`
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
`,ot=o.div`
  color: ${({theme:e})=>e.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,nt=o.span`
  font-size: 16px;
  line-height: 20px;
`,it=o.span`
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
`,rt=o.div`
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
`,at=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,st=({calendarRef:e,day:n,consumedWaterPercentage:i})=>{const[r,d]=c.useState(null),a=c.useRef(null),l=u=>{a.current&&!a.current.contains(u.target)&&d(null)};c.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const h=()=>{d(u=>u===n?null:n)};return t.jsxs(at,{children:[t.jsx("div",{children:r===n&&t.jsx(Ke,{calendarRef:e,refData:a,waterDay:i},n)}),t.jsx(tt,{ref:a,onClick:()=>h(),$isOutlineVisible:!i||i.percent<100,children:n}),t.jsx(it,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},n)},lt="#4fa94d",ct={"aria-busy":!0,role:"progressbar"},dt=o.div`
  display: ${e=>e.$visible?"flex":"none"};
`,ht="http://www.w3.org/2000/svg",g=242.776657104492,pt=1.6,xt=D`
12.5% {
  stroke-dasharray: ${g*.14}px, ${g}px;
  stroke-dashoffset: -${g*.11}px;
}
43.75% {
  stroke-dasharray: ${g*.35}px, ${g}px;
  stroke-dashoffset: -${g*.35}px;
}
100% {
  stroke-dasharray: ${g*.01}px, ${g}px;
  stroke-dashoffset: -${g*.99}px;
}
`;o.path`
  stroke-dasharray: ${g*.01}px, ${g};
  stroke-dashoffset: 0;
  animation: ${xt} ${pt}s linear infinite;
`;const ut=D`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${ut} 0.75s steps(12, end) infinite;
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
`;const ft=({height:e=80,width:n=80,radius:i=9,color:r=lt,ariaLabel:d="three-dots-loading",wrapperStyle:a,wrapperClass:l,visible:h=!0})=>t.jsx(dt,{style:a,$visible:h,className:l,"data-testid":"three-dots-loading","aria-label":d,...ct,children:t.jsxs("svg",{width:n,height:e,viewBox:"0 0 120 30",xmlns:ht,fill:r,"data-testid":"three-dots-svg",children:[t.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[t.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),gt=D`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${gt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const C={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.3s",cubicBezier:"cubic-bezier(0.5, 0, 0.2, 1)"}},mt=()=>{const[e,n]=c.useState(new Date),i=F(),r=c.useRef(null),d=$(s=>s.getCurrentNorm),a=$(ge),l=$(ye);c.useEffect(()=>{const s=new Date(e.getFullYear(),e.getMonth(),2),m=new Date(e.getFullYear(),e.getMonth()+1,1),p=s.toISOString().split("T")[0],j=m.toISOString().split("T")[0],v={startDate:p,endDate:j};i(ae(v)),console.log(v)},[i,e,d]);const h=()=>{const s=new Date(e.getFullYear(),e.getMonth()+1,1);n(s)},u=()=>{const s=new Date(e.getFullYear(),e.getMonth()-1,1);n(s)},f=()=>{const s=new Date;return e.getMonth()===s.getMonth()&&e.getFullYear()===s.getFullYear()},y=()=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),b=()=>{const s=y();return Array.from({length:s},(m,p)=>{var k;const j=p+1,v=a&&((k=a[p])==null?void 0:k.consumedWaterPercentage);return t.jsx(st,{dailyWaterGoal:r,day:j,consumedWaterPercentage:v},j)})};return t.jsxs(Qe,{className:"calendar",ref:r,children:[t.jsxs(Ze,{children:[t.jsx(et,{children:"Month"}),l&&t.jsx(ft,{height:"60",width:"60",radius:"9",color:C.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),t.jsxs(ot,{children:[t.jsx(P,{"aria-label":"Previous month",onClick:u,children:t.jsx(X,{sx:{color:C.colors.blue}})}),t.jsx(nt,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(e)}, ${e.getFullYear()}`}),t.jsx(P,{"aria-label":"Next month",onClick:h,disabled:f(),children:t.jsx(U,{sx:{color:C.colors.blue}})})]})]}),t.jsx(rt,{children:b()})]})},bt=o.div`
  background-image: url(${le});
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
`,yt=o.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`,wt=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({theme:e})=>e.device.tablet} {
    flex: 1;
  }
`,jt=()=>t.jsx(se,{children:t.jsxs(bt,{children:[t.jsxs(yt,{children:[t.jsx(Be,{}),t.jsx(He,{})]}),t.jsxs(wt,{children:[t.jsx(Pe,{}),t.jsx(mt,{})]})]})});export{jt as default};
