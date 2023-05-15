import React from "react";
import HostHeader from "../pages/host/HostHeader";
import { Outlet } from "react-router-dom";
const HostLayout = () => {
  const linkStyle =
    "px-2 py-1 text-sm mx-1 hover:bg-sky-700 hover:text-white rounded-xl";
  return (
    <>
      <HostHeader />
      <Outlet />
    </>
  );
};

export default HostLayout;
