import{j as e,u as F,g as C,r as u,a as j,i as y,b as i,h as m}from"./index-a21e17eb.js";const D=()=>e.jsx("div",{children:"DailyNormaModal"}),N=()=>{const{waterRate:t}=F(C),[n,o]=u.useState(!1),c=()=>{o(!0)},d=()=>{o(!1)},r=(t/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:r}),e.jsx("button",{onClick:c,children:"Edit"})]}),e.jsx(D,{onClose:d,onShow:n})]})})},z=()=>e.jsx("div",{children:"TodayListModal"}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"WaterRatioPanel"}),e.jsx(z,{})]}),L=()=>e.jsx("div",{children:"TodayWaterList"});var g={},_=y;Object.defineProperty(g,"__esModule",{value:!0});var w=g.default=void 0,S=_(j()),E=e;w=g.default=(0,S.default)((0,E.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var b={},I=y;Object.defineProperty(b,"__esModule",{value:!0});var M=b.default=void 0,B=I(j()),O=e;M=b.default=(0,B.default)((0,O.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const a={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},A=i.div`
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
    color: ${a.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${a.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${a.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,T=({calendarRef:t,refData:n,waterData:o={}})=>{const{dayOfMonth:c,waterRate:d,percent:r,numberRecords:h}=o,p=n==null?void 0:n.current.getBoundingClientRect().left,x=t==null?void 0:t.current.getBoundingClientRect().left;let s=!0;const f=p-x;return f<250&&(s=!1),e.jsx(A,{$delta:s,$deltaNum:f,children:Object.values(o).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:c}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[d/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[r>100?100:r,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:h})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},Y=i.div`
  display: flex;
  flex-direction: column;
`,P=i.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,q=i.h2`
  color: ${a.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,v=i.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${a.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${a.colors.violet};
    cursor: not-allowed;
  }
`,W=i.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${t=>t.$isOutlineVisible?`1px solid ${a.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,H=i.div`
  color: ${a.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,U=i.span`
  font-size: 16px;
  line-height: 20px;
`,V=i.span`
  color: ${a.colors.violet};

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
`,G=i.div`
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
`,J=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,K=({calendarRef:t,day:n,waterPercentage:o})=>{const[c,d]=u.useState(null),r=u.useRef(null),h=x=>{r.current&&!r.current.contains(x.target)&&d(null)};u.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]);const p=()=>{d(x=>x===n?null:n)};return e.jsxs(J,{children:[e.jsx("div",{children:c===n&&e.jsx(T,{calendarRef:t,refData:r,waterData:o},n)}),e.jsx(W,{ref:r,onClick:()=>p(),$isOutlineVisible:!o||o.percent<100,children:n}),e.jsx(V,{children:o?`${Math.min(o.percent,100)}%`:"0%"})]},n)},Q="#4fa94d",X={"aria-busy":!0,role:"progressbar"},Z=i.div`
  display: ${t=>t.$visible?"flex":"none"};
`,ee="http://www.w3.org/2000/svg",l=242.776657104492,te=1.6,ne=m`
12.5% {
  stroke-dasharray: ${l*.14}px, ${l}px;
  stroke-dashoffset: -${l*.11}px;
}
43.75% {
  stroke-dasharray: ${l*.35}px, ${l}px;
  stroke-dashoffset: -${l*.35}px;
}
100% {
  stroke-dasharray: ${l*.01}px, ${l}px;
  stroke-dashoffset: -${l*.99}px;
}
`;i.path`
  stroke-dasharray: ${l*.01}px, ${l};
  stroke-dashoffset: 0;
  animation: ${ne} ${te}s linear infinite;
`;const oe=m`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${oe} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;i.polyline`
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
`;const ie=({height:t=80,width:n=80,radius:o=9,color:c=Q,ariaLabel:d="three-dots-loading",wrapperStyle:r,wrapperClass:h,visible:p=!0})=>e.jsx(Z,{style:r,$visible:p,className:h,"data-testid":"three-dots-loading","aria-label":d,...X,children:e.jsxs("svg",{width:n,height:t,viewBox:"0 0 120 30",xmlns:ee,fill:c,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(o)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:o,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(o)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),re=m`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${re} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const ae=()=>{const[t,n]=u.useState(new Date),[o]=u.useState(),c=u.useRef(null),d=()=>{const s=new Date(t.getFullYear(),t.getMonth()+1,1);n(s)},r=()=>{const s=new Date(t.getFullYear(),t.getMonth()-1,1);n(s)},h=()=>{const s=new Date;return t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear()},p=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),x=()=>{const s=p();return Array.from({length:s},(f,k)=>{const $=k+1;return e.jsx(K,{calendarRef:c,day:$,waterPercentage:null},$)})};return e.jsxs(Y,{className:"calendar",ref:c,children:[e.jsxs(P,{children:[e.jsx(q,{children:"Month"}),o&&e.jsx(ie,{height:"60",width:"60",radius:"9",color:a.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(H,{children:[e.jsx(v,{"aria-label":"Previous month",onClick:r,children:e.jsx(M,{sx:{color:a.colors.blue}})}),e.jsx(U,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(v,{"aria-label":"Next month",onClick:d,disabled:h(),children:e.jsx(w,{sx:{color:a.colors.blue}})})]})]}),e.jsx(G,{children:x()})]})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"HomePage"}),e.jsx(N,{}),e.jsx(R,{}),e.jsx(L,{}),e.jsx(ae,{})]});export{le as default};
