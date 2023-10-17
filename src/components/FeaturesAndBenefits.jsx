import React from "react";
import FeaturesServices from "./FeaturesServices";

const FeaturesAndBenefits = () => {
  return (
    <div className="mt-[12rem]">
      {" "}
      <p className="text-center mx-auto my-0 px-[1.4rem] py-[0.4rem] w-fit  bg-accent2 text-white rounded-lg font-generalsans-semiBold">
        Features and Benefits{" "}
      </p>
      <h2 className="text-center font-roboto text-[2.6rem] text-footer mt-[1.8rem] leading-snug">
        Our cutting-edge financial solution drives global <br /> business
        innovation to new frontiers.{" "}
      </h2>
      <p className="text-center text-gray-dark font-generalsans-light text-[1rem]  mt-[.7rem]">
        We offer our clients cost efficient cutting edge solutions that
        positively impact <br /> their bottom lines.
      </p>
      <div className="mt-[4rem]">
        <FeaturesServices />
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
