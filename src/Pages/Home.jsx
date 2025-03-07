import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <>
      <div className="flex  h-screen gap-1">
        <div className="w-[300px] justify-between flex flex-col overflow-y-auto h-full hide-scrollbar">
          <Sidebar />
        </div>
        <div className="w-9/12 mt-4 mx-auto  overflow-y-auto h-full hide-scrollbar">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
