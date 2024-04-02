import{k as n,o as c,j as e,p as a,q as l}from"./index-fe8544a9.js";import{b as r}from"./bg_img_bubbles-c11f2eb9.js";const x=n.h1`
  display: none;
`,h=n.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2F2F2F;
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`,g=n.p`
  font-size: 24px;
  color: #2F2F2F;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,m=n.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: #2F2F2F;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and(min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,b=n.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,u=n.div`
  display: inline-block;
  // max-width: 280px;
  margin: auto;

  @media screen and(min-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and(min-width: 1440px) {
    min-width: 439px;
  }
`,f=n.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2F2F2F;
  line-height: 20px;
  margin-bottom: 12px;
`,w=n.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: #407BFF;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and(min-width: 768px) {
    width: 280px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and(min-width: 1440px) {
    width: 384px;
  }
`,k=n.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and(min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,j=()=>{const i=c(),t=[{text:"Habit drive",id:`${a}#calendar`},{text:"View statistics",id:`${a}#presentation-chart-bar`},{text:"Personal rate setting",id:`${a}#wrench-screwdriver`}];function o(){i("/signup")}return e.jsxs(u,{children:[e.jsx(x,{children:"Hidden"}),e.jsx(h,{children:"Water consumption tracker"}),e.jsx(g,{children:"Record daily water intake and track"}),e.jsx(f,{children:"Tracker Benefits"}),e.jsx(m,{children:t.map(({id:s,text:d},p)=>e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:s})}),d]},p))}),e.jsx(w,{type:"button",onClick:o,children:"Try tracker"})]})},v=n.h2`
  font-weight: 500;
  font-size: 18px;
  color: #2F2F2F;
  margin-bottom: 12px;
`,y=n.li`
  font-size: 16px;
  color: #2F2F2F;
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #407BFF;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`,F=n.div`
  display: inline-block;
  margin: 0;
`,z=n.div`
  display: inline-block;

  width: 280px;

  padding: 24px 16px;
  background-color: #ecf2ff;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,T=n.ul`
  list-style-type: none;
  padding-left: 0;
`,W=()=>{const i=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx(F,{children:e.jsxs(z,{children:[e.jsx(v,{children:"Why drink water"}),e.jsx(T,{children:i.map((t,o)=>e.jsx(y,{children:t},o))})]})})},B=n.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media screen and(min-width: 768px) {
    gap: 60px;
    align-items: stretch;
  }

  @media screen and(min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    gap: 81px;
  }
`,$=()=>e.jsxs(B,{children:[e.jsx(j,{}),e.jsx(W,{})]}),C="/WaterTrackerFrontend/assets/bg_mob-45e67b01.png",M="/WaterTrackerFrontend/assets/bg_tab-1f797613.png",P="/WaterTrackerFrontend/assets/bg_img-f981bb04.png",S=n.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;


  // мобіл
  background-image: url(${C});

  // табл
  @media screen and (min-width: 768px) {
    background-image: url(${M});
    min-height: 100vh;
  }

  // деск
  @media screen and (min-width: 1440px) {
    background-image: url(${P});
    min-height: 100vh;
  }
`,H=n.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  min-height: calc(100vh - padding-bottom);

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
    min-height: calc(100vh - padding-bottom);

    background-image: url(${r});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    padding-bottom: 109px;

    background-image: url(${r});
    min-height: calc(100vh - padding-bottom);
  }
`,D=()=>e.jsx(S,{children:e.jsx(H,{children:e.jsx(l,{children:e.jsx($,{})})})});export{D as default};
