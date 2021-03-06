import { Link } from "gatsby";
import React, { useState } from "react";

import Letsgig from '../images/letsgigLogon.png';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="flex w-full items-center justify-between flex-wrap p-5 m-auto lg:px-16 bg-pink-100">
      <Link to="/">
        <h1 className="flex items-center text-white no-underline">
          <img alt="lets gig" src={Letsgig} width="100" height="100"></img>
        </h1>
      </Link>

      <button
        className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-3 h-3 fill-current bg-pink-600"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
      >
        {[
          {
            route: `/about`,
            title: `Om Oss`,
          },
          {
            route: `/contact`,
            title: `Hjälp`,
          },
          {
            route: `/logIn`,
            title: `Logga In`,
          },
        ].map((link) => (
          <Link
            className="block mt-4 text-pink-700 font-medium no-underline md:inline-block md:mt-0 md:ml-6"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header >
  );
}

export default Header;
