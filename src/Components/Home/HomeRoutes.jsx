import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import imageHome1 from "../../assets/Image (1).png";
import imageHome2 from "../../assets/Image (2).png";
import imageHome3 from "../../assets/Image (3).png";

const HomeRoutes = () => {
  return (
    <div className="container flex flex-col items-center justify-around  gap-4 p-4 lg:p-0">
      {[
        { path: "/menu", imageCover: `${imageHome1}`, title: "MENU" },
        {
          path: "/reservation",
          imageCover: `${imageHome2}`,
          title: "RESERVATION",
        },
        {
          path: "/about",
          imageCover: `${imageHome3}`,
          title: "OUR RESTAURANT",
        },
      ].map((item, index) => (
        <div className="card relative w-full h-[120px] lg:h-auto" key={index}>
          <div className="cardImg h-full">
            <img
              src={item.imageCover}
              alt="menu image"
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div
            className="route absolute right-0 bottom-0 bg-mainBackGroundColor p-1 pt-4 pl-4 rounded-tl-[30%] before:content-['']
        before:w-3 before:h-3 before:bg-transparent before:absolute before:top-[-0.7rem] before:right-0 before:rounded-br-[4px] before:shadow-[2px_2px_#0a0b0a] "
          >
            <NavLink to={`${item.path}`} className="flex  items-center gap-2">
              <span className="generalTextFont text-xs lg:text-[13px]">
                {item.title}
              </span>
              <div className="icon p-1 text-xs lg:text-[14px]">
                <GoArrowRight />
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeRoutes;
