import styled from 'styled-components';
import bg_mob_register_1x from "../../assets/images/background/RegisterLoginPage/mob/bg_mob_register_1x.png"
import bg_tab_register_1x from "../../assets/images/background/RegisterLoginPage/tab/bg_tab_1x.png"
import bg_desk_register_1x from "../../assets/images/background/RegisterLoginPage/Desk/bg_desk_1x.png"

export const SignUpPageStyle = styled.div`
background-size: 100vw, contain;
background-position: 0, 10px ;
background-repeat: no-repeat;
background-image: url(${bg_mob_register_1x});


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
    background-image: url(${bg_tab_register_1x});
    .bottle {    
        width: 736px; 
        position: absolute;
        top: 100px;
        left: 90px;
    }

}
@media screen and (min-width: 1440px) {
    background-image: url(${bg_desk_register_1x});
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
`
