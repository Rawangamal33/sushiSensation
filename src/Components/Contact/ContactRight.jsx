import { GoDiamond } from "react-icons/go";
import img1 from "../../assets/images.jpg";
import img2 from "../../assets/Image (11).png";
import img3 from "../../assets/Image (12).png";
import img4 from "../../assets/Image (13).png";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokFill } from "react-icons/ri";
import H1com from "../ReusedComponents/H1com";

const ContactRight = () => {
  return (
    <div className="container lg:grid lg:grid-cols-2 lg:items-stretch gap-3 flex flex-wrap  justify-center items-center text-mainTextColor/90">
      <div className="first h-full lg:mt-0 mt-4 borderStyles py-7 px-14 flex flex-col justify-evenly items-center overflow-hidden">
        <H1com title="OPENING HOURS" />
        <div className="flex flex-col justify-evenly items-center gap-4 text-mainTextColor/80 ">
          <div className="flex justify-around items-center gap-4">
            <p>Monday</p>
            <span className="text-mainTextColor/30">
              ..................................
            </span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <p>Tuesday</p>
            <span className="text-mainTextColor/30">
              ..................................
            </span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <p>Wednesday</p>
            <span className="text-mainTextColor/30">
              ..............................
            </span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <p>Thursday</p>
            <span className="text-mainTextColor/30">
              .................................
            </span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <p>Friday</p>
            <span className="text-mainTextColor/30">
              .....................................
            </span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <p>Saturday & Sunday</p>
            <span className="text-mainTextColor/30">................</span>
            <p className="whitespace-nowrap">16:00 - 22:30</p>
          </div>
        </div>
      </div>

      <div className="second h-full  lg:mt-0 mt-4 lg:grid lg:grid-cols-2 lg:gap-3.5 flex flex-wrap gap-3.5 justify-center items-center">
        {[img1, img2, img3, img4].map((img, index) => (
          <NavLink
            key={index}
            to="https://www.instagram.com/sushi__kingdom/"
            target="_blank"
            className="relative inline-block group  "
          >
            <img
              src={img}
              alt="contact insta image"
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute inset-0 bg-black/50 rounded-[16px] flex justify-center items-center text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <IoLogoInstagram />
            </div>
          </NavLink>
        ))}
      </div>
      <div className="third h-full w-full flex justify-center items-center mt-0.5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8481753296255!2d5.555878655880904!3d52.02786349979742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6522ffaf52e19%3A0x1cefa04c868afc8e!2sNakoyashi!5e0!3m2!1sen!2seg!4v1753548501522!5m2!1sen!2seg"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[16px] lg:w-full "
        ></iframe>
      </div>
      <div className="fourth h-full mt-0.5 borderStyles px-14 py-7 flex flex-col justify-evenly items-center gap-2 overflow-hidden">
        <H1com title="GET IN TOUCH" />
        <div className="flex flex-col gap-7 text-mainTextColor/80">
          {[
            { title: "ADDRESS", desc: "23 Greenfield Avenue, Prague 120 00" },
            { title: "PHONE", desc: "+49 1234 567890" },
            { title: "EMAIL", desc: "rawangamakl@gmail.com" },
          ].map((item, index) => (
            <div className="flex justify-between  gap-10" key={index}>
              <p>{item.title}</p>
              <p className="text-end">{item.desc}</p>
            </div>
          ))}

          <div className="flex justify-between  gap-10">
            <p>FOLLOW</p>
            <div className="flex gap-4 text-[13px]">
              <NavLink
                className="icon  hover:bg-gray-950"
                to="https://www.instagram.com/sushi__kingdom/"
                target="_blank"
              >
                <IoLogoInstagram />
              </NavLink>
              <NavLink
                className="icon  hover:bg-gray-950"
                to="https://www.facebook.com/sushikingdomeg/?ref=_xav_ig_profile_page_web_bt#"
                target="_blank"
              >
                <CiFacebook />
              </NavLink>
              <NavLink
                className="icon  hover:bg-gray-950"
                to="https://www.tiktok.com/@sushi_kingdom?fbclid=PAZXh0bgNhZW0CMTEAAafIrgExEQv_moNkw1LjbCwZpmJCRX5RZca_QOhd4cF17bSYbTfLUYA0otsRjQ_aem_USXT0b2zlL_TJQ-jwJVf3g"
                target="_blank"
              >
                <RiTiktokFill />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;

// mmmmmmmm
