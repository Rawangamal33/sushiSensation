import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  const [menuShown, setMenuShown] = useState(false);
  const toggleBtn = () => {
    setMenuShown((prev) => !prev);
  };
  return (
    <div className="absolute top-7 left-9 z-50 bg-mainBackGroundColor py-3 px-5 rounded-[8px] tracking-wider text-mainTextColor/90 lg:flex lg:justify-center lg:items-center flex flex-col gap-2">
      <section className="flex justify-center items-center">
        <button className="lg:hidden cursor-pointer" onClick={toggleBtn}>
          <div className=" w-8 h-[2.4px] rounded-[4px] bg-mainTextColor before:w-8 before:h-[2px] before:rounded-[4px] before:bg-mainTextColor before:inline-block before:transform before:translate-x-0 before:-translate-y-1.5 after:w-8 after:h-[2px] after:rounded-[4px] after:bg-mainTextColor after:inline-block after:transform after:translate-x-0 after:-translate-y-12 "></div>
        </button>
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[7.5rem] h-[1.7rem] object-cover lg:hidden"
          />
        </NavLink>
      </section>
      <nav>
        <ul
          className={`${
            styles.animateMenu
          } lg:flex lg:flex-row lg:items-center lg:gap-5  ${
            menuShown ? "flex flex-col gap-2.5" : "hidden"
          } `}
        >
          <li>
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[7.5rem] h-[1.7rem] object-cover lg:block hidden"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "listStyles" : "")}
            >
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className={({ isActive }) => (isActive ? "listStyles" : "")}
              style={{
                whiteSpace: "nowrap",
              }}
            >
              Book A Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "listStyles" : "")}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "listStyles" : "")}
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
