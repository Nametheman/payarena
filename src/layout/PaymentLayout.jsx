import React from "react";
import { Outlet } from "react-router-dom";
import PaymentNav from "../components/PaymentNav";
import Suscribe from "../components/Suscribe";

const PaymentLayout = () => {
  return (
    <div className="pt-[100px]">
      <PaymentNav />
      <Outlet />
      <div className="px-[8rem]">
        <Suscribe />
      </div>
    </div>
  );
};

export default PaymentLayout;
