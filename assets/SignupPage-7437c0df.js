import{u as x,C as m,D as p,K as g,j as e,F as f,E as b,G as l,H as d,A as i,a as u,b as w,N as j,W as y,I as N,O as h,Q as S}from"./index-393f948c.js";import{b as k,a as v,c as P,d as F}from"./bottle_desk_2x-0e16256e.js";const _=x.div`
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
    color: #fff
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
`,z=({submitFunc:a})=>{const o=m({email:p().email().required(),password:p().min(6).max(64).required(),repeatPassword:p().oneOf([g("password"),null],"Passwords must match")}),r={email:"",password:"",repeatPassword:""};function n(s,t){a({email:s.email,password:s.password}),t.resetForm()}function c(s){const t=s.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",s.target.closest("SVG").firstChild.href.baseVal=i+"#eye-opened";return}if(t.type==="text"){t.type="password",s.target.closest("SVG").firstChild.href.baseVal=i+"#eye-closed";return}}return e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsx(f,{initialValues:r,validationSchema:o,onSubmit:n,children:e.jsxs(b,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(l,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(d,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(l,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:c,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(d,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",e.jsxs("div",{className:"input-container",children:[e.jsx(l,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:c,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(d,{className:"error",name:"repeatPassword",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},R=x.div`
background-size: 100vw, contain;
background-position: 0, 10px ;
background-repeat: no-repeat;
background-image: url(${k});


@media screen and (min-width: 320px){

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
.bottle {
    position: relative;
    width: 280px;
    z-index: -10;
}
}
@media screen and (min-width: 768px) {
    background-image: url(${v});
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
@media screen and (min-width: 1440px) {
    background-image: url(${P});
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
`,E=()=>{const a=u(),o=w(j);function r(n){a(S(n))}return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(y,{children:e.jsx("div",{className:"wrapper",children:e.jsxs("div",{className:"formCont",children:[e.jsx("h2",{className:"title",children:"Sign Up"}),e.jsx(z,{submitFunc:r}),e.jsx(N,{className:"link",to:"/signin",children:"Sign In"}),e.jsx("img",{className:"bottle",alt:"bottle of water",src:F})]})})})}),o?e.jsx(h,{to:"/signin"}):e.jsx(h,{to:"/signup"})]})};export{E as default};
