import { GoDiamond } from "react-icons/go";
const Footer = () => {
  return (
    <div className="text-mainTextColor/90 border border-mainTextColor/30 rounded-[16px] mt-4.5 py-4 ">
      <ul className="flex justify-evenly items-center ">
        <li>By PawalGola</li>
        <li className="flex justify-center items-center gap-4">
          <GoDiamond className="text-[11px] text-mainTextColor/20" />{" "}
          <span>Licensing</span>
        </li>
        <li className="flex justify-center items-center  gap-4">
          {" "}
          <GoDiamond className="text-[11px] text-mainTextColor/20" />{" "}
          <span>Styleguide</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
