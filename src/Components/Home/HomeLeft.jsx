import mainHomeImg from "../../assets/Image.png";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const HomeLeft = () => {
  return (
    <div className="relative lg:h-full h-[400px] ">
      <img
        src={mainHomeImg}
        alt="home img"
        className="w-full h-full object-cover rounded-[8px]"
      />
      <div className="absolute lg:bottom-19 lg:left-18 bottom-10 left-5 lg:text-6xl text-4xl leading-[1.3]">
        <span className="uppercase tracking-[0.2em] inline-block transform scale-y-125">
          Sushi
          <br /> Sensation
        </span>
      </div>
      <div className="flex gap-4 absolute bottom-4 right-4">
        <NavLink
          className="icon  hover:bg-gray-950 text-[20px]"
          to="https://www.instagram.com/sushi__kingdom/"
          target="_blank"
        >
          <IoLogoInstagram />
        </NavLink>
        <NavLink
          className="icon  hover:bg-gray-950 text-[20px]"
          to="https://www.facebook.com/sushikingdomeg/?ref=_xav_ig_profile_page_web_bt#"
          target="_blank"
        >
          <CiFacebook />
        </NavLink>
        <NavLink
          className="icon  hover:bg-gray-950 text-[20px]"
          to="https://www.tiktok.com/@sushi_kingdom?fbclid=PAZXh0bgNhZW0CMTEAAafIrgExEQv_moNkw1LjbCwZpmJCRX5RZca_QOhd4cF17bSYbTfLUYA0otsRjQ_aem_USXT0b2zlL_TJQ-jwJVf3g"
          target="_blank"
        >
          <RiTiktokFill />
        </NavLink>
      </div>
    </div>
  );
};

export default HomeLeft;
