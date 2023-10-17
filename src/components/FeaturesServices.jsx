import React from "react";
import dollarTag from "../assets/icons/dollarTag.svg";
import check from "../assets/icons/check.svg";
import featuresPhone from "../assets/images/featuresPhone.png";
import Button from "./bits/Button";

const FeaturesServices = () => {
  return (
    <div className="bg-gray-light pt-[1rem] px-[5rem]">
      <div className="flex items-center justify-center gap-[3rem]">
        <button className="flex items-center bg-black text-white px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg">
          <img src={dollarTag} alt="" /> Bills Payments
        </button>
        <button className="flex items-center text-gray-dark px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg">
          Merchant Services{" "}
        </button>
        <button className="flex items-center text-gray-dark px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg">
          Verification Services
        </button>
      </div>
      <div className="flex justify-between mt-[5rem]">
        <div>
          <h2 className="font-roboto text-[1.8rem]">
            Payarena provides delight customers <br /> with a seamless payments
            experience.
          </h2>
          <p className="text-[.88rem] font-generalsans-medium mt-[1rem] leading-relaxed">
            Welcome to Payarena, we give our customers the gift of modern,
            frictionless, <br /> painless payments. Our Value added services let
            our customers pay for <br /> whatever they want. We are the ultimate
            all-in-one payment platform designed <br /> to simplify your
            financial life.
          </p>
          <span className="flex items-center gap-[1rem] mt-[1.5rem]">
            <img src={check} alt="" />
            <p className="text-[.88rem] font-generalsans-medium">
              Create an Account or Sign-up seamlessly
            </p>
          </span>
          <span className="flex items-center gap-[1rem] mt-[1.5rem]">
            <img src={check} alt="" />
            <p className="text-[.88rem] font-generalsans-medium">
              Buy or Make Payments with little to no stress.{" "}
            </p>
          </span>
          <span className="flex items-center gap-[1rem] mt-[1.5rem]">
            <img src={check} alt="" />
            <p className="text-[.88rem] font-generalsans-medium">
              We automatically route payments through the most optimal channels,{" "}
              <br />
              ensuring the highest transaction success rates in the market.{" "}
            </p>
          </span>
          <Button
            text="Learn more"
            background="#009BFF"
            width="150px"
            height="45px"
            fontSize="14px"
            style={{ marginTop: "3rem" }}
          />
        </div>
        <div>
          <img src={featuresPhone} alt="" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesServices;
