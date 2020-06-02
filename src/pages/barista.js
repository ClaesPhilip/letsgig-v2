import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// IMAGES 
import Teacup from '../images/Teacup.png';
import Maps from '../images/maps.png';
import PhoneBarista from '../images/phoneBarista.png';
import GooglePlay from '../images/googlePlay.svg';
import AppStore from '../images/appStore.svg'



function FlipCards() {
  return (

    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className=" h-full">
        <div className="container mx-auto px-6 pt-6">
          <h2 className="text-6xl font-bold text-left text-gray-800 px-6 md:ml-20 w-64 inline-block">
            Barista
      </h2>
          <div className="flex flex-wrap justify-center bg-pink-100">
            <div className="w-full md:w-1/2 px-2 mb-4 ">
              <div className=" py-2">
                <h3 className="text-gray-800 text-xl  px-6">Letar du efter barista jobb?</h3>
                <p className='text-gray-800 px-6 pb-6 ' >Har du en kärlek till kaffe? Titta då på de barista-jobb som Let’s gig har att erbjuda.
            Vi har ett fantastiskt urval av lediga barista-jobb, allt från experimentella pop-ups, knäppa kaffebarer och mer traditionella, etablerade varumärken.</p>


                <p className='text-gray-800 px-6 pb-6' >Barista-arbetare måste vara välutbildade och skickliga på att ta kundbeställningar,
            hantera pengar, kunna göra en mängd olika varma och kalla drycker och ha utmärkt kundtjänst och kommunikationsförmåga.</p>


                <p className='text-gray-800 px-6 pb-6' >Våra kunder behöver tillfällig baristapersonal av hög kvalitet som inte bara kan stödja sin verksamhet utan också hjälpa dem att växa och vara en del av teamet.
                Om du letar efter barista-jobb, varför inte anmäla dig till ett skifte hos det ledande bemanningsföretaget och njuta av de bäst betalda flexibla jobb som Syft har att erbjuda? Barista-jobb inkluderar:
            evenemang Barista, servicepersonal, VIP-service, kundtjänst, kassör, ​​hantverkare Barista, matlagningspersonal och mer.</p>

              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 lg:ml-12 bg-pink-100">
              <div className="py-2 text-center ">
                <p className="text-gray-800 text-2xl pb-6 px-6">Färdigheter vi brukar söka;</p>
                <ul>
                  <li>• God kommunikation och beställningsförmåga</li>
                  <li>• Snabb och noggrann arbetare</li>
                  <li>• Högkvalitativ kundtjänst</li>
                  <li>• Vänlig inställning och väl presenterad</li>
                  <li>• Erfarenhet med espressomaskiner, texturerad mjölk och Latte Art</li>
                </ul>
                <img src={Teacup} className='contain'></img>
              </div>
            </div>

          </div>
        </div>



        <div className="container mx-auto px-6 pt-20">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-pink-100 py-2">
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
                <p className="text-gray-800 text-2xl pb-6 px-6">Sök barista jobb i din stad här</p>
                <input className="h-12 rounded-full pl-6 mb-4 border outline-none shadow-md" type="text" placeholder="Kalmar" />
                <p className="text-gray-00 text-2xl text-pink-600 pb-6 px-6">16 barista jobb i Kalmar!</p>
                <img src={Maps} className='contain'></img>
              </div>
            </div>

          </div>
        </div>



        <div className="container mx-auto px-6 pt-20">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-pink-100 py-10">
                <h1 className="text-gray-800 px-6 mb-8 text-2xl font-bold">Vad gör dig till en bra barista?</h1>
                <h3 className="text-gray-800 text-xl px-6 mb-3">Ta intiativ</h3>
                <ul className='px-6 leading-loose'>
                  <li>• Du behöver inte tänka på att skriva och ladda upp ett CV. Det gör du automatiskt genom att svara på några frågor när du registrerar dig.</li>
                  <li>• Ditt CV uppdaterar sig efter varje gig så att du slipper tänka på det.</li>
                  <li>• Du bestämmer själv när och vart du vill jobba.</li>
                  <li>• Du kan ställa frågor till arbetsgivare direkt i appen.</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 lg:ml-12 ">
              <div className="py-2 text-center">
                <img src={PhoneBarista} className='contain pt-10'></img>
              </div>
            </div>
            <div className='baristaAppBox'>
              <h1 className='text-center md:text-3xl pt-2'>Ladda ned appen och ansök nu! </h1>
              <div className='flex items-center justify-center mt-2 md:mt-6 lg:mt-6 flex-col sm:flex-row'>
                <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
                  <img alt="google play" src={GooglePlay} width="135" ></img>
                </a>
                <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
                  <img alt="App store" src={AppStore} width="135" height="100" className='ml-0 mt-2 sm:ml-2 sm:mt-0'></img>
                </a>
              </div>
            </div>
            <div className='h-20 bg-white'></div>

          </div>
        </div>
      </section>

    </Layout>
  );
}

export default FlipCards;


