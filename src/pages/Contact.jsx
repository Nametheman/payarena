import React from "react";
import Navbar2 from "../components/Navbar2";
import bg from "../assets/images/about-patterns.svg";
import contactMail from "../assets/images/contactMail.svg";
import contactPhone from "../assets/images/contactPhone.svg";
import contactVector from "../assets/images/contactVector.svg";
import analytics from "../assets/images/analytics.svg";
import journey from "../assets/images/journey.svg";
import Button from "../components/bits/Button";
import arrow from "../assets/icons/arrow.svg";
import Suscribe from "../components/Suscribe";
import arrowRight from "../assets/icons/icon.svg";
import Faqs from "../components/Faqs";

const Contact = () => {
  return (
    <section className="w-screen relative">
      <img src={bg} alt="" className="w-[100%] absolute z-[-1]" />
      <div className="px-[9rem]">
        {/* <Navbar2 /> */}
        <h2 className="font-roboto text-[#242331] text-[3.75rem] text-center pt-[15rem]">
          Get in touch today!
        </h2>
        <p className="text-center text-[1.4vw] text-[#797979] mt-[.5rem] mb-[7rem]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
          ullamcorper sed pharetra sene.
        </p>
      </div>
      <div className="px-[12rem] flex gap-[3rem] mt-[15rem]">
        <div className="flex-[.98]">
          <h2 className="font-roboto text-[#242331] text-[2.2rem] mb-[2rem]">
            Contact Us
          </h2>
          <p className="text-[#7A7D9C] font-generalsans-extralight mb-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing dolor <br />{" "}
            lobortiss arcu enim urna adipiscing p.
          </p>
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <img src={contactMail} alt="" className="w-[40px]" />
            <p className="font-generalsans-semiBold text-[.9rem]">
              contact@saas.com
            </p>
          </div>
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <img src={contactPhone} alt="" className="w-[40px]" />
            <p className="font-generalsans-semiBold text-[.9rem]">
              (478) 570 - 7804
            </p>
          </div>
          <img src={contactVector} alt="" className="w-[350px]" />
        </div>
        <form className="shadow-contact-form border border-[#EFF0F6] rounded-[2rem] py-[1.9rem] px-[2rem] bg-white flex-[1]">
          <div className="flex items-center gap-[1rem] justify-between">
            <div className="flex flex-col gap-[.4rem]  w-[100%] ">
              <label
                htmlFor="name"
                className="text-[.9rem] font-generalsans-semiBold"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[.4rem]  w-[100%] ">
              <label
                htmlFor="name"
                className="text-[.9rem] font-generalsans-semiBold"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Email address"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-[1rem] justify-between mt-[2rem]">
            <div className="flex flex-col gap-[.4rem]  w-[100%] ">
              <label
                htmlFor="name"
                className="text-[.9rem] font-generalsans-semiBold"
              >
                Phome
              </label>
              <input
                type="phone"
                placeholder="(123) 456 - 789"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[.4rem]  w-[100%] ">
              <label
                htmlFor="name"
                className="text-[.9rem] font-generalsans-semiBold"
              >
                Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-[1rem] justify-between mt-[2rem]">
            <div className="flex flex-col gap-[.4rem]  w-[100%] ">
              <label
                htmlFor="message"
                className="text-[.9rem] font-generalsans-semiBold"
              >
                Message
              </label>
              {/* <input
                type="phone"
                placeholder="(123) 456 - 789"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[55px] w-[100%] px-[1rem] outline-none"
              /> */}
              <textarea
                name="message"
                className="border border-[#EFF0F6] rounded-[.4rem] h-[140px] w-[100%] px-[1rem] outline-none resize-none"
              ></textarea>
            </div>
          </div>
          <Button
            text="Send message"
            background="#00AFEF"
            color="#ffffff"
            icon={arrow}
            iconType="img"
            style={{ flexDirection: "row-reverse", marginTop: "2rem" }}
            width="170px"
            height="50px"
          />
        </form>
      </div>
      <div className="px-[12rem] mt-[8rem]">
        <h2 className="font-roboto text-center  text-[#242331] text-[2.2rem] mb-[2rem]">
          Need more help?{" "}
        </h2>
        <p className="text-[#7A7D9C] text-center font-generalsans-extralight mb-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing dolor <br />{" "}
          lobortiss arcu enim urna adipiscing p.
        </p>
        <div className="flex gap-[3rem] justify-between items-center">
          <div className="border border-[#EFF0F6] shadow-contact-form pt-[1.8rem] pb-[3rem] px-[1.5rem] rounded-[.7rem] w-[100%]">
            <img src={analytics} alt="" className="w-[75px] mb-[1.3rem]" />
            <h3 className="font-generalsans-medium text-[1.5rem] mb-[.7rem]">
              Support
            </h3>
            <p className="font-generalsans-light text-[.9rem] mb-[.7rem] text-[#7A7D9C]">
              Lorem ipsum dolor sit amet, conse <br /> adipiscing elit, sed do
              eiusmod
            </p>
            <p className="text-footerHead font-generalsans-medium text-[.9rem] flex items-center gap-2">
              support@up-ng.com <img src={arrowRight} alt="" />
            </p>
          </div>
          <div className="border border-[#EFF0F6] shadow-contact-form pt-[1.8rem] pb-[3rem] px-[1.5rem] rounded-[.7rem] w-[100%]">
            <img src={journey} alt="" className="w-[75px] mb-[1.3rem]" />
            <h3 className="font-generalsans-medium text-[1.5rem] mb-[.7rem]">
              Partners
            </h3>
            <p className="font-generalsans-light text-[.9rem] mb-[.7rem] text-[#7A7D9C]">
              Lorem ipsum dolor sit amet, conse <br /> adipiscing elit, sed do
              eiusmod
            </p>
            <p className="text-footerHead font-generalsans-medium text-[.9rem] flex items-center gap-2">
              partners@up-ng.com <img src={arrowRight} alt="" />
            </p>
          </div>
          <div className="border border-[#EFF0F6] shadow-contact-form pt-[1.8rem] pb-[3rem] px-[1.5rem] rounded-[.7rem] w-[100%]">
            <img src={journey} alt="" className="w-[75px] mb-[1.3rem]" />
            <h3 className="font-generalsans-medium text-[1.5rem] mb-[.7rem]">
              Billing
            </h3>
            <p className="font-generalsans-light text-[.9rem] mb-[.7rem] text-[#7A7D9C]">
              Lorem ipsum dolor sit amet, conse <br /> adipiscing elit, sed do
              eiusmod
            </p>
            <p className="text-footerHead font-generalsans-medium text-[.9rem] flex items-center gap-2">
              billing@up-ng.com <img src={arrowRight} alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="px-[28%] mt-[8rem]">
        <Faqs />
      </div>
      <div className="px-[9rem] my-[6rem]">
        <Suscribe />
      </div>
    </section>
  );
};

export default Contact;
