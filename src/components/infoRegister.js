import React from "react";

import phone from '../images/phoneImg.svg';
// import AppStore from '../images/apple.svg';
import GooglePlay from '../images/newGoogle.png';

import CheckMark1 from '../images/checkMark1.svg'
import CheckMark2 from '../images/checkMark2.svg'
import CheckMark3 from '../images/checkMark3.svg'
import CheckMark4 from '../images/checkMark4.svg'
import CheckMark5 from '../images/checkMark5.svg'




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



    // TESTA OCH GÖRA HELA INFO REGISTER MED STYLED COMPONENTS



    // <div className="infoRegister">
    //     <div className="infoBlue">
    //       <div className='flex flex-col mt-12 lg:px-24 md:px-12 mobile:px-6 '>
    //         <h1 className='flex justify-center mb-10 text-4xl font-medium'>Hej student!</h1>
    //         <ul className='flex flex-col h-full relative'>
    //           <li className='lg:text-3xl mobile:text-2xl pb-10'>Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
    //           <li className='lg:text-3xl mobile:text-2xl pb-10'>Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
    //           <li className='lg:text-3xl mobile:text-2xl pb-10'>Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
    //           <li className='lg:text-3xl mobile:text-2xl pb-10'>Chatta direkt med arbetsgivare i appen.</li>
    //           <li className='lg:text-3xl mobile:text-2xl'>Tjänsten är givetvis gratis och du binder inte upp dig.</li>
    //         </ul>
    //         <img src={GirlImage} className='flex lg:w-24 mobile:w-16 relative fixed self-end'></img>
    //         <div className='flex justify-center '>
    //         <a href='/' className='regButton'>Registrera dig</a>
    //         </div>
    //       </div>
    //     </div>


    //     <div className="infoPink">
    //     <div className='flex flex-col mt-12 lg:px-24 md:px-12 mobile:px-6 '>
    //         <h1 className='flex justify-center mb-10 text-4xl font-medium'>Ladda ned appen</h1>
    //         <div>
    //           <img src=''></img>
    //         </div>
    //       </div>
    //     </div>
    // </div>

    <section className="bg-pink-100">
      <div className="container py-20 mx-auto ">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Testimonials
    </h2> */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
            <div className="rounded-lg shadow py-2 bg-white">
              <h3 className='text-center py-10 font-bold text-lg'>Hej Student!</h3>
              <ul className='leading-10'>
                <img alt="Checkmark1" src={CheckMark1} className='flex items-start' /> <li className="text-gray-800 text-base px-6 mb-5 reg1">Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
                <img alt="Checkmark2" src={CheckMark2} className='flex items-start' /> <li className="text-gray-800 text-base px-6 mb-5 reg2">Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
                <img alt="Checkmark3" src={CheckMark3} className='flex items-start' /> <li className="text-gray-800 text-base px-6 mb-5 reg3">Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
                <img alt="Checkmark4" src={CheckMark4} className='flex items-start' /> <li className="text-gray-800 text-base px-6 mb-5 reg4">Chatta direkt med arbetsgivare i appen.</li>
                <img alt="Checkmark5" src={CheckMark5} className='flex items-start' /> <li className="text-gray-800 text-base px-6 mb-5 reg5">Tjänsten är givetvis gratis och du binder inte upp dig.</li>
              </ul>
              <a href='/' className='flex bg-pink-600 hover:bg-pink-700 duration-500 border-0 text-base text-white p-2 w-32 justify-center mx-auto rounded-lg'>Registrera dig</a>
            </div>

          </div>
          <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
            <div className="rounded-lg shadow py-2 bg-white">
              <h3 className='text-center py-10 font-bold text-lg'>Ladda ned appen</h3>
              <img alt="phone" src={phone} className='mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default InfoRegister;