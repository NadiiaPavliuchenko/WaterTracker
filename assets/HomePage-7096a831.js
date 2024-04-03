import{r as u,u as F,j as e,e as R,a as y,g as _,b as a,M as I,d as T,c as B,f as N,i as D,h as w,k as E,W}from"./index-90635126.js";import{b as O}from"./bg_img_bubbles-c11f2eb9.js";const Y=({closeModal:n})=>{const i=30 .toFixed(1),[s,l]=u.useState(i),r=h=>{const{value:p}=h.target,x=/^(\d+([.,]\d{0,1})?)?$/;var b=p;p.match(/^[.,]/)?b="0"+p:b=p.replace(/^0+([^.])/,"$1"),x.test(b)&&l(b)},c=F(),d=async h=>{h.preventDefault();const p=h.target.elements.dailyNorm.value*1e3;try{const{payload:x}=await c(R(p));x.user&&n()}catch(x){console.log("🚀 ~ error:",x)}};return e.jsxs("form",{onSubmit:d,children:[e.jsxs("label",{children:["Write down how much water you will drink:",e.jsx("input",{type:"number",name:"dailyNorm",value:s,onChange:r})]}),e.jsx("button",{className:"confirm",type:"submit",children:"Save"})]})},A=()=>{const n=y(_),[t,i]=u.useState(n),[s,l]=u.useState(""),[r,c]=u.useState(""),d=x=>{const{name:b,value:o}=x.target,j=/^(\d+([.,]\d{0,1})?)?$/;var g=o;switch(b){case"gender":i(o);break;case"weight":o.match(/^[.,]/)?g="0"+o:g=o.replace(/^0+([^.])/,"$1"),j.test(g)&&l(g);break;case"activeHours":o.match(/^[.,]/)?g="0"+o:g=o.replace(/^0+([^.])/,"$1"),j.test(g)&&c(g);break}},h=t==="woman"?s*.03+r*.4:s*.04+r*.6,p=Math.round(h*10)/10;return e.jsx("div",{children:e.jsxs("form",{action:"",children:[e.jsx("h3",{children:"Calculate your rate:"}),e.jsxs("label",{children:["Gender",e.jsxs("label",{children:["For woman",e.jsx("input",{type:"radio",name:"gender",value:"woman",checked:t==="woman",onChange:d})]}),e.jsxs("label",{children:["For man",e.jsx("input",{type:"radio",name:"gender",value:"man",checked:t==="man",onChange:d})]})]}),e.jsxs("label",{htmlFor:"",children:["Your weight in kilograms:",e.jsx("input",{type:"number",name:"weight",value:s,onChange:d})]}),e.jsxs("label",{htmlFor:"",children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx("input",{type:"number",name:"activeHours",value:r,onChange:d})]}),e.jsxs("p",{children:["The required amount of water in liters per day:"," ",e.jsxs("span",{children:[p," L"]})]})]})})},H=a.div`
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
`,V=({isModalOpen:n,closeModal:t})=>e.jsx(e.Fragment,{children:n&&e.jsx(I,{onClose:t,children:e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"topline",children:[e.jsx("h2",{children:"My daily norm"}),e.jsx(T,{className:"close",onClick:t})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["For woman: ",e.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man: ",e.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx("div",{children:e.jsxs("p",{children:[e.jsx("span",{children:"*"}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),e.jsx("div",{children:e.jsx(A,{})}),e.jsx("div",{children:e.jsx(Y,{closeModal:t})})]})})}),q=()=>{const{waterRate:n}=y(B),[t,i]=u.useState(!1),s=()=>{i(!0)},l=()=>{i(!1)},r=(n/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:r}),e.jsx("button",{onClick:s,children:"Edit"})]}),e.jsx(V,{isModalOpen:t,closeModal:l})]})})},P=()=>e.jsx("div",{children:"TodayListModal"}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"WaterRatioPanel"}),e.jsx(P,{})]}),U=()=>e.jsx("div",{children:"TodayWaterList"});var $={},J=D;Object.defineProperty($,"__esModule",{value:!0});var S=$.default=void 0,K=J(N()),Q=e;S=$.default=(0,K.default)((0,Q.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var k={},X=D;Object.defineProperty(k,"__esModule",{value:!0});var z=k.default=void 0,Z=X(N()),ee=e;z=k.default=(0,Z.default)((0,ee.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const te=n=>n.water.month,m={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},ne=a.div`
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
`,ie=({calendarRef:n,refData:t,waterData:i={}})=>{const{dayOfMonth:s,waterRate:l,percent:r,numberRecords:c}=i,d=t==null?void 0:t.current.getBoundingClientRect().left,h=n==null?void 0:n.current.getBoundingClientRect().left;let p=!0;const x=d-h;return x<250&&(p=!1),e.jsx(ne,{$delta:p,$deltaNum:x,children:Object.values(i).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:s}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[l/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:c})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},ae=a.div`
  display: flex;
  flex-direction: column;
`,re=a.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,oe=a.h2`
  color: ${m.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,C=a.button`
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
`,se=a.div`
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
`,le=a.div`
  color: ${m.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,ce=a.span`
  font-size: 16px;
  line-height: 20px;
`,de=a.span`
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
`,he=a.div`
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
`,pe=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,xe=({calendarRef:n,day:t,waterPercentage:i})=>{const[s,l]=u.useState(null),r=u.useRef(null),c=h=>{r.current&&!r.current.contains(h.target)&&l(null)};u.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const d=()=>{l(h=>h===t?null:t)};return e.jsxs(pe,{children:[e.jsx("div",{children:s===t&&e.jsx(ie,{calendarRef:n,refData:r,waterData:i},t)}),e.jsx(se,{ref:r,onClick:()=>d(),$isOutlineVisible:!i||i.percent<100,children:t}),e.jsx(de,{children:i?`${Math.min(i.percent,100)}%`:"0%"})]},t)},ue="#4fa94d",me={"aria-busy":!0,role:"progressbar"},fe=a.div`
  display: ${n=>n.$visible?"flex":"none"};
`,ge="http://www.w3.org/2000/svg",f=242.776657104492,be=1.6,je=w`
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
  animation: ${je} ${be}s linear infinite;
`;const ve=w`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${ve} 0.75s steps(12, end) infinite;
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
`;const ye=({height:n=80,width:t=80,radius:i=9,color:s=ue,ariaLabel:l="three-dots-loading",wrapperStyle:r,wrapperClass:c,visible:d=!0})=>e.jsx(fe,{style:r,$visible:d,className:c,"data-testid":"three-dots-loading","aria-label":l,...me,children:e.jsxs("svg",{width:t,height:n,viewBox:"0 0 120 30",xmlns:ge,fill:s,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),we=w`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${we} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const $e=n=>{const[t,i]=u.useState(new Date),[s]=u.useState(),l=F(),r=u.useRef(null),c=y(te);u.useEffect(()=>{const o=`${t.getMonth()+1} - ${t.getFullYear()}`;l(E(o))},[l,t,n]);const d=()=>{const o=new Date(t.getFullYear(),t.getMonth()+1,1);i(o)},h=()=>{const o=new Date(t.getFullYear(),t.getMonth()-1,1);i(o)},p=()=>{const o=new Date;return t.getMonth()===o.getMonth()&&t.getFullYear()===o.getFullYear()},x=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),b=()=>{const o=x();return Array.from({length:o},(j,g)=>{const v=g+1,L=c==null?void 0:c.find(M=>M.dayOfMonth&&Number(M.dayOfMonth.split(",")[0])===v);return e.jsx(xe,{calendarRef:r,day:v,waterPercentage:L},v)})};return e.jsxs(ae,{className:"calendar",ref:r,children:[e.jsxs(re,{children:[e.jsx(oe,{children:"Month"}),s&&e.jsx(ye,{height:"60",width:"60",radius:"9",color:m.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(le,{children:[e.jsx(C,{"aria-label":"Previous month",onClick:h,children:e.jsx(z,{sx:{color:m.colors.blue}})}),e.jsx(ce,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(C,{"aria-label":"Next month",onClick:d,disabled:p(),children:e.jsx(S,{sx:{color:m.colors.blue}})})]})]}),e.jsx(he,{children:b()})]})},ke=a.div`
  background-image: url(${O}); 
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
`,Me=a.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Ce=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex: 1;
  }
`,De=()=>e.jsx(W,{children:e.jsxs(ke,{children:[e.jsxs(Me,{children:[e.jsx(q,{}),e.jsx(G,{})]}),e.jsxs(Ce,{children:[e.jsx(U,{}),e.jsx($e,{})]})]})});export{De as default};
