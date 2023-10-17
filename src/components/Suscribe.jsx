import React from "react";
import subcribePhone from "../assets/images/subcribePhone.svg";
import Button from "./bits/Button";

const Suscribe = () => {
  return (
    <div className="pt-[7rem] my-[10rem] subscribe-bg flex align-bottom justify-between px-[6rem] rounded-[1.3rem]">
      <div>
        <h2 className="font-roboto text-white text-[2.5rem]">
          Be the first to know when we launch a new feature on the app.
        </h2>
        <p className="my-[2rem] leading-relaxed text-white font-generalsans-light">
          We’re still building some new features. Subscribe for updates <br />{" "}
          and 20% off when we launch. No spam, we promise!
        </p>
        <form action="" className="flex gap-[1.3rem] items-center">
          <input
            type="email"
            className="w-[300px] h-[40px] px-[0.4rem] placeholder:text-[.8rem]  rounded-[.4rem] outline-none text-[.9rem] text-[#4c4c4c]"
            placeholder="Enter your email"
          />
          <Button
            text="Subscribe"
            background="#F58634"
            color="#ffffff"
            fontSize="14px"
            width="140px"
            height="40px"
          />
        </form>
        <p className="my-[1rem] leading-relaxed text-white font-generalsans-light text-[.8rem]">
          We care about your data in our privacy policy
        </p>
      </div>
      <img src={subcribePhone} alt="" className="w-[22rem]" />
    </div>
  );
};

export default Suscribe;
