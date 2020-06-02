import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";

// IMAGES

import AppStore from '../images/appStore.svg';
import GooglePlay from '../images/googlePlay.svg';


// ICONS
import { MdExpandMore } from "react-icons/md";


// Components
import FlipCards from "../components/flipCards";
import InfoRegister from "../components/infoRegister";
import SlideShow from '../components/slideShow';
import Footer from '../components/footer';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="bg-contain landingImage">

        <div className='pt-8 flex'>
          <div className="lg:w-3/4 sm:w-3/5 h-12 "></div>
          <p className='lg:w-1/4 sm:w-2/5 text-pink-700 text-2xl font-semibold items-right flex-no-wrap invisible lg:visible'>Senaste giggen: <br></br> <p className='animate-text'>UX/UI Designer</p></p>
        </div>

      </section>

      <div className='container mx-auto mt-6  flex flex-col sm:flex-row justify-center items-center'>
        <input className="md:w-1/5 h-12 rounded-full mt-2 md:mr-6 pl-4 border outline-none shadow-lg hover:shadow-2xl duration-500" type="text" placeholder="Stad" />
        <input className="md:w-1/5 h-12 rounded-full mt-2 md:mr-6 pl-4 border outline-none shadow-lg hover:shadow-2xl duration-500" type="text" placeholder="Kategori" />
        <a href='/availableJobs' className='flex md:w-1/12 w-1/5 h-12 mt-2 text-white bg-pink-600 rounded-full text-center items-center justify-center outline-none hover:shadow-2xl duration-500'>Sök Jobb</a>
      </div>

      <div className='w-full h-40 flex flex-row pt-4 bg-pink-100 '>
        <div className='w-1/3 '>

          <div className='flex items-center justify-left lg:ml-20 md:ml-8 invisible md:visible'>
            <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
              <img alt="google play" src={GooglePlay} width="130" height="130" className='hover:shadow-2xl'></img>
            </a>
            <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
              <img alt="app store" src={AppStore} width="150" height="130" className='hover:shadow-2xl pl-4'></img>
            </a>
          </div>
        </div>


        <div className='w-1/3'>


          <div className='flex flex-row justify-center border-none'>
            <button className='w-12 h-12 text-3xl text-pink-600 border-none'><MdExpandMore className='w-full text-4xl outline-none border-none' /></button>

          </div>
        </div>

        <div className='w-1/3 pt-10'>

        </div>
      </div>
      <InfoRegister />
      <FlipCards />
      <SlideShow />
      <Footer />
    </Layout >
  );
}

export default IndexPage;
