import{u as m,A as b,B as d,I as j,j as o,F as u,C as g,D as c,E as p,s as l,c as f,M as y,J as k,b as $,K as v,r as S,W as N,L as R,N as x,O as C}from"./index-47d08efa.js";import{b as h,a as F}from"./bottle_mob_2x-8d352aa4.js";import{b as I,a as P,c as B,d as U}from"./bottle_desk_2x-b7d1eae2.js";const z=m.div`
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

      font-family: 'Roboto-medium';
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
`,E=({submitFunc:e})=>{const i=b({email:d().email().required(),password:d().min(6).max(64).required(),repeatPassword:d().oneOf([j("password"),null],"Passwords must match")}),a={email:"",password:"",repeatPassword:""};function n(t,s){e({email:t.email,password:t.password}),s.resetForm()}function r(t){const s=t.target.closest(".watchPasswordIcon").previousSibling;if(s.type==="password"){s.type="text",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(s.type==="text"){s.type="password",t.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return o.jsx(o.Fragment,{children:o.jsx(z,{children:o.jsx(u,{initialValues:a,validationSchema:i,onSubmit:n,children:o.jsxs(g,{className:"form",autoComplete:"off",children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(c,{className:"input",type:"text",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",o.jsxs("div",{className:"input-container",children:[o.jsx(c,{className:"input",type:"password",name:"password",placeholder:"Password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(p,{className:"error",name:"password",component:"div"})]}),o.jsx("br",{}),o.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",o.jsxs("div",{className:"input-container",children:[o.jsx(c,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),o.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:o.jsx("use",{href:l+"#eye-closed"})})]}),o.jsx(p,{className:"error",name:"repeatPassword",component:"div"})]}),o.jsx("br",{}),o.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},_=m.div`
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
`,M=m.div`
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
`,V=({isModalOpen:e,closeModal:i})=>{const a=b({email:d().email().required()}),n={email:""},r=f(),t=s=>{r(k(s)),i()};return o.jsx(o.Fragment,{children:e&&o.jsx(y,{onClose:i,children:o.jsx(M,{children:o.jsx(u,{initialValues:n,validationSchema:a,onSubmit:t,children:o.jsxs(g,{className:"form",autoComplete:"off",noValidate:!0,children:[o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your mailbox to re-send verification email:",o.jsx("br",{}),o.jsx("div",{className:"input-container",children:o.jsx(c,{className:"input",type:"email",name:"email",placeholder:"Email"})}),o.jsx(p,{className:"error",name:"email",component:"div"})]}),o.jsx("button",{type:"submit",children:"Send"})]})})})})})},A=()=>{const e=f(),i=$(v),[a,n]=S.useState(!1),r=()=>{n(!0)},t=()=>{n(!1)};function s(w){e(C(w))}return o.jsxs(o.Fragment,{children:[o.jsx(N,{children:o.jsxs(_,{children:[o.jsxs("div",{className:"wrapper",children:[o.jsxs("div",{className:"formCont",children:[o.jsx("h2",{className:"title",children:"Sign Up"}),o.jsx(E,{submitFunc:s}),o.jsxs("div",{className:"link-container",children:[o.jsx(R,{className:"link",to:"/signin",children:"Sign In"}),o.jsx("button",{className:"link",onClick:r,children:"Resend Email"})]})]}),o.jsxs("picture",{className:"bottle",children:[o.jsx("source",{srcSet:`${I} 1x, ${P} 2x`,media:"(min-width: 1440px)",type:"image/png"}),o.jsx("source",{srcSet:`${B} 1x, ${U} 2x`,media:"(min-width: 768px)",type:"image/png"}),o.jsx("source",{srcSet:`${h} 1x, ${F} 2x`,media:"(min-width: 320px)",type:"image/png"}),o.jsx("img",{className:"bottle",alt:"bottle of water",src:h})]})]}),a&&o.jsx(V,{isModalOpen:a,closeModal:t})]})}),i?o.jsx(x,{to:"/signin"}):o.jsx(x,{to:"/signup"})]})};export{A as default};
