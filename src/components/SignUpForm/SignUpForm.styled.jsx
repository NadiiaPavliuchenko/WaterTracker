import styled from 'styled-components';
import { Form, Field} from "formik"

export const FormRegister = styled(Form)`
margin-top: 16px;
` 

export const Label = styled.label`
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
// margin-bottom: 8px;

 
line-height: 1.33333;
color: #2f2f2f;
`
export const InputDiv = styled.div`
position: relative;`

export const Input = styled(Field)`
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color: #9ebbff;

display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: row;
gap: 10px;
border: 1px solid #d7e3ff;
border-radius: 6px;
padding: 12px 10px;
width: 280px;
height: 44px;



& focus {
    border: 1px solid red;
}
& hover {
    border: 1px solid red;
}
` 
export const WatchPassword = styled.svg`
position: absolute;
right: 20px;
top: 50%;
transform: translate(0%, -50%);
z-index: 10
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 10px;

margin: 16px 0;
border-radius: 10px;
padding: 8px 30px;
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

`