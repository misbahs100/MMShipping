import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services = () => {
    const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef);
  return (
    <>
      <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
        <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-5xl font-bold text-gray-700 mb-6">
              What we do
            </h3>
            <p>
              M.M. Shipping (S) Pte. Ltd. is a leading maritime company based in
              Singapore. With our extensive experience and expertise in the
              industry, we provide a wide range of shipping services to meet the
              diverse needs of our clients. Our dedicated team is committed to
              delivering exceptional solutions, ensuring the smooth and
              efficient transportation of goods across the globe.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
        <div  ref={sectionRef} className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-5xl font-bold text-gray-700 mb-6">
              Our Services
            </h3>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Service 1 */}

            <div className="animate-slideRight bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className=" flex flex-col items-center">
                  <img
                    src="http://mmshipping.com/assets/img/Picture1.png"
                    alt="Chartering"
                    className="w-24 mb-4"
                  />
                  <p className="text-lg font-bold text-center">Chartering</p>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Efficient and reliable shipping and transportation solutions
                    for maritime businesses.
                  </p>
                </div>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="animate-slideRight bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src="http://mmshipping.com/assets/img/Picture1.png"
                    alt="Chartering"
                    className="w-24 mb-4"
                  />
                  <p className="text-lg font-bold text-center">Chartering</p>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Efficient and reliable shipping and transportation solutions
                    for maritime businesses.
                  </p>
                </div>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="animate-slideRight bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src="http://mmshipping.com/assets/img/Picture2.png"
                    alt="Bunkering"
                    className="w-24 mb-4"
                  />
                  <p className="text-lg font-bold text-center">Bunkering</p>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Quality and sustainable fuel options ensuring optimal
                    performance and safety.
                  </p>
                </div>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="animate-slideRight bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src="http://mmshipping.com/assets/img/Picture3.png"
                    alt="Store Supplies"
                    className="w-24 mb-4"
                  />
                  <p className="text-lg font-bold text-center">
                    Store Supplies & Calibration Services
                  </p>
                </div>
                <div className="text-center mt-4">
                  <p>
                    A one-stop solution for all your ship's operational needs
                    with our comprehensive store supplies
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
