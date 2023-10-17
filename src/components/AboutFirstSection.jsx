import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";

const AboutFirstSection = () => {
  return (
    <div className="">
      <h2 className="font-roboto text-center text-[4vw] pt-[15rem] text-[#242331]">
        About Payarena
      </h2>
      <p className="text-center text-[1.4vw] text-[#797979] mt-[.5rem]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
        ullamcorper sed pharetra sene.
      </p>
      <div className="mt-[2rem]">
        <div className="flex justify-between h-[30rem] ">
          <img src={about1} alt="" className="rounded-[3rem]" />
          <img src={about2} alt="" className="rounded-[3rem]" />
        </div>
        <div className="mt-[2rem]">
          <img src={about3} alt="" className="rounded-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default AboutFirstSection;
