import{u as x,D as h,E as p,j as e,F as m,G as f,H as d,I as c,A as l,a as g,M as u,J as w,r as j,W as y,K as v,N as k}from"./index-f1c5d38f.js";import{b as S,a as N,c as F,d as R}from"./bottle_desk_2x-0e16256e.js";const z=x.div`
@media screen and (min-width: 320px) {
.form {
    margin-top: 16px;
}
.label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33333;
    color: #2f2f2f;   
}
.input-container {
    position: relative;
    width: 280px;
}
.input {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #000;

    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
    margin-top: 8px;
    width: 280px;
    height: 44px;
}
.input::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #9ebbff;
}
.watchPasswordIcon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 10
}
.buttonSignUp {
    border-radius: 10px;
    padding: 8px 30px;
    margin-bottom: 16px;
    width: 280px;
    height: 36px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: #fff;
}
.error {
    color: red
}
}
@media screen and (min-width: 768px) {
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

@media screen and (min-width: 1440px) {
    
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

`,C=({submitFunc:s})=>{const o=h({email:p().email().required(),password:p().min(6).max(64).required()}),n={email:"",password:""};function a(i,t){s(i),t.resetForm()}function r(i){const t=i.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-opened";return}if(t.type==="text"){t.type="password",i.target.closest("SVG").firstChild.href.baseVal=l+"#eye-closed";return}}return e.jsx(e.Fragment,{children:e.jsx(z,{children:e.jsx(m,{initialValues:n,validationSchema:o,onSubmit:a,children:e.jsxs(f,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(d,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(c,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(d,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:r,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:l+"#eye-closed"})})]}),e.jsx(c,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign In"})]})})})})},I=x.div`
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
  @media screen and (min-width: 320px) {
    .title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
      color: #2f2f2f;
      margin-top: 20px;
    }
    .link {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;

      line-height: 1.25;
      color: #407bff;
    }
    .bottle {
      // margin-top: 40px;
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media screen and (min-width: 768px) {
    background-image: url(${N});
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
    background-image: url(${F});
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
`,_=x.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-white);
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
    color: #2f2f2f;
  }
  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #000;

    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
    margin-top: 8px;
    width: 250px;
    height: 44px;
  }
  input::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #9ebbff;
  }

  button {
    border-radius: 10px;
    padding: 8px 30px;
    margin-bottom: 16px;
    width: 200px;
    height: 36px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: #fff;
  }
  .error {
    color: red;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`,M=({isModalOpen:s,closeModal:o})=>{const n=h({email:p().email().required()}),a={email:""},r=g(),i=(t,b)=>{r(w(t)),b.resetForm()};return e.jsx(e.Fragment,{children:s&&e.jsx(u,{onClose:o,children:e.jsx(_,{children:e.jsx(m,{initialValues:a,validationSchema:n,onSubmit:i,children:e.jsxs(f,{className:"form",autoComplete:"off",noValidate:!0,children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your registered mail:",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(d,{className:"input",type:"email",name:"email",placeholder:"Email"})}),e.jsx(c,{className:"error",name:"email",component:"div"})]}),e.jsx("button",{type:"submit",children:"Send"})]})})})})})},V=()=>{const s=g(),[o,n]=j.useState(!1),a=()=>{n(!0)},r=()=>{n(!1)};function i(t){s(k(t))}return e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs(y,{children:[e.jsxs("div",{className:"wrapper",children:[e.jsxs("div",{className:"formCont",children:[e.jsx("h2",{className:"title",children:"Sign In"}),e.jsx(C,{submitFunc:i}),e.jsxs("div",{className:"link-container",children:[e.jsx(v,{className:"link",to:"/signup",children:"Sign Up"}),e.jsx("button",{className:"link",onClick:a,children:"Forgot Password"})]})]}),e.jsx("img",{className:"bottle",alt:"bottle of water",src:R})]}),o&&e.jsx(M,{isModalOpen:o,closeModal:r})]})})})};export{V as default};
