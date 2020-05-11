import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";

// IMAGES
// import Bg_Image from "../images/bg-Image.jpg";
import AppStore from '../images/apple.svg';
import GooglePlay from '../images/android.svg';
import MainPic from '../images/header.svg';

// ICONS
import { MdExpandMore } from "react-icons/md";
// import { BsSearch } from "react-icons/bs";

// Components
// import FlipCards from "../components/flipCards";
import InfoRegister from "../components/infoRegister";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="landingSection" style={{
        backgroundImage: `url(${MainPic})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop: '20px'
      }} >

        <div className='pt-8 flex'>
          <div className="lg:w-3/4 sm:w-3/5 h-12 "></div>
          <p className='lg:w-1/4 sm:w-2/5 text-pink-700 text-4xl font-semibold items-right flex-no-wrap mobile:invisible lg:visible'>Senaste giggen: <br></br> <p className='animate-text'>UX/UI Designer</p></p>
        </div>


        {/* <h1 className='flex justify-end text-white mb-2 w-1/3 pr-20 text-xl'>Hitta Gig:</h1> */}

        {/* <div className='flex justify-center w-full h-24'>
          <input className="w-1/5 h-12 rounded-full mr-6 pl-4" type="text" placeholder="Stad" />
          <input className="w-1/5 h-12 rounded-full mr-6 pl-4" type="text" placeholder="Kategori" />
          <button className='w-1/12 h-12 text-white bg-pink-600 rounded-full '>Search</button>
        </div> */}

      </section>
      <div className='w-full h-40 flex flex-row pt-4'>
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
      <InfoRegister />
      {/* <FlipCards /> */}
    </Layout>
  );
}

export default IndexPage;
