import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Balloon from "../images/balloon.png"
import VisionPhone from "../images/visionPhone.png"
import Graduation from "../images/Graduation.png"


function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="bg-pink-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 visiontext">
            Vår Vision
    </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-20 pt-6 ">
              <div className="bg-pink-100">
                <img alt="Graduation hat" src={Graduation} />
                <h2 className="text-2xl font-bold text-left ml-12 text-gray-800 pt-10">
                  Studenter först </h2>
              </div>

            </div>
            <div className="w-full md:w-1/3 px-2 pt-4 mb-20">
              <div className="bg-pink-100">
                <img alt="Girl jumping next to phone" src={VisionPhone} />
              </div>
              <h2 className="text-2xl font-bold text-left ml-32 text-gray-800 pt-10">
                Ansök enkelt </h2>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-20 pb-2">
              <div className="bg-pink-100">
                <img alt="Girl with balloon" src={Balloon} />
              </div>
              <h2 className="text-2xl font-bold text-left ml-12 text-gray-800 pt-10">
                LetsGig är din möjlighet </h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
