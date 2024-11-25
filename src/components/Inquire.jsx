import React from "react";

const Inquire = () => {
  return (
    <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
      <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row  gap-x-10">
          <div className="w-full md:w-1/3 space-y-6 ">
            <div>
              <h1 className="text-2xl text-gray-600 font-bold mb-6">Inquire Here!</h1>
              <p>
                We have a dedicated support team ready to answer your questions.
              </p>
            </div>
            <div className="text-sm ">
              <p>+65 6583 9349, +65 9296 3844</p>
              <p>sales@mmshipping.com</p>
              <p>22 Sin Ming Lane, #06-76 Midview City, Singapore 573969</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="space-y-4">
              <h1 className="text-2xl text-gray-600 font-bold mb-6 mt-6 md:mt-0">Contact Us</h1>
              <p>
                Feel free to contact us to provide some feedback on our
                templates, give us suggestions for new templates and themes, or
                to just say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquire;
