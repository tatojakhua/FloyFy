import React from "react";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../constants/routes";

const HeroSection = () => {
  return (
    <section className="bg-hero bg-cover bg-center h-screen flex items-center">
      <div className="animate-slideup container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Unleash the Music
        </h1>
        <p className="text-lg font-medium text-gray-400 mb-8">
          Discover, Listen, and Enjoy
        </p>
        <button className="bg-[#2a2a80] hover:bg-blue-800 font-bold text-white px-6 py-2 rounded-full">
          <Link to={SIGN_UP}>Get Started</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
