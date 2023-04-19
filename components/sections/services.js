import Image from 'next/image'
import {
  ServicesgridContainer,
  ServicesgridItem,
  ServicegridCard,
  ServicegridCardOne,
  ServicegridCardTwo,
  ServicegridImage,
  ServicegridImageTwo,
  ServicesgridMainHeaderText,
  ServicesgridMainSubHeader,
  ServicesgridHeaderText,
  ServicesgridHeaderTextTwo,
  ServicesgridSubHeader,
  ServiceStroke,
  ServiceStrokeTwo,
  ServicesParagraphTextOne,
  ServicesParagraphTextTwo,
  ServicesSubHeader,
  ServicesButton,
  ServiceButtonIcon,
  ServicesButtonText,

  ServicesButtonTwo,
  ServiceButtonIconTwo,
  ServicesButtonTextTwo,
  ServicesViewButton,
  ServicesViewButtonText,
  ServiceDots

} from "../../src/Service"
import image3 from "../../src/asset/1237114.svg"
import image4 from "../../src/asset/Page-1.svg"
import image5 from "../../src/asset/arrow.svg"
import image6 from "../../src/asset/arrow (1).svg"



const services = () => {
  return (
    <div >
     <section className="hero">
      <div className="container">
        <div className="hero-content">


    <ServicesgridMainHeaderText> <h4>My Services</h4></ServicesgridMainHeaderText>
    <ServicesgridMainSubHeader><h2>Our Provided Features & Expertise</h2></ServicesgridMainSubHeader>
 
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-4">
     
          <ServicegridCard>
    <ServicegridImage>
    <div style={{margin: "25px"}}>
    <Image src={image3}/>
    </div>
    </ServicegridImage>
    <ServicesgridHeaderText>
    Web Design
    </ServicesgridHeaderText>
    <ServiceStroke/>

    <ServicesgridSubHeader>
   
    Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
    dolor sit amet. sed diam eirmod tempor dolore.
   
    
    </ServicesgridSubHeader>
    <ServicesButton>
    <ServicesButtonText>
     Know More 
    <ServiceButtonIcon>
    <Image src={image5}/>
    </ServiceButtonIcon>
    </ServicesButtonText> 
    
    </ServicesButton>
 
    
    </ServicegridCard>
   
        </div>
   
      </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-4">
        <div style={{marginTop: "25px"}}>
         
      
    <ServicegridCardTwo>
    <ServicesgridHeaderText>
    <h2>95%</h2>
    </ServicesgridHeaderText>
    <ServiceStrokeTwo/>
  
    
    <ServicesParagraphTextTwo>
    <h4> Web Design</h4>

    </ServicesParagraphTextTwo>
    <ServicesSubHeader>
    <h6> HTML, CSS, jQuery</h6>
    </ServicesSubHeader>
    </ServicegridCardTwo>
          
          </div>
        </div>
      
      </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-4">
        <div style={{marginRight: "25px",marginTop:"25px"}}>
     
          <ServicegridCardTwo>

<ServicesgridHeaderText>
<h2>85%</h2>
</ServicesgridHeaderText>
<ServiceStrokeTwo/>
<ServicesParagraphTextTwo>
<h4> Web Design</h4>

</ServicesParagraphTextTwo>
<ServicesSubHeader>
<h6> HTML, CSS, jQuery</h6>
</ServicesSubHeader>

</ServicegridCardTwo>
        
        </div>
        </div>
      
      </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-4">
        <div style={{margin: "25px"}}>
      
          <ServicegridCardOne>
    <ServicegridImageTwo>
    <div style={{margin: "25px"}}>
    <Image src={image4}/>
    </div>
    </ServicegridImageTwo>

    <ServicesgridHeaderTextTwo>
    Graphics Design
    </ServicesgridHeaderTextTwo>
    <ServiceStroke/>

    <ServicesParagraphTextOne>
   
    Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
    dolor sit amet. sed diam eirmod tempor dolore.

    
    </ServicesParagraphTextOne>
    <ServicesButtonTwo>
    <ServicesButtonTextTwo>
    Know More 
    <ServiceButtonIconTwo>
    <Image src={image6}/>
    </ServiceButtonIconTwo>
    </ServicesButtonTextTwo> 
    
    </ServicesButtonTwo>
 
    
    </ServicegridCardOne>

       
        </div>
        </div>
      
      </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-4">
        <div style={{marginTop: "25px"}}>
       
<ServicegridCard>
<ServicegridImage>
<div style={{margin: "25px"}}>
<Image src={image3}/>
</div>
</ServicegridImage>
<ServicesgridHeaderText>
Web Development
</ServicesgridHeaderText>
<ServiceStroke/>

<ServicesgridSubHeader>

Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
dolor sit amet. sed diam eirmod tempor dolore.


</ServicesgridSubHeader>
<ServicesButton>
<ServicesButtonText>
Know More 
<ServiceButtonIcon>
<Image src={image5}/>
</ServiceButtonIcon>
</ServicesButtonText> 

</ServicesButton>


</ServicegridCard>

          </div>
        </div>
      
      </div>
    </div>
 
    <div className="col-md-6">
   
      <div className="row">
        <div className="col-md-4">
          
         <div style={{marginTop: "25px"}}>
        
  
          <ServicegridCardTwo>

    <ServicesgridHeaderText>
    <h2>70%</h2>
    </ServicesgridHeaderText>
    <ServiceStrokeTwo/>
    <ServicesParagraphTextTwo>
    <h4> Web Design</h4>

    </ServicesParagraphTextTwo>
    <ServicesSubHeader>
    <h6> HTML, CSS, jQuery</h6>
    </ServicesSubHeader>
    </ServicegridCardTwo>
 
   
        </div>
      </div>
      </div>
    </div>

    <ServicesViewButton>
    <ServicesViewButtonText>

ViewMore
</ServicesViewButtonText>
</ServicesViewButton>
  </div>
</div>


   
    </div>


    </div>
    
    </section>
    </div>
  )
}

