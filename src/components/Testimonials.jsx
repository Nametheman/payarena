import React, { useContext } from "react";
import TestimonialsPagination from "./TestimonialsPagination";
import testimonialImg from "../assets/images/testimonialImg.png";
import testimonialAvatar from "../assets/images/testimonialAvatar.svg";
import Button from "./bits/Button";
import TestimonialContext from "../context/pagination/PaginationContext";
import { AnimatePresence, motion } from "framer-motion";

const Testimonials = () => {
  const { currentIndex, goToNext, goToPrev, direction } =
    useContext(TestimonialContext);

  console.log(currentIndex);
  return (
    <div className="bg-[#F9FAFB] mt-[5rem] px-[9rem] py-[4rem]">
      <p className="px-[1.4rem] py-[0.4rem] w-fit  bg-accent2 text-white rounded-lg font-generalsans-semiBold">
        What makes us stand-out{" "}
      </p>
      <h2 className="font-roboto text-[2.2rem] text-[#1D2939] mt-[1.7rem]">
        Testimonials
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-[#344054]">
          We take security seriously, and our platform is designed to protect
          your <br /> business and your customers from fraud and data breaches.
        </p>
        <TestimonialsPagination />
      </div>
      <div className="w-[100%] max-w-[100%] overflow-hidden">
        <AnimatePresence custom={direction}>
          {currentIndex === 0 && (
            <motion.div
              className="flex items-center justify-between mt-[5rem] px-[2rem]"
              initial={{ x: direction === "left" ? 300 : -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-[1.8rem] text-[#101828] font-roboto-regular">
                  Love the simplicity of the service and <br /> the prompt
                  customer support. We can’t <br /> imagine a day without using
                  it.
                </h2>
                <div className="flex items-center gap-[1rem] mt-[2rem]">
                  <img src={testimonialAvatar} alt="" />
                  <div>
                    <h3 className="font-roboto-regular text-[#101828]">
                      Segun Peters
                    </h3>
                    <p className="font-generalsans-extralight text-[#667085] text-[.9rem]">
                      Data Engineer, TM30 Global Limited.
                    </p>
                  </div>
                </div>
                <Button
                  text="Try Payarena"
                  background="#009BFF"
                  style={{ marginTop: "3rem", borderRadius: "0.6rem" }}
                  width="160px"
                  height="50px"
                />
              </div>
              <div>
                <img src={testimonialImg} alt="" className="w-[32rem]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence custom={direction}>
          {currentIndex === 1 && (
            <motion.div
              className="flex items-center justify-between mt-[5rem] px-[2rem]"
              initial={{ x: direction === "left" ? 300 : -300, opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-[1.8rem] text-[#101828] font-roboto-regular">
                  The simplicity of the service and the <br /> responsive
                  customer support are highly <br /> appreciated. We rely on it
                  every single day.
                </h2>
                <div className="flex items-center gap-[1rem] mt-[2rem]">
                  <img src={testimonialAvatar} alt="" />
                  <div>
                    <h3 className="font-roboto-regular text-[#101828]">
                      Daniel Adekoya{" "}
                    </h3>
                    <p className="font-generalsans-extralight text-[#667085] text-[.9rem]">
                      Frontend Engineer, TM30 Global Limited.
                    </p>
                  </div>
                </div>
                <Button
                  text="Try Payarena"
                  background="#009BFF"
                  style={{ marginTop: "3rem", borderRadius: "0.6rem" }}
                  width="160px"
                  height="50px"
                />
              </div>
              <div>
                <img src={testimonialImg} alt="" className="w-[32rem]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence custom={direction}>
          {currentIndex === 2 && (
            <motion.div
              className="flex items-center justify-between mt-[5rem] px-[2rem]"
              initial={{ x: direction === "left" ? 300 : -300, opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-[1.8rem] text-[#101828] font-roboto-regular">
                  We are incredibly reliant on this service <br /> due to its
                  user-friendly nature and excellent <br /> customer support
                  that is always available.
                </h2>
                <div className="flex items-center gap-[1rem] mt-[2rem]">
                  <img src={testimonialAvatar} alt="" />
                  <div>
                    <h3 className="font-roboto-regular text-[#101828]">
                      Temitope Alli
                    </h3>
                    <p className="font-generalsans-extralight text-[#667085] text-[.9rem]">
                      Lead Product Designer, TM30 Global Limited.
                    </p>
                  </div>
                </div>
                <Button
                  text="Try Payarena"
                  background="#009BFF"
                  style={{ marginTop: "3rem", borderRadius: "0.6rem" }}
                  width="160px"
                  height="50px"
                />
              </div>
              <div>
                <img src={testimonialImg} alt="" className="w-[32rem]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
