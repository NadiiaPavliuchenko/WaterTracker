import{u as h,K as x,N as c,j as o,O as m,Q as u,S as p,T as d,s as l,c as b,M as g,U as f,r as w,W as j,V as v,X as y}from"./index-44351efd.js";import{b as S,a as k,c as $,d as N}from"./bottle_desk_2x-0e16256e.js";const R=h.div`
  @media ${({theme:e})=>e.device.mobile} {
    .form {
      margin-top: 16px;
    }
    .label {
      font-family: 'Roboto-Regular';
      /* font-weight: 400; */
      font-size: 18px;
      line-height: 1.33333;
      /* color: #2f2f2f; */
    }
    .input-container {
      position: relative;
      width: 280px;
    }
    .input {
      font-family: 'Roboto-Regular';
      /* font-weight: 400; */
      font-size: 16px;
      line-height: 1.25;
      /* color: #000; */
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
      /* font-weight: 400; */
      font-size: 16px;
      line-height: 1.25;
      color: ${({theme:e})=>e.color.skyBlue};
    }
    .watchPasswordIcon {
      position: absolute;
      right: 20px;
      top: 55%;
      transform: translate(0%, -50%);
      /* z-index: 10; */
    }
    .buttonSignUp {
      border-radius: 10px;
      padding: 8px 30px;
      margin-bottom: 16px;
      width: 280px;
      height: 36px;
      box-shadow: ${({theme:e})=>e.boxShadow.normalButton};
      background-color: ${({theme:e})=>e.color.blue};

      font-family: 'Roboto-Medium';
      /* font-weight: 500; */
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
`,z=({submitFunc:e})=>{const n=x({email:c().email().required(),password:c().min(6).max(64).required()}),a={email:"",password:""};function s(i,t){e(i),t.resetForm()}function r(i){const t=i.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(t.type==="text"){t.type="password",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return o.jsx(o.Fragment,{children:o.jsx(R,{children:o.jsx(m,{initialValues:a,validationSchema:n,onSubmit:s,children:o.jsxs(u,{className:"form",autoComplete:"off",children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(p,{className:"input",type:"text",name:"email",placeholder:"Email"})}),o.jsx(d,{className:"error",name:"email",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",o.jsxs("div",{className:"input-container",children:[o.jsx(p,{className:"input",type:"password",name:"password",placeholder:"Password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(d,{className:"error",name:"password",component:"div"})]}),o.jsx("br",{}),o.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign In"})]})})})})},F=h.div`
  background-size: 100vw, contain;
  background-position: 0, 10px;
  background-repeat: no-repeat;
  background-image: url(${S});

  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    border: none;
  }
  @media ${({theme:e})=>e.device.mobile} {
    .title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
      /* color: #2f2f2f; */
      margin-top: 20px;
    }
    .link {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      background-color: transparent;

      line-height: 1.25;
      color: ${({theme:e})=>e.color.blue};
    }
    .bottle {
      // margin-top: 40px;
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({theme:e})=>e.device.tablet} {
    background-image: url(${k});
    .wrapper {
      width: 100%;
      position: relative;
    }
    .bottle {
      width: 736px;
      position: absolute;
      top: 0;
      left: 100px;
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${$});
    background-size: 1404px, 582px;
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {
      width: 916px;
      position: absolute;
      top: 30px;
      left: -100px;
    }
    .formCont {
      position: absolute;
      top: 120px;
      right: 90px;
    }
    .wrapper {
      width: 100%;
      position: relative;
    }
  }
`,C=h.div`
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
    /* color: #2f2f2f; */
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
`,_=({isModalOpen:e,closeModal:n})=>{const a=x({email:c().email().required()}),s={email:""},r=b(),i=t=>{r(f(t)),n()};return o.jsx(o.Fragment,{children:e&&o.jsx(g,{onClose:n,children:o.jsx(C,{children:o.jsx(m,{initialValues:s,validationSchema:a,onSubmit:i,children:o.jsxs(u,{className:"form",autoComplete:"off",noValidate:!0,children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your registered mail:",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(p,{className:"input",type:"email",name:"email",placeholder:"Email"})}),o.jsx(d,{className:"error",name:"email",component:"div"})]}),o.jsx("button",{type:"submit",children:"Send"})]})})})})})},M=()=>{const e=b(),[n,a]=w.useState(!1),s=()=>{a(!0)},r=()=>{a(!1)};function i(t){e(y(t))}return o.jsx(o.Fragment,{children:o.jsx(F,{children:o.jsxs(j,{children:[o.jsxs("div",{className:"wrapper",children:[o.jsxs("div",{className:"formCont",children:[o.jsx("h2",{className:"title",children:"Sign In"}),o.jsx(z,{submitFunc:i}),o.jsxs("div",{className:"link-container",children:[o.jsx(v,{className:"link",to:"/signup",children:"Sign Up"}),o.jsx("button",{className:"link",onClick:s,children:"Forgot Password"})]})]}),o.jsx("img",{className:"bottle",alt:"bottle of water",src:N})]}),n&&o.jsx(_,{isModalOpen:n,closeModal:r})]})})})};export{M as default};
