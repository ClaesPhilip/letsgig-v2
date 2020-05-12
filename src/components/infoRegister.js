import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

import GirlImage from '../images/person.png';
import phone from '../images/phone.svg';

function InfoRegister() {
  return (



    // TESTA OCH GÖRA HELA INFO REGISTER MED STYLED COMPONENTS



    <div className="infoRegister">
      <div className="infoBlue">
        <div className='flex flex-col mt-12 lg:px-24 md:px-12 mobile:px-6 '>
          <h1 className='flex justify-center mb-10 text-3xl font-medium'>Hej student!</h1>
          <ul className='flex flex-col h-full relative'>
            <li className='lg:text-2xl mobile:text-2xl pb-10'>Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
            <li className='lg:text-2xl mobile:text-2xl pb-10'>Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
            <li className='lg:text-2xl mobile:text-2xl pb-10'>Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
            <li className='lg:text-2xl mobile:text-2xl pb-10'>Chatta direkt med arbetsgivare i appen.</li>
            <li className='lg:text-2xl mobile:text-2xl'>Tjänsten är givetvis gratis och du binder inte upp dig.</li>
          </ul>
          <img src={GirlImage} className='flex lg:w-24 mobile:w-16 relative fixed self-end'></img>
          <div className='flex justify-center '>
            <a href='/' className='regButton'>Registrera dig</a>
          </div>
        </div>
      </div>


<<<<<<< HEAD
      <div className="infoPink">

        <img src={phone} className='phone'></img>
      </div>
=======
        <div className="infoPink">
        <div className='flex flex-col mt-12 lg:px-24 md:px-12 mobile:px-6 '>
            <h1 className='flex justify-center mb-10 text-4xl font-medium'>Ladda ned appen</h1>
            <div>
              <img src=''></img>
            </div>
          </div>
        </div>
>>>>>>> e8567ca552a0cf50f042a05412b8b54b34c1c9cd
    </div>

  );
}

export default InfoRegister;