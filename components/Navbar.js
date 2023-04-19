// import Link from 'next/link'
// import {
//   Navcontainer,
//   NavLogo,
//   NavLogoInnerLeft,
//   NavLogoInnerRight,
//   NavMenu,
//   NavMenugridContainer,
//   NavMenugridItem,
//   NavMenuLi
// } from "../src/Layout"
import logo from "../public/logo.png"
import Image from 'next/image'

const Navbar = () => {
  return (

    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
    <div className="container ">
    <div style={{width: "150px", height: "50px"}}>
    <a href="/" className="navbar-brand d-flex w-50 me-auto">
            <Image src={logo}  alt=""
                 loading="lazy" />
                 </a>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
       
            <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Resources</a>
                </li>
            
            </ul>
        </div>
    </div>
</nav>



  
    
  )
}

export default Navbar


/**

<Navcontainer>
 
 <NavLogo>
 <NavLogoInnerLeft>
 <h4>O</h4>
 
 </NavLogoInnerLeft>
 <NavLogoInnerRight>

 <h4>O</h4>
 </NavLogoInnerRight>
 </NavLogo>

 <NavMenu>

 <NavMenugridContainer>
 <NavMenugridItem><NavMenuLi>Home</NavMenuLi></NavMenugridItem>
 <NavMenugridItem> <NavMenuLi>About us</NavMenuLi></NavMenugridItem>
 <NavMenugridItem> <NavMenuLi>Services</NavMenuLi></NavMenugridItem>
 <NavMenugridItem> <NavMenuLi>News</NavMenuLi></NavMenugridItem>
 <NavMenugridItem><NavMenuLi>Resources</NavMenuLi></NavMenugridItem>
 </NavMenugridContainer>


  
 
 
 </NavMenu>

 </Navcontainer> */