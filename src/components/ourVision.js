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
        
        <div className="flex mb-4 mt-10 mx-24 mobile:flex-col mobile:items-center justify-center lg:flex-row content-center justify-evenly">
          
          <img className='' src={Graduation} width='300px' height='200px'></img>
          
          <img className='mt-10' src={VisionPhone} width='300px' height='200px'></img>
          
          <img className='' src={Balloon} width='300px' height='200px'></img>
          
        </div>

        <div className='flex justify-evenly items-center ml-10'>
        <h1 className='justify-center text-3xl'>Studenter först</h1>
        <h1 className='justify-center text-3xl '>Ansök enkelt</h1>
        <h1 className='justify-center text-3xl '>Letsgig är din möjlighet</h1>
        </div>

    </div>
  
  );
}

export default OurVision;

