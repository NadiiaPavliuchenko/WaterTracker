import{b as n,c,j as e,W as a}from"./index-ac56bcf0.js";const p=n.h1`
  display: none;
`,l=n.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2F2F2F;
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`,x=n.p`
  font-size: 24px;
  color: #2F2F2F;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,g=n.ul`
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
`,h=n.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,m=n.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media screen and(min-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and(min-width: 1440px) {
    min-width: 439px;
  }
`,b=n.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2F2F2F;
  line-height: 20px;
  margin-bottom: 12px;
`,u=n.button`
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
`,f=()=>{const i=c(),t=[{text:"Habit drive"},{text:"View statistics"},{text:"Personal rate setting"}];function o(){i("/signup")}return e.jsx(a,{children:e.jsxs(m,{children:[e.jsx(p,{children:"Hidden"}),e.jsx(l,{children:"Water consumption tracker"}),e.jsx(x,{children:"Record daily water intake and track"}),e.jsx(b,{children:"Tracker Benefits"}),e.jsx(g,{children:t.map(({text:s},d)=>e.jsx(h,{children:s},d))}),e.jsx(u,{type:"button",onClick:o,children:"Try tracker"})]})})},w=n.h2`
  font-weight: 500;
  font-size: 18px;
  color: #2F2F2F;
  margin-bottom: 12px;
`,k=n.li`
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
`,j=n.div`
  display: inline-block;
  margin: 0;
`,F=n.div`
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
`,y=n.ul`
  list-style-type: none;
  padding-left: 0;
`,v=()=>{const i=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx(j,{children:e.jsxs(F,{children:[e.jsx(w,{children:"Why drink water"}),e.jsx(y,{children:i.map((t,o)=>e.jsx(k,{children:t},o))})]})})},W=n.div`
  display: flex;
  flex-direction: column;
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
`,z=()=>e.jsx(a,{children:e.jsxs(W,{children:[e.jsx(f,{}),e.jsx(v,{})]})}),T="/WaterTrackerFrontend/assets/bg_mob-45e67b01.png",B="/WaterTrackerFrontend/assets/bg_tab-1f797613.png",$="/WaterTrackerFrontend/assets/bg_img-f981bb04.png",r="/WaterTrackerFrontend/assets/bg_img_bubbles-88afa2b3.png",C=n.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  // мобіл
  background-image: url(${T});

  // табл
  @media screen and (min-width: 768px) {
    background-image: url(${B});
  }

  // деск
  @media screen and (min-width: 1440px) {
    background-image: url(${$});
  }
`,M=n.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-image: url(${r});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    padding-bottom: 109px;
    background-image: url(${r});
  }
`,P=()=>e.jsx(a,{children:e.jsx(C,{children:e.jsx(M,{children:e.jsx(z,{})})})});export{P as default};
