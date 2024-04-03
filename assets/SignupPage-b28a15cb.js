import{h as c,j as e,p as i,b as h,d as m,t as f,W as g,L as b,x as u}from"./index-3117d45c.js";import{c as w,a as r,i as j,F as y,b as S,d as p,E as l,e as N,f as k,g as P,h as v}from"./bottle_desk_2x-8ebeffd3.js";import"./hoist-non-react-statics.cjs-2ce127d2.js";const F=c.div`
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
`,_=({submitFunc:a})=>{const o=w({email:r().email().required(),password:r().min(6).max(64).required(),repeatPassword:r().oneOf([j("password"),null],"Passwords must match")}),n={email:"",password:"",repeatPassword:""};function x(s,t){a({email:s.email,password:s.password}),t.resetForm()}function d(s){const t=s.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",s.target.closest("SVG").firstChild.href.baseVal=i+"#eye-opened";return}if(t.type==="text"){t.type="password",s.target.closest("SVG").firstChild.href.baseVal=i+"#eye-closed";return}}return e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsx(y,{initialValues:n,validationSchema:o,onSubmit:x,children:e.jsxs(S,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(p,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(l,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:d,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(l,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"repeatPassword",children:["Repeat password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"repeatPassword",placeholder:"Repeat password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:d,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:i+"#eye-closed"})})]}),e.jsx(l,{className:"error",name:"repeatPassword",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign Up"})]})})})})},z=c.div`
background-size: 100vw, contain;
background-position: 0, 10px ;
background-repeat: no-repeat;
background-image: url(${N});


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
    background-image: url(${k});
    .bottle {    
        width: 736px; 
        position: absolute;
        top: 100px;
        left: 90px;
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
        top: 80px;
        left: -51px;
    }
    .formCont {
        position: absolute;
        top: 200px;
        right: 216px;
    }
}
`,E=()=>{const a=h();m(f);function o(n){a(u(n))}return e.jsx(e.Fragment,{children:e.jsx(z,{children:e.jsxs(g,{children:[e.jsxs("div",{className:"formCont",children:[e.jsx("h2",{className:"title",children:"Sign Up"}),e.jsx(_,{submitFunc:o}),e.jsx(b,{className:"link",to:"/signin",children:"Sign In"})]}),e.jsx("img",{className:"bottle",alt:"bottle of water",src:v})]})})})};export{E as default};
