import React from "react";
import AboutFirstSection from "../components/AboutFirstSection";
import Navbar2 from "../components/Navbar2";
import NewsLetter from "../components/NewsLetter";
import WhatWeDo from "../components/WhatWeDo";
import bg from "../assets/images/about-patterns.svg";
import FeaturesAndBenefits from "../components/FeaturesAndBenefits";
import Testimonials from "../components/Testimonials";
import PaginationProvider from "../context/pagination/PaginationProvider";
import PowerOfPayarena from "../components/PowerOfPayarena";
import TrustedPartners from "../components/TrustedPartners";
import GetInTouch from "../components/GetInTouch";
import Suscribe from "../components/Suscribe";

const About = () => {
  return (
    <section className="w-screen relative">
      <img src={bg} alt="" className="w-[100%] absolute z-[-1]" />
      <div className="px-[9rem]">
        {/* <Navbar2 /> */}
        <AboutFirstSection />
        <WhatWeDo />
        <FeaturesAndBenefits />
      </div>
      <div>
        <PaginationProvider>
          <Testimonials />
        </PaginationProvider>
        <PowerOfPayarena />
        <TrustedPartners />
      </div>
      <div className="px-[9rem] my-[6rem]">
        <GetInTouch />
        <Suscribe />
      </div>
    </section>
  );
};

export default About;
