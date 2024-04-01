import{b as m,j as s,c as h,u as x,k as f,W as g,L as w,N as d,m as u}from"./index-91d8c405.js";import{c as b,a as n,e as j,F as C,b as N,d as l,E as p}from"./index.esm-7362f2b1.js";const v=m.div`
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
`,y=({submitFunc:a})=>{const o=b({email:n().email().required(),password:n().min(6).max(64).required(),repeatPassword:n().oneOf([j("password"),null],"Passwords must match")}),i={email:"",password:"",repeatPassword:""};function r(t,e){a({email:t.email,password:t.password}),e.resetForm()}function c(t){const e=t.target.closest(".watchPasswordIcon").previousSibling;if(e.type==="password"){e.type="text";return}if(e.type==="text"){e.type="password";return}}return s.jsx(s.Fragment,{children:s.jsx(v,{children:s.jsx(C,{initialValues:i,validationSchema:o,onSubmit:r,children:s.jsxs(N,{className:"form",autoComplete:"off",children:[s.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",s.jsx("br",{}),s.jsx("div",{className:"input-container",children:s.jsx(l,{className:"input",type:"text",name:"email",placeholder:"Email"})}),s.jsx(p,{className:"error",name:"email",component:"div"})]}),s.jsx("br",{}),s.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",s.jsxs("div",{className:"input-container",children:[s.jsx(l,{className:"input",type:"password",name:"password",placeholder:"Password"}),s.jsx("svg",{className:"watchPasswordIcon",onClick:c,width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2.65334 4.482C2.02964 5.21812 1.56521 6.07547 1.28934 7C2.15067 9.892 4.82934 12 8 12C8.662 12 9.302 11.908 9.90867 11.7367M4.152 3.152C5.29375 2.39854 6.63205 1.99788 8 2C11.1707 2 13.8487 4.108 14.71 6.99867C14.2379 8.5782 13.2247 9.94102 11.848 10.848M4.152 3.152L2 1M4.152 3.152L6.58534 5.58533M11.848 10.848L14 13M11.848 10.848L9.41467 8.41467C9.6004 8.22893 9.74773 8.00844 9.84825 7.76577C9.94877 7.52309 10.0005 7.263 10.0005 7.00033C10.0005 6.73767 9.94877 6.47757 9.84825 6.2349C9.74773 5.99223 9.6004 5.77173 9.41467 5.586C9.22894 5.40027 9.00844 5.25294 8.76577 5.15242C8.5231 5.0519 8.263 5.00016 8.00034 5.00016C7.73767 5.00016 7.47758 5.0519 7.2349 5.15242C6.99223 5.25294 6.77174 5.40027 6.586 5.586M9.414 8.414L6.58667 5.58667",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx(p,{className:"error",name:"password",component:"div"})]}),s.jsx("br",{}),s.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",s.jsxs("div",{className:"input-container",children:[s.jsx(l,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),s.jsx("svg",{className:"watchPasswordIcon",onClick:c,width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2.65334 4.482C2.02964 5.21812 1.56521 6.07547 1.28934 7C2.15067 9.892 4.82934 12 8 12C8.662 12 9.302 11.908 9.90867 11.7367M4.152 3.152C5.29375 2.39854 6.63205 1.99788 8 2C11.1707 2 13.8487 4.108 14.71 6.99867C14.2379 8.5782 13.2247 9.94102 11.848 10.848M4.152 3.152L2 1M4.152 3.152L6.58534 5.58533M11.848 10.848L14 13M11.848 10.848L9.41467 8.41467C9.6004 8.22893 9.74773 8.00844 9.84825 7.76577C9.94877 7.52309 10.0005 7.263 10.0005 7.00033C10.0005 6.73767 9.94877 6.47757 9.84825 6.2349C9.74773 5.99223 9.6004 5.77173 9.41467 5.586C9.22894 5.40027 9.00844 5.25294 8.76577 5.15242C8.5231 5.0519 8.263 5.00016 8.00034 5.00016C7.73767 5.00016 7.47758 5.0519 7.2349 5.15242C6.99223 5.25294 6.77174 5.40027 6.586 5.586M9.414 8.414L6.58667 5.58667",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx(p,{className:"error",name:"repeatPassword",component:"div"})]}),s.jsx("br",{}),s.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},F=m.div`
.title {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.23077;
    color: #2f2f2f;
    margin-top: 20px;
}
.link {
    font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 16px;

line-height: 1.25;
color: #407bff;
}
`,M=()=>{const a=h(),o=x(f);function i(r){a(u(r))}return s.jsx(s.Fragment,{children:s.jsx(g,{children:s.jsxs(F,{children:[s.jsx("h2",{className:"title",children:"Sign Up"}),s.jsx(y,{submitFunc:i}),s.jsx(w,{className:"link",to:"/signin",children:"Sign In"}),o?s.jsx(d,{to:"/signin"}):s.jsx(d,{to:"/signup"})]})})})};export{M as default};
