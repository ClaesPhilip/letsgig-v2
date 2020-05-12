import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

import Balloon from '../images/balloon.png';
import VisionPhone from '../images/visionPhone.png';
import Graduation from '../images/Graduation.png';

function OurVision() {
  return (
   
      

// TESTA OCH GÖRA HELA INFO REGISTER MED STYLED COMPONENTS



    <div className="visions">
      
      <h1 className='flex justify-center text-4xl mt-12'>Vår Vision</h1>
        
        <div className="flex mb-4 mt-24 mx-24 mobile:flex-col mobile:items-center justify-center lg:flex-row content-center">
          
          <div className=" h-12 px-24 order-1">
            <img className='' src={Graduation} width='300px' height='200px'></img>
          </div>
          
          <div className=" h-12 px-24 order-2">
          <img className='' src={VisionPhone} width='300px' height='200px'></img>
          </div>
          
          <div className=" h-12 px-24 order-3">
          <img className='' src={Balloon} width='300px' height='200px'></img>
          </div>
        </div>
    </div>
  
  );
}

export default OurVision;