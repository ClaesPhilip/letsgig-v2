import React from "react";

import phone from '../images/phoneImg.svg';
import AppStore from '../images/appStore.svg';
import GooglePlay from '../images/googlePlay.svg';

//----HERE IS THE IMAGE OF THE GIRL ON THE YOGA-BALL, placed on column 35----
// import Person from '../images/person.png';


import One from '../images/One.svg'
import Two from '../images/Two.svg'
import Three from '../images/Three.svg'
import Four from '../images/Four.svg'
import Five from '../images/Five.svg'


function InfoRegister() {
  return (

    <section className="bg-pink-100">
      <div className="container py-20 mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
            <div className="rounded-lg shadow py-2 bg-white">
              <h3 className='text-center py-10 font-bold text-lg '>Sök jobb på 5 minuter!</h3>
              <ul className='leading-10 space-y-12'>
                <img alt="Step one" src={One} className='flex items-start ml-6' /> <li className="text-gray-800 text-base px-6 mb-5 ml-10 space-y-12 reg1">Du registrerar dig enkelt genom att ladda ned LetsGig appen.</li>
                <img alt="Step two" src={Two} className='flex items-start ml-6' /> <li className="text-gray-800 text-base px-6 mb-5 ml-10 reg2">Med ett par klick har du skapat en profil som blir ditt digitala CV.</li>
                <img alt="Step three" src={Three} className='flex items-start ml-6' /> <li className="text-gray-800 text-base px-6 mb-5 ml-10 reg3">Du bestämmer själv hur mycket du vill jobba och inom vilka områden.</li>
                <img alt="Step four" src={Four} className='flex items-start ml-6' /> <li className="text-gray-800 text-base px-6 mb-5 ml-10 reg4">Chatta direkt med arbetsgivare i appen.</li>
                <img alt="Step five" src={Five} className='flex items-start ml-6' /> <li className="text-gray-800 text-base px-6 mb-5 ml-10 pb-6 reg5">Tjänsten är givetvis gratis och du binder inte upp dig.</li>
                {/* <img alt="Girl on yogaball" src={Person} className='invisible lg:visible float-right yogaGirl' /> */}
              </ul>

              <a href='/' className='flex bg-pink-600 hover:bg-pink-700 duration-500 border-0 text-base text-white p-2 w-32 justify-center mx-auto rounded-lg md:mt-10 lg:mt-8 mb-16 '>Kom igång</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mobile:w-full px-2 mb-4">
            <div className="rounded-lg shadow py-2 bg-white">
              <h3 className='text-center py-10 font-bold text-lg'>Ladda ned appen</h3>
              <img alt="phone" src={phone} className='mx-auto md:mt-16 lg:mt-0 phoneImg' />
              <div className='flex items-center justify-center mt-6 md:mt-32 lg:mt-6'>
                <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
                  <img alt="google play" src={GooglePlay} width="100" className='pb-24' ></img>
                </a>
                <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
                  <img alt="google play" src={AppStore} width="100" height="100" className='pb-24'></img>
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