import React from "react";

// IMAGES 
import Android from '../images/android.svg';
import IT from '../images/IT.jpg';
import Event from '../images/Event.jpg';
import Barista from '../images/Barista.jpg';


function FlipCards() {
  return (

    <section className="bg-pink-100">
      <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-black mb-8">
              Bli inspirerad!
            </h2>

        <div className="flex flex-wrap">       
          <div className="w-full md:w-1/3 px-2 mb-4 relative thecard">
            <div className="bg-white rounded shadow-lg py-2 absolute thefront">
              <div className='sm:h-32 lg:h-auto'>
                <img src={Event} className='lg:w-full sm:object-cover'></img>
              </div>
              <h1 className='sm:text-white md:text-black'>Event</h1>
            </div>

            <div className="bg-white rounded shadow-lg py-2 relative theback">
              <ul className="flex flex-wrap p-0">
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
              </ul>
            </div>

          </div>

          <div className="w-full md:w-1/3 px-2 mb-4 relative thecard">
            <div className="bg-white rounded shadow-lg py-2 absolute thefront">
              <div className='sm:h-32 lg:h-auto'>
                <img src={IT} className='lg:w-full sm:object-cover'></img>
              </div>
              <h1 className='sm:text-white md:text-black'>Digitalt</h1>
            </div>

            <div className="bg-white rounded shadow-lg py-2 relative theback">
              <ul className="flex flex-wrap p-0">
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-2 mb-4 relative thecard">
            <div className="bg-white rounded shadow-lg py-2 absolute thefront">
              <div className='sm:h-32 lg:h-auto'>
                <img src={Barista} className='lg:w-full sm:object-cover'></img>
              </div>
              <h1 className='sm:text-white md:text-black'>Service</h1>
            </div>

            <div className="bg-white rounded shadow-lg py-2 relative theback">
              <ul className="flex flex-wrap p-0">
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                <li className='py-6 w-1/3'><a href="/barista">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

  );
}

export default FlipCards;