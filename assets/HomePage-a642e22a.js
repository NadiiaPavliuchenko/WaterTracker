import{r as v,i as y,j as e,M as L,a as d,u as b,b as D,e as O,g as E,c as T,d as i,h as w,f as B,W}from"./index-5e8f81fb.js";import{b as N}from"./bg_img_bubbles-c11f2eb9.js";var $={},Y=y;Object.defineProperty($,"__esModule",{value:!0});var S=$.default=void 0,A=Y(v()),H=e;S=$.default=(0,A.default)((0,H.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"CloseOutlined");const q=({children:n})=>e.jsx(L,{children:n}),P=()=>{const[n,t]=d.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)};return{isOpen:n,openModal:a,closeModal:r,handleKeyDown:o=>{o.key==="Escape"&&r()}}},V=n=>n.water.month,G=n=>{var t;return(t=n.water.dayInfo)==null?void 0:t.norm},K=()=>{const n=b(G),t=D(),a=r=>{r.preventDefault(),t(O(r.target.value))};return e.jsxs("form",{children:[e.jsxs("label",{children:["Write down how much water you will drink:",e.jsx("input",{type:"number",name:"dailyNorma",defaultValue:n})]}),e.jsx("button",{className:"confirm",onClick:a,children:"Save"})]})},U=()=>{const n=b(E),[t,a]=d.useState(n),[r,s]=d.useState(0),[o,l]=d.useState(0),c=m=>{const{name:f,value:g}=m.target;switch(f){case"gender":a(g);break;case"weight":s(g);break;case"activeHours":l(g);break}},x=t==="woman"?r*.03+o*.4:r*.04+o*.6;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx("h3",{children:"Calculate your rate:"}),e.jsxs("label",{children:["Gender",e.jsxs("label",{children:["Male",e.jsx("input",{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:c})]}),e.jsxs("label",{children:["Female",e.jsx("input",{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:c})]})]}),e.jsxs("label",{htmlFor:"",children:["Your weight in kilograms:",e.jsx("input",{type:"number",name:"weight",value:r,onChange:c})]}),e.jsxs("label",{htmlFor:"",children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx("input",{type:"number",name:"activeHours",value:o,onChange:c})]}),e.jsxs("p",{children:["The required amount of water in liters per day:"," ",e.jsxs("span",{children:[x," L"]})]})]})})},J=()=>{const{isOpen:n,closeModal:t,handleKeyDown:a}=P();return document.addEventListener("keydown",a),e.jsx(e.Fragment,{children:n&&e.jsx(q,{onClose:t,children:e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"topline",children:[e.jsx("h2",{children:"My daily norm"}),e.jsx(S,{className:"close",onClick:t})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["For woman: ",e.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man: ",e.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx("div",{children:e.jsxs("p",{children:[e.jsx("span",{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(U,{})}),e.jsx("div",{children:e.jsx(K,{})})]})})})},Q=()=>{const{waterRate:n}=b(T),[t,a]=d.useState(!1),r=()=>{a(!0)},s=()=>{a(!1)},o=(n/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:o}),e.jsx("button",{onClick:r,children:"Edit"})]}),e.jsx(J,{onClose:s,onShow:t})]})})},X=()=>e.jsx("div",{children:"TodayListModal"}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"WaterRatioPanel"}),e.jsx(X,{})]}),ee=()=>e.jsx("div",{children:"TodayWaterList"});var M={},te=y;Object.defineProperty(M,"__esModule",{value:!0});var _=M.default=void 0,ne=te(v()),ae=e;_=M.default=(0,ne.default)((0,ae.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var k={},ie=y;Object.defineProperty(k,"__esModule",{value:!0});var z=k.default=void 0,oe=ie(v()),re=e;z=k.default=(0,oe.default)((0,re.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const h={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},se=i.div`
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
    color: ${h.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${h.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${h.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,le=({calendarRef:n,refData:t,waterData:a={}})=>{const{dayOfMonth:r,waterRate:s,percent:o,numberRecords:l}=a,c=t==null?void 0:t.current.getBoundingClientRect().left,x=n==null?void 0:n.current.getBoundingClientRect().left;let m=!0;const f=c-x;return f<250&&(m=!1),e.jsx(se,{$delta:m,$deltaNum:f,children:Object.values(a).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:r}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[s/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[o>100?100:o,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:l})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},ce=i.div`
  display: flex;
  flex-direction: column;
`,de=i.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,he=i.h2`
  color: ${h.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,F=i.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${h.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${h.colors.violet};
    cursor: not-allowed;
  }
`,pe=i.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${n=>n.$isOutlineVisible?`1px solid ${h.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,ue=i.div`
  color: ${h.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,xe=i.span`
  font-size: 16px;
  line-height: 20px;
`,me=i.span`
  color: ${h.colors.violet};

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
`,fe=i.div`
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
`,ge=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,be=({calendarRef:n,day:t,waterPercentage:a})=>{const[r,s]=d.useState(null),o=d.useRef(null),l=x=>{o.current&&!o.current.contains(x.target)&&s(null)};d.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const c=()=>{s(x=>x===t?null:t)};return e.jsxs(ge,{children:[e.jsx("div",{children:r===t&&e.jsx(le,{calendarRef:n,refData:o,waterData:a},t)}),e.jsx(pe,{ref:o,onClick:()=>c(),$isOutlineVisible:!a||a.percent<100,children:t}),e.jsx(me,{children:a?`${Math.min(a.percent,100)}%`:"0%"})]},t)},je="#4fa94d",ve={"aria-busy":!0,role:"progressbar"},ye=i.div`
  display: ${n=>n.$visible?"flex":"none"};
`,we="http://www.w3.org/2000/svg",p=242.776657104492,$e=1.6,Me=w`
12.5% {
  stroke-dasharray: ${p*.14}px, ${p}px;
  stroke-dashoffset: -${p*.11}px;
}
43.75% {
  stroke-dasharray: ${p*.35}px, ${p}px;
  stroke-dashoffset: -${p*.35}px;
}
100% {
  stroke-dasharray: ${p*.01}px, ${p}px;
  stroke-dashoffset: -${p*.99}px;
}
`;i.path`
  stroke-dasharray: ${p*.01}px, ${p};
  stroke-dashoffset: 0;
  animation: ${Me} ${$e}s linear infinite;
`;const ke=w`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${ke} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;i.polyline`
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
`;const Ce=({height:n=80,width:t=80,radius:a=9,color:r=je,ariaLabel:s="three-dots-loading",wrapperStyle:o,wrapperClass:l,visible:c=!0})=>e.jsx(ye,{style:o,$visible:c,className:l,"data-testid":"three-dots-loading","aria-label":s,...ve,children:e.jsxs("svg",{width:t,height:n,viewBox:"0 0 120 30",xmlns:we,fill:r,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(a)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(a)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),Fe=w`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${Fe} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const De=n=>{const[t,a]=d.useState(new Date),[r]=d.useState(),s=D(),o=d.useRef(null),l=b(V);d.useEffect(()=>{const u=`${t.getMonth()+1} - ${t.getFullYear()}`;s(B(u))},[s,t,n]);const c=()=>{const u=new Date(t.getFullYear(),t.getMonth()+1,1);a(u)},x=()=>{const u=new Date(t.getFullYear(),t.getMonth()-1,1);a(u)},m=()=>{const u=new Date;return t.getMonth()===u.getMonth()&&t.getFullYear()===u.getFullYear()},f=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),g=()=>{const u=f();return Array.from({length:u},(ze,R)=>{const j=R+1,I=l==null?void 0:l.find(C=>C.dayOfMonth&&Number(C.dayOfMonth.split(",")[0])===j);return e.jsx(be,{calendarRef:o,day:j,waterPercentage:I},j)})};return e.jsxs(ce,{className:"calendar",ref:o,children:[e.jsxs(de,{children:[e.jsx(he,{children:"Month"}),r&&e.jsx(Ce,{height:"60",width:"60",radius:"9",color:h.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(ue,{children:[e.jsx(F,{"aria-label":"Previous month",onClick:x,children:e.jsx(z,{sx:{color:h.colors.blue}})}),e.jsx(xe,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(F,{"aria-label":"Next month",onClick:c,disabled:m(),children:e.jsx(_,{sx:{color:h.colors.blue}})})]})]}),e.jsx(fe,{children:g()})]})};i.div`
background-color: #fff;
  background-image: url(${N});
  background-repeat: no-repeat;
  background-size: cover;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;const Ne=i.div`
background-image: url(${N}); 
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  width: 100%;

 display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /*width: 50%;*/
    flex-direction: row;
  }
`,Se=i.div`
  flex: 1; 
`,_e=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /*width: 50%;*/
    flex: 1;
  }
`,Le=()=>e.jsx(W,{children:e.jsxs(Ne,{children:[e.jsxs(Se,{children:[e.jsx(Q,{}),e.jsx(Z,{})]}),e.jsxs(_e,{children:[e.jsx(ee,{}),e.jsx(De,{})]})]})});export{Le as default};
