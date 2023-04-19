import {useEffect} from 'react';
import logo from "../public/logo.png"
import Image from 'next/image'
import {

  FooterScrollUp,
  FooterArrow,
} from "../src/Layout.js"
import arrow from "../src/asset/arrow-2.svg"


const Foot = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

    return (
      <div class="container my-5">

  <footer class="text-center text-lg-start text-black">

    <div class="container p-4">
    <div class="row my-2">
    <div style={{width: "150px", marginTop: "30px", height: "50px"}}>
            <Image src={logo}  alt=""
                 loading="lazy" />
          </div>
          <div style={{width: "80%"}}  class="text-center p-3">
<h6>We are a digital designer living in Addis Ababa.</h6>
<h6>Apart from eating burger.</h6>

</div>
<FooterScrollUp
    onClick={() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}
  >
  <FooterArrow>
    <Image src={arrow}/>
    </FooterArrow> 
  </FooterScrollUp>
</div>
     
      <div class="row my-4">

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

        
          <p style={{paddingLeft: "10px"}} class="text-left">Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.</p>

        </div>

 


        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          
        <h5 style={{color:"#26dfbe"}}>SENT MAIL</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>info@portfolio.c</a>
            </li>
         
       
          </ul>
        </div>
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 style={{color:"#26dfbe"}}>MAKE CALL</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>+251 9 468484</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>+251 9 468484</a>
            </li>

          </ul>
        </div>
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 style={{color:"#26dfbe", alignContent:"flex-end"}} class="text-uppercase text-right mb-4">GET IN TOUCH</h5>

          <ul class="list-unstyled">
            <li>
              <p><i class="fas fa-map-marker-alt pe-2"></i>123/A</p>
            </li>
            
          </ul>
        </div>

      </div>
  
    </div>


    <div style={{ width:"100%",height:"1px",backgroundColor: "#26dfbe"}}>
      </div>
 
    <div class="text-center p-3">
      © 2020 Copyright:
      <a class="text-black" href="#">All Rights Reserved</a>
    </div>

  </footer>

</div>
    
    );
  }
  



export default Foot

