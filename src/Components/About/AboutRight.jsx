import React from "react";
import aboutImg from "../../assets/Image (8).png";
import aboutImg2 from "../../assets/Image Wrapper (1).png";
import { GoDiamond } from "react-icons/go";
import H1com from "../ReusedComponents/H1com";
const AboutRight = () => {
  return (
    <div className="container lg:mt-0 mt-4.5 text-mainTextColor/90">
      <div className="first lg:grid lg:grid-cols-2 gap-3">
        <div className="firstLeft borderStyles py-8 px-10 flex flex-col justify-between mb-3">
          <h1 className="uppercase text-2xl tracking-wider mb-4">
            Sushi Artistry <br />
            Redefined
          </h1>
          <p className="text-mainTextColor/80 lg:max-w-[350px]">
            Where culinary craftsmanship meets modern elegance. Indulge in the
            finest sushi, expertly curated to elevate your dining experience.
          </p>
        </div>
        <div className="firstRight">
          <img
            src={aboutImg}
            alt="about image"
            className="rounded-[16px]  mb-3 m-auto "
          />
        </div>
      </div>

      <div className="second flex justify-evenly items-center flex-wrap gap-4 mt-2">
        <div className="borderStyles py-5 px-13 flex flex-col justify-center items-center gap-1">
          <p>★ ★ ★ ★ ★</p>
          <h3 className="tracking-widest text-xl">TRIP ADVISOR</h3>
          <p className="max-w-[120px] text-center text-mainTextColor/80">
            BEST STEAK HOUSE PRAGUE
          </p>
        </div>
        <div className="borderStyles py-5 px-13 flex flex-col justify-center items-center gap-1">
          <p>★ ★ ★ ★ ★</p>
          <h3 className="tracking-widest text-xl">TRIP ADVISOR</h3>
          <p className="max-w-[120px] text-center text-mainTextColor/80">
            BEST STEAK HOUSE PRAGUE
          </p>
        </div>
        <div className="borderStyles py-5 px-13 flex flex-col justify-center items-center gap-1">
          <p>★ ★ ★ ★ ★</p>
          <h3 className="tracking-widest text-xl">TRIP ADVISOR</h3>
          <p className="max-w-[120px] text-center text-mainTextColor/80">
            BEST STEAK HOUSE PRAGUE
          </p>
        </div>
      </div>

      <div className="third lg:grid lg:grid-cols-2 gap-3 mt-4">
        <div className="thirdLeft">
          <img
            src={aboutImg2}
            alt="about story image"
            className="rounded-[16px]  mb-3 m-auto"
          />
        </div>
        <div className="thirdRight borderStyles py-8 px-10 flex flex-col justify-between mb-3">
          <H1com title="OUR STORY" />

          <p className="text-mainTextColor/80 lg:max-w-[350px]">
            Founded with a passion for culinary excellence, Qitchen's journey
            began in the heart of Prague. Over years, it evolved into a haven
            for sushi enthusiasts, celebrated for its artful mastery and
            devotion to redefining gastronomy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRight;

// border border-mainTextColor/30 rounded-[16px] lg:mt-0 mt-4.5 py-8 px-18
