

// WE DONT USE THIS PAGE, BUT WHEN WE TRY TO DELETE IT, IT DOESNT WORK. 
// THE INDEX THAT WE ARE USING IS INDEX.JS


import React from "react";

// IMAGES
import AppStore from '../images/apple.svg';
import GooglePlay from '../images/android.svg';

// ICONS
import { MdExpandMore } from "react-icons/md";

// IMPORT PAGES
import InfoRegister from "../components/infoRegister";
import FlipCards from "../components/flipCards";
import SlideShow from '../components/slideShow';
import Footer from '../components/footer';





const NewIndex = () => (
<div>

    {/* --------NAV------- */}
<nav>
  <div className="container  md:mx-auto px-6 py-2 flex justify-between items-center">
    <a className="font-bold text-2xl lg:text-4xl" href="#">
      LETSGIG
    </a>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex">
        <li><a className="px-4 font-bold" href="/">Home</a></li>
        <li><a className="px-4 hover:text-gray-800" href="/">About</a></li>
        <li><a className="px-4 hover:text-gray-800" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
     {/* -------------- */}


     {/* --------IMAGE AND LAST GIGS------ */}

<div className="lg:pt-10">
  <div className="container md:mx-auto rutan">

    <div className='pt-8 flex'>
          <div className="lg:w-3/4 sm:w-3/5 h-12 "></div>
          <p className='lg:w-1/4 sm:w-2/5 text-pink-700 text-4xl font-semibold items-right flex-no-wrap mobile:invisible lg:visible'>Senaste giggen: <br></br> <p className='animate-text'>UX/UI Designer</p></p>
        </div>
  </div>
</div>

   {/* ----------------------------------- */}

   {/* ----------APP LOGOS AND ARROW----------- */}

    <div className='flex flex-row pt-4 bg-white'>
          <div className='w-1/3'>
            <div className='flex flex-row justify-left'>
              <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
                <img alt="app store" src={AppStore} width="80" height="100"></img>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
                <img alt="google play" src={GooglePlay} width="80" height="100"></img>
              </a>
            </div>
          </div>

        <div className='w-1/3'>
          <div className='flex flex-row justify-center border-none'>
            <button className='w-12 h-12 text-3xl text-pink-600 border-none'><MdExpandMore className='w-full text-4xl' /></button>
          </div>
        </div>

        <div className='w-1/3 pt-10'>
        </div>
    </div>

    {/* ------------------------------------------- */}

    <InfoRegister />
    <FlipCards />
    <SlideShow />
    <Footer />
</div>


);

export default NewIndex;