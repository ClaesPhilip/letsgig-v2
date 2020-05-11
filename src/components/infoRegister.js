import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";



function InfoRegister() {
  return (
   
      
    
    <div className="infoRegister">
        <div className="infoBlue">
          <div className='flex flex-col mt-24 lg:px-24 md:px-12'>
            <h1 className='flex justify-center text-xl font-medium'>Hej student!</h1>
            <ul className='flex flex-col h-full'>
              <li className='lg:text-4xl mobile:text-2xl pb-10'>Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
              <li className='lg:text-4xl mobile:text-2xl pb-10'>Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
              <li className='lg:text-4xl mobile:text-2xl pb-10'>Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
              <li className='lg:text-4xl mobile:text-2xl pb-10'>Chatta direkt med arbetsgivare i appen.</li>
              <li className='lg:text-4xl mobile:text-2xl pb-10'>Tjänsten är givetvis gratis och du binder inte upp dig.</li>
            </ul>
            <a href='/' className='regButton'>Registrera dig</a>
          </div>
        </div>


        <div className="infoPink"></div>
    </div>
    
  );
}

export default InfoRegister;