import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="">
      <Header />

      <main className="">
        {children}
      </main>



      {/* <footer className="border border-black h-screen">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-black">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Letsgig
            </a>
          </p>

          <p>
            <a
              className="font-bold text-black no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
