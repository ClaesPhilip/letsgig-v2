import React from "react";

function Footer() {
  return (
  
    <div className="bg-pink-100 h-screen">
      <footer className="">
  <div className="container mx-auto px-6 pt-10 pb-6 bg-pink-100">
    <div className="flex flex-wrap sm:mt-64 mt-32">
      <div className="w-full md:w-1/4 text-center">
        <h5 className="uppercase mb-6 font-bold">Links</h5>
        <ul className="mb-4">
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">FAQ</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Help</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Support</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 text-center">
        <h5 className="uppercase mb-6 font-bold">Legal</h5>
        <ul className="mb-4">
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Terms</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 text-center">
        <h5 className="uppercase mb-6 font-bold">Social</h5>
        <ul className="mb-4">
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Facebook</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Linkedin</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 text-center">
        <h5 className="uppercase mb-6 font-bold">Company</h5>
        <ul className="mb-4">
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Official Blog</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">About Us</a>
          </li>
          <li className="mt-2">
            <a href="#" className="hover:underline text-gray-600 hover:text-pink-600">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  
  );
}

export default Footer;