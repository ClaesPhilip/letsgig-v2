import React from "react";

// IMAGES 
import Android from '../images/android.png';
import MainPic from '../images/mainPic.jpeg';


function FlipCards() {
  return (
    


          <section className="bg-white">
          <div className="container mx-auto px-6 py-20">
            {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Flipcards
            </h2> */}

            <div className="flex flex-wrap">


              <div className="w-full md:w-1/3 px-2 mb-4 relative thecard">
                <div className="bg-white rounded shadow py-2 absolute thefront">
                  <img src={MainPic} className='contain w-full object-cover '></img>
                <h1>Kontor</h1>
                </div>

                <div className="bg-white rounded shadow py-2 relative theback">
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
                <div className="bg-white rounded shadow py-2 absolute thefront">
                <img src={MainPic} className='cover w-full '></img>
                <h1>Digitalt</h1>
                </div>

                <div className="bg-white rounded shadow py-2 relative theback">
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
                <div className="bg-white rounded shadow py-2 absolute thefront">
                <img src={MainPic} className='cover w-full '></img>
                <h1>Service</h1>
                </div>

                <div className="bg-white rounded shadow py-2 relative theback">
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