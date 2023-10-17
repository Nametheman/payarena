import React from "react";
import Button from "./bits/Button";

const GetInTouch = () => {
  return (
    <div className="bg-[#F9FAFB] flex justify-between px-[2rem] py-[3rem] items-center rounded-[1.3rem]">
      <div>
        <h2 className="font-roboto text-[1.5rem]">
          Send a message, or just ask us anything
        </h2>
        <p className="font-generalsans-extralight text-[.75rem]">
          One of our business consultant will surely get in touch you within 24
          hours.
        </p>
      </div>
      <form action="" className="flex gap-[1.3rem] items-center">
        <input
          type="email"
          className="w-[300px] h-[40px] px-[0.4rem] placeholder:text-[.8rem] border border-[#D0D5DD] rounded-lg outline-none text-[.9rem] text-[#4c4c4c]"
          placeholder="Enter your email"
        />
        <Button
          text="Get In Touch"
          background="#24B0FF"
          color="#ffffff"
          fontSize="14px"
          width="140px"
          height="40px"
        />
      </form>
    </div>
  );
};

export default GetInTouch;
