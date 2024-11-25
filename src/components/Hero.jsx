import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVid from '../assets/mmshipping.mp4'
import logo from '../assets/logo.png'

const Hero = () => {
  const texts = ["Quality", "Assurance", "Commitment"]; // Texts to display
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true); 
      }, 1000); 
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={heroVid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img
          src={logo}
          alt="MM Shipping Logo"
          className="h-32 md:h-48 mb-6"
        />
        {/* Changing Text with Smooth Transition */}
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-wide transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentTextIndex]}
        </h1>
        <Link to="/about">
        <button className="mt-20 px-6 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition">
          Who We Are
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
