import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className='flex flex-row mx-24'>
        <form className="flex flex-col w-1/2 h-14 ml-16">
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

          <button className="w-48 px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Skicka
          </button>
        </form>
        
        <div className='w-1/2 h-14'>
           
          <h1 className='flex justify-center text-3xl font-bold mb-8 mr-24 leading-loose'>KONTAKT INFORMATION</h1>
          
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
