import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";

const Layout = () => {
  return (
    <div className="relative text-mainTextColor">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
