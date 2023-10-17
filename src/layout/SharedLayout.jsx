import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const SharedLayout = () => {
  const location = useLocation();

  return (
    <main className="relative">
      {/* {location.pathname === "/" ? <Navbar /> : null} */}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
