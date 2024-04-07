import{u as m,O as x,Q as l,_ as u,j as e,S as g,T as b,U as p,V as c,s as i,c as f,b as w,$ as j,W as v,Y as S,a0 as h,a1 as y}from"./index-924ae573.js";import{b as $,a as k,c as N,d as P}from"./bottle_desk_2x-0e16256e.js";const U=m.div`
  @media ${({theme:o})=>o.device.mobile} {
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
      background-color: ${({theme:o})=>o.color.white};
      /* color: #000; */
      color: ${({theme:o})=>o.color.blue};
      border: 1px solid ${({theme:o})=>o.color.paleBlue};
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
      color: ${({theme:o})=>o.color.skyBlue};
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
      box-shadow: ${({theme:o})=>o.boxShadow.normalButton};
      background-color: ${({theme:o})=>o.color.blue};

      font-family: 'Roboto-medium';
      /* font-weight: 500; */
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
      color: ${({theme:o})=>o.color.white};
    }
    .buttonSignUp:hover,
    .buttonSignUp:focus {
      box-shadow: ${({theme:o})=>o.boxShadow.hoverButton};
    }
    .buttonSignUp:active {
      box-shadow: ${({theme:o})=>o.boxShadow.activeButton};
    }
    .error {
      color: ${({theme:o})=>o.color.red};
    }
  }

  @media ${({theme:o})=>o.device.tablet} {
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

  @media ${({theme:o})=>o.device.desktop} {
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
`,F=({submitFunc:o})=>{const a=x({email:l().email().required(),password:l().min(6).max(64).required(),repeatPassword:l().oneOf([u("password"),null],"Passwords must match")}),r={email:"",password:"",repeatPassword:""};function n(t,s){o({email:t.email,password:t.password}),s.resetForm()}function d(t){const s=t.target.closest(".watchPasswordIcon").previousSibling;if(s.type==="password"){s.type="text",t.target.closest("SVG").firstChild.href.baseVal=i+"#eye-opened";return}if(s.type==="text"){s.type="password",t.target.closest("SVG").firstChild.href.baseVal=i+"#eye-closed";return}}return e.jsx(e.Fragment,{children:e.jsx(U,{children:e.jsx(g,{initialValues:r,validationSchema:a,onSubmit:n,children:e.jsxs(b,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(p,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(c,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:d,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(c,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:d,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(c,{className:"error",name:"repeatPassword",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},_=m.div`
  background-size: 100vw, contain;
  background-position: 0, 10px;
  background-repeat: no-repeat;
  background-image: url(${$});

  @media ${({theme:o})=>o.device.mobile} {
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
      color: ${({theme:o})=>o.color.blue};
    }
    .bottle {
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({theme:o})=>o.device.tablet} {
    background-image: url(${k});
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
  }
  @media ${({theme:o})=>o.device.desktop} {
    background-image: url(${N});
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
  }
`,C=()=>{const o=f(),a=w(j);function r(n){o(y(n))}return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(v,{children:e.jsx("div",{className:"wrapper",children:e.jsxs("div",{className:"formCont",children:[e.jsx("h2",{className:"title",children:"Sign Up"}),e.jsx(F,{submitFunc:r}),e.jsx(S,{className:"link",to:"/signin",children:"Sign In"}),e.jsx("img",{className:"bottle",alt:"bottle of water",src:P})]})})})}),a?e.jsx(h,{to:"/signin"}):e.jsx(h,{to:"/signup"})]})};export{C as default};
