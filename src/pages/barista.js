import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// IMAGES 
import Maps from '../images/maps.png';



function FlipCards() {
  return (

<Layout>
    <SEO
    keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    title="About"
    />
    
    <section className=" h-screen">
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-6xl font-bold text-center text-gray-800 mb-8">
        Barista
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="bg-white py-2">
            <h1 className="text-gray-800 px-6 mb-5 text-2xl font-bold">Vad gör dig till en bra barista?</h1>
            <h3 className="text-gray-800 text-xl  px-6">Ta intiativ</h3>
            <p className='text-gray-800 px-6 pb-6 ' >När du har lärt dig grunderna i jobbet, stå inte bara runt och vänta på att bli ombedd att göra en annan uppgift, 
                visa initiativ och hitta möjligheter som kommer att göra alles jobb lättare, som att rengöra kaffemaskinen, 
                fylla på lager och tömma bin.</p>

            <h3 className="text-gray-800 text-xl  px-6">Var en lagspelare</h3>
            <p className='text-gray-800 px-6 pb-6' >Om arbetet pågår på en teammedlem och du kan hjälpa till utan att påverka dina egna uppgifter, 
            var noga med att erbjuda din hjälp. De kommer verkligen att uppskatta hjälp och ditt stöd kommer inte att glömmas lätt.</p>

            <h3 className="text-gray-800 text-xl  px-6">Var vänlig</h3>
            <p className='text-gray-800 px-6 pb-6' >Det kan vara skrämmande att ansluta sig till en hårt stickad arbetskraft, 
            men att bygga relationer är avgörande för rollen, så se till att göra en ansträngning och vara vänlig med dina kollegor. 
            En bra arbetsinställning kan leda till fler förändringar.</p>

          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 lg:ml-12 ">
          <div className="py-2 text-center">
            <p className="text-gray-800 text-2xl pb-6 px-6">Sök barista jobb i din stad</p>
            <input className="h-12 rounded-full text-center mb-4 border outline-none" type="text" placeholder="Kiruna" />
            <p className="text-gray-00 text-2xl text-pink-600 pb-6 px-6">16 barista jobb i kalmar!</p>
            <img src={Maps} className='contain'></img>
          </div>
        </div>
        
      </div>
    </div>
  </section>

</Layout>           
  );
}

export default FlipCards;