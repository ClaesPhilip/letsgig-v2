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

      <section className="">
        <img
          alt="picture"
          className="bg_image"
          src={Bg_Image}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
