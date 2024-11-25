import React from "react";

const Query = () => {
  return (
    <div className="bg-gray-100 py-10 flex justify-center mt-12 md:mt-24">
      <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row  justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl text-gray-600 font-bold">Have a Query?</h1>
            <p>We are always here to help you with your query.</p>
          </div>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-200 transition">
            Get in touch with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Query;
