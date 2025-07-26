import React from "react";
import menuData from "../../data/dp";
import { GoDiamond } from "react-icons/go";
import H1com from "../ReusedComponents/H1com";

const MenuRightItems = () => {
  return (
    <div className="borderStyles lg:mt-0 mt-4.5 py-8 px-18">
      <ul className="tracking-wider flex justify-center items-center gap-2">
        <li className="listStyles border-mainTextColor/30">MAKI</li>
        <li className="listStyles border-mainTextColor/30">URAMAKI</li>
        <li className="listStyles border-mainTextColor/30">SPECIAL ROLLS</li>
      </ul>
      <div className="container text-mainTextColor/90 mt-20 flex flex-col items-center justify-center gap-22">
        {menuData.map((item) => (
          <div className="eachCatgory">
            <H1com title={item.category} />

            {item.items.map((one) => (
              <div className="item flex items-center justify-evenly gap-5 mb-10">
                <img
                  src={one.image}
                  alt="dish image"
                  className="rounded-[16px] mr-2"
                />
                <div>
                  <h1 className="text-xl uppercase tracking-wide mb-1">
                    {one.name}
                  </h1>
                  <p className="text-mainTextColor/60 ">{one.description}</p>
                </div>
                <span className="text-xl">{one.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuRightItems;
