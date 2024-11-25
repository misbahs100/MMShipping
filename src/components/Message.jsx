import React from "react";
import pic from '../assets/mralam.jpg'

const Message = () => {
  return (
    <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
      <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
        {/* Small Heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-5xl font-semibold text-gray-700">
            Owner's Message
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Circle Image of Owner */}
          <div className="flex-shrink-0">
            <img
              src={pic}
              alt="Owner"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto"
            />
          </div>

          {/* Message Content */}
          <div className="text-center md:text-left">
            {/* Heading */}
            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              One of the pioneers in the Bangladesh-Singapore Shipping Industry
            </h4>

            {/* Message */}
            <p className="text-gray-600 leading-relaxed mb-6">
              As we navigate the seas of the global trade, I want to express
              gratitude to our clients for entrusting us with their shipping
              solutions. Your challenges inspire us to innovate, adapt, and
              exceed expectations. To our partners, your collaboration fuels our
              success, and together, we forge pathways to new horizons.
            </p>

            {/* Name and Designation */}
            <div>
              <p className="text-gray-800 font-medium">Mr. Shah Alam</p>
              <p className="text-gray-500">Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
