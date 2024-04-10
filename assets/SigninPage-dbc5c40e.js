import{u as h,B as x,C as c,j as o,F as b,D as u,E as d,G as p,s as l,c as g,M as f,H as w,r as j,W as y,L as v,I as $}from"./index-dbea9ce3.js";import{b as m,a as k}from"./bottle_mob_2x-8d352aa4.js";import{b as S,a as N,c as I,d as R}from"./bottle_desk_2x-b7d1eae2.js";const C=h.div`
  @media ${({theme:e})=>e.device.mobile} {
    .form {
      margin-top: 16px;
    }
    .label {
      font-family: 'Roboto-Regular';
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
    }
    .input-container {
      position: relative;
      width: 280px;
    }
    .input {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      background-color: ${({theme:e})=>e.color.white};
      color: ${({theme:e})=>e.color.blue};
      border: 1px solid ${({theme:e})=>e.color.paleBlue};
      border-radius: 6px;
      padding: 12px 10px;
      margin-top: 8px;
      width: 280px;

      height: 44px;
    }
    .input:hover,
    .input:focus {
      outline: none;
    }
    .input::placeholder {
      font-family: 'Roboto-Regular';
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: ${({theme:e})=>e.color.skyBlue};
    }
    .watchPasswordIcon {
      position: absolute;
      right: 20px;
      top: 55%;
      transform: translate(0%, -50%);
      cursor: pointer;
    }
    .buttonSignUp {
      border-radius: 10px;
      padding: 8px 30px;
      margin-bottom: 16px;
      width: 280px;
      height: 36px;
      border: none;
      box-shadow: ${({theme:e})=>e.boxShadow.normalButton};
      background-color: ${({theme:e})=>e.color.blue};

      font-family: 'Roboto-Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
      color: ${({theme:e})=>e.color.white};
    }
    .buttonSignUp:hover,
    .buttonSignUp:focus {
      box-shadow: ${({theme:e})=>e.boxShadow.hoverButton};
    }
    .buttonSignUp:active {
      box-shadow: ${({theme:e})=>e.boxShadow.activeButton};
    }
    .error {
      color: ${({theme:e})=>e.color.red};
    }
  }
  @media ${({theme:e})=>e.device.tablet} {
    .input-container {
      width: 336px;
    }
    .input {
      width: 336px;
      height: 44px;
    }
    .buttonSignUp {
      width: 336px;
      height: 44px;
    }
  }

  @media ${({theme:e})=>e.device.desktop} {
    .input-container {
      width: 384px;
    }
    .input {
      width: 384px;
      height: 44px;
    }
    .buttonSignUp {
      width: 384px;
      height: 44px;
    }
  }
`,F=({submitFunc:e})=>{const n=x({email:c().email().required(),password:c().min(6).max(64).required()}),a={email:"",password:""};function s(i,t){e(i),t.resetForm()}function r(i){const t=i.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(t.type==="text"){t.type="password",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return o.jsx(o.Fragment,{children:o.jsx(C,{children:o.jsx(b,{initialValues:a,validationSchema:n,onSubmit:s,children:o.jsxs(u,{className:"form",autoComplete:"off",children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(d,{className:"input",type:"text",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",o.jsxs("div",{className:"input-container",children:[o.jsx(d,{className:"input",type:"password",name:"password",placeholder:"Password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(p,{className:"error",name:"password",component:"div"})]}),o.jsx("br",{}),o.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign In"})]})})})})},B=h.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesMob};
  margin-top: 24px;

  .wrapper {
    width: 100%;
    position: relative;
  }
  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 280px;
  }
  button {
    border: none;
    background-color: transparent;
  }
  .link:hover,
  .link:focus {
    color: ${({theme:e})=>e.color.orange};
  }

  @media ${({theme:e})=>e.device.mobile} {
    .title {
      font-family: 'Roboto-Medium', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
    }
    .link {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;

      line-height: 1.25;
      color: ${({theme:e})=>e.color.blue};
    }
    .bottle {
    }
  }
  @media ${({theme:e})=>e.device.tablet} {
    background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesTab};
    margin-top: 40px;
    .wrapper {
      display: flex;
    }
    .formCont {
      width: 336px;
    }
    .link-container {
      width: 336px;
    }
  }
  @media ${({theme:e})=>e.device.tabletAndDesktop} {
    .formCont {
      z-index: 1;
    }
    .bottle {
      position: absolute;
      top: 30px;
      right: -15px;
    }
  }
  @media ${({theme:e})=>e.device.desktop} {
    background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesDesk};
    margin-top: 0;

    .bottle {
      order: 1;
      margin-left: -70px;
    }
    .formCont {
      order: 2;
      position: absolute;
      top: 130px;
      right: 150px;
    }

    .link-container {
      width: 384px;
    }
  }
`,z=h.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme:e})=>e.color.white};
  width: 280px;
  padding: 20px 40px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33333;
  }
  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.blue};
    background-color: transparent;

    border: 1px solid ${({theme:e})=>e.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    margin-top: 8px;
    width: 250px;
    height: 44px;
  }
  input:hover,
  input:focus {
    outline: none;
  }
  input::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({theme:e})=>e.color.skyBlue};
  }

  button {
    border-radius: 10px;
    padding: 8px 30px;
    margin-bottom: 16px;
    width: 200px;
    height: 36px;
    box-shadow: ${({theme:e})=>e.boxShadow.normalButton};
    background: ${({theme:e})=>e.color.blue};

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: ${({theme:e})=>e.color.white};
  }
  button:hover,
  button:focus {
    box-shadow: ${({theme:e})=>e.boxShadow.hoverButton};
  }
  button:active {
    box-shadow: ${({theme:e})=>e.boxShadow.activeButton};
  }
  .error {
    color: red;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`,M=({isModalOpen:e,closeModal:n})=>{const a=x({email:c().email().required()}),s={email:""},r=g(),i=t=>{r(w(t)),n()};return o.jsx(o.Fragment,{children:e&&o.jsx(f,{onClose:n,children:o.jsx(z,{children:o.jsx(b,{initialValues:s,validationSchema:a,onSubmit:i,children:o.jsxs(u,{className:"form",autoComplete:"off",noValidate:!0,children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your registered mail:",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(d,{className:"input",type:"email",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("button",{type:"submit",children:"Send"})]})})})})})},U=()=>{const e=g(),[n,a]=j.useState(!1),s=()=>{a(!0)},r=()=>{a(!1)};function i(t){e($(t))}return o.jsx(o.Fragment,{children:o.jsx(y,{children:o.jsxs(B,{children:[o.jsxs("div",{className:"wrapper",children:[o.jsxs("div",{className:"formCont",children:[o.jsx("h2",{className:"title",children:"Sign In"}),o.jsx(F,{submitFunc:i}),o.jsxs("div",{className:"link-container",children:[o.jsx(v,{className:"link",to:"/signup",children:"Sign Up"}),o.jsx("button",{className:"link",onClick:s,children:"Forgot Password"})]})]}),o.jsxs("picture",{className:"bottle",children:[o.jsx("source",{srcSet:`${S} 1x, ${N} 2x`,media:"(min-width: 1440px)",width:"865",height:"680",type:"image/png"}),o.jsx("source",{srcSet:`${I} 1x, ${R} 2x`,media:"(min-width: 768px)",width:"656",height:"548",type:"image/png"}),o.jsx("source",{srcSet:`${m} 1x, ${k} 2x`,media:"(min-width: 320px)",width:"280",height:"210",type:"image/png"}),o.jsx("img",{className:"bottle",alt:"bottle of water",src:m})]})]}),n&&o.jsx(M,{isModalOpen:n,closeModal:r})]})})})};export{U as default};
