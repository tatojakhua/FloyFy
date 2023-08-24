import React from "react";
import HeroSection from "./HeroSection";
import FeaturePlaylist from "./FeaturePlaylist";
import Footer from "./Footer";
import { background } from "../../assets/index";

const Landing = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center h-screen absolute top-0 left-0 right-0"
    >
      <HeroSection />
      <FeaturePlaylist />
      <Footer />
    </div>
  );
};

export default Landing;
