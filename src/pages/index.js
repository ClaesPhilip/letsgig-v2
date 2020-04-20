import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Bg_Image from "../images/bg-Image.jpg";

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

            <div className="w-3/4 h-12"></div>

            <p className='w-1/4 text-pink-700 text-4xl font-semibold items-right '>Senaste giggen: <br></br> UX/UI Designer</p>

      </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
