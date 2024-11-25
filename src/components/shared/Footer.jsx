import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 flex justify-center ">
      <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
        <div className="border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                {" "}
                Cookies{" "}
              </a>
            </li>
          </ul>
          <p className=" text-xs text-gray-500 flex justify-center sm:items-center">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
