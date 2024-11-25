import React, { useEffect } from "react";
import Query from "./Query";
import { Link } from "react-router-dom";
import pic1 from '../assets/Picture1.png'
import pic2 from '../assets/Picture2.png'
import pic3 from '../assets/Picture3.png'
import ser from '../assets/ship2.jpg'

const OurServices = () => {
    useEffect(() => {
        document.title = "Services | M.M. Shipping (S) P.Ltd"
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <section
        style={{
          backgroundImage:
            `url(${ser})`,
        }}
        className="bg-no-repeat bg-cover py-40 px-4 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-0 md:p-4 max-w-7xl mx-auto text-center space-y-4">
          <h2 className=" text-3xl md:text-5xl font-bold text-white">
            Services
          </h2>
          <p className=" font-bold text-white">What we do</p>
        </div>
      </section>

      <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
        <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-5xl font-bold text-gray-700 mb-6">
              Our Services
            </h3>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Service 1 */}

            <div className="bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src={pic1}
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
            <div className="bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src={pic1}
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
            <div className="bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src={pic2}
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
            <div className="bg-gray-50 p-2 rounded-lg shadow-md">
              <Link to="/supplies">
                <div className="flex flex-col items-center">
                  <img
                    src={pic3}
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

      <Query />
    </>
  );
};

export default OurServices;
