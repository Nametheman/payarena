import React from "react";
import AirtimePaymentPage from "./AirtimePaymentPage";
import billSide from "../assets/images/billsSide.png";
import Button from "../components/bits/Button";
import AirtimeSelect from "../components/paymentpage/AirtimeSelect";
import BillsSelect from "../components/paymentpage/BillsSelect";

const Electricity = () => {
  return (
    <div className="pt-[6rem] px-[8rem] flex justify-between gap-[7rem]">
      <div className="flex-[0.65] py-[10%] px-[2rem]">
        <BillsSelect />
      </div>
      <div className="flex-[1] px-[1.5rem] py-[1rem]">
        <h3 className="font-roboto text-[1.5rem] text-[#464255]">
          Bills Payment
        </h3>
        <p className="text-[#464255]">
          To buy Bills, provide the details below
        </p>

        <div className="mt-[2.5rem]">
          <p className="text-[1rem] text-[#464255] font-generalsans-light">
            Wallet Balance
          </p>
          <h3 className="font-roboto text-[1.5rem] text-[#E66500]">
            ₦ 9,570,000
          </h3>
        </div>
        <form className="mt-[3rem] flex flex-col gap-[1rem] ">
          <div className="flex flex-col gap-[.4rem]  w-[100%] ">
            <label
              htmlFor="amount"
              className="text-[.9rem] font-generalsans-semiBold"
            >
              Electricity Product
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[.4rem]  w-[100%] ">
            <label
              htmlFor="amount"
              className="text-[.9rem] font-generalsans-semiBold"
            >
              Amount
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[.4rem]  w-[100%] ">
            <label
              htmlFor="amount"
              className="text-[.9rem] font-generalsans-semiBold"
            >
              Meter Number
            </label>
            <input
              type="text"
              placeholder="Enter Number"
              className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[.4rem]  w-[100%] ">
            <label
              htmlFor="amount"
              className="text-[.9rem] font-generalsans-semiBold"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Number"
              className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
            />
          </div>
          <Button
            text="PROCEED"
            background="#F58220"
            color="#ffffff"
            style={{ flexDirection: "row-reverse", marginTop: "4rem" }}
            height="50px"
            fontSize="13px"
          />
        </form>
      </div>
      <div className="flex-[0.7] flex justify-end">
        <img src={billSide} alt="airtime_banner.png" className="w-[160px]" />
      </div>
    </div>
  );
};

export default Electricity;
