import Image from 'next/image'
import ProgressBar from 'react-customizable-progressbar'


import {
  AboutgridContainer,
  AboutgridItem,
  CircularImage,
  ImageContainer,
  AboutHeaderText,
  AboutHeaderSubText,
  AboutParagraphText,
  AboutButton,
  AboutButtonText,
  AboutgridCircularProgressContainer,
  AboutgridCircularProgressgridItem ,
  ProgressBarInnerCircle,
  HeaderOne,
  HeaderTwo
} from "../../src/About"
import image2 from "../../src/asset/freelancer-bearded-man-taking-notes-laptop_85574-3146.png"

const about = () => {
  return (
 
     <section class="hero">
      <div class="container">
        <div class="hero-content">
    <AboutgridContainer>
    <AboutgridItem>
    <CircularImage/>
    </AboutgridItem>

    <ImageContainer>
    <Image  src={image2}/>
    
    </ImageContainer>


    <AboutgridItem>
    <AboutHeaderSubText>About Me</AboutHeaderSubText>
    <AboutHeaderText>Why hire us for your next project?</AboutHeaderText>
    <AboutParagraphText>
    We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs. 
    
    Our job is to build your website so that it is functional and user-friendly but at the same time attractive.
    
    
    </AboutParagraphText>
    <AboutButton>
    <AboutButtonText>
    Download CV
    </AboutButtonText>
    
    </AboutButton>
    
    </AboutgridItem>
    </AboutgridContainer>

    <AboutgridCircularProgressContainer>
      

    <AboutgridCircularProgressgridItem >
    <ProgressBarInnerCircle>

    <HeaderOne>
    50% 
    </HeaderOne>
    <HeaderTwo>
    Web Design
    </HeaderTwo>
 
    </ProgressBarInnerCircle>
    </AboutgridCircularProgressgridItem>


    <AboutgridCircularProgressgridItem >
    <ProgressBarInnerCircle>
    <HeaderOne>
    75% 
    </HeaderOne>
    <HeaderTwo>
    Development
    </HeaderTwo>

    </ProgressBarInnerCircle>
    </AboutgridCircularProgressgridItem>


    <AboutgridCircularProgressgridItem >
    <ProgressBarInnerCircle>
    <HeaderOne>
    20%
    </HeaderOne>
    <HeaderTwo>
    Web Design
    </HeaderTwo>

    </ProgressBarInnerCircle>
    
    </AboutgridCircularProgressgridItem>

    <AboutgridCircularProgressgridItem >
    <ProgressBarInnerCircle>
    <HeaderOne>
    50% 
    </HeaderOne>
    <HeaderTwo>
    User Experience
    </HeaderTwo>
    </ProgressBarInnerCircle>
    </AboutgridCircularProgressgridItem>
    </AboutgridCircularProgressContainer>


       
       </div>
     </div>
   </section>
    

  )
}

export default about

