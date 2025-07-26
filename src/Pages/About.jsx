import React from "react";
import AboutLeft from "../Components/About/AboutLeft";
import AboutRight from "../Components/About/AboutRight";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 gap-3">
      <AboutLeft />
      <div>
        <AboutRight />
        <Footer />
      </div>
    </div>
  );
};

export default About;
