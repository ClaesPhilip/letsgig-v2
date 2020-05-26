import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

// IMAGES 
import Android from '../images/android.png';
import MainPic from '../images/mainPic.jpeg';


function FlipCards() {
  return (
    
      
    

    // <div className='flex items-center justify-evenly flex-row flipCards'>

    //     <div className="thecard">

    //     <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

    //     <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
    //     <button>Submit</button></div>

        
    //     </div>

    //     <div className="thecard">

    //     <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

    //     <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
    //     <button>Submit</button></div>

    //     </div>

    //     <div className="thecard">

    //     <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

    //     <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
    //     <button>Submit</button></div>

    //     </div>
    // </div>




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
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/D">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/E">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/F">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
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
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/D">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/E">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/F">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
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
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/D">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/E">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/F">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/A">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/B">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  <li className='py-6 w-1/3'><a href="/list/C">Barista<img className='mx-auto' border="0" alt="W3Schools" src={Android} width="50"></img></a></li>
                  
                </ul>
                </div>

              </div>
              
            </div>
          </div>
          </section>
             
  );
}

export default FlipCards;