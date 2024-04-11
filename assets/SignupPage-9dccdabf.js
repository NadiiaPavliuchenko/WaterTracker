import{u as m,B as b,C as d,J as y,j as o,F as u,D as g,E as p,G as c,s as l,c as f,M as $,K as k,r as h,W as S,L as v,N,O as R}from"./index-21cd69ca.js";import{b as x,a as I}from"./bottle_mob_2x-8d352aa4.js";import{b as C,a as F,c as P,d as z}from"./bottle_desk_2x-b7d1eae2.js";const B=m.div`
  @media ${({theme:e})=>e.device.mobile} {
    .form {
      margin-top: 16px;
    }
    .label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
    }
    .input-container {
      position: relative;
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

      height: 44px;
    }
    .input:hover,
    .input:focus {
      outline: none;
    }
    .errorInput {
      border: 1px solid ${({theme:e})=>e.color.red};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      background-color: ${({theme:e})=>e.color.white};
      color: ${({theme:e})=>e.color.red};
      border-radius: 6px;
      padding: 12px 10px;
      margin-top: 8px;
    }
    .input::placeholder {
      font-family: 'Roboto-Regular', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: ${({theme:e})=>e.color.skyBlue};
    }
    .watchPasswordIcon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate(0%, -50%);
      cursor: pointer;
    }
    .buttonSignUp {
      border-radius: 10px;
      padding: 8px 30px;
      margin-bottom: 16px;
      /* width: 280px; */
      height: 36px;
      border: none;
      box-shadow: ${({theme:e})=>e.boxShadow.normalButton};
      background-color: ${({theme:e})=>e.color.blue};
      transition: box-shadow 0.3s ease;

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
    .errorInput {
      width: 336px;
    }
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
    .errorInput {
      width: 384px;
    }
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
`,U=({submitFunc:e})=>{const s=b({email:d().email().required(),password:d().min(6).max(64).required(),repeatPassword:d().oneOf([y("password"),null],"Passwords must match")}),a={email:"",password:"",repeatPassword:""};function r(t,i){e({email:t.email,password:t.password}),i.resetForm()}function n(t){const i=t.target.closest(".watchPasswordIcon").previousSibling;if(i.type==="password"){i.type="text",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(i.type==="text"){i.type="password",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return o.jsx(o.Fragment,{children:o.jsx(B,{children:o.jsx(u,{initialValues:a,validationSchema:s,onSubmit:r,children:({errors:t,touched:i})=>o.jsxs(g,{className:"form",autoComplete:"off",children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(p,{className:i.email&&t.email?"errorInput":"input",type:"text",name:"email",placeholder:"Email"})}),o.jsx(c,{className:"error",name:"email",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",o.jsxs("div",{className:"input-container",children:[o.jsx(p,{className:i.email&&t.email?"errorInput":"input",type:"password",name:"password",placeholder:"Password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:n,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(c,{className:"error",name:"password",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",o.jsxs("div",{className:"input-container",children:[o.jsx(p,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:n,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(c,{className:"error",name:"repeatPassword",component:"div"})]}),o.jsx("br",{}),o.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},M=m.div`
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
  .link {
    transition: color 0.3s ease;
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
`,_=m.div`
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
`,E=({isModalOpen:e,closeModal:s})=>{const a=b({email:d().email().required()}),r={email:""},n=f(),t=i=>{n(k(i)),s()};return o.jsx(o.Fragment,{children:e&&o.jsx($,{onClose:s,children:o.jsx(_,{children:o.jsx(u,{initialValues:r,validationSchema:a,onSubmit:t,children:o.jsxs(g,{className:"form",autoComplete:"off",noValidate:!0,children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your mailbox to re-send verification email:",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(p,{className:"input",type:"email",name:"email",placeholder:"Email"})}),o.jsx(c,{className:"error",name:"email",component:"div"})]}),o.jsx("button",{type:"submit",children:"Send"})]})})})})})},q=()=>{const e=f(),[s,a]=h.useState(!1),[r,n]=h.useState(!1),t=()=>{a(!0)},i=()=>{a(!1)};function w(j){e(R(j)),n(!0)}return o.jsxs(o.Fragment,{children:[o.jsx(S,{children:o.jsxs(M,{children:[o.jsxs("div",{className:"wrapper",children:[o.jsxs("div",{className:"formCont",children:[o.jsx("h2",{className:"title",children:"Sign Up"}),o.jsx(U,{submitFunc:w}),o.jsxs("div",{className:"link-container",children:[o.jsx(v,{className:"link",to:"/signin",children:"Sign In"}),o.jsx("button",{className:"link",onClick:t,children:"Resend Email"})]})]}),o.jsxs("picture",{className:"bottle",children:[o.jsx("source",{srcSet:`${C} 1x, ${F} 2x`,media:"(min-width: 1440px)",width:"865",height:"680",type:"image/png"}),o.jsx("source",{srcSet:`${P} 1x, ${z} 2x`,media:"(min-width: 768px)",width:"656",height:"548",type:"image/png"}),o.jsx("source",{srcSet:`${x} 1x, ${I} 2x`,media:"(min-width: 320px)",width:"280",height:"210",type:"image/png"}),o.jsx("img",{className:"bottle",alt:"bottle of water",src:x})]})]}),s&&o.jsx(E,{isModalOpen:s,closeModal:i})]})}),r&&o.jsx(N,{to:"/signin"})]})};export{q as default};
