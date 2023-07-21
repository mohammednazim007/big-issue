import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";

const Layout = () => {
  return (
    <div>
      {/* header navbar */}
      <Header />

      {/* outlet to contain all pages */}
      <Outlet />
    </div>
  );
};

export default Layout;
