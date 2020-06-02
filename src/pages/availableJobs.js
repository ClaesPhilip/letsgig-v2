import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import AppStore from '../images/appStore.svg';
import GooglePlay from '../images/googlePlay.svg';

function AvailableJobs() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className='container mx-auto px-6 py-20 bg-pink-100'>
        <div>

          <h1 className='lg:text-6xl md:text-5xl text-center'>Vi hittade <span className='text-pink-600'>31 butik</span> giggs i <span className='text-pink-600'>Stockholm!</span></h1>
          <h2 className='lg:text-5xl md:text-4xl text-center'>Ladda ner appen och kom igång!</h2>

          <div className='flex justify-center  mt-6'>
            <a href="https://apps.apple.com/se/app/letsgig/id1448023337">
              <img alt="app store" src={AppStore} width="215" height="200" className='pr-4'></img>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.letsgig.prd&hl=sv">
              <img alt="google play" src={GooglePlay} width="200" height="200"></img>
            </a>
          </div>

          <div className='container mx-auto mt-6 flex flex-col sm:flex-row justify-center items-center'>
            <input className="md:w-1/5 h-12 rounded-full mt-2 md:mr-6 pl-4 border outline-none" type="text" placeholder="Telefonnummer" />
            {/* <input className="md:w-1/5 h-12 rounded-full mt-2 md:mr-6 pl-4 border outline-none" type="text" placeholder="Kategori" /> */}
            <a href='/availableJobs' className='flex md:w-1/12 w-1/5 h-12 mt-2 text-white bg-pink-600 rounded-full text-center items-center justify-center outline-none'>Skicka Länk</a>
          </div>

          <p className='text-sm sm:text-1xl text-center mt-2 underline'>Fyll i ditt mobil nummer ovan så skickar vi en länk</p>

        </div>
      </section>
    </Layout >
  );
}

export default AvailableJobs;