import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Bg_image from "../images/bg-Image.jpg";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className='flex flex-col items-center md:flex-row md:w-full pt-16 ' style={{
        backgroundImage: `url(${Bg_image})`
      }} >
        <form className="md:w-2/3 md:mr-8 xl:w-1/2 lg:ml-16 sm:w-full flex flex-col sm:ml-16 xs:w-64 sm:w-full">
          <p className='mb-8 w-1/2 leading-loose text-3xl font-bold'>
            KONTAKTA OSS!
          </p>

          <label
            className="block w-1/2 mb-2 text-xs font-bold uppercase"
            htmlFor="full-name"
          >
            Namn och efternamn
          </label>

          <input
            className="w-1/2 mb-6 form-input"
            id="full-name"
            placeholder="Oscar"
            type="text"
          />

          <label
            className="block w-1/2 mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            email
          </label>

          <input
            className="w-1/2 mb-6 form-input"
            id="last-name"
            placeholder="oscar@hotmail.com"
            type="text"
          />

          <label
            className="block w-1/2 mb-2 text-xs font-bold uppercase"
            htmlFor="meddelande"
          >
            meddelande
          </label>

          <textarea
            className="w-2/3 mb-6 form-textarea"
            id="meddelande"
            placeholder="Hej jag undrar om..."
            rows="8"
          />

          <button className="flex w-48 px-4 py-2 text-sm font-bold text-white bg-pink-700 border-b-4 border-pink-700 rounded hover:border-pink-600 hover:bg-pink-600">
            Skicka
          </button>
        </form>

        {/* <div className='w-1/2 h-14'> 
          <h1 className='flex text-3xl font-bold mb-8 mr-24 leading-loose'>KONTAKT INFORMATION</h1>
          <h3 className='font-bold'>Address</h3>
          <p className='font-medium text-gray-600'> Wenner-Gren Center plan 16 <br></br>
              c/o DNA Labs AB <br></br>
              Sveavägen 166 <br></br>
              113 46 Stockholm, Sweden
          </p>
          
        </div> */}
      </section>
    </Layout >
  );
}

export default ContactPage;
