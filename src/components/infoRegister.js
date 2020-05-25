import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

// import GirlImage from '../images/person.png';

function InfoRegister() {
  return (
   
      

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
            <h3 className='text-center py-10 font-bold text-lg'>Ladda ned appen</h3>
        </div>
      </div>
    </div>
  </div>
</section>
    
  );
}

export default InfoRegister;