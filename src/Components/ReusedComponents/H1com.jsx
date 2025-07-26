import React from "react";
import { GoDiamond } from "react-icons/go";

const H1com = ({ title }) => {
  return (
    <h1 className="text-3xl uppercase tracking-wider text-center  mb-10 flex justify-center items-center  ">
      <GoDiamond className="text-[11px] text-mainTextColor/20" />

      <span className=" block h-px w-15 bg-mainTextColor/20"></span>
      <span className="mx-5">{title} </span>
      <span className=" block h-px w-15  bg-mainTextColor/20"></span>
      <GoDiamond className="text-[11px] text-mainTextColor/20" />
    </h1>
  );
};

export default H1com;
