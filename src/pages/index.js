import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import MainPic from "../images/mainPic.jpeg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      {/* <section className="">
        <img
          alt="picture"
          className=""
          src={MainPic}
        />
      </section> */}
    </Layout>
  );
}

export default IndexPage;
