import Image from 'next/image'
import {
  HeroContainer,
  HomeMaingridContainer ,
  HeroIconOne,
  HeroIconTwo,
  HeroPathOne,
  Headline,
  HeadlineTwo,
  Subheader,
  HomegridContainer,
  HomegridItem,
  HeroButton,
  HeroButtonText,
  HeroLink,
  HeroCircleOne,
  HeroCircleTwo,
  HeroCircleThree,
  HeroCircleFour,
  HeroCircleFive,
  HeroCircleSix,
  HeroBigCircleOne,
  HeroBigCircleTwo
} from "../../src/Hero"
import image1 from "../../src/asset/2905211.svg"

const hero = () => {
  return (
    <div>
       <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-image-wrapper overflow-hidden ">
           
          <HeroIconOne>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320"><path fill="rgba(255, 231, 204, 1)" fillOpacity="0.5" d="M0,64L12,74.7C24,85,48,107,72,117.3C96,128,120,128,144,122.7C168,117,192,107,216,117.3C240,128,264,160,288,160C312,160,336,128,360,112C384,96,408,96,432,112C456,128,480,160,504,154.7C528,149,552,107,576,90.7C600,75,624,85,648,112C672,139,696,181,720,186.7C744,192,768,160,792,138.7C816,117,840,107,864,117.3C888,128,912,160,936,165.3C960,171,984,149,1008,165.3C1032,181,1056,235,1080,256C1104,277,1128,267,1152,250.7C1176,235,1200,213,1224,192C1248,171,1272,149,1296,133.3C1320,117,1344,107,1368,128C1392,149,1416,203,1428,229.3L1440,256L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>

  </HeroIconOne>
  <HeroIconTwo>
    <Image src={image1}/>
    </HeroIconTwo>

  <HeroContainer>
    <HomeMaingridContainer>
  
    <Headline>
    <h2 style={{font: "normal normal normal 45px/40px Josefin Sans"}}>Sharing Vitality</h2>
    </Headline>
    <HeadlineTwo>
    <h2>  <span style={{font: "bold 40px/80px Josefin Sans"}}>Through Designing</span> </h2> 
    </HeadlineTwo>
    <Subheader>
    <h6>clean design and advanced digital solutions</h6>
    </Subheader>
    <HeroBigCircleOne/>
<HomegridContainer>
<HomegridItem>

    <HeroButton>
    <HeroButtonText>Explore More</HeroButtonText>
    </HeroButton>
    </HomegridItem>
    <HomegridItem>
    <HeroLink>
    <h4> See Live Demo</h4>
    </HeroLink>
    </HomegridItem>
    </HomegridContainer>
    </HomeMaingridContainer> 
    <HomeMaingridContainer> 

    <HeroBigCircleTwo/>
    <HeroCircleSix/>
  <HeroCircleOne/>
  <HeroCircleTwo/>
  <HeroCircleThree/>
  <HeroCircleFour/>
  <HeroCircleFive/>

  </HomeMaingridContainer> 


  </HeroContainer>

  
          </div>
       
        </div>
      </div>
    </section>
    
 
  </div>

  )
}

export default hero

/**
 *    <HeroContainer>
    <HomeMaingridContainer>
    <HeroPathOne/>
    <Headline>
    <h2 style={{font: "normal normal normal 45px/40px Josefin Sans"}}>Sharing Vitality</h2>
    </Headline>
    <HeadlineTwo>
    <h2>  <span style={{font: "bold 40px/80px Josefin Sans"}}>Through Designing</span> </h2> 
    </HeadlineTwo>
    <Subheader>
    <h6>clean design and advanced digital solutions</h6>
    </Subheader>
    <HeroBigCircleOne/>
<HomegridContainer>
<HomegridItem>

    <HeroButton>
    <HeroButtonText>Explore More</HeroButtonText>
    </HeroButton>
    </HomegridItem>
    <HomegridItem>
    <HeroLink>
    <h4> See Live Demo</h4>
    </HeroLink>
    </HomegridItem>
    </HomegridContainer>
    </HomeMaingridContainer> 

    <HomeMaingridContainer> 
    <HeroIconOne>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320"><path fill="rgba(255, 231, 204, 1)" fillOpacity="0.5" d="M0,64L12,74.7C24,85,48,107,72,117.3C96,128,120,128,144,122.7C168,117,192,107,216,117.3C240,128,264,160,288,160C312,160,336,128,360,112C384,96,408,96,432,112C456,128,480,160,504,154.7C528,149,552,107,576,90.7C600,75,624,85,648,112C672,139,696,181,720,186.7C744,192,768,160,792,138.7C816,117,840,107,864,117.3C888,128,912,160,936,165.3C960,171,984,149,1008,165.3C1032,181,1056,235,1080,256C1104,277,1128,267,1152,250.7C1176,235,1200,213,1224,192C1248,171,1272,149,1296,133.3C1320,117,1344,107,1368,128C1392,149,1416,203,1428,229.3L1440,256L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>

  </HeroIconOne>
    <HeroIconTwo>
    <Image src={image1}/>
    </HeroIconTwo>
    <HeroBigCircleTwo/>
    <HeroCircleSix/>
  <HeroCircleOne/>
  <HeroCircleTwo/>
  <HeroCircleThree/>
  <HeroCircleFour/>
  <HeroCircleFive/>

  </HomeMaingridContainer> 


  </HeroContainer>
 */