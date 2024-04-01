import{j as e,u as w,g as R,r as p,a as M,i as k,b as i,h as b,c as S,d as L,W as _}from"./index-38a4da37.js";import{b as E}from"./bg_img_bubbles-c11f2eb9.js";const I=()=>e.jsx("div",{children:"DailyNormaModal"}),B=()=>{const{waterRate:n}=w(R),[t,o]=p.useState(!1),h=()=>{o(!0)},s=()=>{o(!1)},a=(n/1e3).toFixed(1)+" L";return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:a}),e.jsx("button",{onClick:h,children:"Edit"})]}),e.jsx(I,{onClose:s,onShow:t})]})})},O=()=>e.jsx("div",{children:"TodayListModal"}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"WaterRatioPanel"}),e.jsx(O,{})]}),Y=()=>e.jsx("div",{children:"TodayWaterList"});var $={},A=k;Object.defineProperty($,"__esModule",{value:!0});var F=$.default=void 0,W=A(M()),P=e;F=$.default=(0,W.default)((0,P.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var v={},q=k;Object.defineProperty(v,"__esModule",{value:!0});var C=v.default=void 0,H=q(M()),U=e;C=v.default=(0,H.default)((0,U.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const V=n=>n.water.month,r={colors:{white:"#FFFFFF",black:"#2F2F2F",blue:"#407BFF",red:"#EF5050",orange:"#FF9D43",grey:"#ECF2FF",violet:"#9EBBFF",violet_light:"#D7E3FF"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},G=i.div`
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
    color: ${r.colors.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${r.colors.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${r.colors.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,J=({calendarRef:n,refData:t,waterData:o={}})=>{const{dayOfMonth:h,waterRate:s,percent:a,numberRecords:c}=o,x=t==null?void 0:t.current.getBoundingClientRect().left,u=n==null?void 0:n.current.getBoundingClientRect().left;let f=!0;const m=x-u;return m<250&&(f=!1),e.jsx(G,{$delta:f,$deltaNum:m,children:Object.values(o).length?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:h}),e.jsxs("p",{children:["Daily norma: ",e.jsxs("span",{children:[s/1e3," L"]})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[a>100?100:a,"%"]})]}),e.jsxs("p",{children:["How many servings of water: ",e.jsx("span",{children:c})]})]}):e.jsx("h3",{children:"You dont have records of this day."})})},K=i.div`
  display: flex;
  flex-direction: column;
`,Q=i.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,X=i.h2`
  color: ${r.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`,y=i.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${r.colors.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${r.colors.violet};
    cursor: not-allowed;
  }
`,Z=i.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${n=>n.$isOutlineVisible?`1px solid ${r.colors.orange}`:"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,ee=i.div`
  color: ${r.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`,te=i.span`
  font-size: 16px;
  line-height: 20px;
`,ne=i.span`
  color: ${r.colors.violet};

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
`,ie=i.div`
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
`,oe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,ae=({calendarRef:n,day:t,waterPercentage:o})=>{const[h,s]=p.useState(null),a=p.useRef(null),c=u=>{a.current&&!a.current.contains(u.target)&&s(null)};p.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const x=()=>{s(u=>u===t?null:t)};return e.jsxs(oe,{children:[e.jsx("div",{children:h===t&&e.jsx(J,{calendarRef:n,refData:a,waterData:o},t)}),e.jsx(Z,{ref:a,onClick:()=>x(),$isOutlineVisible:!o||o.percent<100,children:t}),e.jsx(ne,{children:o?`${Math.min(o.percent,100)}%`:"0%"})]},t)},re="#4fa94d",se={"aria-busy":!0,role:"progressbar"},le=i.div`
  display: ${n=>n.$visible?"flex":"none"};
`,ce="http://www.w3.org/2000/svg",l=242.776657104492,de=1.6,he=b`
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
  animation: ${he} ${de}s linear infinite;
`;const pe=b`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${pe} 0.75s steps(12, end) infinite;
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
`;const xe=({height:n=80,width:t=80,radius:o=9,color:h=re,ariaLabel:s="three-dots-loading",wrapperStyle:a,wrapperClass:c,visible:x=!0})=>e.jsx(le,{style:a,$visible:x,className:c,"data-testid":"three-dots-loading","aria-label":s,...se,children:e.jsxs("svg",{width:t,height:n,viewBox:"0 0 120 30",xmlns:ce,fill:h,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(o)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:o,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(o)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),ue=b`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${ue} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const fe=n=>{const[t,o]=p.useState(new Date),[h]=p.useState(),s=S(),a=p.useRef(null),c=w(V);p.useEffect(()=>{const d=`${t.getMonth()+1} - ${t.getFullYear()}`;s(L(d))},[s,t,n]);const x=()=>{const d=new Date(t.getFullYear(),t.getMonth()+1,1);o(d)},u=()=>{const d=new Date(t.getFullYear(),t.getMonth()-1,1);o(d)},f=()=>{const d=new Date;return t.getMonth()===d.getMonth()&&t.getFullYear()===d.getFullYear()},m=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),D=()=>{const d=m();return Array.from({length:d},(be,N)=>{const g=N+1,z=c==null?void 0:c.find(j=>j.dayOfMonth&&Number(j.dayOfMonth.split(",")[0])===g);return e.jsx(ae,{calendarRef:a,day:g,waterPercentage:z},g)})};return e.jsxs(K,{className:"calendar",ref:a,children:[e.jsxs(Q,{children:[e.jsx(X,{children:"Month"}),h&&e.jsx(xe,{height:"60",width:"60",radius:"9",color:r.colors.blue,ariaLabel:"three-dots-loading",wrapperStyle:{height:"30px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0}),e.jsxs(ee,{children:[e.jsx(y,{"aria-label":"Previous month",onClick:u,children:e.jsx(C,{sx:{color:r.colors.blue}})}),e.jsx(te,{children:`${new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}, ${t.getFullYear()}`}),e.jsx(y,{"aria-label":"Next month",onClick:x,disabled:f(),children:e.jsx(F,{sx:{color:r.colors.blue}})})]})]}),e.jsx(ie,{children:D()})]})};i.div`

background-color: #fff;
  background-image: url(${E});
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
`;const me=i.div`
 display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /*width: 50%;*/
    flex-direction: row;
  }
`,ge=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`,je=()=>e.jsx(_,{children:e.jsxs(me,{children:[e.jsxs("div",{className:"bottle-section",children:[e.jsx(B,{}),e.jsx(T,{})]}),e.jsxs(ge,{children:[e.jsx(Y,{}),e.jsx(fe,{})]})]})});export{je as default};