export default services

{/**

 <ServicesgridItem>
    <ServicegridCard>
    <ServicegridImage>
    <div style={{marginTop: "25px"}}>
    <Image src={image3}/>
    </div>
    </ServicegridImage>
    <ServicesgridHeaderText>
    Web Design
    </ServicesgridHeaderText>
    <ServiceStroke/>

    <ServicesgridSubHeader>
    <h4>
    Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
    dolor sit amet. sed diam eirmod tempor dolore.
    </h4>
    
    </ServicesgridSubHeader>
    <ServicesButton>
    <ServicesButtonText>
    <h4>Know More </h4>
    <ServiceButtonIcon>
    <Image src={image5}/>
    </ServiceButtonIcon>
    </ServicesButtonText> 
    
    </ServicesButton>
 
    
    </ServicegridCard>

    </ServicesgridItem>
    
    
   


    <ServicesgridItem>

    <ServicegridCardTwo>
    <ServicesgridHeaderText>
    <h2>95%</h2>
    </ServicesgridHeaderText>
    <ServiceStrokeTwo/>
  
    
    <ServicesParagraphTextTwo>
    <h4> Web Design</h4>

    </ServicesParagraphTextTwo>
    <ServicesSubHeader>
    <h6> HTML, CSS, jQuery</h6>
    </ServicesSubHeader>
    </ServicegridCardTwo>
    </ServicesgridItem>




    <ServicesgridItem>
   
    <ServicegridCardTwo>

    <ServicesgridHeaderText>
    <h2>95%</h2>
    </ServicesgridHeaderText>
    <ServiceStrokeTwo/>
    <ServicesParagraphTextTwo>
    <h4> Web Design</h4>

    </ServicesParagraphTextTwo>
    <ServicesSubHeader>
    <h6> HTML, CSS, jQuery</h6>
    </ServicesSubHeader>

    </ServicegridCardTwo>
    
    </ServicesgridItem>


    <ServicesgridItem>

    <ServicegridCardOne>
    <ServicegridImageTwo>
    <div style={{marginTop: "25px"}}>
    <Image src={image4}/>
    </div>
    </ServicegridImageTwo>
    <ServicesgridHeaderTextTwo>
    Graphics Design
    </ServicesgridHeaderTextTwo>
    <ServiceStroke/>

    <ServicesParagraphTextOne>
    <h4>
    Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
    dolor sit amet. sed diam eirmod tempor dolore.
    </h4>
    
    </ServicesParagraphTextOne>
    <ServicesButtonTwo>
    <ServicesButtonTextTwo>
    <h4>Know More </h4>
    <ServiceButtonIconTwo>
    <Image src={image6}/>
    </ServiceButtonIconTwo>
    </ServicesButtonTextTwo> 
    
    </ServicesButtonTwo>
 
    
    </ServicegridCardOne>



    </ServicesgridItem>








    <ServicesgridItem>

    <ServicegridCard>
    <ServicegridImage>
    <div style={{marginTop: "25px"}}>
    <Image src={image3}/>
    </div>
    </ServicegridImage>
    <ServicesgridHeaderText>
    Web Development
    </ServicesgridHeaderText>
    <ServiceStroke/>

    <ServicesgridSubHeader>
    <h4>
    Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum
    dolor sit amet. sed diam eirmod tempor dolore.
    </h4>
    
    </ServicesgridSubHeader>
    <ServicesButton>
    <ServicesButtonText>
    <h4>Know More </h4>
    <ServiceButtonIcon>
    <Image src={image5}/>
    </ServiceButtonIcon>
    </ServicesButtonText> 
    
    </ServicesButton>
 
    
    </ServicegridCard>



    </ServicesgridItem>



    <ServicesgridItem>

    <ServicegridCardTwo>
    <ServicesgridHeaderText>
    <h2>70%</h2>
    </ServicesgridHeaderText>
    <ServiceStrokeTwo/>
    <ServicesParagraphTextTwo>
    <h4> Web Design</h4>

    </ServicesParagraphTextTwo>
    <ServicesSubHeader>
    <h6> HTML, CSS, jQuery</h6>
    </ServicesSubHeader>
    </ServicegridCardTwo>
    </ServicesgridItem>*/}