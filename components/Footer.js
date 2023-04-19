import {useEffect} from 'react';
import Image from 'next/image'
import {
  FooterColumnOne,
  FooterSecondColumn,
  FooterContainer,
  FootergridContainerOne,
  FootergridContainerTwo,
  FootergridItem,
  FootergridItemTwo,
  FooterTagline,
  FooterLogoText,
  FooterDivider,
  FooterLogo,
  FooterContactsHeader,
  FooterContactHeaderTwo,
  FooterContactHeaderThree,
  FooterContact,
  FooterContactTwo,
  FooterContactThree,
  FooterAllrights,
  FooterScrollUp,
  FooterArrow,
 FooterLogoInnerLeft,
 FooterLogoInnerRight,



} from "../src/Layout.js"
import arrow from "../src/asset/arrow-2.svg"

const Footer = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);



  return (
    <div>
      <FooterContainer>
        <FooterColumnOne>
    <FootergridContainerOne>
    <FooterLogo>
    <FooterLogoInnerLeft>
    <h4>O</h4>
    
    </FooterLogoInnerLeft>

    <FooterLogoInnerRight>
    <h4>O</h4>
    
    </FooterLogoInnerRight>
    
    </FooterLogo>
    <FooterLogoText>
    <h6>Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.</h6>
    </FooterLogoText> 

    
    </FootergridContainerOne>
    </FooterColumnOne>


    <FooterColumnOne>
    <FootergridContainerTwo>
    <FootergridItemTwo>
 

<FooterTagline>
<h4>
We are digital designer living in Addis Ababa. Apart from eating burger
</h4>

<FooterScrollUp
    onClick={() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}
  >
  <FooterArrow>
    <Image src={arrow}/>
    </FooterArrow> 
  </FooterScrollUp>
</FooterTagline>

 

    <FooterContactsHeader>
    <h6>SENT MAIL</h6>
    </FooterContactsHeader>
    <FooterContact>
    <h6> info@portfolio.com career.portfolio.com</h6>
   
    </FooterContact>



    </FootergridItemTwo>

    <FootergridItemTwo>
    <FooterContactHeaderTwo>
    <h6>MAKE CALL</h6>
    </FooterContactHeaderTwo>
    <FooterContactTwo>
    <h6> +251 9 468484 +251 9 468484</h6>
    </FooterContactTwo>
    </FootergridItemTwo>

    <FootergridItemTwo>
    <FooterContactHeaderThree>
    <h6>GET IN TOUCH</h6>
    </FooterContactHeaderThree>
    <FooterContactThree>
    <h6> 123/A, Hamburger City New York, USA</h6>
    </FooterContactThree>
    </FootergridItemTwo>
    
    
    </FootergridContainerTwo>

    <FooterDivider/>

  
    <FootergridItem>
    <FooterAllrights>
    <h6>2022 All Rights Reserved</h6>
    </FooterAllrights>
    
    </FootergridItem>
    </FooterColumnOne>
 
    </ FooterContainer>
 
    </div>
  )
}

export default Footer