import React, { useEffect } from "react";
import Inquire from "./Inquire";
import sing from '../assets/singapore1.jpg'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | M.M. Shipping (S) P.Ltd"
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <section
        style={{
          backgroundImage:
            `url(${sing})`,
        }}
        className="bg-no-repeat bg-cover py-40 px-4 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-0 md:p-4 max-w-7xl mx-auto text-center space-y-4">
          <h2 className="animate-slideUp text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>
        </div>
      </section>

      <Inquire />
    </>
  );
};

export default Contact;