/**
 *   <Footer>
        <TopBar>
          <GetTheApp>
            <GetTheAppTitle> Get The App</GetTheAppTitle>
            <AppStoreApp />
            <GoogleApp />
          </GetTheApp>
          <DesktopSocialList>
            <SocialList />
          </DesktopSocialList>
        </TopBar>
        <HR />
        <BottomBar>
          {menu.map(({ name, links }) => (
            <Menu>
              <MenuHead>{name}</MenuHead>
              {links.map(({ title, url }) => (
                <MenuLink href={url}>{title}</MenuLink>
              ))}
            </Menu>
          ))}
          <MobileSocialList>
            <SocialList />
          </MobileSocialList>
          <Policy>
            <PolicyRow>© 2019 Openfit, LLC. All rights reserved.</PolicyRow>
            <PolicyRow>
              +Results vary depending on starting point and effort. Exercise and
              proper diet are necessary to achieve and maintain weight loss and
              muscle definition. The testimonials featured may have used more than
              one product or extended the program to achieve their maximum
              results.
            </PolicyRow>
            <PolicyRow>
              Consult your physician and follow all safety instructions before
              beginning any exercise program or using any supplement or meal
              replacement product, especially if you have any unique medical
              conditions or needs. The contents on our website are for
              informational purposes only, and are not intended to diagnose any
              medical condition, replace the advice of a healthcare professional,
              or provide any medical advice, diagnosis, or treatment.
            </PolicyRow>
            <PolicyRow>
              As an Amazon Associate, we may earn from qualifying purchases.
            </PolicyRow>
          </Policy>
        </BottomBar>
      </Footer>



      // const media = {
//   desktop: (...args) => css`
//     @media (min-width: 870px) {
//       ${css(...args)};
//     }
//   `
// };

// const Footer = styled.footer`
//   font-family: nunito-sans, sans-serif;
//   text-align: center;
//   ${media.desktop`
//     text-align: left;
//   `}
// `;

// const TopBar = styled.div`
//   margin: auto;
//   max-width: 1280px;
//   padding: 40px 0;
//   ${media.desktop`
//     padding: 45px 80px;
//     display: flex;
//     flex-flow: row;
//     justify-content: space-between;
//   `}
// `;

// const GetTheApp = styled.div`
//   font-size: 18px;
//   font-weight: 900;
//   line-height: 1.11;
//   color: #2b2738;
//   margin: 0 -15px;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   ${media.desktop`
//     flex-wrap: nowrap;
//     align-items: center;
//     white-space: nowrap;
//   `}
// `;

// const GetTheAppTitle = styled.div`
//   margin-bottom: 4px;
//   width: 100%;
//   ${media.desktop`
//     width: unset;
//     margin: 0 15px;
//   `}
// `;

// const AppStoreApp = styled.img`
//   width: 189px;
//   height: 63px;
//   margin: 16px auto;
//   padding: 0 20px;
//   ${media.desktop`
//     padding: 0;
//     margin: 0 8px;
//   `}
// `;

// const GoogleApp = styled.img`
//   width: 189px;
//   height: 63px;
//   margin: 16px auto;
//   padding: 0 20px;
//   ${media.desktop`
//     padding: 0;
//     margin: 0 8px;
//   `}
// `;

// const DesktopSocialList = styled.div`
//   display: none;
//   ${media.desktop`
//     display: flex;
//     align-items: center;
//   `};
// `;

// const MobileSocialList = styled.div`
//   padding-bottom: 40px;
//   width: 100%;
//   ${media.desktop`
//     display: none;
//   `};
// `;

// const Twitter = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const Facebook = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const Instagram = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const HR = styled.div`
//   display: none;
//   ${media.desktop`
//     height: 0;
//     padding: 0;
//     margin: 0;
//     display: block;
//     border-bottom: 1px #cacada solid;
//   `};
// `;

// const BottomBar = styled.div`
//   max-width: 1280px;
//   margin: auto;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   ${media.desktop`
//     flex-wrap: nowrap;
//     padding: 40px 80px 60px;
//     justify-content: space-between;
//   `};
// `;

// const Menu = styled.div`
//   margin-bottom: 30px;
//   min-width: 50%;
//   ${media.desktop`
//     min-width: unset;
//     margin-bottom: 0;
//     margin-right: 40px;
//   `}
// `;

// const MenuHead = styled.div`
//   margin-bottom: 10px;
//   font-size: 18px;
//   font-weight: 900;
//   line-height: 1.11;
//   color: #2b2738;
// `;

// const MenuLink = styled.a`
//   display: block;
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 2;
//   color: #2f6cb3;
//   ${media.desktop`
//     white-space: nowrap;
//   `}
// `;

// const Policy = styled.div`
//   width: 100%;
//   max-width: 764px;
//   font-size: 12px;
//   line-height: 1.33;
//   color: #2b2738;
//   margin: 0 20px;
// `;

// const PolicyRow = styled.p`
//   margin: 0;
//   padding: 0;
//   padding-bottom: 20px;
// `;

// const menu = [
//   {
//     name: "Program Guides",
//     links: [
//       { title: "Rough Around The Edges", url: "www.openfit.com" },
//       { title: "Xtend Barre", url: "www.openfit.com" },
//       { title: "600 Seconds", url: "www.openfit.com" },
//       { title: "Yoga52", url: "www.openfit.com" }
//     ]
//   },
//   {
//     name: "About Us",
//     links: [
//       { title: "About Openfit", url: "www.openfit.com" },
//       { title: "Help and Feedback", url: "www.openfit.com" },
//       { title: "Terms and Condition", url: "www.openfit.com" },
//       { title: "Privacy Policy", url: "www.openfit.com" },
//       { title: "FAQ", url: "www.openfit.com" }
//     ]
//   }
// ];

// const SocialList = () => (
//   <>
//     <Twitter />
//     <Facebook />
//     <Instagram />
//   </>
// );

 */