import styled from 'styled-components'
import {Container} from "../src/globalstyles"

export const Navcontainer = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;

`;



export const NavLogo = styled.div`
position:absolute;
top: 35px;
left: 40px;
width: 78px;
height: 30px;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}

/* UI Properties */

background: var(--unnamed-color-27debf) 0% 0% no-repeat padding-box;
background: #27DEBF 0% 0% no-repeat padding-box;
border-radius: 4px;

`;

export const NavLogoInnerLeft  = styled.div`

position:relative;
top: 3px;
left: 16px;
width: 20px;
height: 24px;
transform: matrix(-1, 0, 0, -1, 0, 0);

/* UI Properties */

// color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 24px/28px Josefin Sans;
letter-spacing: -3.48px;
color: black;

z-index: 10;
`

export const NavLogoInnerRight  = styled.div`
position:relative;
top: 3px;
left: 23px;
width: 20px;
height: 24px;
font-size:200px;
transform: matrix(-1, 0, 0, -1, 0, 0);

/* UI Properties */

// color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 24px/28px Josefin Sans;
letter-spacing: -3.48px;
color: black;


z-index:10;
`

export const NavMenu = styled.div`
position:absolute;
top: 65px;
left: 652px;
width: 447px;
height: 15px;

/* UI Properties */

text-align: left;
font: normal normal bold 15px/65px Josefin Sans;
letter-spacing: 0px;
opacity: 1;

z-index:100;
`;


export const NavMenugridContainer = styled.div`
position :relative;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;


`;

export const NavMenugridItem = styled.div`
position: relative;
padding-right: 20px;
top: -80px;
left: 0px;
height: 15px;
width: 100px;
height: 15px;
padding-left: 20px;
  `


export const NavMenuLi = styled.h4`
position :absolute;
font-size: 20px;
text-align: center;
line-height: 15px;

/* UI Properties */

color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 15px/65px Josefin Sans;
letter-spacing: 0px;
color: #000000;


`;




export const  FooterContainer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
background-color: #f4f4f4;
left:0;
right:0;
bottom: 0;
position: fixed;
`;

export const FooterColumnOne = styled.div`
display: flex;
flex-direction: column;

`
export const FooterSecondColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const FootergridContainerOne = styled.div`
position:relative;
    // display: grid;
    // grid-template-columns: auto auto ;
    padding: 10px;
    background-color:blue;
    width:100%
   
`;
export const FootergridContainerTwo = styled.div`
position:relative;
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
       background-color:green;
       top:20%;
`;

export const FootergridItem = styled.div`
position:relative;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  `
  export const FootergridItemTwo = styled.div`
position:relative;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    height:140px;
    

  `
  export const FooterDivider = styled.div`
  position:relative;
  top: 4100px;
  left: -23.605499267578125px;
  width: 1304px;
  height: 0px;

/* UI Properties */

    background: var(--unnamed-color-27debf) 0% 0% no-repeat padding-box;
    border: 1px solid var(--unnamed-color-27debf);
    background: #27DEBF 0% 0% no-repeat padding-box;
    border: 1px solid #27DEBF;
  
  
  `


  export const FooterLogo = styled.div`
  position:relative;
  top: 35%;
left: 146px;
width: 142px;
height: 55px;

/* UI Properties */

background: var(--unnamed-color-27debf) 0% 0% no-repeat padding-box;
background: #27DEBF 0% 0% no-repeat padding-box;
border-radius: 4px;
  `


export const FooterLogoInnerLeft  = styled.div`

position:relative;
top: 3px;
left: 16px;
width: 20px;
height: 24px;
transform: matrix(-1, 0, 0, -1, 0, 0);

/* UI Properties */

// color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 30px/28px Josefin Sans;
letter-spacing: -3.48px;
color: black;

z-index: 10;
`

export const FooterLogoInnerRight  = styled.div`
position: relative;
top: -8px;
left: 83px;
width: 20px;
height: 24px;
font-size: 200px;
-webkit-transform: matrix(-1,0,0,-1,0,0);
-ms-transform: matrix(-1,0,0,-1,0,0);
transform: matrix(-1,0,0,-1,0,0);
text-align: left;
font: normal normal bold 30px/28px Josefin Sans;
-webkit-letter-spacing: -3.48px;
-moz-letter-spacing: -3.48px;
-ms-letter-spacing: -3.48px;
letter-spacing: -3.48px;
color: black;
z-index: 10;
`



  export const FooterTagline = styled.div`
  position:relative;
  top: 5%;
left: 691px;
width: 500px;
height: 54px;

/* UI Properties */

text-align: left;
font: normal normal 400 21px/25px Josefin Sans;
letter-spacing: 0px;
color: #151D41;
  `
export const FooterLogoText = styled.div`
position:relative;
top: 36.1%;
left: 145px;
width: 285px;
height: 66px;

/* UI Properties */

text-align: left;
font: normal normal normal 16px/26px Josefin Sans;
letter-spacing: 0px;
color: #151D41;
`

export const FooterContactsHeader= styled.div`
position:relative;
top: 36%;
left: 594px;
width: 141px;
height: 15px;

/* UI Properties */

color: var(--unnamed-color-27debf);
text-align: left;
font: normal normal 600 18px/35px Josefin Sans;
letter-spacing: 0px;
color: #27DEBF;

`
export const FooterContact = styled.div`
position:relative;
top: 36%;
left: 596px;
width: 153px;
height: 47px;

/* UI Properties */

text-align: left;
font: normal normal normal 20px/40px Josefin Sans;
letter-spacing: 0px;
color: #151D41;
`
export const FooterContactHeaderTwo = styled.div`
position:relative;
top: 36%;
left: 817px;
width: 137px;
height: 15px;

/* UI Properties */

color: var(--unnamed-color-27debf);
text-align: left;
font: normal normal 600 18px/35px Josefin Sans;
letter-spacing: 0px;
color: #27DEBF;
` 

export const FooterContactTwo = styled.div`

position:relative;
top: 36%;
left: 818px;
width: 153px;
height: 72px;

/* UI Properties */

text-align: left;
font: normal normal normal 20px/40px Josefin Sans;
letter-spacing: 0px;
color: #151D41;

`





export const FooterContactHeaderThree = styled.div`
position:relative;
top: 36%;
left: 1009px;
width: 141px;
height: 15px;

/* UI Properties */

color: var(--unnamed-color-27debf);
text-align: left;
font: normal normal 600 18px/35px Josefin Sans;
letter-spacing: 0px;
color: #27DEBF;
text-transform: uppercase;

`
export const FooterContactThree = styled.div`
position:relative;
top: 36%;
left: 1010px;
width: 153px;
height: 47px;

/* UI Properties */

text-align: left;
font: normal normal normal 20px/40px Josefin Sans;
letter-spacing: 0px;
color: #151D41;

`
export const FooterAllrights = styled.div`
position:relative;
top: 38%;
left: 509px;
width: 272px;
height: 16px;

/* UI Properties */

text-align: center;
font: normal normal normal 18px/35px Josefin Sans;
letter-spacing: 0px;
color: #151D41;


`

export const FooterScrollUp = styled.div`
position:relative;
left: 50px;
width: 40px;
height: 40px;

/* UI Properties */

background: var(--unnamed-color-27debf) 0% 0% no-repeat padding-box;
background: #27DEBF 0% 0% no-repeat padding-box;
border-radius:50%;

`
export const FooterArrow = styled.div`
position:relative;
top: 5px;
left: 0px;
width: 15px;
height: 9px;

`