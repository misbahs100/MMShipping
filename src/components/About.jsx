import React, { useEffect } from "react";
import ship3 from '../assets/ship3.jpg'

const About = () => {
  useEffect(() => {
    document.title = "About | M.M. Shipping (S) P.Ltd"
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        style={{
          backgroundImage:
            `url(${ship3})`,
        }}
        className="bg-no-repeat bg-cover h-screen py-[50vh] px-4 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-0 md:p-4 max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About Us
          </h2>
          <p className=" font-bold text-white">Who we are?</p>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-4 h-4 text-white text-center animate-bounce"
              viewBox="0 -10 512 298.04"
            >
              <path d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z" />
            </svg>
          </div>
        </div>
      </section>

      <div className="bg-white py-10 flex justify-center mt-12 md:mt-24">
        <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          <div className="text-left mb-8">
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

      <div className="bg-gray-100 py-10 flex justify-center mt-12 md:mt-24">
        <div className="w-full lg:w-3/4 px-4 md:px-8 lg:px-16">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="text-left mt-4">
              <p className="text-2xl text-gray-600 font-bold mb-4">About</p>
              <p>
                M.M. Shipping (S) Pte. Ltd. is a trusted name in the maritime
                industry, dedicated to delivering top-notch shipping services.
                We prioritize reliability, efficiency, and client satisfaction,
                aiming to set the standard for excellence and contribute to
                global trade connectivity. With a focus on sustainability,
                innovation, and strategic alliances, we lead with unwavering
                commitment in the dynamic maritime landscape.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-left mt-4">
              <p className="text-2xl text-gray-600 font-bold mb-4">
                Our Mission
              </p>
              <p>
                To be the preferred and trusted maritime partner, M.M. Shipping
                (S) Pte. Ltd. is dedicated to delivering unparalleled shipping
                services, leveraging our extensive industry knowledge and
                expertise. We are committed to ensuring seamless global
                transportation of goods, prioritizing reliability, efficiency,
                and client satisfaction.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-left mt-4">
              <p className="text-2xl text-gray-600 font-bold mb-4">
                Our Vission
              </p>
              <p>
                As a leading force in the maritime industry, M.M. Shipping (S)
                Pte. Ltd. envisions a future where we continue to set the
                standard for excellence in shipping services. Our vision is to
                be the go-to partner for clients seeking innovative and reliable
                solutions, fostering sustainable growth and contributing to the
                global connectivity of trade and commerce.
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-left mt-4">
              <p className="text-2xl text-gray-600 font-bold mb-4">Goals</p>
              <p>
                M.M. Shipping (S) Pte. Ltd. is a forward-thinking maritime
                leader expanding its global presence through strategic
                alliances. Committed to sustainability and responsible business
                practices, the company prioritizes the professional growth and
                well-being of its team members, fostering a culture of
                continuous learning and collaboration. With a focus on
                innovation and adaptability, M.M. Shipping stays ahead in the
                dynamic maritime sector, ensuring ongoing leadership
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
