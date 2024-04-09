import{u as x,A as b,B as d,I as u,j as t,F as g,C as w,D as c,s as i,E as p,P as f,r as j,c as v,W as y,L as h,N as k,T as $}from"./index-151c25cf.js";import{b as m,a as S}from"./bottle_mob_2x-8d352aa4.js";import{b as N,a as P,c as I,d as F}from"./bottle_desk_2x-b7d1eae2.js";const R=x.div`
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
`,_=({submitFunc:e})=>{const r=b({password:d().min(6).max(64).required(),repeatPassword:d().oneOf([u("password"),null],"Passwords must match")}),n={password:"",repeatPassword:""};function l(o,s){e(o.password),s.resetForm()}function a(o){const s=o.target.closest(".watchPasswordIcon").previousSibling;if(s.type==="password"){s.type="text",o.target.closest("SVG").firstChild.href.baseVal=i+"#eye-opened";return}if(s.type==="text"){s.type="password",o.target.closest("SVG").firstChild.href.baseVal=i+"#eye-closed";return}}return t.jsx(t.Fragment,{children:t.jsx(R,{children:t.jsx(g,{initialValues:n,validationSchema:r,onSubmit:l,children:t.jsxs(w,{className:"form",autoComplete:"off",children:[t.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",t.jsxs("div",{className:"input-container",children:[t.jsx(c,{className:"input",type:"password",name:"password",placeholder:"Password"}),t.jsx("svg",{className:"watchPasswordIcon",onClick:a,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:t.jsx("use",{href:i+"#eye-closed"})})]}),t.jsx(p,{className:"error",name:"password",component:"div"})]}),t.jsx("br",{}),t.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",t.jsxs("div",{className:"input-container",children:[t.jsx(c,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),t.jsx("svg",{className:"watchPasswordIcon",onClick:a,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:t.jsx("use",{href:i+"#eye-closed"})})]}),t.jsx(p,{className:"error",name:"repeatPassword",component:"div"})]}),t.jsx("br",{}),t.jsx("button",{className:"buttonSignUp",type:"submit",children:"Save"})]})})})})},B=x.div`
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
    .link {
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
`,E=()=>{const{recoveryToken:e}=f(),[r,n]=j.useState(void 0),l=v();function a(o){l($({recoveryToken:e,password:o})),n(o)}return t.jsxs(t.Fragment,{children:[t.jsx(y,{children:t.jsx(B,{children:t.jsxs("div",{className:"wrapper",children:[t.jsxs("div",{className:"formCont",children:[t.jsx("h2",{className:"title",children:"Recover Password"}),t.jsx(_,{submitFunc:a}),t.jsxs("div",{className:"link-container",children:[t.jsx(h,{className:"link",to:"/signin",children:"Sign In"}),t.jsx(h,{className:"link",to:"/signup",children:"Sign Up"})]})]}),t.jsxs("picture",{className:"bottle",children:[t.jsx("source",{srcSet:`${N} 1x, ${P} 2x`,media:"(min-width: 1440px)",type:"image/png"}),t.jsx("source",{srcSet:`${I} 1x, ${F} 2x`,media:"(min-width: 768px)",type:"image/png"}),t.jsx("source",{srcSet:`${m} 1x, ${S} 2x`,media:"(min-width: 320px)",type:"image/png"}),t.jsx("img",{className:"bottle",alt:"bottle of water",src:m})]})]})})}),r&&t.jsx(k,{to:"/signin"})]})};export{E as default};
