import{r as t,P as n,z as o,c,j as u,Q as f,S as p}from"./index-33bea878.js";const d=()=>{const[r,i]=t.useState(!0),{verificationToken:a}=n(),s=o(),e=c();return t.useEffect(()=>{(async()=>{try{await e(p(a)).unwrap(),s("/signin")}catch{s("/signup")}finally{i(!1)}})()},[e,s,a]),r?u.jsx(f,{}):null};export{d as default};
