import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SingleService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(http://mmshipping.com/assets/img/main/supplies.webp)",
        }}
        className="bg-no-repeat bg-cover py-40 px-4 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-0 md:p-4 max-w-7xl mx-auto text-center space-y-4">
          <h2 className="animate-slideUp text-3xl md:text-5xl font-bold text-white">
            SPARE SUPPLIES
          </h2>
        </div>
      </section>

      <div className="bg-white py-10 flex justify-center mt-12">
        <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-12">
            <div className="w-full md:w-2/3 space-y-6">
              <p>
                Navigating the seas demands reliability, and at M.M. Shipping,
                we understand the critical role that spare parts play in
                ensuring the smooth operation of your vessels. Our Spare Parts
                Supply Service is tailored to provide you with a seamless and
                efficient solution for sourcing high-quality spare parts,
                keeping your maritime assets in optimal condition.
              </p>

              <img
                src="http://mmshipping.com/assets/img/main/supplies2.webp"
                alt=""
              />

              <p>
                <strong>Comprehensive Inventory:</strong> We boast an extensive
                inventory of genuine and reliable spare parts, covering a wide
                spectrum of marine equipment and machinery. Whether you require
                components for the engine, navigation systems, or safety
                equipment, our inventory is carefully curated to meet the
                diverse needs of the shipping industry.
              </p>
              <p>
                <strong>Quality Assurance:</strong> We prioritize quality to
                ensure that every spare part we supply meets the highest
                industry standards. Our commitment to sourcing from reputable
                manufacturers and suppliers guarantees the longevity and
                performance of the parts we provide, contributing to the overall
                reliability of your vessels.
              </p>
              <p>
                <strong>Efficient Logistics: </strong>Time is of the essence in
                the shipping industry, and our spare parts supply service is
                designed with efficiency in mind. With a streamlined logistics
                process, we ensure that your ordered spare parts reach you
                promptly, minimizing downtime and enabling your vessels to
                operate at peak efficiency.
              </p>
              <p>
                <strong>Tailored Solutions:</strong> Understanding that each
                vessel is unique, we offer personalized solutions to match your
                specific requirements. Our experienced team works closely with
                you to identify the right spare parts, providing expert advice
                and ensuring a perfect fit for your maritime equipment.
              </p>
              <p>
                <strong>
                  Choose M.M. Shipping for your Spare Parts Supply needs and
                  experience a seamless, reliable, and customer-centric service
                  that keeps your vessels sailing with confidence. Our
                  dedication to excellence makes us your trusted partner in
                  maintaining the integrity and performance of your maritime
                  assets.
                </strong>
              </p>
            </div>

            <div className="w-full md:w-1/3 mt-10 md:mt-0">
              <div className="border-y py-5 ml-auto">
                <h2 className="text-xl text-gray-700 font-bold mb-4">
                  Other Services
                </h2>
                <p>
                  <Link to="/supplies">Chartering</Link>
                </p>
                <p>
                  <Link to="/supplies">Bunkering</Link>
                </p>
                <p>
                  <Link to="/supplies">
                    Store Supplies & Calibration Services
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
