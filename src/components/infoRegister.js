import React from "react";

import phone from '../images/phoneImg.svg';
// import AppStore from '../images/apple.svg';
import GooglePlay from '../images/newGoogle.png';


function InfoRegister() {
  return (

    <section className="bg-pink-100">
  <div className="container py-20 mx-auto ">

    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
        <div className="rounded-lg shadow py-2 bg-white">
          <h3 className='text-center py-10 font-bold text-lg'>Hej Student!</h3>
          <ul className='leading-10'>
          <li className="text-gray-800 text-base px-6 mb-5">Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
          <li className="text-gray-800 text-base px-6 mb-5">Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
          <li className="text-gray-800 text-base px-6 mb-5">Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
          <li className="text-gray-800 text-base px-6 mb-5">Chatta direkt med arbetsgivare i appen.</li>
          <li className="text-gray-800 text-base px-6 mb-5">Tjänsten är givetvis gratis och du binder inte upp dig.</li>
          </ul>
          <a href='/' className='flex bg-pink-600 hover:bg-pink-700 duration-500 border-0 text-base text-white p-2 w-32 justify-center mx-auto rounded-lg'>Registrera dig</a>
        </div>
        
      </div>
      <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
        <div className="rounded-lg shadow py-2 bg-white">
            <h3 className='text-center py-10 font-bold text-lg md:mt-2 lg:mt-0'>Ladda ned appen</h3>
            <img alt="phone" src={phone} className='mx-auto md:mt-12 lg:mt-0 phoneImg' />
            
            <div className='flex items-center justify-center mt-6 md:mt-32 lg:mt-6'>
              <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
                <img alt="google play" src={GooglePlay} width="150" ></img>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
                <img alt="google play" src={GooglePlay} width="150" height="100"></img>
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
  );
}

export default InfoRegister;