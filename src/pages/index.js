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

        <p className='flex text-pink-600 justify-end mr-64 text-2xl'>SENASTE GIGGEN</p>

      </section>
    </Layout>
  );
}

export default IndexPage;
