import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
