import styled from 'styled-components'
import {Container} from "../src/globalstyles"


export const AboutgridContainer = styled.div`
// position: absolute;
top:845px;
width: 1000px;
left:196px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    height: 600px;


`;

export const AboutgridItem = styled.div`
position: relative;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  `

  export const ImageContainer = styled.div`
  position: relative;
  top: 80px;
left: -79px;
width: 385px;
height: 413px;




  `
  export const CircularImage = styled.div `
  position: absolute;
  top: 10px;
left: -26px;
width: 160px;
height: 160px;
border-radius: 50%;

/* UI Properties */

border: 20px solid var(--unnamed-color-27debf);
border: 20px solid #27DEBF;
z-index:100;
`
export const Dots = styled.div`
position: absolute;
top: 907px;
left: 529px;
width: 161px;
height: 189px;
background: #FFE7CC 0% 0% no-repeat padding-box;

`
  export const AboutHeaderText = styled.div `
  position: relative;
  top: 96px;
left: -40px;
width: 250px;
height: 47px;

/* UI Properties */

text-align: left;
font: normal normal bold 21px/26px Josefin Sans;
letter-spacing: 0px;
color: #151D41;

  
  
  `

  export const AboutHeaderSubText = styled.div `
  position: relative;
  top: 35px;
  left: -45px;
width: 143px;
height: 8px;

/* UI Properties */

color: var(--unnamed-color-27debf);
text-align: left;
font: normal normal normal 8px/43px Josefin Sans;
letter-spacing: 0px;
color: #27DEBF;
background:"#ffffff";
text-transform: uppercase;

  
  
  `
  export const AboutParagraphText = styled.div `
  position: relative;
  
  top: 140px;
left: -40px;
width: 322px;
height: 222px;

/* UI Properties */

text-align: left;
font: normal normal normal 18px/25px Josefin Sans;
letter-spacing: 0px;
color: #151D41;

  `

  export const AboutButton = styled.div`
  position: relative;
  top: 200px;
left: -40px;
width: 164px;
height: 52px;

/* UI Properties */

background: var(--unnamed-color-27debf) 0% 0% no-repeat padding-box;
background: #27DEBF 0% 0% no-repeat padding-box;
border-radius: 5px;
  
  `
export const AboutButtonText = styled.div`
position: relative;
top: 20px;
left: 40px;
width: 100px;
height: 14px;

/* UI Properties */

color: var(--unnamed-color-ffffff);
text-align: left;
font: normal normal normal 11px/14px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;


`

export const AboutgridCircularProgressContainer = styled.div`
// position: absolute;
top:1471px;
width: 100%;
left:255px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    height: 183px;


`;
export const AboutgridCircularProgressgridItem = styled.div`
position: relative;
width: 183px;
height: 183px;
border-radius:50%;

/* UI Properties */

background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 15px 20px #151D410F;
    padding: 5px;
    font-size: 30px;
    text-align: center;
  `

  export const ProgressBarInnerCircle = styled.div`
  position: relative;
  top:20px;
  left:20px;
width: 134px;
height: 134px;
border-radius:50%;

/* UI Properties */

background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 2px solid #0FBF6133;
  
  
  `
  export const   HeaderOne = styled.div`

  position: relative;
  top: 41px;
left: 18px;
width: 70px;
height: 36px;

/* UI Properties */

text-align: center;
font: normal normal bold 36px/43px Josefin Sans;
letter-spacing: 0px;
color: #151D41;
`
export const HeaderTwo = styled.div`
position: relative;
top: 50px;
left: 29px;
width: 150px;
height: 9px;

/* UI Properties */

text-align: left;
font: normal normal 600 7px/32px Josefin Sans;
letter-spacing: 0px;
color: #151D41;
text-transform: uppercase;

`