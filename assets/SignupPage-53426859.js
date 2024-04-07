import{u as h,B as m,C as d,J as w,j as o,F as u,D as b,E as c,G as p,s as l,c as f,M as j,K as k,b as v,N as y,r as S,W as $,L as N,O as x,P as R}from"./index-bf1695e6.js";import{b as C}from"./bottle_desk_2x-46bac030.js";const F=h.div`
  @media ${({theme:e})=>e.device.mobile} {
    .form {
      margin-top: 16px;
    }
    .label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
      /* color: #2f2f2f; */
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
      /* color: #000; */
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
      font-family: 'Roboto', sans-serif;
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
      /* z-index: 10; */
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

      font-family: 'Roboto-medium';
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
`,P=({submitFunc:e})=>{const s=m({email:d().email().required(),password:d().min(6).max(64).required(),repeatPassword:d().oneOf([w("password"),null],"Passwords must match")}),a={email:"",password:"",repeatPassword:""};function n(t,i){e({email:t.email,password:t.password}),i.resetForm()}function r(t){const i=t.target.closest(".watchPasswordIcon").previousSibling;if(i.type==="password"){i.type="text",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(i.type==="text"){i.type="password",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return o.jsx(o.Fragment,{children:o.jsx(F,{children:o.jsx(u,{initialValues:a,validationSchema:s,onSubmit:n,children:o.jsxs(b,{className:"form",autoComplete:"off",children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(c,{className:"input",type:"text",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",o.jsxs("div",{className:"input-container",children:[o.jsx(c,{className:"input",type:"password",name:"password",placeholder:"Password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(p,{className:"error",name:"password",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",o.jsxs("div",{className:"input-container",children:[o.jsx(c,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(p,{className:"error",name:"repeatPassword",component:"div"})]}),o.jsx("br",{}),o.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},z=h.div`
  background-size: 100vw, contain;
  background-position: 0, 10px;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesMob};

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

      line-height: 1.25;
      color: ${({theme:e})=>e.color.blue};
    }
    .bottle {
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({theme:e})=>e.device.tablet} {
    background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesTab};
    .wrapper {
      width: 100%;
      position: relative;
    }
    .bottle {
      width: 736px;
      position: absolute;
      top: 10px;
      right: -150px;
    }
    .link-container {
      width: 336px;
    }
  }
  @media ${({theme:e})=>e.device.desktop} {
    background-image: ${({theme:e})=>e.backgroundImage.bodyBubblesDesk};
    background-size: 1404px, 582px;
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {
      width: 916px;
      position: absolute;
      top: -100px;
      left: -210%;
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
    .link-container {
      width: 384px;
    }
  }
`,B=h.div`
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
`,U=({isModalOpen:e,closeModal:s})=>{const a=m({email:d().email().required()}),n={email:""},r=f(),t=i=>{r(k(i)),s()};return o.jsx(o.Fragment,{children:e&&o.jsx(j,{onClose:s,children:o.jsx(B,{children:o.jsx(u,{initialValues:n,validationSchema:a,onSubmit:t,children:o.jsxs(b,{className:"form",autoComplete:"off",noValidate:!0,children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email for re-send code:",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(c,{className:"input",type:"email",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("button",{type:"submit",children:"Send"})]})})})})})},M=()=>{const e=f(),s=v(y),[a,n]=S.useState(!1),r=()=>{n(!0)},t=()=>{n(!1)};function i(g){e(R(g))}return o.jsxs(o.Fragment,{children:[o.jsx(z,{children:o.jsxs($,{children:[o.jsx("div",{className:"wrapper",children:o.jsxs("div",{className:"formCont",children:[o.jsx("h2",{className:"title",children:"Sign Up"}),o.jsx(P,{submitFunc:i}),o.jsxs("div",{className:"link-container",children:[" ",o.jsx(N,{className:"link",to:"/signin",children:"Sign In"}),o.jsx("button",{className:"link",onClick:r,children:"Re-send code"})]}),o.jsx("img",{className:"bottle",alt:"bottle of water",src:C})]})}),a&&o.jsx(U,{isModalOpen:a,closeModal:t})]})}),s?o.jsx(x,{to:"/signin"}):o.jsx(x,{to:"/signup"})]})};export{M as default};
