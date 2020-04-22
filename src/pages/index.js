import React from "react";
// import {Link} from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Bg_Image from "../images/bg-Image.jpg";
import AppStore from '../images/appStore.jpg';
import GooglePlay from '../images/googlePlay.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="landingSection" style={{
        backgroundImage: `url(${Bg_Image})`
      }} >

      <div className='pt-24 flex'>

            <div className="lg:w-3/4 sm:w-3/5 h-12 "></div>

            <p className='lg:w-1/4 sm:w-2/5 text-pink-700 text-4xl font-semibold items-right flex-no-wrap mobile:invisible lg:visible'>Senaste giggen: <br></br> UX/UI Designer</p>

      </div>

    <span className='flex flex-col'>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </span>
    
      <div className='w-full pt-24'>
        <h1 className='text-white'>Hitta Gig</h1>
          <input className="w-1/5 h-12" type="text" placeholder="Search" />
            <button className='w-1/12 h-12 text-white bg-pink-600 rounded-lg'>Search</button>
      </div>

      </section>
    <div className='w-full h-40'> 
      <div className='w-1/3'>
          <p className='flex justify-center'>Ladda ned appen!</p>
          
        <div className='flex flex-row justify-center'>
          <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
            <img alt="app store" src={AppStore} width="200" height="100"></img>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
            <img alt="google play" src={GooglePlay} width="200" height="100"></img>
          </a>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default IndexPage;
