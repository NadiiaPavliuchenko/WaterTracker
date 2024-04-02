import styled from 'styled-components';


export const FormRegisterStyles = styled.div`
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
`

