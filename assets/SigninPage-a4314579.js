import{k as m,j as e,d as x,b as h,t as g,W as f,L as u,N as r,v as b}from"./index-532037db.js";import{c as w,a as l,F as j,b as C,d as p,E as c}from"./index.esm-01be5033.js";import"./hoist-non-react-statics.cjs-487d9569.js";const v=m.div`
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
`,F=({submitFunc:t})=>{const o=w({email:l().email().required(),password:l().min(6).max(64).required()}),i={email:"",password:""};function n(a,s){t(a),s.resetForm()}function d(a){const s=a.target.closest(".watchPasswordIcon").previousSibling;if(s.type==="password"){s.type="text";return}if(s.type==="text"){s.type="password";return}}return e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsx(j,{initialValues:i,validationSchema:o,onSubmit:n,children:e.jsxs(C,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(p,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(c,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:d,width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2.65334 4.482C2.02964 5.21812 1.56521 6.07547 1.28934 7C2.15067 9.892 4.82934 12 8 12C8.662 12 9.302 11.908 9.90867 11.7367M4.152 3.152C5.29375 2.39854 6.63205 1.99788 8 2C11.1707 2 13.8487 4.108 14.71 6.99867C14.2379 8.5782 13.2247 9.94102 11.848 10.848M4.152 3.152L2 1M4.152 3.152L6.58534 5.58533M11.848 10.848L14 13M11.848 10.848L9.41467 8.41467C9.6004 8.22893 9.74773 8.00844 9.84825 7.76577C9.94877 7.52309 10.0005 7.263 10.0005 7.00033C10.0005 6.73767 9.94877 6.47757 9.84825 6.2349C9.74773 5.99223 9.6004 5.77173 9.41467 5.586C9.22894 5.40027 9.00844 5.25294 8.76577 5.15242C8.5231 5.0519 8.263 5.00016 8.00034 5.00016C7.73767 5.00016 7.47758 5.0519 7.2349 5.15242C6.99223 5.25294 6.77174 5.40027 6.586 5.586M9.414 8.414L6.58667 5.58667",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e.jsx(c,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign In"})]})})})})},L=()=>{const t=x(),o=h(g);function i(n){t(b(n)),console.log(o)}return console.log(o),e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx("div",{children:"SigninPage"}),e.jsx(F,{submitFunc:i}),e.jsx(u,{to:"/signup",children:"Sign Up"}),o?e.jsx(r,{to:"/home"}):e.jsx(r,{to:"/signin"})]})})};export{L as default};
